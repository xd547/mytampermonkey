// ==UserScript==
// @name         Stackoverflow no sidebar
// @namespace    http://blog.xd547.com/
// @version      0.1
// @description  Open Moive Torrent list of RARBG
// @author       RainySummer
// @match        https://stackoverflow.com/questions/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.getElementById('left-sidebar').style = "display:none;";
})();
