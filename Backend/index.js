import express from "express";
import mongoose from "mongoose";
import { Item } from "./models/itemmodel.js";
import cors from "cors";
import dotenv from "dotenv";
import cloudinary from "cloudinary";
import multer from "multer";
import { PassThrough } from "stream";

dotenv.config();

const PORT = process.env.PORT;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();
app.use(express.json());
app.use(cors());

// ============================== Multer Configuration ==============================
const storage = multer.memoryStorage(); // Store files in memory
const upload = multer({ storage: storage });

// ============================== Get All Items ==============================
app.get("/item", async (req, res) => {
  try {
    const items = await Item.find();
    return res.status(200).json({
      count: items.length,
      data: items,
    });
  } catch (error) {
    console.error("Error fetching items:", error);
    res.status(500).send({ message: error.message });
  }
});

// ============================== Post Item ==============================
app.post("/item", upload.single("file"), async (req, res) => {
  try {
    const fileBuffer = req.file.buffer; // Access the file buffer from memory

    // Upload to Cloudinary
    const uploadStream = cloudinary.v2.uploader.upload_stream(
      { folder: "lost-and-found" }, // Specify a folder in Cloudinary
      async (error, result) => {
        if (error) {
          console.error("Error uploading to Cloudinary:", error);
          return res.status(500).send({ message: "Error uploading file" });
        }

        // Save the item to the database
        const newItem = {
          name: req.body.name,
          email: req.body.email,
          phoneno: req.body.phoneno,
          title: req.body.title,
          description: req.body.description,
          location: req.body.location, // Add location field
          image: result.secure_url, // Save Cloudinary URL
        };

        const item = await Item.create(newItem);
        return res.status(200).send(item);
      }
    );

    // Pipe the file buffer to Cloudinary
    const readableStream = new PassThrough();
    readableStream.end(fileBuffer);
    readableStream.pipe(uploadStream);
  } catch (error) {
    console.error("Error uploading file:", error);
    res.status(500).send("Error uploading file");
  }
});

// ============================== Get Item by ID ==============================
app.get("/item/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const item = await Item.findById(id);
    if (!item) {
      return res.status(404).send({ message: "Item not found" });
    }
    return res.status(200).json(item);
  } catch (error) {
    console.error("Error fetching item by ID:", error);
    res.status(500).send({ message: error.message });
  }
});

// ============================== Delete Item ==============================
app.delete("/item/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Item.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).send({ message: "Item not found" });
    }
    return res.status(200).send({ message: "Item deleted" });
  } catch (error) {
    console.error("Error deleting item:", error);
    res.status(500).send({ message: error.message });
  }
});

// ============================== Start Server ==============================
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});

const mongoURL = process.env.MDB_CONNECTION_STRING;

mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.log(error);
  });
