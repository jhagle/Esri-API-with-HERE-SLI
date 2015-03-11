/* 
    author dschutte
    (C) HERE 2014
*/

InvertedPolygon = function(path) {
    var i = 0,
        // geostrip = strip, 
        latLongAlt = path.getLatLngAltArray(),
        l = latLongAlt.length,
        strip = new H.geo.Strip();

    strip.pushPoint(new H.geo.Point(-89.99,180));
    strip.pushPoint(new H.geo.Point(-89.99,-120)); 
    strip.pushPoint(new H.geo.Point(-89.99,-60));
    strip.pushPoint(new H.geo.Point(-89.99,0));
    strip.pushPoint(new H.geo.Point(-89.99,60));
    strip.pushPoint(new H.geo.Point(-89.99,120)); 
    strip.pushPoint(new H.geo.Point(-89.99,180));

    for(; i < l; i += 3)
    {
        strip.pushPoint(new H.geo.Point(latLongAlt[i], latLongAlt[i+1]));
    }

    var mask = new H.map.Polygon(strip, {
                                        style: {
                                            fillColor: 'rgba(255, 255, 255, 0.7)',
                                            strokeColor: 'rgba(255, 255, 255, 0)',
                                        }
                                    });
    var polygon = new H.map.Polygon(path,{
                                        style: {
                                            lineWidth: 5,
                                            strokeColor: "rgba(128, 128, 128, 0.5)",
                                            fillColor: "rgba(255, 255, 255, 0)"
                                        }   
                                    });      


    return { mask : mask, polygon: polygon };
};
