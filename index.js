var apiKey="42a389a52e71639279ecad0b6cb62886";
var apiUrl='https://api.openweathermap.org/data/2.5/weather?q=tokyo';
var searchBox=document.querySelector(".search input");
var searchBtn=document.querySelector(".search button");
var wheatherIcon=document.querySelector('.weather-icon');
async function checkWeather(city){
        var response= await fetch(apiUrl+city+'&APPID=${apiKey}');
       if(response.status=404){
        document.querySelector(".error").style.display= "block";  
        document.querySelector(".weather").style.display= "none";  
    }
    else{
        var data= await response.json();
        document.querySelector('.city').innerHTML=data.name;
        document.querySelector('.temp').innerHTML=Math.round(data.main.temp)+" °C";
        document.querySelector('.humid').innerHTML=data.main.humidity+" %";
        document.querySelector('.wind').innerHTML=data.wind.speed+" Km/h";
        if(data.weather[0].main=='Clouds'){
            wheatherIcon.src="clouds.png";
        }
        else if(data.weather[0].main=='Clear'){
            wheatherIcon.src="clear.png";
        }
        else if(data.weather[0].main=='Rain'){
            wheatherIcon.src="rain.png";
        }
        else if(data.weather[0].main=='Drizzle'){
            wheatherIcon.src="drizzle.png";
        }
        else if(data.weather[0].main=='Mist'){
            wheatherIcon.src="mist.png";
        }
        document.querySelector(".weather").style.display='block';
    }
       
}
searchBtn.addEventListener('click',()=>{
    checkWeather(searchBox.value);
});