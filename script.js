const temp = document.querySelector(".temp")
const time = document.querySelector(".days")
//current time code
function newClock(){
const timer = document.querySelector('.days');
const currentTime = new Date();
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
  if (hours >= 12) {
  }
  if (hours > 12) {
    hours = hours- 12;
  }
  if (hours === 0) {
    hours = 12;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
   timer.textContent = hours + ":" + minutes;
}
setInterval(newClock, 1000);
newClock();

// weeks
let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
//Current Day Code





fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=EJ6UBL2JEQGYB3AA4ENASN62J&contentType=json").then((data)=>{
    return data.json()
}).then((res)=>{console.log(res);
}).catch((err)=>{console.log(err);
})

fetch("https://geolocation-db.com/json/").then((data)=>{
    return data.json()
}).then((res)=>{console.log(res);
}).catch((err)=>{console.log(err);
})