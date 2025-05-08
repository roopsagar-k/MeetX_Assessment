import { Request, Response } from "express";
import { asyncHandler } from "../services/helpers";
import Booking from "../models/bookings.model";
import Activity from "../models/activity.model";
import ApiResponse from "../utils/api-response.utils";
import { bookingValidation } from "../validators/booking.validation";
import ApiError from "../utils/api-error.utils";

export const bookActivity = asyncHandler(
  async (req: Request, res: Response) => {
    const { error, value } = bookingValidation.validate(req.body);
    if (error) throw ApiError.badRequest(error.details[0].message);

    const activity = await Activity.findById(value.activityId);
    if (!activity) throw ApiError.notFound("Activity not found");

    const booking = await Booking.create({
      user: req.user?.id,
      activity: value.activityId,
    });

    res
      .status(201)
      .json(new ApiResponse(201, booking, "Activity booked successfully"));
  }
);

export const getMyBookings = asyncHandler(
  async (req: Request, res: Response) => {
    const bookings = await Booking.find({ user: req.user?.id }).populate(
      "activity"
    );
    res.status(200).json(new ApiResponse(200, bookings, "My bookings fetched"));
  }
);
