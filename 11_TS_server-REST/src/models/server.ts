import express, { Application } from "express";

export default class Server{
  constructor(
    private APP: Application = express(),
    private PORT: string = process.env["PORT"] || "8000"
  ){}

  listen(){
    this.APP.listen(this.PORT, ()=>{
      console.log(`http://localhost:${this.PORT}`);
    });
  }
}