"use strict";
require("dotenv").config({ path: `${__dirname}/.env` });
const Server = require("./models/express");
const SERVER = new Server();

SERVER.listen();