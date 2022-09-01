import { Router } from "express";
import * as ApiController from "../controllers/apiController";
import * as PhraseController from "../controllers/phraseController";

const router = Router();

router.get("/ping", ApiController.ping);

router.get("/aleatorio", ApiController.aleatorio);

router.get("/nome/:nome", ApiController.getNome);

router.get("/phrases", PhraseController.index);
router.get("/phrase/random", PhraseController.random);
router.get("/phrase/:id", PhraseController.getById);
router.post("/phrase", PhraseController.store);
router.put("/phrase/:id", PhraseController.update);
router.delete("/phrase/:id", PhraseController.remove);

export default router;
