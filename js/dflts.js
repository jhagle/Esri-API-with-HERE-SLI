/*	Set authentication app_id and app_code 
*	WARNING: this is a demo-only key
*	please register on http://developer.here.com/ 
*	and obtain your own API key 
*/

/* 
	author domschuette
	(C) HERE 2014
*/		
		
// var	app_code = "N4_fgYJCwnzTPt2MGmRS8A",
// 	app_id = "As1AGESV4Qio_HDgNw9U",
var app_id = "3a55t3nhT3dxI0lXpRpU",
	app_code = "O6wx2PCu6e8W5Knv77eukw",
	app_id_pde = "DemoAppId01082013GAL",
	app_code_pde = "AJKnXv84fjrb0KIHawS0Tg",

/*	
	core = "js/lib/mapsjs/mapsjs-core.js",
	platform = "js/lib/mapsjs/mapsjs-platform.js",
	events = "js/lib/mapsjs/mapsjs-mapevents.js",
	pano = "js/lib/mapsjs/mapsjs-pano.js",
*/
	core = "http://js.cit.api.here.com/v3/3.0.6.0/mapsjs-core.js",
	service = "http://js.cit.api.here.com/v3/3.0.6.0/mapsjs-service.js",
	events = "http://js.cit.api.here.com/v3/3.0.6.0/mapsjs-mapevents.js",
	pano = "http://js.cit.api.here.com/v3/3.0.6.0/mapsjs-pano.js",
	data = "http://js.cit.api.here.com/v3/3.0.6.0/mapsjs-data.js",
	clustering = "http://js.cit.api.here.com/v3/3.0.6.0/mapsjs-clustering.js",
	ui = "http://js.cit.api.here.com/v3/3.0.6.0/mapsjs-ui.js";


document.write('<script type="text/javascript" charset="UTF-8" src="' + core + '"></script>');
document.write('<script type="text/javascript" charset="UTF-8" src="' + service + '"></script>');
document.write('<script type="text/javascript" charset="UTF-8" src="' + events + '"></script>');
document.write('<script type="text/javascript" charset="UTF-8" src="' + pano + '"></script>');
document.write('<script type="text/javascript" charset="UTF-8" src="' + ui + '"></script>');
document.write('<script type="text/javascript" charset="UTF-8" src="' + clustering + '"></script>');
document.write('<script type="text/javascript" charset="UTF-8" src="' + data + '"></script>');

document.onreadystatechange = function () {
    if (document.readyState == "complete") {
		var logoDivs = document.getElementsByClassName('logo');
		for(var i=0; i < logoDivs.length; i++)
		{
			div = logoDivs[i];
			div.onclick = function() 
			{ 
				var elem = document.getElementById("notecontent");
				var visible = elem.style.display; 
				if(visible == "" || visible == "block")
					elem.style.display = 'none';
				else
					elem.style.display = 'block';
			};
		}
    }
}
	
/*
<script type="text/javascript" charset="UTF-8" src="http://js.cit.api.here.com/v3/3.0.1.1/mapsjs-core.js"></script>
<script type="text/javascript" charset="UTF-8" src="http://js.cit.api.here.com/v3/3.0.1.1/mapsjs-service.js"></script>
<script type="text/javascript" charset="UTF-8" src="http://js.cit.api.here.com/v3/3.0.1.1/mapsjs-mapevents.js"></script>
<script type="text/javascript" charset="UTF-8" src="http://js.cit.api.here.com/v3/3.0.1.1/mapsjs-pano.js"></script>
<script type="text/javascript" charset="UTF-8" src="http://js.cit.api.here.com/v3/3.0.1.1/mapsjs-ui.js"></script>
<script type="text/javascript" charset="UTF-8" src="http://js.cit.api.here.com/v3/3.0.1.1/mapsjs-clustering.js"></script>
<link rel="stylesheet" type="text/css" href="http://js.cit.api.here.com/v3/3.0/mapsjs-ui.css">
<link rel="stylesheet" type="text/css" href="http://tcs.it.here.com/Examples/src/css/defaults.css">
*/

// inject the css
document.write('<link rel="stylesheet" type="text/css" href="http://js.cit.api.here.com/v3/3.0/mapsjs-ui.css">');
// document.write('<link rel="stylesheet" type="text/css" href="js/defaults.css">');

/*
	Use this spinner for time consuming tasks
	#pageblock and #spinner CSS is required (included in defaults.css)
*/

var Spinner = (function () {
	return {
		hideSpinner: function()
		{
			document.getElementById('spinner').style.display = 'none';
			document.getElementById("pageblock").style.display = "none";
		},

		showSpinner: function()
		{
			spinnerImg = "<img src='http://static.here.sc/maps/44468/core/img/loading-big.gif' alt='spinner'>";
			
			var w = window,
			    d = document,
			    e = d.documentElement,
			    g = d.getElementsByTagName('body')[0],
			    x = w.innerWidth || e.clientWidth || g.clientWidth,
			    y = w.innerHeight|| e.clientHeight|| g.clientHeight;

			var spinner = document.getElementById('spinner');
			var pageblock = document.getElementById('pageblock');

			if (spinner === null || pageblock === null) 
				throw new Error("Did you forget to add HTML tags for spinner and pageblock?");
			
			spinner.style.display = "block";
			spinner.style.zIndex = "5";
			spinner.style.left = x/2 + "px";
			spinner.style.top = y/2 + "px";
			spinner.innerHTML = spinnerImg;

			pageblock.style.display = "block";
			pageblock.style.zIndex = "3";	
		}
	};
})();