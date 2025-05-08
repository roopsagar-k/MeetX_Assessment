import Joi from "joi";

export const registerValidation = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": "Name is required for registering the user.",
  }),
  email: Joi.string().email().required().messages({
    "string.email": "Invalid email address.",
    "string.empty": "Email is required for registering the user.",
  }),
  password: Joi.string().min(6).required().messages({
    "string.min": "Password must be at least 6 characters.",
    "string.empty": "Password is required for registering the user.",
  }),
  phoneNumber: Joi.string().required().messages({
    "string.empty": "Phone number is required for registering the user.",
  }),
});


export const loginValidation = Joi.object({
  email: Joi.string().email().required().messages({
    "string.email": "Invalid email address.",
    "string.empty": "Email is required for logging in.",
  }),
  password: Joi.string().required().messages({
    "string.empty": "Password is required for logging in.",
  }),
});
