
$(document).ready(function(){


    /* indrigents hover */
    $('#page').on('mouseenter','.link',function(e){
        if($(e.target).is('span')){

            e.stopPropagation();
        } else {
        $(this).find('span,img').fadeIn(0);
        }

    });
    $('#page').on('mouseleave','.link',function(e){


          $(this).find('span,img').fadeOut(0);

    });
    $('#page').on('click','.link',function(){

       return false;
    });

    /* icons hover */

    $('#page').on('mouseenter','.icons-belt a',function(e){

        $('.' + $(this).attr('href')).trigger(e.type);

    });
    $('#page').on('mouseleave','.icons-belt a',function(e){

        $('.' + $(this).attr('href')).trigger(e.type);

    });
    $('#page').on('click','.icons-belt a',function(e){

        return false;

    });

     /* scroll*/

     a=1;
     anim = false;

    $('#page').mousewheel(function(event, delta, deltaX, deltaY) {

           if($('#page').find('.set').size() && !$('#page').hasClass('result-set')){

                   if(delta == 1){

                       if(!anim){
                         anim = true;

                         $('.set.step2').removeClass('step2').addClass('step3');
                         $('.set.step4').removeClass('step4').addClass('step3');


                          var zestawLosowy = generujTabliceZestawu(rand (1,7080));
                          generujTemplatkeZestawu(zestawLosowy);
                          $('.set:first-child').addClass('step2');

                           if(Modernizr.cssanimations){

                               setTimeout(function(){

                                   $('.set.step3').remove();
                                   anim = false;;
                               },800);

                           } else {

                               $('.set.step3').remove();
                               anim = false;;

                           }


                       }


                   }else if(delta == -1){

                       if(!anim){

                           anim = true;

                           $('.set.step2').removeClass('step2').addClass('step5');
                           $('.set.step4').removeClass('step4').addClass('step5');

                           var zestawLosowy = generujTabliceZestawu(rand (1,7080));
                           generujTemplatkeZestawu(zestawLosowy);
                           $('.set:first-child').addClass('step4');



                           if(Modernizr.cssanimations){

                               setTimeout(function(){

                                   $('.set.step5').remove();
                                   anim = false;;
                               },400);

                           } else {

                               $('.set.step5').remove();
                               anim = false;;

                           }

                        }
                   }

           }
            return false;

       });


        $("body").keydown(function(e) {

            if($('#page').find('.set').size()){
                if(e.keyCode == 37) { // left

                    if(!anim){
                        anim = true;

                        $('.set.step2').removeClass('step2').addClass('step3');
                        $('.set.step4').removeClass('step4').addClass('step3');


                        var zestawLosowy = generujTabliceZestawu(rand (1,7080));
                        generujTemplatkeZestawu(zestawLosowy);
                        $('.set:first-child').addClass('step2');


                        setTimeout(function(){

                            $('.set.step3').remove();
                            anim = false;;
                        },800);

                    }


                }
                else if(e.keyCode == 39 ) { // right

                    if(!anim){

                        anim = true;

                        $('.set.step2').removeClass('step2').addClass('step5');
                        $('.set.step4').removeClass('step4').addClass('step5');

                        var zestawLosowy = generujTabliceZestawu(rand (1,7080));
                        generujTemplatkeZestawu(zestawLosowy);
                        $('.set:first-child').addClass('step4');

                        setTimeout(function(){

                            $('.set.step5').remove();
                            anim = false;;
                        },400);
                    }


                }

            }
         });

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

         $('#page').swipe( {
                //Generic swipe handler for all directions
                swipe:function(event, direction, distance, duration, fingerCount) {

                    if(direction == 'up'){


                        if(!anim){

                            anim = true;

                            $('.set.step2').removeClass('step2').addClass('step5');
                            $('.set.step4').removeClass('step4').addClass('step5');

                            var zestawLosowy = generujTabliceZestawu(rand (1,7080));
                            generujTemplatkeZestawu(zestawLosowy);
                            $('.set:first-child').addClass('step4');

                            setTimeout(function(){

                                $('.set.step5').remove();
                                anim = false;;
                            },400);
                        }

                    }else if(direction == 'down'){

                        if(!anim){
                            anim = true;

                            $('.set.step2').removeClass('step2').addClass('step3');
                            $('.set.step4').removeClass('step4').addClass('step3');


                            var zestawLosowy = generujTabliceZestawu(rand (1,7080));
                            generujTemplatkeZestawu(zestawLosowy);
                            $('.set:first-child').addClass('step2');


                            setTimeout(function(){

                                $('.set.step3').remove();
                                anim = false;;
                            },800);

                        }


                    }
                },
                //Default is 75px, set to 0 for demo so any distance triggers swipe
                threshold:0
            });

    }

    //page centering

   /* if($(window).height() > 780){

        $('#page').css('top',($(window).height()-695)/2 + 'px');

    }

    $(window).resize(function(){

        if($(window).height() > 780){

            $('#page').css('top',($(window).height()-695)/2 + 'px');


        }else {

            $('#page').css('top','75px');
        }


    });   */

});






/*
* HELPERY
* ====================================================================
* */


function arrays_equal(a,b) { return !(a<b || b<a); }


Array.prototype.removeDuplicates = function (g){

    var temp=new Array();

    for(i=0;i<this.length;i++){

        this[i].sort();
    }
    this.sort();


    for(i=0;i<this.length;i++){

        b=0;

        for(a=0; a < g;++a){

            if((this[i+1] != undefined) && (this[i][a] == this[i+1][a])) {



                ++b;

            }

        } ;


        if(b!=g){
            temp[temp.length]=this[i];
        }
    }


    return temp;

}

function rand (min, max) {
    var argc = arguments.length;
    if (argc === 0) {
        min = 0;
        max = 2147483647;    } else if (argc === 1) {
        throw new Error('Funkcja wymaga podania obu argumentów min i max');
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


/*
 *  GENROWANIE ZESTAWOW
 * */

function wariantyKurczakowDuzy(){

    var kurczaki = ['wings','filets','nuggets'];

    var kurczakiWynik = [];
    var kurczakiWyniki = [];

    for(i=0;i<kurczaki.length;++i){

        for(j=0;j<kurczaki.length;++j){

            for(k=0;k<kurczaki.length;++k){

                for(l=0;l<kurczaki.length;++l){

                    for(m=0;m<kurczaki.length;++m){

                        kurczakiWynik = [];
                        kurczakiWynik.push(kurczaki[i],kurczaki[j],kurczaki[k],kurczaki[l],kurczaki[m]);
                        kurczakiWyniki.push(kurczakiWynik);

                    }
                }

            }


        }

    }

    var kurczakiUnique = kurczakiWyniki.removeDuplicates(5);
    return kurczakiUnique;
}

function wariantyKurczakowMaly(){

    var kurczaki = ['wings','filets','nuggets'];

    var kurczakiWynik = [];
    var kurczakiWyniki = [];

    for(i=0;i<kurczaki.length;++i){

        for(j=0;j<kurczaki.length;++j){

            for(k=0;k<kurczaki.length;++k){


                kurczakiWynik = [];
                kurczakiWynik.push(kurczaki[i],kurczaki[j],kurczaki[k]);
                kurczakiWyniki.push(kurczakiWynik);

            }


        }

    }

    var kurczakiUnique = kurczakiWyniki.removeDuplicates(3);
    return kurczakiUnique;
}


function wariantySosowMaly(){

    var sosy = ['mustard','chili','barbecue','cheese','sweetsour'];

    var sosyWinik = [];
    var sosyWiniki = [];

    for(d=0;d<sosy.length;++d){

        for(e=0;e<sosy.length;++e){

            sosyWinik =[];
            sosyWinik.push(sosy[d],sosy[e]);
            sosyWiniki.push(sosyWinik);


        }

    }

    var sosyUnique = sosyWiniki.removeDuplicates(2);
    return sosyUnique;

}
function wariantySosowDuzy(){

    var sosy = ['mustard','chili','barbecue','cheese','sweetsour'];

    var sosyWinik = [];
    var sosyWiniki = [];

    for(n=0;n<sosy.length;++n){

        for(o=0;o<sosy.length;++o){

            for(p=0;p<sosy.length;++p){

                sosyWinik =[];
                sosyWinik.push(sosy[n],sosy[o],sosy[p]);
                sosyWiniki.push(sosyWinik);

            }

        }

    }

    var sosyUnique = sosyWiniki.removeDuplicates(3);
    return sosyUnique;

}

function wariantyDodatkow(){

    var salad = [0,'salad'];
    var frites = [0,'frites'];
    var drink = [0,'drink'];


    var dodatekWinik = [];
    var dodatekWiniki = [];

    for(f=0;f<salad.length;++f){

        for(g=0;g<frites.length;++g){

            for(h=0;h<drink.length;++h){


                dodatekWiniki.push([salad[f],frites[g],drink[h]]);
            }
        }
    }

    return dodatekWiniki;
}

var kurczakiDuzy = wariantyKurczakowDuzy();
var kurczakiMaly = wariantyKurczakowMaly();
var sosyMaly = wariantySosowMaly();
var sosyDuzy = wariantySosowDuzy();
var dodatki = wariantyDodatkow();

/*
console.log(kurczakiDuzy.length);
console.log(kurczakiMaly.length);
console.log(sosyMaly.length);
console.log(sosyDuzy.length);
console.log(dodatki.length);  */






/*
 generator kombinacji oraz templatki
 =============================================================
*/

function setFBlink(n,typ){

    var i = window.location.toString().lastIndexOf("/");

    var link = 'http://www.facebook.com/sharer/sharer.php?s=100&p[url]=' +window.location.toString().substring(0, i) +'/set.php?p='+ n;

    link += '&p[images][0]=' + window.location.toString().substring(0, i) +'/img/box-'+typ+'.png';

    link +='&p[title]=Sposób '+ n +'&p[summary]=' ;

    $('.share a').attr('href',link);



}

function generujTabliceZestawu(num){


    if(isNaN(num) || num == 0 || num > 7080 ){

        num = rand (1,7080);

    }

    var setNumber =0 ;

      //generowanie wariantow malego chickenboxa
      for(a=0;a<kurczakiMaly.length;++a){

          for(b=0;b<sosyMaly.length;++b){

              for(c=0;c<dodatki.length;++c){


                    ++setNumber;
                    if(setNumber == num){

                        return [num,'maly',kurczakiMaly[a],sosyMaly[b],dodatki[c]];

                    }


              }

          }

      }
    //1200

    //generowanie wariantow duzego chickenboxa
    for(d=0;d<kurczakiDuzy.length;++d){

        for(e=0;e<sosyDuzy.length;++e){

            for(f=0;f<dodatki.length;++f){


                ++setNumber;
                if(setNumber == num){

                     return [num,'duzy',kurczakiDuzy[d],sosyDuzy[e],dodatki[f]];
                }

            }

        }

    }

    //7080
}

function generujTabliceZestawuzTablicy(searcharr,type){

    var setNumber =0 ;

    //generowanie wariantow malego chickenboxa
    for(a=0;a<kurczakiMaly.length;++a){

        for(b=0;b<sosyMaly.length;++b){

            for(c=0;c<dodatki.length;++c){


                ++setNumber;

                if(type == 'maly'){

                   if(arrays_equal(searcharr[1],kurczakiMaly[a]) && arrays_equal(searcharr[2],sosyMaly[b]) && arrays_equal(searcharr[3],dodatki[c]) ){

                       return [setNumber,'maly',kurczakiMaly[a],sosyMaly[b],dodatki[c]];
                   }


                }


            }

        }

    }


    //generowanie wariantow duzego chickenboxa
    for(d=0;d<kurczakiDuzy.length;++d){

        for(e=0;e<sosyDuzy.length;++e){

            for(f=0;f<dodatki.length;++f){


                ++setNumber;
                if(type == 'duzy'){

                    if(arrays_equal(searcharr[1],kurczakiDuzy[d]) && arrays_equal(searcharr[2],sosyDuzy[e]) && arrays_equal(searcharr[3],dodatki[f]) ){

                        return [setNumber,'duzy',kurczakiDuzy[d],sosyDuzy[e],dodatki[f]];
                    }

                }

            }

        }

    }


}


//7080
//1200

var msgfilets = '<span>Chicken<br/> Fillets 3 szt.<span></span><img src="img/layout/dot.png" /></span>';
var msgwings = '<span>Chicken<br/> Wings 4 szt.<span></span><img src="img/layout/dot.png" /></span>';
var msgnuggets = '<span>Kurczak<br/> McNuggets® 6 szt.<span></span><img src="img/layout/dot.png" /></span>';

var msgmustard = '<span>Sos<br/> musztardowy<span></span><img src="img/layout/dot.png" /></span>';
var msgchili = '<span>Sos<br/> chili-lemon<span></span><img src="img/layout/dot.png" /></span>';
var msgbarbecue = '<span>Sos<br/> barbecue<span></span><img src="img/layout/dot.png" /></span>';
var msgcheese = '<span>Sos<br/> Blue Cheese <span></span><img src="img/layout/dot.png" /></span>';
var msgsweetsour = '<span>Sos<br/> sweet-sour <span></span><img src="img/layout/dot.png" /></span>';


var msgfrites = '<span>Małe frytki<span></span><img src="img/layout/dot.png" /></span>';
var msgsalad = '<span>Mała sałatka<span></span><img src="img/layout/dot.png" /></span>';
var msgdrink = '<span>Mały napój<span></span><img src="img/layout/dot.png" /></span>';


/*
* generuje html na podstawie wynkow z tablicy
* --------------------------------
* */


function generujTemplatkeZestawu(z,n){

    //tablica iteracji
    var iterationBoard = '<div class="iteration-number"> <b>SPOSÓB</b> <span>#'+ z[0] +'</span></div>';

    var text = '';

    if(n != undefined &&  n==1){

        var text = n +' osoby';

    }else if(n != undefined &&  (n > 1 || n == 0)) {

        var text = n +' osób';

    }

    var iterationBoardBig = '<div class="your-set"><em>TWÓJ ZESTAW TO</em><div class="iteration-number big"> <b>SPOSÓB</b> <span>#'+ z[0] +'</span></div><span>Podobnie do ' + text + ' </span></div>';

    //pudelko

    if(z[1]=='maly'){

        var chickenBoxImage = '<img class="box" src="img/box-maly.png" alt="" />';

    }else if(z[1]=='duzy'){

        var chickenBoxImage = '<img class="box" src="img/box-duzy.png" alt="" />';

    }

    //kurczaki

    var kurczaki = z[2];
    var kurczakiHtml='';

    for(a=0; a < kurczaki.length; ++a){

        kurczakiHtml += '<img class="chicken'+ (a+1) +'" src="img/'+ z[2][a] +'.png" alt="'+ z[2][a] +'" />';


        if(z[2][a] == 'filets'){

          kurczakiHtml +='<a class="chicken'+ (a+1) +'-link link" href="#">' + msgfilets +'</a>';

        }else if(z[2][a] == 'wings'){

            kurczakiHtml +='<a class="chicken'+ (a+1) +'-link link" href="#">' + msgwings +'</a>';

        }else if(z[2][a] == 'nuggets'){

            kurczakiHtml +='<a class="chicken'+ (a+1) +'-link link" href="#">' + msgnuggets +'</a>';

        }


    }

    //sosy
    var sosy = z[3];
    var sosyHtml='';

    for(a=0; a < sosy.length; ++a){

        sosyHtml += '<img class="sauce'+ (a+1) +'" src="img/'+ z[3][a] +'.png" alt="'+ z[3][a] +'" />';


        if(z[3][a] == 'chili'){

            sosyHtml +='<a class="sauce'+ (a+1) +'-link link" href="#">' + msgchili +'</a>';

        }else if(z[3][a] == 'barbecue'){

            sosyHtml +='<a class="sauce'+ (a+1) +'-link link" href="#">' + msgbarbecue +'</a>';

        }else if(z[3][a] == 'mustard'){

            sosyHtml +='<a class="sauce'+ (a+1) +'-link link" href="#">' + msgmustard +'</a>';

        }else if(z[3][a] == 'cheese'){

            sosyHtml +='<a class="sauce'+ (a+1) +'-link link" href="#">' + msgcheese +'</a>';

        }else if(z[3][a] == 'sweetsour'){

            sosyHtml +='<a class="sauce'+ (a+1) +'-link link" href="#">' + msgsweetsour +'</a>';

        }


    }


    //dodatki
    var dodatki = z[4];
    var dodatkiHtml='';

    for(a=0; a < dodatki.length; ++a){

        if(z[4][a] !=  0){

            dodatkiHtml += '<img class="'+ z[4][a] +'" src="img/'+ z[4][a] +'.png" />';

            if(z[4][a] == 'drink'){

                dodatkiHtml +=' <a class="'+ z[4][a] +'-link link" href="">'+ msgdrink+'</a>';

            }else if(z[4][a] == 'frites'){

                dodatkiHtml +=' <a class="'+ z[4][a] +'-link link" href="">'+ msgfrites+'</a>';

            } else if(z[4][a] == 'salad'){

                dodatkiHtml +=' <a class="'+ z[4][a] +'-link link" href="">'+ msgsalad+'</a>';
            }
        }

    }

    //icons
    var iconsHtml='';
    iconsHtml+='<nav class="icons-belt">'+ iterationBoard;

        for(a=0; a < kurczaki.length; ++a){

            iconsHtml +='<a class="'+ kurczaki[a] +'-ico ico f-left" href="chicken'+ (a+1) +'-link"></a>';

        }

        for(a=0; a < sosy.length; ++a){

            iconsHtml +=' <a class="sauce-ico ico f-left" href="sauce'+ (a+1) +'-link"></a>';

        }

        for(a=0; a < dodatki.length; ++a){

            if(dodatki[a] != 0){
                iconsHtml +='<a class="'+ dodatki[a] +'-ico ico f-left" href="'+ dodatki[a] +'-link"></a>';
            }
        }

    iconsHtml+='</nav>';

    //lipton
    var liptonHtml='';

    liptonHtml +='<div class="lipton-area">' +
        '<div class="lipton-link"><a href="lipton" target="_blank">WIĘCEJ</a></div><p>Do każdego sposobu <b>lipton gratis</b></p></div>';

    var cont = '<div class="set" data-step="2">' +liptonHtml + iconsHtml + dodatkiHtml + sosyHtml + kurczakiHtml + chickenBoxImage + iterationBoardBig + '</div>';


    if(n === undefined){

        $('#page').find('.define-screen').remove();

        if($('#page').hasClass('result-set')){
            $('#page').removeClass('result-set');
            $('#page').find('.set').remove();
        }
        $('#page').prepend(cont);

        if (typeof window.history.pushState == 'function') {
            history.pushState({}, 'Losuj zestaw', 'index.php#'+ z[0]);
        }

    }else {

        $('#page').find('.define-screen').remove();
        $('#page').prepend(cont);
        $('#page').addClass('result-set');
        $('.share').fadeIn();

    }
    setFBlink(z[0],z[1]);

}

/*
 ON WINDOW LOAD
 ================================================================================================ =
 */

$(window).load(function(){

    if(window.location.toString().indexOf('skomponuj') == -1){


            $('#ajax-load').show();
            $('#page').hide();

            setTimeout(function(){

                a=30;
                loopSets = setInterval(function(){

                    $('#logo-short em').text(rand (1,7080));

                },130);

            },900);
            $('#scroll-box').delay(500).fadeIn(500,function(){

                setTimeout(function(){

                    $('#ajax-load').fadeOut(function(){

                        clearInterval(loopSets);
                        if(window.location.hash){

                            var zestawLosowy = generujTabliceZestawu(window.location.hash.substring(1));

                        }else {

                            var zestawLosowy = generujTabliceZestawu(rand (1,7080));

                        }

                        generujTemplatkeZestawu(zestawLosowy);
                        setTimeout(function(){



                            $('.set').addClass('step2');

                        },300);
                        $('#page').fadeIn();
                    });

                },2200);


            });


    }

});



/*
 SKOMPONUJ ZESTAW / losuj zestaw button  and AJAX URL etc..
 =============================================================
 */

$('.define-set').on('click', 'a',function(e){

    e.preventDefault();
    $('.random-set').fadeIn();
    $('.define-set').fadeOut();
    $('.main-title').fadeOut();
    $('.share').fadeOut();
    //lipton page remove
    $('#lipton').removeClass('animate').fadeOut(300);

    $( "#page").find('.set').fadeOut(function(){

        $(this).remove();

        $.post( "skomponuj.php", function( data ) {
            var cont = $(data).find('#define-screen');
            $( "#page" ).prepend(cont);

        });

    });


    if (typeof window.history.pushState == 'function') {
        history.pushState({}, 'Skomponuj swój własny zestaw', 'skomponuj.php');
    }


    return false;

});

$('.random-set').on('click', 'a',function(e){

    e.preventDefault();

    $('.random-set').fadeOut();
    $('.main-title').fadeIn();
    $('.define-set').fadeIn();
    $('.share').fadeIn();
    //lipton page remove
    $('#lipton').removeClass('animate').fadeOut(300);

    var zestawLosowy = generujTabliceZestawu(rand (1, 7080));
    generujTemplatkeZestawu(zestawLosowy);

    $('.set').addClass('step2');

    if (typeof window.history.pushState == 'function') {
       history.pushState({}, 'Losuj zestaw', 'index.php');
    }

    return false;

});




/*
 SKOMPONUJ ZESTAW
 ======================================================================================================
 */

 /*
 * BOXY
 * =========================================
 * */

 /* wybieranie rozmiaru boxa - przycisk dalej*/

$('#page').on('click','.box-choosen', function(){


    $('#choose-box').fadeOut(function(){


          if($('.small-c').hasClass('active')){

              var boxSize = 'maly';

          }
          if($('.large-c').hasClass('active')){

                var boxSize = 'duzy';

          }

         $('#choose-chicken').fadeIn(300);
         $('#choose-chicken').find('> div').hide();
         $('#choose-chicken').find('.' + boxSize).show();
         $('#choose-chicken').find('.show-next').attr('href',boxSize);
         $('#choose-chicken').find('.show-prev').attr('href',boxSize);

    });
    return false;

});

/* checkbox */

$('#page').on('click','.checkbox2', function(){

    if(!$(this).hasClass('active')){

        $(this).addClass('active');

        if($(this).hasClass('small-c')){

            $('.large-c').removeClass('active');

        }else{

            $('.small-c').removeClass('active');
        }

    }
    return false;

});



/*
 * POZOSTALE W SKOMPONUJ WIDOK
 * =========================================
 * */

/* mini slidery */

$('#page').on('click','.small-slider > a', function(){

    if($(this).hasClass('next')){

        var sliderCont =  $(this).parent();

        var lastLi = sliderCont.find('li:last-child').detach();
        sliderCont.find('ul').prepend(lastLi);

        sliderCont.find('ul').css('left', -sliderCont.find('ul li:first-child').width() + 'px');

        sliderCont.find('ul').animate({
            left:0
        }, 350, function() {

            var indrigent = sliderCont.find('ul li:first-child').data('indrigent');
            sliderCont.parent().find('> img').attr('src','img/'+ indrigent +'.png');

        });


    }else {

        var sliderCont =  $(this).parent();

        sliderCont.find('ul').animate({
            left: -sliderCont.find('ul li:first-child').width() + 'px'
        }, 350, function() {

            var firstLi = sliderCont.find('li:first-child').detach();
            sliderCont.find('ul').append(firstLi);
            sliderCont.find('ul').css('left',0);

            var indrigent = sliderCont.find('ul li:first-child').data('indrigent');
            sliderCont.parent().find('> img').attr('src','img/'+ indrigent +'.png');
        });

    }

    return false;


});

/* nastepny widok button */

$('#page').on('click','.show-next', function(){


    if(!$(this).hasClass('last')){

        var boxSize = $(this).attr('href');

        $(this).parent().fadeOut(300,function(){

            $(this).next().fadeIn(300);
            $(this).next().find('> div').hide();
            $(this).next().find('.' + boxSize).show();
            $(this).next().find('.show-next').attr('href',boxSize);
            $(this).next().find('.show-prev').attr('href',boxSize);

        });

    } else {


        var boxSize = $(this).attr('href');
        zbierzDaneZestawu(boxSize);


    }

    return false;

});
$('#page').on('click','.show-prev', function(){


       if(!$(this).parent().prev().hasClass('active')){


           var boxSize = $(this).attr('href');

            $(this).parent().fadeOut(300,function(){

                $(this).prev().fadeIn(300);
                $(this).prev().find('.' + boxSize).show();
                $(this).prev().find('.show-next').attr('href',boxSize);
                $(this).prev().find('.show-prev').attr('href',boxSize);

           });

       }else {

           $(this).parent().fadeOut(function(){

               $(this).prev().fadeIn();

           });

       }

    return false;

});

/* checkbox */

$('#page').on('click','.checkbox', function(){

    if($(this).hasClass('active')){

        $(this).removeClass('active');

    }else {

       $(this).addClass('active')

    }
    return false;

});


function zbierzDaneZestawu(type){

    var searchSet = [];

    if(type=="maly"){

         searchSet.push('maly');

        /* kurczaki */
        var kurczaki = [];

        $('#choose-chicken .maly .small-slider ul li:first-child').each(function(){

            kurczaki.push($(this).data('indrigent'));

        });

        kurczaki.sort();

        searchSet.push(kurczaki);

        /* sosy */

        var sosy =[];

        $('#choose-sauce .maly .small-slider ul li:first-child').each(function(){

            sosy.push($(this).data('indrigent'));

        });

        sosy.sort();

        searchSet.push(sosy);

         var dodatki = [];

        /* dodatki */


        if($('#choose-addition .salad-c').hasClass('active')){


            dodatki.push('salad');

        } else {

            dodatki.push(0);
        }

        if($('#choose-addition .frites-c').hasClass('active')){


            dodatki.push('frites');

        } else {

            dodatki.push(0);
        }

        if($('#choose-addition .drink-c').hasClass('active')){


            dodatki.push('drink');

        } else {

            dodatki.push(0);
        }


        searchSet.push(dodatki);



    } else {

        searchSet.push('duzy');

        /* kurczaki */
        var kurczaki = [];

        $('#choose-chicken .duzy .small-slider ul li:first-child').each(function(){

            kurczaki.push($(this).data('indrigent'));

        });

        kurczaki.sort();

        searchSet.push(kurczaki);

        /* sosy */

        var sosy =[];

        $('#choose-sauce .duzy .small-slider ul li:first-child').each(function(){

            sosy.push($(this).data('indrigent'));

        });

        sosy.sort();

        searchSet.push(sosy);

        var dodatki = [];

        /* dodatki */


        if($('#choose-addition .salad-c').hasClass('active')){


            dodatki.push('salad');

        } else {

            dodatki.push(0);
        }

        if($('#choose-addition .frites-c').hasClass('active')){


            dodatki.push('frites');

        } else {

            dodatki.push(0);
        }

        if($('#choose-addition .drink-c').hasClass('active')){


            dodatki.push('drink');

        } else {

            dodatki.push(0);
        }


        searchSet.push(dodatki);


    }

    var szukanyZestaw = generujTabliceZestawuzTablicy(searchSet,type);
    var varian = pobierzLiczbeKompozycji(szukanyZestaw);





}

function pobierzLiczbeKompozycji(num){

    $.ajax({
        type: "POST",
        url: 'saveXml.php',
        data: {set: num+''},
        success: function(data){


            generujTemplatkeZestawu(num,data);
            $('.set').addClass('step2');

        }

    });


}

/*
 * LIPTON
 * ===================================================================================
 * */


$('#page').on('click','.lipton-link',function(){

    $('.set,.share').fadeOut(function(){
        $('#page').addClass('result-set');
        $('#lipton').addClass('animate').fadeIn();

    });

    return false;
});

$('#page').on('click','.lipton-close',function(){

    $('#lipton').removeClass('animate').fadeOut(300,function(){

        if(window.location.toString().indexOf('skomponuj') == -1){
            $('#page').removeClass('result-set');
        }

        $('.set,.share').fadeIn();

    });



    return false;
});









