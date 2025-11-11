/** 接口 */
import {
  TraceTypes,
  BrowserType,
  TraceClientTypes,
  TraceLevelType,
  TraceDataTypes,
  BreadcrumbTypes,
  BreadcrumbsCategorys,
  TraceBaseDataName
} from './common'
/** 数据类型 */

/** 基类 */

declare global {
  // 全链路日志基类
  type BaseTrace = {
    // 唯一ID，用户侧生成 每条日志唯一
    traceId: string
    // 日志类型
    type: TraceTypes
    // 日志产生时间
    createdAt: number
    // 日志最后更新时间
    updatedAt: number
  }

  // 浏览器相关字段基类
  type BaseBrowserTrace = {
    // 当前浏览器的UserAgent
    ua: string
    // 浏览器类型
    bt: BrowserType
  }

  // 页面相关字段基类
  type BasePageTrace = {
    // 页面ID  字段，也就是 pageId 的简写 （用户刷新页面前）
    // 方便spa页面链路追踪，比如
    pid: string
    // 页面标题
    title?: string
    // 当前页面URL
    url: string
  }

  // 用户相关字段基类 （uid userName email 都是只用登录用户有）
  type BaseUserTrace = {
    // 指纹ID，fingerprintId  可以把用户登录前后的日志关联起来，使用canvas指纹生成
    // 同一个浏览器 fpId相同
    fpId: string
    // 用户ID 可以用登录用户的uid
    uid?: string | number
    // 用户名称
    userName?: string
    // 用户邮箱
    email?: string
  }

  // 业务相关字段基类 （项目信息）
  type BaseAppTrace = {
    // 业务ID
    appId: string
    // 业务名称
    appName?: string
    // 客户端类型
    clientType: TraceClientTypes
    // 日志级别
    level: TraceLevelType
  }

  // 基础类型数据
  type BaseTraceInfo = BaseTrace & BaseBrowserTrace & BaseUserTrace & BaseAppTrace & BasePageTrace
  // 比如
  const exampleBaseData: BaseTraceInfo = {
    traceId: '0bdf6c8e-25c8-427d-847a-9950318a2e14',
    level: TraceLevelType.warn,
    type: TraceTypes.FETCH,
    ua:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    bt: BrowserType.MOBILE,
    fpId: 'c77a37f4',
    uid: 1002,
    appId: 'beai-app',
    clientType: TraceClientTypes.iOS_H5,
    pid: '088c8a92-5a24-4144-9c37-310848c397e1',
    url: 'https://xxx.com/',
    createdAt: '',
    updatedAt: ''
  }

  /** 以下是业务数据类型 */

  type TraceBaseAction = {
    // 动作名称
    name: string
    // 动作参数
    level: TraceDataSeverity
    // 动作时间
    time: number
    // 日志类型
    type: BreadcrumbTypes
    // 行为分类
    category: BreadcrumbsCategorys
  }

  // 行为日志
  type TraceAction = TraceBaseAction & {
    // 行为动作相关的信息，可以是DOM，可以是错误信息，可以是自定义信息
    message?: string
    // 请求参数
    request?: any
    // 请求结果内容
    response?: any
    // 错误堆栈信息
    stack?: string
  }

  type TraceBaseData = {
    // id
    dataId: number
    // 日志信息名称
    name: string
    // name: TraceBaseDataName
    // 问题级别
    level: TraceDataSeverity
    // 异常信息
    message: string
    // 发生事件
    time: number
    // 日志类型
    type: TraceDataTypes
  }

  // 请求类信息
  type TraceDataFetch = TraceBaseData & {
    // 执行时间，用于统计耗时
    elapsedTime: number
    // 请求方法
    method: 'POST' | 'GET'
    // 请求类型
    httpType: 'fetch' | 'xhr'
    // 请求地址
    url: string
    // 请求参数
    body: string
    // 响应状态
    status: number
  }

  // 代码异常错误信息
  type TractDataCodeError = TraceBaseData & {
    stack: string
  }

  type TraceDataPromise = TraceBaseData

  type TraceDataResource = TraceBaseData & {
    url?: string
  }

  // 普通日志
  type TraceDataLog = TraceBaseData & {
    tag: string
  }

  type TraceDataPageView = TraceBaseData & {
    route: string
  }

  // webVitals性能收集信息对象
  // type TracePerf = {
  //   id: string
  //   name: 'FCP' | 'CLS' | 'FID' | 'INP' | 'LCP' | 'TTFB'
  //   value: number
  //   delta: number
  //   rating: string
  // }

  type TracePerfRating = 'good' | 'needs improvement' | 'poor'

  type TracePerf = {
    id: string
    LCP?: number
    LCPRating?: TracePerfRating
    FID?: number
    FIDRating?: TracePerfRating
    FCP?: number
    FCPRating?: TracePerfRating
    TTFB?: number
    TTFBRating?: TracePerfRating
    CLS?: number
    CLSRating?: TracePerfRating
    INP?: number
    INPRating?: TracePerfRating
    // cpus?: number
    // memory?: number
    // connection?: {
    //   rtt: number
    //   downlink: number
    //   effectiveType: 'slow-2g' | '2g' | '3g' | '4g'
    // }
  }

  // 一份错误信息的类型集合
  type TraceTypeData =
    | TraceDataFetch
    | TractDataCodeError
    | TraceDataPromise
    | TraceDataResource
    | TraceDataLog
    | TraceDataPageView

  // 面包屑记录行为日志
  type TraceBreadcrumbs = TraceAction[]

  // 完整的全链路日志
  type TraceData = BaseTraceInfo & {
    // 记录错误信息
    data?: TraceTypeData
    // 记录操作行为
    breadcrumbs?: TraceBreadcrumbs
    // 记录性能信息
    perf?: TracePerf
  }
}

// ---
// 代码错误
const codeError = {
  type: 'CodeError',
  level: 'error',
  createdAt: 1729062518789,
  updatedAt: 1729062518789,
  data: {
    dataId: 62297718,
    name: 'script-error',
    level: 'error',
    message: 'Uncaught TypeError: a.split is not a function',
    time: 1729062518788,
    type: 'JAVASCRIPT',
    stack:
      'TypeError: a.split is not a function\n    at codeError (http://localhost:2022/js/index.html:38:11)\n    at HTMLButtonElement.onclick (http://localhost:2022/js/index.html:19:48)'
  },
  perf: null,
  breadcrumbs: [
    {
      name: 'TypeError',
      type: 'Code Error',
      category: 'exception',
      level: 'error',
      message: 'Uncaught TypeError: a.split is not a function',
      stack:
        'TypeError: a.split is not a function\n    at codeError (http://localhost:2022/js/index.html:38:11)\n    at HTMLButtonElement.onclick (http://localhost:2022/js/index.html:19:48)',
      time: 1729062518788
    }
  ],
  traceId: 'f4b48deb-0de5-461c-a6e6-9f1087d7eb4c',
  ua:
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36',
  bt: 'mobile',
  fpId: 'b5028209',
  appId: 'fontend-trace-geekbang-course',
  clientType: 'browser',
  url: 'http://localhost:2022/js/index.html',
  pid: 'cec7552a-fa00-4f64-b5e8-9a3360932302',
  uid: '1000'
}

// 异常请求
const fetchError = {
  type: 'Fetch',
  level: 'error',
  createdAt: 1729062609226,
  updatedAt: 1729062609226,
  data: {
    dataId: -1147943522,
    name: 'fetch-error',
    level: 'critical',
    message: 'Internal Server Error',
    time: 1729062609226,
    type: 'HTTP',
    url: 'http://localhost:2022/exception/post',
    status: 500,
    method: 'POST',
    body: '{"test":"测试请求体"}',
    elapsedTime: 23,
    httpType: 'fetch'
  },
  perf: null,
  breadcrumbs: [
    {
      name: 'TypeError',
      type: 'Code Error',
      category: 'exception',
      level: 'error',
      message: 'Uncaught TypeError: a.split is not a function',
      stack:
        'TypeError: a.split is not a function\n    at codeError (http://localhost:2022/js/index.html:38:11)\n    at HTMLButtonElement.onclick (http://localhost:2022/js/index.html:19:48)',
      time: 1729062518788
    },
    {
      name: 'fetch',
      level: 'normal',
      type: 'Fetch',
      category: 'http',
      message: 'https://jsonplaceholder.typicode.com/todos/1',
      time: 1729062591072,
      request: {
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/todos/1',
        options: {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
            sw8:
              '1-ZjA1ZTZkZjMtZmE2Zi00MzY3LWE3MDEtN2ZhMmUwZmEwNTFi-N2M3NWNkNzgtYmViOC00ZjVhLTk1YjQtNjgzMjEzMWNhOWEz-1-MDhkM2NkYjctZmQ1Mi00ZjJmLWI5ZjktMjUzNWQ4MDBmNWZm-djEuMC4w--anNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbQ=='
          }
        }
      }
    },
    {
      name: 'fetch',
      level: 'normal',
      type: 'Fetch',
      category: 'http',
      message: 200,
      time: 1729062592941,
      response: { status: 200, statusText: '' }
    },
    {
      name: 'fetch',
      level: 'normal',
      type: 'Fetch',
      category: 'http',
      message: 'http://localhost:2022/exception/post',
      time: 1729062609203,
      request: {
        method: 'POST',
        url: 'http://localhost:2022/exception/post',
        options: {
          method: 'POST',
          body: '{"test":"测试请求体"}',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
            sw8:
              '1-ZDA4NzE0ZjctODVhMi00Mjg4LTkzNmMtZDc1ZjEzYTI2MzM0-ZmFiMzEwMTEtZmZkMC00ZTkwLTgxMmUtMzM0NzgyZmMyYTg2-1-MTVlMGNjODMtNzc3Mi00Njk1LWJlYjUtZjY0NWI5MjVmYjgz-djEuMC4w--bG9jYWxob3N0OjIwMjI='
          }
        }
      }
    },
    {
      name: 'fetch',
      level: 'normal',
      type: 'Fetch',
      category: 'http',
      message: 500,
      time: 1729062609225,
      response: { status: 500, statusText: 'Internal Server Error' }
    }
  ],
  traceId: '004b9873-1d24-4081-b8e5-8b7abc6988a5',
  ua:
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36',
  bt: 'mobile',
  fpId: 'b5028209',
  appId: 'fontend-trace-geekbang-course',
  clientType: 'browser',
  url: 'http://localhost:2022/js/index.html',
  pid: 'cec7552a-fa00-4f64-b5e8-9a3360932302',
  uid: '1000'
}

// 日志上报
const log = {
  type: 'Console',
  level: 'debug',
  createdAt: 1729062686862,
  updatedAt: 1729062686862,
  data: null,
  perf: '',
  breadcrumbs: [
    {
      name: 'TypeError',
      type: 'Code Error',
      category: 'exception',
      level: 'error',
      message: 'Uncaught TypeError: a.split is not a function',
      stack:
        'TypeError: a.split is not a function\n    at codeError (http://localhost:2022/js/index.html:38:11)\n    at HTMLButtonElement.onclick (http://localhost:2022/js/index.html:19:48)',
      time: 1729062518788
    },
    {
      name: 'fetch',
      level: 'normal',
      type: 'Fetch',
      category: 'http',
      message: 'https://jsonplaceholder.typicode.com/todos/1',
      time: 1729062591072,
      request: {
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/todos/1',
        options: {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
            sw8:
              '1-ZjA1ZTZkZjMtZmE2Zi00MzY3LWE3MDEtN2ZhMmUwZmEwNTFi-N2M3NWNkNzgtYmViOC00ZjVhLTk1YjQtNjgzMjEzMWNhOWEz-1-MDhkM2NkYjctZmQ1Mi00ZjJmLWI5ZjktMjUzNWQ4MDBmNWZm-djEuMC4w--anNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbQ=='
          }
        }
      }
    },
    {
      name: 'fetch',
      level: 'normal',
      type: 'Fetch',
      category: 'http',
      message: 200,
      time: 1729062592941,
      response: { status: 200, statusText: '' }
    },
    {
      name: 'fetch',
      level: 'normal',
      type: 'Fetch',
      category: 'http',
      message: 'http://localhost:2022/exception/post',
      time: 1729062609203,
      request: {
        method: 'POST',
        url: 'http://localhost:2022/exception/post',
        options: {
          method: 'POST',
          body: '{"test":"测试请求体"}',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
            sw8:
              '1-ZDA4NzE0ZjctODVhMi00Mjg4LTkzNmMtZDc1ZjEzYTI2MzM0-ZmFiMzEwMTEtZmZkMC00ZTkwLTgxMmUtMzM0NzgyZmMyYTg2-1-MTVlMGNjODMtNzc3Mi00Njk1LWJlYjUtZjY0NWI5MjVmYjgz-djEuMC4w--bG9jYWxob3N0OjIwMjI='
          }
        }
      }
    },
    {
      name: 'fetch',
      level: 'normal',
      type: 'Fetch',
      category: 'http',
      message: 500,
      time: 1729062609225,
      response: { status: 500, statusText: 'Internal Server Error' }
    },
    { name: 'customer-log', type: 'Customer', message: { one: 111 }, time: 1729062686862 }
  ],
  traceId: 'd2ac8c57-2fa2-4fd6-99a8-3b6d16550d7a',
  ua:
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36',
  bt: 'mobile',
  fpId: 'b5028209',
  appId: 'fontend-trace-geekbang-course',
  clientType: 'browser',
  url: 'http://localhost:2022/js/index.html',
  pid: 'cec7552a-fa00-4f64-b5e8-9a3360932302',
  uid: '1000'
}

// Promise error
const PromiseError = {
  type: 'CodeError',
  level: 'error',
  createdAt: 1729062716330,
  updatedAt: 1729062716330,
  data: {
    dataId: -2093341839,
    name: 'script-error',
    level: 'error',
    message: 'promise reject',
    time: 1729062716330,
    type: 'JAVASCRIPT'
  },
  perf: null,
  breadcrumbs: [
    {
      name: 'TypeError',
      type: 'Code Error',
      category: 'exception',
      level: 'error',
      message: 'Uncaught TypeError: a.split is not a function',
      stack:
        'TypeError: a.split is not a function\n    at codeError (http://localhost:2022/js/index.html:38:11)\n    at HTMLButtonElement.onclick (http://localhost:2022/js/index.html:19:48)',
      time: 1729062518788
    },
    {
      name: 'fetch',
      level: 'normal',
      type: 'Fetch',
      category: 'http',
      message: 'https://jsonplaceholder.typicode.com/todos/1',
      time: 1729062591072,
      request: {
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/todos/1',
        options: {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
            sw8:
              '1-ZjA1ZTZkZjMtZmE2Zi00MzY3LWE3MDEtN2ZhMmUwZmEwNTFi-N2M3NWNkNzgtYmViOC00ZjVhLTk1YjQtNjgzMjEzMWNhOWEz-1-MDhkM2NkYjctZmQ1Mi00ZjJmLWI5ZjktMjUzNWQ4MDBmNWZm-djEuMC4w--anNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbQ=='
          }
        }
      }
    },
    {
      name: 'fetch',
      level: 'normal',
      type: 'Fetch',
      category: 'http',
      message: 200,
      time: 1729062592941,
      response: { status: 200, statusText: '' }
    },
    {
      name: 'fetch',
      level: 'normal',
      type: 'Fetch',
      category: 'http',
      message: 'http://localhost:2022/exception/post',
      time: 1729062609203,
      request: {
        method: 'POST',
        url: 'http://localhost:2022/exception/post',
        options: {
          method: 'POST',
          body: '{"test":"测试请求体"}',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
            sw8:
              '1-ZDA4NzE0ZjctODVhMi00Mjg4LTkzNmMtZDc1ZjEzYTI2MzM0-ZmFiMzEwMTEtZmZkMC00ZTkwLTgxMmUtMzM0NzgyZmMyYTg2-1-MTVlMGNjODMtNzc3Mi00Njk1LWJlYjUtZjY0NWI5MjVmYjgz-djEuMC4w--bG9jYWxob3N0OjIwMjI='
          }
        }
      }
    },
    {
      name: 'fetch',
      level: 'normal',
      type: 'Fetch',
      category: 'http',
      message: 500,
      time: 1729062609225,
      response: { status: 500, statusText: 'Internal Server Error' }
    },
    { name: 'customer-log', type: 'Customer', message: { one: 111 }, time: 1729062686862 },
    {
      type: 'Code Error',
      category: 'exception',
      level: 'error',
      message: 'promise reject',
      time: 1729062716330
    }
  ],
  traceId: 'c047de29-7ef4-4187-9af8-d3a8c693a70f',
  ua:
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36',
  bt: 'mobile',
  fpId: 'b5028209',
  appId: 'fontend-trace-geekbang-course',
  clientType: 'browser',
  url: 'http://localhost:2022/js/index.html',
  pid: 'cec7552a-fa00-4f64-b5e8-9a3360932302',
  uid: '1000'
}

// 性能
const perf = {
  type: 'Perf',
  level: 'info',
  createdAt: 1729062955188,
  updatedAt: 1729062955188,
  data: null,
  perf: {
    id: 'v1-1729062509290-4245259905063',
    LCP: 106,
    LCPRating: 'good',
    FID: 2,
    FIDRating: 'good'
  },
  breadcrumbs: [
    {
      name: 'TypeError',
      type: 'Code Error',
      category: 'exception',
      level: 'error',
      message: 'Uncaught TypeError: a.split is not a function',
      stack:
        'TypeError: a.split is not a function\n    at codeError (http://localhost:2022/js/index.html:38:11)\n    at HTMLButtonElement.onclick (http://localhost:2022/js/index.html:19:48)',
      time: 1729062518788
    },
    {
      name: 'fetch',
      level: 'normal',
      type: 'Fetch',
      category: 'http',
      message: 'https://jsonplaceholder.typicode.com/todos/1',
      time: 1729062591072,
      request: {
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/todos/1',
        options: {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
            sw8:
              '1-ZjA1ZTZkZjMtZmE2Zi00MzY3LWE3MDEtN2ZhMmUwZmEwNTFi-N2M3NWNkNzgtYmViOC00ZjVhLTk1YjQtNjgzMjEzMWNhOWEz-1-MDhkM2NkYjctZmQ1Mi00ZjJmLWI5ZjktMjUzNWQ4MDBmNWZm-djEuMC4w--anNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbQ=='
          }
        }
      }
    },
    {
      name: 'fetch',
      level: 'normal',
      type: 'Fetch',
      category: 'http',
      message: 200,
      time: 1729062592941,
      response: { status: 200, statusText: '' }
    },
    {
      name: 'fetch',
      level: 'normal',
      type: 'Fetch',
      category: 'http',
      message: 'http://localhost:2022/exception/post',
      time: 1729062609203,
      request: {
        method: 'POST',
        url: 'http://localhost:2022/exception/post',
        options: {
          method: 'POST',
          body: '{"test":"测试请求体"}',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
            sw8:
              '1-ZDA4NzE0ZjctODVhMi00Mjg4LTkzNmMtZDc1ZjEzYTI2MzM0-ZmFiMzEwMTEtZmZkMC00ZTkwLTgxMmUtMzM0NzgyZmMyYTg2-1-MTVlMGNjODMtNzc3Mi00Njk1LWJlYjUtZjY0NWI5MjVmYjgz-djEuMC4w--bG9jYWxob3N0OjIwMjI='
          }
        }
      }
    },
    {
      name: 'fetch',
      level: 'normal',
      type: 'Fetch',
      category: 'http',
      message: 500,
      time: 1729062609225,
      response: { status: 500, statusText: 'Internal Server Error' }
    },
    { name: 'customer-log', type: 'Customer', message: { one: 111 }, time: 1729062686862 },
    {
      type: 'Code Error',
      category: 'exception',
      level: 'error',
      message: 'promise reject',
      time: 1729062716330
    }
  ],
  traceId: '524093e0-f6dc-4862-93c3-3c0332df6f66',
  ua:
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36',
  bt: 'mobile',
  fpId: 'b5028209',
  appId: 'fontend-trace-geekbang-course',
  clientType: 'browser',
  url: 'http://localhost:2022/js/index.html',
  pid: 'cec7552a-fa00-4f64-b5e8-9a3360932302',
  uid: '10001'
}
