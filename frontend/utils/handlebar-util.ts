export const helpers = {
    'if_eq': function (a: any, b: any, opts: any) {
        if (a === b)
            return opts.fn(this);
        else
            return opts.inverse(this);
    },
    'format_date': function (a: Date) {
        if(a) {
            return a.toISOString().substring(0, 10);//.replace(/-/g, "/").replace(/^.{2}/, "");
        } else {
            return new Date().toISOString().substring(0, 10);//.replace(/-/g, "/");
        }
    },
    'format_date_for_display': function (a: Date) {
        return a.toISOString().substring(0, 10).replace(/-/g, "/").replace(/^.{2}/, "");
    },
    'create_importance': function (a: number) {
        let importance = "";
        let n = 1;
        while(n <= a) {
            importance += "↯"
            n++;
        }
        return importance;
    }
}
