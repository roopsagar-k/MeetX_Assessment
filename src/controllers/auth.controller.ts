import { Request, Response, NextFunction } from "express";
import { asyncHandler } from "../services/helpers";
import ApiError from "../utils/api-error.utils";
import { AuthService } from "../services/auth.service";
import ApiResponse from "../utils/api-response.utils";
import {
  registerValidation,
  loginValidation,
} from "../validators/auth.validation";

export const registerController = asyncHandler(
  async (req: Request, res: Response, _next: NextFunction) => {
    const { error } = registerValidation.validate(req.body);
    if (error) {
      throw ApiError.badRequest(error.details[0].message);
    }

    const { name, email, password, phoneNumber } = req.body;

    const newUser = await AuthService.registerUser(
      name,
      password,
      email,
      phoneNumber
    );
    console.log(newUser);

    res
      .status(201)
      .json(new ApiResponse(201, newUser, "User successfully created"));
  }
);

export const loginController = asyncHandler(
  async (req: Request, res: Response, _next: NextFunction) => {
    const { error } = loginValidation.validate(req.body);
    if (error) {
      throw ApiError.badRequest(error.details[0].message);
    }

    const { email, password } = req.body;

    const token = await AuthService.loginUser(email, password);
    res
      .status(200)
      .cookie("token", token, {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
      })
      .json(
        new ApiResponse(200, { token }, "User authenticated successfully.")
      );
  }
);

export const logoutController = asyncHandler(
  async (req: Request, res: Response) => {
    const userId = req.user?.id;
    if (!userId) {
      throw ApiError.unauthorized("User not authenticated");
    }
    res
      .status(200)
      .clearCookie("token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
      })
      .json(new ApiResponse(200, {}, "User logged out from the session"));
  }
);

export const getCurrentUser = asyncHandler(
  async (req: Request, res: Response, _next: NextFunction) => {
    const user = req.user;
    res
      .status(200)
      .json(new ApiResponse(200, user, "User fetched successfully"));
  }
);
