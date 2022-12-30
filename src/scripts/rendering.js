// lesson-16
// сортировка массива отелей по имени
function sortHotelsByName(arr) {
  const bubblesArr = [...arr];
  for (let i = 0; i < bubblesArr.length - 1; i++) {
    for (let j = 0; j < bubblesArr.length - 1 - i; j++) {
      if (bubblesArr[j].name > bubblesArr[j + 1].name) {
        const temp = bubblesArr[j + 1];
        bubblesArr[j + 1] = bubblesArr[j];
        bubblesArr[j] = temp;
      }
    }
  }
  return bubblesArr;
}

export function imgRender(data, elem) {
  sortHotelsByName(data).forEach((item) => {
    elem.innerHTML += `
                 <div id="${
                   item.id
                 }" class="homes__examples__icons swiper-slide  col-lg-3 col-md-3 col-xs-3">
                    <img src="${
                      item.imageUrl
                    }"  alt="${"is this legal???"}" class="col-lg-3 homes__examples__icon " />
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

  homes.innerHTML += `<h2 class="h2-text">Homes guests loves</h2>`;

  if (data.length > 4) {
    homes.innerHTML += `  
                <div class="additional-wrapper">
                  <div class="s-button-prev"></div>
                  <div class="s-button-next"></div>
                  <div class="homes__examples swiper col-lg-12 col-xs-6 col-md-12"></div>
               </div>
                `;
  } else {
    homes.innerHTML += `<div class="homes__examples swiper col-lg-12 col-xs-6 col-md-12"></div>`;
  }

  const homesExamples = document.querySelector(".homes__examples");

  const swipeWrapper = document.createElement("div");
  swipeWrapper.classList.add("swiper-wrapper");
  swipeWrapper.id = "swiper#2";
  homesExamples.appendChild(swipeWrapper);

  imgRender(data, swipeWrapper);
}
