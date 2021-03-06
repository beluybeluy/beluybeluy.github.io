$('.sl').slick({
   autoplay: true, //автоматична зміна слайдів (false)
   autoplaySpeed: 2000, //швидкість перемикання файлів (3000)
   cssEase: 'ease-out', //тип анімації при перелистуванні
//      centerMode: true, //розташування по центру (false)
//      centerPadding: '10px', //відступи
   dots: true, //показує або скриває кружки (false)
   arrows: false, //показує або скриває стрілки (true)
   //   fade: true, // слайди не перелистються а просто міняються
   //   draggable: false, //не дозволить мишкую листати слайди
//   infinite: false, //не безкінечні слайди 
   //   edgeFriction: '0.5',
   pauseOnDotsHover: true, //зупинка при наведені на дотс
      slidesToShow: 2, //скільки слайдів видно
   //   vertical: true, //вертикальне перемотування (false)
   //   rows: 2, //скільки рядів зі слайдами
   //   slidesPerRow: 2, //скільки слайдів в рядку
   //   slidesToScroll: 3, //по скільки слайдів перемотувати
   responsive: [
      {
         breakpoint: 1024, //дисплей з розширенням 1024 
         settings: {
            slidesToShow: 2
            , slidesToScroll: 3
            , infinite: true
            , dots: true
         }
    }
      , {
         breakpoint: 768
         , settings: {
            slidesToShow: 1
            , slidesToScroll: 2
         }
      }
      , {
         breakpoint: 480
         , settings: {
            slidesToShow: 1
            , slidesToScroll: 1
         }
    }]
});