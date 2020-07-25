//blob转base64
function blobToDataURL(blob,cb) {
    let reader = new FileReader();
    reader.onload = function (evt) {
      var base64 = evt.target.result
      cb(base64)
    };
    reader.readAsDataURL(blob);
}


function changeBg(base64Url){
    document.body.style.background = 'url('+base64Url+')';
    document.body.style.backgroundSize = '100%';
    document.querySelector('.options__card').style.boxShadow = 'none';
}


let bgObj = document.querySelector('input[name=selectBg]');
console.log(bgObj)
bgObj.addEventListener('change',function(e){
    console.log(e)
       let img = bgObj.files[0] ;
        blobToDataURL(img,function(base64Url) {
        changeBg(base64Url);
        localStorage.setItem('bg',base64Url);
      })
    
});


//初始化背景
if(localStorage.getItem('bg')){
    changeBg(localStorage.getItem('bg'))
}

document.querySelector('.options__btn--default').addEventListener('click',function(){
    localStorage.removeItem('bg');
    location.reload();
})

