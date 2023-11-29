let header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("alterHeader", window.scrollY > 0);
});


let body = document.querySelector("body");
window.addEventListener("scroll", function () {
    body.classList.toggle("alterBody", window.scrollY > 0);
});


$(".openMenu").click(function(){  
  $("header ul").toggleClass("display"); 
})



$( function() {
    $( "#accordion" ).accordion({
      collapsible: true,
      active: false
    });
    
  } );

$("header nav ul li a").click(function(){
  $("header ul").removeClass("display"); 
})