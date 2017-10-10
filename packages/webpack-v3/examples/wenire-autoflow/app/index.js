window.onload = function() {
  console.log('wenire autoflow');
};
const xhr = new XMLHttpRequest();
xhr.open('GET', 'http://data.gate.io/api2/1/pairs', true);
xhr.send();
