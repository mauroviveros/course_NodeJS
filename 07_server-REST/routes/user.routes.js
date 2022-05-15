"use strict";

const { Router } = require("express");
const router = Router();
const userCtrl = require("../controllers/user.controller");

const { validarJWT } = require("../middlewares/jwt");

router.get("/", userCtrl.usersGet);
router.post("/", userCtrl.usersPost);
router.put("/:id", userCtrl.usersPut);
router.delete("/:id", [validarJWT], userCtrl.usersDelete);

module.exports = router;