"use strict";

const { Router } = require("express");
const router = Router();

const categoryCtrl = require("../controllers/category.controller");
const { validarJWT } = require("../middlewares/jwt");

router.get("/", (req, res)=>{ res.json({ message: "OK" }); });
router.get("/:id", (req, res)=>{ res.json({ message: "OK" }); });
router.post("/", [validarJWT], categoryCtrl.createCategory);
router.put("/:id", (req, res)=>{ res.json({ message: "OK" }); });
router.delete("/:id", (req, res)=>{ res.json({ message: "OK" }); });

module.exports = router;