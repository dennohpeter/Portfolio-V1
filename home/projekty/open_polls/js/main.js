var app = {};
app.poll ={};

app.ui = {

    mobileEvents:function(){

        $('.mobile-search').click(function(){

            $('.head-search').toggleClass('show');
            $('.menu').removeClass('show');
            return false
        });

        $('.mobile-menu').click(function(){

            $('.menu').toggleClass('show');
            $('.head-search').removeClass('show');
            return false
        });
    }
}


$(document).ready(function(){
    app.ui.mobileEvents();
});



/* ------------------  GRID  ----------------- */

Modernizr.load([
    {
        test: $('.grid').size() > 0,
        yep: ['js/libs/isotope.min.js', 'js/app/app-grid.js'],
        complete:function(){
            if ( app.grid) {
                app.grid.init();
            }
        }
    }
]);



/* -------------  MENU  ------------- */

Modernizr.load([
    {
        test: $('.menu').size() > 0,
        yep: 'js/app/app-menu.js',
        complete: function () {

            if ( app.menu) {
                app.menu.init();
            }
        }
    }
]);


/* -------------  PROFILE SETTINGS - PAGE  ------------- */

Modernizr.load([
    {
        test: $('.profile-settings').size() > 0,
        yep: 'js/app/app-profile-settings.js',
        complete: function () {

            if ( app.profile) {
                app.profile.init();
            }
        }
    }
]);

/* -------------  OPEN A POLL - PAGE  ------------- */

Modernizr.load([
    {
        test: $('.open-poll-page').size() > 0,
        yep: 'js/app/app-poll-open.js',
        complete: function () {

            if (app.poll.open) {
                app.poll.open.init();
            }
        }
    }
]);

/* ------------------  VOTES MAP  ----------------- */

Modernizr.load([
    {
        test: $('.votes-map').size() > 0,
        yep: ['js/app/app-map.js','https://maps.googleapis.com/maps/api/js?key=AIzaSyDYvmQ2B6POFobiC0koUPCJLzgjhTrSbTs&callback=app.map.init']
    }
]);


/* ------------------  VOTE BLOCK  ----------------- */

Modernizr.load([
    {
        test: $('.vote-block').size() > 0,
        yep: ['js/app/app-vote.js'],
        complete:function(){
            if ( app.vote) {
                app.vote.init();
            }
        }
    }
]);

/* ------------------  FOLLOW BUTTONS  ----------------- */

Modernizr.load([
    {
        test: $('.follow-btns').size() > 0,
        yep: ['js/app/app-follow.js'],
        complete:function(){
            if ( app.follow) {
                app.follow.init();
            }
        }
    }
]);

/* ------------------  CUSTOM SELECTS  ----------------- */

Modernizr.load([
    {
        test: $('.selectpicker').size() > 0,
        yep: ['js/polyfills/custom-select.js']

    }
]);

/* ------------------  CUSTOM CHECKBOXES/RADIO INPUTS  ----------------- */

Modernizr.load([
    {
        test: $('input[type="checkbox"], input[type="radio"]').size() > 0,
        yep: ['js/polyfills/icheck.js']

    }
]);

/* ------------------  CUSTOM FILE INPUTS  ----------------- */

Modernizr.load([
    {
        test: $('input[type=file]').size() > 0,
        yep: ['js/polyfills/custom-file-input.js']

    }
]);




/* -------------------- POLYFILL PLACEHOLDER IE8 --------- */
Modernizr.load({
    test: Modernizr.input.placeholder,
    nope: [
        'js/polyfills/placeholders.js'
    ]
});