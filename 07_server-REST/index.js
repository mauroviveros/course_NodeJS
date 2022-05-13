"use strict";
require("dotenv").config({ path: `${__dirname}/.env` });
const express = require("express");
const APP = express();
const PORT  = process.env.PORT;

APP.get("/", (req, res)=>{
    res.send("Hello World");
});

APP.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})