"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[568],{2143:function(e,r,t){t.d(r,{Q:function(){return o},f:function(){return u}});var n=t(9499),s=t(8945);function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var u=s.Z.create({baseURL:"http://api.soryeongk.com:4000",headers:{"Content-Type":"application/json"}});u.interceptors.request.use(function(e){var r=c({},e.headers);return c(c({},e),{},{headers:r})}),u.interceptors.response.use(function(e){return e.data});var o=s.Z.create({baseURL:"https://api.github.com/users/",headers:{"Content-Type":"application/json"}})},3326:function(e,r,t){t.d(r,{l:function(){return n}});var n={Comments:"COMMENTS",GithubUser:"GITHUB_USER",Activities:"ACTIVITIES"}},5568:function(e,r,t){t.r(r),t.d(r,{default:function(){return v}});var n,s,a=t(5675),c=t.n(a),u=t(8767),o=t(29),i=t(7794),p=t.n(i),l=t(2143),f=(n=(0,o.Z)(p().mark(function e(r){return p().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.Q.get(r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)})),function(e){return n.apply(this,arguments)}),d=(s=(0,o.Z)(p().mark(function e(){var r;return p().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("soryeongk");case 2:return r=e.sent.data,e.abrupt("return",r);case 5:case"end":return e.stop()}},e)})),function(){return s.apply(this,arguments)}),h=t(3326),b=t(5893),v=function(){var e=(0,u.useQuery)({queryKey:h.l.GithubUser,queryFn:d,suspense:!0}).data;return(0,b.jsxs)("div",{className:"flex flex-col items-center gap-y-4 py-3 bg-gray-100 w-full",children:[(0,b.jsx)("div",{className:"relative w-[300px] h-[300px] border border-gray-500 rounded-full overflow-hidden",children:(0,b.jsx)(c(),{src:(null==e?void 0:e.avatar_url)||"https://avatars.githubusercontent.com/u/40630964?v=4",alt:"프로필 사진",fill:!0,sizes:"300px"})}),(0,b.jsxs)("div",{className:"flex items-end",children:[(0,b.jsx)("h1",{className:"text-3xl font-bold",children:"김소령"}),(null==e?void 0:e.bio)&&(0,b.jsxs)("h2",{className:"text-lg",children:[": ",e.bio]})]})]})}}}]);