let header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("alterHeader", window.scrollY > 0);
});

let body = document.querySelector("body");
window.addEventListener("scroll", function () {
    body.classList.toggle("alterBody", window.scrollY > 0);
});


 


$( function() {
    $( "#accordion" ).accordion({
      collapsible: true,
      active: false
    });
    
  } );
  