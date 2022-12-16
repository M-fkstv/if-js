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

// export function sectionRender(data, block) {
//   //data, block name, nextSection, data
//   const destinations = document.querySelector(".destinations");
//   const homes = document.createElement("section");
//   homes.classList.add("homes");
//   document.body.insertBefore(homes, destinations);
//
//   // const h2Text = document.createElement("h2");
//   homes.innerHTML = `<h2 class="h2-text">${block}</h2>`;
//   // homes.appendChild(h2Text);
//
//   block = document.createElement("div");
//   block.classList.add("homes__examples", "col-lg-12", "col-xs-6", "col-md-12");
//   block.style.cssText = `flex-wrap: wrap`;
//   homes.appendChild(block);
//   // imgRender(data, homes);
//
//   //   const section = document.createElement("section");
//   //   section.classList.add("homes");
//   //   section.innerHTML = `
//   //     <h2 class="h2-text">${name}</h2>
//   //
//   // </div>
//   //
//   //   `;
//   //
//   //   const div = document.createElement("div");
//   //   div.classList.add("homes__examples", "col-lg-12", "col-xs-6", "col-md-12");
//   //   div.style.cssText = `flex-wrap: wrap`;
//   //   section.appendChild(div);
//   //
//   //   imgRender(data, div);
//   //
//   //   nextSection.insertAdjacentElement("beforebegin", section);
//
//   // imgRender(data, section);
// }

export function sectionRender(data) {
  const destinations = document.querySelector(".destinations");
  const homes = document.createElement("section");
  homes.classList.add("homes");
  document.body.insertBefore(homes, destinations);

  // const h2Text = document.createElement("h2");
  homes.innerHTML = `<h2 class="h2-text">Homes guests loves</h2>`;
  // homes.appendChild(h2Text);

  const homesExamples = document.createElement("div");
  homesExamples.classList.add(
    "homes__examples",
    "col-lg-12",
    "col-xs-6",
    "col-md-12"
  );
  homesExamples.style.cssText = `flex-wrap: wrap`;
  homes.appendChild(homesExamples);

  imgRender(data, homesExamples);
}
