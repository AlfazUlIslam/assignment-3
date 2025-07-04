import express from "express";
import cors from "cors";
import bookRouter from "./routes/book.routes";
import borrowRouter from "./routes/borrow.routes";

const app = express();
const allowedOrigins = ['http://localhost:5173','http://localhost:4173', 'https://assignment-4-ytuh.onrender.com'];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/books", bookRouter);
app.use("/api/borrow", borrowRouter);

export default app;