$(function() {

  $(".hamburger").on("click", function(e) {
    console.log("I was clicked");
    e.preventDefault();

    $(".menu").toggleClass('slide-down')
  })

});
