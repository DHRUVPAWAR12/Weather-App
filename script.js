
const apiKey = "";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=pune";

const searchbox = document.querySelector(".search input") ;
const searchbtn =document.querySelector(".search button"); 
const weatherIcon =document.querySelector('.weather-icon');
async function checkwhether(city){
    const response = await fetch(apiurl + city + `appid =${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display ='block';
        document.querySelector(".weather").style.display ='none';

    }else{
        var data = await response.json();
   

   document.querySelector(".city").innerHTML = data.name ;
   document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C" ;
   document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
   document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + " km/h"; 

   if(data.weather[0].main == "Clouds"){
       weatherIcon.src ="Images/clouds.png";
   }else  if(data.weather[0].main == "Clear"){
       weatherIcon.src ="Images/clear.png";
   }else  if(data.weather[0].main == "Rain"){
       weatherIcon.src ="Images/rain.png";
   }else  if(data.weather[0].main == "Drizzle"){
       weatherIcon.src ="Images/drizzle.png";
   }else  if(data.weather[0].main == "Misr"){
       weatherIcon.src ="Images/mist.png";
   }else  if(data.weather[0].main == "snow"){
       weatherIcon.src ="Images/snow.png";
   }
   document.querySelector(".weather").style.display='block';
   document.querySelector(".error").style.display="none";
}
    }

searchbtn.addEventListener("click", ()=> {
    checkwhether(searchbox.value);
});

