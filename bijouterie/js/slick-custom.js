$('.shops-slider').slick({
   slidesToShow: 4,
   arrows: true,
//   variableWidth: true,
   autoplay: true,
   slidesToScroll: 1,
    responsive: [
      {
         breakpoint: 1024, //дисплей з розширенням 1024 
         settings: {
            slidesToShow: 3
            , infinite: true
            , dots: true
         }
    }
      , {
         breakpoint: 768
         , settings: {
            slidesToShow: 2
         }
      }
      , {
         breakpoint: 480
         , settings: {
            slidesToShow: 1
            , slidesToScroll: 1
         }
    }
                         ]
//   centerMode: true
});
$('.products-slider').slick({
   slidesToShow: 1,
   arrows: true,
   autoplay: true,
   slidesToScroll: 1,
}); 

$('.photos-slider').slick({
   slidesToShow: 3,
   rows: 2, 
   autoplay: true,
   dots: true,
   arrows: false,
   slidesToScroll: 1,
   responsive: [
   {
         breakpoint: 1024, //дисплей з розширенням 1024 
         settings: {
            slidesToShow: 3
            , infinite: true
            , dots: true
         }
    }
      , {
         breakpoint: 768
         , settings: {
            slidesToShow: 1
         }
      }
      , {
         breakpoint: 480
         , settings: {
            slidesToShow: 1
            , slidesToScroll: 1
         }
    }
                         ]

});
$('.team-slider').slick({
   slidesToShow: 1,
   autoplay: true,
   dots: true,
   arrows: false

});
 