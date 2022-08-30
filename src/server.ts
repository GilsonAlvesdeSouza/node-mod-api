import express, { Request, Response } from "express";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";
import apiRouters from "./api";

dotenv.config();

const server = express();

server.use(
  cors({
    origin: "https://resttesttest.com",
    methods: "*",
  })
);

server.use(express.static(path.join(__dirname, "..public")));
server.use(express.urlencoded({ extended: true }));

server.use("/api", apiRouters);

server.use((req: Request, res: Response) => {
  res.status(404);
  res.json({ error: "Endpoint não encontrado." });
});

server.listen(process.env.PORT, () => {
  console.log(
    `This server is running the port ${process.env.PORT} \nhttp://localhost:3000/`
  );
});
