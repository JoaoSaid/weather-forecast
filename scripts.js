const key = "b46d42ebaef83499ba13391ac6065517";

function insertData(dataReceived){
    console.log(dataReceived);
    document.querySelector(".cityName").innerHTML = "Weather in " + dataReceived.name;
    document.querySelector(".temp").innerHTML = Math.floor(dataReceived.main.temp) + "°C";
    document.querySelector(".forecast-text").innerHTML = dataReceived.weather[0].description;
    document.querySelector(".forecast-image").src = `https://openweathermap.org/img/wn/${dataReceived.weather[0].icon}.png`
    

    

}

async function searchCity(cityFunc){

    const dataReceived = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityFunc}&appid=${key}&units=metric`).then(answer => answer.json());

    insertData(dataReceived);
}

function searchClick(){
    const cityFunc = document.querySelector(".city").value;

    searchCity(cityFunc);
    
}