$(function() {

  $(".hamburger").on("click", function(e) {
    console.log("I was clicked");

    $('#drawer').toggleClass('open');
    e.preventDefault();

    //$(".menu").toggleClass('slide-down')
  })

});
