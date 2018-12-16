

//jquery element detection
function exist(el){

    if(el.size()){
        return true
    }else {
        return false;
    }
}

//elements equal height
function equalHeight(group) {
    var tallest = 0;
    group.each(function() {
        var thisHeight = $(this).height();
        if(thisHeight > tallest) {
            tallest = thisHeight;
        }
    });
    group.height(tallest);
}




/* KNOW HOW CAROUSEL
 * ========================================================= */

 var slidesCount;

var knowHowCarousel = {

    init: function(load){

        if(viewPortSize == 320){

            slidesCount = 5;

        }else if(viewPortSize == 480){

            slidesCount = 9;

        }else if(viewPortSize == 768){

            slidesCount = 11;

        }else {

            slidesCount = 15;

        }

        var count = $('#know-how .know-how-carousel li').size();

        /* reset */
        $('#know-how .know-how-carousel ul').html('');
        $('#know-how .know-how-carousel > a').hide();
        $('#know-how .know-how-carousel .carousel').width(slidesCount * 45);
        $('#know-how .know-how-carousel').removeClass('centered');

        for(a=0; a < count; ++a){

            b=a+1;
            if(b < 10 ) { b= '0'+b; }

            $('#know-how .know-how-carousel ul').append('<li><a href="'+a+'">'+ b +'</a></li>')
        }


        if(count > slidesCount ){

            $('#know-how .know-how-carousel').addClass('centered');
            $('#know-how .know-how-carousel > a.next').show();
            $('#know-how .know-how-carousel > a.prev').hide();

        }


        $('#know-how .know-how-carousel ul li:first-child').addClass('active');

        var  animated = false;

        if(load){  //if first time load - bind click events

            /* number click */
            $('#know-how .know-how-carousel').on('click','li a',function(){

                if(!animated){


                    $('#know-how .know-how-carousel li').removeClass('active');
                    $(this).parent().addClass('active');

                   if(count > slidesCount ){

                    if($('#know-how .know-how-carousel li.active a').text()-1 == (count-1)) {

                        $('#know-how .know-how-carousel a.next').hide();

                    }else if($('#know-how .know-how-carousel li.active a').text()-1 == '0'){

                        $('#know-how .know-how-carousel a.prev').hide();
                    }else {
                        $('#know-how .know-how-carousel a.prev').show();
                        $('#know-how .know-how-carousel a.next').show();
                    }

                   }

                   knowHowContentSlider.goToSlide($(this).text()-1);
                }
                return false;
            });

            /* next click */
            $('#know-how .know-how-carousel a.next').click(function(){

                if(!animated){
                    animated = true;
                    var currentIndex = $('#know-how .know-how-carousel li.active').index();

                    if(currentIndex == (slidesCount-1)){

                        if(count > slidesCount ){
                            if($('#know-how .know-how-carousel li.active a').text()-1 == (count-2)) {
                                $('#know-how .know-how-carousel a.next').hide();
                                $('#know-how .know-how-carousel a.prev').show();
                            }else {
                                $('#know-how .know-how-carousel a.next').show();
                                $('#know-how .know-how-carousel a.prev').show();
                            }
                        }

                        var firstChild = $('#know-how .know-how-carousel li:first-child').clone();
                        $('#know-how .know-how-carousel ul').append(firstChild);
                        $('#know-how .know-how-carousel li.active').removeClass('active').next().addClass('active');
                        knowHowContentSlider.goToSlide($('#know-how .know-how-carousel li.active a').text()-1);

                        $('#know-how .know-how-carousel ul').animate({

                             left: "-45px"

                         }, 400, function() {

                            animated = false;
                            $('#know-how .know-how-carousel li:first-child').remove();
                            $('#know-how .know-how-carousel ul').css('left','0');

                        });



                    }else {

                        if(count > slidesCount ){
                            if($('#know-how .know-how-carousel li.active a').text()-1 == (count-2)) {
                                $('#know-how .know-how-carousel a.next').hide();
                                $('#know-how .know-how-carousel a.prev').show();
                            }else {
                                $('#know-how .know-how-carousel a.next').show();
                                $('#know-how .know-how-carousel a.prev').show();
                            }
                        }
                        $('#know-how .know-how-carousel li.active').removeClass('active').next().addClass('active');
                        knowHowContentSlider.goToSlide($('#know-how .know-how-carousel li.active a').text()-1);
                        setTimeout(function(){

                            animated = false;

                        },400);
                    }
                }
                return false;
            });

            /* prev click */
            $('#know-how .know-how-carousel a.prev').click(function(){

                if(!animated){

                     animated = true;

                     var currentIndex = $('#know-how .know-how-carousel li.active').index();

                    if(currentIndex == 0){

                        if(count > slidesCount ){
                            if($('#know-how .know-how-carousel li.active a').text()-1 == '1') {
                                $('#know-how .know-how-carousel a.next').show();
                                $('#know-how .know-how-carousel a.prev').hide();
                            }else {
                                $('#know-how .know-how-carousel a.next').show();
                                $('#know-how .know-how-carousel a.prev').show();
                            }
                        }

                        $('#know-how .know-how-carousel ul').css('left','-45px');
                        var lastChild = $('#know-how .know-how-carousel li:last-child').clone();

                        $('#know-how .know-how-carousel ul').prepend(lastChild);
                        $('#know-how .know-how-carousel li.active').removeClass('active').prev().addClass('active');

                        knowHowContentSlider.goToSlide($('#know-how .know-how-carousel li.active a').text()-1);

                        $('#know-how .know-how-carousel ul').animate({

                                 left: "0"

                             }, 400, function() {

                            animated = false;
                            $('#know-how .know-how-carousel li:last-child').remove();

                        });

                    }else {

                        if(count > slidesCount ){
                            if($('#know-how .know-how-carousel li.active a').text()-1 == '1') {
                                $('#know-how .know-how-carousel a.next').show();
                                $('#know-how .know-how-carousel a.prev').hide();
                            }else {
                                $('#know-how .know-how-carousel a.next').show();
                                $('#know-how .know-how-carousel a.prev').show();
                            }
                        }

                        $('#know-how .know-how-carousel li.active').removeClass('active').prev().addClass('active');
                        knowHowContentSlider.goToSlide($('#know-how .know-how-carousel li.active a').text()-1);

                        setTimeout(function(){

                            animated = false;

                        },400);

                    }
                }
                return false;
            });

        }
    }




}

