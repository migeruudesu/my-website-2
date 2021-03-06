const jsBody = document.querySelector('body');
const jsHeader = document.querySelector('header');
const jsHamburger = document.querySelector('.navbar--hamburger');
const jsHamburgerLine = document.querySelectorAll('.navbar--hamburger--line');
const jsNavbarLinks = document.querySelector('.navbar--links');
const jsNavbarLinksa = document.querySelectorAll('.navbar--links-a');
const jsMediaMin769 = window.matchMedia('(max-width:480px)');
const jsMlogo = document.querySelector('.mlogo');
const jsSocialIcon = document.querySelector('.social--container');
// let jsHamburgerLine02 = document.querySelector('.navbar--hamburger--line');

// window.scroll(0,0);

let hamColor = false;
let logoColor = false;
function removeShow(currentScreen){
    if(currentScreen.matches){
        if(jsNavbarLinks.classList.contains('show')){
        jsNavbarLinks.classList.remove('show');
        jsSocialIcon.classList.remove('displayon')
        // console.log(alsdkj);
    }
    // console.log("matched");
    }
    
}

jsMediaMin769.addEventListener('change',removeShow);
removeShow(jsMediaMin769);

jsHamburger.addEventListener('click',()=>{
    jsNavbarLinks.classList.toggle('show');
    // jsMlogo.classList.toggle('changecolor');
    jsSocialIcon.classList.toggle('displayon')
    jsBody.classList.toggle('disable');
    if(!hamColor){
      setTimeout(changeColor, 100)

    }else{
      removeColor()
    }
    
    if(!animate){
      animate1()
    }else{
      animate2()
    }
    
})


let changeColor =  function(){
    for(let i = 0; i < jsHamburgerLine.length; i++){
        jsHamburgerLine[i].style.backgroundColor = "#FDDB27";
        hamColor = true;
      };
      for(let i = 0; i < jsNavbarLinksa.length; i++){
        jsNavbarLinksa[i].style.color="white";
        }
      jsMlogo.style.color="#ff5500";
      logoColor= true;
  };

let removeColor =  function(){
    for(let i = 0; i < jsHamburgerLine.length; i++){
        jsHamburgerLine[i].style.backgroundColor = null;
        hamColor = false;
      }
    for(let i = 0; i < jsNavbarLinksa.length; i++){
      jsNavbarLinksa[i].style.color= null;
      }
      jsMlogo.style.color=null;
      logoColor= false;
  };

  
window.addEventListener("scroll",()=>{
    if (document.documentElement.scrollTop > 20) {
      jsHeader.style.transition = "all .2s";
      jsHeader.style.backgroundColor = "rgba(0,0,0)";
      jsHeader.style.boxShadow = "2px 2px 5px 1px rgba(0,0,0,0.62)";
      // jsMlogo.style.color = "#ff5500";
        jsNavbarLinksa.forEach((link,index,arr)=>{
          arr[3].style.border = "2px solid grey";
        })
        changeColor();
        jsHeader.style.borderBottom = "none";

        // add border when scrolled
        jsNavbarLinksa.forEach((link,index,arr)=>{
          arr[3].style.border = "2px solid #ff5500";
        })

    } else if(document.documentElement.scrollTop <= 20) {
        jsHeader.style.backgroundColor = "transparent";
        // jsMlogo.style.color = "white";
        removeColor();
        jsHeader.style.borderBottom = null;
        jsHeader.style.boxShadow = "none";

        // add border when scrolled
        jsNavbarLinksa.forEach((link,index,arr)=>{
          arr[3].style.border = "2px solid grey";
        })

        jsHeader.style.boxShadow = "none";
    }

})

//  this is make the color of nav--links-a and mlogo retained 
// when the hamburger is pressed when already scrolled

jsHamburger.addEventListener('click',()=>{
      // console.log('tae'); test good
    if(document.documentElement.scrollTop > 1){
      // console.log('scrolled'); test good
      if(!logoColor){
        // console.log('logo color is false'); test good
        // jsMlogo.style.color = "#ff5500";
        // logoColor = true;
        changeColor();
      }
    }
    else {
      // console.log('not scrolled'); test good
      // console.log('logo color is true'); test good
    }
})

let animate = false;
let animate1 =  function(){
  jsHamburgerLine[0].style.transform = "rotate(45deg) translate(5px,7px)";
  jsHamburgerLine[2].style.transform = "rotate(-45deg) translate(5px,-7px)";
  jsHamburgerLine[1].style.transform = "translateX(-50px)";
  jsHamburgerLine[0].style.transition = "all .2s ease-out"
  jsHamburgerLine[1].style.transition = "all .2s ease-out"
  jsHamburgerLine[2].style.transition = "all .2s ease-out"
  jsHamburgerLine[1].style.opacity= "0";
  jsHamburgerLine[0].style.backgroundColor = "red";

  animate = true;
}

let animate2 =  function(){
  jsHamburgerLine[0].style.transform = "rotate(0deg) translate(0px,0px)";
  jsHamburgerLine[2].style.transform = "rotate(0deg) translate(0px,0px)";
  jsHamburgerLine[1].style.transform = "translateX(0)";
  jsHamburgerLine[0].style.transition = "all .5s ease-out"
  jsHamburgerLine[1].style.transition = "all .5s ease-out"
  jsHamburgerLine[2].style.transition = "all .5s ease-out"
  jsHamburgerLine[1].style.opacity= "1";
  
  animate = false;
}

//this is for smoth scrolling
var scroll = new SmoothScroll('a[href*="#"]');

