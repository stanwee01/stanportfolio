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
      <img src="assets/img/${w.file}" alt="${w.title}" loading="lazy" ${w.size ? `width="${w.size[0]}" height="${w.size[1]}"` : ""} />
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

// Motion reel
const reel = document.getElementById("reel");
const player = document.getElementById("player");
const stage = document.getElementById("player-stage");
const playerCap = document.getElementById("player-cap");

function poster(m) {
  return m.youtube
    ? `https://i.ytimg.com/vi/${m.youtube}/hqdefault.jpg`
    : `assets/video/${m.video}-poster.jpg`;
}

MOTION.forEach((m) => {
  const card = document.createElement("button");
  card.className = "reel-card";
  card.innerHTML = `
    <span class="reel-thumb">
      <img src="${poster(m)}" alt="" loading="lazy" />
      <span class="play" aria-hidden="true">▶</span>
      ${m.youtube ? '<span class="badge">YouTube</span>' : ""}
    </span>
    <span class="reel-info">
      <small>${m.year}${m.tools ? " · " + m.tools : ""}</small>
      <b>${m.title}</b>
      <span>${m.role}</span>
    </span>`;
  card.addEventListener("click", () => openPlayer(m));
  reel.appendChild(card);
});

function openPlayer(m) {
  stage.innerHTML = m.youtube
    ? `<iframe src="https://www.youtube-nocookie.com/embed/${m.youtube}?autoplay=1&rel=0" title="${m.title}"
         allow="autoplay; encrypted-media; fullscreen" allowfullscreen></iframe>`
    : `<video src="assets/video/${m.video}.mp4" poster="${poster(m)}" controls autoplay playsinline
         controlslist="nodownload" disablepictureinpicture></video>`;
  playerCap.textContent = `${m.title} (${m.year})`;
  player.showModal();
}

// Stop playback when the player closes
player.addEventListener("close", () => { if (!player.open) stage.innerHTML = ""; });
player.querySelector(".lb-close").addEventListener("click", () => player.close());
player.addEventListener("click", (e) => { if (e.target === player) player.close(); });

// Discourage saving videos: no right-click menu or dragging on video elements
document.addEventListener("contextmenu", (e) => { if (e.target.closest("video")) e.preventDefault(); });
document.addEventListener("dragstart", (e) => { if (e.target.closest("video")) e.preventDefault(); });

document.getElementById("year").textContent = new Date().getFullYear();
buildFilters();
render("all");
