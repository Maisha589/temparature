const API_KEY = "c2d4733a09b9ed816b007f0082e6d784";
const searchTemparature = () => {
    const city = document.getElementById("cityName").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemparature(data));

}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemparature = temparature => {
    setInnerText("city", temparature.name);
    setInnerText("temparature", temparature.main.temp);
    setInnerText("condition", temparature.weather[0].main);
    // set weather icon
    const url = `http://openweathermap.org/img/wn/${temparature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById("weather-icon");
    imgIcon.setAttribute("src", url);
}