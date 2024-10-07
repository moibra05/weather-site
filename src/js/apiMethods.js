import { domHandler } from "./domMethods";

export const apiHandler = (function (){

  function processUrl(location) {
    const locationParts = location.split(" ");
    return locationParts.join("%20");
  }

  function conditionsConstructor(section) {
    if(section == "currentConditions"){

    }
    return {
      temperature: data.currentConditions.temp,
      feelslike: data.currentConditions.feelslike,
      preciptype: data.currentConditions.preciptype,
      conditions: data.currentConditions.conditions,
      sunrise: data.currentConditions.sunrise,
      sunset: data.currentConditions.sunset,
    }
  }

  function extractWeatherData(data) {
    return {
      address: data.resolvedAddress,
      currentConditions: {
        temperature: data.currentConditions.temp,
        feelslike: data.currentConditions.feelslike,
        preciptype: data.currentConditions.preciptype,
        conditions: data.currentConditions.conditions,
        sunrise: data.currentConditions.sunrise,
        sunset: data.currentConditions.sunset,
      }
    }
  }

  async function getWeatherData(location) {
    try {
      const url = processUrl(location);
      const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${url}?unitGroup=metric&include=current&key=MUA2C8Z3Z62WNA7QZU3KXWHN4&contentType=json`, {mode: 'cors'});
      
      
      const result = await response.json();
      const formattedResult = result;
      return formattedResult;
    } catch (error) {
        domHandler.showError();
    }
  }
  
  return {
    getWeatherData
  }
})();