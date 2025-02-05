/* =============== preloader ================= */
const preloader=document.getElementsByClassName("preloader")[0];
const header_content=document.getElementsByClassName("header-content")[0];
window.onload=function(){
  setTimeout(function(){
     preloader.style.transition="opacity 0.3s ease";
     preloader.style.opacity=0;

    setTimeout(function(){
      preloader.style.display="none";
      header_content.classList.add("visible");
    },400)
  },1000)
}

/* =============== services ================= */
const service1=document.getElementsByClassName("service1")[0];
const service2=document.getElementsByClassName("service2")[0];
const service3=document.getElementsByClassName("service3")[0];
window.onscroll=function(){
if(scrollY>1400){
    service1.style.animation="fadeInUp 1s  forwards"
    service2.style.animation="fadeInUp 1s .8s forwards"
    service3.style.animation="fadeInUp 1s 1.2s forwards"
}
}
