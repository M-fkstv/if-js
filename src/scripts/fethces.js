import { imgRender, sectionRender } from "./rendering.js";
import { adultQuantity, roomQuantity } from "./main.js";

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
        sectionRender(data);
        sessionStorage.setItem("homes", JSON.stringify(data));
      });
  } else {
    sessionStorage.getItem("homes");
    sectionRender(
      JSON.parse(sessionStorage.getItem("homes")),
      document.querySelector(".destinations")
    );
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
        console.log(url);
        const main = document.querySelector(".main__wrapper");
        const offer = document.querySelector(".offer");

        if (main.nextElementSibling !== offer) {
          main.nextElementSibling.remove();
        }

        if (search.value !== "") {
          const available = document.createElement("section");
          available.classList.add("homes");
          document.body.insertBefore(available, offer);

          // const h2Text = document.createElement("h2");
          available.innerHTML = `<h2 class="h2-text">Available hotels</h2>`;
          // available.appendChild(h2Text);

          if (data.length === 0) {
            available.innerHTML = `<h2 class="h2-text">Available hotels
                  <h5 class="h5">Please, enter Your destination or hotel name</h5>
                </h2>`;
          }
          const availableExamples = document.createElement("div");
          availableExamples.classList.add(
            "homes__examples",
            "col-lg-12",
            "col-xs-6",
            "col-md-12"
          );
          availableExamples.style.cssText = `flex-wrap: wrap`;
          available.appendChild(availableExamples);

          imgRender(data, availableExamples);
        }
      });
  } catch (error) {
    console.error(error);
  }
};
