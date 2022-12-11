import { key, appId } from "./keys.js";

const baseUrl = `https://api.openweathermap.org/data/2.5/weather?`;
// const baseUrl1 = `https://api.openweathermap.org/data/2.5/forecast/daily?`;

// document.getElementById("search").addEventListener("click", async () => {
//   const response = await fetch(`${baseUrl}q=minsk&units=metric&apikey=${key}`);
//   const result = await response.json();
//   console.log("result -", result);
// });

const generateCommonWeatherRequest = (city) =>
  `${baseUrl}q=${city}&units=metric&apikey=${key}`;
// const generateWeeklyWeather = (city) =>
//   `${baseUrl1}q=${city}&cnt=3&units=metric&appid=${appId}`;
// document.getElementById("img").classList.add("hide");

const getWeather = async () => {
  const wrapper = document.getElementById("wrapper");
  const loading = document.getElementById("loading");

  wrapper.classList.add("hide");
  // document.getElementById("img").classList.add("hide");
  loading.classList.remove("hide");

  const city = document.getElementById("city")?.value;
  const response = await fetch(generateCommonWeatherRequest(city));
  const result = await response.json();
  // const weeklyResponse = await fetch(generateWeeklyWeather(city));
  // const weeklyResult = weeklyResponse.json();
  // drawn info
  console.log("result -", result);
  generateTodayWeather(result);
  // GenWeatherForDays(weeklyResult);

  wrapper.classList.remove("hide");
  document.getElementById("img").classList.remove("hide");
  loading.classList.add("hide");
};

const generateTodayWeather = (result) => {
  document.getElementById("name").innerHTML = result.name;
  const icon = result.weather[0]?.icon;
  document
    .getElementById("img")
    .setAttribute("src", `https://openweathermap.org/img/wn/${icon}@2x.png`);
  document.getElementById("temp").innerHTML = `${result.main.temp} C`;
  document.getElementById(
    "feel"
  ).innerHTML = `Feels like: ${result.main.feels_like} C`;
  document.getElementById("max").innerHTML = `Max: ${result.main.temp_max} C`;
  document.getElementById("min").innerHTML = `Min: ${result.main.temp_min} C`;
  document.getElementById("visibility").innerHTML = `Visibility: ${Number(
    result.visibility / 1000
  )} km `;
  document.getElementById(
    "wind"
  ).innerHTML = `Speed wind ${result.wind.speed} `;
};

// const GenWeatherForDays = (result) => {
//   const weekly = document.getElementById("weekly");
//   const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fr", "Sut"];
//   const listInfo = result.list;
//   const addInfo = document.getElementsByClassName("add-info");
//
//   while(addInfo.length > 0){
//     addInfo[0].parentNode.removeChild(addInfo[0]);
//   }
//
//   for (let i = 0; i < listInfo.length; i++) {
//     const day = new Date(listInfo[i]?.dt * 1000).getDay();
//     const temp = listInfo[i]?.temp?.day;
//     const currDay = days[day];
//     const humidity = listInfo[i]?.humidity;
//     const windSpeed = listInfo[i]?.speed;
//     const icon = listInfo[i].weather[0]?.icon;
//     const src = `http://openweathermap.org/img/wn${icon}@2x.png`;
//     const markup = `
//          <div class="add-info">
//             <img src=${src} alt="none"/>
//             <div>${currDay}</div>
//             <div>${temp} C</div>
//             <div>${humidity} %</div>
//             <div>${windSpeed} m/s</div>
//          <div>
//     `;
//
//     weekly.insertAdjacentElement("beforeend", markup);
//   }
// };

document.getElementById("search").addEventListener("click", getWeather);
