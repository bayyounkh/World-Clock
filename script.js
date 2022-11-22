function updateCurrentTime() {
  //Hamburg
  let hamburgElement = document.querySelector('#hamburg');
  let hamburgDate = hamburgElement.querySelector('.date');
  let hamburgTime = hamburgElement.querySelector('.time');
  let hamburgCurrentTime = moment().tz('Europe/Hamburg');

  hamburgDate.innerHTML = hamburgCurrentTime.format('MMMM Do YYYY');
  hamburgTime.innerHTML = hamburgCurrentTime.format('HH:mm:ss');
  //New York
  let newYorkElement = document.querySelector('#new-york');
  let newYorkDate = newYorkElement.querySelector('.date');
  let newYorkTime = newYorkElement.querySelector('.time');
  let newYorkCurrentTime = moment().tz('America/New_York');

  newYorkDate.innerHTML = newYorkCurrentTime.format('MMMM Do YYYY');
  newYorkTime.innerHTML = newYorkCurrentTime.format('HH:mm:ss');

  //Damascus
  let damascusElement = document.querySelector('#damascus');
  let damascusDate = damascusElement.querySelector('.date');
  let damascusTime = damascusElement.querySelector('.time');
  let damascusCurrentTime = moment().tz('Asia/Damascus');

  damascusDate.innerHTML =  damascusCurrentTime.format('MMMM Do YYYY');
  damascusTime.innerHTML = damascusCurrentTime.format('HH:mm:ss');
}

function addCity(event) {
    let cityTimeZone = event.target.value;
    let cityName = cityTimeZone.replace('_', ' ').split('/')[1];
    let cityTime = moment().tz(cityTimeZone);
    let cities = document.querySelector("#cities");
    cities.innerHTML = `<div class='city'>
    <div>
    <h2>${cityName}</h2>
    <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("HH:mm:ss")}</div>
    </div>`;

}
function getCurrentLocation(event) {
    let location = moment.tz.guess().split('/')[1];

    currentLocation.innerHTML = `${location} ${
      moment().format('HH:mm:ss')}
    `;
}
let currentLocation = document.querySelector('#location');
currentLocation.addEventListener("click", getCurrentLocation)

updateCurrentTime();
setInterval(updateCurrentTime, 1000);

let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", addCity);
