/* responsive views variables  */

var viewPortSize = '';

if(Modernizr.mq('(max-width: 480px)')){

    viewPortSize = 320;

}else if(Modernizr.mq('(max-width: 768px)')){

    viewPortSize = 480;

}else if(Modernizr.mq('(max-width: 985px)')){

    viewPortSize = 768;

}else {

    viewPortSize = 986;

}


var app = {

    initSelectboxes: function () {

        if(exist($('.mobile-markt-selector'))){
            $('.standard-select').not('.orange').selectBox({
              mobile: true
            });

            homeSliderMPager = $('#home-slider-mobile-pager').selectBox({
               mobile: true
           }).change(function () {
                homePageSlider.goToSlide($(this).val());
          });
        }

    },
    initHomeSlider:function(){

        if(exist($('#home-page-slider'))){

           homePageSlider = $('#home-page-slider .slider').bxSlider({

                 mode: 'fade',
                 auto: true,
                 autoHover:true,
                 responsive:false,
                 pause:4000,
                 minSlides: 1,
                 maxSlides: 1,
                 moveSlides: 1,
                 slideMargin:10,
                 pagerCustom: '#home-slider-pager',
                 onSlideBefore: function($slideElement, oldIndex, newIndex){

                     $('#home-slider-banners').addClass('banners-hide');
                      $('#ajax-load-ico').fadeIn();
                      homeSliderMPager.selectBox('value', newIndex);

                      app.loadHomeSliderBanners(0,newIndex);

                 },
                 onSliderLoad: function(){

                    $('#home-page-slider .slider .slide').css('visibility','visible');
                    $('#ajax-load-ico').hide();
                    app.loadHomeSliderBanners(1);

                 }
             });


        }
    },
    loadHomeSliderBanners:function(firstLoad,newIndex){

        if(firstLoad == 1 ){  //ifpage load


         //vievport settings
         if(viewPortSize == 768){

            var slCount = 3;
            var slMargin = 22;
            var slWidth = 231;

         } else if (viewPortSize == 986 ){

             var slCount = 4;
             var slMargin = 20;
             var slWidth = 231;

          } else if (viewPortSize == 480 ){

             var slCount = 2;
             var slMargin = 18;
             var slWidth = 216;

         } else if (viewPortSize == 320 ){

             var slCount = 1;
             var slMargin = 10;
             var slWidth = 292;

         }

            //building slider
          homeBannersSlider = $('#ajax-load-container').bxSlider({
               slideWidth: slWidth,
               minSlides: slCount,
               maxSlides: slCount,
               moveSlides: 1,
               slideMargin: slMargin,
               infiniteLoop:true,
               onSliderLoad: function(){
                 $('#home-slider-banners').removeClass('banners-hide');
               }

           });

            //hover events
            $('#home-slider-banners .w-holder').mouseenter(function(){
                homePageSlider.stopAuto();
            });
            $('#home-slider-banners .w-holder').mouseleave(function(){
                homePageSlider.startAuto();
            });

        }else { //if slide change

            //gets AJAX url
            $('#home-slider-pager a').each(function(){

                if($(this).data('slide-index') == newIndex){
                     path = $(this).data('ajax');
                }

            });

            //requests overload prevention
            if(typeof sliderLoad !== "undefined"){
               sliderLoad.abort();
            }

            //getting data & reloading slider
            sliderLoad = $.ajax({
                   url:path,
                   success: function(data){

                       $('#ajax-load-ico').hide();
                       $('#ajax-load-container').html(data);

                       homeBannersSlider.reloadSlider();
                       $('#home-slider-banners').removeClass('banners-hide');


                   }

               });
        }

    },
    resizeHomeSliderBanners: function(){

        if(exist($('#home-page-slider'))){

            //vievport settings
            if(viewPortSize == 768){

                var slCount = 3;
                var slMargin = 22;
                var slWidth = 231;

            } else if (viewPortSize == 986 ){

                var slCount = 4;
                var slMargin = 20;
                var slWidth = 231;

            } else if (viewPortSize == 480 ){

                var slCount = 2;
                var slMargin = 18;
                var slWidth = 216;

            } else if (viewPortSize == 320 ){

                var slCount = 1;
                var slMargin = 10;
                var slWidth = 292;

            }

            //destroying slider
             if(typeof homeBannersSlider !== "undefined"){
                 homeBannersSlider.destroySlider();
             }

             path = $('#home-slider-pager a.active').data('ajax');

             $('#ajax-load-ico').hide();

            //requests overload prevention
            if(typeof sliderLoad !== "undefined"){
                sliderLoad.abort();
            }

            //getting data & building slider
            homePageSlider.stopAuto();
            homeBannersSlider = $('#ajax-load-container').bxSlider({
               slideWidth: slWidth,
               minSlides: slCount,
               maxSlides: slCount,
               moveSlides: 1,
               slideMargin: slMargin,
               infiniteLoop:true,
               onSliderLoad: function(){
                   homePageSlider.startAuto();

               }
           });


        }
    },
    initHomeAdvSlider:function(){

        if(exist($('#home-content-slider'))){

            if(typeof HomeAdvSlider !== "undefined"){
                HomeAdvSlider.destroySlider();
                $('#home-content-slider .slide .grey-box').css('height','auto');
                $('#home-content-slider .slide .grey-box.product p').css('height','auto');
            }

            //vievport settings
            if(viewPortSize == 768){

                var slCount = 4;
                var slMargin = 15;
                var slWidth = 188;

            } else if (viewPortSize == 986 ){

                var slCount = 4;
                var slMargin = 22;
                var slWidth = 231;

            } else if (viewPortSize == 480 ){

                var slCount = 2;
                var slMargin = 18;
                var slWidth = 216;

            } else if (viewPortSize == 320 ){

                var slCount = 1;
                var slMargin = 10;
                var slWidth = 230;

            }
            HomeAdvSlider = $('#home-content-slider .slider').bxSlider({
               slideWidth: slWidth,
               minSlides: slCount,
               maxSlides: slCount,
               moveSlides: 1,
               nextSelector: '#slider-next',
               prevSelector: '#slider-prev',
               slideMargin: slMargin,
               infiniteLoop:true,
               onSliderLoad: function(){
                  equalHeight($('#home-content-slider .slide .grey-box:first-child'));
                  equalHeight($('#home-content-slider .slide .grey-box:first-child + .grey-box'));
                  equalHeight($('#home-content-slider .slide .grey-box.product p'));

               }
           });
        }
    },
    initAsideSlider: function () {

        if(typeof asideSlider !== "undefined"){
            asideSlider.destroySlider();
        }

        if(exist($('#right-col .aside-slider'))){

           if(viewPortSize >= 768){ //desktop

               var prefix = 'hidden';
               var count = 1;

           }else {

               var prefix = 'visible';
               if(viewPortSize == 480){
                   var count = 2;
               }else if(viewPortSize == 320){
                   var count = 1;
               }
               equalHeight($('#right-col .aside-slider.mobile-landscape-'+ prefix +' .grey-box'));
           }

           asideSlider =  $('#right-col .aside-slider.mobile-landscape-'+ prefix).bxSlider({
              slideWidth: $('#right-col .aside-slider.mobile-landscape-'+ prefix +' .slide:first-child').width(),
              minSlides: count,
              maxSlides: count,
              moveSlides: count,
              slideMargin: count * 10,
              onSliderLoad: function(){
                  $('#right-col .aside-slider.aside-slider.mobile-landscape-'+ prefix +' .slide').css('visibility','visible');
                  $('#right-col .aside-slider.aside-slider.mobile-landscape-'+ prefix).parent().next().append('<h3 class="orange">mehr angebote ...</h3>');
              }

          });
        }


    },
    initKnowHowSlider:function(){

        if(typeof knowHowContentSlider !== "undefined"){
            knowHowContentSlider.destroySlider();
            var firstInit = false;

        }else {
            var firstInit = true;
        }


         if(exist($('#know-how'))){

            knowHowContentSlider = $('#know-how .know-how-slider .slider').bxSlider({
                slideWidth: $('#know-how .know-how-slider .slider').width(),
                minSlides: 1,
                maxSlides: 1,
                useCSS:false,
                moveSlides: 1,
                infiniteLoop:false,
                hideControlOnEnd:true,
                slideMargin: 10,
                onSliderLoad: function(){
                    $('#know-how .know-how-slider .slider').css('visibility','visible');

                },
                onSlidePrev:function($slideElement, oldIndex, newIndex){
                    $('#know-how .know-how-carousel .slide.active').removeClass('active');
                    $('#know-how .know-how-carousel .slide:eq('+ newIndex +')').addClass('active');
                    $('#know-how .know-how-carousel a.prev').click();


                },
                onSlideNext :function($slideElement, oldIndex, newIndex){
                   $('#know-how .know-how-carousel .slide.active').removeClass('active');
                   $('#know-how .know-how-carousel .slide:eq('+ newIndex +')').addClass('active');
                    $('#know-how .know-how-carousel a.next').click();
                }

            });

            knowHowCarousel.init(firstInit);
            return knowHowContentSlider;
        }


    },
    initContentSlider : function(){

        if(typeof contentSlider !== "undefined"){
            contentSlider.destroySlider();

        }

        if(exist($('#content-slider'))){


            if(viewPortSize >= 768){ //desktop

                var count = 3;

            }else if(viewPortSize == 480) {

                var count = 2;

            }else if(viewPortSize == 320){

                 var count = 1;

            }

            contentSlider =$('#content-slider .slider').bxSlider({
                 slideWidth: $('#content-slider .slide:first-child').width(),
                 minSlides: count,
                 maxSlides: count,
                 useCSS:false,
                 moveSlides: 1,
                 slideMargin: 10

             });

        }

    },
    initFancybox: function(){

        if(exist($('a.zoomIcon-hover'))){
            $('a.zoomIcon-hover').fancybox({
                 padding: [20, 20, 20, 20],
                 title: "",
                 maxWidth: 650,
                 minHeight: 0,
                 fitToView: true,
                 helpers: {
                     overlay: {
                         locked: false
                     }
                 }
             });
        }

        $('#store-select').fancybox({
            padding: [20, 24, 20, 24],
            title: "",
            maxWidth: 650,
            minWidth: 470,
            minHeight: 0,
            fitToView: true,
            closeBtn:false,
            helpers: {
                overlay: {
                    locked: false

                }
            }
        });

    },
    initContactMap: function(){

        if(exist($('#contact-map'))){


            var directionsService = new google.maps.DirectionsService();
            directionsDisplay = new google.maps.DirectionsRenderer();

            var locations = [];
            var mapOptions = {
                center: contactMapLocation,
                scrollwheel: false,
                zoom: 13,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                panControl: true,
                zoomControl: true,
                scaleControl: true,
                mapTypeControl: false,
                streetViewControl: false
            };


            map = new google.maps.Map(document.getElementById("contact-map"),  mapOptions);
            directionsDisplay.setMap(map);

            var MarkerImage = 'media/layout/icons/map_marker.png';

            var  marker = new google.maps.Marker({
              position: contactMapLocation,
              map: map,
              icon: MarkerImage
             });


            directionsDisplay.setOptions({
                 draggable:false,
                 suppressMarkers:true
             });


            var markers =[];
            $('#user-location').keypress(function(e) {
                if(e.which == 13) {
                    $('#define-route').click();
                }
            });
            $('#define-route').click(function(){



                for(a=0; a < markers.length; ++a){
                    markers[a].setMap(null);
                }

                var start = $('#user-location').val();
                var end = contactMapLocation;
                var request = {
                    origin:start,
                    destination:end,
                    travelMode: google.maps.DirectionsTravelMode.DRIVING
                };


                directionsService.route(request, function(response, status) {
                    if (status == google.maps.DirectionsStatus.OK) {

                        directionsDisplay.setMap(map);
                        directionsDisplay.setDirections(response);

                         startMarker = new google.maps.Marker({
                              position: response.routes[0].legs[0].start_location,
                              map: map
                        });

                        markers.push(startMarker);
                        startMarker.setMap(map);

                    }else{

                        directionsDisplay.setMap(null);

                    }
                });


                return false;
            });

        }
    },
    initIE7:function(){

        if($('html').hasClass('lt-ie8')){
            equalHeight($('.col_4-7,.col_3-7'));
        }
    },
    viewportChange: function(){ //initializated on each viewport change

        if(exist($('#contact-map'))){
            var center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(center);

        }
        if(viewPortSize < 768 && exist($('.fancybox-inner #store-select-box'))){
            $.fancybox.close(true);
        }

        app.resizeHomeSliderBanners();


        app.initHomeAdvSlider();


    },
    initValidate:function(){

        $("#contact-form").validate({
            rules: {
                vorname: {
                    required: true

                },
                nachname: {
                    required: true

                },
                mail: {
                    required: true,
                    email: true
                },

                nachricht: {
                    required: true

                }
            },messages: {
                vorname: 'Bitte geben Sie Ihre Vorname an',
                nachname: 'Bitte geben Sie Ihre Nachname an',
                mail:'Bitte geben Sie Ihre E-Mail an',
                nachricht:'Bitte geben Sie Ihre Nachricht an'

            },
            errorPlacement: function(error, element) {
                error.appendTo( element.parent().parent());
            }

        });

    },
    initDropdowns:function(){

         $('.dropdown-silver').each(function(){

             var parentClass = $(this).data('parent');
             var parentElpos = $('.'+parentClass).offset();

             $(this).css('top',parentElpos.top + 'px');
             $(this).css('left', parentElpos.left + 'px');

         });

        $('.dropdown-silver > span').click(function(){
            $(this).parent().hide();
        });
        $('.dropdown-silver .up').click(function(){
            $(this).parent().parent().hide();
        });

        $('.withDrop').click(function(){

           $('.dropdown-silver').hide();
           $('#' + $(this).data('dropdown')).show();

           return false;
        });

        $(document).click(function (e) {
            e.stopPropagation();
            var container = $(".dropdown-silver");

            //check if the clicked area is dropDown or not
            if (container.has(e.target).length === 0) {
                $('.dropdown-silver').hide();
            }
        })

        if(viewPortSize > 320 ){
           $('#mobile-search-dropdown').hide();
        }
        if(viewPortSize > 480){
            $('#mobile-markt-dropdown').hide();
            $('#mobile-nav-dropdown').hide();

        }



    }

};

/*
 DOCUMENT READY INIT
 ============================================================================*/

$(function() {
    app.initSelectboxes();
    app.initFancybox();
    app.initKnowHowSlider();
    app.initIE7();
    app.initValidate();
    app.initDropdowns();
    app.initHomeSlider();
    app.initHomeAdvSlider();

});



/*
 WINDOW LOAD INIT
 ============================================================================*/

$(window).load(function(){


    app.initAsideSlider();
    app.initContentSlider();
    app.initContactMap();

});



/*
RESPONSIVITY RELATED DETECTION/INIT
============================================================================*/


/* responsive inits on viewport change */

if (window.addEventListener){

    window.addEventListener('resize', function(event){

        app.initDropdowns();

       if(Modernizr.mq('(min-width: 0px) and (max-width: 480px)') && viewPortSize != 320){


            console.log('320');
            viewPortSize = 320;
            app.initAsideSlider();
            app.initKnowHowSlider();
            app.initContentSlider();
            app.viewportChange();

        }else if(Modernizr.mq('(min-width: 481px) and (max-width: 768px)') && viewPortSize != 480){


            console.log('480');
            viewPortSize = 480;
            app.initAsideSlider();
            app.initKnowHowSlider();
            app.initContentSlider();
            app.viewportChange();

        }else if(Modernizr.mq('(min-width: 769px) and (max-width: 985px)') && viewPortSize != 768){


            console.log('768');
            viewPortSize = 768;
            app.initAsideSlider();
            app.initKnowHowSlider();
            app.initContentSlider();
            app.viewportChange();

        }else if(Modernizr.mq('(min-width: 986px)') && viewPortSize != 986){


            console.log('full');
            viewPortSize = 986;
            app.initAsideSlider();
            app.initKnowHowSlider();
            app.initContentSlider();
            app.viewportChange();
        }

    });

}



