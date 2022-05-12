"use strict";
const path = require('path');
const express = require('express');
const app = express();
const PORT = 8080;


app.use(express.static(path.join(__dirname, 'public')));


app.get('/generic', (req, res)=>{
    res.sendFile(path.join(__dirname, "public/generic.html"));
});
app.get('/elements', (req, res)=>{
    res.sendFile(path.join(__dirname, "public/elements.html"));
});

app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname, "public/404.html"));
});


app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
});