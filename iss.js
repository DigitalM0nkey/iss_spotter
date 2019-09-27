
const request = require('request');

const fetchMyIP = function(callback) {
  request(`https://api.ipify.org?format=json`, (error, response, body) => {

    const data = JSON.parse(body);
    callback(null, data.ip);

  }
  );
};

module.exports = { fetchMyIP };
