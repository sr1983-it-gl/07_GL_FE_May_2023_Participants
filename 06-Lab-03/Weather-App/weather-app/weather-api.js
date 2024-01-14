
// Declare a const for APP_ID / APP_KEY
// Declare a const for BASE_URL

class WeatherAPI{

  // Accept the locationName
  // units=metric
  // appid
  buildURL(locationName){

    // Make use of URL
    // 
    this.weatherAPIURL = new URL(BASE_URL);

    // q
    this.weatherAPIURL.searchParams.append("q", locationName);

    // units

    // appid 

  }

  invokeURL(){

  }

}