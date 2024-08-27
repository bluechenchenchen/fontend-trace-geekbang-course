"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TraceBaseDataName = exports.BreadcrumbsCategorys = exports.TraceDataTypes = exports.BreadcrumbTypes = exports.TraceLevelType = exports.BrowserType = exports.TraceClientTypes = exports.TraceTypes = exports.TraceDataSeverity = void 0;
var TraceDataSeverity;
(function (TraceDataSeverity) {
    // 其他
    TraceDataSeverity["Else"] = "else";
    // 错误级别
    TraceDataSeverity["Error"] = "error";
    // 告警级别
    TraceDataSeverity["Warning"] = "warning";
    // 日志级别
    TraceDataSeverity["Info"] = "info";
    // 调试级别
    TraceDataSeverity["Debug"] = "debug";
    /** 上报的错误等级 */
    // 低危级别
    TraceDataSeverity["Low"] = "low";
    // 普通级别
    TraceDataSeverity["Normal"] = "normal";
    // 高危级别
    TraceDataSeverity["High"] = "high";
    // 极其严重
    TraceDataSeverity["Critical"] = "critical";
})(TraceDataSeverity || (exports.TraceDataSeverity = TraceDataSeverity = {}));
var TraceTypes;
(function (TraceTypes) {
    // PVUV
    TraceTypes["PAGE_VIEW"] = "PageView";
    // Event
    TraceTypes["EVENT"] = "EVENT";
    // 性能
    TraceTypes["PERF"] = "Perf";
    // 资源
    TraceTypes["RESOURCE"] = "Resource";
    // 动作、行为类型
    TraceTypes["ACTION"] = "Action";
    // 请求类型
    TraceTypes["FETCH"] = "Fetch";
    // 代码错误
    TraceTypes["CODE_ERROR"] = "CodeError";
    // 日志
    TraceTypes["CONSOLE"] = "Console";
    // 其它
    TraceTypes["CUSTOMER"] = "Customer";
})(TraceTypes || (exports.TraceTypes = TraceTypes = {}));
var TraceClientTypes;
(function (TraceClientTypes) {
    // 安卓
    TraceClientTypes["ANDROID_H5"] = "android";
    // iOS
    TraceClientTypes["IOS_H5"] = "ios";
    // PC端
    TraceClientTypes["PC_H5"] = "pc";
    // 浏览器
    TraceClientTypes["BROWSER_H5"] = "browser";
})(TraceClientTypes || (exports.TraceClientTypes = TraceClientTypes = {}));
var BrowserType;
(function (BrowserType) {
    // 手机端浏览器
    BrowserType["MOBILE"] = "mobile";
    // PC浏览器
    BrowserType["PC"] = "pc";
    // webview
    BrowserType["WEBVIEW"] = "webview";
    // 小程序
    BrowserType["MINI_PROGRAM"] = "miniProgram";
})(BrowserType || (exports.BrowserType = BrowserType = {}));
var TraceLevelType;
(function (TraceLevelType) {
    // 告警级别
    TraceLevelType["Error"] = "error";
    // 预警级别
    TraceLevelType["Warn"] = "warn";
    // 普通日志
    TraceLevelType["Info"] = "info";
    // 调试日志
    TraceLevelType["Debug"] = "debug";
})(TraceLevelType || (exports.TraceLevelType = TraceLevelType = {}));
var BreadcrumbTypes;
(function (BreadcrumbTypes) {
    BreadcrumbTypes["ROUTE"] = "Route";
    BreadcrumbTypes["CLICK"] = "UI.Click";
    BreadcrumbTypes["CONSOLE"] = "Console";
    BreadcrumbTypes["FETCH"] = "Fetch";
    BreadcrumbTypes["UNHANDLEDREJECTION"] = "Unhandledrejection";
    BreadcrumbTypes["RESOURCE"] = "Resource";
    BreadcrumbTypes["CODE_ERROR"] = "Code Error";
    BreadcrumbTypes["CUSTOMER"] = "Customer";
})(BreadcrumbTypes || (exports.BreadcrumbTypes = BreadcrumbTypes = {}));
var TraceDataTypes;
(function (TraceDataTypes) {
    TraceDataTypes["UNKNOWN"] = "UNKNOWN";
    TraceDataTypes["UNKNOWN_FUNCTION"] = "UNKNOWN_FUNCTION";
    TraceDataTypes["JAVASCRIPT"] = "JAVASCRIPT";
    TraceDataTypes["LOG"] = "LOG";
    TraceDataTypes["HTTP"] = "HTTP";
    TraceDataTypes["VUE"] = "VUE";
    TraceDataTypes["REACT"] = "REACT";
    TraceDataTypes["RESOURCE"] = "RESOURCE";
    TraceDataTypes["PROMISE"] = "PROMISE";
    TraceDataTypes["ROUTE"] = "ROUTE";
    TraceDataTypes["PERF"] = "PERF";
})(TraceDataTypes || (exports.TraceDataTypes = TraceDataTypes = {}));
var BreadcrumbsCategorys;
(function (BreadcrumbsCategorys) {
    BreadcrumbsCategorys["Http"] = "http";
    BreadcrumbsCategorys["User"] = "user";
    BreadcrumbsCategorys["Debug"] = "debug";
    BreadcrumbsCategorys["Exception"] = "exception";
    BreadcrumbsCategorys["Lifecycle"] = "lifecycle";
})(BreadcrumbsCategorys || (exports.BreadcrumbsCategorys = BreadcrumbsCategorys = {}));
var TraceBaseDataName;
(function (TraceBaseDataName) {
    TraceBaseDataName["Fetch"] = "Fetch";
    TraceBaseDataName["TypeError"] = "TypeError";
    TraceBaseDataName["Unhandledrejection"] = "Unhandledrejection";
    TraceBaseDataName["Log"] = "Log";
    TraceBaseDataName["Perf"] = "Perf";
    TraceBaseDataName["Resource"] = "Resource";
})(TraceBaseDataName || (exports.TraceBaseDataName = TraceBaseDataName = {}));
//# sourceMappingURL=common.js.map