var touch = $('.touch-nav'); 
var menu = $('.nav'); 
function slowScroll(clas) {
   $(touch).toggleClass('open');
   var offset = 50;
   if ($(window).width() < 768) {
      menu.slideToggle();
   }
   else {
      menu.css('display', 'block');
   }
   $('body').animate({
      scrollTop: $(clas).offset().top - offset
   }, 2000)
};
$('a').click(function(e){
   e.preventDefault();
})
$(touch).on('click', function (e) {
   $(touch).toggleClass('open');
   e.preventDefault();
   menu.slideToggle();
});
//for close menu when widnow is resize
$(window).resize(function () {
      var wide = $(window).width();
      if (wide > 768 && menu.is(':hidden')) {
         menu.removeAttr('style');
      }
     if(wide<768){
        menu.css('display','none');
        $(touch).removeClass('open');
     }
   });
//FOR FIXED MENU
      var $pageNav = $('.header');
      var $navigOffset = $pageNav.offset();
      var $mainMenu = $('.nav');
      //for header menu
      $(window).scroll(function () {
         if ($(window).scrollTop() > $navigOffset.top) {
            $pageNav.addClass('sticky');
         }
         else {
            $pageNav.removeClass('sticky');
         }
      })
$(function(){
   $('a').on('click',function(){
   $('html,body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
   },1500);
   return false;
});
});
