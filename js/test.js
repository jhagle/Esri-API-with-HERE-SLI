

/* 
    author dschutte
    (C) HERE 2014
*/

InvertedPolygon = function (path) {
    var i = 0,
        // geostrip = strip, 
        latLongAlt = path.getLatLngAltArray(),
        l = latLongAlt.length,
        strip = new H.geo.Strip(),
        pathNormalized = new H.geo.Strip();

    strip.pushPoint(new H.geo.Point(-89.99, 180));
    strip.pushPoint(new H.geo.Point(-89.99, -120));
    strip.pushPoint(new H.geo.Point(-89.99, -60));
    strip.pushPoint(new H.geo.Point(-89.99, 0));
    strip.pushPoint(new H.geo.Point(-89.99, 60));
    strip.pushPoint(new H.geo.Point(-89.99, 120));
    strip.pushPoint(new H.geo.Point(-89.99, 180));

    for (; i < l; i += 3) {
        strip.pushPoint(new H.geo.Point(latLongAlt[i], latLongAlt[i + 1]));
    }


    //Normalization
    var normalizationFactor = 1;

    if (l <= 1000) {
        normalizationFactor = 1;
    }
    else if (l > 1000 && l < 5000) {
        normalizationFactor = 2;
    }
    else if (l > 5000 && l < 10000) {
        normalizationFactor = 5;
    }
    else if (l > 10000 && l < 100000) {
        normalizationFactor = 15;
    }
    else {
        normalizationFactor = 30;
    }

    console.info(l + ": " + normalizationFactor);

    var conta = 0;
    for (i = 0; i < l; i += 3) {

        if ((conta % normalizationFactor) === 0) {
            pathNormalized.pushPoint(new H.geo.Point(latLongAlt[i], latLongAlt[i + 1]));
        }

        conta++;
    }


    var mask = new H.map.Polygon(strip, {
        style: {
            fillColor: 'rgba(255, 255, 255, 0.7)',
            strokeColor: 'rgba(255, 255, 255, 0)',
        }
    });
    var polygon = new H.map.Polygon(pathNormalized, {
        style: {
            lineWidth: 5,
            strokeColor: "rgba(128, 128, 128, 0.5)",
            fillColor: "rgba(255, 255, 255, 0)"
        }
    });


    return { mask: mask, polygon: polygon };
};
