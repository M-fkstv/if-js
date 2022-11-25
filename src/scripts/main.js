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

const selectChildrenAge = document.querySelector(".children__age");
const options = new Array(17) // ДОДЕЛАТЬ!!!!!!!!!
  .fill(0)
  .map((item, index) => `<option>${index} years old</option>`)
  .join("");

const personForm = document.querySelector(".form__person");

personForm.addEventListener(
  "click",
  (event) => {
    console.log("target", event.target);
    console.log("currentTarget", event.currentTarget);
    const persons = document.querySelector(".persons");
    persons.classList.toggle("toggle");
    // event.currentTarget.classList.toggle("toggle");
  },
  { capture: false }
);

adultOut.textContent = 2;
childrenOut.textContent = 0;
roomOut.textContent = 1;

adultAdd.addEventListener("click", () => {
  let adultClicks = adultOut.textContent;
  if (adultClicks < 30) {
    adultClicks++;
    adultOut.textContent = adultClicks;
    adultQuantity.attributes[4].value = adultClicks;
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
    adultQuantity.attributes[4].value = adultClicks;
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
    childrenQuantity.attributes[4].value = childrenClicks;
    // selectChildrenAge.classList.remove("children__active");
  }
  if (childrenClicks >= 10) {
    childrenAdd.classList.add("inputs__button--disabled");
  }
  if (childrenClicks >= 0 && childrenClicks <= 10) {
    selectChildrenAge.classList.add("children__active");

    // document.querySelector(".children__input--subtitle").innerHTML = `
    //   <select> ${options}</select>`;
    document
      .querySelector(".children__input--subtitle")
      .classList.add("children__active");
  }
  if (childrenClicks > 1 && childrenClicks < 10) {
    const newSelect = selectChildrenAge.cloneNode(true);
    selectChildrenAge.after(newSelect);
    // document.querySelector(".children__input--subtitle").innerHTML += `
    //   <select> ${options}</select>`;
  }

  if (childrenClicks === 1) {
    childrenRemove.classList.remove("inputs__button--disabled");
  }
});

childrenRemove.addEventListener("click", (event) => {
  let childrenClicks = childrenOut.textContent;
  if (childrenClicks > 0) {
    childrenClicks--;
    childrenOut.textContent = childrenClicks;
    childrenQuantity.attributes[4].value = childrenClicks;
    console.log(event);

    console.log(event.currentTarget);
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
  if (
    selectChildrenAge.nextElementSibling.classList.contains("children__active")
  )
    selectChildrenAge.nextElementSibling.remove();
});

roomAdd.addEventListener("click", () => {
  let roomClicks = roomOut.textContent;
  if (roomClicks < 30) {
    roomClicks++;
    roomOut.textContent = roomClicks;
    roomQuantity.attributes[4].value = roomClicks;
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
    roomQuantity.attributes[4].value = roomClicks;
  }
  if (roomClicks === 1) {
    roomRemove.classList.add("inputs__button--disabled");
  }
  if (roomClicks < 30) {
    roomAdd.classList.remove("inputs__button--disabled");
  }
});

// lesson-12

// fetch("https://fe-student-api.herokuapp.com/api/hotels/popular")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`${response.status}  - ${response.statusText}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     const destinations = document.querySelector(".destinations");
//     const homes = document.createElement("section");
//     homes.classList.add("homes");
//     document.body.insertBefore(homes, destinations);
//
//     const h2Text = document.createElement("h2");
//     h2Text.textContent = "Homes guests loves";
//     h2Text.classList.add("h2-text");
//     h2Text.classList.add("h2-text:hover:before");
//     homes.appendChild(h2Text);
//
//     const homesExamples = document.createElement("div");
//     homesExamples.classList.add(
//       "homes__examples",
//       "col-lg-12",
//       "col-xs-6",
//       "col-md-12"
//     );
//     homesExamples.style.cssText = `flex-wrap: wrap`;
//     homes.appendChild(homesExamples);
//
//     data.forEach((item) => {
//       // createDiv(item);
//       const homesExamplesIcons = document.createElement("div");
//       homesExamplesIcons.setAttribute("id", `${item.id}`);
//       homesExamplesIcons.classList.add(
//         "homes__examples__icons",
//         "col-lg-3",
//         "col-md-3",
//         "col-xs-3"
//       );
//
//       homesExamples.appendChild(homesExamplesIcons);
//
//       const homesExamplesIcon = document.createElement("img");
//       homesExamplesIcon.setAttribute("src", `${item.imageUrl}`);
//       homesExamplesIcon.className = "homes__examples__icon";
//       homesExamplesIcons.appendChild(homesExamplesIcon);
//
//       const homesDescription = document.createElement("div");
//       homesDescription.className = "homes__description";
//       homesExamplesIcons.appendChild(homesDescription);
//
//       const homesDescriptionText = document.createElement("p");
//       homesDescriptionText.className = "homes__description--text";
//       homesDescriptionText.innerHTML = `${item.name}`;
//       homesDescription.appendChild(homesDescriptionText);
//
//       const homesDescriptionTextLastChild = document.createElement("p");
//       homesDescriptionTextLastChild.classList.add(
//         "homes__description--text:last-of-type"
//       );
//       homesDescriptionTextLastChild.style.cssText = `color: #bfbfbf;
//       margin-top: 20px;
//       font-size: 24px;
//       `;
//       homesDescriptionTextLastChild.innerHTML = `${item.city}, ${item.country}`;
//       homesDescriptionText.after(homesDescriptionTextLastChild);
//       homesDescription.appendChild(homesDescriptionTextLastChild);
//     });
//   });
//   Lesson-13

const btn = document.querySelector(".form__submit");
const search = document.querySelector(".form__city--search");
const url = "https://fe-student-api.herokuapp.com/api/hotels";

// import { imgRender } from "./functions.js";

const myFirstAsyncFunc = async () => {
  try {
    const url1 = url + "?search=" + search.value;
    await fetch(url1)
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
            // imgRender(item);  // everything falling with function here
            const homesExamplesIcons = document.createElement("div");
            homesExamplesIcons.setAttribute("id", `${item.id}`);
            homesExamplesIcons.classList.add(
              "homes__examples__icons",
              "col-lg-3",
              "col-md-3",
              "col-xs-3"
            );

            homesExamples.appendChild(homesExamplesIcons);

            const homesExamplesIcon = document.createElement("img");
            homesExamplesIcon.setAttribute("src", `${item.imageUrl}`);
            homesExamplesIcon.className = "homes__examples__icon";
            homesExamplesIcons.appendChild(homesExamplesIcon);

            const homesDescription = document.createElement("div");
            homesDescription.className = "homes__description";
            homesExamplesIcons.appendChild(homesDescription);

            const homesDescriptionText = document.createElement("p");
            homesDescriptionText.className = "homes__description--text";
            homesDescriptionText.innerHTML = `${item.name}`;
            homesDescription.appendChild(homesDescriptionText);

            const homesDescriptionTextLastChild = document.createElement("p");
            homesDescriptionTextLastChild.classList.add(
              "homes__description--text:last-of-type"
            );
            homesDescriptionTextLastChild.style.cssText = `color: #bfbfbf;
            margin-top: 20px;
            font-size: 24px;
            `;
            homesDescriptionTextLastChild.innerHTML = `${item.city}, ${item.country}`;
            homesDescriptionText.after(homesDescriptionTextLastChild);
            homesDescription.appendChild(homesDescriptionTextLastChild);
          });
        }
      });
  } catch (error) {
    console.error(error);
  }
};

btn.addEventListener("click", myFirstAsyncFunc);

// lesson-14

import { render } from "./functions.js";

if (sessionStorage.length === 0) {
  fetch("https://fe-student-api.herokuapp.com/api/hotels/popular")
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
