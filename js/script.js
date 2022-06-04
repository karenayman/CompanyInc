// to speed carosal
// $(document).ready(function() {
//     $('.carousel').carousel({
//         interval:500
//     });
// })
var myCarousel = document.querySelector('#myslide')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 3000,
//   wrap: false
})
function scrollToTop() {
  window.scrollTo(0, 0);
}


// gear check color option
$(document).ready(function() {
  $(".gear-check").click(function() {
    $(".color-option").fadeToggle();
  })
  $(".color-option ul li")
  .eq(0).css("backgroundColor","red").end()
  .eq(1).css("backgroundColor","#e426d5").end()
  .eq(2).css("backgroundColor","#009aff");

  $(".color-option ul li").click(function(){
    // console.log($(this).attr("data-value"));
  $("link[href*='theam']").attr("href",$(this).attr("data-value"));
  })

//load screen
// $(window).on('load',function(){
//   $(".loading-overlay, .loading-overlay h1").fadeOut(1000);
// })

// scroll to top
// $("#scroll-top")
$(window).scroll(function(){
  // console.log($(this).scrollTop());
  if ($(this).scrollTop()>=700){
    $("#scroll-top").show();
  }else{
    $("#scroll-top").hide();
  }
  // $("#scroll-top").click(function(){
  //   $("html,body").animate({scrollTop:0});
  // })
})
})