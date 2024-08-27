"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onVitals = exports.mapMetric = exports.generateUniqueId = void 0;
/*
 * @Author: blue
 * @Date: 2024-08-27 17:25:19
 * @FilePath: /fontend-trace-geekbang-course/src/core/webvitals.ts
 */
var web_vitals_1 = require("web-vitals");
var web_vitals_reporter_1 = require("web-vitals-reporter");
var SCORE_RANGE_LCP = [2500, 4500];
var SCORE_RANGE_FID = [100, 300];
var SCORE_RANGE_CLS = [0.1, 0.25];
var SCORE_RANGE_FCP = [1.8, 3];
var SCORE_RANGE_INP = [200, 500];
var SCORE_RANGE_TTFB = [800, 1800];
var score = function (value, range) {
    return value < range[0] ? 'good' : value < range[1] ? 'needs improvement' : 'poor';
};
function generateUniqueId() {
    return "v1-".concat(Date.now(), "-").concat(Math.floor(Math.random() * (9e12 - 1)) + 1e12);
}
exports.generateUniqueId = generateUniqueId;
function round(val, precision) {
    if (precision === void 0) { precision = 0; }
    // @ts-ignore
    return +(Math.round("".concat(val, "e+").concat(precision)) + "e-".concat(precision));
}
function mapMetric(metric) {
    var _a;
    var isWebVital = ['FCP', 'TTFB', 'LCP', 'CLS', 'FID'].indexOf(metric.name) !== -1;
    return _a = {},
        _a[metric.name] = isWebVital ? round(metric.value, metric.name === 'CLS' ? 4 : 0) : metric.value,
        _a["".concat(metric.name, "Rating")] = metric.rating,
        _a;
}
exports.mapMetric = mapMetric;
var sendToAnalytics = (0, web_vitals_reporter_1.createApiReporter)('/analytics', {
    initial: (0, web_vitals_reporter_1.getDeviceInfo)(),
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
    (0, web_vitals_1.onLCP)(saveMetric);
    (0, web_vitals_1.onFID)(saveMetric);
    (0, web_vitals_1.onCLS)(saveMetric);
    // onTTFB(saveMetric)
    // onINP(saveMetric)
    // onFCP(saveMetric)
};
exports.onVitals = onVitals;
exports.default = {};
//# sourceMappingURL=webvitals.js.map