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
            chrome.tabs.executeScript(tabId, {code: "document.querySelector('input[type=password]').setAttribute('type','text')"});
        }) 
    }
});


chrome.contextMenus.create({
	title: "开启开发者工具",
	onclick: function(){

        notice('开始完成','')

    }
});

chrome.contextMenus.create({
	title: '使用度娘搜索：%s', // %s表示选中的文字
	contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
	onclick: function(params)
	{
		
		chrome.tabs.create({url: 'https://www.baidu.com/s?ie=utf-8&wd=' + encodeURI(params.selectionText)});
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


