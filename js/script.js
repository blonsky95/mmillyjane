
function toggleDisplay() {
    var x = document.getElementById("my-collapsible-menu");
    if (x.className === "menu-main-menu") {
    	    console.log("made responsive");

        x.className += " responsive";
    } else {
        x.className = "menu-main-menu";
            console.log("made normal");

    }
}


// (function (global) {
// 	//this function loads the home snippet through an ajax request - and 
// 	// substitutes it into the code under the #main-content div

// 	var mmjane = {}; //create site object
// 	var homeHtmlUrl = "snippets/home-snippet.html";
//   var contactHtmlUrl = "snippets/contact-snippet.html";
//   var londonHtmlUrl = "snippets/london-snippet.html";



// // Convenience function for inserting innerHTML for 'select' - inserts html in selector target
// 	var insertHtml = function (selector, html) {
//   		var targetElem = document.querySelector(selector);
//   		targetElem.innerHTML = html;
// 	};

// // Show loading icon inside element identified by 'selector'. - loading icon while ajax request
// 	var showLoading = function (selector) {
//   		var html = "<div class='text-center'>";
//   		html += "<img src='images/ajax-loader.gif'></div>";
//   	insertHtml(selector, html);
// 	};

// 	document.addEventListener("DOMContentLoaded", function (event) {

// 		buildAndShowHomeHTML();

// 		function buildAndShowHomeHTML () {

// 		showLoading("#main-content"); //this is asynchronous

// 			$ajaxUtils.sendGetRequest(
//    			homeHtmlUrl,
//     		function (homeHtml) {
//     			insertHtml("#main-content",homeHtml);
//     			},
//     			false);
// 		}
// 	});

//   mmjane.loadContactPage = function() {
//     console.log("loadcontactcalled");
//     $ajaxUtils.sendGetRequest(
//         contactHtmlUrl,
//         function (contactHtml) {
//           insertHtml("#main-content",contactHtml);
//           },
//           false);
//   }

//   mmjane.loadLondonPage = function() {
//     console.log("loadlondoncalled");
//     $ajaxUtils.sendGetRequest(
//         londonHtmlUrl,
//         function (londonHtml) {
//           insertHtml("#main-content",londonHtml);
//           },
//           false);
//   }

// 	global.$mmjane = mmjane;

// })(window);