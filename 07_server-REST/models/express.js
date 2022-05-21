"use strict";
const express = require("express");
const path = require("path");
const cors = require("cors");
const fileUpload = require("express-fileupload");

const { dbConnection } = require("../database/database.config");

const userRoutes        = require("../routes/user.routes");
const authRoutes        = require("../routes/auth.routes");
const categoryRoutes  = require("../routes/category.routes");
const productRoutes    = require("../routes/product.routes");
const uploadRoutes    = require("../routes/upload.routes");

class Server{
    constructor(){
        this.app = express();
        this.PORT = process.env.PORT;

        this.connectDB();
        this.middlewares();
        this.routes();
    };

    async connectDB(){
        await dbConnection();
    };

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static(path.join(__dirname, '../public')));
        this.app.use(fileUpload({
            limits: { fileSize: 50 * 1024 * 1024 },
            useTempFiles: true,
            createParentPath: true,
            tempFileDir: '/tmp/'
        }));
    };

    routes(){
        this.app.use("/api/users", userRoutes);
        this.app.use("/api/auth", authRoutes);
        this.app.use("/api/categories", categoryRoutes);
        this.app.use("/api/products", productRoutes);
        this.app.use("/api/uploads", uploadRoutes);
    };

    listen(){
        this.app.listen(this.PORT, ()=>{
            console.log(`http://localhost:${this.PORT}`);
        });
    };
};

module.exports = Server;