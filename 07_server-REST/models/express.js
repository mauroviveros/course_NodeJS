"use strict";
const express       = require("express");
const cors          = require("cors");
const fileUpload    = require("express-fileupload");
const socketio      = require("socket.io");
const path          = require("path");
const http          = require("http");

const { dbConnection } = require("../database/database.config");

const userRoutes        = require("../routes/user.routes");
const authRoutes        = require("../routes/auth.routes");
const categoryRoutes    = require("../routes/category.routes");
const productRoutes     = require("../routes/product.routes");
const uploadRoutes      = require("../routes/upload.routes");

const socketCtrl        = require("../sockets/controller");

class Server{
    constructor(){
        this.app = express();
        this.PORT = process.env.PORT;
        this.server = http.createServer(this.app);
        this.io     = socketio(this.server);

        this.connectDB();
        this.middlewares();
        this.routes();
        this.sockets();
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

    sockets(){
        this.io.on("connection", socketCtrl);
    };

    listen(){
        this.server.listen(this.PORT, ()=>{
            console.log(`http://localhost:${this.PORT}`);
        });
    };
};

module.exports = Server;