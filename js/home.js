    /**
     * @author iwh718 wx:18712505420
     */
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
            
            let likes  = JSON.parse(localStorage.getItem('likeList')||[]);
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
    
    
   
   


