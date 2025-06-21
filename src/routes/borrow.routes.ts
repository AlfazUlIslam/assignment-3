import { Router } from "express";
import { borrowABook, summBorrBooks } from "../controllers/borrow.controller";

const router = Router();

router.post("/", borrowABook);
router.get("/", summBorrBooks);

export default router;