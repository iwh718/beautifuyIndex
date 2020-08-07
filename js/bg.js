console.log('%c蝴蝶工具箱启动',"background:#1260ff;border-radius:5px;padding:2px 4px ;color:#fff")

function openIndex(){
    chrome.tabs.create({ url: chrome.runtime.getURL('./Q.html') });
}
function getCurrentTabId(callback)
{
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
	{
       
        if(callback) callback(tabs.length ? tabs[0].id: null);
        console.log('tabId:' + tabs[0].id)
	});
}




