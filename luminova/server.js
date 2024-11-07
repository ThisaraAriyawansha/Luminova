// backend/server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const admin = require("firebase-admin");
require("dotenv").config(); // Load environment variables from .env file

// Initialize Firebase Admin SDK with the service account key
const serviceAccount = require("./luminova-fb0b4-firebase-adminsdk-phal3-d6d2b8b2c1.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DATABASE_URL, // Use the environment variable for DB URL
});

const db = admin.firestore();
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// POST route to handle reservations
app.post("/api/reservation", async (req, res) => {
  try {
    const { name, phone, email, people, message } = req.body;

    // Validate required fields
    if (!name || !phone || !email || !people) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // Add reservation to Firestore
    const reservationRef = await db.collection("reservations").add({
      name,
      phone,
      email,
      people,
      message,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    });

    res.status(200).json({ message: "Reservation successfully saved!", id: reservationRef.id });
  } catch (error) {
    console.error("Error adding reservation:", error);
    res.status(500).json({ error: "There was an error saving the reservation." });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
