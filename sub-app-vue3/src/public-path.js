// sub-app-vue3/src/public-path.js
if (window.__POWERED_BY_QIANKUN__) {
    // 告訴 webpack / Vite 動態設置靜態資源載入基礎路徑
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
