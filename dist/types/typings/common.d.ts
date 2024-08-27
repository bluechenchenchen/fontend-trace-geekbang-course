export declare enum TraceDataSeverity {
    Else = "else",
    Error = "error",
    Warning = "warning",
    Info = "info",
    Debug = "debug",
    /** 上报的错误等级 */
    Low = "low",
    Normal = "normal",
    High = "high",
    Critical = "critical"
}
export declare enum TraceTypes {
    PAGE_VIEW = "PageView",
    EVENT = "EVENT",
    PERF = "Perf",
    RESOURCE = "Resource",
    ACTION = "Action",
    FETCH = "Fetch",
    CODE_ERROR = "CodeError",
    CONSOLE = "Console",
    CUSTOMER = "Customer"
}
export declare enum TraceClientTypes {
    ANDROID_H5 = "android",
    IOS_H5 = "ios",
    PC_H5 = "pc",
    BROWSER_H5 = "browser"
}
export declare enum BrowserType {
    MOBILE = "mobile",
    PC = "pc",
    WEBVIEW = "webview",
    MINI_PROGRAM = "miniProgram"
}
export declare enum TraceLevelType {
    Error = "error",
    Warn = "warn",
    Info = "info",
    Debug = "debug"
}
export declare enum BreadcrumbTypes {
    ROUTE = "Route",
    CLICK = "UI.Click",
    CONSOLE = "Console",
    FETCH = "Fetch",
    UNHANDLEDREJECTION = "Unhandledrejection",
    RESOURCE = "Resource",
    CODE_ERROR = "Code Error",
    CUSTOMER = "Customer"
}
export declare enum TraceDataTypes {
    UNKNOWN = "UNKNOWN",
    UNKNOWN_FUNCTION = "UNKNOWN_FUNCTION",
    JAVASCRIPT = "JAVASCRIPT",
    LOG = "LOG",
    HTTP = "HTTP",
    VUE = "VUE",
    REACT = "REACT",
    RESOURCE = "RESOURCE",
    PROMISE = "PROMISE",
    ROUTE = "ROUTE",
    PERF = "PERF"
}
export declare enum BreadcrumbsCategorys {
    Http = "http",
    User = "user",
    Debug = "debug",
    Exception = "exception",
    Lifecycle = "lifecycle"
}
export declare enum TraceBaseDataName {
    Fetch = "Fetch",
    TypeError = "TypeError",
    Unhandledrejection = "Unhandledrejection",
    Log = "Log",
    Perf = "Perf",
    Resource = "Resource"
}
