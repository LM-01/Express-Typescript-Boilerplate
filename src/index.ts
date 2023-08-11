import express from "express";
import router from "./routes";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

// Initialize Express app
const app = express();

// Set the port dynamically from environment variables or use a default value of 3000
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

// Security configurations
// Set up rate limiting to protect against brute-force attacks
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // Window duration: 15 minutes
  max: 100, // Maximum requests per IP within the window
});
app.use(limiter); // Apply rate limiting to all requests

app.use(helmet()); // Apply helmet middleware for setting secure HTTP headers

// Middleware configurations
app.use(express.json()); // Parse incoming requests with JSON payloads
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded payloads

// API routing
app.use("/api", router); // Mount the router on the '/api' path

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
