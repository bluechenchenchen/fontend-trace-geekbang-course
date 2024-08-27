import { BreadcrumbTypes, TraceDataSeverity, TraceDataTypes, BreadcrumbsCategorys, TraceLevelType, TraceTypes } from '../typings/common';
export declare const getTimestamp: () => number;
export declare const getFetchStatusLevel: (status: number) => TraceDataSeverity;
export declare const isResourceTarget: (target: HTMLElement) => boolean;
/**
 * 根据字符串生成hashcode
 *
 * @export
 * @param {string} str
 * @return {*}  {number} 可为正数和负数
 */
export declare function hashCode(str: string): number;
export declare function dataTypes2BreadcrumbsType(data: TraceDataTypes): BreadcrumbTypes.ROUTE | BreadcrumbTypes.CONSOLE | BreadcrumbTypes.FETCH | BreadcrumbTypes.UNHANDLEDREJECTION | BreadcrumbTypes.RESOURCE | BreadcrumbTypes.CODE_ERROR | BreadcrumbTypes.CUSTOMER;
export declare function dataCategory2BreadcrumbsCategory(data: TraceDataTypes): BreadcrumbsCategorys.Http | BreadcrumbsCategorys.Debug | BreadcrumbsCategorys.Exception | BreadcrumbsCategorys.Lifecycle;
export declare function getTraceDataLevel(level: TraceDataSeverity): TraceLevelType;
export declare function getTraceDataType(type: TraceDataTypes): TraceTypes.EVENT | TraceTypes.PERF | TraceTypes.RESOURCE | TraceTypes.FETCH | TraceTypes.CODE_ERROR | TraceTypes.CUSTOMER;
export declare function getPerfLevel(data: TracePerf): TraceLevelType.Info;
export declare function uuid(): string;
export declare function safeStringify(obj: object): string;
