"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/invoices/page",{

/***/ "(app-pages-browser)/./app/lib/utils.ts":
/*!**************************!*\
  !*** ./app/lib/utils.ts ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formatCurrency: function() { return /* binding */ formatCurrency; },\n/* harmony export */   formatDateToLocal: function() { return /* binding */ formatDateToLocal; },\n/* harmony export */   generatePagination: function() { return /* binding */ generatePagination; },\n/* harmony export */   generateYAxis: function() { return /* binding */ generateYAxis; }\n/* harmony export */ });\nconst formatCurrency = (amount)=>{\n    return (amount / 100).toLocaleString(\"en-US\", {\n        style: \"currency\",\n        currency: \"USD\"\n    });\n};\nconst formatDateToLocal = function(dateStr) {\n    let locale = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : \"en-US\";\n    const date = new Date(dateStr);\n    const options = {\n        day: \"numeric\",\n        month: \"short\",\n        year: \"numeric\"\n    };\n    const formatter = new Intl.DateTimeFormat(locale, options);\n    return formatter.format(date);\n};\nconst generateYAxis = (revenue)=>{\n    // Calculate what labels we need to display on the y-axis\n    // based on highest record and in 1000s\n    const yAxisLabels = [];\n    const highestRecord = Math.max(...revenue.map((month)=>month.revenue));\n    const topLabel = Math.ceil(highestRecord / 1000) * 1000;\n    for(let i = topLabel; i >= 0; i -= 1000){\n        yAxisLabels.push(\"$\".concat(i / 1000, \"K\"));\n    }\n    return {\n        yAxisLabels,\n        topLabel\n    };\n};\nconst generatePagination = (currentPage, totalPages)=>{\n    // If the total number of pages is 7 or less,\n    // display all pages without any ellipsis.\n    if (totalPages <= 7) {\n        return Array.from({\n            length: totalPages\n        }, (_, i)=>i + 1);\n    }\n    // If the current page is among the first 3 pages,\n    // show the first 3, an ellipsis, and the last 2 pages.\n    if (currentPage <= 3) {\n        return [\n            1,\n            2,\n            3,\n            \"...\",\n            totalPages - 1,\n            totalPages\n        ];\n    }\n    // If the current page is among the last 3 pages,\n    // show the first 2, an ellipsis, and the last 3 pages.\n    if (currentPage >= totalPages - 2) {\n        return [\n            1,\n            2,\n            \"...\",\n            totalPages - 2,\n            totalPages - 1,\n            totalPages\n        ];\n    }\n    // If the current page is somewhere in the middle,\n    // show the first page, an ellipsis, the current page and its neighbors,\n    // another ellipsis, and the last page.\n    return [\n        1,\n        \"...\",\n        currentPage - 1,\n        currentPage,\n        currentPage + 1,\n        \"...\",\n        totalPages\n    ];\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9saWIvdXRpbHMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVPLE1BQU1BLGlCQUFpQixDQUFDQztJQUM3QixPQUFPLENBQUNBLFNBQVMsR0FBRSxFQUFHQyxjQUFjLENBQUMsU0FBUztRQUM1Q0MsT0FBTztRQUNQQyxVQUFVO0lBQ1o7QUFDRixFQUFFO0FBRUssTUFBTUMsb0JBQW9CLFNBQy9CQztRQUNBQywwRUFBaUI7SUFFakIsTUFBTUMsT0FBTyxJQUFJQyxLQUFLSDtJQUN0QixNQUFNSSxVQUFzQztRQUMxQ0MsS0FBSztRQUNMQyxPQUFPO1FBQ1BDLE1BQU07SUFDUjtJQUNBLE1BQU1DLFlBQVksSUFBSUMsS0FBS0MsY0FBYyxDQUFDVCxRQUFRRztJQUNsRCxPQUFPSSxVQUFVRyxNQUFNLENBQUNUO0FBQzFCLEVBQUU7QUFFSyxNQUFNVSxnQkFBZ0IsQ0FBQ0M7SUFDNUIseURBQXlEO0lBQ3pELHVDQUF1QztJQUN2QyxNQUFNQyxjQUFjLEVBQUU7SUFDdEIsTUFBTUMsZ0JBQWdCQyxLQUFLQyxHQUFHLElBQUlKLFFBQVFLLEdBQUcsQ0FBQyxDQUFDWixRQUFVQSxNQUFNTyxPQUFPO0lBQ3RFLE1BQU1NLFdBQVdILEtBQUtJLElBQUksQ0FBQ0wsZ0JBQWdCLFFBQVE7SUFFbkQsSUFBSyxJQUFJTSxJQUFJRixVQUFVRSxLQUFLLEdBQUdBLEtBQUssS0FBTTtRQUN4Q1AsWUFBWVEsSUFBSSxDQUFDLElBQWEsT0FBVEQsSUFBSSxNQUFLO0lBQ2hDO0lBRUEsT0FBTztRQUFFUDtRQUFhSztJQUFTO0FBQ2pDLEVBQUU7QUFFSyxNQUFNSSxxQkFBcUIsQ0FBQ0MsYUFBcUJDO0lBQ3RELDZDQUE2QztJQUM3QywwQ0FBMEM7SUFDMUMsSUFBSUEsY0FBYyxHQUFHO1FBQ25CLE9BQU9DLE1BQU1DLElBQUksQ0FBQztZQUFFQyxRQUFRSDtRQUFXLEdBQUcsQ0FBQ0ksR0FBR1IsSUFBTUEsSUFBSTtJQUMxRDtJQUVBLGtEQUFrRDtJQUNsRCx1REFBdUQ7SUFDdkQsSUFBSUcsZUFBZSxHQUFHO1FBQ3BCLE9BQU87WUFBQztZQUFHO1lBQUc7WUFBRztZQUFPQyxhQUFhO1lBQUdBO1NBQVc7SUFDckQ7SUFFQSxpREFBaUQ7SUFDakQsdURBQXVEO0lBQ3ZELElBQUlELGVBQWVDLGFBQWEsR0FBRztRQUNqQyxPQUFPO1lBQUM7WUFBRztZQUFHO1lBQU9BLGFBQWE7WUFBR0EsYUFBYTtZQUFHQTtTQUFXO0lBQ2xFO0lBRUEsa0RBQWtEO0lBQ2xELHdFQUF3RTtJQUN4RSx1Q0FBdUM7SUFDdkMsT0FBTztRQUNMO1FBQ0E7UUFDQUQsY0FBYztRQUNkQTtRQUNBQSxjQUFjO1FBQ2Q7UUFDQUM7S0FDRDtBQUNILEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2xpYi91dGlscy50cz9jZDdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJldmVudWUgfSBmcm9tICcuL2RlZmluaXRpb25zJztcblxuZXhwb3J0IGNvbnN0IGZvcm1hdEN1cnJlbmN5ID0gKGFtb3VudDogbnVtYmVyKSA9PiB7XG4gIHJldHVybiAoYW1vdW50IC8gMTAwKS50b0xvY2FsZVN0cmluZygnZW4tVVMnLCB7XG4gICAgc3R5bGU6ICdjdXJyZW5jeScsXG4gICAgY3VycmVuY3k6ICdVU0QnLFxuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBmb3JtYXREYXRlVG9Mb2NhbCA9IChcbiAgZGF0ZVN0cjogc3RyaW5nLFxuICBsb2NhbGU6IHN0cmluZyA9ICdlbi1VUycsXG4pID0+IHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHIpO1xuICBjb25zdCBvcHRpb25zOiBJbnRsLkRhdGVUaW1lRm9ybWF0T3B0aW9ucyA9IHtcbiAgICBkYXk6ICdudW1lcmljJyxcbiAgICBtb250aDogJ3Nob3J0JyxcbiAgICB5ZWFyOiAnbnVtZXJpYycsXG4gIH07XG4gIGNvbnN0IGZvcm1hdHRlciA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY2FsZSwgb3B0aW9ucyk7XG4gIHJldHVybiBmb3JtYXR0ZXIuZm9ybWF0KGRhdGUpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlWUF4aXMgPSAocmV2ZW51ZTogUmV2ZW51ZVtdKSA9PiB7XG4gIC8vIENhbGN1bGF0ZSB3aGF0IGxhYmVscyB3ZSBuZWVkIHRvIGRpc3BsYXkgb24gdGhlIHktYXhpc1xuICAvLyBiYXNlZCBvbiBoaWdoZXN0IHJlY29yZCBhbmQgaW4gMTAwMHNcbiAgY29uc3QgeUF4aXNMYWJlbHMgPSBbXTtcbiAgY29uc3QgaGlnaGVzdFJlY29yZCA9IE1hdGgubWF4KC4uLnJldmVudWUubWFwKChtb250aCkgPT4gbW9udGgucmV2ZW51ZSkpO1xuICBjb25zdCB0b3BMYWJlbCA9IE1hdGguY2VpbChoaWdoZXN0UmVjb3JkIC8gMTAwMCkgKiAxMDAwO1xuXG4gIGZvciAobGV0IGkgPSB0b3BMYWJlbDsgaSA+PSAwOyBpIC09IDEwMDApIHtcbiAgICB5QXhpc0xhYmVscy5wdXNoKGAkJHtpIC8gMTAwMH1LYCk7XG4gIH1cblxuICByZXR1cm4geyB5QXhpc0xhYmVscywgdG9wTGFiZWwgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVBhZ2luYXRpb24gPSAoY3VycmVudFBhZ2U6IG51bWJlciwgdG90YWxQYWdlczogbnVtYmVyKSA9PiB7XG4gIC8vIElmIHRoZSB0b3RhbCBudW1iZXIgb2YgcGFnZXMgaXMgNyBvciBsZXNzLFxuICAvLyBkaXNwbGF5IGFsbCBwYWdlcyB3aXRob3V0IGFueSBlbGxpcHNpcy5cbiAgaWYgKHRvdGFsUGFnZXMgPD0gNykge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHsgbGVuZ3RoOiB0b3RhbFBhZ2VzIH0sIChfLCBpKSA9PiBpICsgMSk7XG4gIH1cblxuICAvLyBJZiB0aGUgY3VycmVudCBwYWdlIGlzIGFtb25nIHRoZSBmaXJzdCAzIHBhZ2VzLFxuICAvLyBzaG93IHRoZSBmaXJzdCAzLCBhbiBlbGxpcHNpcywgYW5kIHRoZSBsYXN0IDIgcGFnZXMuXG4gIGlmIChjdXJyZW50UGFnZSA8PSAzKSB7XG4gICAgcmV0dXJuIFsxLCAyLCAzLCAnLi4uJywgdG90YWxQYWdlcyAtIDEsIHRvdGFsUGFnZXNdO1xuICB9XG5cbiAgLy8gSWYgdGhlIGN1cnJlbnQgcGFnZSBpcyBhbW9uZyB0aGUgbGFzdCAzIHBhZ2VzLFxuICAvLyBzaG93IHRoZSBmaXJzdCAyLCBhbiBlbGxpcHNpcywgYW5kIHRoZSBsYXN0IDMgcGFnZXMuXG4gIGlmIChjdXJyZW50UGFnZSA+PSB0b3RhbFBhZ2VzIC0gMikge1xuICAgIHJldHVybiBbMSwgMiwgJy4uLicsIHRvdGFsUGFnZXMgLSAyLCB0b3RhbFBhZ2VzIC0gMSwgdG90YWxQYWdlc107XG4gIH1cblxuICAvLyBJZiB0aGUgY3VycmVudCBwYWdlIGlzIHNvbWV3aGVyZSBpbiB0aGUgbWlkZGxlLFxuICAvLyBzaG93IHRoZSBmaXJzdCBwYWdlLCBhbiBlbGxpcHNpcywgdGhlIGN1cnJlbnQgcGFnZSBhbmQgaXRzIG5laWdoYm9ycyxcbiAgLy8gYW5vdGhlciBlbGxpcHNpcywgYW5kIHRoZSBsYXN0IHBhZ2UuXG4gIHJldHVybiBbXG4gICAgMSxcbiAgICAnLi4uJyxcbiAgICBjdXJyZW50UGFnZSAtIDEsXG4gICAgY3VycmVudFBhZ2UsXG4gICAgY3VycmVudFBhZ2UgKyAxLFxuICAgICcuLi4nLFxuICAgIHRvdGFsUGFnZXMsXG4gIF07XG59O1xuIl0sIm5hbWVzIjpbImZvcm1hdEN1cnJlbmN5IiwiYW1vdW50IiwidG9Mb2NhbGVTdHJpbmciLCJzdHlsZSIsImN1cnJlbmN5IiwiZm9ybWF0RGF0ZVRvTG9jYWwiLCJkYXRlU3RyIiwibG9jYWxlIiwiZGF0ZSIsIkRhdGUiLCJvcHRpb25zIiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwiZm9ybWF0dGVyIiwiSW50bCIsIkRhdGVUaW1lRm9ybWF0IiwiZm9ybWF0IiwiZ2VuZXJhdGVZQXhpcyIsInJldmVudWUiLCJ5QXhpc0xhYmVscyIsImhpZ2hlc3RSZWNvcmQiLCJNYXRoIiwibWF4IiwibWFwIiwidG9wTGFiZWwiLCJjZWlsIiwiaSIsInB1c2giLCJnZW5lcmF0ZVBhZ2luYXRpb24iLCJjdXJyZW50UGFnZSIsInRvdGFsUGFnZXMiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJfIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/lib/utils.ts\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/ui/invoices/pagination.tsx":
/*!****************************************!*\
  !*** ./app/ui/invoices/pagination.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Pagination; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowLeftIcon_ArrowRightIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowLeftIcon,ArrowRightIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/ArrowLeftIcon.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowLeftIcon_ArrowRightIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowLeftIcon,ArrowRightIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/ArrowRightIcon.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"(app-pages-browser)/./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/lib/utils */ \"(app-pages-browser)/./app/lib/utils.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\nfunction Pagination(param) {\n    let { totalPages } = param;\n    // NOTE: comment in this code when you get to this point in the course\n    const allPages = (0,_app_lib_utils__WEBPACK_IMPORTED_MODULE_3__.generatePagination)(currentPage, totalPages);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"inline-flex\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PaginationArrow, {\n                    direction: \"left\",\n                    href: createPageURL(currentPage - 1),\n                    isDisabled: currentPage <= 1\n                }, void 0, false, {\n                    fileName: \"/Users/danieliliev/Desktop/softUni/next.js/demo/Acme-Next.js/app/ui/invoices/pagination.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex -space-x-px\",\n                    children: allPages.map((page, index)=>{\n                        let position;\n                        if (index === 0) position = \"first\";\n                        if (index === allPages.length - 1) position = \"last\";\n                        if (allPages.length === 1) position = \"single\";\n                        if (page === \"...\") position = \"middle\";\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PaginationNumber, {\n                            href: createPageURL(page),\n                            page: page,\n                            position: position,\n                            isActive: currentPage === page\n                        }, page, false, {\n                            fileName: \"/Users/danieliliev/Desktop/softUni/next.js/demo/Acme-Next.js/app/ui/invoices/pagination.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 15\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/danieliliev/Desktop/softUni/next.js/demo/Acme-Next.js/app/ui/invoices/pagination.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PaginationArrow, {\n                    direction: \"right\",\n                    href: createPageURL(currentPage + 1),\n                    isDisabled: currentPage >= totalPages\n                }, void 0, false, {\n                    fileName: \"/Users/danieliliev/Desktop/softUni/next.js/demo/Acme-Next.js/app/ui/invoices/pagination.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/danieliliev/Desktop/softUni/next.js/demo/Acme-Next.js/app/ui/invoices/pagination.tsx\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_c = Pagination;\nfunction PaginationNumber(param) {\n    let { page, href, isActive, position } = param;\n    const className = (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"flex h-10 w-10 items-center justify-center text-sm border\", {\n        \"rounded-l-md\": position === \"first\" || position === \"single\",\n        \"rounded-r-md\": position === \"last\" || position === \"single\",\n        \"z-10 bg-blue-600 border-blue-600 text-white\": isActive,\n        \"hover:bg-gray-100\": !isActive && position !== \"middle\",\n        \"text-gray-300\": position === \"middle\"\n    });\n    return isActive || position === \"middle\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: className,\n        children: page\n    }, void 0, false, {\n        fileName: \"/Users/danieliliev/Desktop/softUni/next.js/demo/Acme-Next.js/app/ui/invoices/pagination.tsx\",\n        lineNumber: 78,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: href,\n        className: className,\n        children: page\n    }, void 0, false, {\n        fileName: \"/Users/danieliliev/Desktop/softUni/next.js/demo/Acme-Next.js/app/ui/invoices/pagination.tsx\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, this);\n}\n_c1 = PaginationNumber;\nfunction PaginationArrow(param) {\n    let { href, direction, isDisabled } = param;\n    const className = (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"flex h-10 w-10 items-center justify-center rounded-md border\", {\n        \"pointer-events-none text-gray-300\": isDisabled,\n        \"hover:bg-gray-100\": !isDisabled,\n        \"mr-2 md:mr-4\": direction === \"left\",\n        \"ml-2 md:ml-4\": direction === \"right\"\n    });\n    const icon = direction === \"left\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowLeftIcon_ArrowRightIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        className: \"w-4\"\n    }, void 0, false, {\n        fileName: \"/Users/danieliliev/Desktop/softUni/next.js/demo/Acme-Next.js/app/ui/invoices/pagination.tsx\",\n        lineNumber: 107,\n        columnNumber: 7\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowLeftIcon_ArrowRightIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        className: \"w-4\"\n    }, void 0, false, {\n        fileName: \"/Users/danieliliev/Desktop/softUni/next.js/demo/Acme-Next.js/app/ui/invoices/pagination.tsx\",\n        lineNumber: 109,\n        columnNumber: 7\n    }, this);\n    return isDisabled ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: className,\n        children: icon\n    }, void 0, false, {\n        fileName: \"/Users/danieliliev/Desktop/softUni/next.js/demo/Acme-Next.js/app/ui/invoices/pagination.tsx\",\n        lineNumber: 113,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        className: className,\n        href: href,\n        children: icon\n    }, void 0, false, {\n        fileName: \"/Users/danieliliev/Desktop/softUni/next.js/demo/Acme-Next.js/app/ui/invoices/pagination.tsx\",\n        lineNumber: 115,\n        columnNumber: 5\n    }, this);\n}\n_c2 = PaginationArrow;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Pagination\");\n$RefreshReg$(_c1, \"PaginationNumber\");\n$RefreshReg$(_c2, \"PaginationArrow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91aS9pbnZvaWNlcy9wYWdpbmF0aW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFNEU7QUFDcEQ7QUFDSztBQUN3QjtBQUV0QyxTQUFTSyxXQUFXLEtBQXNDO1FBQXRDLEVBQUVDLFVBQVUsRUFBMEIsR0FBdEM7SUFDakMsc0VBQXNFO0lBRXRFLE1BQU1DLFdBQVdILGtFQUFrQkEsQ0FBQ0ksYUFBYUY7SUFFakQscUJBQ0U7a0JBR0UsNEVBQUNHO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFDQ0MsV0FBVTtvQkFDVkMsTUFBTUMsY0FBY04sY0FBYztvQkFDbENPLFlBQVlQLGVBQWU7Ozs7Ozs4QkFHN0IsOERBQUNDO29CQUFJQyxXQUFVOzhCQUNaSCxTQUFTUyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUM7d0JBQ25CLElBQUlDO3dCQUVKLElBQUlELFVBQVUsR0FBR0MsV0FBVzt3QkFDNUIsSUFBSUQsVUFBVVgsU0FBU2EsTUFBTSxHQUFHLEdBQUdELFdBQVc7d0JBQzlDLElBQUlaLFNBQVNhLE1BQU0sS0FBSyxHQUFHRCxXQUFXO3dCQUN0QyxJQUFJRixTQUFTLE9BQU9FLFdBQVc7d0JBRS9CLHFCQUNFLDhEQUFDRTs0QkFFQ1IsTUFBTUMsY0FBY0c7NEJBQ3BCQSxNQUFNQTs0QkFDTkUsVUFBVUE7NEJBQ1ZHLFVBQVVkLGdCQUFnQlM7MkJBSnJCQTs7Ozs7b0JBT1g7Ozs7Ozs4QkFHRiw4REFBQ047b0JBQ0NDLFdBQVU7b0JBQ1ZDLE1BQU1DLGNBQWNOLGNBQWM7b0JBQ2xDTyxZQUFZUCxlQUFlRjs7Ozs7Ozs7Ozs7OztBQUtyQztLQTdDd0JEO0FBK0N4QixTQUFTZ0IsaUJBQWlCLEtBVXpCO1FBVnlCLEVBQ3hCSixJQUFJLEVBQ0pKLElBQUksRUFDSlMsUUFBUSxFQUNSSCxRQUFRLEVBTVQsR0FWeUI7SUFXeEIsTUFBTVQsWUFBWVIsZ0RBQUlBLENBQ3BCLDZEQUNBO1FBQ0UsZ0JBQWdCaUIsYUFBYSxXQUFXQSxhQUFhO1FBQ3JELGdCQUFnQkEsYUFBYSxVQUFVQSxhQUFhO1FBQ3BELCtDQUErQ0c7UUFDL0MscUJBQXFCLENBQUNBLFlBQVlILGFBQWE7UUFDL0MsaUJBQWlCQSxhQUFhO0lBQ2hDO0lBR0YsT0FBT0csWUFBWUgsYUFBYSx5QkFDOUIsOERBQUNWO1FBQUlDLFdBQVdBO2tCQUFZTzs7Ozs7NkJBRTVCLDhEQUFDZCxrREFBSUE7UUFBQ1UsTUFBTUE7UUFBTUgsV0FBV0E7a0JBQzFCTzs7Ozs7O0FBR1A7TUE3QlNJO0FBK0JULFNBQVNWLGdCQUFnQixLQVF4QjtRQVJ3QixFQUN2QkUsSUFBSSxFQUNKRCxTQUFTLEVBQ1RHLFVBQVUsRUFLWCxHQVJ3QjtJQVN2QixNQUFNTCxZQUFZUixnREFBSUEsQ0FDcEIsZ0VBQ0E7UUFDRSxxQ0FBcUNhO1FBQ3JDLHFCQUFxQixDQUFDQTtRQUN0QixnQkFBZ0JILGNBQWM7UUFDOUIsZ0JBQWdCQSxjQUFjO0lBQ2hDO0lBR0YsTUFBTVcsT0FDSlgsY0FBYyx1QkFDWiw4REFBQ1osc0hBQWFBO1FBQUNVLFdBQVU7Ozs7OzZCQUV6Qiw4REFBQ1Qsc0hBQWNBO1FBQUNTLFdBQVU7Ozs7OztJQUc5QixPQUFPSywyQkFDTCw4REFBQ047UUFBSUMsV0FBV0E7a0JBQVlhOzs7Ozs2QkFFNUIsOERBQUNwQixrREFBSUE7UUFBQ08sV0FBV0E7UUFBV0csTUFBTUE7a0JBQy9CVTs7Ozs7O0FBR1A7TUFqQ1NaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC91aS9pbnZvaWNlcy9wYWdpbmF0aW9uLnRzeD84MDMwIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgQXJyb3dMZWZ0SWNvbiwgQXJyb3dSaWdodEljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0LzI0L291dGxpbmUnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgZ2VuZXJhdGVQYWdpbmF0aW9uIH0gZnJvbSAnQC9hcHAvbGliL3V0aWxzJztcbmltcG9ydCB7IHVzZVNlYXJjaFBhcmFtcywgdXNlUGF0aG5hbWUgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnaW5hdGlvbih7IHRvdGFsUGFnZXMgfTogeyB0b3RhbFBhZ2VzOiBudW1iZXIgfSkge1xuICAvLyBOT1RFOiBjb21tZW50IGluIHRoaXMgY29kZSB3aGVuIHlvdSBnZXQgdG8gdGhpcyBwb2ludCBpbiB0aGUgY291cnNlXG5cbiAgY29uc3QgYWxsUGFnZXMgPSBnZW5lcmF0ZVBhZ2luYXRpb24oY3VycmVudFBhZ2UsIHRvdGFsUGFnZXMpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHsvKiBOT1RFOiBjb21tZW50IGluIHRoaXMgY29kZSB3aGVuIHlvdSBnZXQgdG8gdGhpcyBwb2ludCBpbiB0aGUgY291cnNlICovfVxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1mbGV4XCI+XG4gICAgICAgIDxQYWdpbmF0aW9uQXJyb3dcbiAgICAgICAgICBkaXJlY3Rpb249XCJsZWZ0XCJcbiAgICAgICAgICBocmVmPXtjcmVhdGVQYWdlVVJMKGN1cnJlbnRQYWdlIC0gMSl9XG4gICAgICAgICAgaXNEaXNhYmxlZD17Y3VycmVudFBhZ2UgPD0gMX1cbiAgICAgICAgLz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggLXNwYWNlLXgtcHhcIj5cbiAgICAgICAgICB7YWxsUGFnZXMubWFwKChwYWdlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgbGV0IHBvc2l0aW9uOiAnZmlyc3QnIHwgJ2xhc3QnIHwgJ3NpbmdsZScgfCAnbWlkZGxlJyB8IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSBwb3NpdGlvbiA9ICdmaXJzdCc7XG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IGFsbFBhZ2VzLmxlbmd0aCAtIDEpIHBvc2l0aW9uID0gJ2xhc3QnO1xuICAgICAgICAgICAgaWYgKGFsbFBhZ2VzLmxlbmd0aCA9PT0gMSkgcG9zaXRpb24gPSAnc2luZ2xlJztcbiAgICAgICAgICAgIGlmIChwYWdlID09PSAnLi4uJykgcG9zaXRpb24gPSAnbWlkZGxlJztcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFBhZ2luYXRpb25OdW1iZXJcbiAgICAgICAgICAgICAgICBrZXk9e3BhZ2V9XG4gICAgICAgICAgICAgICAgaHJlZj17Y3JlYXRlUGFnZVVSTChwYWdlKX1cbiAgICAgICAgICAgICAgICBwYWdlPXtwYWdlfVxuICAgICAgICAgICAgICAgIHBvc2l0aW9uPXtwb3NpdGlvbn1cbiAgICAgICAgICAgICAgICBpc0FjdGl2ZT17Y3VycmVudFBhZ2UgPT09IHBhZ2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8UGFnaW5hdGlvbkFycm93XG4gICAgICAgICAgZGlyZWN0aW9uPVwicmlnaHRcIlxuICAgICAgICAgIGhyZWY9e2NyZWF0ZVBhZ2VVUkwoY3VycmVudFBhZ2UgKyAxKX1cbiAgICAgICAgICBpc0Rpc2FibGVkPXtjdXJyZW50UGFnZSA+PSB0b3RhbFBhZ2VzfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFBhZ2luYXRpb25OdW1iZXIoe1xuICBwYWdlLFxuICBocmVmLFxuICBpc0FjdGl2ZSxcbiAgcG9zaXRpb24sXG59OiB7XG4gIHBhZ2U6IG51bWJlciB8IHN0cmluZztcbiAgaHJlZjogc3RyaW5nO1xuICBwb3NpdGlvbj86ICdmaXJzdCcgfCAnbGFzdCcgfCAnbWlkZGxlJyB8ICdzaW5nbGUnO1xuICBpc0FjdGl2ZTogYm9vbGVhbjtcbn0pIHtcbiAgY29uc3QgY2xhc3NOYW1lID0gY2xzeChcbiAgICAnZmxleCBoLTEwIHctMTAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtc20gYm9yZGVyJyxcbiAgICB7XG4gICAgICAncm91bmRlZC1sLW1kJzogcG9zaXRpb24gPT09ICdmaXJzdCcgfHwgcG9zaXRpb24gPT09ICdzaW5nbGUnLFxuICAgICAgJ3JvdW5kZWQtci1tZCc6IHBvc2l0aW9uID09PSAnbGFzdCcgfHwgcG9zaXRpb24gPT09ICdzaW5nbGUnLFxuICAgICAgJ3otMTAgYmctYmx1ZS02MDAgYm9yZGVyLWJsdWUtNjAwIHRleHQtd2hpdGUnOiBpc0FjdGl2ZSxcbiAgICAgICdob3ZlcjpiZy1ncmF5LTEwMCc6ICFpc0FjdGl2ZSAmJiBwb3NpdGlvbiAhPT0gJ21pZGRsZScsXG4gICAgICAndGV4dC1ncmF5LTMwMCc6IHBvc2l0aW9uID09PSAnbWlkZGxlJyxcbiAgICB9LFxuICApO1xuXG4gIHJldHVybiBpc0FjdGl2ZSB8fCBwb3NpdGlvbiA9PT0gJ21pZGRsZScgPyAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+e3BhZ2V9PC9kaXY+XG4gICkgOiAoXG4gICAgPExpbmsgaHJlZj17aHJlZn0gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAge3BhZ2V9XG4gICAgPC9MaW5rPlxuICApO1xufVxuXG5mdW5jdGlvbiBQYWdpbmF0aW9uQXJyb3coe1xuICBocmVmLFxuICBkaXJlY3Rpb24sXG4gIGlzRGlzYWJsZWQsXG59OiB7XG4gIGhyZWY6IHN0cmluZztcbiAgZGlyZWN0aW9uOiAnbGVmdCcgfCAncmlnaHQnO1xuICBpc0Rpc2FibGVkPzogYm9vbGVhbjtcbn0pIHtcbiAgY29uc3QgY2xhc3NOYW1lID0gY2xzeChcbiAgICAnZmxleCBoLTEwIHctMTAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbWQgYm9yZGVyJyxcbiAgICB7XG4gICAgICAncG9pbnRlci1ldmVudHMtbm9uZSB0ZXh0LWdyYXktMzAwJzogaXNEaXNhYmxlZCxcbiAgICAgICdob3ZlcjpiZy1ncmF5LTEwMCc6ICFpc0Rpc2FibGVkLFxuICAgICAgJ21yLTIgbWQ6bXItNCc6IGRpcmVjdGlvbiA9PT0gJ2xlZnQnLFxuICAgICAgJ21sLTIgbWQ6bWwtNCc6IGRpcmVjdGlvbiA9PT0gJ3JpZ2h0JyxcbiAgICB9LFxuICApO1xuXG4gIGNvbnN0IGljb24gPVxuICAgIGRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gKFxuICAgICAgPEFycm93TGVmdEljb24gY2xhc3NOYW1lPVwidy00XCIgLz5cbiAgICApIDogKFxuICAgICAgPEFycm93UmlnaHRJY29uIGNsYXNzTmFtZT1cInctNFwiIC8+XG4gICAgKTtcblxuICByZXR1cm4gaXNEaXNhYmxlZCA/IChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57aWNvbn08L2Rpdj5cbiAgKSA6IChcbiAgICA8TGluayBjbGFzc05hbWU9e2NsYXNzTmFtZX0gaHJlZj17aHJlZn0+XG4gICAgICB7aWNvbn1cbiAgICA8L0xpbms+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQXJyb3dMZWZ0SWNvbiIsIkFycm93UmlnaHRJY29uIiwiY2xzeCIsIkxpbmsiLCJnZW5lcmF0ZVBhZ2luYXRpb24iLCJQYWdpbmF0aW9uIiwidG90YWxQYWdlcyIsImFsbFBhZ2VzIiwiY3VycmVudFBhZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJQYWdpbmF0aW9uQXJyb3ciLCJkaXJlY3Rpb24iLCJocmVmIiwiY3JlYXRlUGFnZVVSTCIsImlzRGlzYWJsZWQiLCJtYXAiLCJwYWdlIiwiaW5kZXgiLCJwb3NpdGlvbiIsImxlbmd0aCIsIlBhZ2luYXRpb25OdW1iZXIiLCJpc0FjdGl2ZSIsImljb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/ui/invoices/pagination.tsx\n"));

/***/ })

});