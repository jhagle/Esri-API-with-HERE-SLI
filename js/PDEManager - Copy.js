/* 
* author domschuette
* (C) HERE 2014
*/


// helper for hashmap size
Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

/**
	This constructor creates the PDE manager. It needs the app_id and app_code plus the layerObjects.
	A layerObject needs a callback for a layer and optional if it's a FC layer or not.
	See setLayers.
*/
PDEManager = function(app_id_pde, app_code_pde, layersObjects)
{
	this.baseURL = "http://pde.cit.api.here.com/1/tile.json";
	this.fileURL = "http://pde.cit.api.here.com/1/file.bin";
	this.region = "EU";
	this.release = "2013Q4";
	this.app_id_pde = app_id_pde;
	this.app_code_pde = app_code_pde;
	this.links = null;
	this.bbox = null;
	this.bboxContainer = undefined;
	this.numTilesOpen = 0;
	this.numTilesRequested = 0;
	this.routeLinks = new Object();
	this.layersObjects = layersObjects;
}

/**
	This method sets the layerObjects. Means a layerObject needs a callback for a layer and optional if it's a FC layer or not.
	For example:
	layers = new Object();
	layers["JUNCTION_VIEW"] = {callback: gotJunctionViews, isFCLayer: false, level: 9};
	layers["SPEED_LIMITS_FC"] = {callback: gotSpeedLimits};
*/
PDEManager.prototype.setLayers = function(layersObjects)
{
	this.layersObjects = layersObjects;
}

PDEManager.prototype.setBaseURL = function(baseURL)
{
	this.baseURL = baseURL;
}

PDEManager.prototype.getBaseURL = function()
{
	return this.baseURL;
}

PDEManager.prototype.setFileURL = function(fileURL)
{
	this.fileURL = fileURL;
}

PDEManager.prototype.getFileURL = function()
{
	return this.fileURL;
}

PDEManager.prototype.setRegion = function(region)
{
	this.region = region;
}

PDEManager.prototype.getRegion = function()
{
	return this.region;
}

PDEManager.prototype.setRelease = function(release)
{
	this.release = release;
}

PDEManager.prototype.getRelease = function()
{
	return this.release;
}

PDEManager.prototype.setLinks = function(links)
{
	this.links = links;
}

PDEManager.prototype.getLinks = function()
{
	return this.links;
}

PDEManager.prototype.setBoundingBox = function(bbox)
{
	this.bbox = bbox;
}

PDEManager.prototype.getLinks = function()
{
	return this.bbox;
}

PDEManager.prototype.setBoundingBoxContainer = function(bboxContainer)
{
	this.bboxContainer = bboxContainer;
}

PDEManager.prototype.getBoundingBoxContainer = function()
{
	return this.bboxContainer;
}

PDEManager.prototype.getRouteLinks = function()
{
	return this.routeLinks;
}

PDEManager.prototype.getLinksPartOfRoute = function(linkIds)
{
	var bRet = false;
	var linkSplit = linkIds.split(",");
	var found = [linkSplit.length];
	var currFoundIndex = 0;
	for(var i = 0; i < this.links.length; i++)
	{
		if((this.links[i].linkId.lastIndexOf("+", 0) === 0 ?  this.links[i].linkId.substring(1) : this.links[i].linkId) == linkSplit[currFoundIndex])
		{
			currFoundIndex++;
			if(curFoundIndex == linkSplit.length - 1)
			{
				bRet = true;
				break;
			}			
		}
	}
	
	return true;
}

PDEManager.prototype.getFirstLinkPartOfRoute = function(linkIds)
{
	var bRet = false;
	var linkSplit = linkIds.split(",");
	var found = [linkSplit.length];
	for(var i = 0; i < this.links.length; i++)
	{
		if((this.links[i].linkId.lastIndexOf("+", 0) === 0 ?  this.links[i].linkId.substring(1) : this.links[i].linkId) == linkSplit[0])
		{
			bRet = true;
			break;
		}
	}
	
	return bRet;
}

PDEManager.prototype.start = function()
{
	if(!this.links && !this.bbox)
	{
		var event = new CustomEvent("PDEError", { detail: { message: "no bbox or links given"}});
		document.dispatchEvent(event);
		return;
	}
	// create tile requests for FC layers
	var requestsObjFc = this.generatePDETileRequests(-1);
	var requestsObjNoFc = [];
	
	// create tile requests for non-FC layers
	for (var layer in this.layersObjects)
	{
		var isFcLayer = true;
		if(typeof this.layersObjects[layer].isFCLayer !== 'undefined')
		{
			isFcLayer = this.layersObjects[layer].isFCLayer;
		}
		if(!isFcLayer)
		{
			var level = this.layersObjects[layer].level;
			requestsObjNoFc[layer] = this.generatePDETileRequests(level);
		}
	}
	
	this.routeLinks = requestsObjFc.routeLinks;
	
	// calculate overall size
	for (var layer in this.layersObjects)
	{
		var isFcLayer = true;
		if(typeof this.layersObjects[layer].isFCLayer !== 'undefined')
		{
			isFcLayer = this.layersObjects[layer].isFCLayer;
		}
		
		var length = (isFcLayer ? requestsObjFc.requests.length : requestsObjNoFc[layer].requests.length);
		this.numTilesOpen += length;
	}
	
	// request PDE tiles
	for (var layer in this.layersObjects)
	{
		var isFcLayer = true;
		if(typeof this.layersObjects[layer].isFCLayer !== 'undefined')
		{
			isFcLayer = this.layersObjects[layer].isFCLayer;
		}
		var requests = (isFcLayer ? requestsObjFc.requests : requestsObjNoFc[layer].requests);
		for(i = 0; i < requests.length; i++)
		{
			this.requestPDETile(requests[i], layer, this.layersObjects[layer].callback, isFcLayer);
		}	
	}
}

PDEManager.prototype.requestPDETile = function(tile, layer, callback, isFcLayer)
{
	if (callback && typeof(callback) === "function")
	{  
		var url = this.baseURL + "?region=" + this.region + "&release=" + this.release + "&layer=" + layer + (isFcLayer && tile.fc != null ? tile.fc : "") +
					  "&level=" + tile.level + "&tilex=" + tile.tileX + "&tiley=" + tile.tileY + "&app_id=" + this.app_id_pde + "&app_code=" + this.app_code_pde + "&callback=" + callback.name;
		
		var script = document.createElement("script");
		script.src = url;
		var that = this;
		script.onload = function()
		{
			that.numTilesOpen--;
			that.numTilesRequested++;
			
			var event; 
			if(that.numTilesOpen === 0)
			{
				event = new CustomEvent("PDETileLoadingFinished", { detail: { "finishedRequests" : that.numTilesRequested }});
			}
			else
			{
				event = new CustomEvent("PDETileLoaded", { detail: { message: url}});
			}
			document.dispatchEvent(event);
		}
		document.body.appendChild(script);
	}
	else
	{
		throw "Given Callback is not a function";
	}
}

/**
	This method generates the PDE tiles. If the passed level parameter is -1 then the functional
	class from all links is used - the provided level otherwise
*/
PDEManager.prototype.generatePDETileRequests = function(givenLevel)
{
	var pdeTileRequests = [],
		fcColors = ["rgba(0, 0, 255, 0.2)", "rgba(34, 34, 255, 0.2)", "rgba(68, 68, 255, 0.2)", "rgba(102, 102, 255, 0.2)", "rgba(136, 136, 255, 0.2)"],
		miny, 
		minx,
		maxy,
		maxx,
		bounds,
		rectangle,
		m,
		routeLinksMap = new Object();
	
	if(this.links != null)
	{
		this.bbox = null; // ensure bbox mode is disabled
		l = this.links.length;
		for (m = 0; m < l; m++)
		{
			routeLinksMap[parseInt(this.links[m].linkId)] = this.links[m]; // when driving from ref, linkID is positive, else negative
			var fc = this.links[m].functionalClass;
			var	level = -1; // different zoom level for each functional class
			if(givenLevel == -1)
			{
				level = fc + 8; // different zoom level for each functional class
			}
			else
			{
				level = givenLevel;
			}
			var	tileSizeDegree = 180.0 / (1 << level);
			var shapePointsLatLonZ = this.links[m].shape;
			
			for (j = 0; j < shapePointsLatLonZ.length; j ++)
			{
				var shapePointsLatLonZString = shapePointsLatLonZ[j].trim().split(","),
					tileY = Math.floor((parseFloat(shapePointsLatLonZString[0]) +  90.0) / tileSizeDegree),
					tileX = Math.floor((parseFloat(shapePointsLatLonZString[1]) + 180.0) / tileSizeDegree),
					found = undefined;
			  
					for (u = 0; !found && u < pdeTileRequests.length; u++) // do we have this tile in the list already?
						if (tileY == pdeTileRequests[u].tileY && tileX == pdeTileRequests[u].tileX && fc == pdeTileRequests[u].fc)
							found = true;
						if (found) 
							continue;

						pdeTileRequests.push({tileX: tileX, tileY: tileY, level: level, fc: fc});
					
						var fcColor = fcColors[fc - 1];
						
						// display tile bounding box
						miny = tileY * tileSizeDegree -  90.0;
						minx = tileX * tileSizeDegree - 180.0;
						maxy = miny + tileSizeDegree - 0.00001;
						maxx = minx + tileSizeDegree - 0.00001;
			  
						bounds = new H.geo.Rect(maxy, minx, miny, maxx);
								
						rectangle = new H.map.Rect(bounds,
							{
								style: 
								{
									lineWidth: 5,
									strokeColor: fcColor,
									fillColor: "rgba(0, 0, 0,0)",
									lineJoin: "round"
								}	
							}
						);
					if(this.bboxContainer)
						this.bboxContainer.addObject(rectangle);  
			}	
		}
	}
	else if(this.bbox != null)
	{
		this.links = null; // ensure linke mode is disabled
		var minY = this.bbox.getBottom(),
			maxY = this.bbox.getTop(),
			minX = this.bbox.getLeft(),
			maxX = this.bbox.getRight(),
			tileX,
			tileY,
			tileSizeDegree = 180.0 / (1 << givenLevel),
			bounds;

		var	level = -1; // different zoom level for each functional class
		if(givenLevel == -1)
		{
			level = fc + 8; // different zoom level for each functional class
		}
		else
		{
			level = givenLevel;
		}			
		
		if(givenLevel == -1) // FC mode
		{
			for (fc = 1; fc <= 5; fc++)
			{
				level = fc + 8; // different zoom level for each functional class
				tileSizeDegree = 180.0 / (1 << level);
				for (tileY = Math.floor((minY +  90.0) / tileSizeDegree); tileY <= Math.floor((maxY +  90.0) / tileSizeDegree); tileY++) 
				{
					for (tileX = Math.floor((minX + 180.0) / tileSizeDegree); tileX <= Math.floor((maxX + 180.0) / tileSizeDegree); tileX++) 
					{
						found = undefined;	 
							for (u = 0; !found && u < pdeTileRequests.length; u++) // do we have this tile in the list already?
							{
								if (tileY == pdeTileRequests[u].tileY && tileX == pdeTileRequests[u].tileX && fc == pdeTileRequests[u].fc)
								{
									found = true;
								}
							}
							if (!found)
								pdeTileRequests.push({tileX: tileX, tileY: tileY, level: level, fc: fc});
					}
				}
			}
		}
		else
		{
			for   (tileY = Math.floor((minY +  90.0) / tileSizeDegree); tileY <= Math.floor((maxY +  90.0) / tileSizeDegree); tileY++) 
			{
				for (tileX = Math.floor((minX + 180.0) / tileSizeDegree); tileX <= Math.floor((maxX + 180.0) / tileSizeDegree); tileX++) 
				{
					found = undefined;	 
					for (u = 0; !found && u < pdeTileRequests.length; u++) // do we have this tile in the list already?
					{ 
						if (tileY == pdeTileRequests[u].tileY && tileX == pdeTileRequests[u].tileX)
						{
							found = true;
						}
					}
					if (!found)
					{
						pdeTileRequests.push({tileX: tileX, tileY: tileY, level: level});
					}
				}
			}
		}
	}
	return { requests: pdeTileRequests, bboxContainer: this.bboxContainer, routeLinks: routeLinksMap};
}

PDEManager.prototype.addEventListener = function(evtName, eventHandler)
{
	document.addEventListener(evtName, eventHandler, false);
}