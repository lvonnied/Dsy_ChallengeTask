import dotenv from "dotenv";
import express from "express";
import {indexRoutes} from "./routes/index-routes";
import bodyParser from 'body-parser';

(async () => {
    // load config-file
    dotenv.config({path: `.env${process.env.NODE_ENV ? `-${process.env.NODE_ENV}` : ''}`});

    // load app with current config
    const app = express()
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(indexRoutes)

    const allowCrossDomain = function(req: any, res: any, next: any) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    };
    app.use(allowCrossDomain);

    const hostname = '0.0.0.0'
    const port = 3001;
    app.listen(port, hostname, () => {
        console.log(`Server running on port: ${port}`);
    });
})() // https://github.com/wclr/ts-node-dev/issues/265
