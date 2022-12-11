import { bubblesObj } from "./main.js";

const homesExamples = document.createElement("div");

export function imgRender(data) {
  bubblesObj(data).forEach((item) => {
    homesExamples.innerHTML += `
                 <div id="${
                   item.id
                 }" class="homes__examples__icons col-lg-3 col-md-3 col-xs-3">
                    <img src="${
                      item.imageUrl
                    }"  alt="${"is this legal???"}" class="homes__examples__icon col-lg-3" /> 
                        <div class="homes__description">
                             <p class="homes__description--text">${
                               item.name
                             }</p>
                             <p class="homes__description--text">${
                               item.city
                             }, ${item.country}</p>
                        </div>
                 </div>      
              `;
  });
}

export function render(data) {
  const destinations = document.querySelector(".destinations");
  const homes = document.createElement("section");
  homes.classList.add("homes");
  document.body.insertBefore(homes, destinations);

  const h2Text = document.createElement("h2");
  h2Text.textContent = "Homes guests loves";
  h2Text.classList.add("h2-text");
  h2Text.classList.add("h2-text:hover:before");
  homes.appendChild(h2Text);

  homesExamples.classList.add(
    "homes__examples",
    "col-lg-12",
    "col-xs-6",
    "col-md-12"
  );
  homesExamples.style.cssText = `flex-wrap: wrap`;
  homes.appendChild(homesExamples);

  imgRender(data);
}
