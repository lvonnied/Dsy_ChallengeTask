"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionUserSettings = void 0;
const sessionUserSettings = (req, res, next) => {
    const userSettings = req.session?.userSettings || { orderBy: "title", orderDirection: -1, theme: false, showFinished: "true" };
    const { orderBy, theme, showFinished } = req.query;
    if (orderBy) {
        if (orderBy === req.session.userSettings?.orderBy) {
            userSettings.orderDirection *= -1;
        }
        userSettings.orderBy = orderBy;
    }
    if (theme) {
        userSettings.theme = theme;
    }
    if (showFinished) {
        userSettings.showFinished = showFinished;
    }
    req.userSettings = req.session.userSettings = userSettings;
    next();
};
exports.sessionUserSettings = sessionUserSettings;
//# sourceMappingURL=session-middleware.index.js.map