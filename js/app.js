

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function topNavToggle() {
  var resp = document.getElementById("menu-topnav");
  if (resp.className === "topnav hidden") {
    resp.className += " responsive";
  } else {
    resp.className = "topnav hidden";
  }
}






var btnscroll = document.getElementById("btnscroll");
var scrollMenu = document.getElementById("menu-topnav")

// evento para detectar scroll na janela

window.onscroll = function() {
  revealOnScroll();
  menuOnScroll();
};


// funcao para aparecer o botao de whatsapp on scroll
function revealOnScroll() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btnscroll.classList.add('show');


  } else {
   btnscroll.classList.remove('show');


  }
}

// funcao para aparecer o menu ao fazer scroll para cima

var prevScrollpos = window.pageYOffset;

function menuOnScroll() {
 var currentScrollPos = window.pageYOffset;
   if (prevScrollpos > currentScrollPos) {
     document.getElementById("menu-topnav").style.top = "0";
   } else {
     document.getElementById("menu-topnav").style.top = "-72px";
   }
   prevScrollpos = currentScrollPos;
 }

// show and hide menu on scroll - deprecated e merged com evento anterior

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
// var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("menu-topnav").style.top = "0";
//   } else {
//     document.getElementById("menu-topnav").style.top = "-72px";
//   }
//   prevScrollpos = currentScrollPos;
// }


// esconder menu quando se clica
/*
function devolverMenu() {
  var y = document.getElementById("menu-topnav");

  if (y.className === "menu") {
    y.className += " a_descricao";
  } else {
    y.className = "menu";
  }


}
*/