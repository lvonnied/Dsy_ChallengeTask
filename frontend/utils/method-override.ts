import override from "method-override";
import {Request, Response} from 'express';

export const overrideMiddleware = override(function (req: Request, res: Response) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        let method = req.body._method;
        delete req.body._method;
        return method;
    }
});
