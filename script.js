const temp = document.querySelector(".temp");
const temperature = document.querySelector(".temperature");
const time = document.querySelector(".days");
const icon = document.querySelector(".sunicon");
const condition = document.querySelector(".condition");
const perc = document.querySelector(".perc");
const cel = document.querySelector(".cel");
const fah = document.querySelector(".fah");
const uvindex = document.querySelector(".uvindex");
const uvindex1 = document.querySelector(".record");
const windstatus = document.querySelector(".wind");
const sunriset = document.querySelector(".sun");
const humidity = document.querySelector(".humidity");
const visibility = document.querySelector(".visibility");
const airquality = document.querySelector(".airqua");
const locationElem = document.querySelector(".location"); // Element to display location

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
const city = "Ananthapur"; // Replace with the city of your choice
const tempApiKey = "EJ6UBL2JEQGYB3AA4ENASN62J";
const weatherApiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${tempApiKey}&contentType=json`;

fetch(weatherApiUrl)
  .then((response) => response.json())
  .then((res) => {
    console.log(res);
    // Extract and display location (city and country)
    // const location = res.address; // Location data (city, country)
    const btn=document.querySelector(".loca")
    const location=res.address;
    btn.textContent = ` ${location}`; // Display location
    
    // Extract temperature in Celsius
    const temperatureCelsius = res.currentConditions.temp;
    temp.textContent = `${temperatureCelsius}°C`;
    temperature.textContent = `${res.currentConditions.temp}°C`;
    // perc.textContent=`${res.currentConditions}`
    condition.textContent = `${res.currentConditions.conditions}`; 
    humidity.textContent = `${res.currentConditions.humidity}%`;
    windstatus.textContent = `${res.currentConditions.windspeed} km/h`;
    uvindex.textContent = `${res.currentConditions.uvindex}`;
    sunriset.textContent = `${res.currentConditions.sunrise}`;
    visibility.textContent = `${res.currentConditions.visibility}`;
  })
  .catch((err) => {
    console.log(err);
  });

// Get location (for geolocation-based weather)
fetch("https://geolocation-db.com/json/")
  .then((data1) => data1.json())
  .then((res1) => {
    console.log(res1);
    // Optionally, you can use this for fetching weather based on geolocation
    // const userLocation = `${res1.city}, ${res1.country_name}`;
    // locationElem.textContent = `Location: ${userLocation}`;
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
  // cel.textContent = `${celsiusTemp}°C`; 
}); 
