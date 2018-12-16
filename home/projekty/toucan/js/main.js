var app = {};


//some various UI interactions
app.ui = {


    init:function(){

      this.lineNavTopics();
      this.supportTab();
      this.ProgressBars();
      this.mediaPopups();
      this.downloadButtons();

    },
    ProgressBars:function(){


        var b = 0;

        var options = {
            useEasing : true,
            useGrouping : true,
            separator : ',',
            decimal : '.',
            prefix : '',
            suffix : '%'
        };

        $('.precent-bar').each(function(){


           var el  = $(this);

           var precent = parseFloat(el.find('.label span').text());

            setTimeout(function(){
                el.find('.bar div').css('width',precent + '%');


                var lab = el.find('.label span');
                var numAnim = new CountUp(lab[0], 0, precent, 0, 4,options);
                numAnim.start();

            },b*500);

            ++b;





        });



    },
    lineNavTopics:function(){


        $('.line-nav-topics a').click(function(){

            $(this).parent().parent().toggleClass('opened-topics');
            $(this).toggleClass('active');

            return false;


        });


    },
    supportTab:function(){

        $('.support-shortcut_link').click(function(){

            $('.support-shortcut').toggleClass('windowed');

            return false;
        });


    },
    mediaPopups:function(){


        //video links init - popup

        $('body').on('click','.popup-link',function(){

            var b =  $(this).attr('href');

            $.magnificPopup.open({
                items: {
                    src: b
                },
                type: 'iframe'
            });

            return false;

        });


        //image links init - popup
        $('body').on('click','.image-link',function(){

            var b =  $(this).attr('href');

            $.magnificPopup.open({
                items: {
                    src: b
                },
                type: 'image'
            });

            return false;

        });

    },
    downloadButtons:function(){

        $('.btn-download').click(function(){

            var btn = $(this);
            var file = $(this).attr('href');


            $.ajax({
                xhr: function()
                {
                    var xhr = new window.XMLHttpRequest();

                    //Download progress
                    xhr.addEventListener("progress", function(evt){
                        if (evt.lengthComputable) {

                            btn.addClass('downloading');

                            var percentComplete = evt.loaded / evt.total;

                            percentComplete = parseInt(percentComplete * 100);

                            btn.css('background-position', (percentComplete/2) +'px ' + ' 0')



                        }
                    }, false);
                    return xhr;
                },
                type: 'POST',
                url: file,
                data: {},
                success: function(data){

                    btn.addClass('downloaded');

                }
            });

        });


    }

}


app.header ={

    init:function(){

        //sticky nav function init
        this.fixedInit();

        this.friendsMenuScroll();


        //=================== top menu button
        $('#header-menu-link').click(function(){

            if($('body').hasClass('expanded-header-menu')){

                $('body').removeClass('expanded-header-menu');

            }else {

                $('body').addClass('expanded-header-menu');
                $('body').removeClass('expanded-profile-menu');

            }

            return false
        });


        //=== mesagess count icon
        setTimeout(function(){

            $('.nav_notify span').addClass('animated bounceIn');

        },1500);

        $('.members-link,.expanded-members-head').click(function(){

            if($('body').hasClass('expanded-members-menu')){

                $('body').removeClass('expanded-members-menu');

            }else {

                $('body').addClass('expanded-members-menu');


            }

            return false

        });

        //  RWD HEADER BEHAVIOR

        enquire.register("(max-width: 800px)", {


            match: function () {


                //MOBILE PROFILE MENU INIT

                $('.main-header_nav').on('click', '.nav_profile', function () {


                    if ($('body').hasClass('expanded-profile-menu')) {

                        $('body').removeClass('expanded-profile-menu');

                    } else {

                        $('body').addClass('expanded-profile-menu');
                        $('body').removeClass('expanded-header-menu');
                        $('body').removeClass('expanded-members-menu');

                    }


                    return false;
                });


            },
            unmatch: function () {

                //PROFILE MENU DEACTIVATE

                $('.main-header_nav').off('click');
                $('body').removeClass('expanded-profile-menu');

            }

        });

    },
    fixedInit:function(){

        var stickyNavTop = $('#main-header').offset().top;

        var scrollTop = $(window).scrollTop();

        if (scrollTop > 0) {
            $('body').addClass('sticky-nav');
        } else {
            $('body').removeClass('sticky-nav');
        }

        $(window).scroll(function(){

            var scrollTop = $(window).scrollTop();

            if (scrollTop > 0) {
                $('body').addClass('sticky-nav');
            } else {
                $('body').removeClass('sticky-nav');
            }

        });


    },
    friendsMenuScroll:function(){

        if($('#expanded-members-cont').size() > 0) {

            new Miniscroll("#expanded-members-cont ", {
                axis: "y",
                size: 13,
                sizethumb: "200",
                onScroll: function (percent, offset) {
                },
                thumbColor: "#a5e1f5",
                trackerColor: "#6accef"
            });

            $('.expanded-members').height($(window).height() - 120);
            $('#expanded-members-cont').height($(window).height() - 175);

            $(window).resize(function () {

                $('.expanded-members').height($(window).height() - 120);
                $('#expanded-members-cont').height($(window).height() - 175);

            });

        }
    }



}


app.ideas = {

    similarIdeasGrid:null,
    slider:null,
    init:function(){


        this.ideasListGrid();

        if($('.ideas-top-slider').size() > 0){

            this.ideasSliderTop();
        }

        this.singleIdeaSlider();
        this.singleIdeaNav();

    },
    ideasSliderTop:function(){


            //slider init and RWD behavior

            enquire.register("(min-width: 701px)", {


                match : function() {

                    //TOP IDEAS SLIDER BACK TO DESKTOP
                    if(app.ideas.slider){
                        app.ideas.slider.destroySlider();
                    }

                    $('.ideas-top-slider .bxslider.mobile').html('');
                    app.ideas.slider = $('.ideas-top-slider .bxslider.desktop').bxSlider({

                        slideMargin:10,
                        auto:true,
                        pause:6000,
                        speed:600,
                        easing:'ease-in-out'



                    });


                }

            });


            enquire.register("(max-width: 700px)", {


                match : function() {


                    //TOP IDEAS SLIDER MOBILE CHANGE
                    if(app.ideas.slider){
                        app.ideas.slider.destroySlider();
                    }

                    var slides = $('.ideas-top-slider figure').clone();

                    slides.each(function(){

                        var elem = $(this);

                        $('.ideas-top-slider .bxslider.mobile').append(elem);

                    });

                    $('.ideas-top-slider .bxslider.mobile figure').removeClass('idea-item--large');

                    app.ideas.slider = $('.ideas-top-slider .bxslider.mobile').bxSlider({

                        slideMargin:10,
                        auto:true,
                        pause:6000,
                        speed:600,
                        minSlides:2,
                        maxSlides:2,
                        moveSlides:1,
                        slideWidth:280,
                        easing:'ease-in-out'

                    });


                }

            });


            enquire.register("(max-width: 470px)", {


                match : function() {



                        app.ideas.slider.reloadSlider({
                            slideMargin:10,
                            auto:true,
                            pause:6000,
                            speed:600,
                            minSlides:1,
                            maxSlides:1,
                            moveSlides:1,
                            easing:'ease-in-out'
                        });



                },

                unmatch : function() {

                    if($('.ideas-top-slider .bxslider.mobile').css('display') == 'block'){

                        app.ideas.slider.reloadSlider({
                            slideMargin:10,
                            auto:true,
                            pause:6000,
                            speed:600,
                            minSlides:2,
                            maxSlides:2,
                            moveSlides:1,
                            slideWidth:280,
                            easing:'ease-in-out'

                        });

                    }


                }

            });


    },
    ideasListGrid:function(){


        //navigation recent ideas/most popular click
        $('#ideas-list-nav > a').not('.line-nav-topics').click(function(){

            $(this).parent().find('> a').removeClass('active');
            $(this).addClass('active');

            //if clicked clean topics select
            $('#ideas-list-nav .line-nav-topics').removeClass('choose');

            $('.line-nav-topics__cont').hide();

            var path = $(this).attr('href');

            //dummy ajax
            $.post( path, function( data ) {

                $ideasListGrid.isotope( 'remove', $('#ideas-grid .grid-item'));

                setTimeout(function(){
                    var elems = $(data).filter('.grid-item');
                    $ideasListGrid.isotope( 'insert', elems );



                },400);

            });

            return false;

        });

        //navigation sort click
        $('#ideas-list-nav .line-nav-sort > a').click(function(){

            $(this).parent().find('> a').removeClass('active');
            $(this).addClass('active');

            var path = $(this).attr('href');

            //dummy ajax
            $.post( path, function( data ) {

                $ideasListGrid.isotope( 'remove', $('#ideas-grid .grid-item'));

                setTimeout(function(){
                    var elems = $(data).filter('.grid-item');
                    $ideasListGrid.isotope( 'insert', elems );


                },400);


            });

            return false;

        });


        //navigation topics select logic
        $('#ideas-list-nav .line-nav-topics').click(function(){

            $(this).toggleClass('active');

            var position = $(this).position();
            $('#ideas-list-topics').css('margin-left',position.left);

            if($(this).hasClass('choose')){

                $(this).removeClass('choose');
                $('#ideas-list-nav a:first-child').click();

            }else {
                $('#ideas-list-topics').toggle();
            }


            return false;

        });

        //single topic click
        $('#ideas-list-topics a').click(function(){

            var topicText =  $(this).text();

            $('#ideas-list-nav .line-nav-topics').addClass('choose');

            $('#ideas-list-nav .line-nav-topics .choosen span').text(topicText);

            $('#ideas-list-topics').hide();

            $('#ideas-list-nav > a').not('.line-nav-topics').removeClass('active');


            //if topic clicked do something

           //dummy ajax
            var path = $(this).attr('href');
            $.post( path, function( data ) {

                $ideasListGrid.isotope( 'remove', $('#ideas-grid .grid-item'));

                setTimeout(function(){
                    var elems = $(data).filter('.grid-item');
                    $ideasListGrid.isotope( 'insert', elems );



                },400);


            });



            return false;

        });


        //grid

        var $ideasListGrid = $('#ideas-grid').isotope({
            // options
            itemSelector: '.grid-item',
            layoutMode: 'masonry',
            percentPosition: true,
            hiddenStyle: {
                opacity: 0,
                transform: 'scale(0.1)'
            },
            visibleStyle: {
                opacity: 1,
                transform: 'scale(1)'
            },
            transitionDuration: '0.4s'
        });



        //dummy ajax LOAD MORE example

        $('#ideas-grid-load-more').click(function(){

            var path = $(this).attr('href');

            $.post( path, function( data ) {


                    var elems = $(data).filter('.grid-item');
                    $ideasListGrid.append(elems).isotope( 'appended', elems );


            });


            return false;
        });



    },
    singleIdeaNav:function(){


        //navigation

        $('#single-idea-nav a').click(function(){

            $(this).parent().find('> a').removeClass('active');
            $(this).addClass('active');

            var tabop =  $(this).attr('href');

            if(history.pushState) {
                history.pushState(null, null, tabop);
            } else {
                location.hash = tabop;
            }

            $('.tab-content.active').removeClass('active');
            $(''+ tabop +'').addClass('active');


            return false;


        });


        if(window.location.hash){
            $('#single-idea-nav a').each(function(){

                if($(this).attr('href')== window.location.hash){

                    $(this).click();
                }

            });

        }




        //grid
        this.similarIdeasGrid = $('#similar-ideas').isotope({
            // options
            itemSelector: '.grid-item',
            layoutMode: 'masonry',
            percentPosition: true,
            hiddenStyle: {
                opacity: 0,
                transform: 'scale(0.1)'
            },
            visibleStyle: {
                opacity: 1,
                transform: 'scale(1)'
            },
            transitionDuration: '0.4s'
        });



    },
    singleIdeaSlider:function(){


        $('.single-idea_media .slides').bxSlider({
            slideMargin:10,
            auto:true,
            pause:6000,
            speed:600,
            easing:'ease-in-out'

        });
    }

}
app.members = {

    init:function(){

          if($('.member-itemm, .member-item--simple').size() > 0) {
              $('.member-item, .member-item--simple').matchHeight();
              $('.member-info').matchHeight();
          }
    }


}

app.stream = {

    init:function(){


        if($('#tweets').size() > 0){
        this.initTweets();
        }

        this.initStreamNav();


    },
    initTweets:function(){


        /**
         * ### HOW TO CREATE A VALID ID TO USE: ###
         * Go to www.twitter.com and sign in as normal, go to your settings page.
         * Go to "Widgets" on the left hand side.
         * Create a new widget for what you need eg "user time line" or "search" etc.
         * Feel free to check "exclude replies" if you don't want replies in results.
         * Now go back to settings page, and then go back to widgets page and
         * you should see the widget you just created. Click edit.
         * Look at the URL in your web browser, you will see a long number like this:
         * 345735908357048478
         * Use this as your ID below instead!
         */

        var config3 = {
            "id": '659340836635852800',
            "domId": 'tweets',
            "maxTweets": 12,
            "enableLinks": true,
            "showImages": true,
            printTime:true,
            showInteractionLinks:false,
            permalinks:false
        };
        twitterFetcher.fetch(config3);

        setTimeout(function(){

            new Miniscroll("#tweets ", {
                axis: "y",
                size: 13,
                sizethumb: "200",
                onScroll: function(percent, offset) {},
                thumbColor: "#a5e1f5",
                trackerColor: "#fff"
            });


        },1000);

    },
    initStreamNav:function(){


        //tabs navigation - not topics

        $('#stream-nav  a').not('.line-nav-topics').click(function(){

            $(this).parent().find('> a').removeClass('active');
            $(this).addClass('active');

            //if clicked clean topics - select
            $('#stream-nav .line-nav-topics').removeClass('choose');
            $('#stream-list-topics').hide();

            var tabop =  $(this).attr('href');

            if(history.pushState) {
                history.pushState(null, null, tabop);
            } else {
                location.hash = tabop;
            }

            $('.tab-content.active').removeClass('active');
            $(''+ tabop +'').addClass('active');


            return false;


        });


        if(window.location.hash){
            $('#stream-nav a').each(function(){

                if($(this).attr('href')== window.location.hash){

                    $(this).click();
                }

            });

        }



        //stream navigation topics
        $('#stream-nav .line-nav-topics').click(function(){

            $(this).toggleClass('active');

            var position = $(this).position();
            $('#stream-list-topics').css('margin-left',position.left);

            if($(this).hasClass('choose')){

                $(this).removeClass('choose');
                $('#stream-nav a:first-child').click();

            }else {
                $('#stream-list-topics').toggle();
            }





            return false;

        });

        //single topic click
        $('#stream-list-topics a').click(function(){

            var topicText =  $(this).text();

            $('#stream-nav .line-nav-topics').addClass('choose');

            $('#stream-nav .line-nav-topics .choosen span').text(topicText);

            $('#stream-list-topics').hide();

            $('#stream-nav  > a').not('.line-nav-topics').removeClass('active');


            //if stream topic clicked do something=========

            //dummy tab OPEN
            var tabop =  $(this).attr('href');

            $('.tab-content.active').removeClass('active');
            $(''+ tabop +'').addClass('active');





            return false;

        });


    }


}

app.search = {

    init:function(){


       //search grid init
       $('#search-ideas').isotope({
            // options
            itemSelector: '.grid-item',
            layoutMode: 'masonry',
            percentPosition: true,
            hiddenStyle: {
                opacity: 0,
                transform: 'scale(0.1)'
            },
            visibleStyle: {
                opacity: 1,
                transform: 'scale(1)'
            },
            transitionDuration: '0.4s'
        });

        this.initSearchNav();

    },
    initSearchNav:function(){

        //tabs navigation - not topics

        $('#search-nav  a').not('.line-nav-topics').click(function(){

            $(this).parent().find('> a').removeClass('active');
            $(this).addClass('active');

            var tabop =  $(this).attr('href');

            if(history.pushState) {
                history.pushState(null, null, tabop);
            } else {
                location.hash = tabop;
            }

            $('.tab-content.active').removeClass('active');
            $(''+ tabop +'').addClass('active');


            return false;


        });


        if(window.location.hash){
            $('#search-nav a').each(function(){

                if($(this).attr('href')== window.location.hash){

                    $(this).click();
                }

            });

        }

    }

}


$(document).ready(function() {

    //global dynamic UI effects, buttons, lnks etc
    app.ui.init();

    //header functions
    app.header.init();

    //ideas section
    app.ideas.init();

    //stream section
    app.stream.init();

    //members section
    app.members.init();

    //search results section
    app.search.init();





    //ellipsis
    $(".idea-item .idea-title").dotdotdot({
        ellipsis: '... '
    });



});

