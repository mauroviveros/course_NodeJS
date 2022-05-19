"use strict";

const { Router } = require("express");
const router = Router();

router.get("/", (req, res)=>{ res.json({ message: "OK" }); });
router.get("/:id", (req, res)=>{ res.json({ message: "OK" }); });
router.post("/", (req, res)=>{ res.json({ message: "OK" }); });
router.put("/:id", (req, res)=>{ res.json({ message: "OK" }); });
router.delete("/:id", (req, res)=>{ res.json({ message: "OK" }); });

module.exports = router;