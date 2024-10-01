export const apiHandler = (function (){
  function weatherData(location, temperature) {
    return {
      location,
      temperature,
    }
  }

  function processUrl(location) {
    const locationParts = location.split(" ");
    return locationParts.join("%20");
  }

  function extractWeatherData(data) {
    return {
      address: data.address,
      currentConditions: {
        temperature: data.currentConditions.temp,
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
      const formattedResult = extractWeatherData(result);
      return formattedResult;
    } catch (error) {
      console.error('There was an error fetching the data:', error);
    }
  }
  
  return {
    getWeatherData
  }
})();