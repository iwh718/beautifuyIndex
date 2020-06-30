/**
 * @author IWH718
 * @description 蝴蝶主页 联系微信 iwenhua1314
 *  time 2020.07.01
 */
const bg = chrome.extension.getBackgroundPage();

var qrcode2 = null;
var url = '';
//获取url
chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
	{
        url = tabs[0].url;
        console.log('当前url:' + url)
        qrcode2 = new QRCode(document.getElementById("qrcode"), {
            text:url,
            width: 100,
            height: 100,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });
	});

 
//生成当前网页二维码
createCode.addEventListener('click',()=>{
    console.log('createCode');
    qrcode2 && qrcode2.clear(); 
    qrcode2 && (qrcode.style.display = 'block');
    qrcode2 && qrcode2.makeCode(url); 
});
//捐助
thanks__dev.onclick = ()=>{
    if(document.querySelector('.pop__tks--img').style.display !== 'block'){
        document.querySelector('.pop__tks--img').style.display = 'block';
    }else{
        document.querySelector('.pop__tks--img').style.display = 'none';
    }
}
//解除限制
resolveLimit.onclick = ()=>{
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
	{
       
        console.log('解除限制')
        let resolveContextMenu = "document.oncontextmenu=function(e){console.log('去除限制');return true}";
        chrome.tabs.executeScript(tabs[0].id, {code: resolveContextMenu});
	});
    

}
