(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[897],{2143:function(e,t,n){"use strict";n.d(t,{Q:function(){return l},f:function(){return o}});var r=n(9499),s=n(8945),i=n(3454);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var o=s.Z.create({baseURL:"".concat(i.env.SERVER_BASE_URL),headers:{"Content-Type":"application/json"}});o.interceptors.request.use(function(e){var t=a({},e.headers);return a(a({},e),{},{headers:t})}),o.interceptors.response.use(function(e){return e.data});var l=s.Z.create({baseURL:"".concat(i.env.SERVER_GITHUB_USER_URL),headers:{"Content-Type":"application/json"}})},3326:function(e,t,n){"use strict";n.d(t,{l:function(){return r}});var r={Comments:"COMMENTS",GithubUser:"GITHUB_USER",Activities:"ACTIVITIES"}},6051:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(9008),s=n.n(r),i=n(1664),c=n.n(i),a=n(1163),o=n(5893),l=function(){var e=(0,a.useRouter)();return(0,o.jsx)("nav",{className:"sticky bottom-0 left-0 right-0 flex items-center justify-between px-3 py-2 bg-gray-100 border border-blue-dark",children:[{url:"comment",text:"방명록"},{url:"",text:"소개"},{url:"blog",text:"블로그"}].map(function(t){return(0,o.jsx)(c(),{href:"/".concat(t.url),passHref:!0,className:"flex-1 text-center",children:(0,o.jsx)("span",{className:"".concat(e.pathname==="/".concat(t.url)?"font-bold":"text-gray-500"),children:t.text})},t.url)})})},u=n(5675),d=n.n(u),f=n(2640),x=n(7294),p=function(){var e=x.useState(!1),t=(0,f.Z)(e,2),n=t[0],r=t[1];return{modalVisible:n,openModal:function(){return r(!0)},closeModal:function(){return r(!1)}}},h=n(1806),m=function(e){var t=e.closeModal;return(0,o.jsx)("div",{onClick:t,className:"fixed top-0 right-0 bottom-0 left-0 bg-black opacity-30"})};function j(){return(0,o.jsxs)("header",{className:"sticky top-0 left-0 right-0 z-10 flex items-end justify-between border border-blue-dark p-3 bg-gray-100 text-center",children:[(0,o.jsx)("strong",{className:"text-2xl",children:"령로그"}),(0,o.jsx)(g,{})]})}var g=function(){var e=p(),t=e.modalVisible,n=e.openModal,r=e.closeModal;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{className:"text-gray-500 underline decoration-wavy decoration-blue underline-offset-4 cursor-pointer",onClick:n,children:"@soryeongk"}),t&&(0,o.jsx)(b,{closeModal:r})]})},b=function(e){var t=e.closeModal;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(m,{closeModal:t}),(0,o.jsxs)("div",{className:"fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex items-center justify-center gap-x-4 bg-white rounded-3xl overflow-hidden w-[275px] h-[275px]",children:[(0,o.jsx)("div",{className:"absolute top-4 right-4 cursor-pointer",onClick:t,children:(0,o.jsx)(h.Z,{})}),(0,o.jsx)("a",{href:"https://github.com/soryeongk",target:"_blank",rel:"noreferrer",children:(0,o.jsxs)("div",{className:"flex flex-col items-center gap-y-1",children:[(0,o.jsx)("div",{className:"relative w-9 h-9",children:(0,o.jsx)(d(),{src:"".concat("","/images/github-mark.png"),alt:"깃헙 아이콘",fill:!0})}),(0,o.jsx)("span",{children:"github"})]})}),(0,o.jsx)("a",{href:"https://www.instagram.com/soryeongk",target:"_blank",rel:"noreferrer",children:(0,o.jsxs)("div",{className:"flex flex-col items-center gap-y-1",children:[(0,o.jsx)("div",{className:"relative w-9 h-9",children:(0,o.jsx)(d(),{src:"".concat("","/images/instagram.png"),alt:"깃헙 아이콘",fill:!0})}),(0,o.jsx)("span",{children:"instagram"})]})})]})]})};function v(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s(),{children:[(0,o.jsx)("title",{children:"령로그"}),(0,o.jsx)("meta",{"http-equiv":"Content-Security-Policy",content:"upgrade-insecure-requests"}),(0,o.jsx)("meta",{name:"description",content:"귀여운 령이의 귀엽지만은 않은 포트폴리오"}),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,o.jsx)(j,{}),(0,o.jsx)("main",{className:"flex-1 border-x border-x-blue-dark",children:e.children}),(0,o.jsx)(l,{})]})}},5221:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(5893);function s(e){var t=e.title;return(0,r.jsx)("span",{className:"p-3 text-xl font-bold",children:t})}},1806:function(e,t,n){"use strict";var r=n(5893);t.Z=function(){return(0,r.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{d:"M10.0003 1.66699C5.39824 1.66699 1.66699 5.39824 1.66699 10.0003C1.66699 14.6024 5.39824 18.3337 10.0003 18.3337C14.6024 18.3337 18.3337 14.6024 18.3337 10.0003C18.3337 5.39824 14.6024 1.66699 10.0003 1.66699Z",fill:"#A4AAAE"}),(0,r.jsx)("path",{d:"M13.1382 12.1955L10.9429 10.0003C10.9429 10.0003 13.0362 7.90776 13.1382 7.8051C13.3988 7.54511 13.3988 7.12314 13.1382 6.86248C12.8782 6.60183 12.4562 6.60183 12.1955 6.86248L10.0003 9.05771C10.0003 9.05771 7.90776 6.96448 7.8051 6.86248C7.54511 6.60183 7.12314 6.60183 6.86248 6.86248C6.60183 7.12247 6.60183 7.54445 6.86248 7.8051L9.05771 10.0003C9.05771 10.0003 6.96448 12.0929 6.86248 12.1955C6.60183 12.4555 6.60183 12.8775 6.86248 13.1382C7.12247 13.3988 7.54445 13.3988 7.8051 13.1382L10.0003 10.9429C10.0003 10.9429 12.0929 13.0362 12.1955 13.1382C12.4555 13.3988 12.8775 13.3988 13.1382 13.1382C13.3988 12.8782 13.3988 12.4562 13.1382 12.1955Z",fill:"white"})]})}},5033:function(e,t,n){"use strict";n.d(t,{sH:function(){return m},so:function(){return j},gg:function(){return h}});var r,s,i,c=n(8767),a=n(29),o=n(7794),l=n.n(o),u=n(2143),d=(r=(0,a.Z)(l().mark(function e(){var t;return l().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.f.get("/comment");case 2:return t=e.sent.data,e.abrupt("return",t);case 5:case"end":return e.stop()}},e)})),function(){return r.apply(this,arguments)}),f=(s=(0,a.Z)(l().mark(function e(t){return l().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.f.post("/comment",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)})),function(e){return s.apply(this,arguments)}),x=(i=(0,a.Z)(l().mark(function e(t){return l().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.f.delete("comment/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)})),function(e){return i.apply(this,arguments)}),p=n(3326),h=function(){var e=(0,c.useQuery)(p.l.Comments,d);return{data:e.data,isLoading:e.isLoading,isError:e.isError}},m=function(e){var t=(0,c.useQueryClient)();return(0,c.useMutation)(f,{onSuccess:function(){null==e||e(),t.invalidateQueries(p.l.Comments)}})},j=function(){var e=(0,c.useQueryClient)();return(0,c.useMutation)(x,{onSuccess:function(){e.invalidateQueries(p.l.Comments)}})}},1518:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var r=n(1806),s=n(6051),i=n(5221),c=n(5033),a=n(5893);function o(){var e=(0,c.gg)(),t=e.data,n=e.isLoading,o=e.isError,l=(0,c.so)(),u=function(e){l.mutate(e)};return n?(0,a.jsx)("div",{children:"댓글 목록을 불러오는 중이에요!"}):!t||o?(0,a.jsx)("div",{children:"댓글 목록을 불러오는데 실패했어요ㅠ"}):(0,a.jsx)(s.Z,{children:(0,a.jsxs)("div",{className:"flex flex-col gap-y-1 bg-gray-100 ",children:[(0,a.jsx)(i.Z,{title:"관리자모드-방명록"}),(0,a.jsx)("ul",{className:"flex flex-col-reverse gap-y-[1px] bg-transparent",children:t.comments.map(function(e){return(0,a.jsxs)("li",{className:"relative flex flex-col gap-y-1 py-5 px-3 bg-gray-100",children:[(0,a.jsxs)("div",{className:"flex items-center p-1",children:[(0,a.jsxs)("strong",{children:["\uD83D\uDCCC ",e.writer||"익명의 방문자"]}),(0,a.jsx)("span",{children:"님이 남긴 방명록"})]}),(0,a.jsx)("p",{className:"border border-blue-dark rounded-lg p-2",children:e.content}),(0,a.jsx)("span",{className:"p-1 text-gray-400",children:new Date(e.createdAt).toDateString()}),(0,a.jsx)("button",{"aria-label":"delete-button",type:"button",className:"absolute right-4 top-4",onClick:function(){return u(e._id)},children:(0,a.jsx)(r.Z,{})})]},e._id)})})]})})}},5609:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/comments",function(){return n(1518)}])}},function(e){e.O(0,[479,675,774,888,179],function(){return e(e.s=5609)}),_N_E=e.O()}]);