


import {WeatherAPI} from "./weather-api.js";
class WeatherApp {

  addListeners(){

    // Get a reference to text-field
    // keypress
    // Italy [Enter]
    // event.key == "Enter"

    const searchBoxElement = document.querySelector(".search-box");
  
    searchBoxElement.weatherAppObj = this;

    searchBoxElement.addEventListener("keypress", this.handleWeatherAPIInvocation);
  }

  async handleWeatherAPIInvocation(event){

        // Call the Weather-API.
      // buildURL
      // invokeURL
    // responseJSON

    if (event.key == "Enter"){

      const eventTarget = event.target;
      const userSuppliedLocation = eventTarget.value;

      const weatherAPIObj = new WeatherAPI();
      weatherAPIObj.buildURL(userSuppliedLocation);
      const responseJSON = await weatherAPIObj.invokeURL();
    
      const weatherAppObj = eventTarget.weatherAppObj;

      weatherAppObj.updateUI(responseJSON);
    }

  }


  updateUI(responseJSON){


    const locationValue = `${responseJSON.name}, ${responseJSON.sys.country}`;
    
    const locationElement = document.querySelector(".location .city");
    locationElement.innerText = locationValue;

    // responseJSON
    // extract all the values
      // Get a reference to the HTML fields
      // Update the HTML fields
  }

}

export {WeatherApp}