import { apiHandler } from "./apiMethods";

export const domHandler = (function(){
  const locationInput = document.querySelector("#location");
  const locationText = document.querySelector(".location-text");
  const locationRequest = document.querySelector("form");

  function changeWeatherText(weatherData) {
    console.log(weatherData)
    locationText.textContent = weatherData.address;
  }

  function showError() {
    if(locationInput.validity.valid){
      locationText.textContent = "Location was not found!";
    }
  }

  async function displayWeather(location) {
    try {
      const data = await apiHandler.getWeatherData(location);
      changeWeatherText(data);
    } catch(e) {
      showError();
    }
  }

  function getLocationWeatherData(event) {
    event.preventDefault();

    if(!locationInput.validity.valueMissing){
      const location = locationInput.value;
      displayWeather(location);
      locationText.textContent = "Loading...";
    } else {
      showError();
    }

  }

  locationRequest.addEventListener("submit", getLocationWeatherData);

  return {
    showError
  }
})();