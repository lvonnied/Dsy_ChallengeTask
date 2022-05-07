import dotenv from "dotenv";

(async () => {
    // load config-file
    dotenv.config({path: `.env${process.env.NODE_ENV ? `-${process.env.NODE_ENV}` : ''}`});

    // load app with current config
    const app = (await import('./app')).app;

    const port = 3000;
    app.listen(port, () => {
        console.log(`Server running on port: ${port}`);
    });
})() // https://github.com/wclr/ts-node-dev/issues/265
