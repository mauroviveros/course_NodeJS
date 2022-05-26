"use strict";

const { Router } = require("express");
const router = Router();

const productCtrl = require("../controllers/product.controller");
const { validarJWT, hasRole } = require("../middlewares/jwt");

router.get("/", productCtrl.getProducts);
router.get("/:_id", productCtrl.getProduct);
router.post("/", [validarJWT, hasRole("ADMIN_ROLE", "VENTAS_ROLE")], productCtrl.createProduct);
router.put("/:_id", [validarJWT, hasRole("ADMIN_ROLE", "VENTAS_ROLE")], productCtrl.updateProduct);
router.delete("/:_id", [validarJWT, hasRole("ADMIN_ROLE")], productCtrl.deleteProduct);

module.exports = router;