import { asyncHandler } from "../services/helpers";
import Activity from "../models/activity.model";
import ApiResponse from "../utils/api-response.utils";
import ApiError from "../utils/api-error.utils";
import { Request, Response, NextFunction } from "express";
import { activityValidation } from "../validators/activity.validation";

export const getAllActivities = asyncHandler(
  async (_req: Request, res: Response, _next: NextFunction) => {
    const activities = await Activity.find();
    res
      .status(200)
      .json(new ApiResponse(200, activities, "Activities fetched"));
  }
);

export const getActivityById = asyncHandler(
  async (req: Request, res: Response, _next: NextFunction) => {
    const { id } = req.params;
    const activity = await Activity.findById(id);
    if (!activity) throw ApiError.notFound("Activity not found");
    res.status(200).json(new ApiResponse(200, activity, "Activity fetched"));
  }
);


export const createActivity = asyncHandler(
  async (req: Request, res: Response) => {
    const { error, value } = activityValidation.validate(req.body);
    if (error) throw ApiError.badRequest(error.details[0].message);

    const newActivity = await Activity.create(value);
    res.status(201).json(new ApiResponse(201, newActivity, "Activity created"));
  }
);
