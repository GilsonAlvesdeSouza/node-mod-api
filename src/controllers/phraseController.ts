import { Request, Response } from "express";
import { Sequelize } from "sequelize";
import { Phrase } from "../models/Phrase";

export const index = async (req: Request, res: Response) => {
  let phrases = await Phrase.findAll({
    order: [["author", "asc"]],
  });

  res.status(200).json(phrases);
};

export const getById = async (req: Request, res: Response) => {
  let { id } = req.params;
  let phrase = await Phrase.findOne({ where: { id } });
  console.log(phrase);
  res.status(200).json(phrase);
};

export const store = async (req: Request, res: Response) => {
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
    res.status(201).json(newPhrase);
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const update = async (req: Request, res: Response) => {
  let { id } = req.params;
  let phrase = await Phrase.findOne({ where: { id } });

  let { author, description } = req.body;

  if (phrase) {
    if (author && description) {
      phrase.author = author;
      phrase.description = description;
      await phrase.save();
      res.status(200).json(phrase);
    } else {
      res.status(206).json({ msg: "verifique os campos obrigatórios" });
    }
  }
};

export const remove = async (req: Request, res: Response) => {
  let { id } = req.params;

  let isRemove = await Phrase.destroy({ where: { id } });

  if (isRemove === 1) {
    return res.status(200).json({ msg: "removido com sucesso." });
  }
  return res.status(400).json({ msg: "frase não encontrada" });
};

export const random = async (req: Request, res: Response) => {
  let phrases = await Phrase.findOne({
    order: [Sequelize.fn("RANDOM")],
  });

  if (phrases) {
    return res.status(200).json(phrases);
  }
  res.status(400).json({ msg: "não há frases cadastradas." });
};
