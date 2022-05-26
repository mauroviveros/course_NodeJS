"use strict";

const { Router } = require("express");
const router = Router();
const userCtrl = require("../controllers/user.controller");

const { validarJWT, hasRole } = require("../middlewares/jwt");

router.get("/", userCtrl.usersGet);
router.post("/", userCtrl.usersPost);
router.put("/:_id", userCtrl.usersPut);
router.delete("/:_id", [validarJWT, hasRole("ADMIN_ROLE", "VENTAS_ROLE")], userCtrl.usersDelete);

module.exports = router;