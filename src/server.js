const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const { PORT } = require("./config/env");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);
// Routes
app.use("/auth", authRoutes);

// Connect to Database and Start Server
connectDB().then(() => {
  app.listen(PORT, () =>
    console.log(`Server is running on http://localhost:${PORT}`)
  );
});
