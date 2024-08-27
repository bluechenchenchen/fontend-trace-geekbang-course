import { BaseTraceInterface } from './core/interface';
import { OnFetchError } from './core/fetch';
import { BrowserType } from './typings/common';
export interface TraceOptions {
    perfOnSend: () => void;
    perfBeforeSend: () => void;
    dsn: string;
    debug?: boolean;
    appId: string;
}
export declare class BaseTrace implements BaseTraceInterface {
    dsn: string;
    pageId: string;
    userAgent: string;
    browserType: BrowserType;
    fpId: string;
    uid: string;
    appId: string;
    debug: boolean;
    perfData: TracePerf;
    resources: TraceDataResource[];
    result: {};
    breadcrumb: TraceBreadcrumbs;
    maxBreadcrumb: number;
    breadcrumbEnabled: boolean;
    observer: any;
    queue: TraceData[];
    sendTimer: number;
    constructor(options: TraceOptions);
    log(log: TraceDataLog): void;
    info(message: string, tag?: string): void;
    warn(message: string, tag?: string): void;
    error(message: string, tag?: string): void;
    setTraceData(data: TraceTypeData | TracePerf): TraceData;
    send(data: TraceTypeData | TracePerf): void;
    createPerfReport(): (metric: any) => void;
    saveError(event: ErrorEvent): void;
    handleObserverResource(entry: PerformanceResourceTiming): void;
    onFetchError(message: OnFetchError): void;
    onGlobalError(): void;
    onGlobalClick(): void;
    onObserverResource(): void;
    saveBreadcrumb(data: TraceAction): void;
    setUserId(userId: string): void;
    static init(options: TraceOptions): BaseTrace;
}
