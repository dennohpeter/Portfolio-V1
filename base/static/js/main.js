new fullpage('#fullpage', {
  //Navigation
	menu: '#nav_bar #menu',
	lockAnchors: false,
	anchors:['home', 'about', 'resume', 'projects', 'awards', 'contact'],
	navigation: false,
	navigationPosition: 'right',
	navigationTooltips: ['home', 'about', 'resume', 'projects', 'awards', 'contact'],
  sectionsColor:["","","#161A1A","whitesmoke","#75507B", ""],
	showActiveTooltip: false,
	slidesNavigation: true,
	slidesNavPosition: 'bottom',
  //options here
  autoScrolling:true,
  scrollHorizontally: true,
  //Accessibility
	keyboardScrolling: true,
	animateAnchor: true,
	recordHistory: true,
});
