"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendByXHR = exports.sendByImg = exports.sendBeacon = void 0;
/*
 * @Author: blue
 * @Date: 2024-08-27 17:25:19
 * @FilePath: /fontend-trace-geekbang-course/src/core/send.ts
 */
var util_1 = require("./util");
// 使用sendBeacon发送数据
function sendBeacon(url, data) {
    if (typeof navigator === 'undefined')
        return;
    navigator.sendBeacon && navigator.sendBeacon(url, JSON.stringify(data));
}
exports.sendBeacon = sendBeacon;
// 使用img发送数据
function sendByImg(url, data) {
    var spliceStr = url.indexOf('?') === -1 ? '?' : '&';
    var imageUrl = "".concat(url).concat(spliceStr, "data=").concat(encodeURIComponent((0, util_1.safeStringify)(data)));
    var img = new Image();
    img.src = imageUrl;
    img.onload = function () {
        console.log('Tracking data sent successfully!');
        img = null;
    };
    img.onerror = function (err) {
        console.error('Failed to send tracking data.', err);
        img = null;
    };
}
exports.sendByImg = sendByImg;
// 使用XMLHttpRequest发送数据
function sendByXHR(url, data) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.withCredentials = true;
    xhr.send((0, util_1.safeStringify)(data));
}
exports.sendByXHR = sendByXHR;
//# sourceMappingURL=send.js.map