"use strict";

const { Router } = require("express");
const router = Router();
const userCtrl = require("../controllers/user.controller");

router.get("/", userCtrl.usersGet);
router.post("/", userCtrl.usersPost);
router.put("/:id", userCtrl.usersPut);
router.delete("/", userCtrl.usersDelete);

module.exports = router;