$(document).ready(function(){
  //tooltip
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  //popovers
  $(function () {
    $('[data-toggle="popover"]').popover({
      trigger: 'focus'
    })
  })

  //owl carousel
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    navText: ['<img src="res/icons/arrow-left.svg" alt="slide to left project">', '<img src="res/icons/arrow-right.svg" alt="slide to right project">'],
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
        1000:{
            items:3,
            nav:true,
            loop:true
        }
      }
    })
});
