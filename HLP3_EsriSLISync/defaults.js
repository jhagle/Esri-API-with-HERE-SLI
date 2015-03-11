/*	Set authentication app_id and app_code 
*	WARNING: this is a demo-only key
*	please register on http://developer.here.com/ 
*	and obtain your own API key 
*/

/* 
	author domschuette
	(C) HERE 2014
*/		
		
var	app_code = "N4_fgYJCwnzTPt2MGmRS8A",
	app_id = "As1AGESV4Qio_HDgNw9U",
	app_id_pde = "DemoAppId01082013GAL",
	app_code_pde = "AJKnXv84fjrb0KIHawS0Tg",
	
	core = "js/lib/mapsjs/mapsjs-core.js",
	platform = "js/lib/mapsjs/mapsjs-platform.js",
	events = "js/lib/mapsjs/mapsjs-mapevents.js",
	pano = "js/lib/mapsjs/mapsjs-pano.js",
	
	core = "http://js.cit.api.here.com/v3/3.0.1.1/mapsjs-core.js",
	service = "http://js.cit.api.here.com/v3/3.0.1.1/mapsjs-service.js",
	events = "http://js.cit.api.here.com/v3/3.0.1.1/mapsjs-mapevents.js",
	pano = "http://js.cit.api.here.com/v3/3.0.1.1/mapsjs-pano.js",
	ui = "http://js.cit.api.here.com/v3/3.0.1.1/mapsjs-ui.js";


document.write('<script type="text/javascript" charset="UTF-8" src="' + core + '"></script>');
document.write('<script type="text/javascript" charset="UTF-8" src="' + service + '"></script>');
document.write('<script type="text/javascript" charset="UTF-8" src="' + events + '"></script>');
document.write('<script type="text/javascript" charset="UTF-8" src="' + pano + '"></script>');
document.write('<script type="text/javascript" charset="UTF-8" src="' + ui + '"></script>');


// inject the css
document.write('<link rel="stylesheet" type="text/css" href="http://js.cit.api.here.com/v3/3.0/mapsjs-ui.css">');
// document.write('<link rel="stylesheet" type="text/css" href="js/defaults.css">');