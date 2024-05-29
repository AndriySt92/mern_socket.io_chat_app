import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import connectDb from "./db/connectDb.js";

const app = express()
dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.json()); 
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
	connectDb();
	console.log(`Server Running on port ${PORT}`);
});