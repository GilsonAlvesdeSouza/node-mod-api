import { Router } from "express";

const router = Router();

router.get("/ping", (req, res) => {
  res.json({ pong: true });
});

router.get("/aleatorio", (req, res) => {
  let aleatorio = Math.floor(Math.random() * 10 + 1);

  res.json({ aleatorio });
});

router.get("/nome/:nome", (req, res) => {
  let { nome } = req.params;

  res.json({ nome });
});

export default router;
