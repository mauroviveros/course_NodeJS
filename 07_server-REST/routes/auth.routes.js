"use strict";

const { Router } = require("express");
const router = Router();

const authCtrl = require("../controllers/auth.controller");
const { validarJWT } = require("../middlewares/jwt");

router.post("/login", authCtrl.login);
router.post("/login/google", authCtrl.googleLogin);
router.get("/", [validarJWT], authCtrl.validateLogin);

module.exports = router;