"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xhr = exports.fetch = exports.sendBeacon = void 0;
/*
 * @Author: blue
 * @Date: 2024-08-27 17:25:19
 * @FilePath: /fontend-trace-geekbang-course/src/core/request.ts
 */
var sendBeacon = function (dsn, body) {
    if (typeof navigator === 'undefined')
        return;
    navigator.sendBeacon && navigator.sendBeacon(dsn, body);
};
exports.sendBeacon = sendBeacon;
var fetch = function (dsn, body) {
    // @ts-ignore
    (0, exports.fetch)(dsn, {
        body: body,
        method: 'POST',
        keepalive: true
    });
};
exports.fetch = fetch;
var xhr = function (dsn, body) {
    var client = new XMLHttpRequest();
    client.open('POST', dsn, false); // third parameter indicates sync xhr
    client.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8');
    client.send(body);
};
exports.xhr = xhr;
//# sourceMappingURL=request.js.map