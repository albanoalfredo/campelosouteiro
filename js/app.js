var btnscroll = document.getElementById("btnscroll");

console.log("lido");

// $(window).scroll(function() {
//   if ($(window).scrollTop() > 300) {
//     btnscroll.addClass('show');
//     console.log("visto");
  
//   } else {
//     btnscroll.removeClass('show');
//     console.log("escondido");
//   }
// });


window.onscroll = function() {viewOnScroll()};

function viewOnScroll() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btnscroll.classList.add('show');
    console.log("mostra");
  } else {
   btnscroll.classList.remove('show');
    console.log("esconde");
  }
}