"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const helmet_1 = __importDefault(require("helmet"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
// Initialize Express app
const app = (0, express_1.default)();
// Set the port dynamically from environment variables or use a default value of 3000
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
// Security configurations
// Set up rate limiting to protect against brute-force attacks
const limiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000,
    max: 100, // Maximum requests per IP within the window
});
app.use(limiter); // Apply rate limiting to all requests
app.use((0, helmet_1.default)()); // Apply helmet middleware for setting secure HTTP headers
// Middleware configurations
app.use(express_1.default.json()); // Parse incoming requests with JSON payloads
app.use(express_1.default.urlencoded({ extended: true })); // Parse URL-encoded payloads
// API routing
app.use("/api", routes_1.default); // Mount the router on the '/api' path
// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
