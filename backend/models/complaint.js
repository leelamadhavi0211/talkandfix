import mongoose from "mongoose";

const complaintSchema = new mongoose.Schema(
  {
    complaintId: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: {
        lat: Number,
        lng: Number,
      },
      required: true,
    },
    address: {
      type: String,
    },
    status: {
      type: String,
      enum: ["Pending", "Received", "Solved", "Rejected"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Complaint", complaintSchema);
