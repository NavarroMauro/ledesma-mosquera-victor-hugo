// JS Goes here - ES6 supported

// Say hello
// console.log("🦊 Hello! Edit me in src/js/app.js");

// From here start the title javascript animation (snapsvg)
const title = document.querySelector('svg.title');

// console.log(words[0]);

let path = Snap(title);
console.log(path);






// From here start the leaflet map
const map = L.map('map', {
    scrollWheelZoom: false
}).setView([53.550303, 9.992291], 10);

L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: 'abcd',
    ext: 'jpg',
    maxZoom: 13,
    minZoom: 13,
    scrollWheelZoom: false,
    zoomControl: false,
}).addTo(map);

// L.marker([53.550303, 9.992291]).addTo(map)
//     .bindPopup('HAMBURG')
//     .openPopup();