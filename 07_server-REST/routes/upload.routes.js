"use strict";

const { Router } = require("express");
const router = Router();

const uploadCtrl = require("../controllers/upload.controller");
const { validFile } = require("../middlewares/upload");

router.post("/", [validFile("jpg", "png", "jpeg")], uploadCtrl.postFile);

module.exports = router;