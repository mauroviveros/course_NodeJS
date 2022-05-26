import express, { Application } from "express";
import cors from "cors";

import { dbConnection } from "../database/database.config";

import categoryRoutes from "../routes/category.routes";
export default class Server{
  constructor(
    private APP: Application = express(),
    private PORT: string = process.env["PORT"] || "8000"
  ){
    this.connectDB();
    this.middlewares();
    this.routes();
  }

  async connectDB(){
    await dbConnection();
  };

  middlewares(){
    this.APP.use(cors());
    this.APP.use(express.json());
  };

  routes(){
    this.APP.use("/api/categories", categoryRoutes);
  };

  listen(){
    this.APP.listen(this.PORT, ()=>{
      console.log(`http://localhost:${this.PORT}`);
    });
  }
}