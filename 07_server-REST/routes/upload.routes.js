"use strict";

const { Router } = require("express");
const router = Router();

const uploadCtrl = require("../controllers/upload.controller");

router.post("/", uploadCtrl.postFile);

module.exports = router;