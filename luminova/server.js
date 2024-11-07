const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const admin = require("firebase-admin");
require("dotenv").config(); // Load environment variables from .env file
const nodemailer = require("nodemailer");

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
        from: process.env.EMAIL_USER, // Sender address
        to: email, // Recipient's email (reservation email)
        subject: "Reservation Confirmation - Luminova",
        html: `
          <html>
            <head>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  background-color: #ffffff; /* White background */
                  color: #333333; /* Dark text color for better readability */
                  margin: 0;
                  padding: 20px;
                }
                .container {
                  max-width: 600px;
                  margin: auto;
                  padding: 30px;
                  background-color: #f3f3f3; /* Light gray background */
                  border-radius: 8px;
                  border: 1px solid #ddd; /* Light border for clean look */
                }
                h1 {
                  color: #6a1b9a; /* Purple accent color */
                  font-size: 26px;
                  text-align: center;
                  margin-bottom: 20px;
                }
                p {
                  font-size: 16px;
                  line-height: 1.5;
                }
                .details {
                  background-color: #ffffff; /* White background for details section */
                  padding: 15px;
                  margin-top: 20px;
                  border-radius: 5px;
                  border: 1px solid #ddd; /* Light border */
                }
                .footer {
                  margin-top: 20px;
                  font-size: 14px;
                  text-align: center;
                  color: #888; /* Light gray text for footer */
                }
                .footer a {
                  color: #6a1b9a; /* Purple link color */
                  text-decoration: none;
                  margin: 0 10px;
                  font-size: 16px;
                }
                .social-links {
                  margin-top: 10px;
                  text-align: center;
                }
                .social-links a {
                  color: #6a1b9a;
                  text-decoration: none;
                  margin: 0 10px;
                  font-size: 18px;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <h1>Reservation Confirmation</h1>
                <p>Dear ${name},</p>
                <p>Thank you for choosing Luminova! Your reservation has been successfully received. Please find the details of your reservation below:</p>
      
                <div class="details">
                  <p><strong>Name:</strong> ${name}</p>
                  <p><strong>Phone:</strong> ${phone}</p>
                  <p><strong>Email:</strong> ${email}</p>
                  <p><strong>People:</strong> ${people}</p>
                  <p><strong>Message:</strong> ${message}</p>
                </div>
      
                <p>Our team will review the details and reach out to you shortly to confirm your reservation. We look forward to serving you!</p>
      
                <div class="footer">
                  <p>Warm regards,</p>
                  <p><strong>Luminova Team</strong></p>
                  <p>Your trusted partner in delivering unforgettable experiences</p>
      
                  <div class="social-links">
                    <p>Stay connected with us:</p>
                    <a href="https://facebook.com/luminova" target="_blank">Facebook</a> |
                    <a href="https://twitter.com/luminova" target="_blank">Twitter</a> |
                    <a href="https://instagram.com/luminova" target="_blank">Instagram</a>
                  </div>
      
                  <p><strong>Luminova</strong><br />
                  123 Galle Road, Colombo, 00300, Sri Lanka<br />
                  Phone: +94 76 941 7154 | Email: support@luminova.com</p>
                </div>
              </div>
            </body>
          </html>
        `,
      };
      

    // Send the email
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

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
