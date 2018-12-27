
var page = $('body').attr('class');

$('#fp-nav .close, footer .txt').click(function(event) {
  var sectionBack = $(this).attr('data-back');

   if (window.matchMedia("(max-width: 480px)").matches) {
      $('section').fadeOut(800, function(){
        location.replace('index.html#'+sectionBack);
      });
   } else {
    $('section').animate({left:'100vw'}, 600,'swing', function(){
      location.replace('index.html#'+sectionBack);
    });
   }

});

$(window).on("load", function() {
  if (page == 'project') {
    loader(page);
    console.log(page);
  }
});

$('#fullpage').fullpage({
  'verticalCentered': false,
  'css3': false,
  'anchors':['home', 'no_drugs', 'boucheron', 'mpp', 'tatoue'],
  'navigationTooltips':['Home', 'No_drugs', 'Boucheron', 'Mpp', 'Tatoue'],
  'navigation': true,
  'navigationTooltips': [ ' ','1', '2', '3','4'],
  'showActiveTooltip': true,
  'scrollingSpeed': 1000,
  'touchSensitivity': 1,
  'loopBottom': false,
  'lockAnchors': true,
  'animateAnchor': false,
  'fixedElements': '#wave',
  onLeave: function(index, nextIndex, direction){
    setTimeout(function() {
      txtTransition = $('.letter-transition div span')

      for (var i = 0; i < txtTransition.length; i++) {
        var random = Math.floor(Math.random() * 100) + -60;
        $(txtTransition[i]).css({'transform': 'translateY('+random+'px)', opacity: 0});
      }

      $('#fader-intro').fadeIn(1200);
      $('.project-section .black-bg').fadeIn(1000);


      $('.bg-letter').removeClass('bg-center');

      $('#fp-nav a + .fp-tooltip .menu-bg').remove();
      $('#fp-nav a + .fp-tooltip').css('color','#fff');
      $('#wave').fadeTo(1200,'0.2');
      setTimeout(function() {
        if (nextIndex == 1) {
          $('#fader-intro').fadeOut(1200);
          $('.click-focus').fadeIn();
          console.log(nextIndex);
        }
        if (nextIndex !== 1) {
          $('#section'+nextIndex+'.project-section .black-bg').fadeOut(1000);
          $('.click-focus').fadeOut();
        }
        $('#section'+nextIndex+' .bg-letter').addClass('bg-center');
        $('#fp-nav a.active + .fp-tooltip').append('<div class="menu-bg"></div>');
      }, 600);

      setTimeout(function() {
        $('#section'+nextIndex+' .letter-transition div span').css({'transform': 'translateY(0)', opacity: 1});
        $('#fp-nav a.active + .fp-tooltip .menu-bg').css({'opacity':1,'width':'100%'});
        $('#wave').fadeTo(1200,'0');
      }, 1400);

      setTimeout(function() {
        $('#fp-nav a.active + .fp-tooltip').css('color','#000');
      }, 1800);
    }, 700);

  },
  afterLoad: function(anchorLink, index) {
    loadedSection = $(this);
    // $('#ubermenu-top-nav-788').attr('aria-label', 'main navigation');

    loader(page);

    $('.click-focus').click(function(event) {
      $.fn.fullpage.moveTo(2);
    });


    $('#focus, .project-section .btn, .canvas-hover-zone').click(function(event) {
      setTimeout(function() {
        $('.project-section .black-bg').fadeIn(1000);
        $('#section'+index+' .bg-letter').removeClass('bg-center');
        $('#focus, #wave').fadeOut();
        $('.btn').css('opacity',0);
        $('#section'+index+' .number, #section2 .btn').css({
          opacity: 0
        });
        $('#fp-nav > *').animate({opacity:0}, 400);
        txtTransition = $('#section'+index+' .letter-transition div span');

        for (var i = 0; i < txtTransition.length; i++) {
          var random = Math.floor(Math.random() * 100) + -60;
          $(txtTransition[i]).css({'transform': 'translateY('+random+'px)', opacity: 0});
        }

        setTimeout(function() {
          location.href = anchorLink+'.html';
        }, 2000);

      }, 600);
    });
  }
});


//-------------ABOUT---------------------

$('#about-contact').click(function(event) {
  $('nav, #fp-nav ul').fadeOut();
  $.fn.fullpage.setAllowScrolling(false);

  $('.about-contact').fadeIn(400,function(){
    setTimeout(function() {
      $('.about-contact .wrapper').css({left: 0});
    }, 200);


    setTimeout(function() {
      $('.cross.cross-close').css('transform','rotate(45deg)');
      $('.about-contact .letter-transition div span, .linkedin, .about-contact p').css({'transform': 'translateY(0)', opacity: 1});

      if (window.matchMedia("(max-width: 480px)").matches) {
        $('.cross.cross-close').css('transform','rotate(45deg) scale(0.7)');
      }
      setTimeout(function() {
        $('.cross.cross-close div').css('opacity','1');
      }, 400);
    }, 1000);
  });

});


$('.cross-close').click(function(event) {
  $('nav, #fp-nav ul').fadeIn();
  $.fn.fullpage.setAllowScrolling(true);
  $('.cross.cross-close div').css('opacity','0');
  setTimeout(function() {
    $('.cross.cross-close').css('transform','rotate(0)');
  }, 400);


  $('#focus').css({
    opacity: '0'
  });

  setTimeout(function() {
    $('#focus').css({
      transform: 'scale(1) rotate(0deg)',
      left: 'calc(50vw - 500px)'
    });
  }, 600);

  $('.contact > *, .about > *').css({transform: 'transform: scale(2) rotateX(45deg)',opacity:0});

  setTimeout(function() {

    txtTransition2 = $('.about-contact .letter-transition div span');
    txtTransition2.css({opacity:0})
    for (var i = 0; i < txtTransition.length; i++) {
      var random = Math.floor(Math.random() * 100) + -60;
      $(txtTransition2[i]).css({'transform': 'translateY('+random+'px)'});
    }
    $('.about-contact p, .linkedin').css({transform: 'translateY(-40px)',opacity:0})
  }, 1000);

  setTimeout(function() {

    $('#fp-nav, #fullpage').fadeIn();
    $('.about-contact .wrapper').css('left','-50%')
    $('#focus').css({
      transform: 'scale(1) rotate(0deg)'
    });
    $('#focus').css({
      opacity: 1
    });

    if (window.matchMedia("(min-width: 480px) and (max-width: 1180px)").matches) {
      $('#focus').css({
        transform: 'scale(0.7) rotate(0deg)'
      });
    }
    if (window.matchMedia("(max-width: 480px)").matches) {
      $('#focus').fadeIn().css({
        transform: 'scale(0.4) rotate(90deg)'
      });
    }

  }, 2000);
  setTimeout(function() {
    $('.about-contact').fadeOut(800);
  }, 2600);
});




//------------------FONCTIONS--------------------------

  function randomColors(texte) {
    var colors = ['#ffb3c7', '#f4f4a6', '#c8ffc5', '#a9f9ff', '#fbc5ff'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    $(texte).css({color: randomColor});
  }

  function titleSpanizer(){
     (function($) {
        var s,
        spanizeLetters = {
          settings: {
            letters: $('.letter-transition div'),
          },
          init: function() {
            s = this.settings;
            this.bindEvents();
          },
          bindEvents: function(){
            s.letters.html(function (i, el) {
              var spanizer = $.trim(el).split("");
              return '<span>' + spanizer.join('</span><span>') + '</span>';
            });
          },
        };
        spanizeLetters.init();
      })(jQuery);
  }


function loader(page) {

    $('.'+page+' #loading span:first-child').css({'transform': 'translateY(-100px)'});
    setTimeout(function() {
      $('.'+page+' #loading span:first-child').css({transition:'all 1.2s ease', 'transform': 'translateY(200px)',opacity:0});
    }, 1000);

    $('.'+page+' #loading span:last-child').css({'transform': 'translateY(100px)'});
    setTimeout(function() {
      $('.'+page+' #loading span:last-child').css({transition:'all 1.2s ease', 'transform': 'translateY(-200px)',opacity:0});
    }, 1000);

    setTimeout(function() {
      $('.'+page+' #loading .cross').css({
        opacity: 0
      });
    }, 1400);

    setTimeout(function() {
      $('.'+page+' #loading').fadeOut();

        setTimeout(function() {
          $('#fader-intro').fadeOut(1200);
          $('#section1 .bg-letter').addClass('bg-center');
        },400);

        setTimeout(function() {
          $('h1.letter-transition div span').css({'transform': 'translateY(0)', opacity: 1});
        }, 600);

    }, 2400);
}
