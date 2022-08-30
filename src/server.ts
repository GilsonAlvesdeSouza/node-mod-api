import express, { Request, Response } from "express";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const server = express();

server.use(express.static(path.join(__dirname, "..public")));
server.use(express.urlencoded({ extended: true }));

server.use((req: Request, res: Response) => {
  res.status(404);
  res.json({ error: "Endpoint não encontrado." });
});

server.listen(process.env.PORT, () => {
  console.log(
    `This server is running the port ${process.env.PORT} \nhttp://localhost:3000/`
  );
});
