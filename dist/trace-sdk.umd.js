(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.index = {})));
}(this, (function (exports) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    var e,n,t,i,a=-1,o=function(e){addEventListener("pageshow",(function(n){n.persisted&&(a=n.timeStamp,e(n));}),!0);},c=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},u=function(){var e=c();return e&&e.activationStart||0},f=function(e,n){var t=c(),i="navigate";a>=0?i="back-forward-cache":t&&(document.prerendering||u()>0?i="prerender":document.wasDiscarded?i="restore":t.type&&(i=t.type.replace(/_/g,"-")));return {name:e,value:void 0===n?-1:n,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:i}},s=function(e,n,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var i=new PerformanceObserver((function(e){Promise.resolve().then((function(){n(e.getEntries());}));}));return i.observe(Object.assign({type:e,buffered:!0},t||{})),i}}catch(e){}},d=function(e,n,t,i){var r,a;return function(o){n.value>=0&&(o||i)&&((a=n.value-(r||0))||void 0===r)&&(r=n.value,n.delta=a,n.rating=function(e,n){return e>n[1]?"poor":e>n[0]?"needs-improvement":"good"}(n.value,t),e(n));}},l=function(e){requestAnimationFrame((function(){return requestAnimationFrame((function(){return e()}))}));},p=function(e){var n=function(n){"pagehide"!==n.type&&"hidden"!==document.visibilityState||e(n);};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0);},v=function(e){var n=!1;return function(t){n||(e(t),n=!0);}},m=-1,h=function(){return "hidden"!==document.visibilityState||document.prerendering?1/0:0},g=function(e){"hidden"===document.visibilityState&&m>-1&&(m="visibilitychange"===e.type?e.timeStamp:0,T());},y=function(){addEventListener("visibilitychange",g,!0),addEventListener("prerenderingchange",g,!0);},T=function(){removeEventListener("visibilitychange",g,!0),removeEventListener("prerenderingchange",g,!0);},E=function(){return m<0&&(m=h(),y(),o((function(){setTimeout((function(){m=h(),y();}),0);}))),{get firstHiddenTime(){return m}}},C=function(e){document.prerendering?addEventListener("prerenderingchange",(function(){return e()}),!0):e();},L=[1800,3e3],w=function(e,n){n=n||{},C((function(){var t,i=E(),r=f("FCP"),a=s("paint",(function(e){e.forEach((function(e){"first-contentful-paint"===e.name&&(a.disconnect(),e.startTime<i.firstHiddenTime&&(r.value=Math.max(e.startTime-u(),0),r.entries.push(e),t(!0)));}));}));a&&(t=d(e,r,L,n.reportAllChanges),o((function(i){r=f("FCP"),t=d(e,r,L,n.reportAllChanges),l((function(){r.value=performance.now()-i.timeStamp,t(!0);}));})));}));},b=[.1,.25],S=function(e,n){n=n||{},w(v((function(){var t,i=f("CLS",0),r=0,a=[],c=function(e){e.forEach((function(e){if(!e.hadRecentInput){var n=a[0],t=a[a.length-1];r&&e.startTime-t.startTime<1e3&&e.startTime-n.startTime<5e3?(r+=e.value,a.push(e)):(r=e.value,a=[e]);}})),r>i.value&&(i.value=r,i.entries=a,t());},u=s("layout-shift",c);u&&(t=d(e,i,b,n.reportAllChanges),p((function(){c(u.takeRecords()),t(!0);})),o((function(){r=0,i=f("CLS",0),t=d(e,i,b,n.reportAllChanges),l((function(){return t()}));})),setTimeout(t,0));})));},A={passive:!0,capture:!0},I=new Date,P=function(i,r){e||(e=r,n=i,t=new Date,k(removeEventListener),F());},F=function(){if(n>=0&&n<t-I){var r={entryType:"first-input",name:e.type,target:e.target,cancelable:e.cancelable,startTime:e.timeStamp,processingStart:e.timeStamp+n};i.forEach((function(e){e(r);})),i=[];}},M=function(e){if(e.cancelable){var n=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,n){var t=function(){P(e,n),r();},i=function(){r();},r=function(){removeEventListener("pointerup",t,A),removeEventListener("pointercancel",i,A);};addEventListener("pointerup",t,A),addEventListener("pointercancel",i,A);}(n,e):P(n,e);}},k=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(n){return e(n,M,A)}));},D=[100,300],x=function(t,r){r=r||{},C((function(){var a,c=E(),u=f("FID"),l=function(e){e.startTime<c.firstHiddenTime&&(u.value=e.processingStart-e.startTime,u.entries.push(e),a(!0));},m=function(e){e.forEach(l);},h=s("first-input",m);a=d(t,u,D,r.reportAllChanges),h&&p(v((function(){m(h.takeRecords()),h.disconnect();}))),h&&o((function(){var o;u=f("FID"),a=d(t,u,D,r.reportAllChanges),i=[],n=-1,e=null,k(addEventListener),o=l,i.push(o),F();}));}));},U=[2500,4e3],V={},W=function(e,n){n=n||{},C((function(){var t,i=E(),r=f("LCP"),a=function(e){var n=e[e.length-1];n&&n.startTime<i.firstHiddenTime&&(r.value=Math.max(n.startTime-u(),0),r.entries=[n],t());},c=s("largest-contentful-paint",a);if(c){t=d(e,r,U,n.reportAllChanges);var m=v((function(){V[r.id]||(a(c.takeRecords()),c.disconnect(),V[r.id]=!0,t(!0));}));["keydown","click"].forEach((function(e){addEventListener(e,(function(){return setTimeout(m,0)}),!0);})),p(m),o((function(i){r=f("LCP"),t=d(e,r,U,n.reportAllChanges),l((function(){r.value=performance.now()-i.timeStamp,V[r.id]=!0,t(!0);}));}));}}));};

    /**
     * @typedef {Object<string,any>} Result
     * @typedef {import('web-vitals').Metric | Object<string,any>} Metric
     * @typedef {{ effectiveType: 'slow-2g' | '2g' | '3g' | '4g', rtt: number, downlink: number }} NetworkInformation
     *
     * @typedef {object} CreateApiReporterOptions
     * @prop {object} [initial]
     * @prop {(metric: Metric, result: Result) => Result} [mapMetric]
     * @prop {(result: Result) => Result | void} [beforeSend]
     * @prop {(url: string, result: Result) => any} [onSend]
     */

    /**
     * Create Web Vitals API reporter, that accepts `Metric` values and sends it to `url`
     * using `navigator.sendBeacon` when available or fallbacks back to XMLHttpRequest.
     *
     * The function sends request only once.
     * Use `onSend` to implement a custom logic.
     *
     * @param {string} url
     * @param {CreateApiReporterOptions} [opts]
     * @return {(metric: Metric) => void}
     */

    function createApiReporter(url, opts = {}) {
      let isSent = false;
      let isCalled = false;
      let result = /** @type {Result} */ ({ id: generateUniqueId(), ...opts.initial });

      const sendValues = () => {
        if (isSent) return // data is already sent
        if (!isCalled) return // no data collected

        result.duration = now();
        if (opts.beforeSend) {
          const newResult = opts.beforeSend(result);
          if (newResult) result = { ...result, ...newResult };
        }
        isSent = true;
        if (opts.onSend) {
          opts.onSend(url, result);
        } else {
          if (typeof navigator === 'undefined') return
          if (navigator.sendBeacon) return navigator.sendBeacon(url, JSON.stringify(result))
          const client = new XMLHttpRequest();
          client.open('POST', url, false); // third parameter indicates sync xhr
          client.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8');
          client.send(JSON.stringify(result));
        }
      };

      const mapMetric =
        opts.mapMetric ||
        function (metric) {
          const isWebVital = ['FCP', 'TTFB', 'LCP', 'CLS', 'FID'].indexOf(metric.name) !== -1;
          return { [metric.name]: isWebVital ? round(metric.value, metric.name === 'CLS' ? 4 : 0) : metric.value }
        };

      /** @param {Metric} metric */
      const report = (metric) => {
        if (!isCalled) isCalled = true;
        result = { ...result, ...mapMetric(metric, result) };
      };

      // should be the last call to capture latest CLS
      setTimeout(() => {
        // Safari does not fire "visibilitychange" on the tab close
        // So we have 2 options: loose Safari data, or loose LCP/CLS that depends on "visibilitychange" logic.
        // Current solution: if LCP/CLS supported, use `onHidden` otherwise, use `pagehide` to fire the callback in the end.
        //
        // More details: https://github.com/treosh/web-vitals-reporter/issues/3
        const supportedEntryTypes = (PerformanceObserver && PerformanceObserver.supportedEntryTypes) || [];
        const isLatestVisibilityChangeSupported = supportedEntryTypes.indexOf('layout-shift') !== -1;

        if (isLatestVisibilityChangeSupported) {
          const onVisibilityChange = () => {
            if (document.visibilityState === 'hidden') {
              sendValues();
              removeEventListener('visibilitychange', onVisibilityChange, true);
            }
          };
          addEventListener('visibilitychange', onVisibilityChange, true);
        } else {
          addEventListener('pagehide', sendValues, { capture: true, once: true });
        }
      });

      return report
    }

    /**
     * Get device information.
     * - Effective connection type: https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation
     * - Device memory: https://developer.mozilla.org/en-US/docs/Web/API/Navigator/deviceMemory
     */

    function getDeviceInfo() {
      const nav = /** @type {null | (Navigator & { deviceMemory: number, connection: NetworkInformation })} */ (typeof navigator ===
      'undefined'
        ? null
        : navigator);
      const conn = nav && nav.connection ? nav.connection : null;
      return {
        url: location ? location.href : null,
        referrer: document ? document.referrer : null,
        userAgent: nav ? nav.userAgent : null,
        memory: nav ? nav.deviceMemory : undefined,
        cpus: nav ? nav.hardwareConcurrency : undefined,
        connection: conn ? { effectiveType: conn.effectiveType, rtt: conn.rtt, downlink: conn.downlink } : undefined,
      }
    }

    /**
     * Get time since a session started.
     */

    function now() {
      const perf = typeof performance === 'undefined' ? null : performance;
      return perf && perf.now ? round(perf.now()) : null
    }

    /**
     * Round, source: https://stackoverflow.com/a/18358056
     *
     * @param {number} val
     * @param {number} [precision]
     * @return {number}
     */

    function round(val, precision = 0) {
      // @ts-ignore
      return +(Math.round(`${val}e+${precision}`) + `e-${precision}`)
    }

    /**
     * Generate a unique id, copied from:
     * https://github.com/GoogleChrome/web-vitals/blob/master/src/lib/generateUniqueID.ts
     */

    function generateUniqueId() {
      return `v1-${Date.now()}-${Math.floor(Math.random() * (9e12 - 1)) + 1e12}`
    }

    /*
     * @Author: blue
     * @Date: 2024-08-27 17:25:19
     * @FilePath: /fontend-trace-geekbang-course/src/core/webvitals.ts
     */
    var SCORE_RANGE_LCP = [2500, 4500];
    var SCORE_RANGE_FID = [100, 300];
    var SCORE_RANGE_CLS = [0.1, 0.25];
    var score = function (value, range) {
        return value < range[0] ? 'good' : value < range[1] ? 'needs improvement' : 'poor';
    };
    function generateUniqueId$1() {
        return "v1-".concat(Date.now(), "-").concat(Math.floor(Math.random() * (9e12 - 1)) + 1e12);
    }
    function round$1(val, precision) {
        if (precision === void 0) { precision = 0; }
        // @ts-ignore
        return +(Math.round("".concat(val, "e+").concat(precision)) + "e-".concat(precision));
    }
    function mapMetric(metric) {
        var _a;
        var isWebVital = ['FCP', 'TTFB', 'LCP', 'CLS', 'FID'].indexOf(metric.name) !== -1;
        return _a = {},
            _a[metric.name] = isWebVital ? round$1(metric.value, metric.name === 'CLS' ? 4 : 0) : metric.value,
            _a["".concat(metric.name, "Rating")] = metric.rating,
            _a;
    }
    var sendToAnalytics = createApiReporter('/analytics', {
        initial: getDeviceInfo(),
        beforeSend: function (result) {
            console.log('beforeSend');
            var LCP = result.LCP, FID = result.FID, CLS = result.CLS;
            console.info('web-vitals: ', result);
            if (!LCP || !FID || !CLS)
                return; // Core Web Vitals are not supported
            // return extra attributes to merge into the final result
            return {
                LCPScore: score(LCP, SCORE_RANGE_LCP),
                // FIDScore: FID < 100 ? 'good' : FID < 300 ? 'needs improvement' : 'poor',
                FIDScore: score(FID, SCORE_RANGE_FID),
                // CLSScore: CLS < 0.1 ? 'good' : CLS < 0.25 ? 'needs improvement' : 'poor'
                CLSScore: score(CLS, SCORE_RANGE_CLS)
            };
        }
    });
    var onVitals = function (saveMetric) {
        console.log('webvitals setup');
        W(saveMetric);
        x(saveMetric);
        S(saveMetric);
        // onTTFB(saveMetric)
        // onINP(saveMetric)
        // onFCP(saveMetric)
    };

    /**
     *  base64.ts
     *
     *  Licensed under the BSD 3-Clause License.
     *    http://opensource.org/licenses/BSD-3-Clause
     *
     *  References:
     *    http://en.wikipedia.org/wiki/Base64
     *
     * @author Dan Kogai (https://github.com/dankogai)
     */
    const _hasBuffer = typeof Buffer === 'function';
    const _TD = typeof TextDecoder === 'function' ? new TextDecoder() : undefined;
    const _TE = typeof TextEncoder === 'function' ? new TextEncoder() : undefined;
    const b64ch = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    const b64chs = Array.prototype.slice.call(b64ch);
    const b64tab = ((a) => {
        let tab = {};
        a.forEach((c, i) => tab[c] = i);
        return tab;
    })(b64chs);
    const _fromCC = String.fromCharCode.bind(String);
    const _U8Afrom = typeof Uint8Array.from === 'function'
        ? Uint8Array.from.bind(Uint8Array)
        : (it) => new Uint8Array(Array.prototype.slice.call(it, 0));
    const _mkUriSafe = (src) => src
        .replace(/=/g, '').replace(/[+\/]/g, (m0) => m0 == '+' ? '-' : '_');
    /**
     * polyfill version of `btoa`
     */
    const btoaPolyfill = (bin) => {
        // console.log('polyfilled');
        let u32, c0, c1, c2, asc = '';
        const pad = bin.length % 3;
        for (let i = 0; i < bin.length;) {
            if ((c0 = bin.charCodeAt(i++)) > 255 ||
                (c1 = bin.charCodeAt(i++)) > 255 ||
                (c2 = bin.charCodeAt(i++)) > 255)
                throw new TypeError('invalid character found');
            u32 = (c0 << 16) | (c1 << 8) | c2;
            asc += b64chs[u32 >> 18 & 63]
                + b64chs[u32 >> 12 & 63]
                + b64chs[u32 >> 6 & 63]
                + b64chs[u32 & 63];
        }
        return pad ? asc.slice(0, pad - 3) + "===".substring(pad) : asc;
    };
    /**
     * does what `window.btoa` of web browsers do.
     * @param {String} bin binary string
     * @returns {string} Base64-encoded string
     */
    const _btoa = typeof btoa === 'function' ? (bin) => btoa(bin)
        : _hasBuffer ? (bin) => Buffer.from(bin, 'binary').toString('base64')
            : btoaPolyfill;
    const _fromUint8Array = _hasBuffer
        ? (u8a) => Buffer.from(u8a).toString('base64')
        : (u8a) => {
            // cf. https://stackoverflow.com/questions/12710001/how-to-convert-uint8-array-to-base64-encoded-string/12713326#12713326
            const maxargs = 0x1000;
            let strs = [];
            for (let i = 0, l = u8a.length; i < l; i += maxargs) {
                strs.push(_fromCC.apply(null, u8a.subarray(i, i + maxargs)));
            }
            return _btoa(strs.join(''));
        };
    // This trick is found broken https://github.com/dankogai/js-base64/issues/130
    // const utob = (src: string) => unescape(encodeURIComponent(src));
    // reverting good old fationed regexp
    const cb_utob = (c) => {
        if (c.length < 2) {
            var cc = c.charCodeAt(0);
            return cc < 0x80 ? c
                : cc < 0x800 ? (_fromCC(0xc0 | (cc >>> 6))
                    + _fromCC(0x80 | (cc & 0x3f)))
                    : (_fromCC(0xe0 | ((cc >>> 12) & 0x0f))
                        + _fromCC(0x80 | ((cc >>> 6) & 0x3f))
                        + _fromCC(0x80 | (cc & 0x3f)));
        }
        else {
            var cc = 0x10000
                + (c.charCodeAt(0) - 0xD800) * 0x400
                + (c.charCodeAt(1) - 0xDC00);
            return (_fromCC(0xf0 | ((cc >>> 18) & 0x07))
                + _fromCC(0x80 | ((cc >>> 12) & 0x3f))
                + _fromCC(0x80 | ((cc >>> 6) & 0x3f))
                + _fromCC(0x80 | (cc & 0x3f)));
        }
    };
    const re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
    /**
     * @deprecated should have been internal use only.
     * @param {string} src UTF-8 string
     * @returns {string} UTF-16 string
     */
    const utob = (u) => u.replace(re_utob, cb_utob);
    //
    const _encode = _hasBuffer
        ? (s) => Buffer.from(s, 'utf8').toString('base64')
        : _TE
            ? (s) => _fromUint8Array(_TE.encode(s))
            : (s) => _btoa(utob(s));
    /**
     * converts a UTF-8-encoded string to a Base64 string.
     * @param {boolean} [urlsafe] if `true` make the result URL-safe
     * @returns {string} Base64 string
     */
    const encode = (src, urlsafe = false) => urlsafe
        ? _mkUriSafe(_encode(src))
        : _encode(src);

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
    })(TraceDataSeverity || (TraceDataSeverity = {}));
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
    })(TraceTypes || (TraceTypes = {}));
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
    })(TraceClientTypes || (TraceClientTypes = {}));
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
    })(BrowserType || (BrowserType = {}));
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
    })(TraceLevelType || (TraceLevelType = {}));
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
    })(BreadcrumbTypes || (BreadcrumbTypes = {}));
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
    })(TraceDataTypes || (TraceDataTypes = {}));
    var BreadcrumbsCategorys;
    (function (BreadcrumbsCategorys) {
        BreadcrumbsCategorys["Http"] = "http";
        BreadcrumbsCategorys["User"] = "user";
        BreadcrumbsCategorys["Debug"] = "debug";
        BreadcrumbsCategorys["Exception"] = "exception";
        BreadcrumbsCategorys["Lifecycle"] = "lifecycle";
    })(BreadcrumbsCategorys || (BreadcrumbsCategorys = {}));
    var TraceBaseDataName;
    (function (TraceBaseDataName) {
        TraceBaseDataName["Fetch"] = "Fetch";
        TraceBaseDataName["TypeError"] = "TypeError";
        TraceBaseDataName["Unhandledrejection"] = "Unhandledrejection";
        TraceBaseDataName["Log"] = "Log";
        TraceBaseDataName["Perf"] = "Perf";
        TraceBaseDataName["Resource"] = "Resource";
    })(TraceBaseDataName || (TraceBaseDataName = {}));

    // 获取时间
    var getTimestamp = function () { return Date.now(); };
    var isResourceTarget = function (target) {
        return target instanceof HTMLScriptElement ||
            target instanceof HTMLLinkElement ||
            target instanceof HTMLImageElement ||
            target instanceof HTMLVideoElement ||
            target instanceof HTMLAudioElement;
    };
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
    function dataTypes2BreadcrumbsType(data) {
        switch (data) {
            case TraceDataTypes.JAVASCRIPT:
            case TraceDataTypes.UNKNOWN:
            case TraceDataTypes.UNKNOWN_FUNCTION:
            case TraceDataTypes.REACT:
            case TraceDataTypes.VUE:
                return BreadcrumbTypes.CODE_ERROR;
            case TraceDataTypes.PROMISE:
                return BreadcrumbTypes.UNHANDLEDREJECTION;
            case TraceDataTypes.HTTP:
                return BreadcrumbTypes.FETCH;
            case TraceDataTypes.PERF:
            case TraceDataTypes.LOG:
                return BreadcrumbTypes.CONSOLE;
            case TraceDataTypes.RESOURCE:
                return BreadcrumbTypes.RESOURCE;
            case TraceDataTypes.ROUTE:
                return BreadcrumbTypes.ROUTE;
            default:
                return BreadcrumbTypes.CUSTOMER;
        }
    }
    function dataCategory2BreadcrumbsCategory(data) {
        switch (data) {
            case TraceDataTypes.JAVASCRIPT:
            case TraceDataTypes.UNKNOWN:
            case TraceDataTypes.UNKNOWN_FUNCTION:
                return BreadcrumbsCategorys.Exception;
            case TraceDataTypes.REACT:
            case TraceDataTypes.VUE:
                return BreadcrumbsCategorys.Lifecycle;
            case TraceDataTypes.PROMISE:
                return BreadcrumbsCategorys.Exception;
            case TraceDataTypes.HTTP:
                return BreadcrumbsCategorys.Http;
            case TraceDataTypes.PERF:
            case TraceDataTypes.LOG:
                return BreadcrumbsCategorys.Debug;
            case TraceDataTypes.RESOURCE:
                return BreadcrumbsCategorys.Http;
            case TraceDataTypes.ROUTE:
                return BreadcrumbsCategorys.Lifecycle;
        }
    }
    function getTraceDataLevel(level) {
        switch (level) {
            case TraceDataSeverity.High:
            case TraceDataSeverity.Critical:
            case TraceDataSeverity.Error:
                return TraceLevelType.Error;
            case TraceDataSeverity.Warning:
                return TraceLevelType.Warn;
            case TraceDataSeverity.Debug:
            case TraceDataSeverity.Low:
                return TraceLevelType.Debug;
            default:
                return TraceLevelType.Info;
        }
    }
    function getTraceDataType(type) {
        switch (type) {
            case TraceDataTypes.PROMISE:
            case TraceDataTypes.UNKNOWN:
            case TraceDataTypes.UNKNOWN_FUNCTION:
            case TraceDataTypes.JAVASCRIPT:
                return TraceTypes.CODE_ERROR;
            case TraceDataTypes.REACT:
            case TraceDataTypes.VUE:
            case TraceDataTypes.ROUTE:
                return TraceTypes.EVENT;
            case TraceDataTypes.PERF:
                return TraceTypes.PERF;
            case TraceDataTypes.HTTP:
                return TraceTypes.FETCH;
            case TraceDataTypes.RESOURCE:
                return TraceTypes.RESOURCE;
            default:
                return TraceTypes.CUSTOMER;
        }
    }
    function getPerfLevel(data) {
        var level = TraceLevelType.Info;
        if (data.LCPRating === 'poor' ||
            data.FIDRating === 'poor' ||
            data.FCPRating === 'poor' ||
            data.TTFBRating === 'poor' ||
            data.CLSRating === 'poor' ||
            data.INPRating === 'poor') {
            // console.log('[getPerfLevel] error')
            level = TraceLevelType.Error;
            return;
        }
        if (data.LCPRating === 'needs improvement' ||
            data.CLSRating === 'needs improvement' ||
            data.FCPRating === 'needs improvement' ||
            data.FIDRating === 'needs improvement' ||
            data.INPRating === 'needs improvement' ||
            data.TTFBRating === 'needs improvement') {
            // console.log('[getPerfLevel] warn')
            level = TraceLevelType.Warn;
            return;
        }
        return level;
    }
    function uuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            /* tslint:disable */
            var r = (Math.random() * 16) | 0;
            /* tslint:disable */
            var v = c === 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }
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

    var originFetch = window.fetch;
    // 拦截fetch
    var interceptFetch = function (_a) {
        var pagePath = _a.pagePath, onError = _a.onError, onBefore = _a.onBefore, onAfter = _a.onAfter;
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return __awaiter(void 0, void 0, void 0, function () {
                var url, options, startTime, traceId, traceSegmentId, appId, appVersion, traceIdStr, segmentId, service, instance, endpoint, peer, index, values, res, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = args[0], options = args[1];
                            startTime = getTimestamp();
                            traceId = uuid();
                            traceSegmentId = uuid();
                            appId = uuid();
                            appVersion = 'v1.0.0';
                            if (Object.prototype.toString.call(args[0]) === '[object Request]') {
                                url = new URL(url.url);
                            }
                            else {
                                if (args[0].startsWith('http://') || args[0].startsWith('https://')) {
                                    url = new URL(args[0]);
                                }
                                else if (args[0].startsWith('//')) {
                                    url = new URL("".concat(window.location.protocol).concat(args[0]));
                                }
                                else {
                                    url = new URL(window.location.href);
                                    url.pathname = args[0];
                                }
                            }
                            traceIdStr = String(encode(traceId));
                            segmentId = String(encode(traceSegmentId));
                            service = String(encode(appId));
                            instance = String(encode(appVersion));
                            endpoint = String(encode(pagePath));
                            peer = String(encode(url.host));
                            index = 1;
                            values = "".concat(1, "-").concat(traceIdStr, "-").concat(segmentId, "-").concat(index, "-").concat(service, "-").concat(instance, "-").concat(endpoint, "-").concat(peer);
                            if (!options) {
                                options = {};
                            }
                            if (!options.headers) {
                                options.headers = {};
                            }
                            options.headers['sw8'] = values;
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            onBefore &&
                                onBefore({
                                    url: url,
                                    method: options.method,
                                    options: options
                                });
                            return [4 /*yield*/, originFetch(url, options)];
                        case 2:
                            res = _a.sent();
                            onAfter && onAfter(res);
                            return [3 /*break*/, 4];
                        case 3:
                            err_1 = _a.sent();
                            if (!!options.signal && err_1.name == 'AbortError') {
                                onError({
                                    url: url,
                                    status: res.status,
                                    statusText: res.statusText,
                                    method: options.method,
                                    body: options.body,
                                    elapsedTime: getTimestamp() - startTime
                                });
                            }
                            else {
                                throw err_1;
                            }
                            return [3 /*break*/, 4];
                        case 4:
                            if (!(res.ok && res.status >= 200 && res.status < 300)) {
                                onError({
                                    url: url,
                                    status: res.status,
                                    statusText: res.statusText,
                                    method: options.method,
                                    body: options.body,
                                    elapsedTime: getTimestamp() - startTime
                                });
                            }
                            return [2 /*return*/, res];
                    }
                });
            });
        };
    };

    /*
     * @Author: blue
     * @Date: 2024-08-27 17:25:19
     * @FilePath: /fontend-trace-geekbang-course/src/core/fingerprint.ts
     */
    // https://www.cnblogs.com/cute/p/13142139.html
    function bin2hex(str) {
        // discuss at: http://phpjs.org/functions/bin2hex/
        // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
        // bugfixed by: Onno Marsman
        // bugfixed by: Linuxworld
        // improved by: ntoniazzi (http://phpjs.org/functions/bin2hex:361#comment_177616)
        // example 1: bin2hex('Kev');
        // returns 1: '4b6576'
        // example 2: bin2hex(String.fromCharCode(0x00));
        // returns 2: '00'
        // https://gist.github.com/cythrawll/8603752
        // let i = 0
        var o = '';
        // let l: number
        var n = null;
        str += '';
        for (var i = 0, l = str.length; i < l; i++) {
            n = str.charCodeAt(i).toString(16);
            o += n.length < 2 ? '0' + n : n;
        }
        return o;
    }
    /**
     * 生成唯一ID（非用户ID）
     * 通过HTML5 Canvas API创建一个接近不重复的唯一指纹ID
     * @param content
     * @returns
     */
    var getFingerprintId = function (content, options) {
        if (!content) {
            console.error('content is empty');
            return null;
        }
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        // 如果不存在，则返回空值，说明不支持Canvas指纹
        if (!ctx)
            return null;
        var txt = content || 'geekbang';
        ctx.textBaseline = options && options.textBaseline ? options.textBaseline : 'top';
        ctx.font = options && options.font ? options.font : "14px 'Arial'";
        ctx.fillStyle = options && options.reactStyle ? options.reactStyle : '#f60';
        // 先画一个62x20矩形内容
        ctx.fillRect(125, 1, 62, 20);
        ctx.fillStyle = options && options.contentStyle ? options.contentStyle : '#069';
        // 把字填充到矩形内
        ctx.fillText(txt, 2, 15);
        // ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
        // ctx.fillText(txt, 4, 17);
        var b64 = canvas.toDataURL().replace('data:image/png;base64,', '');
        var bin = atob(b64);
        var crc = bin2hex(bin.slice(-16, -12));
        return crc;
    };

    /*
     * @Author: blue
     * @Date: 2024-08-27 17:25:19
     * @FilePath: /fontend-trace-geekbang-course/src/core/send.ts
     */
    // 使用img发送数据
    function sendByImg(url, data) {
        var spliceStr = url.indexOf('?') === -1 ? '?' : '&';
        var imageUrl = "".concat(url).concat(spliceStr, "data=").concat(encodeURIComponent(safeStringify(data)));
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
            this.browserType = BrowserType.MOBILE;
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
            this.pageId = uuid();
            this.dsn = options.dsn;
            this.appId = options.appId;
            this.debug = !!options.debug;
            this.perfData = {
                id: generateUniqueId$1()
            };
            this.fpId = getFingerprintId('TraceCourse');
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
                type: dataTypes2BreadcrumbsType(log.type),
                category: dataCategory2BreadcrumbsCategory(log.type),
                message: log.message,
                time: getTimestamp(),
            });
            this.debug && console.debug("log: ".concat(JSON.stringify(log)));
            this.send(log);
        };
        BaseTrace.prototype.info = function (message, tag) {
            this.log({
                name: 'customer-info',
                type: TraceDataTypes.LOG,
                level: TraceDataSeverity.Info,
                message: message,
                time: getTimestamp(),
                dataId: hashCode("".concat(message, "|").concat(tag || '')),
                tag: tag,
            });
        };
        BaseTrace.prototype.warn = function (message, tag) {
            this.log({
                name: 'customer-warning',
                type: TraceDataTypes.LOG,
                level: TraceDataSeverity.Warning,
                message: message,
                time: getTimestamp(),
                dataId: hashCode("".concat(message, "|").concat(tag || '')),
                tag: tag,
            });
        };
        BaseTrace.prototype.error = function (message, tag) {
            this.log({
                name: 'customer-error',
                type: TraceDataTypes.LOG,
                level: TraceDataSeverity.Error,
                message: message,
                time: getTimestamp(),
                dataId: hashCode("".concat(message, "|").concat(tag || '')),
                tag: tag,
            });
        };
        BaseTrace.prototype.setTraceData = function (data) {
            var type = TraceTypes.CONSOLE;
            var level = TraceLevelType.Debug;
            var _data = null;
            var perf = null;
            if (!!data.dataId) {
                type = getTraceDataType(data.type);
                level = getTraceDataLevel(data.level);
                _data = data;
            }
            if (!!data.id) {
                type = TraceTypes.PERF;
                level = getPerfLevel(data);
                perf = data;
            }
            var traceData = {
                type: type,
                level: level,
                createdAt: getTimestamp(),
                updatedAt: getTimestamp(),
                data: _data,
                perf: perf,
                breadcrumbs: this.breadcrumb,
                traceId: uuid(),
                ua: this.userAgent,
                bt: this.browserType,
                fpId: this.fpId,
                appId: this.appId,
                clientType: TraceClientTypes.BROWSER_H5,
                url: document.URL,
                pid: this.pageId,
                uid: this.uid,
            };
            this.debug && console.log('[setTraceData]traceData: ', traceData);
            return traceData;
        };
        BaseTrace.prototype.send = function (data) {
            var traceData = this.setTraceData(data);
            sendByImg(this.dsn, traceData);
        };
        BaseTrace.prototype.createPerfReport = function () {
            var _this = this;
            var report = function (metric) {
                _this.perfData = __assign(__assign({}, _this.perfData), mapMetric(metric));
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
            var isResTarget = isResourceTarget(target);
            if (!isResTarget) {
                var traceData = {
                    dataId: hashCode("".concat(event.type, "-").concat(event.error.stack)),
                    name: 'script-error',
                    level: TraceDataSeverity.Error,
                    message: event.message,
                    time: getTimestamp(),
                    type: TraceDataTypes.JAVASCRIPT,
                    stack: event.error.stack
                };
                this.resources.push(traceData);
                this.breadcrumb.push({
                    name: event.error.name,
                    type: BreadcrumbTypes.CODE_ERROR,
                    category: BreadcrumbsCategorys.Exception,
                    level: TraceDataSeverity.Error,
                    message: event.message,
                    stack: event.error.stack,
                    time: getTimestamp()
                });
                this.queue.push(this.setTraceData(traceData));
            }
            else {
                var url = target.getAttribute('src') || target.getAttribute('href');
                var traceData = {
                    dataId: hashCode("".concat(target.nodeName.toLowerCase(), "-").concat(event.message).concat(url)),
                    name: 'resource-load-error',
                    level: TraceDataSeverity.Warning,
                    message: event.message,
                    time: getTimestamp(),
                    type: TraceDataTypes.RESOURCE,
                    stack: null
                };
                this.resources.push(traceData);
                this.breadcrumb.push({
                    name: traceData.name,
                    type: BreadcrumbTypes.RESOURCE,
                    category: BreadcrumbsCategorys.Exception,
                    level: TraceDataSeverity.Warning,
                    message: event.message,
                    time: getTimestamp()
                });
                this.queue.push(this.setTraceData(traceData));
            }
        };
        BaseTrace.prototype.handleObserverResource = function (entry) {
            if (entry.entryType === 'resource') {
                var level = TraceDataSeverity.Info;
                if (entry.duration > 1000 && entry.duration < 1500) {
                    level = TraceDataSeverity.Warning;
                }
                else if (entry.duration > 1500) {
                    level = TraceDataSeverity.Error;
                }
                entry.duration > 1000 && this.resources.push({
                    url: entry.name,
                    name: "".concat(entry.entryType, "-duration-").concat(entry.initiatorType),
                    type: TraceDataTypes.PERF,
                    level: level,
                    message: "duration:".concat(Math.round(entry.duration)),
                    time: getTimestamp(),
                    dataId: hashCode("".concat(entry.entryType, "-").concat(entry.name)),
                });
            }
        };
        // 这里的构造数据有问题，后续需要更新
        BaseTrace.prototype.onFetchError = function (message) {
            console.log('[onFetchError] message: ', message);
            var traceBaseData = {
                dataId: hashCode("".concat(message.url, "-").concat(message.method, "-").concat(message.status, "-").concat(message.statusText)),
                name: 'fetch-error',
                level: TraceDataSeverity.Critical,
                message: '',
                time: getTimestamp(),
                type: TraceDataTypes.HTTP
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
            window.addEventListener('click', function (event) {
                var target = event.target;
                var innerHTML = target.innerHTML;
                var bc = {
                    name: 'click',
                    level: TraceDataSeverity.Normal,
                    type: BreadcrumbTypes.CLICK,
                    category: BreadcrumbsCategorys.User,
                    message: innerHTML,
                    time: getTimestamp()
                };
                _this.saveBreadcrumb(bc);
            });
        };
        BaseTrace.prototype.onObserverResource = function () {
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
            window.fetch = interceptFetch({
                pagePath: '',
                onError: function (error) {
                    traceSdk.onFetchError(error);
                },
                onBefore: function (props) {
                    traceSdk.saveBreadcrumb({
                        name: 'fetch',
                        level: TraceDataSeverity.Normal,
                        type: BreadcrumbTypes.FETCH,
                        category: BreadcrumbsCategorys.Http,
                        message: props.url,
                        time: getTimestamp(),
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
                        level: TraceDataSeverity.Normal,
                        type: BreadcrumbTypes.FETCH,
                        category: BreadcrumbsCategorys.Http,
                        message: result.status,
                        time: getTimestamp(),
                        response: {
                            status: result.status,
                            statusText: result.statusText
                        }
                    });
                }
            });
            // 监听页面性能
            onVitals(traceSdk.createPerfReport());
            setInterval(function () {
                console.log('[queue] traceSdk.queue: ', traceSdk.queue);
                var data = traceSdk.queue.shift();
                console.log('[queue] data: ', data);
                if (data)
                    sendByImg(traceSdk.dsn, data);
            }, traceSdk.sendTimer);
            // @ts-ignore
            window.traceSdk = traceSdk;
            return traceSdk;
        };
        return BaseTrace;
    }());

    var TraceSdk = /** @class */ (function (_super) {
        __extends(TraceSdk, _super);
        function TraceSdk() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return TraceSdk;
    }(BaseTrace));

    var instance;
    var init = function (options) {
        if (instance) {
            return instance;
        }
        instance = TraceSdk.init(options);
        console.log('instance: ', instance);
        return instance;
    };
    // @ts-ignore
    window.traceSdkInit = init;

    exports.init = init;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=trace-sdk.umd.js.map
