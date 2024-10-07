import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth_routes.js";
import connectToDB from "./DB/connectToDB.js";

const server = express();

dotenv.config();

const PORT = process.env.PORT || 3000;

server.use("/api/auth", authRouter);

server.listen(PORT, () => {
  connectToDB();
  console.log("Servidor funcionando en puerto", PORT);
});
