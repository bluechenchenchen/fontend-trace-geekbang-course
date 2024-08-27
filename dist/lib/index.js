"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
var trace_1 = require("./trace");
var instance;
var init = function (options) {
    if (instance) {
        return instance;
    }
    instance = trace_1.default.init(options);
    console.log('instance: ', instance);
    return instance;
};
exports.init = init;
// @ts-ignore
window.traceSdkInit = exports.init;
//# sourceMappingURL=index.js.map