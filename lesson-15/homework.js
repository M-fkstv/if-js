const formEl = document.getElementById("form");
const fileEl = document.getElementById("file");
const imgEl = document.createElement("img");

imgEl.setAttribute("src", "");
imgEl.setAttribute("alt", "");

document.body.appendChild(imgEl);

fileEl.addEventListener("change", async (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  // debugger;
  const promise = new Promise((resolve) => {
    reader.addEventListener("load", (e) => {
      imgEl.setAttribute("src", e.target.result);
      imgEl.setAttribute("alt", file.name);
      // imgEl.style.cssText = `
      // width: 200px;
      // height: 200px;
      // margin-left: 100px;
      // `;
      resolve(e.target.result);
    });
    reader.readAsDataURL(file);
  });
});

formEl.addEventListener("submit", async (event) => {
  event.preventDefault();

  const body = new FormData(formEl);
  const reader = new FileReader();

  const promise = new Promise((resolve) => {
    reader.addEventListener("load", (e) => {
      resolve(e.target.result);
    });
  });

  const fetchOptions = {
    method: "POST",
    body,
  };

  console.log(body.get("file")); //IMPORTANT!!!

  const res = await fetch(
    "https://fe-student-api.herokuapp.com/api/file",
    fetchOptions
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((result) => result)
    .catch((error) => console.log(error.message));

  console.log("res", res);
});
