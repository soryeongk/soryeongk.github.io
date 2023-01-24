"use strict";
exports.id = 711;
exports.ids = [711];
exports.modules = {

/***/ 2143:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ githubInstance),
/* harmony export */   "f": () => (/* binding */ baseInstance)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const baseInstance = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
  baseURL: `${"http://54.180.156.29:4000"}`,
  headers: {
    "Content-Type": "application/json"
  }
}); // client side base instance (default)
// 로컬스토리지 접근이 가능하고 token이 필요한 api 호출에서 사용

baseInstance.interceptors.request.use(config => {
  const headers = _objectSpread({}, config.headers);

  return _objectSpread(_objectSpread({}, config), {}, {
    headers
  });
});
baseInstance.interceptors.response.use(response => {
  return response.data;
});
const githubInstance = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
  baseURL: `${"https://api.github.com/users/"}`,
  headers: {
    "Content-Type": "application/json"
  }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3326:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ QUERY_KEY)
/* harmony export */ });
const QUERY_KEY = {
  Comments: "COMMENTS",
  GithubUser: "GITHUB_USER",
  Activities: "ACTIVITIES"
};

/***/ })

};
;