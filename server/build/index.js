"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const config_1 = __importDefault(require("./config"));
const app_1 = require("./app");
exports.app = (0, app_1.getApp)();
exports.app.listen({
    port: config_1.default.server.port,
});
//# sourceMappingURL=index.js.map