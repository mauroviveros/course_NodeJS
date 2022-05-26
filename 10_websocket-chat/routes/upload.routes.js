"use strict";

const { Router } = require("express");
const router = Router();

const uploadCtrl = require("../controllers/upload.controller");

router.post("/:collection/:_id", uploadCtrl.postImg);
router.get("/:collection/:_id", uploadCtrl.getImg);

module.exports = router;