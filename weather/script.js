const apikey="&appid=252bb52bffaf17b90877e87ba70a219b"
const apiurl="https://api.openweathermap.org/data/2.5/weather?q="

const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weathericon=document.querySelector(".weather-icon");

async function check(city){
    const response= await fetch(apiurl+city+apikey);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp -278);
    document.querySelector(".humidity").innerHTML =data.main.humidity+"%";
    document.querySelector(".wind").innerHTML =data.wind.speed+"km/h";

    document.querySelector(".deg").innerHTML =data.wind.deg+"°";
    document.querySelector(".sunrise").innerHTML ="Sunrise : "+data.sys.sunrise+"°";
    document.querySelector(".sunset").innerHTML ="Sunset : "+data.sys.sunset+"°";

    // document.querySelector(".lon").innerhtml="Lon: " + data.coord.lon;
    // document.querySelector(".lat").innerhtml="Lat: "+ data.coord.lat;

if(data.weather[0].main=="Clouds"){
    weathericon.src="img/clouds.png";
}

else if(data.weather.main=="Clear"){
    weathericon.src="img/clear.png";
}

else if(data.weather.main=="Drizle"){
    weathericon.src="img/drizle.png";
}

else if(data.weather.main=="Humidity"){
    weathericon.src="img/humidity.png";
}

else if(data.weather.main=="Mist"){
    weathericon.src="img/mist.png";
}

else if(data.weather.main=="Rain"){
    weathericon.src="img/rain.png";
}

else if(data.weather.main=="Snow"){
    weathericon.src="img/snow.png";
}

else if(data.weather.main=="Wind"){
    weathericon.src="img/wind.png";
}






    
}


searchbtn.addEventListener("click",()=>{
    check(searchbox.value);
})