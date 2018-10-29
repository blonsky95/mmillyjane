(function (global) {
var mmjane = {}; //create site object
var homeHtmlUrl = "snippets/home-snippet.html";

// Convenience function for inserting innerHTML for 'select' - inserts html in selector target
var insertHtml = function (selector, html) {
  console.log(selector + " "+html);
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

// Show loading icon inside element identified by 'selector'. - loading icon while ajax request
var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<img src='images/ajax-loader.gif'></div>";
  insertHtml(selector, html);
};

document.addEventListener("DOMContentLoaded", function (event) {

showLoading("#main-content"); //this is asynchronous
$ajaxUtils.sendGetRequest(
  homeHtmlUrl, 
  buildAndShowHomeHTML,
  true); 
});

function buildAndShowHomeHTML () {

showLoading("#main-content"); //this is asynchronous

$ajaxUtils.sendGetRequest(
    homeHtmlUrl,
    function (homeHtml) {
    	      insertHtml("#main-content",homeHtmlUrl);
    	      },
    false);
}

global.$mmjane = mmjane

})(window);