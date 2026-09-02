const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let bookings = [];

app.post("/api/book-ride", (req, res) => {
  const { pickup, destination, date, service } = req.body;
  const booking = { id: bookings.length + 1, pickup, destination, date, service };
  bookings.push(booking);
  res.status(201).json({ message: "Ride request received", booking });
});

app.get("/api/bookings", (req, res) => {
  res.json(bookings);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Veyora backend running on http://localhost:${PORT}`));