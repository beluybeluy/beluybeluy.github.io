$(function () {
   $('a.works__photo').fancybox({
      transitionIn: 'elastic'
      , transitionOut: 'elastic'
      , titlePosition: 'over'
   });
})

function slowScroll(clas) {
   var offset = 60;
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
$(window).scroll(function () {
   $('.services__item:nth-child(2)').each(function () {
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow + 700) {
         $(this).addClass('fadeInDownBig');
      }
   });
});
var touch = $('.touch__nav'); //наша силка
var menu = $('.menu'); //наше меню
$(touch).on('click', function (e) {
   $(touch).toggleClass('open');
   e.preventDefault();
   menu.slideToggle();
})
$(window).resize(function () {
   var wide = $(window).width();
   if (wide > 768 && menu.is(':hidden')) {
      menu.removeAttr('style');
   }
})
$(document).ready(function () {
   $(window).scroll(function () {
      if ($('.header__navbar').offset().top > 50) {
         $('.logo__img_dark').removeClass('change');
         $('.logo__img_light').addClass('change');
         $('.header').addClass('sticky');
         $('.menu__link').addClass('sticky');
         $('.touch__nav_item').addClass('open');
      }
      else {
         $('.logo__img_dark').addClass('change');
         $('.logo__img_light').removeClass('change');
         $('.header').removeClass('sticky');
         $('.menu__link').removeClass('sticky');
         $('.touch__nav_item').removeClass('open');
      }
   });
   //---MAP---
   google.maps.event.addDomListener(window, 'load', init);
   var map, markersArray = [];

   function bindInfoWindow(marker, map, location) {
      google.maps.event.addListener(marker, 'click', function () {
         function close(location) {
            location.ib.close();
            location.infoWindowVisible = false;
            location.ib = null;
         }
         if (location.infoWindowVisible === true) {
            close(location);
         }
         else {
            markersArray.forEach(function (loc, index) {
               if (loc.ib && loc.ib !== null) {
                  close(loc);
               }
            });
            var boxText = document.createElement('div');
            boxText.style.cssText = 'background: #fff;';
            boxText.classList.add('md-whiteframe-2dp');

            function buildPieces(location, el, part, icon) {
               if (location[part] === '') {
                  return '';
               }
               else if (location.iw[part]) {
                  console.log(location);
                  switch (el) {
                  case 'photo':
                     if (location.photo) {
                        return '<div class="iw-photo" style="background-image: url(' + location.photo + ');"></div>';
                     }
                     else {
                        return '';
                     }
                     break;
                  case 'iw-toolbar':
                     return '<div class="iw-toolbar"><h3 class="md-subhead">' + location.title + '</h3></div>';
                     break;
                  case 'div':
                     switch (part) {
                     case 'email':
                        return '<div class="iw-details"><i class="material-icons" style="color:#4285f4;"><img src="//cdn.mapkit.io/v1/icons/' + icon + '.svg"/></i><span><a href="mailto:' + location.email + '" target="_blank">' + location.email + '</a></span></div>';
                        break;
                     case 'web':
                        return '<div class="iw-details"><i class="material-icons" style="color:#4285f4;"><img src="//cdn.mapkit.io/v1/icons/' + icon + '.svg"/></i><span><a href="' + location.web + '" target="_blank">' + location.web_formatted + '</a></span></div>';
                        break;
                     case 'desc':
                        return '<label class="iw-desc" for="cb_details"><input type="checkbox" id="cb_details"/><h3 class="iw-x-details">Details</h3><i class="material-icons toggle-open-details"><img src="//cdn.mapkit.io/v1/icons/' + icon + '.svg"/></i><p class="iw-x-details">' + location.desc + '</p></label>';
                        break;
                     default:
                        return '<div class="iw-details"><i class="material-icons"><img src="//cdn.mapkit.io/v1/icons/' + icon + '.svg"/></i><span>' + location[part] + '</span></div>';
                        break;
                     }
                     break;
                  case 'open_hours':
                     var items = '';
                     for (var i = 0; i < location.open_hours.length; ++i) {
                        if (i !== 0) {
                           items += '<li><strong>' + location.open_hours[i].day + '</strong><strong>' + location.open_hours[i].hours + '</strong></li>';
                        }
                        var first = '<li><label for="cb_hours"><input type="checkbox" id="cb_hours"/><strong>' + location.open_hours[0].day + '</strong><strong>' + location.open_hours[0].hours + '</strong><i class="material-icons toggle-open-hours"><img src="//cdn.mapkit.io/v1/icons/keyboard_arrow_down.svg"/></i><ul>' + items + '</ul></label></li>';
                     }
                     return '<div class="iw-list"><i class="material-icons first-material-icons" style="color:#4285f4;"><img src="//cdn.mapkit.io/v1/icons/' + icon + '.svg"/></i><ul>' + first + '</ul></div>';
                     break;
                  }
               }
               else {
                  return '';
               }
            }
            boxText.innerHTML = buildPieces(location, 'photo', 'photo', '') + buildPieces(location, 'iw-toolbar', 'title', '') + buildPieces(location, 'div', 'address', 'location_on') + buildPieces(location, 'div', 'web', 'public') + buildPieces(location, 'div', 'email', 'email') + buildPieces(location, 'div', 'tel', 'phone') + buildPieces(location, 'div', 'int_tel', 'phone') + buildPieces(location, 'open_hours', 'open_hours', 'access_time') + buildPieces(location, 'div', 'desc', 'keyboard_arrow_down');
            var myOptions = {
               alignBottom: true
               , content: boxText
               , disableAutoPan: true
               , maxWidth: 0
               , pixelOffset: new google.maps.Size(-140, -40)
               , zIndex: null
               , boxStyle: {
                  opacity: 1
                  , width: '280px'
               }
               , closeBoxMargin: '0px 0px 0px 0px'
               , infoBoxClearance: new google.maps.Size(1, 1)
               , isHidden: false
               , pane: 'floatPane'
               , enableEventPropagation: false
            };
            location.ib = new InfoBox(myOptions);
            location.ib.open(map, marker);
            location.infoWindowVisible = true;
         }
      });
   }
   //-----MAP------
   function init() {
      var mapOptions = {
         center: new google.maps.LatLng(57.40946140287796, 44.49096574999999)
         , zoom: 2
         , fullscreenControl: true
         , zoomControl: true
         , disableDoubleClickZoom: true
         , mapTypeControl: true
         , mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
         , }
         , scaleControl: true, //            scrollwheel: true,
         scrollwheel: false
         , streetViewControl: true
         , draggable: true
         , clickableIcons: false
         , mapTypeId: google.maps.MapTypeId.ROADMAP
         , styles: [{
            "stylers": [{
               "visibility": "simplified"
            }]
         }, {
            "stylers": [{
               "color": "#131314"
            }]
         }, {
            "featureType": "water"
            , "stylers": [{
               "color": "#131313"
            }, {
               "lightness": 7
            }]
         }, {
            "elementType": "labels.text.fill"
            , "stylers": [{
               "visibility": "on"
            }, {
               "lightness": 25
            }]
         }]
      }
      var mapElement = document.getElementById('mapkit');
      var map = new google.maps.Map(mapElement, mapOptions);
      var locations = [

        ];
      var layer = new google.maps.TrafficLayer();
      layer.setMap(map);
      for (i = 0; i < locations.length; i++) {
         marker = new google.maps.Marker({
            icon: locations[i].marker
            , position: new google.maps.LatLng(locations[i].lat, locations[i].lng)
            , map: map
            , title: locations[i].title
            , address: locations[i].address
            , desc: locations[i].desc
            , tel: locations[i].tel
            , int_tel: locations[i].int_tel
            , vicinity: locations[i].vicinity
            , open: locations[i].open
            , open_hours: locations[i].open_hours
            , photo: locations[i].photo
            , time: locations[i].time
            , email: locations[i].email
            , web: locations[i].web
            , iw: locations[i].iw
         });
         markersArray.push(marker);
         if (locations[i].iw.enable === true) {
            bindInfoWindow(marker, map, locations[i]);
         }
      }
   }
})