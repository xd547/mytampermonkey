// ==UserScript==
// @name         Stackoverflow no sidebar
// @namespace    http://blog.xd547.com/
// @version      0.1
// @description  Hide stackoverflow left sidebar
// @author       RainySummer
// @match        https://stackoverflow.com/questions/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.getElementById('left-sidebar').style = "display:none;";
    document.getElementById('sidebar').style = "display:none;";
    document.getElementById('mainbar').style.width = "calc(100% - 24px)";
})();