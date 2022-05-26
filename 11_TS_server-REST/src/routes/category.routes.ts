import { Router } from "express";
import { getCategory, getCategories } from "../controllers/category.controller";
const router = Router();


router.get("/", getCategories);
router.get("/:_id", getCategory);

export default router;