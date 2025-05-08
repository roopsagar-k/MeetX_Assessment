import authRouter from "./auth.route";
import express from 'express';
import activityRouter from "./activity.route";
import bookingRouter from "./booking.route";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/activities", activityRouter);
router.use("/bookings", bookingRouter);

export default router;