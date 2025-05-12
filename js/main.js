const routes = {
  beranda: {
    html: `
      <section class="beranda loading-state">
        <div class="spinner"></div>
        <h1>Halo, Saya [Namamu]</h1>
        <p>Selamat datang di portfolio saya.</p>
      </section>
    `,
    css: "css/beranda.css",
    js: "js/beranda.js"
  },
  project: {
    html: `
      <section class="project loading-state">
        <div class="spinner"></div>
        <h1>Project Saya</h1>
        <div class="project-list"></div>
      </section>
    `,
    css: "css/project.css",
    js: "js/project.js"
  },
  music: {
    html: `
      <section class="music loading-state">
        <div class="spinner"></div>
        <h1>Music Favorite</h1>
      </section>
    `,
    css: "css/music.css",
    js: "js/music.js"
  }
};

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const page = e.target.dataset.page;
    setActiveLink(page);
    loadPage(page);
  });
});

function setActiveLink(activePage) {
  document.querySelectorAll("nav a").forEach(link => {
    link.classList.toggle("active", link.dataset.page === activePage);
  });
}

function loadPage(page) {
  const content = document.getElementById("content");
  const pageStyle = document.getElementById("page-style");
  const pageScript = document.getElementById("page-script");

  // Fade out effect
  content.style.opacity = 0;

  setTimeout(() => {
    // Update HTML
    content.innerHTML = routes[page].html;

    // Update CSS
    pageStyle.setAttribute("href", routes[page].css);

    // Update JS
    const newScript = document.createElement("script");
    newScript.src = routes[page].js;
    newScript.id = "page-script";
    pageScript.replaceWith(newScript);

    // Fade in effect
    setTimeout(() => {
      content.style.opacity = 1;
      document.querySelector(`.loading-state`)?.classList.remove("loading-state");
    }, 100);
  }, 300);
}

// Tombol Tekan Saya
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("go-beranda");
  const nav = document.getElementById("nav");

  if (btn) {
    btn.addEventListener("click", () => {
      if (nav) nav.style.display = "flex";
      loadPage("beranda");
    });
  }

  // Set default active link
  setActiveLink("beranda");
});
