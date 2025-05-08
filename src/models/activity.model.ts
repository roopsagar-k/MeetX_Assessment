import mongoose, { Schema, Document } from "mongoose";

export interface IActivity extends Document {
  title: string;
  description: string;
  location: string;
  date: Date;
}

const activitySchema = new Schema<IActivity>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    date: { type: Date, required: true },
  },
  { timestamps: true }
);

const Activity = mongoose.model<IActivity>("Activity", activitySchema);
export default Activity;
