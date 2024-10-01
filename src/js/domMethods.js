import { apiHandler } from "./apiMethods";

export const domHandler = (function(){
  const submitButton = document.querySelector("#search-button");

  function getLocationFromForm() {
    const searchBox = document.querySelector("#location");
    const location = searchBox.value;
    const weatherData = apiHandler.getWeatherData(location);
    weatherData.then(result => console.log(result)) 
  }

  submitButton.addEventListener("click", getLocationFromForm);
})();