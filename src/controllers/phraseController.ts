import { error } from "console";
import { Request, Response } from "express";
import { Phrase } from "../models/Phrase";

export const create = async (req: Request, res: Response) => {
  let { author, description } = req.body;

  if (!author) {
    res.status(206).json({ msg: "Autor não informado" });
  }
  if (!description) {
    res.status(206).json({ msg: "Frase não informada" });
  }

  try {
    let newPhrase = await Phrase.create({
      author,
      description,
    });
    res.status(200).json(newPhrase);
  } catch (error) {
    res.status(400).json({ error });
  }
};
