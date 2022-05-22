"use strict";

require("dotenv").config();
const Server = require("./api/server");
const SERVER = new Server();
SERVER.listen();