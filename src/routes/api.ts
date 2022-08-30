import { Router } from "express";
import * as ApiController from "../controllers/apiController";
import * as PhraseController from "../controllers/phraseController";

const router = Router();

router.get("/ping", ApiController.ping);

router.get("/aleatorio", ApiController.aleatorio);

router.get("/nome/:nome", ApiController.getNome);

router.post("/phrase", PhraseController.create);

export default router;
