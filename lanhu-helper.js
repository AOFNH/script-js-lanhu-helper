// ==UserScript==
// @name         Remove Lanhu Go-Register popup👍
// @namespace    Bellamy
// @version      0.1
// @description  Remove Lanhu Go-Register popup!
// @author       Bellamy
// @match        https://lanhuapp.com/web/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=greasyfork.org
// ==/UserScript==

(function() {
    'use strict';
    const $ = document.querySelector.bind(document)
   window.addEventListener('load', () => {
        const popupEl = $('.go-register').remove();
  });
})();