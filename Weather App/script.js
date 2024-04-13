const input = document.getElementById("user-input");
const weather = document.querySelector(".weather");
const details = document.querySelector(".details");

const apiKey = "be328ddd8eb8c931ef2af05b8c956853";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
// const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric`
let city = document.querySelector(".city");
let weatherImg = document.querySelector(".weather-img");
let temp = document.querySelector(".temp");
let humidity = document.querySelector(".humidity");
let windSpeed = document.querySelector(".wind");

let searchBtn = document.getElementById("searchBtn");


async function checkWeather(cityInput) {
    const response = await fetch(apiUrl + cityInput + `&appid=${apiKey}`)
    try{
        let data = await response.json();
        console.log(data);
    
        city.textContent = data.name;
        temp.textContent = Math.round(data.main.temp) + "°C" ;
        humidity.textContent = Math.round(data.main.humidity) + "%";
        windSpeed.textContent = Math.round(data.wind.speed) + " kmph"
    
        if(data.weather[0].main == "Clear"){
            weatherImg.src = "images/clear.png"
        }
        if(data.weather[0].main == "Mist"){
            weatherImg.src = "images/mist.png"
        }
        if(data.weather[0].main == "Clouds"){
            weatherImg.src = "images/clouds.png"
        }
        if(data.weather[0].main == "Drizzle"){
            weatherImg.src = "images/drizzle.png"
        }
        if(data.weather[0].main == "Rain"){
            weatherImg.src = "images/rain.png"
        }
        if(data.weather[0].main == "Snow"){
            weatherImg.src = "images/snow.png"
        }
    }
    catch(err) {
        alert("Please enter the valid city!")
        input.value = ""
        console.log(err)
    }
    


}

input.addEventListener("keydown",(e)=>{
    if(e.key == "Enter"){
        checkWeather(input.value);
        weather.style.display = "flex";
    details.style.display = "flex";
    }
})

searchBtn.addEventListener("click",()=>{
    checkWeather(input.value);
    weather.style.display = "flex";
    details.style.display = "flex";

})

