const grid = document.getElementById("grid");
const filters = document.querySelector(".filters");
const toolsLine = document.getElementById("tools");
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lb-img");
const lbCap = document.getElementById("lb-cap");

let visible = [];
let current = 0;

function render(cat) {
  visible = WORKS.filter((w) => cat === "all" || w.cat === cat);
  grid.innerHTML = "";
  visible.forEach((w, i) => {
    const el = document.createElement(w.href ? "a" : "button");
    el.className = "card" + (w.href ? " card-video" : "");
    if (w.href) el.href = w.href;
    else el.addEventListener("click", () => openLightbox(i));
    el.innerHTML = `
      <img src="assets/img/${w.file}" alt="${w.title}" loading="lazy" />
      <span class="card-meta"><b>${w.title}</b><small>${CATEGORIES[w.cat].label}</small></span>
      ${w.href ? '<span class="play" aria-hidden="true">▶</span>' : ""}`;
    grid.appendChild(el);
  });
  toolsLine.textContent = cat === "all" ? "" : "Made with " + CATEGORIES[cat].tools.join(" · ");
}

function buildFilters() {
  const entries = [["all", "All"], ...Object.entries(CATEGORIES).map(([k, v]) => [k, v.label.split(" &")[0]])];
  for (const [key, label] of entries) {
    const b = document.createElement("button");
    b.textContent = label;
    b.setAttribute("role", "tab");
    b.dataset.cat = key;
    b.addEventListener("click", () => {
      filters.querySelectorAll("button").forEach((x) => x.setAttribute("aria-selected", x === b));
      render(key);
    });
    filters.appendChild(b);
  }
  filters.firstChild.setAttribute("aria-selected", "true");
}

function openLightbox(i) {
  current = i;
  show();
  lightbox.showModal();
}

function show() {
  const w = visible[current];
  if (w.href) return step(1);
  lbImg.src = "assets/img/" + w.file;
  lbImg.alt = w.title;
  lbCap.textContent = `${w.title} — ${CATEGORIES[w.cat].label}`;
}

function step(d) {
  current = (current + d + visible.length) % visible.length;
  show();
}

lightbox.querySelector(".lb-close").addEventListener("click", () => lightbox.close());
lightbox.querySelector(".lb-prev").addEventListener("click", () => step(-1));
lightbox.querySelector(".lb-next").addEventListener("click", () => step(1));
lightbox.addEventListener("click", (e) => { if (e.target === lightbox) lightbox.close(); });
document.addEventListener("keydown", (e) => {
  if (!lightbox.open) return;
  if (e.key === "ArrowRight") step(1);
  if (e.key === "ArrowLeft") step(-1);
});

document.getElementById("year").textContent = new Date().getFullYear();
buildFilters();
render("all");
