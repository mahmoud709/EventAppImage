let bar_icon=document.getElementById("bar-icon");
let menue=document.querySelector(".nav");


bar_icon.addEventListener("click",() =>{
  menue.classList.toggle("active"); 
  bar_icon.classList.toggle("fa-times");
});


// scroll button
const scroll_btn=document.getElementById('scroll_button');

window.onscroll=function(){
    if(scrollY>=400){
        scroll_btn.style.display='block';
    }
    else{
        scroll_btn.style.display='none';
    }
}


scroll_btn.onclick=function(){
scroll(0,0);
}
// for swipper

var swiper = new Swiper(".home-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    loop:true,
    autoplay:{
        delay:2000,
        disableOnInteraction:false,
    }
  });

  
var swiper = new Swiper(".review-slider", {
  slidesPerView: 1,
  grabCursor: true,
  loop:true,
  spaceBetween: 10,
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1050: {
      slidesPerView: 3,
    },    
  },
  autoplay:{
    delay: 5000,
    disableOnInteraction:false,
}
});