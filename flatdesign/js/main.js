//-----SETTINGS FOR SLIDER----
$('.slider').slick({
   autoplay: true, //автоматична зміна слайдів (false)
   autoplaySpeed: 2000, //швидкість перемикання файлів (3000)
   cssEase: 'ease-out', //тип анімації при перелистуванні
   //      centerMode: true, //розташування по центру (false)
   //      centerPadding: '10px', //відступи
   dots: true, //показує або скриває кружки (false)
   arrows: true, //показує або скриває стрілки (true)
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
//      {
//         breakpoint: 1024, //дисплей з розширенням 1024 
//         settings: {
//            slidesToShow: 3
//            , slidesToScroll: 3
//            , infinite: true
//            , dots: true
//         }
//    }
      , {
         breakpoint: 768
         , settings: {
            slidesToShow: 1
            , slidesToScroll: 1
         }
      }
//      , {
//         breakpoint: 480
//         , settings: {
//            slidesToShow: 1
//            , slidesToScroll: 1
//         }
//    }
   ]
});
//--FORM VALIDATION----
$(function () {
   'use strict';
   var regexes = {
      email: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
      , password: /^([a-zA-Z0-9@#$%^&+=*.\-_ ]){6,}$/
      , tel: /^[0-9]{5,20}$/
   , };
   $.each($('.modal__field'), function () {
      $(this).on('focusout', function () {
         if (!regexes[$(this).attr('name')].test($(this).val())) {
            $(this).addClass('error');
            $(this).removeClass('succes');
            $('.register').removeClass('shake');
         }
         else {
            $(this).removeClass('error');
            $(this).addClass('succes');
            $('.register').removeClass('shake');
         }
      });
   });
   //-----Modal block-----   
   $('.send').click(function () {
      if ($('.modal__field').hasClass('succes')) {
         $('.register').removeClass('show');
         $('.window').css('display', 'none');
      }
      else {
         $('.register').addClass('shake');
      }
   })
});
$('.form__hide').click(function(){
   $('.register').removeClass('show');
})
$('.user__reg').click(function () {
   $('.register').addClass('show');
   $('.window').css('display', 'block');
})
//---Hide Modal Block----
$('.window').click(function(){
   $('.register').removeClass('show');
   $(this).css('display','none');
})