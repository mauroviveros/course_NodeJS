"use strict";

const { Router } = require("express");
const router = Router();

const categoryCtrl = require("../controllers/category.controller");
const { validarJWT } = require("../middlewares/jwt");

router.get("/", categoryCtrl.getCategories);
router.get("/:_id", categoryCtrl.getCategory);
router.post("/", [validarJWT], categoryCtrl.createCategory);
router.put("/:_id", [validarJWT], categoryCtrl.updateCategory);
router.delete("/:_id", [validarJWT], categoryCtrl.deleteCategory);

module.exports = router;