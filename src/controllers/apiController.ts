import { Request, Response } from "express";
import { Phrase } from "../models/Phrase";

export const ping = (req: Request, res: Response) => {
  res.json({ pong: "true" });
};

export const aleatorio = (req: Request, res: Response) => {
  let aleatorio = Math.floor(Math.random() * 10 + 1);

  res.json({ aleatorio });
};

export const getNome = (req: Request, res: Response) => {
  let { nome } = req.params;

  res.json({ nome });
};

export const phrases = async (req: Request, res: Response) => {
  let phrases = await Phrase.findAll();

  console.log(phrases);

  res.json({ phrases });
};
