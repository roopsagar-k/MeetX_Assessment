import mongoose, { Schema, Document, Types } from "mongoose";

export interface IBooking extends Document {
  user: Types.ObjectId;
  activity: Types.ObjectId;
  bookedAt: Date;
}

const bookingSchema = new Schema<IBooking>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    activity: { type: Schema.Types.ObjectId, ref: "Activity", required: true },
    bookedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Booking = mongoose.model<IBooking>("Booking", bookingSchema);
export default Booking;
