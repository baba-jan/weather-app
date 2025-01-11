const temp = document.querySelector(".temp");
// const temperature = document.querySelector(".temperature");
const time = document.querySelector(".days");
const icon = document.querySelector(".sunicon");
const condition = document.querySelector(".condition");
const cel = document.querySelector(".cel");
const fah = document.querySelector(".fah");
const tem=document.querySelector(".tem")
const uvindex = document.querySelector(".uvindex");
const windstatus = document.querySelector(".wind");
const sunriset = document.querySelector(".sun");
const humidity = document.querySelector(".humidity");
const visibility = document.querySelector(".visibility");
const airquality = document.querySelector(".airqua");
const perc = document.querySelector(".perc");
const weeklyTem=document.querySelector(".temperature")
const weeklyTem1=document.querySelector(".temperature1")
const weeklyTem2=document.querySelector(".temperature2")
const weeklyTem3=document.querySelector(".temperature3")
const weeklyTem4=document.querySelector(".temperature4")
const weeklyTem5=document.querySelector(".temperature5")
const weeklyTem6=document.querySelector(".temperature6")
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
// code for location in search
// const search=document.querySelector(".locbtn")
// search.addEventListener( "submit",(e) =>{
//   e.()
//   const input=document.querySelector(".input")
//   if(input){
//     res1(input)
//   }else{
//      alert("please enter the city name")
//   }
// })
// Fetch current weather based on city or geolocation
const city = "new york"; // Replace with the city of your choice
const tempApiKey = "EJ6UBL2JEQGYB3AA4ENASN62J";
const weatherApiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${tempApiKey}&contentType=json`;
fetch(weatherApiUrl)
  .then((response) => response.json())
  .then((res) => {
    console.log(res);
    //code for weekly temperature
    const dailyForecast = res.days;
    const dailyTemps = dailyForecast.slice(0, 7);
    // selecting the weekly temperature
    const weeklyTemps = [
      weeklyTem,  
      weeklyTem1, 
      weeklyTem2, 
      weeklyTem3,
      weeklyTem4, 
      weeklyTem5,
      weeklyTem6
    ];
    for (let i = 0; i < dailyTemps.length; i++) {
      const dayData = dailyTemps[i];
      const tempElement = weeklyTemps[i];
      if (tempElement) {
        tempElement.textContent = `${dayData.temp}°C`;
      }
    }
  
  // code for search button
  // const input=document.querySelector(".input")
  // const input1=res.resolvedAddress.city
    //display location (city)
    const btn=document.querySelector(".loca")
    const location=res.resolvedAddress;
    // const loca1=res.address
    btn.textContent=`${location}`; // Display location
    //code to get temperature in Celsius
    const temperatureCelsius=res.currentConditions.temp;
    //for icons
    const btn1=res.currentConditions
    setCurrentIcon(btn1.icon)
    console.log(btn1.icon)
    //uv Index
    const btn2=res.currentConditions
    displayUvIndex(btn2.index)
    console.log(btn2.index);
    //for temperature
    temp.textContent = `${temperatureCelsius}°C`;
    // perc.textContent=`${res.currentConditions.}`
    const percValue = res.currentConditions.precip; // Check the API response for the correct property
    perc.textContent = ` Perc-${percValue}%`;
    // temperature.textContent = `${res.currentConditions.temp}°C`;
    condition.textContent = `${res.currentConditions.conditions}`; 
    humidity.textContent = `${res.currentConditions.humidity}%`;
    windstatus.textContent = `${res.currentConditions.windspeed} km/h`;
    uvindex.textContent = `${res.currentConditions.uvindex}`;
    // const record = document.querySelector(".record");
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
// cel.addEventListener("click", () => {
//   const celsiusTemp = parseFloat(temp.textContent); // Assuming the temperature is in Celsius
//   const fahrenheitTemp = celToFah(celsiusTemp);
//   fah.textContent = `${fahrenheitTemp}°F`; 
//   // tem.textContent=`${fahrenheitTemp}°F`
// }); 
function displayUvIndex(index) {
  const uvElement = document.querySelector('.record'); 
  const uvValue = "6"
  let uvCategory = "";
  // UV category  based on uvValue
  if (uvValue >= 0 && uvValue <= 2) {
    uvCategory = "Low";
  } else if (uvValue >= 3 && uvValue <= 5) {
    uvCategory = "Moderate";
  } else if (uvValue >= 6 && uvValue <= 7) {
    uvCategory = "High";
  } else if (uvValue >= 8 && uvValue <= 10) {
    uvCategory = "Very High";
  } else if (uvValue > 10) {
    uvCategory = "Extreme";
  }
  uvElement.textContent = `${uvCategory}`; 
}
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
//code for weekly temperature

