//function
function queryPIlu(queryUrl, auth) {
	req = new XMLHttpRequest();
	req.open("GET", "https://phishing-initiative.lu/api/v1/urls/lookup/?url=" + encodeURI(queryUrl), false);
	req.setRequestHeader("Authorization", auth);
	req.send();
	console.log("in query method");
	console.log(req.responseText);
	return req.responseText;
/*
	req.onload = function(){
		json=JSON.parse(req.responseText);
		console.log("tag_label : " + json.tag_label);
		console.log("tag : " + json.tag);
		console.log("url : " + json.url);
	}
*/
}

console.log('Message from extension');

var url = window.top.location.href;	//complete url
console.log(document.URL);
//console.log(url.split('/')[2]);

var urlFragments = domain.split('.');
var domain = urlFragments[urlFragments.length - 2];
var tld = urlFragments[urlFragments.length - 1];

/*
	2 kinds of checks on domain:
	1. from reputed phishing databases
	2. name similar to reputed sites
*/

console.log(queryPIlu(url, "Token 0fbba0c779c31f2fd4d6dc4b23fad8e843202fad3feeb4d56e06a54e0fda01de"));

/* 
A test url from phishTank
https://csgojust.ru/store.steampowered.com/login/
Response from phishing-initiative.lu
[
  {
    "tag_label": "unknown",
    "url": "https://csgojust.ru/store.steampowered.com/login/",
    "tag": 0
  }
]

On looking url, seems like potential phishing page of store.steampowered.com
But page didn't open
*/
