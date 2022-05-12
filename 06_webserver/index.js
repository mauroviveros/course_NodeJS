"use strict";
const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res)=>{
  res.send('Home page');
});
app.get('/hola', (req, res)=>{
    res.send('Hello World');
});

app.get("*", (req, res)=>{
    res.status(404).send("404 | Page Not Found");
});

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
});