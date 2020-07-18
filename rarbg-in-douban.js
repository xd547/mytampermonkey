// ==UserScript==
// @name         RARBG in Douban
// @namespace    https://blog.xd547.com/
// @version      0.5
// @description  Open Moive Torrent list of RARBG
// @author       RainySummer
// @match        https://movie.douban.com/subject/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var info = document.getElementById('info');
    var imdbIndex = 0;
    for (var i=0, len = info.children.length; i < len; i++) {
        if (info.children[i].innerText.trim() === 'IMDb链接:') {
            imdbIndex = i;
            break;
        }
    }
    //var imdbNo = info.children[info.children.length-2].innerText;
    var imdbNo = info.children[imdbIndex + 1].innerText;
    // create SPAN
    var rarbgSPAN = document.createElement('span');
    rarbgSPAN.className = 'pl';
    var rarbgSPANText = document.createTextNode("RARBG:");
    rarbgSPAN.appendChild(rarbgSPANText);
    info.appendChild(rarbgSPAN);
    // create link
    var rarbgLink = document.createElement('a');
    rarbgLink.href = 'https://rarbgprx.org/torrents.php?search='+ imdbNo +'&order=size&by=ASC';
    rarbgLink.target = '_blank';
    rarbgLink.rel = 'nofollow';
    var rarbgLinkText = document.createTextNode(imdbNo);
    rarbgLink.appendChild(rarbgLinkText);
    info.appendChild(rarbgLink);
    // create br
    info.appendChild(document.createElement('br'));
})();
