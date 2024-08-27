"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.safeStringify = exports.uuid = exports.getPerfLevel = exports.getTraceDataType = exports.getTraceDataLevel = exports.dataCategory2BreadcrumbsCategory = exports.dataTypes2BreadcrumbsType = exports.hashCode = exports.isResourceTarget = exports.getFetchStatusLevel = exports.getTimestamp = void 0;
var common_1 = require("../typings/common");
// 获取时间
var getTimestamp = function () { return Date.now(); };
exports.getTimestamp = getTimestamp;
var getFetchStatusLevel = function (status) {
    if (status >= 500) {
        return common_1.TraceDataSeverity.Critical;
    }
    else if (status >= 400) {
        return common_1.TraceDataSeverity.Error;
    }
    else if (status >= 300) {
        return common_1.TraceDataSeverity.Warning;
    }
    else if (status >= 200) {
        return common_1.TraceDataSeverity.Info;
    }
    else {
        return common_1.TraceDataSeverity.Else;
    }
};
exports.getFetchStatusLevel = getFetchStatusLevel;
var isResourceTarget = function (target) {
    return target instanceof HTMLScriptElement ||
        target instanceof HTMLLinkElement ||
        target instanceof HTMLImageElement ||
        target instanceof HTMLVideoElement ||
        target instanceof HTMLAudioElement;
};
exports.isResourceTarget = isResourceTarget;
/**
 * 根据字符串生成hashcode
 *
 * @export
 * @param {string} str
 * @return {*}  {number} 可为正数和负数
 */
function hashCode(str) {
    var hash = 0;
    if (str.length == 0)
        return hash;
    for (var i = 0; i < str.length; i++) {
        var char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash;
    }
    return hash;
}
exports.hashCode = hashCode;
function dataTypes2BreadcrumbsType(data) {
    switch (data) {
        case common_1.TraceDataTypes.JAVASCRIPT:
        case common_1.TraceDataTypes.UNKNOWN:
        case common_1.TraceDataTypes.UNKNOWN_FUNCTION:
        case common_1.TraceDataTypes.REACT:
        case common_1.TraceDataTypes.VUE:
            return common_1.BreadcrumbTypes.CODE_ERROR;
        case common_1.TraceDataTypes.PROMISE:
            return common_1.BreadcrumbTypes.UNHANDLEDREJECTION;
        case common_1.TraceDataTypes.HTTP:
            return common_1.BreadcrumbTypes.FETCH;
        case common_1.TraceDataTypes.PERF:
        case common_1.TraceDataTypes.LOG:
            return common_1.BreadcrumbTypes.CONSOLE;
        case common_1.TraceDataTypes.RESOURCE:
            return common_1.BreadcrumbTypes.RESOURCE;
        case common_1.TraceDataTypes.ROUTE:
            return common_1.BreadcrumbTypes.ROUTE;
        default:
            return common_1.BreadcrumbTypes.CUSTOMER;
    }
}
exports.dataTypes2BreadcrumbsType = dataTypes2BreadcrumbsType;
function dataCategory2BreadcrumbsCategory(data) {
    switch (data) {
        case common_1.TraceDataTypes.JAVASCRIPT:
        case common_1.TraceDataTypes.UNKNOWN:
        case common_1.TraceDataTypes.UNKNOWN_FUNCTION:
            return common_1.BreadcrumbsCategorys.Exception;
        case common_1.TraceDataTypes.REACT:
        case common_1.TraceDataTypes.VUE:
            return common_1.BreadcrumbsCategorys.Lifecycle;
        case common_1.TraceDataTypes.PROMISE:
            return common_1.BreadcrumbsCategorys.Exception;
        case common_1.TraceDataTypes.HTTP:
            return common_1.BreadcrumbsCategorys.Http;
        case common_1.TraceDataTypes.PERF:
        case common_1.TraceDataTypes.LOG:
            return common_1.BreadcrumbsCategorys.Debug;
        case common_1.TraceDataTypes.RESOURCE:
            return common_1.BreadcrumbsCategorys.Http;
        case common_1.TraceDataTypes.ROUTE:
            return common_1.BreadcrumbsCategorys.Lifecycle;
    }
}
exports.dataCategory2BreadcrumbsCategory = dataCategory2BreadcrumbsCategory;
function getTraceDataLevel(level) {
    switch (level) {
        case common_1.TraceDataSeverity.High:
        case common_1.TraceDataSeverity.Critical:
        case common_1.TraceDataSeverity.Error:
            return common_1.TraceLevelType.Error;
        case common_1.TraceDataSeverity.Warning:
            return common_1.TraceLevelType.Warn;
        case common_1.TraceDataSeverity.Debug:
        case common_1.TraceDataSeverity.Low:
            return common_1.TraceLevelType.Debug;
        default:
            return common_1.TraceLevelType.Info;
    }
}
exports.getTraceDataLevel = getTraceDataLevel;
function getTraceDataType(type) {
    switch (type) {
        case common_1.TraceDataTypes.PROMISE:
        case common_1.TraceDataTypes.UNKNOWN:
        case common_1.TraceDataTypes.UNKNOWN_FUNCTION:
        case common_1.TraceDataTypes.JAVASCRIPT:
            return common_1.TraceTypes.CODE_ERROR;
        case common_1.TraceDataTypes.REACT:
        case common_1.TraceDataTypes.VUE:
        case common_1.TraceDataTypes.ROUTE:
            return common_1.TraceTypes.EVENT;
        case common_1.TraceDataTypes.PERF:
            return common_1.TraceTypes.PERF;
        case common_1.TraceDataTypes.HTTP:
            return common_1.TraceTypes.FETCH;
        case common_1.TraceDataTypes.RESOURCE:
            return common_1.TraceTypes.RESOURCE;
        default:
            return common_1.TraceTypes.CUSTOMER;
    }
}
exports.getTraceDataType = getTraceDataType;
function getPerfLevel(data) {
    var level = common_1.TraceLevelType.Info;
    if (data.LCPRating === 'poor' ||
        data.FIDRating === 'poor' ||
        data.FCPRating === 'poor' ||
        data.TTFBRating === 'poor' ||
        data.CLSRating === 'poor' ||
        data.INPRating === 'poor') {
        // console.log('[getPerfLevel] error')
        level = common_1.TraceLevelType.Error;
        return;
    }
    if (data.LCPRating === 'needs improvement' ||
        data.CLSRating === 'needs improvement' ||
        data.FCPRating === 'needs improvement' ||
        data.FIDRating === 'needs improvement' ||
        data.INPRating === 'needs improvement' ||
        data.TTFBRating === 'needs improvement') {
        // console.log('[getPerfLevel] warn')
        level = common_1.TraceLevelType.Warn;
        return;
    }
    return level;
}
exports.getPerfLevel = getPerfLevel;
function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        /* tslint:disable */
        var r = (Math.random() * 16) | 0;
        /* tslint:disable */
        var v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}
exports.uuid = uuid;
function safeStringify(obj) {
    var set = new Set();
    var str = JSON.stringify(obj, function (_key, value) {
        if (set.has(value)) {
            return '';
        }
        typeof value === 'object' && set.add(value);
        return value;
    });
    set.clear();
    return str;
}
exports.safeStringify = safeStringify;
//# sourceMappingURL=util.js.map