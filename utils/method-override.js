"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.overrideMiddleware = void 0;
const method_override_1 = __importDefault(require("method-override"));
exports.overrideMiddleware = method_override_1.default(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        let method = req.body._method;
        delete req.body._method;
        return method;
    }
});
//# sourceMappingURL=method-override.js.map