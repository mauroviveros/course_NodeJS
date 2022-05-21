"use strict";

const { Router } = require("express");
const router = Router();

const uploadCtrl = require("../controllers/upload.controller");

router.get("/", uploadCtrl.uploadFile);

module.exports = router;