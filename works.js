// Portfolio content. Add a project by adding an entry to WORKS;
// `cat` must match one of the CATEGORIES keys.
const CATEGORIES = {
  illustration: { label: "Illustrations", tools: ["Adobe Illustrator", "Paint Tool SAI"] },
  uiux: { label: "UI / UX & Prototyping", tools: ["Figma", "Adobe Illustrator"] },
  presentations: { label: "Presentations & Diagrams", tools: ["Google Slides", "Canva", "Adobe After Effects"] },
  "3d": { label: "3D Visualization", tools: ["Blender 3D", "Adobe Illustrator", "Adobe After Effects"] },
  webgl: { label: "WebGL", tools: ["Babylon.js", "WebGL", "Blender 3D"] },
};

const WORKS = [
  // Illustrations
  { cat: "illustration", file: "viana-splash-v3.png", size: [1600,900], title: "Viana splash art" },
  { cat: "illustration", file: "womannn.png", size: [1600,900], title: "Retail promo illustration" },
  { cat: "illustration", file: "illust-1.png", size: [1014,486], title: "Delivery rider" },
  { cat: "illustration", file: "screenshot-2025-10-17-014152.png", size: [1248,701], title: "Welcome aboard" },
  { cat: "illustration", file: "screenshot-2025-10-17-014435.png", size: [1561,776], title: "AI hero mascot" },
  { cat: "illustration", file: "screenshot-2026-02-07-010224.png", size: [1407,787], title: "Isometric character scene" },
  { cat: "illustration", file: "screenshot-2025-10-08-175234.png", size: [704,435], title: "Letter recognition game" },
  { cat: "illustration", file: "screenshot-2026-02-12-002027.png", size: [917,625], title: "Nintendo Fanclub CDO" },
  { cat: "illustration", file: "screenshot-2026-02-12-002151.png", size: [845,828], title: "Chibi sticker set" },
  { cat: "illustration", file: "screenshot-2026-02-12-002355.png", size: [1195,708], title: "Character avatars" },
  { cat: "illustration", file: "mirf-2022-holiday-visuals-3.png", size: [940,788], title: "MIRF Labour Day" },
  { cat: "illustration", file: "cny-2022.png", size: [820,360], title: "Chinese New Year 2022" },
  { cat: "illustration", file: "app-game-asset-1-1.jpg", size: [1600,1001], title: "Winter game asset" },
  { cat: "illustration", file: "screenshot-2026-02-12-003257.png", size: [1047,851], title: "Lumber hut game asset" },
  { cat: "illustration", file: "page-1-back.png", size: [1600,960], title: "Our heroes" },

  // UI / UX
  { cat: "uiux", file: "lighthouse-landing-3.png", size: [1600,900], title: "Lighthouse social feed" },
  { cat: "uiux", file: "screenshot-2025-10-09-130946.png", size: [1285,921], title: "Priority Concepts dashboard" },
  { cat: "uiux", file: "gamedev.png", size: [1600,900], title: "Explorer game HUD" },
  { cat: "uiux", file: "ui-mobile-app.png", size: [1599,897], title: "Build-a-set mobile app" },
  { cat: "uiux", file: "screenshot-2025-10-17-015437.png", size: [1598,576], title: "Plant match app" },
  { cat: "uiux", file: "illust-exports-1771862508.png", size: [1600,899], title: "Campaign overview dashboard" },

  // Presentations
  { cat: "presentations", file: "screenshot-2026-02-12-012926.png", size: [1575,887], title: "Revenue and impact" },
  { cat: "presentations", file: "spark.gif", size: [1152,648], title: "Animated icon set" },
  { cat: "presentations", file: "ff.png", size: [1600,900], title: "Jollibee customer journey" },
  { cat: "presentations", file: "screenshot-2026-02-12-012801.png", size: [1578,875], title: "Vision as the new data layer" },

  // 3D
  { cat: "3d", file: "screenshot-2025-07-20-011922.png", size: [693,389], title: "Isometric street" },
  { cat: "3d", file: "render-8.png", size: [1600,900], title: "Convenience store interior" },
  { cat: "3d", file: "screenshot-2025-11-30-020114.png", size: [407,633], title: "Isometric café" },
  { cat: "3d", file: "screenshot-2025-11-30-020329.png", size: [655,1079], title: "Isometric office" },
  { cat: "3d", file: "screenshot-2026-02-12-010601.png", size: [1466,774], title: "Retail showroom" },
  { cat: "3d", file: "usps-vianaville-version-3w.png", size: [1599,912], title: "USPS Vianaville" },
  { cat: "3d", file: "outcamp-3.png", size: [1600,900], title: "Outcamp facility" },
  { cat: "3d", file: "coles-render-2.png", size: [1600,900], title: "Supermarket aisles" },
  { cat: "3d", file: "samdt-sb-preview-1.png", size: [1600,900], title: "Drive-thru lot" },
  { cat: "3d", file: "starbucks-hop-3v3.png", size: [1600,1130], title: "Coffee shop interior" },
  { cat: "3d", file: "viana-render-0.png", size: [1600,900], title: "Viana city cars" },

  // WebGL (video projects live in the #webgl section; poster shows in the grid)
  { cat: "webgl", file: "../video/webgl-poster.jpg", size: [1600,900], title: "Babylon.js 3D project portal", href: "#webgl" },
];

// Motion & animation reel. Use `youtube` (video id) or `video` (file in assets/video/).
const MOTION = [
  {
    title: "When hygiene matters — CHEP Plastic Pallets",
    year: 2024,
    youtube: "tBVFwxf0DYo",
    role: "Created the 2D motion graphics and polygonal-style 3D scenes.",
  },
  {
    title: "Smart City day–night shift",
    year: 2023,
    video: "smartcity-shift",
    role: "Diorama-style low-poly city animation going from day to night.",
  },
  {
    title: "Viana × OpenVINO",
    year: 2022,
    video: "viana-openvino",
    tools: "Blender 3D",
    role: "Storyboard, character design, animation and composition.",
  },
  {
    title: "Spritzer — Recycling with Spriky and Friends",
    year: 2019,
    youtube: "XT-m2Qqzogk",
    tools: "Blender 3D",
    role: "Storyboarding, character design, animation and video composition.",
  },
  {
    title: "Zeolite motion test",
    year: 2018,
    video: "zeolite-test",
    tools: "Adobe After Effects",
    role: "Test animation for a motion graphics job application.",
  },
  {
    title: "CheQQme brand video",
    year: 2016,
    video: "cheqqme-brand",
    role: "Promotional video for a gamified stamp-collecting app.",
  },
];
