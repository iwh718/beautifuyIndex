

    let d = new Date();
    if(d.getHours() > 20 || d.getHours() <= 6){
        //切换夜间模式
        body.style.color = '#fff!important';
        body.style.background = '#3a3a3a';
        search.style.background = '#5a5a5a';
        search.style.boxShadow = 'none';
        searchInput.style.background = 'transparent';
        searchInput.style.borderBottomColor = '#3a3a3a';
    }

    searchBtn.onclick = ()=>{
        console.log(searchInput.value)
        window.location.href = 'https://www.baidu.com/s?ie=utf-8&wd=' + encodeURI(searchInput.value);
    }
    searchInput.addEventListener("keyup",(event)=>{
        event.preventDefault();
        if (event.keyCode == "13") {
            searchBtn.click();
        }
    });

