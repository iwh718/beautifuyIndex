    /**
     * @author iwh718 wx:18712505420
     */
  
    document.body.onclick = ()=>deleteTrash.style.display = 'none';
    searchBtn.onclick = ()=>{
        window.location.href = 'https://www.baidu.com/s?ie=utf-8&wd=' + encodeURI(searchInput.value);
    }
    searchInput.addEventListener("keyup",(event)=>{
        event.preventDefault();
        if (event.keyCode == "13") {
            searchBtn.click();
        }
    });
    //init likes
   let likeUrls  = (JSON.parse(localStorage.getItem('likeList') || "[]")).map((row,index)=>{
      
        let a = document.createElement('a',{textContent:row.name,href:row.url});
        a.textContent = row.name;
        a.href = row.url;
        a.className ='beautiful__like--url'+ ' ' + 'urlId'+index;
        a.draggable = true;
       

        a.ondragstart = (e)=>{
            e.dataTransfer.setData('id',index);
            deleteTrash.style.display = 'block';
        };
       
        document.querySelector('.beautiful__like--list').append(a);
        return row;
    });
    deleteTrash.ondrop = (e)=>{
        e.preventDefault();
        let index = e.dataTransfer.getData('id');
        deleteTrash.style.display = 'none';
        document.querySelector('.urlId'+index).remove();
        likeUrls.splice(index,1);
        localStorage.setItem('likeList',JSON.stringify(likeUrls));
    };
    deleteTrash.ondragover = (e)=>e.preventDefault();
    //modal
    let hideModal = ()=>{
        document.querySelector('.tips').textContent = '';
        document.querySelector('.beautiful__add--modal').style.display = 'none';
    }
    addUrl.onclick = ()=>{
        //调出modal
        document.querySelector('.beautiful__add--modal').style.display = 'block';
    }
    cancel__modal.onclick = hideModal;
    submit__modal.onclick = ()=>{
        let name = document.querySelector('input[name=addUrlName]').value;
        let url = document.querySelector('input[name=addUrl]').value;
        if(!!name && !!url){
            
            let likes  = JSON.parse(localStorage.getItem('likeList')||"[]");
            likes.push({
                name,
                url
            });
            localStorage.setItem('likeList',JSON.stringify(likes));
            hideModal();
            location.reload();

        }else{
           document.querySelector('.tips').textContent = '请输入信息！';
        }

    }
    //主题切换 
    changeThemeBtn.onclick = ()=>{
         //切换模式
         let theme = localStorage.getItem('theme')
         theme === 'dark' ? changeTheme('light'):changeTheme('dark');
        
    }


    //初始化背景
    if(localStorage.getItem('bg')){
         changeBg(localStorage.getItem('bg'))
   
    }

    //修改主题
    function changeTheme(type){
        localStorage.setItem('theme',type);
        if(type === 'dark'){
            console.log('夜间模式')
            body.style.color = '#fff!important';
            body.style.background = '#3a3a3a';
            search.style.background = '#5a5a5a';
            search.style.boxShadow = 'none';
            searchInput.style.background = 'transparent';
            searchInput.style.borderBottomColor = '#3a3a3a';
            document.querySelectorAll('.beautiful__like--url').forEach((ele,i)=>{
                ele.style.boxShadow = 'none';
            })
        }else{
            location.reload()
        }
        
       
    }

    //初始化背景
    function changeBg(base64Url){
        document.body.style.background = 'url('+base64Url+')';
        document.body.style.backgroundSize = '100%';
        document.querySelector('.beautiful__body--search').style.boxShadow = 'none';
        document.querySelectorAll('.beautiful__like--url').forEach((ele,i)=>{
            ele.style.boxShadow = 'none';
        });
        document.querySelectorAll('.beautiful__footer--link').forEach((ele,i)=>{
            ele.style.color = 'white';
        });
        document.querySelector('.beautufil__header--words').src='https://v2.jinrishici.com/one.svg?color='+'white';
    }


    
   
   


