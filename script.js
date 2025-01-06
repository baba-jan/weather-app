const temp = document.querySelector(".temp");
const time = document.querySelector(".days");
const icon = document.querySelector(".sunicon");
const condition = document.querySelector(".condition");
const perc = document.querySelector(".perc");
const cel = document.querySelector(".cel");
const fah = document.querySelector(".fah");
const uvindex = document.querySelector(".uvindex");
const uvindex1=document.querySelector(".record")
const windstatus = document.querySelector(".wind");
const sunriset = document.querySelector(".sun");
const humidity = document.querySelector(".humidity");
const visibility = document.querySelector(".visibility");
const airquality = document.querySelector(".airqua");

// Function to display current time and day of the week
function newClock() {
  const timer = document.querySelector('.days');
  const currDate = new Date();
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDay = daysOfWeek[currDate.getDay()];
  const currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  
  if (hours > 12) {
    hours = hours - 12;
  }
  if (hours === 0) {
    hours = 12;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  timer.textContent = `${currentDay}, ${hours}:${minutes}`;
}
setInterval(newClock, 1000);
newClock();

// Fetch current weather based on city or geolocation
const city = "Ananthapur" // Replace with the city of your choice
const tempApiKey = "EJ6UBL2JEQGYB3AA4ENASN62J";
const weatherApiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${tempApiKey}&contentType=json`;

fetch(weatherApiUrl)
  .then((response) => response.json())
  .then((res) => {
    console.log(res);

    // Extract temperature in Celsius
    const temperatureCelsius = res.currentConditions.temp;
    
    // Display temperature in Celsius
    temp.textContent = `${temperatureCelsius}°C`;

    // You can also extract other weather data and display it
    condition.textContent = res.currentConditions.conditions; // Weather condition like "Clear"
    humidity.textContent = `${res.currentConditions.humidity}%`;
    windstatus.textContent = `${res.currentConditions.windspeed} km/h`;
    uvindex.textContent = `${res.currentConditions.uvindex}`;
    uvindex1.textContent=`${res.currentConditions.record}`
    sunriset.textContent = ` ${res.currentConditions.sunrise}`;
    visibility.textContent=`${res.currentConditions.visibility}`;
    airquality.textContent=`${res.currentConditions.airquality}`;

  })
  .catch((err) => {
    console.log(err);
  });

// Get location (for geolocation-based weather)
fetch("https://geolocation-db.com/json/")
  .then((data1) => data1.json())
  .then((res1) => {
    console.log(res1);
  })
  .catch((err1) => {
    console.log(err1);
  });

// Convert Celsius to Fahrenheit
function celToFah(temperature) {
  return ((temperature * 9) / 5 + 32).toFixed(1);
}

// Example usage of Celsius to Fahrenheit conversion
cel.addEventListener("click", () => {
  const celsiusTemp = parseFloat(temp.textContent); // Assuming the temperature is in Celsius
  const fahrenheitTemp = celToFah(celsiusTemp);
  fah.textContent = `${fahrenheitTemp}°F`; // Display Fahrenheit
});
