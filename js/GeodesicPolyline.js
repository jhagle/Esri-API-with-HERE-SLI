/* 
	author domschuette
	(C) HERE 2014
*/

function GeodesicPolyline(options)
{
	var options = options || {},
		latStart = options.start.lat || null,
		lngStart = options.start.lng || null,
		latEnd = options.end.lat || null,
		lngEnd = options.end.lng || null,
		style = options.style || null,
		horizontal = options.horizontal || null,
		arrows = options.arrows || null,
		multiplier = 1,
		resolution = 0.001,
		group = new H.map.Group(),
		strip = new H.geo.Strip();
	
	if(horizontal == undefined)
	{
		horizontal = true;
	}
	
	var lastLat = latStart,
		lastLng = lngStart,
		partLat,
		partLng,
		points = new Array(),
		pointsOffset = new Array();
	
	for(point = 0; point <= 1; point += resolution)
	{
		points.push(point);
		offset = (0.6 * Math.sin((Math.PI * point / 1)));
		pointsOffset.push(offset);
	}
			
	var offsetMultiplier = 0;
	
	if(horizontal == 1)
	{
		var offsetLenght = (lngEnd - lngStart) * 0.1;
	} 
	else 
	{
		var offsetLenght = (latEnd - latStart) * 0.1;
	}
			 
	for(var i = 0; i < points.length; i++) 
	{
		if(i == 4) 
		{
			offsetMultiplier = 1.5 * multiplier;
		}
		
		if(i >= 5) 
		{
			offsetMultiplier = (offsetLenght * pointsOffset[i]) * multiplier;
		}
		else
		{
			offsetMultiplier = (offsetLenght * pointsOffset[i]) * multiplier;
		}
		
		if(horizontal == 1) 
		{
			partLat = (latStart + ((latEnd - latStart) * points[i])) + offsetMultiplier;
			partLng = (lngStart + ((lngEnd - lngStart) * points[i]));
		} 
		else
		{
			partLat = (latStart + ((latEnd - latStart) * points[i]));
			partLng = (lngStart + ((lngEnd - lngStart) * points[i])) + offsetMultiplier;
		}
		
		createSegment(lastLat, lastLng, partLat, partLng, strip);
		
		lastLat = partLat;
		lastLng = partLng;
	}
	
	createSegment(lastLat, lastLng, latEnd, lngEnd, strip);

	return new H.map.Polyline(
		strip,
		{
			style : style,
			arrows : arrows
		}
	);  
}

function createSegment(latStart, lngStart, latEnd, lngEnd, strip) 
{
	strip.pushPoint(new H.geo.Point(latStart, lngStart));
	strip.pushPoint(new H.geo.Point(latEnd, lngEnd));
}