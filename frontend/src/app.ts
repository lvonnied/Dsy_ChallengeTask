import express, {response} from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import session from 'express-session';
import {indexRoutes} from '../../backend/routes/index-routes';
import {helpers} from '../utils/handlebar-util'
import {overrideMiddleware} from "../utils/method-override";


import exphbs from 'express-handlebars';
import {sessionUserSettings, Settings} from "../utils/session-middleware.index";

declare module 'express-session' {
    interface SessionData {
        settings: Settings;
    }
}

declare global {
    namespace Express {
        interface Request {
            settings: Settings;
        }
    }
}

export const app = express();
const hbs = exphbs.create({
    extname: '.hbs',
    defaultLayout: "default",
    helpers: {
        ...helpers
    }
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.resolve('./frontend/views'));

app.use(express.static(path.resolve('./frontend/public')));
app.use(session({secret: 'casduichasidbnuwezrfinasdcvjkadfhsuilfuzihfioda', resave: false, saveUninitialized: true}));
app.use(overrideMiddleware);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(sessionUserSettings)
app.use("/", indexRoutes);
