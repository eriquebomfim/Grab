chrome.tabs.onUpdated.addListener(function(tab){
	chrome.tabs.executeScript(null,{
		file:'grab.js'
	});
	chrome.tabs.insertCSS(null,{
		file:'style.css'
	})
});