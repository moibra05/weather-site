import { apiHandler } from "./apiMethods";

export const domHandler = (function(){
  const locationInput = document.querySelector("#location");
  const locationRequest = document.querySelector("form");
  const errorText = document.querySelector(".error");

  function changeWeatherText(weatherData) {
    console.log(weatherData);
  }

  function showError() {
    if(locationInput.validity.valid){
      errorText.textContent = "Location was not found!";
    } else {
      errorText.textContent = "";
    }
  }

  function getLocationWeatherData(event) {
    event.preventDefault();

    if(!locationInput.validity.valueMissing){
      errorText.textContent = "";
      const location = locationInput.value;
      const weatherData = apiHandler.getWeatherData(location);
      weatherData.then(result => changeWeatherText(result));
      console.log("Loading...");
    } else {
      showError();
    }

  }

  locationRequest.addEventListener("submit", getLocationWeatherData);

  return {
    showError
  }
})();