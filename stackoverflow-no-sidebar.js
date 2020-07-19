// ==UserScript==
// @name         Stackoverflow no sidebar
// @namespace    https://blog.xd547.com/
// @version      0.4.1
// @description  Hide stackoverflow left sidebar
// @author       RainySummer
// @match        https://stackoverflow.com/questions/*
// @match        https://*.stackexchange.com/questions/*
// @match        https://serverfault.com/questions/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.getElementById('left-sidebar').style = "display:none;";
    document.getElementById('sidebar').style = "display:none;";
    document.getElementById('mainbar').style.width = "100%";
    document.getElementById('content').style.border="0px solid #000";
})();
