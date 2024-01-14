

import {WeatherAPI} from "./weather-api.js"

function testBuildURL(){

  const weatherAPIObj = new WeatherAPI();

  weatherAPIObj.buildURL("Japan");

}

testBuildURL();