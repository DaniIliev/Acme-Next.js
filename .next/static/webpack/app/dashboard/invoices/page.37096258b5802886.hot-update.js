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

/***/ "(app-pages-browser)/./app/ui/invoices/pagination.tsx":
/*!****************************************!*\
  !*** ./app/ui/invoices/pagination.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Pagination; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowLeftIcon_ArrowRightIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowLeftIcon,ArrowRightIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/ArrowLeftIcon.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowLeftIcon_ArrowRightIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowLeftIcon,ArrowRightIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/ArrowRightIcon.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"(app-pages-browser)/./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/lib/utils */ \"(app-pages-browser)/./app/lib/utils.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Pagination(param) {\n    let { totalPages } = param;\n    _s();\n    // NOTE: comment in this code when you get to this point in the course\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname)();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useSearchParams)();\n    const currentPage = Number(searchParams === null || searchParams === void 0 ? void 0 : searchParams.get(\"page\")) || 1;\n    const allPages = (0,_app_lib_utils__WEBPACK_IMPORTED_MODULE_3__.generatePagination)(currentPage, totalPages);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"inline-flex\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PaginationArrow, {\n                    direction: \"left\",\n                    href: createPageURL(currentPage - 1),\n                    isDisabled: currentPage <= 1\n                }, void 0, false, {\n                    fileName: \"/Users/danieliliev/Desktop/softUni/next.js/demo/Acme-Next.js/app/ui/invoices/pagination.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex -space-x-px\",\n                    children: allPages.map((page, index)=>{\n                        let position;\n                        if (index === 0) position = \"first\";\n                        if (index === allPages.length - 1) position = \"last\";\n                        if (allPages.length === 1) position = \"single\";\n                        if (page === \"...\") position = \"middle\";\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PaginationNumber, {\n                            href: createPageURL(page),\n                            page: page,\n                            position: position,\n                            isActive: currentPage === page\n                        }, page, false, {\n                            fileName: \"/Users/danieliliev/Desktop/softUni/next.js/demo/Acme-Next.js/app/ui/invoices/pagination.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 15\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/danieliliev/Desktop/softUni/next.js/demo/Acme-Next.js/app/ui/invoices/pagination.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PaginationArrow, {\n                    direction: \"right\",\n                    href: createPageURL(currentPage + 1),\n                    isDisabled: currentPage >= totalPages\n                }, void 0, false, {\n                    fileName: \"/Users/danieliliev/Desktop/softUni/next.js/demo/Acme-Next.js/app/ui/invoices/pagination.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/danieliliev/Desktop/softUni/next.js/demo/Acme-Next.js/app/ui/invoices/pagination.tsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Pagination, \"AxA9T5G2Po78UC4hL8ljCdvMciE=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname,\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useSearchParams\n    ];\n});\n_c = Pagination;\nfunction PaginationNumber(param) {\n    let { page, href, isActive, position } = param;\n    const className = (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"flex h-10 w-10 items-center justify-center text-sm border\", {\n        \"rounded-l-md\": position === \"first\" || position === \"single\",\n        \"rounded-r-md\": position === \"last\" || position === \"single\",\n        \"z-10 bg-blue-600 border-blue-600 text-white\": isActive,\n        \"hover:bg-gray-100\": !isActive && position !== \"middle\",\n        \"text-gray-300\": position === \"middle\"\n    });\n    return isActive || position === \"middle\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: className,\n        children: page\n    }, void 0, false, {\n        fileName: \"/Users/danieliliev/Desktop/softUni/next.js/demo/Acme-Next.js/app/ui/invoices/pagination.tsx\",\n        lineNumber: 81,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: href,\n        className: className,\n        children: page\n    }, void 0, false, {\n        fileName: \"/Users/danieliliev/Desktop/softUni/next.js/demo/Acme-Next.js/app/ui/invoices/pagination.tsx\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, this);\n}\n_c1 = PaginationNumber;\nfunction PaginationArrow(param) {\n    let { href, direction, isDisabled } = param;\n    const className = (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"flex h-10 w-10 items-center justify-center rounded-md border\", {\n        \"pointer-events-none text-gray-300\": isDisabled,\n        \"hover:bg-gray-100\": !isDisabled,\n        \"mr-2 md:mr-4\": direction === \"left\",\n        \"ml-2 md:ml-4\": direction === \"right\"\n    });\n    const icon = direction === \"left\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowLeftIcon_ArrowRightIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        className: \"w-4\"\n    }, void 0, false, {\n        fileName: \"/Users/danieliliev/Desktop/softUni/next.js/demo/Acme-Next.js/app/ui/invoices/pagination.tsx\",\n        lineNumber: 110,\n        columnNumber: 7\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowLeftIcon_ArrowRightIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        className: \"w-4\"\n    }, void 0, false, {\n        fileName: \"/Users/danieliliev/Desktop/softUni/next.js/demo/Acme-Next.js/app/ui/invoices/pagination.tsx\",\n        lineNumber: 112,\n        columnNumber: 7\n    }, this);\n    return isDisabled ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: className,\n        children: icon\n    }, void 0, false, {\n        fileName: \"/Users/danieliliev/Desktop/softUni/next.js/demo/Acme-Next.js/app/ui/invoices/pagination.tsx\",\n        lineNumber: 116,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        className: className,\n        href: href,\n        children: icon\n    }, void 0, false, {\n        fileName: \"/Users/danieliliev/Desktop/softUni/next.js/demo/Acme-Next.js/app/ui/invoices/pagination.tsx\",\n        lineNumber: 118,\n        columnNumber: 5\n    }, this);\n}\n_c2 = PaginationArrow;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Pagination\");\n$RefreshReg$(_c1, \"PaginationNumber\");\n$RefreshReg$(_c2, \"PaginationArrow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91aS9pbnZvaWNlcy9wYWdpbmF0aW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFNEU7QUFDcEQ7QUFDSztBQUN3QjtBQUNVO0FBRWhELFNBQVNPLFdBQVcsS0FBc0M7UUFBdEMsRUFBRUMsVUFBVSxFQUEwQixHQUF0Qzs7SUFDakMsc0VBQXNFO0lBQ3RFLE1BQU1DLFdBQVdILDREQUFXQTtJQUM1QixNQUFNSSxlQUFlTCxnRUFBZUE7SUFDcEMsTUFBTU0sY0FBY0MsT0FBT0YseUJBQUFBLG1DQUFBQSxhQUFjRyxHQUFHLENBQUMsWUFBWTtJQUN6RCxNQUFNQyxXQUFXVixrRUFBa0JBLENBQUNPLGFBQWFIO0lBRWpELHFCQUNFO2tCQUdFLDRFQUFDTztZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQ0NDLFdBQVU7b0JBQ1ZDLE1BQU1DLGNBQWNULGNBQWM7b0JBQ2xDVSxZQUFZVixlQUFlOzs7Ozs7OEJBRzdCLDhEQUFDSTtvQkFBSUMsV0FBVTs4QkFDWkYsU0FBU1EsR0FBRyxDQUFDLENBQUNDLE1BQU1DO3dCQUNuQixJQUFJQzt3QkFFSixJQUFJRCxVQUFVLEdBQUdDLFdBQVc7d0JBQzVCLElBQUlELFVBQVVWLFNBQVNZLE1BQU0sR0FBRyxHQUFHRCxXQUFXO3dCQUM5QyxJQUFJWCxTQUFTWSxNQUFNLEtBQUssR0FBR0QsV0FBVzt3QkFDdEMsSUFBSUYsU0FBUyxPQUFPRSxXQUFXO3dCQUUvQixxQkFDRSw4REFBQ0U7NEJBRUNSLE1BQU1DLGNBQWNHOzRCQUNwQkEsTUFBTUE7NEJBQ05FLFVBQVVBOzRCQUNWRyxVQUFVakIsZ0JBQWdCWTsyQkFKckJBOzs7OztvQkFPWDs7Ozs7OzhCQUdGLDhEQUFDTjtvQkFDQ0MsV0FBVTtvQkFDVkMsTUFBTUMsY0FBY1QsY0FBYztvQkFDbENVLFlBQVlWLGVBQWVIOzs7Ozs7Ozs7Ozs7O0FBS3JDO0dBL0N3QkQ7O1FBRUxELHdEQUFXQTtRQUNQRCw0REFBZUE7OztLQUhkRTtBQWlEeEIsU0FBU29CLGlCQUFpQixLQVV6QjtRQVZ5QixFQUN4QkosSUFBSSxFQUNKSixJQUFJLEVBQ0pTLFFBQVEsRUFDUkgsUUFBUSxFQU1ULEdBVnlCO0lBV3hCLE1BQU1ULFlBQVlkLGdEQUFJQSxDQUNwQiw2REFDQTtRQUNFLGdCQUFnQnVCLGFBQWEsV0FBV0EsYUFBYTtRQUNyRCxnQkFBZ0JBLGFBQWEsVUFBVUEsYUFBYTtRQUNwRCwrQ0FBK0NHO1FBQy9DLHFCQUFxQixDQUFDQSxZQUFZSCxhQUFhO1FBQy9DLGlCQUFpQkEsYUFBYTtJQUNoQztJQUdGLE9BQU9HLFlBQVlILGFBQWEseUJBQzlCLDhEQUFDVjtRQUFJQyxXQUFXQTtrQkFBWU87Ozs7OzZCQUU1Qiw4REFBQ3BCLGtEQUFJQTtRQUFDZ0IsTUFBTUE7UUFBTUgsV0FBV0E7a0JBQzFCTzs7Ozs7O0FBR1A7TUE3QlNJO0FBK0JULFNBQVNWLGdCQUFnQixLQVF4QjtRQVJ3QixFQUN2QkUsSUFBSSxFQUNKRCxTQUFTLEVBQ1RHLFVBQVUsRUFLWCxHQVJ3QjtJQVN2QixNQUFNTCxZQUFZZCxnREFBSUEsQ0FDcEIsZ0VBQ0E7UUFDRSxxQ0FBcUNtQjtRQUNyQyxxQkFBcUIsQ0FBQ0E7UUFDdEIsZ0JBQWdCSCxjQUFjO1FBQzlCLGdCQUFnQkEsY0FBYztJQUNoQztJQUdGLE1BQU1XLE9BQ0pYLGNBQWMsdUJBQ1osOERBQUNsQixzSEFBYUE7UUFBQ2dCLFdBQVU7Ozs7OzZCQUV6Qiw4REFBQ2Ysc0hBQWNBO1FBQUNlLFdBQVU7Ozs7OztJQUc5QixPQUFPSywyQkFDTCw4REFBQ047UUFBSUMsV0FBV0E7a0JBQVlhOzs7Ozs2QkFFNUIsOERBQUMxQixrREFBSUE7UUFBQ2EsV0FBV0E7UUFBV0csTUFBTUE7a0JBQy9CVTs7Ozs7O0FBR1A7TUFqQ1NaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC91aS9pbnZvaWNlcy9wYWdpbmF0aW9uLnRzeD84MDMwIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgQXJyb3dMZWZ0SWNvbiwgQXJyb3dSaWdodEljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0LzI0L291dGxpbmUnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgZ2VuZXJhdGVQYWdpbmF0aW9uIH0gZnJvbSAnQC9hcHAvbGliL3V0aWxzJztcbmltcG9ydCB7IHVzZVNlYXJjaFBhcmFtcywgdXNlUGF0aG5hbWUgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdpbmF0aW9uKHsgdG90YWxQYWdlcyB9OiB7IHRvdGFsUGFnZXM6IG51bWJlciB9KSB7XG4gIC8vIE5PVEU6IGNvbW1lbnQgaW4gdGhpcyBjb2RlIHdoZW4geW91IGdldCB0byB0aGlzIHBvaW50IGluIHRoZSBjb3Vyc2VcbiAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpXG4gIGNvbnN0IHNlYXJjaFBhcmFtcyA9IHVzZVNlYXJjaFBhcmFtcygpXG4gIGNvbnN0IGN1cnJlbnRQYWdlID0gTnVtYmVyKHNlYXJjaFBhcmFtcz8uZ2V0KCdwYWdlJykpIHx8IDE7XG4gIGNvbnN0IGFsbFBhZ2VzID0gZ2VuZXJhdGVQYWdpbmF0aW9uKGN1cnJlbnRQYWdlLCB0b3RhbFBhZ2VzKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7LyogTk9URTogY29tbWVudCBpbiB0aGlzIGNvZGUgd2hlbiB5b3UgZ2V0IHRvIHRoaXMgcG9pbnQgaW4gdGhlIGNvdXJzZSAqL31cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleFwiPlxuICAgICAgICA8UGFnaW5hdGlvbkFycm93XG4gICAgICAgICAgZGlyZWN0aW9uPVwibGVmdFwiXG4gICAgICAgICAgaHJlZj17Y3JlYXRlUGFnZVVSTChjdXJyZW50UGFnZSAtIDEpfVxuICAgICAgICAgIGlzRGlzYWJsZWQ9e2N1cnJlbnRQYWdlIDw9IDF9XG4gICAgICAgIC8+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IC1zcGFjZS14LXB4XCI+XG4gICAgICAgICAge2FsbFBhZ2VzLm1hcCgocGFnZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGxldCBwb3NpdGlvbjogJ2ZpcnN0JyB8ICdsYXN0JyB8ICdzaW5nbGUnIHwgJ21pZGRsZScgfCB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkgcG9zaXRpb24gPSAnZmlyc3QnO1xuICAgICAgICAgICAgaWYgKGluZGV4ID09PSBhbGxQYWdlcy5sZW5ndGggLSAxKSBwb3NpdGlvbiA9ICdsYXN0JztcbiAgICAgICAgICAgIGlmIChhbGxQYWdlcy5sZW5ndGggPT09IDEpIHBvc2l0aW9uID0gJ3NpbmdsZSc7XG4gICAgICAgICAgICBpZiAocGFnZSA9PT0gJy4uLicpIHBvc2l0aW9uID0gJ21pZGRsZSc7XG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxQYWdpbmF0aW9uTnVtYmVyXG4gICAgICAgICAgICAgICAga2V5PXtwYWdlfVxuICAgICAgICAgICAgICAgIGhyZWY9e2NyZWF0ZVBhZ2VVUkwocGFnZSl9XG4gICAgICAgICAgICAgICAgcGFnZT17cGFnZX1cbiAgICAgICAgICAgICAgICBwb3NpdGlvbj17cG9zaXRpb259XG4gICAgICAgICAgICAgICAgaXNBY3RpdmU9e2N1cnJlbnRQYWdlID09PSBwYWdlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPFBhZ2luYXRpb25BcnJvd1xuICAgICAgICAgIGRpcmVjdGlvbj1cInJpZ2h0XCJcbiAgICAgICAgICBocmVmPXtjcmVhdGVQYWdlVVJMKGN1cnJlbnRQYWdlICsgMSl9XG4gICAgICAgICAgaXNEaXNhYmxlZD17Y3VycmVudFBhZ2UgPj0gdG90YWxQYWdlc31cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuXG5mdW5jdGlvbiBQYWdpbmF0aW9uTnVtYmVyKHtcbiAgcGFnZSxcbiAgaHJlZixcbiAgaXNBY3RpdmUsXG4gIHBvc2l0aW9uLFxufToge1xuICBwYWdlOiBudW1iZXIgfCBzdHJpbmc7XG4gIGhyZWY6IHN0cmluZztcbiAgcG9zaXRpb24/OiAnZmlyc3QnIHwgJ2xhc3QnIHwgJ21pZGRsZScgfCAnc2luZ2xlJztcbiAgaXNBY3RpdmU6IGJvb2xlYW47XG59KSB7XG4gIGNvbnN0IGNsYXNzTmFtZSA9IGNsc3goXG4gICAgJ2ZsZXggaC0xMCB3LTEwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LXNtIGJvcmRlcicsXG4gICAge1xuICAgICAgJ3JvdW5kZWQtbC1tZCc6IHBvc2l0aW9uID09PSAnZmlyc3QnIHx8IHBvc2l0aW9uID09PSAnc2luZ2xlJyxcbiAgICAgICdyb3VuZGVkLXItbWQnOiBwb3NpdGlvbiA9PT0gJ2xhc3QnIHx8IHBvc2l0aW9uID09PSAnc2luZ2xlJyxcbiAgICAgICd6LTEwIGJnLWJsdWUtNjAwIGJvcmRlci1ibHVlLTYwMCB0ZXh0LXdoaXRlJzogaXNBY3RpdmUsXG4gICAgICAnaG92ZXI6YmctZ3JheS0xMDAnOiAhaXNBY3RpdmUgJiYgcG9zaXRpb24gIT09ICdtaWRkbGUnLFxuICAgICAgJ3RleHQtZ3JheS0zMDAnOiBwb3NpdGlvbiA9PT0gJ21pZGRsZScsXG4gICAgfSxcbiAgKTtcblxuICByZXR1cm4gaXNBY3RpdmUgfHwgcG9zaXRpb24gPT09ICdtaWRkbGUnID8gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PntwYWdlfTwvZGl2PlxuICApIDogKFxuICAgIDxMaW5rIGhyZWY9e2hyZWZ9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIHtwYWdlfVxuICAgIDwvTGluaz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gUGFnaW5hdGlvbkFycm93KHtcbiAgaHJlZixcbiAgZGlyZWN0aW9uLFxuICBpc0Rpc2FibGVkLFxufToge1xuICBocmVmOiBzdHJpbmc7XG4gIGRpcmVjdGlvbjogJ2xlZnQnIHwgJ3JpZ2h0JztcbiAgaXNEaXNhYmxlZD86IGJvb2xlYW47XG59KSB7XG4gIGNvbnN0IGNsYXNzTmFtZSA9IGNsc3goXG4gICAgJ2ZsZXggaC0xMCB3LTEwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLW1kIGJvcmRlcicsXG4gICAge1xuICAgICAgJ3BvaW50ZXItZXZlbnRzLW5vbmUgdGV4dC1ncmF5LTMwMCc6IGlzRGlzYWJsZWQsXG4gICAgICAnaG92ZXI6YmctZ3JheS0xMDAnOiAhaXNEaXNhYmxlZCxcbiAgICAgICdtci0yIG1kOm1yLTQnOiBkaXJlY3Rpb24gPT09ICdsZWZ0JyxcbiAgICAgICdtbC0yIG1kOm1sLTQnOiBkaXJlY3Rpb24gPT09ICdyaWdodCcsXG4gICAgfSxcbiAgKTtcblxuICBjb25zdCBpY29uID1cbiAgICBkaXJlY3Rpb24gPT09ICdsZWZ0JyA/IChcbiAgICAgIDxBcnJvd0xlZnRJY29uIGNsYXNzTmFtZT1cInctNFwiIC8+XG4gICAgKSA6IChcbiAgICAgIDxBcnJvd1JpZ2h0SWNvbiBjbGFzc05hbWU9XCJ3LTRcIiAvPlxuICAgICk7XG5cbiAgcmV0dXJuIGlzRGlzYWJsZWQgPyAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+e2ljb259PC9kaXY+XG4gICkgOiAoXG4gICAgPExpbmsgY2xhc3NOYW1lPXtjbGFzc05hbWV9IGhyZWY9e2hyZWZ9PlxuICAgICAge2ljb259XG4gICAgPC9MaW5rPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkFycm93TGVmdEljb24iLCJBcnJvd1JpZ2h0SWNvbiIsImNsc3giLCJMaW5rIiwiZ2VuZXJhdGVQYWdpbmF0aW9uIiwidXNlU2VhcmNoUGFyYW1zIiwidXNlUGF0aG5hbWUiLCJQYWdpbmF0aW9uIiwidG90YWxQYWdlcyIsInBhdGhuYW1lIiwic2VhcmNoUGFyYW1zIiwiY3VycmVudFBhZ2UiLCJOdW1iZXIiLCJnZXQiLCJhbGxQYWdlcyIsImRpdiIsImNsYXNzTmFtZSIsIlBhZ2luYXRpb25BcnJvdyIsImRpcmVjdGlvbiIsImhyZWYiLCJjcmVhdGVQYWdlVVJMIiwiaXNEaXNhYmxlZCIsIm1hcCIsInBhZ2UiLCJpbmRleCIsInBvc2l0aW9uIiwibGVuZ3RoIiwiUGFnaW5hdGlvbk51bWJlciIsImlzQWN0aXZlIiwiaWNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/ui/invoices/pagination.tsx\n"));

/***/ })

});