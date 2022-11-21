function updateCurrentTime() {
  //Hamburg
  let hamburgElement = document.querySelector('#hamburg');
  let hamburgDate = hamburgElement.querySelector('.date');
  let hamburgTime = hamburgElement.querySelector('.time');
  let hamburgCurrentTime = moment().tz('Europe/Hamburg');

  hamburgDate.innerHTML = hamburgCurrentTime.format('MMMM Do YYYY');
  hamburgTime.innerHTML = hamburgCurrentTime.format('h:mm:ss');
  //New York
  let newYorkElement = document.querySelector('#new-york');
  let newYorkDate = newYorkElement.querySelector('.date');
  let newYorkTime = newYorkElement.querySelector('.time');
  let newYorkCurrentTime = moment().tz('America/New_York');

  newYorkDate.innerHTML = newYorkCurrentTime.format('MMMM Do YYYY');
  newYorkTime.innerHTML = newYorkCurrentTime.format('h:mm:ss');

  //Damascus
  let damascusElement = document.querySelector('#damascus');
  let damascusDate = damascusElement.querySelector('.date');
  let damascusTime = damascusElement.querySelector('.time');
  let damascusCurrentTime = moment().tz('Asia/Damascus');

  damascusDate.innerHTML =  damascusCurrentTime.format('MMMM Do YYYY');
  damascusTime.innerHTML = damascusCurrentTime.format('h:mm:ss');
}
updateCurrentTime();
setInterval(updateCurrentTime, 1000);