"use strict";
exports.id = 45;
exports.ids = [45];
exports.modules = {

/***/ 1839:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YF": () => (/* binding */ deleteComment),
/* harmony export */   "li": () => (/* binding */ getComments),
/* harmony export */   "w": () => (/* binding */ postComment)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2143);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([___WEBPACK_IMPORTED_MODULE_0__]);
___WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const getComments = async () => {
  const {
    data
  } = await ___WEBPACK_IMPORTED_MODULE_0__/* .baseInstance.get */ .f.get("/comment");
  return data;
};

const postComment = async comment => {
  return await ___WEBPACK_IMPORTED_MODULE_0__/* .baseInstance.post */ .f.post("/comment", comment);
};

const deleteComment = async commentId => {
  return await ___WEBPACK_IMPORTED_MODULE_0__/* .baseInstance["delete"] */ .f["delete"](`comment/${commentId}`);
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SectionTitle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function SectionTitle({
  title
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
    className: "p-3 text-xl font-bold",
    children: title
  });
}

/***/ }),

/***/ 8401:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gg": () => (/* binding */ useReadComments),
/* harmony export */   "sH": () => (/* binding */ useCreateCommentMutation),
/* harmony export */   "so": () => (/* binding */ useDeleteCommentMutation)
/* harmony export */ });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _axios_comments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1839);
/* harmony import */ var _axios_types_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3326);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_axios_comments__WEBPACK_IMPORTED_MODULE_1__]);
_axios_comments__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const useReadComments = () => {
  const {
    data,
    isLoading,
    isError
  } = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)(_axios_types_index__WEBPACK_IMPORTED_MODULE_2__/* .QUERY_KEY.Comments */ .l.Comments, _axios_comments__WEBPACK_IMPORTED_MODULE_1__/* .getComments */ .li);
  return {
    data,
    isLoading,
    isError
  };
};
const useCreateCommentMutation = onSuccessCallback => {
  const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQueryClient)();
  return (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)(_axios_comments__WEBPACK_IMPORTED_MODULE_1__/* .postComment */ .w, {
    onSuccess() {
      onSuccessCallback?.();
      queryClient.invalidateQueries(_axios_types_index__WEBPACK_IMPORTED_MODULE_2__/* .QUERY_KEY.Comments */ .l.Comments);
    }

  });
};
const useDeleteCommentMutation = () => {
  const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQueryClient)();
  return (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)(_axios_comments__WEBPACK_IMPORTED_MODULE_1__/* .deleteComment */ .YF, {
    onSuccess() {
      queryClient.invalidateQueries(_axios_types_index__WEBPACK_IMPORTED_MODULE_2__/* .QUERY_KEY.Comments */ .l.Comments);
    }

  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;