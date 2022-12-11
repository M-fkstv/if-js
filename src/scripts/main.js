const adultAdd = document.getElementById("adult-add");
const adultRemove = document.getElementById("adult-remove");
const adultOut = document.getElementById("adults-output");

const childrenAdd = document.getElementById("children-add");
const childrenRemove = document.getElementById("children-remove");
const childrenOut = document.getElementById("children-output");

const roomAdd = document.getElementById("room-add");
const roomRemove = document.getElementById("room-remove");
const roomOut = document.getElementById("room-out");

const adultQuantity = document.getElementById("adults");
const roomQuantity = document.getElementById("room");
const childrenQuantity = document.getElementById("children");

const selectChildrenAge = document.createElement("select");
selectChildrenAge.classList.add("children__age");
const options = new Array(17)
  .fill(0)
  .map((item, index) => `<option>${index} years old</option>`)
  .join("");
selectChildrenAge.innerHTML = options;
selectChildrenAge.after(document.querySelector(".children__input--subtitle"));

const personForm = document.querySelector(".form__person");
const scrollToTop = document.querySelector(".stt");
const persons = document.querySelector(".persons");

document.addEventListener("scroll", () => {
  if (window.scrollY >= 1000) {
    scrollToTop.style.cssText = `display: block`;
  } else {
    scrollToTop.style.cssText = `display: none`;
  }
});

scrollToTop.addEventListener("click", () => {
  window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
});

personForm.addEventListener(
  "click",
  (event) => {
    console.log("target", event.target);
    console.log("currentTarget", event.currentTarget);

    if (!persons.classList.contains("active")) {
      persons.classList.add("active");
    } else {
      persons.classList.remove("active");
    }

    // persons.classList.toggle("toggle"); // Основной вариант
    // event.currentTarget.classList.toggle("toggle");
  },
  { capture: true }
);
//
// document.body.addEventListener(
//   "click",
//   (event) => {
//     // ДОДЕЛАТЬ!!!!!
//
//     if (event.target !== personForm) {
//       document.querySelector(".persons__inputs").classList.remove("active"); // если форму поменять на div
//     }
//   },
//   { capture: true }
// );

adultOut.textContent = 2;
childrenOut.textContent = 0;
roomOut.textContent = 1;

adultAdd.addEventListener("click", () => {
  let adultClicks = adultOut.textContent;
  if (adultClicks < 30) {
    adultClicks++;
    adultOut.textContent = adultClicks;
    adultQuantity.value = adultClicks;
  }
  if (adultClicks === 30) {
    adultAdd.classList.add("inputs__button--disabled");
  }
  if (adultClicks > 1) {
    adultRemove.classList.remove("inputs__button--disabled");
  }
});

adultRemove.addEventListener("click", () => {
  let adultClicks = adultOut.textContent;
  if (adultClicks > 1) {
    adultClicks--;
    adultOut.textContent = adultClicks;
    adultQuantity.value = adultClicks;
  }
  if (adultClicks === 1) {
    adultRemove.classList.add("inputs__button--disabled");
  }
  if (adultClicks < 30) {
    adultAdd.classList.remove("inputs__button--disabled");
  }
});

childrenAdd.addEventListener("click", () => {
  let childrenClicks = childrenOut.textContent;
  if (childrenClicks < 10) {
    childrenClicks++;
    childrenOut.textContent = childrenClicks;
    childrenQuantity.value = childrenClicks;
    // selectChildrenAge.classList.remove("children__active");
  }
  if (childrenClicks >= 10) {
    childrenAdd.classList.add("inputs__button--disabled");
  }
  if (childrenClicks >= 0 && childrenClicks <= 10) {
    selectChildrenAge.classList.add("children__active");

    document
      .querySelector(".children__input--subtitle")
      .classList.add("children__active");
    document
      .querySelector(".children__input--subtitle")
      .appendChild(selectChildrenAge);
  }
  if (childrenClicks > 1 && childrenClicks < 10) {
    const newSelect = selectChildrenAge.cloneNode(true);
    selectChildrenAge.after(newSelect);
  }

  if (childrenClicks === 1) {
    childrenRemove.classList.remove("inputs__button--disabled");
  }
});

childrenRemove.addEventListener("click", () => {
  let childrenClicks = childrenOut.textContent;

  if (childrenClicks > 0) {
    childrenClicks--;
    childrenOut.textContent = childrenClicks;
    childrenQuantity.value = childrenClicks;
  }
  if (childrenClicks === 0) {
    childrenAdd.classList.remove("children__active");
    childrenRemove.classList.add("inputs__button--disabled");
    document
      .querySelector(".children__input--subtitle")
      .classList.remove("children__active");
    document
      .querySelector(".children__age")
      .classList.remove("children__active");
  }
  if (childrenClicks < 10) {
    childrenAdd.classList.remove("inputs__button--disabled");
  }

  document
    .querySelector(".children__input--subtitle")
    .removeChild(
      document.querySelector(".children__input--subtitle").lastChild
    );
});

roomAdd.addEventListener("click", () => {
  let roomClicks = roomOut.textContent;
  if (roomClicks < 30) {
    roomClicks++;
    roomOut.textContent = roomClicks;
    roomQuantity.value = roomClicks;
  }
  if (roomClicks === 30) {
    roomAdd.classList.add("inputs__button--disabled");
  }

  if (roomClicks > 1) {
    roomRemove.classList.remove("inputs__button--disabled");
  }
});

roomRemove.addEventListener("click", () => {
  let roomClicks = roomOut.textContent;
  if (roomClicks > 1) {
    roomClicks--;
    roomOut.textContent = roomClicks;
    roomQuantity.value = roomClicks;
  }
  if (roomClicks === 1) {
    roomRemove.classList.add("inputs__button--disabled");
  }
  if (roomClicks < 30) {
    roomAdd.classList.remove("inputs__button--disabled");
  }
});

const btn = document.querySelector(".form__submit");
const search = document.querySelector(".form__city--search");
const url = new URL("https://if-student-api.onrender.com/api/hotels");

// import { imgRender } from "./functions.js"; // imgRender() выводит элементы в debugger, но не отрисовывает на странице

const myFirstAsyncFunc = async () => {
  const childrenQuan = Array.from(
    document.querySelector(".children__input--subtitle").children
  ).map((item) => {
    return item.value.replace(/\D/g, "");
  });

  url.searchParams.set("search", `${search.value}`);
  url.searchParams.set("adults", `${adultQuantity.value}`);
  url.searchParams.set("children", `${childrenQuan.join(",")}`);
  url.searchParams.set("rooms", `${roomQuantity.value}`);
  try {
    await fetch(url)
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        const main = document.querySelector(".main__wrapper");
        const offer = document.querySelector(".offer");

        if (main.nextElementSibling !== offer) {
          main.nextElementSibling.remove();
        }

        if (search.value !== "") {
          const available = document.createElement("section");
          available.classList.add("homes");
          document.body.insertBefore(available, offer);

          const h2Text = document.createElement("h2");
          h2Text.textContent = "Available hotels";
          h2Text.classList.add("h2-text");
          h2Text.classList.add("h2-text:hover:before");
          available.appendChild(h2Text);

          if (data.length === 0) {
            const wrongInput = document.createElement("h5");
            wrongInput.textContent = "Sorry, something goes wrong";
            wrongInput.classList.add("h5");
            h2Text.appendChild(wrongInput);
          }
          const homesExamples = document.createElement("div");
          homesExamples.classList.add(
            "homes__examples",
            "col-lg-12",
            "col-xs-6",
            "col-md-12"
          );
          homesExamples.style.cssText = `flex-wrap: wrap`;
          available.appendChild(homesExamples);

          data.forEach((item) => {
            // imgRender() выводит элементы в debugger, но не отрисовывает на странице
            homesExamples.innerHTML += `
                 <div id="${item.id}" class="homes__examples__icons col-lg-3 col-md-3 col-xs-3">
                    <img src="${item.imageUrl}"  alt="${item.name}, ${item.city}" class="homes__examples__icon col-lg-3" />
                        <div class="homes__description">
                             <p class="homes__description--text">${item.name}</p>
                             <p class="homes__description--text">${item.city}, ${item.country}</p>
                        </div>
                 </div>
              `;
          });
        }
      });
  } catch (error) {
    console.error(error);
  }
};

btn.addEventListener("click", myFirstAsyncFunc);

btn.addEventListener("click", () => {
  if (persons.classList.contains("active")) {
    persons.classList.remove("active");
  }
});

// lesson-14

import { render } from "./functions.js";

if (sessionStorage.length === 0) {
  fetch("https://if-student-api.onrender.com/api/hotels/popular")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status}  - ${response.statusText}`);
      }
      return response.json();
    })

    .then((data) => {
      render(data);
      sessionStorage.setItem("homes", JSON.stringify(data));
    });
} else {
  sessionStorage.getItem("homes");
  render(JSON.parse(sessionStorage.getItem("homes")));
}

// lesson-16
// сортировка массива отелей по имени

export function bubblesObj(arr) {
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
