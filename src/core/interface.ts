/*
 * @Author: blue
 * @Date: 2024-08-27 17:25:19
 * @FilePath: /fontend-trace-geekbang-course/src/core/interface.ts
 */
export interface BaseTraceOptions {
  fpId: string
  appId: string
}

/**
 * BaseTraceInterface Trace基类
 *
 */
export interface BaseTraceInterface {
  // // 底层发送请求逻辑
  // send(): void;
  // // 上层调用逻辑
  // trace(): void;
  // // sendBeacon
  // sendBeacon(body: string): void;
  // // fetch
  // fetch(body: string): void;
}
