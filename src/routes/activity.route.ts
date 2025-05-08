import express from "express";
import {
  getAllActivities,
  getActivityById,
  createActivity
} from "../controllers/activity.controller";
import { authenticateJWT } from "../middlewares/auth.middleware";

const activityRouter = express.Router();

activityRouter
  .get("/", getAllActivities)
  .get("/:id", getActivityById)
  .post("/", authenticateJWT, createActivity); // Optional should be allowed only for admin since there is no role based authentication now for the assesment i just implement a normal protected route.

export default activityRouter;
