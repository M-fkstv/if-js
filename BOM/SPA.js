const home = `
   <h1>Home</h1>
   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam asperiores assumenda at autem consequuntur corporis debitis delectus dolores, dolorum, eos esse et ex facilis harum id ipsam laborum maiores molestias nam nostrum odio quidem reiciendis reprehenderit sapiente sed similique sit totam unde vel velit veniam vitae voluptas voluptatem voluptatum.</p>
`; // лучше выносить в отдельные файлы(pages) а потом все импортировать, экспортировать
const courses = `
   <h1>Courses</h1>
   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam asperiores assumenda at autem consequuntur corporis debitis delectus dolores, dolorum, eos esse et ex facilis harum id ipsam laborum maiores molestias nam nostrum odio quidem reiciendis reprehenderit sapiente sed similique sit totam unde vel velit veniam vitae voluptas voluptatem voluptatum.</p>
`; // лучше выносить в отдельные файлы(pages) а потом все импортировать, экспортировать
const about = `
   <h1>About</h1>
   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam asperiores assumenda at autem consequuntur corporis debitis delectus dolores, dolorum, eos esse et ex facilis harum id ipsam laborum maiores molestias nam nostrum odio quidem reiciendis reprehenderit sapiente sed similique sit totam unde vel velit veniam vitae voluptas voluptatem voluptatum.</p>
`; // лучше выносить в отдельные файлы(pages) а потом все импортировать, экспортировать
const pageNotFound = `
   <h1>404</h1>
   <p>PAGE NOT FOUND</p>
`; // лучше выносить в отдельные файлы(pages) а потом все импортировать, экспортировать

const router = {
  "/": home,
  "/courses": courses,
  "/about": about,
  "/404": pageNotFound,
};

console.log(router);
class SPA {
  // лучше выносить в отдельный файл, а потом все импортировать, экспортировать
  constructor(root, menu, router) {
    this.root = root;
    this.menu = menu;
    this.router = router;
  }

  onNavigate(event) {
    event.preventDefault();
    const { href } = event.currentTarget;
    const path = href.replace(location.origin, "");

    localStorage.setItem("path", href);
    history.pushState({}, path, href);
    this.render(path);
  }

  init() {
    Array.from(this.menu.children).forEach((link) => {
      if (link.id !== "history") {
        link.addEventListener("click", this.onNavigate.bind(this));
      }
    });
    this.render(location.pathname);
  }

  render(path) {
    console.log(localStorage.getItem("path"));
    if (this.router[path]) {
      this.root.innerHTML = this.router[path];
    } else {
      this.root.innerHTML = this.router["/404"];
    }
  }
}

const app = new SPA( // single page application
  document.getElementById("root"),
  document.getElementById("menu"),
  router
);

app.init();

const historyLink = document.getElementById("history");

historyLink.addEventListener("click", (event) => {
  event.preventDefault();
  history.back(); // history.back(-1);
});
