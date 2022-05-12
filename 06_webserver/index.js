"use strict";
const path = require('path');
const express = require('express');
const app = express();
const PORT = 8080;


app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res)=>{
  res.send('Home page');
});
app.get('/hola', (req, res)=>{
    res.send('Hello World');
});

app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname, "public/404.html"));
});


app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
});