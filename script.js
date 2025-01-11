const temp = document.querySelector(".temp")
const time = document.querySelector(".days")
const cel = document.querySelector(".cel")
const fah = document.querySelector(".fah")
const weeklyTem=document.querySelector(".temperature")
const weeklyTem1=document.querySelector(".temperature1")
const weeklyTem2=document.querySelector(".temperature2")
const weeklyTem3=document.querySelector(".temperature3")
const weeklyTem4=document.querySelector(".temperature4")
const weeklyTem5=document.querySelector(".temperature5")
const weeklyTem6=document.querySelector(".temperature6")
const locationElem = document.querySelector(".location")
const todayTem=document.querySelector(".heat")
const todayTem1=document.querySelector(".heat1")
const todayTem2=document.querySelector(".heat2")
const todayTem3=document.querySelector(".heat3")
const todayTem4=document.querySelector(".heat4")
const todayTem5=document.querySelector(".heat5")
const todayTem6=document.querySelector(".heat6")
const todayTem7=document.querySelector(".heat7")
const todayTem8=document.querySelector(".heat8")
const todayTem9=document.querySelector(".heat9")
const todayTem10=document.querySelector(".heat10")
const todayTem11=document.querySelector(".heat11")
const todayTem12=document.querySelector(".heat12")
const todayTem13=document.querySelector(".heat13")
const todayTem14=document.querySelector(".heat14")
const todayTem15=document.querySelector(".heat15")
const todayTem16=document.querySelector(".heat16")
const todayTem17=document.querySelector(".heat17")
const todayTem18=document.querySelector(".heat18")
const todayTem19=document.querySelector(".heat19")
const todayTem20=document.querySelector(".heat20")
const todayTem21=document.querySelector(".heat21")
const todayTem22=document.querySelector(".heat22")
const todayTem23=document.querySelector(".heat23")
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
const city = "kurnool"; // Replace with the city of your choice
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
  //code for today timings temperature
  const timeForecast = res.days;
  const dailyTemp = timeForecast.slice(0, 20);
  // selecting the weekly temperature
  const Temps = [
    todayTem,
    todayTem1,
    todayTem2,
    todayTem3,
    todayTem4,
    todayTem5,
    todayTem6,
    todayTem7,
    todayTem8,
    todayTem9,
    todayTem10,
    todayTem11,
    todayTem12,
    todayTem13,
    todayTem14,
    todayTem15,
    todayTem16,
    todayTem17
  ];
  for (let i = 0; i < dailyTemp.length; i++) {
    const dayData = dailyTemp[i];
    const tempElement = Temps[i];
    if (tempElement) {
      tempElement.textContent = `${dayData.temp}°C`;
    }
  }

  // code for search button
  // const input=document.querySelector(".input")
  // const input1=res.resolvedAddress.city
    // display location (city)
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
    const perc = document.querySelector(".perc")
    const percValue = res.currentConditions.precip;
    perc.textContent = ` Perc-${percValue}%`;
    const condition = document.querySelector(".condition")
    condition.textContent = `${res.currentConditions.conditions}`; 
    const humidity = document.querySelector(".humidity")
    humidity.textContent = `${res.currentConditions.humidity}%`;
    const windstatus = document.querySelector(".wind")
    windstatus.textContent = `${res.currentConditions.windspeed} km/h`;
    const uvindex = document.querySelector(".uvindex")
    uvindex.textContent = `${res.currentConditions.uvindex}`;
    const sunriset = document.querySelector(".sun")
    sunriset.textContent = `${res.currentConditions.sunrise}`;
    const visibility = document.querySelector(".visibility")
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

