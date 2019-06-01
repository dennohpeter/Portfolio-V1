$(document).ready(function() {
  $('#fullpage').fullpage({
    //Navigation
    menu: '#nav_bar nav',
    lockAnchors: false,
    anchors:['home', 'about', 'resume', 'projects', 'awards', 'contact'],
    navigation: false,
    navigationPosition: 'right',
    navigationTooltips: ['home', 'about', 'resume', 'projects', 'awards', 'contact'],
    showActiveTooltip: false,
    slidesNavigation: false,
    slidesNavPosition: 'bottom',
    //options here
    autoScrolling:true,
    scrollHorizontally: true,
    //Accessibility
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,
    sectionsColor : ["#FFFFFF", "#282C34", "#CC0000", "#2E3436", "#73D216", "#75507B"]
  })
  //methods
  $.fn.fullpage.setAllowScrolling(false);
});
