$(".navicon-button").click(function() {
  $(this).toggleClass("open"); 
  $("header nav").slideToggle(400, function() {
    $(this).toggleClass("nav-expanded").css('display', '');
  });
});