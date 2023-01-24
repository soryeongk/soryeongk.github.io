"use strict";
exports.id = 51;
exports.ids = [51];
exports.modules = {

/***/ 6051:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/BottomNavigation.tsx




const BottomNavigation = () => {
  const router = (0,router_.useRouter)();
  const navigationUrls = [{
    url: "comment",
    text: "방명록"
  }, {
    url: "",
    text: "소개"
  }, {
    url: "blog",
    text: "블로그"
  }];
  return /*#__PURE__*/jsx_runtime_.jsx("nav", {
    className: "sticky bottom-0 left-0 right-0 flex items-center justify-between px-3 py-2 bg-gray-100 border border-blue-dark",
    children: navigationUrls.map(navigation => /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
      href: `/${navigation.url}`,
      passHref: true,
      className: "flex-1 text-center",
      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: `${router.pathname === `/${navigation.url}` ? "font-bold" : "text-gray-500"}`,
        children: navigation.text
      })
    }, navigation.url))
  });
};

/* harmony default export */ const components_BottomNavigation = (BottomNavigation);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./hooks/useModal.tsx


const useModal = () => {
  const [modalVisible, setModalVisible] = external_react_default().useState(false);

  const openModal = () => {
    return setModalVisible(true);
  };

  const closeModal = () => {
    return setModalVisible(false);
  };

  return {
    modalVisible,
    openModal,
    closeModal
  };
};

/* harmony default export */ const hooks_useModal = (useModal);
// EXTERNAL MODULE: ./components/icons/CloseIcon.tsx
var CloseIcon = __webpack_require__(1806);
;// CONCATENATED MODULE: ./components/modal/ModalBackground.tsx


const ModalBackground = ({
  closeModal
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    onClick: closeModal,
    className: "fixed top-0 right-0 bottom-0 left-0 bg-black opacity-30"
  });
};

/* harmony default export */ const modal_ModalBackground = (ModalBackground);
;// CONCATENATED MODULE: ./components/Header.tsx







function Header() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
    className: "sticky top-0 left-0 right-0 z-10 flex items-end justify-between border border-blue-dark p-3 bg-gray-100 text-center",
    children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
      className: "text-2xl",
      children: "\uB839\uB85C\uADF8"
    }), /*#__PURE__*/jsx_runtime_.jsx(AccountId, {})]
  });
}

const AccountId = () => {
  const {
    modalVisible,
    openModal,
    closeModal
  } = hooks_useModal();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
      className: "text-gray-500 underline decoration-wavy decoration-blue underline-offset-4 cursor-pointer",
      onClick: openModal,
      children: "@soryeongk"
    }), modalVisible && /*#__PURE__*/jsx_runtime_.jsx(LinkToAccountPageModal, {
      closeModal: closeModal
    })]
  });
};

const LinkToAccountPageModal = ({
  closeModal
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(modal_ModalBackground, {
      closeModal: closeModal
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex items-center justify-center gap-x-4 bg-white rounded-3xl overflow-hidden w-[275px] h-[275px]",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "absolute top-4 right-4 cursor-pointer",
        onClick: closeModal,
        children: /*#__PURE__*/jsx_runtime_.jsx(CloseIcon/* default */.Z, {})
      }), /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "https://github.com/soryeongk",
        target: "_blank",
        rel: "noreferrer",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex flex-col items-center gap-y-1",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "relative w-9 h-9",
            children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
              src: `${""}/images/github-mark.png`,
              alt: "\uAE43\uD5D9 \uC544\uC774\uCF58",
              fill: true
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "github"
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "https://www.instagram.com/soryeongk",
        target: "_blank",
        rel: "noreferrer",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex flex-col items-center gap-y-1",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "relative w-9 h-9",
            children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
              src: `${""}/images/instagram.png`,
              alt: "\uAE43\uD5D9 \uC544\uC774\uCF58",
              fill: true
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "instagram"
          })]
        })
      })]
    })]
  });
};
;// CONCATENATED MODULE: ./components/Layout.tsx






function Layout(props) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "\uB839\uB85C\uADF8"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "\uADC0\uC5EC\uC6B4 \uB839\uC774\uC758 \uADC0\uC5FD\uC9C0\uB9CC\uC740 \uC54A\uC740 \uD3EC\uD2B8\uD3F4\uB9AC\uC624"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: "/favicon.ico"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Header, {}), /*#__PURE__*/jsx_runtime_.jsx("main", {
      className: "flex-1 border-x border-x-blue-dark",
      children: props.children
    }), /*#__PURE__*/jsx_runtime_.jsx(components_BottomNavigation, {})]
  });
}

/***/ }),

/***/ 1806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);



const CloseIcon = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
      d: "M10.0003 1.66699C5.39824 1.66699 1.66699 5.39824 1.66699 10.0003C1.66699 14.6024 5.39824 18.3337 10.0003 18.3337C14.6024 18.3337 18.3337 14.6024 18.3337 10.0003C18.3337 5.39824 14.6024 1.66699 10.0003 1.66699Z",
      fill: "#A4AAAE"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
      d: "M13.1382 12.1955L10.9429 10.0003C10.9429 10.0003 13.0362 7.90776 13.1382 7.8051C13.3988 7.54511 13.3988 7.12314 13.1382 6.86248C12.8782 6.60183 12.4562 6.60183 12.1955 6.86248L10.0003 9.05771C10.0003 9.05771 7.90776 6.96448 7.8051 6.86248C7.54511 6.60183 7.12314 6.60183 6.86248 6.86248C6.60183 7.12247 6.60183 7.54445 6.86248 7.8051L9.05771 10.0003C9.05771 10.0003 6.96448 12.0929 6.86248 12.1955C6.60183 12.4555 6.60183 12.8775 6.86248 13.1382C7.12247 13.3988 7.54445 13.3988 7.8051 13.1382L10.0003 10.9429C10.0003 10.9429 12.0929 13.0362 12.1955 13.1382C12.4555 13.3988 12.8775 13.3988 13.1382 13.1382C13.3988 12.8782 13.3988 12.4562 13.1382 12.1955Z",
      fill: "white"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CloseIcon);

/***/ })

};
;