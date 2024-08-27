"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TraceDataSeverity = void 0;
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
//# sourceMappingURL=constants.js.map