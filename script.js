const temp = document.querySelector(".temp")
const time = document.querySelector(".days")
const icon = document.querySelector(".sunicon");
const condition = document.querySelector(".condition")
const humidity = document.querySelector(".humidity")
const windstatus = document.querySelector(".wind")
const uvindex = document.querySelector(".uvindex")
const sunriset = document.querySelector(".sun")
const visibility = document.querySelector(".visibility")
const airquality=document.querySelector(".airqua")
const cel = document.querySelector(".cel")
const fah = document.querySelector(".fah")
const perc = document.querySelector(".perc")
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
// 
// Fetch current weather based on city or geolocation
const city = "odisha"; // Replace with the city of your choice
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
  const timeForecast = res.days[0].hours;
    const dailyTemp = timeForecast.slice(0, 24);
    const hour = [
      todayTem, todayTem1, todayTem2, todayTem3, todayTem4, todayTem5, todayTem6, todayTem7, todayTem8, todayTem9,
      todayTem10, todayTem11, todayTem12, todayTem13, todayTem14, todayTem15, todayTem16, todayTem17, todayTem18,
      todayTem19, todayTem20, todayTem21, todayTem22, todayTem23
    ];
    for (let i = 0; i < dailyTemp.length; i++) {
      const hourData = dailyTemp[i];
      const tempElement = hour[i];
      if (tempElement) {
        tempElement.textContent = `${hourData.temp}°C`;
      }
    }
 
  // code to display location 
    const btn=document.querySelector(".loca")
    const location=res.resolvedAddress;
    
    const loca1=res.address
    btn.textContent=`${location}`; // Display location
    
    //code to get temperature in Celsius
    const temperatureCelsius=res.currentConditions.temp;
    
    //for icons
    const btn1=res.currentConditions
    setCurrentIcon(btn1.icon)
    console.log(btn1.icon)
    
    // to display uv Index
    const btn2=res.currentConditions
    displayUvIndex(btn2.index)
    console.log(btn2.index);
    
    // code to uvindex
    const uvIndexValue = res.currentConditions.uvindex;
    displayUvIndex(uvIndexValue);

    //code to access humidity 
    const humidityValue=res.currentConditions.humidity;
    displayHumidity(humidityValue)

    //code to access visibility
    const visibilityValue1=res.currentConditions.visibility;
    displayVisibility(visibilityValue1)

    //code for today highlights
    temp.textContent = `${temperatureCelsius}°C`;
    const percValue = res.currentConditions.precip;
    perc.textContent = ` Perc-${percValue}%`;
    condition.textContent = `${res.currentConditions.conditions}`; 
    humidity.textContent = `${res.currentConditions.humidity}%`;
    windstatus.textContent = `${res.currentConditions.windspeed} km/h`;
    uvindex.textContent = `${res.currentConditions.uvindex}`;
    sunriset.textContent = `${res.currentConditions.sunrise}`;
    visibility.textContent = `${res.currentConditions.visibility}`;
    // airquality.textContent=`${res.currentConditions.airquality}`
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


// code for icons according to weekly temperature
// const weeklyIcon=document.querySelector(".img1")
// const weeklyIcon1=document.querySelector(".img2")
// const weeklyIcon2=document.querySelector(".img3")
// const weeklyIcon3=document.querySelector(".img4")
// const weeklyIcon4=document.querySelector(".img5")
// const weeklyIcon5=document.querySelector(".img6")
// const weeklyIcon6=document.querySelector(".img7")
// function  changeIcon(icons){
  // const currIcon =[
  //   weeklyIcon,weeklyIcon1,weeklyIcon2,weeklyIcon3,weeklyIcon4,weeklyIcon5,weeklyIcon6
  // ]
//   if (icons === "partly-cloudy-day") {
//       currIcon.src = "https://i.ibb.co/PZQXH8V/27.png";
//   } else if (icons === "partly-cloudy-night") {
//       currIcon.src = "https://i.ibb.co/Kzkk59k/15.png";
//   } else if (icons === "rain") {
//       currIcon.src = "https://i.ibb.co/kBd2NTS/39.png";
//   } else if (icons === "clear-day") {
//       currIcon.src = "https://i.ibb.co/rb4rrJL/26.png";
//   } else if (icons === "clear-night") {
//       currIcon.src = "https://i.ibb.co/1nxNGHL/10.png";
//   }
// }

//code to display uv index value category
function displayUvIndex(index) {
  const uvElement = document.querySelector('.record'); 
  let uvCategory = "";
  //Display UV category based on UV index value
  if (index >= 0 && index <= 2) {
    uvCategory = "Low";
  } else if (index >= 3 && index <= 5) {
    uvCategory = "Moderate";
  } else if (index >= 6 && index <= 7) {
    uvCategory = "High";
  } else if (index >= 8 && index <= 10) {
    uvCategory = "Very High";
  } else if (index > 10) {
    uvCategory = "Extreme";
  }

  uvElement.textContent = `${uvCategory}`;
}
//code to display humidity value
function displayHumidity(humidity){
  const humidityElement=document.querySelector('.record3')
  let humiValue='';
  if(humidity>=0 && humidity<30){
    humiValue='Low'
  }else if(humidity>=31 && humidity<60){
    humiValue='Modearte'
  }else if (humidity>=61 && humidity<70){
    humiValue='High'
  }else if (humidity>=71 && humidity<90){
    humiValue='Very High'
  }
  humidityElement.textContent=`${humiValue}`
}
//code to display visibility
function displayVisibility(visibility){
  const visibilityElement=document.querySelector(".record4")
  let visibilityValue='';
  if(visibility>=0 && visibility<=10){
    visibilityValue='Very Poor'
  }else if(visibility>=11 && visibility<=20){
    visibilityValue='Un Healthy'
  }else if(visibility>=21 && visibility<=30){
    visibilityValue='Fair'
  }else if(visibility>=31 && visibility<=40){
    visibilityValue='Clear Air'
  }
  visibilityElement.textContent=`${visibilityValue}`
}
