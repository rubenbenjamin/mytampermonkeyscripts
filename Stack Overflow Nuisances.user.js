// ==UserScript==
// @name         Stack Overflow Nuisances
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Disable the annoying stackoverflow cookie window for all stackoverflow sites
// @author       https://github.com/rubenbenjamin/mytampermonkeyscripts
// @match        https://*.stackoverflow.com/*
// @match        https://*.serverfault.com/*
// @match        https://*.superuser.com/*
// @match        https://*.stackexchange.com/*
// @match        https://*.askubuntu.com/*
// @match        https://*.stackapps.com/*
// @match        https://*.mathoverflow.net/*
// @match        https://*.stackoverflow.com/*
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// @grant        none
// ==/UserScript==

$(function() {
  $(".js-consent-banner").hide();
});
