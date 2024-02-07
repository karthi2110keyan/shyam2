let x=document.getElementById("navigation")
let y=document.querySelector(".nav_box")
document.querySelector(".btn_bar").addEventListener("click",function(){


    if(x.style.visibility==="visible"){
        x.style.animation="slidedown 1s "
        
            y.style.visibility="hidden"
            setTimeout(function(){
                x.style.visibility="hidden"
            },500)
        
       
       
  }else{
    x.style.visibility="visible"
    x.style.animation="slideup 1s"
    y.style.visibility="visible"
  }
})


/* ------------video-auto------------ */




document.querySelector(".right").addEventListener("click",function(){
  var s=document.getElementById("ob")
 let leftSide =s.scrollLeft

  leftSide+=200;
  s.scrollLeft=leftSide

  
})

document.querySelector(".lefthand").addEventListener("click",function(){
  var s=document.getElementById("ob")
 let leftSide =s.scrollLeft

  leftSide-=380;
  s.scrollLeft=leftSide

  
})









