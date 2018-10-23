var heatIndexSpan = document.getElementById('heatindex');
var c1 = -42.379;
var c2 = 2.04901523;
var c3 = 10.14333127;
var c4 = -0.22475541;
var c5 = -0.00683783;
var c6 = -0.05481717;
var c7 = 0.00122874;
var c8 = 0.00085282;
var c9 = -0.00000199;
function heatIndex(temperature, humidity) {
    return c1 + (c2 * temperature) + (c3 * humidity) + (c4 * temperature * humidity) + (c5 * temperature * temperature) + (c6 * humidity * humidity) + (c7 * temperature * temperature * humidity) + (c8  * temperature * humidity * humidity) + (c9 * temperature * temperature * humidity * humidity);
}
heatIndexSpan.textContent = heatIndex(96, 50) + '°';