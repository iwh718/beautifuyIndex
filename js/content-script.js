(function() {

	

	console.clear()
	console.log("%c蝴蝶网页优化器v1.0.0","background:#1260ff;border-radius:5px;padding:2px 4px ;color:#fff");
	console.log("%c更新地址:blog.borebooks.top","color:#1260ff")
	console.warn('请自用研究学习，禁止任何商业用途！');

	const url = window.location.href;


	

	
	/**
	 * 清理百度搜首页广告
	 */
	if(/.*?baidu.*?/.test(url)){
		console.log('开始优化百度首页...')
	    console.log('检测到'+ $('div[cmatchid]').length + '条顶部广告，正在清理！')
	    $('div[cmatchid]').hide();
	    console.log('检测到'+ $('[data-landurl]').parent().parent().length + '条中间乱入广告，正在清理！')
	    $('[data-landurl]').parent().parent().hide(200);
	    console.log('广告清理完成');
	}

	/**
	 * 清理西西软件高速下载广告按钮
	 */
	
	if(/.*?cr173.*?/.test(url)){
		console.log('开始优化西西下载站...')
		$('[data^=viewAds]').hide();
		$('.downnowgaosu').hide()
	}
	/**
	 * ZOL下载站优化按钮
	 */
	if(/.*?zol.com.*?/.test(url)){
		console.log('开始优化ZOL下载站...');
		$('#downloader_main1').hide();
		$('#downloadTop').hide();
		$('.downLoad-tit').hide();
		$('.higha').hide();
	}
	/**
	 * 太平洋下载
	 */
	if(/.*?pconline.*?/.test(url)){
		console.log('开始优化太平洋下载站...');
		$('#JhsBtn').hide();
		$('.bzxz').hide();
	}
	 

	//检查未被优化的网站高速下载器

	if(/.*?高速下载器.*?/.test(document.body.innerText)){
		//存在高速下载器 
		let notice = "<div class='beautiful__notice--body' style='background:#1260ff;border-radius:10px;padding:10px;position:fixed;top:10%;right:5%;color:#fff;z-index:99999!important'>请注意该网站-存在高速下载器广告，请仔细辨别！<span class='bu__notice--close' style='margin-left:5px' >&nbsp;x</span></div>";
		$('body').append(notice);
		$('.bu__notice--close').on('click',()=>{
			$('.beautiful__notice--body').hide(200);
		})
		
		
	}


	


	
	
})();
