// ==UserScript==
// @name         Show connection time in hours
// @namespace    https://blog.xd547.com/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        http://192.168.1.1/getpage.gch?pid=1002&nextpage=status_wan_if_t.gch
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  //var iframe = document.getElementById('mainFrame');
  //var contentTable = iframe.contentWindow.document.getElementById('TestContent');
  //var actionButton = document.getElementById('smWanStatu');
  var table = document.getElementById('TestContent');
  if (table) {
      var timeElement = table.children[0].children[7].children[1];
      var timeContent = timeElement.textContent;
      var seconds = parseInt(timeContent.substring(0, timeContent.length - 1));

      var hours = Math.floor(seconds / 3600);
      var minutes = Math.floor((seconds - hours * 3600)/ 60);
      var remainSeconds = seconds - hours * 3600 - minutes * 60;

      var result = hours + ":" + minutes + ":" + remainSeconds;
      timeElement.textContent = result + '(' + timeContent+ ')';
  }
})();
