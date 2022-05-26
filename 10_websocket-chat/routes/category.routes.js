"use strict";

const { Router } = require("express");
const router = Router();

const categoryCtrl = require("../controllers/category.controller");
const { validarJWT, hasRole } = require("../middlewares/jwt");

router.get("/", categoryCtrl.getCategories);
router.get("/:_id", categoryCtrl.getCategory);
router.post("/", [validarJWT, hasRole("ADMIN_ROLE", "VENTAS_ROLE")], categoryCtrl.createCategory);
router.put("/:_id", [validarJWT, hasRole("ADMIN_ROLE", "VENTAS_ROLE")], categoryCtrl.updateCategory);
router.delete("/:_id", [validarJWT, hasRole("ADMIN_ROLE")], categoryCtrl.deleteCategory);

module.exports = router;