"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helpers = void 0;
exports.helpers = {
    'if_eq': function (a, b, opts) {
        if (a === b)
            return opts.fn(this);
        else
            return opts.inverse(this);
    },
    'format_date': function (a) {
        if (a) {
            return a.toISOString().substring(0, 10); //.replace(/-/g, "/").replace(/^.{2}/, "");
        }
        else {
            return new Date().toISOString().substring(0, 10); //.replace(/-/g, "/");
        }
    },
    'format_date_for_display': function (a) {
        return a.toISOString().substring(0, 10).replace(/-/g, "/").replace(/^.{2}/, "");
    },
    'create_importance': function (a) {
        let importance = "";
        let n = 1;
        while (n <= a) {
            importance += "↯";
            n++;
        }
        return importance;
    }
};
//# sourceMappingURL=handlebar-util.js.map