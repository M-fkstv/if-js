import { imgRender, render } from "./rendering.js";
import { adultQuantity, roomQuantity } from "./main.js";
import { swiperConfig } from "./swiper.js";

const baseUrl = new URL(
  "https://if-student-api.onrender.com/api/hotels/popular"
);
const fetchOptions = {
  method: "GET",
  headers: {
    "content-type": "application/json",
  },
};

export const popularHotelsRender = async () => {
  if (sessionStorage.length === 0) {
    await fetch(baseUrl, fetchOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`${response.status}  - ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        render(data);
        sessionStorage.setItem("homes", JSON.stringify(data));
        // imgRender(data)
        swiperConfig("swiper#2");
      });
  } else {
    sessionStorage.getItem("homes");
    render(JSON.parse(sessionStorage.getItem("homes")));
    // imgRender(data)
    swiperConfig("swiper#2");
  }
};

//---------------------------------------------------

const url = new URL("https://if-student-api.onrender.com/api/hotels");
const search = document.querySelector(".form__city--search");

const urlSetParams = () => {
  const dateOut = Date.parse(document.querySelector(".form__date--out").value);
  const dateFrom = Date.parse(document.querySelector(".form__date--in").value);
  const childrenQuan = Array.from(
    document.querySelector(".children__input--subtitle").children
  ).map((item) => {
    return item.value.replace(/\D/g, "");
  });
  url.searchParams.set("search", `${search.value}`);
  url.searchParams.set("dateFrom", `${dateFrom}`);
  url.searchParams.set("dateTo", `${dateOut}`);
  url.searchParams.set("adults", `${adultQuantity.value}`);
  url.searchParams.set("children", `${childrenQuan.join(",")}`);
  url.searchParams.set("rooms", `${roomQuantity.value}`);
};

export const availableHotelsRender = async () => {
  urlSetParams();
  if (search.value === "") {
    return;
  }
  try {
    await fetch(url, fetchOptions)
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        console.log(data.length);
        console.log(url);
        const main = document.querySelector(".main__wrapper");
        const offer = document.querySelector(".offer");

        main.nextElementSibling !== offer
          ? main.nextElementSibling.remove()
          : false;

        if (search.value !== "") {
          const available = document.createElement("section");
          available.classList.add("homes");
          document.body.insertBefore(available, offer);

          available.innerHTML = `<h2 class="h2-text">Available hotels</h2>`;

          if (data.length > 4) {
            available.innerHTML += `
                <div class="additional-wrapper">
                  <div class="s-button-prev"></div>
                  <div class="s-button-next"></div>
                  <div class="homes__examples swiper col-lg-12 col-xs-6 col-md-12"></div>
               </div>
                `;
          } else {
            available.innerHTML += `<div class="homes__examples col-lg-12 col-xs-6 col-md-12"></div>`;
          }

          const availableExamples = document.querySelector(".homes__examples");

          if (data.length === 0) {
            available.innerHTML = `<h2 class="h2-text">Available hotels <h5 class="h5">Please, enter Your destination or hotel name</h5>
                </h2>`;
          }

          const swipeWrapper = document.createElement("div");
          swipeWrapper.id = "swiper#1";
          swipeWrapper.classList.add("swiper-wrapper");
          availableExamples.appendChild(swipeWrapper);

          imgRender(data, swipeWrapper);

          data.length > 4
            ? swiperConfig("swiper#1")
            : (swipeWrapper.style.cssText = ` gap: 16px`);
        }
      });
  } catch (error) {
    console.error(error);
  }
};
