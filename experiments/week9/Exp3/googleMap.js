
function initialize() {
    var googleMap = {
        zoom: 2, center: new google.maps.LatLng(49.265984, -123.127491)
    };

    var map1 = new google.maps.Map(document.getElementById('map-canvas-2'), googleMap);

    var weatherLayer = new google.maps.weather.WeatherLayer({
        temperatureUnits: google.maps.weather.TemperatureUnit.FAHRENHEIT
    });

    weatherLayer.setMap(map1);
}

google.maps.event.addDomListener(window, 'load', initialize);

