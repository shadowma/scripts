// ==UserScript==
// @name       right_twitter_dashbord
// @namespace  http://shadow.ma
// @version    0.1
// @description  Move Twitter's dashboard column to right, let timeline in the left.
// @match      http*://twitter.com/*
// @include	http*://twitter.com/*
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
} 
addGlobalStyle('.dashboard { float: right ! important; } .content-main { float: left ! important; } #suggested-users { clear: left ! important;} .profile-header { float: left ! important; }');
