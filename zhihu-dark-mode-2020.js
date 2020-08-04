// ==UserScript==
// @name                Zhihu.com Dark Mode 2020
// @name:zh-CN          知乎黑暗模式2020
// @namespace           https://www.zhihu.com/
// @version             0.1.2
// @description         Enable Zhihu.com Dark Mode
// @description:zh-CN   开启知乎黑暗模式
// @author              RainySummer
// @match               *://*.zhihu.com/*
// @license             MIT
// @run-at              document-start
// ==/UserScript==


(function() {
  'use strict'
  let htmlElement = document.querySelector('html')
  htmlElement.setAttribute('data-theme', 'dark')
  let observer = new MutationObserver(function(mutations) {
    let theme = htmlElement.getAttribute('data-theme')
    if (theme === 'light') {
      htmlElement.setAttribute('data-theme', 'dark')
    }
  })

  observer.observe(htmlElement, {
    attributes: true,
    attributeFilter: ['data-theme']
  })
})()
