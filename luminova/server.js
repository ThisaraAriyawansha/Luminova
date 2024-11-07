const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const admin = require("firebase-admin");
require("dotenv").config();
const nodemailer = require("nodemailer");

// Initialize Firebase Admin SDK
const serviceAccount = require("./luminova-fb0b4-firebase-adminsdk-phal3-d6d2b8b2c1.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DATABASE_URL,
});

const db = admin.firestore();
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Set up Nodemailer transport
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

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

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Event Reservation Confirmation - Luminova Events",
        html: `
          <html>
            <head>
              <style>
                body {
                  font-family: 'Arial', sans-serif;
                  margin: 0;
                  padding: 0;
                  background-color: #ffffff;
                  color: #333;
                }
                .container {
                  width: 100%;
                  max-width: 500px;
                  margin: 30px auto;
                  padding: 20px;
                  background-color: #fff;
                }
                h2 {
                  font-size: 22px;
                  color: #6a1b9a;
                  margin-bottom: 15px;
                  text-align: center;
                }
                p {
                  font-size: 14px;
                  line-height: 1.4;
                  color: #555;
                  text-align: center;
                  margin-bottom: 10px;
                }
                .details {
                  margin-top: 20px;
                  padding: 15px;
                  background-color: #f9f9f9;
                  border-radius: 6px;
                  border: 1px solid #ddd;
                }
                .details p {
                  margin-bottom: 8px;
                }
                .footer {
                  margin-top: 20px;
                  font-size: 12px;
                  text-align: center;
                  color: #888;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <h2>Thank You for Your Reservation!</h2>
                <p>Dear ${name},</p>
                <p>We’ve received your reservation request and will contact you soon.</p>
      
                <div class="details">
                  <p><strong>Reservation Details:</strong></p>
                  <p><strong>Name:</strong> ${name}</p>
                  <p><strong>Phone:</strong> ${phone}</p>
                  <p><strong>Email:</strong> ${email}</p>
                  <p><strong>People:</strong> ${people}</p>
                  <p><strong>Message:</strong> ${message}</p>
                </div>
      
                <div class="footer">
                  <p>&copy; ${new Date().getFullYear()} Luminova Events</p>
                </div>
              </div>
            </body>
          </html>
        `,
      };
      

    // Send confirmation email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error sending email:", error);
        return res.status(500).json({ error: "Error sending email." });
      }
      console.log("Email sent:", info.response);
    });

    res.status(200).json({
      message: "Reservation successfully saved and confirmation email sent!",
      id: reservationRef.id,
    });
  } catch (error) {
    console.error("Error adding reservation:", error);
    res.status(500).json({ error: "There was an error saving the reservation." });
  }
});


app.post('/api/subscribe', async (req, res) => {
    const { email } = req.body;
  
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }
  
    try {
      // Save email to Firebase
      await db.collection('subscribers').add({
        email,
        subscribedAt: admin.firestore.FieldValue.serverTimestamp(),
      });
  
      res.status(200).json({ message: 'Subscription successful!' });
    } catch (error) {
      console.error('Error saving email:', error);
      res.status(500).json({ message: 'Failed to subscribe, please try again later.' });
    }
  });


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
