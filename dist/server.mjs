import url from "url";
import path from "path";
import dotenv from "dotenv";
import http from "http";
import express from "express";
import logger from "morgan";
import cors from "cors";
import helmet from "helmet";


// Load environment variables
dotenv.config();


// Settings
const host = process.env.HOST || "localhost";
const port = process.env.PORT || 3000;

const src = path.dirname(url.fileURLToPath(import.meta.url));
const root = path.join(src, "/");


// Initialization
const app = express();
const server = http.createServer(app);
const router = express.Router();


// Morgan Middleware
app.use(logger("tiny"));


// CORS Middleware
const allowedOrigins = ["http:/127.0.0.1", "http:/127.0.0.1:3000"];

const corsOptions = {
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));


// Helmet Middleware
app.use(helmet());


// JSON Parse Middleware
app.use(express.json());


// FormData Parse Middleware
app.use(express.urlencoded({ extended: false }));


// Origin
app.use("/", router, (req, res, next) => {
  res.header("Vary", "Origin");
  next();
});

// Route
router.get('/', (req, res) => {
  res.sendFile(path.join(root, 'artykul.html'));
});

// API
router.get("/api", (req, res) => {
  res.json({ message: "Welcome to the Express API!" });
});

server.listen(PORT, () => {
  console.log(`Serwer działa na porcie http:127.0.0.1:${PORT}`);
});
