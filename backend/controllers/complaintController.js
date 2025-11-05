import Complaint from "../models/Complaint.js";

// Create a new complaint
export const createComplaint = async (req, res) => {
  try {
    const { description, location, address } = req.body;

    // Generate unique complaintId
    const complaintId = "C" + Math.floor(100000 + Math.random() * 900000);

    const newComplaint = new Complaint({
      complaintId,
      description,
      location,
      address,
    });

    await newComplaint.save();
    res.status(201).json({ message: "Complaint created successfully", complaint: newComplaint });
  } catch (error) {
    res.status(500).json({ message: "Error creating complaint", error: error.message });
  }
};

// Get all complaints (for admin)
export const getAllComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find().sort({ createdAt: -1 });
    res.status(200).json(complaints);
  } catch (error) {
    res.status(500).json({ message: "Error fetching complaints", error: error.message });
  }
};

// Get complaint by ID
export const getComplaintById = async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id);
    if (!complaint) {
      return res.status(404).json({ message: "Complaint not found" });
    }
    res.status(200).json(complaint);
  } catch (error) {
    res.status(500).json({ message: "Error fetching complaint", error: error.message });
  }
};
