import { popularHotelsRender, availableHotelsRender } from "./fethces.js";

await popularHotelsRender();

const adultAdd = document.getElementById("adult-add");
const adultRemove = document.getElementById("adult-remove");
const adultOut = document.getElementById("adults-output");

const childrenAdd = document.getElementById("children-add");
const childrenRemove = document.getElementById("children-remove");
const childrenOut = document.getElementById("children-output");

const roomAdd = document.getElementById("room-add");
const roomRemove = document.getElementById("room-remove");
const roomOut = document.getElementById("room-out");

export const adultQuantity = document.getElementById("adults");
export const roomQuantity = document.getElementById("room");
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
  () => {
    persons.classList.toggle("active");
  },
  true
);
//
document.body.addEventListener("click", (event) => {
  if (
    !persons.contains(event.target) &&
    event.target.parentElement !== personForm &&
    event.target !== personForm
  ) {
    persons.classList.remove("active"); // если форму поменять на div
  }
});
document.body.addEventListener("keyup", (event) => {
  if (event.key === "Escape") {
    persons.classList.remove("active"); // если форму поменять на div
  }
});

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

btn.addEventListener("click", availableHotelsRender);
// blockRender();

btn.addEventListener("click", () => {
  if (persons.classList.contains("active")) {
    persons.classList.remove("active");
  }
});
