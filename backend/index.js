import express from "express";
import dotenv from "dotenv";

const server = express();

dotenv.config();

const PORT = process.env.PORT || 3000;

server.get("/", (req, res) => {
  res.send("Funcionando");
});

server.listen(PORT, console.log("Servidor funcionando en puerto", PORT));
