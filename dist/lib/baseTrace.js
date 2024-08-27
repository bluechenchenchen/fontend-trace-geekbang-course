"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseTrace = void 0;
var webvitals_1 = require("./core/webvitals");
var fetch_1 = require("./core/fetch");
var util_1 = require("./core/util");
var common_1 = require("./typings/common");
var fingerprint_1 = require("./core/fingerprint");
var send_1 = require("./core/send");
var BaseTrace = /** @class */ (function () {
    function BaseTrace(options) {
        var _this = this;
        // 日志上报后端API
        this.dsn = '';
        // 页面ID
        this.pageId = '';
        //
        this.userAgent = navigator.userAgent;
        //
        this.browserType = common_1.BrowserType.MOBILE;
        // fingerprintId
        this.fpId = '';
        // user id
        this.uid = '';
        // appId
        this.appId = '';
        // 是否开启debug状态
        this.debug = true;
        // 性能日志数据
        this.perfData = {
            id: ''
        };
        // 存储错误资源数据
        this.resources = [];
        this.result = {};
        // 记录用户行为
        this.breadcrumb = [];
        // 最大存储用户行为
        this.maxBreadcrumb = 10;
        // 是否开启用户行为
        this.breadcrumbEnabled = true;
        this.observer = null;
        // 存储链路日志数据
        this.queue = [];
        // 发送请求时间间隔
        this.sendTimer = 1000;
        console.log('BaseTrace constructor.');
        this.pageId = (0, util_1.uuid)();
        this.dsn = options.dsn;
        this.appId = options.appId;
        this.debug = !!options.debug;
        this.perfData = {
            id: (0, webvitals_1.generateUniqueId)()
        };
        this.fpId = (0, fingerprint_1.getFingerprintId)('TraceCourse');
        this.observer = new PerformanceObserver(function (list, observer) {
            list.getEntries().forEach(function (entry) {
                _this.debug && console.debug("name    : ".concat(entry.name));
                _this.debug && console.debug("type    : ".concat(entry.entryType));
                _this.debug && console.debug("duration: ".concat(entry.duration));
                if (entry.entryType === 'resource') {
                    _this.handleObserverResource(entry);
                }
            });
        });
    }
    BaseTrace.prototype.log = function (log) {
        this.saveBreadcrumb({
            name: 'customer-log',
            level: log.level,
            type: (0, util_1.dataTypes2BreadcrumbsType)(log.type),
            category: (0, util_1.dataCategory2BreadcrumbsCategory)(log.type),
            message: log.message,
            time: (0, util_1.getTimestamp)(),
        });
        this.debug && console.debug("log: ".concat(JSON.stringify(log)));
        this.send(log);
    };
    BaseTrace.prototype.info = function (message, tag) {
        this.log({
            name: 'customer-info',
            type: common_1.TraceDataTypes.LOG,
            level: common_1.TraceDataSeverity.Info,
            message: message,
            time: (0, util_1.getTimestamp)(),
            dataId: (0, util_1.hashCode)("".concat(message, "|").concat(tag || '')),
            tag: tag,
        });
    };
    BaseTrace.prototype.warn = function (message, tag) {
        this.log({
            name: 'customer-warning',
            type: common_1.TraceDataTypes.LOG,
            level: common_1.TraceDataSeverity.Warning,
            message: message,
            time: (0, util_1.getTimestamp)(),
            dataId: (0, util_1.hashCode)("".concat(message, "|").concat(tag || '')),
            tag: tag,
        });
    };
    BaseTrace.prototype.error = function (message, tag) {
        this.log({
            name: 'customer-error',
            type: common_1.TraceDataTypes.LOG,
            level: common_1.TraceDataSeverity.Error,
            message: message,
            time: (0, util_1.getTimestamp)(),
            dataId: (0, util_1.hashCode)("".concat(message, "|").concat(tag || '')),
            tag: tag,
        });
    };
    BaseTrace.prototype.setTraceData = function (data) {
        var type = common_1.TraceTypes.CONSOLE;
        var level = common_1.TraceLevelType.Debug;
        var _data = null;
        var perf = null;
        if (!!data.dataId) {
            type = (0, util_1.getTraceDataType)(data.type);
            level = (0, util_1.getTraceDataLevel)(data.level);
            _data = data;
        }
        if (!!data.id) {
            type = common_1.TraceTypes.PERF;
            level = (0, util_1.getPerfLevel)(data);
            perf = data;
        }
        var traceData = {
            type: type,
            level: level,
            createdAt: (0, util_1.getTimestamp)(),
            updatedAt: (0, util_1.getTimestamp)(),
            data: _data,
            perf: perf,
            breadcrumbs: this.breadcrumb,
            traceId: (0, util_1.uuid)(),
            ua: this.userAgent,
            bt: this.browserType,
            fpId: this.fpId,
            appId: this.appId,
            clientType: common_1.TraceClientTypes.BROWSER_H5,
            url: document.URL,
            pid: this.pageId,
            uid: this.uid,
        };
        this.debug && console.log('[setTraceData]traceData: ', traceData);
        return traceData;
    };
    BaseTrace.prototype.send = function (data) {
        var traceData = this.setTraceData(data);
        (0, send_1.sendByImg)(this.dsn, traceData);
    };
    BaseTrace.prototype.createPerfReport = function () {
        var _this = this;
        var report = function (metric) {
            _this.perfData = __assign(__assign({}, _this.perfData), (0, webvitals_1.mapMetric)(metric));
        };
        setTimeout(function () {
            var supportedEntryTypes = (PerformanceObserver && PerformanceObserver.supportedEntryTypes) || [];
            var isLatestVisibilityChangeSupported = supportedEntryTypes.indexOf('layout-shift') !== -1;
            if (isLatestVisibilityChangeSupported) {
                var onVisibilityChange = function () {
                    if (document.visibilityState === 'hidden') {
                        console.log('this.send', _this.perfData);
                        _this.send(_this.perfData);
                        // removeEventListener('visibilitychange', onVisibilityChange, true)
                    }
                };
                addEventListener('visibilitychange', onVisibilityChange, true);
            }
            else {
                addEventListener('pagehide', function () {
                    console.log('pagehide', _this.perfData);
                    _this.send(_this.perfData);
                }, { capture: true, once: true });
            }
        });
        return report;
    };
    BaseTrace.prototype.saveError = function (event) {
        console.log('[onResourceError] event: ', event);
        var target = event.target || event.srcElement;
        var isResTarget = (0, util_1.isResourceTarget)(target);
        if (!isResTarget) {
            var traceData = {
                dataId: (0, util_1.hashCode)("".concat(event.type, "-").concat(event.error.stack)),
                name: 'script-error',
                level: common_1.TraceDataSeverity.Error,
                message: event.message,
                time: (0, util_1.getTimestamp)(),
                type: common_1.TraceDataTypes.JAVASCRIPT,
                stack: event.error.stack
            };
            this.resources.push(traceData);
            this.breadcrumb.push({
                name: event.error.name,
                type: common_1.BreadcrumbTypes.CODE_ERROR,
                category: common_1.BreadcrumbsCategorys.Exception,
                level: common_1.TraceDataSeverity.Error,
                message: event.message,
                stack: event.error.stack,
                time: (0, util_1.getTimestamp)()
            });
            this.queue.push(this.setTraceData(traceData));
        }
        else {
            var url = target.getAttribute('src') || target.getAttribute('href');
            var traceData = {
                dataId: (0, util_1.hashCode)("".concat(target.nodeName.toLowerCase(), "-").concat(event.message).concat(url)),
                name: 'resource-load-error',
                level: common_1.TraceDataSeverity.Warning,
                message: event.message,
                time: (0, util_1.getTimestamp)(),
                type: common_1.TraceDataTypes.RESOURCE,
                stack: null
            };
            this.resources.push(traceData);
            this.breadcrumb.push({
                name: traceData.name,
                type: common_1.BreadcrumbTypes.RESOURCE,
                category: common_1.BreadcrumbsCategorys.Exception,
                level: common_1.TraceDataSeverity.Warning,
                message: event.message,
                time: (0, util_1.getTimestamp)()
            });
            this.queue.push(this.setTraceData(traceData));
        }
    };
    BaseTrace.prototype.handleObserverResource = function (entry) {
        if (entry.entryType === 'resource') {
            var level = common_1.TraceDataSeverity.Info;
            if (entry.duration > 1000 && entry.duration < 1500) {
                level = common_1.TraceDataSeverity.Warning;
            }
            else if (entry.duration > 1500) {
                level = common_1.TraceDataSeverity.Error;
            }
            entry.duration > 1000 && this.resources.push({
                url: entry.name,
                name: "".concat(entry.entryType, "-duration-").concat(entry.initiatorType),
                type: common_1.TraceDataTypes.PERF,
                level: level,
                message: "duration:".concat(Math.round(entry.duration)),
                time: (0, util_1.getTimestamp)(),
                dataId: (0, util_1.hashCode)("".concat(entry.entryType, "-").concat(entry.name)),
            });
        }
    };
    // 这里的构造数据有问题，后续需要更新
    BaseTrace.prototype.onFetchError = function (message) {
        console.log('[onFetchError] message: ', message);
        var traceBaseData = {
            dataId: (0, util_1.hashCode)("".concat(message.url, "-").concat(message.method, "-").concat(message.status, "-").concat(message.statusText)),
            name: 'fetch-error',
            level: common_1.TraceDataSeverity.Critical,
            message: '',
            time: (0, util_1.getTimestamp)(),
            type: common_1.TraceDataTypes.HTTP
        };
        var errorData = __assign(__assign({}, traceBaseData), { url: message.url, status: message.status, message: message.statusText, method: message.method, body: message.body, elapsedTime: message.elapsedTime, httpType: 'fetch' });
        console.log('error data: ', errorData);
        this.queue.push(this.setTraceData(errorData));
    };
    BaseTrace.prototype.onGlobalError = function () {
        var _t = this;
        console.log('onGlobalError');
        window.addEventListener('error', function (event) {
            _t.saveError(event);
        });
        window.addEventListener('unhandledrejection', function (event) {
            // _t.saveError(event)
            console.log(event);
            if (event instanceof PromiseRejectionEvent) {
                var errorEvent = new ErrorEvent("promiseRejection", {
                    message: event.reason.toString(),
                    // filename: event.filename,
                    // lineno: event.lineno,
                    // colno: event.colno,
                    error: event.reason,
                });
                _t.saveError(errorEvent);
            }
            else if (event instanceof ErrorEvent) {
                _t.saveError(event);
            }
        });
    };
    BaseTrace.prototype.onGlobalClick = function () {
        var _this = this;
        var _t = this;
        window.addEventListener('click', function (event) {
            var target = event.target;
            var innerHTML = target.innerHTML;
            var bc = {
                name: 'click',
                level: common_1.TraceDataSeverity.Normal,
                type: common_1.BreadcrumbTypes.CLICK,
                category: common_1.BreadcrumbsCategorys.User,
                message: innerHTML,
                time: (0, util_1.getTimestamp)()
            };
            _this.saveBreadcrumb(bc);
        });
    };
    BaseTrace.prototype.onObserverResource = function () {
        var _t = this;
        // const observer = new PerformanceObserver((list, observer) => {
        //   list.getEntries().forEach((entry) => {
        //     console.log(`name    : ${entry.name}`);
        //     console.log(`type    : ${entry.entryType}`);
        //     console.log(`duration: ${entry.duration}`);
        //     _t.handleObserverResource(entry)
        //   });
        // });
        // observer.observe({
        //   entryTypes: ["resource"],
        // });
    };
    BaseTrace.prototype.saveBreadcrumb = function (data) {
        if (this.breadcrumbEnabled) {
            this.breadcrumb.push(data);
            if (this.breadcrumb.length > this.maxBreadcrumb) {
                this.breadcrumb.shift();
            }
        }
    };
    BaseTrace.prototype.setUserId = function (userId) {
        this.uid = userId;
    };
    // 初始化实例
    BaseTrace.init = function (options) {
        var traceSdk = new BaseTrace(options);
        traceSdk.onGlobalError();
        // traceSdk.onObserverResource()
        traceSdk.observer.observe({
            entryTypes: ["resource"],
        });
        window.fetch = (0, fetch_1.default)({
            pagePath: '',
            onError: function (error) {
                traceSdk.onFetchError(error);
            },
            onBefore: function (props) {
                traceSdk.saveBreadcrumb({
                    name: 'fetch',
                    level: common_1.TraceDataSeverity.Normal,
                    type: common_1.BreadcrumbTypes.FETCH,
                    category: common_1.BreadcrumbsCategorys.Http,
                    message: props.url,
                    time: (0, util_1.getTimestamp)(),
                    request: {
                        method: props.method,
                        url: props.url,
                        options: props.options
                    }
                });
            },
            onAfter: function (result) {
                traceSdk.saveBreadcrumb({
                    name: 'fetch',
                    level: common_1.TraceDataSeverity.Normal,
                    type: common_1.BreadcrumbTypes.FETCH,
                    category: common_1.BreadcrumbsCategorys.Http,
                    message: result.status,
                    time: (0, util_1.getTimestamp)(),
                    response: {
                        status: result.status,
                        statusText: result.statusText
                    }
                });
            }
        });
        // 监听页面性能
        (0, webvitals_1.onVitals)(traceSdk.createPerfReport());
        setInterval(function () {
            console.log('[queue] traceSdk.queue: ', traceSdk.queue);
            var data = traceSdk.queue.shift();
            console.log('[queue] data: ', data);
            if (data)
                (0, send_1.sendByImg)(traceSdk.dsn, data);
        }, traceSdk.sendTimer);
        // @ts-ignore
        window.traceSdk = traceSdk;
        return traceSdk;
    };
    return BaseTrace;
}());
exports.BaseTrace = BaseTrace;
//# sourceMappingURL=baseTrace.js.map