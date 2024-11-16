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

const dist = path.dirname(url.fileURLToPath(import.meta.url));
const dir = path.join(dist, "../public");

// Initialization
const app = express();
const server = http.createServer(app);
const router = express.Router();


// Morgan Middleware
app.use(logger("tiny"));


// CORS Middleware
const allowedOrigins = ["http://localhost:3000", "https://cdn.tailwindcss.com"];

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
const helmetOptions = {
  contentSecurityPolicy: {
      directives: {
          defaultSrc: ["'self'"],
          scriptSrc: ["'self'", "https://*.googletagmanager.com", "https://cdn.tailwindcss.com"],
          styleSrc: ["'self'", "https://fonts.googleapis.com", "'unsafe-inline'"],
          fontSrc: ["'self'", "https://fonts.gstatic.com"],
          connectSrc: ["'self'", "http://localhost:3000", "https://cdn.tailwindcss.com"],
          imgSrc: ["'self'", "data:"],
          objectSrc: ["'none'"],
      },
  },
  crossOriginEmbedderPolicy: { policy: "unsafe-none" },
  crossOriginOpenerPolicy: { policy: "same-origin" },
  crossOriginResourcePolicy: { policy: "same-origin" },
  referrerPolicy: { policy: "no-referrer" },
  frameguard: { action: "sameorigin" },
  noSniff: true,
  dnsPrefetchControl: { allow: false },
  hidePoweredBy: true,
};

app.use(helmet(helmetOptions));


// JSON Parse Middleware
app.use(express.json());


// FormData Parse Middleware
app.use(express.urlencoded({ extended: false }));


// Static Middleware
app.use(express.static(dir));


// Origin
app.use("/", router, (req, res, next) => {
  res.header("Vary", "Origin");
  next();
});

// Route
router.get('/', (req, res) => {
  res.sendFile(path.join(dir, '/index.html'));
});

// API
router.get("/api", (req, res) => {
  res.json({ message: "Welcome to the Express API!" });
});

server.listen(port, () => {
  console.log(`Serwer działa na porcie http://localhost:${port}`);
});
