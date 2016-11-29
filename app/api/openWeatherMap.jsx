var axios = require('axios');

const OPEN_WEATHER_MOP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=a54e15cef7ac247ecd57155c8c67f507&units=metric';

// a54e15cef7ac247ecd57155c8c67f507
module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MOP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res){
      if (res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }else{
        return res.data.main.temp;
      }
    }, function(err){
      throw new Error(err.response.data.message);
    });
  }
}
