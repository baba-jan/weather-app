







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