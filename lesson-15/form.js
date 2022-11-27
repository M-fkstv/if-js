//const formEl = document.getElementById("form");
// const canvasEl = document.getElementById("canvas");
// const ctx = canvasEl.getContext("2d");
//
// canvasEl.addEventListener("mousemove", (event) => {
//   ctx.lineTo(event.clientX - 100, event.clientY - 50);
//   ctx.stroke();
// });
// formEl.addEventListener("submit", async (event) => {
//   event.preventDefault();
//   const imageBlob = await new Promise(
//     (resolve) => canvasEl.toBlob(resolve, "image/png") // преобразование содержимого canvas в blob
//   );
//   const imageDataURL = canvasEl.toDataURL("image/png");
//   console.log(imageBlob);
//   console.log(imageDataURL);
//
//   const body = new FormData(formEl);
//   body.append("image", imageBlob);
//
//   console.log(body.get("image"));
// });
const formEl = document.getElementById("form");
const imgBtn = document.getElementById("image-button");
const fileEl = document.getElementById("file");
const imgEl = document.createElement("img");

imgEl.setAttribute("src", "");
imgEl.setAttribute("alt", "");

document.body.appendChild(imgEl);

imgBtn.addEventListener("click", () => {
  fileEl.click();
});

fileEl.addEventListener("change", async (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  const promise = new Promise((resolve) => {
    reader.addEventListener("load", (e) => {
      imgEl.setAttribute("src", e.target.result);
      imgEl.setAttribute("alt", file.name);
      resolve(e.target.result);
    });
    reader.readAsDataURL(file);
  });
  const content = await promise;

  console.log(imgEl);
  // console.log(content); //long ugly string
});

formEl.addEventListener("submit", async (event) => {
  event.preventDefault();

  const body = new FormData(formEl);

  const name = body.get("name");
  const surname = body.get("surname");
  const json = JSON.stringify({ name, surname });

  body.append("json", json);

  const blob = new Blob([json], { type: "application / json" }); // first part is an array(always), second part - type of data

  body.append("blob", blob);

  const reader = new FileReader();
  const data = {};

  const promise = new Promise((resolve) => {
    reader.addEventListener("load", (e) => {
      // console.log(e.target.result);
      // console.log(new Uint8Array(e.target.result));
      // console.log(reader);
      resolve(e.target.result);
    });
  });

  for (const key of body.keys()) {
    // debugger
    data[key] = body.get(key);
  }
  // data.file can be replaced to blob
  // reader.readAsArrayBuffer(data.file);
  reader.readAsBinaryString(blob); // output: eyJuYW1lIjoiVXNlciIsInN1cm5hbWUiOiJVc2VyIHN1cm5hbWUifQ==
  // reader.readAsDataURL(blob);
  // reader.readAsText(blob);

  const content = await promise;
  const base64 = btoa(content);
  const jsonFromBase64 = atob(base64);

  console.log("eyJuYW1lIjoiVXNlciIsInN1cm5hbWUiOiJVc2VyIHN1cm5hbWUifQ=="); // this is content
  console.log(base64);
  console.log(jsonFromBase64);
  debugger;

  const fetchOptions = {
    method: "POST",
    body,
  };

  // console.log(event);
  // console.log(fetchOptions); //{method: 'POST', body: FormData}
  // console.log(body); //FormData{}
  // console.log(body.get("name")); //User
  console.log(body.get("file")); //IMPORTANT!!!
  // console.log(Array.from(body.keys())); //['name', 'surname', 'file']
  // console.log(Array.from(body.values()));
  // console.log(Array.from(body.entries())); //[Array(2), Array(2), Array(2)] //0:(2) ['name', 'User']  //1:(2) ['surname', 'User surname']  //2:(2) ['file', File]
  // console.log(body.entries()); //Iterator{}
  //
  // body.forEach((value, key, formData) => {
  //   console.log(value);
  //   console.log(key);
  //   console.log(formData);
  //   console.log("============");
  // });
  // console.log(body.getAll("file"));

  // debugger;

  const res = await fetch("/api", fetchOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((result) => result)
    .catch((error) => console.log(error.message));
});
