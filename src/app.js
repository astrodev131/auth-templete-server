const bodyParser = require("body-parser");
const morgan = require("morgan");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const errorMiddleware = require("./middlewares/errorMiddleware");

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());

// Database
connectDB();

// Routes
app.use("/api/users", userRoutes);

// Error Handling
app.use(errorMiddleware);

module.exports = app;
