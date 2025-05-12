const routes = {
  beranda: {
    html: `
      <section class="beranda">
        <h1>Halo, Saya [Namamu]</h1>
        <p>Selamat datang di portfolio saya.</p>
      </section>
    `,
    css: "css/beranda.css",
    js: "js/beranda.js"
  },
  project: {
    html: `
      <section class="project">
        <h1>Project Saya</h1>
        <div class="project-list"></div>
      </section>
    `,
    css: "css/project.css",
    js: "js/project.js"
  },
  music: {
    html: `
      <section class="music">
        <h1>Music Favorite</h1>
      </section>
    `,
    css: "css/music.css",
    js: "js/music.js"
  }
};

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const page = e.target.dataset.page;
    loadPage(page);
  });
});

function loadPage(page) {
  const content = document.getElementById("content");
  const pageStyle = document.getElementById("page-style");
  const pageScript = document.getElementById("page-script");

  content.innerHTML = routes[page].html;
  pageStyle.setAttribute("href", routes[page].css);

  const newScript = document.createElement("script");
  newScript.src = routes[page].js;
  newScript.id = "page-script";

  pageScript.replaceWith(newScript);
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("go-beranda");
  if (btn) {
    btn.addEventListener("click", () => {
      loadPage("beranda");
    });
  }
});
