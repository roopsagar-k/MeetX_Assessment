import Joi from "joi";

export const activityValidation = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  location: Joi.string().required(),
  date: Joi.date().iso().required(),
});
