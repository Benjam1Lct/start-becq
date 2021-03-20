$(document).ready(function(){
  $(".cont").fadeOut(3000, function(){
    $(".head").fadeIn(1000);
  });
})

$('.header_navbar--toggle').click(function(e) {
  e.preventDefault();
  $('.header_navbar').toggleClass('is-open');
})

$(document).ready(function(){

  $(window).scroll(function(){
    if($(this).scrollTop() > 40){
      $('#topBtn').fadeIn();
    } else{
      $('#topBtn').fadeOut();
    }
  });

  $("#topBtn").click(function(){
    $('html ,body').animate({scrollTop : 0},800);
  });
});
