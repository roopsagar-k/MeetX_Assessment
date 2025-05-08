import Joi from "joi";

export const bookingValidation = Joi.object({
  activityId: Joi.string().hex().length(24).required(),
});
