import express from "express";
import { authenticateJWT } from "../middlewares/auth.middleware";
import { bookActivity, getMyBookings } from "../controllers/booking.controller";

const bookingRouter = express.Router();

bookingRouter
  .post("/", authenticateJWT, bookActivity)
  .get("/me", authenticateJWT, getMyBookings);

export default bookingRouter;
