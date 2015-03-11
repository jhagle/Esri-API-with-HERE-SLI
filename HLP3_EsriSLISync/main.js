//Demonstrates compatibility between Nokia HERE's Street Level Imaging using the HERE JavaScript API 3.0 and Esri Maps
//Author: James Robert Hagle adapted/upgraded from http://maps.esri.com/SP_DEMOS/NMA4JS-3D-Preview/demo/test.html
//map holders
var nokia_map;
var esri_map;
//marker holders

var pictureMarkerSymbol = new esri.symbol.PictureMarkerSymbol('map-icon-arrow-blue.png', 42, 42);
var search = document.getElementById("search");
var x = document.getElementById("feedbackTxt");
var timeoutID;
var count = 0;

function sleep(millis, callback) {
    setTimeout(function () {
        callback();
    }, millis);
}

function prepareTimeout() {
    timeoutID = setTimeout(alertFun, 5000);
}

function alertFun() {
    x.innerHTML = "Sorry, Unable to load SLI. Please try a different location. See the map below for reference";
}

function clearAlert() {
    clearTimeout(timeoutID);
}
//function isSanDiego(lat,long){
//    if (lat > 32.98 || lat < 32.66 || long > -117.02 || long < -117.26){
//
//        var x = document.getElementById("feedbackTxt");
//        x.innerHTML="";
//        alert("Sorry, this example is limited to the city of San Diego. Please try another search.");
//        return false;
//    }
//    else{
//        var x = document.getElementById("feedbackTxt");
//        x.innerHTML="";
//        return true;
//    }
//
//}
//Initialize Nokia Map

function initNokiaMap(lat, lon) {

    var platform = new H.service.Platform({
            app_id: "fc17u1AlyKXofsojtWtw",
            app_code: "WjptYYKn4cp6FPe9RttPzQ"
        }),
    //geocoder for search functionality
        geocoder = platform.getGeocodingService(),
    //Open map and zoom to panorama (Street level)
        maptiler = platform.getMapTileService({
            'type': 'base'
        });
    baseMap = maptiler.createTileLayer('maptile', 'normal.day', 512, 'png8');
    platform.configure(H.map.render.panorama.RenderEngine);
    if (!Detector.webgl) {
        document.getElementById("nowebgl").style.display = "block";
        document.getElementById("mapContainer").style.display = "none";
    }
    nokia_map = new H.Map(document.getElementById('streetViewContainer'), baseMap, {
        center: new H.geo.Point(48.856833, 2.341197), // lat lon
        zoomLevel: 18,
        baseMap: baseMap
    });
    var mapTileService = platform.getMapTileService({
        'type': 'base'
    });

    //Allow SLI to be manipulated (dragged, click on, etc)
    var mapevents = new H.mapevents.MapEvents(nokia_map);
    var behavior = new H.mapevents.Behavior(mapevents);
    //If window is resized, resize the Nokia Map
    window.addEventListener('resize', function () {
        nokia_map.getViewPort().resize();
    });
    //Set initial position
    nokia_map.setCenter({
        lat: 48.856833,
        lng: 2.341197
    });
    nokia_map.setZoom(18);
    setTimeout(function () {
        nokia_map.setEngineType(H.Map.EngineType.PANORAMA);
    }, 500);
    //Add search functionality
    var viewModel = nokia_map.getViewModel();
    var cameraData = viewModel.getCameraData();
    searchButton.onclick = function () {
        if(search.value == 'Paris, France'){
			
            nokia_map.setCenter({
                lat: 48.856833,
                lng: 2.341197
            })
			nokia_map.addEventListener("mapviewchangeend", function (e) {
				cameraData.yaw = 180;

			})
		}
        else {
            geocode(search.value, true);
            var mess = x.innerHTML = ("Finding closest street level imagery to " + search.value);
            sleep(10000, mess);
            prepareTimeout();
        }
    };

    //Set up geocoding for search
    geocode = function (search) {

        geocoder.geocode({
                searchText: search

            },
            function (result) {

                if(result.Response.View[0].Result[0].Location != null)
				{
					pos = result.Response.View[0].Result[0].Location.DisplayPosition;
				}
				else
				{
					pos = result.Response.View[0].Result[0].Place.Locations[0].DisplayPosition;
				}

                //nokia_map = (lat, long) & esri_map = (long, lat)
                //                if(isSanDiego(pos.Latitude, pos.Longitude)) {
                console.log("We got here");
                point = new H.geo.Point(pos.Latitude, pos.Longitude);
                esriPoint = esri.geometry.Point(pos.Longitude, pos.Latitude);
                line1 = pos.Latitude + " " + pos.Longitude;
                // line2 = result.Response.View[0].Result[0].MatchLevel;
                //Center initial esri point on position, set center of Nokia map, wait for map change (handled below)
                esri_map.centerAt(esriPoint);
                esri_map.graphics.add(new esri.Graphic(esriPoint, simpleMarkerSymbol));
                nokia_map.setCenter(point);
                //                }
                //                else{
                //
                //                }

            },

            function (error) {
                alert(error);
            }
        );
    }

    reverseGeocode = function (lat, lng) {
        geocoder.reverseGeocode({

                prox: lat + "," + lng + "," + "8",
                mode: "retrieveAddresses",
                LocationType: "proximity",
                gen: 5
            },
            function (result) {
                x.innerHTML = ("");
                //                if(isSanDiego(lat, lng)) {
                results = result.Response.View[0].Result;
                //      console.log("length of results = " + results.length);
                for (i = 0; i < results.length; i++) {
                    pos = result.Response.View[0].Result[i].Location.DisplayPosition;
                    point = new H.geo.Point(pos.Latitude, pos.Longitude);
                    address = result.Response.View[0].Result[i].Location.Address;
                    street = address.Street;
                    housenumber = address.HouseNumber;
                    city = address.City;
                    state = address.State;

                    if (street === undefined) {
                        document.getElementById("search").value = city + ", " + state;
                    } else if (housenumber === undefined) {
                        document.getElementById("search").value = street + " " + city + ", " + state;
                    } else {
                        document.getElementById("search").value = housenumber + " " + street + " " + city + ", " + state;
                    }

                }
                //                }
                //                else{
                //
                //                    }
            });
    }

    //If Street map is dragged around, change esri_map marker to face the direction of the SLI
    nokia_map.addEventListener("mapviewchange", function (e) {
        clearAlert();

        var viewModel = nokia_map.getViewModel();
        var cameraData = viewModel.getCameraData();
        pictureMarkerSymbol.setAngle(cameraData.yaw);
        if (cameraData.yaw >= 65 && cameraData.yaw <= 115) {
            pictureMarkerSymbol.setOffset(0, -7);
        }
        if (cameraData.yaw >= 235 && cameraData.yaw <= 290) {
            pictureMarkerSymbol.setOffset(0, -7);
        }
        if (cameraData.yaw >= 140 && cameraData.yaw <= 190) {
            pictureMarkerSymbol.setOffset(1, 0);
        }
        if (cameraData.yaw <= 15 || cameraData.yaw >= 340) {
            pictureMarkerSymbol.setOffset(3, 0);
        }
        //https://developers.arcgis.com/javascript/jsapi/markersymbol-amd.html#setangle
        pictureMarkerSymbol.setAngle(cameraData.yaw);

            console.log("angle = %d", cameraData.yaw);

    });
    //If map is clicked on or search completed update esri_map to that position and place it's markers accordingly

    nokia_map.addEventListener("mapviewchangeend", function (e) {
        clearAlert();
        var x = document.getElementById("feedbackTxt");
        x.innerHTML = ("");
        var viewModel = nokia_map.getViewModel();
        var cameraData = viewModel.getCameraData();
        var spot = new esri.geometry.Point(cameraData.position.lng, cameraData.position.lat);
        //        if(isSanDiego(cameraData.position.lat, cameraData.position.lng)) {
        esri_map.graphics.add(new esri.Graphic(spot, simpleMarkerSymbol));
        esri_map.centerAt(spot);
        esri_map.graphics.clear();
        esri_map.graphics.add(new esri.Graphic(spot, pictureMarkerSymbol));
        pictureMarkerSymbol.setAngle(cameraData.yaw);

        reverseGeocode(cameraData.position.lat, cameraData.position.lng);

        //        }
    });
    //Correct offcenter pointer based on direction faced.

}
var observer = function (obj, key, value, oldValue) {
    console.log(obj, key, value, oldValue)
};

function tilt(val) {
    if (nokia_map) {
        nokia_map.setTilt(nokia_map.tilt += parseInt(val));
    }
}
var simpleMarkerSymbol = new esri.symbol.SimpleMarkerSymbol().setSize(20).setColor(new dojo.Color([255, 255, 0, 0.6]));
/* ********* Esri Maps ************** */
require(["esri/map", "esri/dijit/BasemapToggle", "esri/graphic", "esri/symbols/PictureMarkerSymbol", "dojo/domReady!"], function (Map, BasemapToggle, Graphic, PictureMarkerSymbol) {
    "use strict";
    //Load esri map, set same position as nokia_map.
    window.esri_map = new Map("esriMapContainer", {
        center: [2.341197, 48.856833], // default long lat
        slider: false,
        zoom: 16,
        basemap: "streets"
    });
 var toggle = new BasemapToggle({
        map: esri_map,
        basemap: "satellite"
      }, "BasemapToggle");
      toggle.startup();

    
    esri_map.on("load", function () {
        var center = esri_map.extent.getCenter();
        esri_map.setLevel(18);

        setTimeout(function () {
            initNokiaMap();
            if (nokia_map)
                var coord = {
                    lat: center.getLatitude(),
                    lng: center.getLongitude()
                };
            nokia_map.setCenter(coord);
        }, 1000);
    });
    //If esri_map is clicked on, update HERE SLI to esri_map's position

    esri_map.on("click", function (evt) {
        clearAlert();
        var x = document.getElementById("feedbackTxt");
        x.innerHTML = "";

        var map_point = evt.mapPoint;
        esri_map.centerAt(map_point);
        esri_map.graphics.clear();
        //        if(isSanDiego(map_point.getLatitude(), map_point.getLongitude())) {
        esri_map.graphics.add(new Graphic(map_point, simpleMarkerSymbol));
        esri_map.graphics.add(new Graphic(new esri.geometry.Point(map_point.getLongitude(), map_point.getLatitude()), pictureMarkerSymbol));
        if (nokia_map) {
            var coord = {
                lat: map_point.getLatitude(),
                lng: map_point.getLongitude()
            };
            nokia_map.setCenter(coord);

            var viewModel = nokia_map.getViewModel();
            var cameraData = viewModel.getCameraData();
            pictureMarkerSymbol.setAngle(cameraData.yaw);

            prepareTimeout();

        };
        //        }
    });
})