import {Response} from 'express'

export interface Settings {
    orderBy: any,
    orderDirection: 1 | -1,
    filter: boolean
    theme: boolean
}
export const sessionUserSettings = (req: any, res:Response, next: (err?: any) => void) => {
    const userSettings = req.session?.userSettings || {orderBy: "title", orderDirection: -1, theme: false, showFinished: "true"};
    const {orderBy, theme, showFinished} = req.query;

    if (orderBy) {
        if (orderBy === req.session.userSettings?.orderBy) {
            userSettings.orderDirection *= -1;
        }
        userSettings.orderBy = orderBy as string;
    }
    if (theme) {
        userSettings.theme = theme;
    }
    if(showFinished) {
        userSettings.showFinished = showFinished;
    }
    req.userSettings = req.session.userSettings = userSettings;
    next();
};
