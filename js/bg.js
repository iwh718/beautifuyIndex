console.log('%c蝴蝶工具箱启动',"background:#1260ff;border-radius:5px;padding:2px 4px ;color:#fff")
chrome.contextMenus.removeAll();
chrome.contextMenus.create({
	title: "打开蝴蝶搜索",
	onclick: function(){openIndex()}
});
chrome.contextMenus.create({
	title: "查看明文密码",
	onclick: function(){
        getCurrentTabId((tabId)=>{
            chrome.tabs.executeScript(tabId, {code: "document.querySelectorAll('input[type=password]').forEach((e)=>{e.setAttribute('type','text')});"});
        }) 
    }
});

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

function notice(str,message){
    chrome.notifications.create(null, {
        type: 'basic',
        iconUrl: './icon.png',
        title: str,
        message:message
    });
}

function getHistory(callback){
   
    chrome.history.search({
        'text': '',              // Return every history item....
        'startTime': 1000*60*60*24*3  // that was accessed less than one week ago.
      },
      function(historyItems) {
          console.log(historyItems)
      });
}


