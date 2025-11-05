import express from "express";
import Complaint from "../models/complaint.js";

const router = express.Router();

//  Create a new complaint
router.post("/", async (req, res) => {
  try {
    //  Extract fields from the request body
    const { description, latitude, longitude, address } = req.body;

    console.log(" Received complaint data:", req.body);

    //  Validate required fields
    if (!description || latitude === undefined || longitude === undefined) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    //  Construct new complaint
    const newComplaint = new Complaint({
      complaintId: "C" + Math.floor(100000 + Math.random() * 900000),
      description,
      location: { lat: latitude, lng: longitude },
      address,
      status: "Pending",
    });

    const savedComplaint = await newComplaint.save();

    console.log(" Complaint saved:", savedComplaint);

    res.status(201).json({
      message: "Complaint submitted successfully",
      complaint: savedComplaint,
    });
  } catch (error) {
    console.error("❌ Error creating complaint:", error);
    res.status(500).json({ message: "Error submitting complaint", error });
  }
});
 //2️⃣ FETCH all complaints (for admin or testing)
router.get("/", async (req, res) => {
  try {
    const complaints = await Complaint.find().sort({ createdAt: -1 });
    res.json(complaints);
  } catch (error) {
    res.status(500).json({ message: "Error fetching complaints", error });
  }
});


// ✅ 3️⃣ FETCH complaint by ID (for tracking)
router.get("/:id", async (req, res) => {
  try {
    const complaint = await Complaint.findOne({ complaintId: req.params.id });
    if (!complaint) {
      return res.status(404).json({ message: "Complaint not found" });
    }
    res.json(complaint);
  } catch (error) {
    console.error("❌ Error fetching complaint:", error);
    res.status(500).json({ message: "Error fetching complaint", error });
  }
});
export default router;
