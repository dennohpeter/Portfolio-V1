new fullpage('#fullpage', {
  //Navigation
	menu: '#nav_bar nav',
	lockAnchors: false,
	anchors:['home', 'about', 'resume', 'projects', 'awards', 'contact'],
	navigation: false,
	navigationPosition: 'right',
	navigationTooltips: ['home', 'about', 'resume', 'projects', 'awards', 'contact'],
  sectionsColor:["#383C4A","#213C39","#FCE94F","","#75507B", "#CC0000"],
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
});
