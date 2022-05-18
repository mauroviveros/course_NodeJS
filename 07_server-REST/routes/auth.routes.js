"use strict";

const { Router } = require("express");
const router = Router();

const authCtrl = require("../controllers/auth.controller");

router.post("/login", authCtrl.login);
router.post("/login/google", authCtrl.googleLogin);

module.exports = router;