(self.__BUILD_MANIFEST = (function (s, e) {
  return {
    __rewrites: { beforeFiles: [], afterFiles: [], fallback: [] },
    "/": [s, e, "static/chunks/pages/index-410ff86164693615.js"],
    "/_error": ["static/chunks/pages/_error-47e526b08b70a03d.js"],
    "/admin": [s, "static/chunks/pages/admin-b9727d45187547eb.js"],
    "/admin/comments": [
      s,
      e,
      "static/chunks/pages/admin/comments-b6d8c13b34774a71.js",
    ],
    "/blog": [e, "static/chunks/pages/blog-d337c937c41f82a1.js"],
    "/comment": [s, e, "static/chunks/pages/comment-24d72836ef8d0ef9.js"],
    sortedPages: [
      "/",
      "/_app",
      "/_error",
      "/admin",
      "/admin/comments",
      "/blog",
      "/comment",
    ],
  };
})(
  "static/chunks/656-4e54a05079692a14.js",
  "static/chunks/675-7aeb7fa59d68e7ae.js"
)),
  self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
