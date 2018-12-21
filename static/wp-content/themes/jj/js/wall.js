
$('.wall-cont').addClass('animated fadeIn');




$(document).ready(function(){

TweenMax.to( $('#awwwards')[0], 0.4 ,{right:0,delay:0.7});

    $('.post-article').waypoint(function(direction) {

        $(this.element).addClass('animated fadeInUp');

    }, {
        offset: '90%'
    });

    $(".widget_categories a, h1").blast({
        delimiter: "character",
        tag: "span"
    })
    $(".tagcloud a,  .blog-post-title a").blast({
        delimiter: "word",
        tag: "span"
    });

    setTimeout(function(){

    var a = 0;
    $('h1 .blast').each(function(){

        var el = $(this);

        setTimeout(function(){

            el.addClass('animated fadeInLeft');




        },a);

        a = a + 150;

    });

    },800);




    $(this).addClass('animated bounceIn');


    $(".tagcloud  .blast, .widget_categories .blast, .blog-post-title .blast").mouseenter(function (){

        var el = $(this);

        $(this).addClass('animated rubberBand');
        $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){

            el.removeClass('animated rubberBand');

        });

    });


    $(window).scroll(function() {

        if($(window).scrollTop() > 100){
            $('.logo-big').fadeIn();
        }else{
            $('.logo-big').fadeOut();
        }
        clearTimeout($.data(this, 'scrollTimer'));
        $.data(this, 'scrollTimer', setTimeout(function() {

            var scrollTop = $(window).scrollTop();
            $('.logo-big').css('margin-top',scrollTop);


        }, 150));
    });

});

