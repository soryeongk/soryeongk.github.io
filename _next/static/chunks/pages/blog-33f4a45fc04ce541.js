(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{6051:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(9008),s=n.n(r),i=n(1664),l=n.n(i),a=n(1163),c=n(5893),o=function(){var e=(0,a.useRouter)();return(0,c.jsx)("nav",{className:"sticky bottom-0 left-0 right-0 flex items-center justify-between px-3 py-2 bg-gray-100 border border-blue-dark",children:[{url:"comment",text:"방명록"},{url:"",text:"소개"},{url:"blog",text:"블로그"}].map(function(t){return(0,c.jsx)(l(),{href:"/".concat(t.url),passHref:!0,className:"flex-1 text-center",children:(0,c.jsx)("span",{className:"".concat(e.pathname==="/".concat(t.url)?"font-bold":"text-gray-500"),children:t.text})},t.url)})})},d=n(5675),x=n.n(d),u=n(2640),f=n(7294),h=function(){var e=f.useState(!1),t=(0,u.Z)(e,2),n=t[0],r=t[1];return{modalVisible:n,openModal:function(){return r(!0)},closeModal:function(){return r(!1)}}},m=n(1806),j=function(e){var t=e.closeModal;return(0,c.jsx)("div",{onClick:t,className:"fixed top-0 right-0 bottom-0 left-0 bg-black opacity-30"})};function g(){return(0,c.jsxs)("header",{className:"sticky top-0 left-0 right-0 z-10 flex items-end justify-between border border-blue-dark p-3 bg-gray-100 text-center",children:[(0,c.jsx)("strong",{className:"text-2xl",children:"령로그"}),(0,c.jsx)(p,{})]})}var p=function(){var e=h(),t=e.modalVisible,n=e.openModal,r=e.closeModal;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("span",{className:"text-gray-500 underline decoration-wavy decoration-blue underline-offset-4 cursor-pointer",onClick:n,children:"@soryeongk"}),t&&(0,c.jsx)(b,{closeModal:r})]})},b=function(e){var t=e.closeModal;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(j,{closeModal:t}),(0,c.jsxs)("div",{className:"fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex items-center justify-center gap-x-4 bg-white rounded-3xl overflow-hidden w-[275px] h-[275px]",children:[(0,c.jsx)("div",{className:"absolute top-4 right-4 cursor-pointer",onClick:t,children:(0,c.jsx)(m.Z,{})}),(0,c.jsx)("a",{href:"https://github.com/soryeongk",target:"_blank",rel:"noreferrer",children:(0,c.jsxs)("div",{className:"flex flex-col items-center gap-y-1",children:[(0,c.jsx)("div",{className:"relative w-9 h-9",children:(0,c.jsx)(x(),{src:"".concat("","/images/github-mark.png"),alt:"깃헙 아이콘",fill:!0,sizes:"36px"})}),(0,c.jsx)("span",{children:"github"})]})}),(0,c.jsx)("a",{href:"https://www.instagram.com/soryeongk",target:"_blank",rel:"noreferrer",children:(0,c.jsxs)("div",{className:"flex flex-col items-center gap-y-1",children:[(0,c.jsx)("div",{className:"relative w-9 h-9",children:(0,c.jsx)(x(),{src:"".concat("","/images/instagram.png"),alt:"깃헙 아이콘",fill:!0,sizes:"36px"})}),(0,c.jsx)("span",{children:"instagram"})]})})]})]})};function v(e){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(s(),{children:[(0,c.jsx)("title",{children:"령로그"}),(0,c.jsx)("meta",{name:"description",content:"귀여운 령이의 귀엽지만은 않은 포트폴리오"}),(0,c.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,c.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,c.jsx)(g,{}),(0,c.jsx)("main",{className:"flex-1 border-x border-x-blue-dark",children:e.children}),(0,c.jsx)(o,{})]})}},1806:function(e,t,n){"use strict";var r=n(5893);t.Z=function(){return(0,r.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{d:"M10.0003 1.66699C5.39824 1.66699 1.66699 5.39824 1.66699 10.0003C1.66699 14.6024 5.39824 18.3337 10.0003 18.3337C14.6024 18.3337 18.3337 14.6024 18.3337 10.0003C18.3337 5.39824 14.6024 1.66699 10.0003 1.66699Z",fill:"#A4AAAE"}),(0,r.jsx)("path",{d:"M13.1382 12.1955L10.9429 10.0003C10.9429 10.0003 13.0362 7.90776 13.1382 7.8051C13.3988 7.54511 13.3988 7.12314 13.1382 6.86248C12.8782 6.60183 12.4562 6.60183 12.1955 6.86248L10.0003 9.05771C10.0003 9.05771 7.90776 6.96448 7.8051 6.86248C7.54511 6.60183 7.12314 6.60183 6.86248 6.86248C6.60183 7.12247 6.60183 7.54445 6.86248 7.8051L9.05771 10.0003C9.05771 10.0003 6.96448 12.0929 6.86248 12.1955C6.60183 12.4555 6.60183 12.8775 6.86248 13.1382C7.12247 13.3988 7.54445 13.3988 7.8051 13.1382L10.0003 10.9429C10.0003 10.9429 12.0929 13.0362 12.1955 13.1382C12.4555 13.3988 12.8775 13.3988 13.1382 13.1382C13.3988 12.8782 13.3988 12.4562 13.1382 12.1955Z",fill:"white"})]})}},4124:function(e,t,n){"use strict";n.r(t);var r=n(6051),s=n(5893);t.default=function(){return(0,s.jsx)(r.Z,{children:(0,s.jsx)("div",{className:"flex items-center justify-center h-full text-gray-600",children:"킁.. 준비중이에오 \uD83E\uDD2B"})})}},2537:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n(4124)}])}},function(e){e.O(0,[39,774,888,179],function(){return e(e.s=2537)}),_N_E=e.O()}]);