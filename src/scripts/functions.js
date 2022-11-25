const homesExamples = document.createElement("div");

export function imgRender(item) {
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

  data.forEach((item) => {
    // createDiv(item);
    imgRender(item);
  });
}
