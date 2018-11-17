// JS Goes here - ES6 supported

// Say hello
// console.log("🦊 Hello! Edit me in src/js/app.js");

// From here start the title javascript animation from the title (snapsvg)
const title = document.querySelector('svg.title');
let path = Snap(title);


// HIGHTLIGHT BUTTON MENU FROM CURRENT SECTION
const links = document.querySelectorAll('.link');

links.forEach(anchor => {
    anchor.addEventListener('click', addActive);
})

function addActive(addAct) {
    const current = document.querySelector('.active');
    current.className = current.className.replace("active", "");
    addAct.target.className += "active";
}


// FROM HERE START THE LOCATION MAP
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


//CONTACT FORM VALIDATION

let userName = document.querySelector('input[name="name"]');
let userEmail = document.querySelector('input[name="email"]');
let userMessage = document.querySelector('textarea');
let enviarButton = document.querySelector('button');


let dataFromUser = 'tu madre';
let myRegex = /^\n{4}\-/i;

console.log(typeof(myRegex));

console.log(myRegex.test(dataFromUser));
