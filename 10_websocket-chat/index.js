"use strict";
require("dotenv").config();
const Server = require("./models/express");
const SERVER = new Server();

SERVER.listen();