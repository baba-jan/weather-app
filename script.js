const temp = document.querySelector(".temp");
const temperature = document.querySelector(".temperature");
const time = document.querySelector(".days");
const icon = document.querySelector(".sunicon");
const condition = document.querySelector(".condition");
const perc = document.querySelector(".perc");
const cel = document.querySelector(".cel");
const fah = document.querySelector(".fah");
const tem=document.querySelector(".tem")
const uvindex = document.querySelector(".uvindex");
const record = document.querySelector(".record");
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
const city = "jammu kashmir"; // Replace with the city of your choice
const tempApiKey = "EJ6UBL2JEQGYB3AA4ENASN62J";
const weatherApiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${tempApiKey}&contentType=json`;
fetch(weatherApiUrl)
  .then((response) => response.json())
  .then((res) => {
    console.log(res);
    // display location (city)
    const btn=document.querySelector(".loca")
    const location=res.address;
    const loca1=res.address
    btn.textContent = ` ${location}`; // Display location
    //code to get temperature in Celsius
    const temperatureCelsius = res.currentConditions.temp;
    //for icons
    const btn1=res.currentConditions
    setCurrentIcon(btn1.icon)
    console.log(btn1.icon);
    const btn2=res.currentConditions
    displayUvIndex(btn2.index)
    console.log(btn2.index);
    
    //for temperature
    temp.textContent = `${temperatureCelsius}°C`;
    temperature.textContent = `${res.currentConditions.temp}°C`;
    // perc.textContent=`${res.currentConditions}`
    condition.textContent = `${res.currentConditions.conditions}`; 
    humidity.textContent = `${res.currentConditions.humidity}%`;
    windstatus.textContent = `${res.currentConditions.windspeed} km/h`;
    uvindex.textContent = `${res.currentConditions.uvindex}`;
    // record.textContent = `${res.currentConditions.record}`;
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
  })
  .catch((err1) => {
    console.log(err1);
  });
// Convert Celsius to Fahrenheit
function celToFah(temperature) {
  return ((temperature * 9) / 5 + 32).toFixed(1);
}
//Celsius to Fahrenheit conversion
cel.addEventListener("click", () => {
  const celsiusTemp = parseFloat(temp.textContent); // Assuming the temperature is in Celsius
  const fahrenheitTemp = celToFah(celsiusTemp);
  fah.textContent = `${fahrenheitTemp}°F`; 
  // tem.textContent=`${fahrenheitTemp}°F`
}); 
//code to get result acc to values in today's highlights
function displayUvIndex(index) {
  const uvElement = document.querySelector('.record');  // Element to display UV index category
  const uvValue = 10;  // Example UV index (this will be fetched dynamically from the API later)

  let uvCategory = "";
  let uvColor = "";

  // Determine UV category and color based on uvValue
  if (uvValue >= 0 && uvValue <= 2) {
    uvCategory = "Low";
    uvColor = "green";  // Green for Low
  } else if (uvValue >= 3 && uvValue <= 5) {
    uvCategory = "Moderate";
    uvColor = "yellow";  // Yellow for Moderate
  } else if (uvValue >= 6 && uvValue <= 7) {
    uvCategory = "High";
    uvColor = "orange";  // Orange for High
  } else if (uvValue >= 8 && uvValue <= 10) {
    uvCategory = "Very High";
    uvColor = "red";  // Red for Very High
  } else if (uvValue > 10) {
    uvCategory = "Extreme";
    uvColor = "purple";  // Purple for Extreme
  }

  // Update the text and background color of the 'uvindex' element
  uvElement.textContent = `${uvCategory}`;
  uvElement.style.backgroundcolor = uvColor;  // Set background color based on UV category
  // uvElement.style.color = "white";  // Make text color white for better visibility
}

// // Call the function initially to display UV index based on fetched data
// displayUvIndex();

//code for icon images
function  setCurrentIcon(icons){
  const currIcon = document.querySelector(".upIcon");

  if (icons === "partly-cloudy-day") {
      currIcon.src = "https://i.ibb.co/PZQXH8V/27.png";
  } else if (icons === "partly-cloudy-night") {
      currIcon.src = "https://i.ibb.co/Kzkk59k/15.png";
  } else if (icons === "rain") {
      currIcon.src = "https://i.ibb.co/kBd2NTS/39.png";
  } else if (icons === "clear-day") {
      currIcon.src = "https://i.ibb.co/rb4rrJL/26.png";
  } else if (icons === "clear-night") {
      currIcon.src = "https://i.ibb.co/1nxNGHL/10.png";
  }
}
