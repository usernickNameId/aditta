$(document).ready(function(){
  $('.slider-two').slick({
  arrows: true,
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: false,
  prevArrow: "<img src='img/arrows-left.png' class='slick-prev-one prev' alt='1'>",
  nextArrow: "<img src='img/arrows-right-second.png' class='slick-next-one next' alt='2'>",
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: true
        
      }
    },
       {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
        
      }
    },
      {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
        
      }
    }
]
  });
    
});