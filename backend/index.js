"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const index_routes_1 = require("./routes/index-routes");
const body_parser_1 = __importDefault(require("body-parser"));
(async () => {
    // load config-file
    dotenv_1.default.config({ path: `.env${process.env.NODE_ENV ? `-${process.env.NODE_ENV}` : ''}` });
    // load app with current config
    const app = express_1.default();
    app.use(body_parser_1.default.json());
    app.use(body_parser_1.default.urlencoded({ extended: true }));
    app.use(index_routes_1.indexRoutes);
    const allowCrossDomain = function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    };
    app.use(allowCrossDomain);
    const hostname = '0.0.0.0';
    const port = 3001;
    app.listen(port, hostname, () => {
        console.log(`Server running on port: ${port}`);
    });
})(); // https://github.com/wclr/ts-node-dev/issues/265
//# sourceMappingURL=index.js.map