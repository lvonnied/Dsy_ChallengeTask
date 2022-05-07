import dotenv from "dotenv";
import express from "express";
import {indexRoutes} from "./routes/index-routes";

(async () => {
    // load config-file
    dotenv.config({path: `.env${process.env.NODE_ENV ? `-${process.env.NODE_ENV}` : ''}`});

    // load app with current config
    const app = express()
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }));
    app.use(indexRoutes)

    const port = 3000;
    app.listen(port, () => {
        console.log(`Server running on port: ${port}`);
    });
})() // https://github.com/wclr/ts-node-dev/issues/265
