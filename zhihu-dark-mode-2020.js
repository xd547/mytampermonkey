// ==UserScript==
// @name                Zhihu.com Dark Mode 2020
// @name:zh-CN          知乎黑暗模式2020
// @namespace           https://www.zhihu.com/
// @version             0.1
// @description         Enable Zhihu.com Dark Mode
// @description:zh-CN   开启知乎黑暗模式
// @author              RainySummer
// @match               *://*.zhihu.com/*
// @license             MIT
// ==/UserScript==


(function() {
  'use strict';

  document.querySelector('html').setAttribute('data-theme', 'dark')
})();
