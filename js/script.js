$(function() {
  $(".menu-box").on("click", function(event) {
    $(this).toggleClass('active');
    $(".nav-list").fadeToggle();
  });
});