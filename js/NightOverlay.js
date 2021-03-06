/* 
    author domschuette
    (C) HERE 2014
*/

var NightOverlay = {
    map: null,
    date: null,
    marker_sun: null,
    marker_shadow: null,
    marker_shadow_lite: null,
    shadow_radius: parseInt(6371 * Math.PI * 500),
    sun_position: null,

    init: function(map) {  
        
        this.map = map;
        this.refreshSunZenith();
        
        this.marker_shadow = new H.map.Circle(
			this.getShadowPosition(),
            this.shadow_radius,
			{
                style: {
                    strokeColor: 'rgba(255, 255, 255, 0)',
                    lineWidth: 1,
                    fillColor: 'rgba(0, 0, 0, 0.2)'  // Color of the circle
                },
                precision: 360
			}
        ); 

        this.marker_shadow_lite = new H.map.Circle(
			this.getShadowPosition(),
            this.shadow_radius * 0.96,
			{
               style: {
                    strokeColor: 'rgba(255, 255, 255, 0)',
                    lineWidth: 1,
                    fillColor: 'rgba(0, 0, 0, 0.2)'  // Color of the circle
                },
                precision: 360
			}
        );

		this.map.addObjects([this.marker_shadow_lite, this.marker_shadow]);
    },
    getShadowPosition: function() {
		if(this.sun_position.lng < 0)
			lng = -this.sun_position.lng - 180;
		else
			lng = -this.sun_position.lng + 180; 
		return new H.geo.Point(-this.sun_position.lat, lng);
    },
    refresh: function() {
        if(!this.isVisible()) return;
        this.refreshSunZenith();
        this.marker_shadow.setCenter(this.getShadowPosition());
        this.marker_shadow_lite.setCenter(this.getShadowPosition());
    },
    refreshSunZenith: function() {
        var rad = 0.017453292519943295;

        // based on NOAA solar calculations
        var utc = new Date();
        if(this.date) { utc = new Date(this.date); }
        utc = new Date(utc.getTime() + utc.getTimezoneOffset() * 60000);
        var mins_past_midnight = (utc.getHours() * 60 + utc.getMinutes()) / 1440;
        var jd = 2415018.5 - ((new Date("01/01/1900 00:00:00 UTC")).getTime() - utc.getTime()) / 1000 / 60 / 60 / 24;
        var jc = (jd - 2451545)/36525;
        var mean_long_sun = (280.46646+jc*(36000.76983+jc*0.0003032)) % 360;
        var mean_anom_sun = 357.52911+jc*(35999.05029-0.0001537*jc);
        var sun_eq = Math.sin(rad*mean_anom_sun)*(1.914602-jc*(0.004817+0.000014*jc))+Math.sin(rad*2*mean_anom_sun)*(0.019993-0.000101*jc)+Math.sin(rad*3*mean_anom_sun)*0.000289;
        var sun_true_long = mean_long_sun + sun_eq;
        var sun_app_long = sun_true_long - 0.00569 - 0.00478*Math.sin(rad*125.04-1934.136*jc);
        var mean_obliq_ecliptic = 23+(26+((21.448-jc*(46.815+jc*(0.00059-jc*0.001813))))/60)/60;
        var obliq_corr = mean_obliq_ecliptic + 0.00256*Math.cos(rad*125.04-1934.136*jc);
        
        var lat = Math.asin(Math.sin(rad*obliq_corr)*Math.sin(rad*sun_app_long)) / rad;

        var eccent = 0.016708634-jc*(0.000042037+0.0000001267*jc);
        var y = Math.tan(rad*(obliq_corr/2))*Math.tan(rad*(obliq_corr/2));
        var rq_of_time = 4*((y*Math.sin(2*rad*mean_long_sun)-2*eccent*Math.sin(rad*mean_anom_sun)+4*eccent*y*Math.sin(rad*mean_anom_sun)*Math.cos(2*rad*mean_long_sun)-0.5*y*y*Math.sin(4*rad*mean_long_sun)-1.25*eccent*eccent*Math.sin(2*rad*mean_anom_sun))/rad);
        var true_solar_time = (mins_past_midnight*1440+rq_of_time) % 1440;
        var lng = (true_solar_time/4 < 0) ? true_solar_time/4 + 180 : true_solar_time/4 - 180;

        this.sun_position = new H.geo.Point(lat, lng);
    },
    setDate: function(date) {
        this.date = date;        
        this.refresh();
    },
    setMap: function(map) {
        this.map = map;        
    },
    show: function() {
        this.marker_shadow.set("visibility", true);
        this.marker_shadow_lite.set("visibility", true);
        this.refresh();
    },
    hide: function() {
		this.marker_shadow.set("visibility", false);
        this.marker_shadow_lite.set("visibility", false);
    },
    isVisible: function() {
        return this.marker_shadow.isVisible(); 
    }
}