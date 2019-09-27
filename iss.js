
const request = require('request');

const fetchMyIP = function(callback) {
  request(`https://api.ipify.org?format=json`, (error, response, body) => {

    const data = JSON.parse(body);
    callback(null, data.ip);
  }
  );
};

const fetchCoordsByIP = function(ip, callback) {
  request(`https://ipvigilante.com/${ip}`, (error, response, body) => {

    const { latitude, longitude } = JSON.parse(body).data;
    callback(null, { latitude, longitude });
  });
};

const fetchISSFlyOverTimes = function(coords, callback) {
  const url = `http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`;

  request(url, (error, response, body) => {
    const passes = JSON.parse(body).response;
    callback(null, passes);
  });
};


module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes };
