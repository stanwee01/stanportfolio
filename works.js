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
  { cat: "illustration", file: "viana-splash-v3.png", title: "Viana splash art" },
  { cat: "illustration", file: "womannn.png", title: "Retail promo illustration" },
  { cat: "illustration", file: "illust-1.png", title: "Delivery rider" },
  { cat: "illustration", file: "screenshot-2025-10-17-014152.png", title: "Welcome aboard" },
  { cat: "illustration", file: "screenshot-2025-10-17-014435.png", title: "AI hero mascot" },
  { cat: "illustration", file: "screenshot-2026-02-07-010224.png", title: "Isometric character scene" },
  { cat: "illustration", file: "screenshot-2025-10-08-175234.png", title: "Letter recognition game" },
  { cat: "illustration", file: "screenshot-2026-02-12-002027.png", title: "Nintendo Fanclub CDO" },
  { cat: "illustration", file: "screenshot-2026-02-12-002151.png", title: "Chibi sticker set" },
  { cat: "illustration", file: "screenshot-2026-02-12-002355.png", title: "Character avatars" },
  { cat: "illustration", file: "mirf-2022-holiday-visuals-3.png", title: "MIRF Labour Day" },
  { cat: "illustration", file: "cny-2022.png", title: "Chinese New Year 2022" },
  { cat: "illustration", file: "app-game-asset-1-1.jpg", title: "Winter game asset" },
  { cat: "illustration", file: "screenshot-2026-02-12-003257.png", title: "Lumber hut game asset" },
  { cat: "illustration", file: "page-1-back.png", title: "Our heroes" },

  // UI / UX
  { cat: "uiux", file: "lighthouse-landing-3.png", title: "Lighthouse social feed" },
  { cat: "uiux", file: "screenshot-2025-10-09-130946.png", title: "Priority Concepts dashboard" },
  { cat: "uiux", file: "gamedev.png", title: "Explorer game HUD" },
  { cat: "uiux", file: "ui-mobile-app.png", title: "Build-a-set mobile app" },
  { cat: "uiux", file: "screenshot-2025-10-17-015437.png", title: "Plant match app" },
  { cat: "uiux", file: "illust-exports-1771862508.png", title: "Campaign overview dashboard" },

  // Presentations
  { cat: "presentations", file: "screenshot-2026-02-12-012926.png", title: "Revenue and impact" },
  { cat: "presentations", file: "spark.gif", title: "Animated icon set" },
  { cat: "presentations", file: "ff.png", title: "Jollibee customer journey" },
  { cat: "presentations", file: "screenshot-2026-02-12-012801.png", title: "Vision as the new data layer" },

  // 3D
  { cat: "3d", file: "screenshot-2025-07-20-011922.png", title: "Isometric street" },
  { cat: "3d", file: "render-8.png", title: "Convenience store interior" },
  { cat: "3d", file: "screenshot-2025-11-30-020114.png", title: "Isometric café" },
  { cat: "3d", file: "screenshot-2025-11-30-020329.png", title: "Isometric office" },
  { cat: "3d", file: "screenshot-2026-02-12-010601.png", title: "Retail showroom" },
  { cat: "3d", file: "usps-vianaville-version-3w.png", title: "USPS Vianaville" },
  { cat: "3d", file: "outcamp-3.png", title: "Outcamp facility" },
  { cat: "3d", file: "coles-render-2.png", title: "Supermarket aisles" },
  { cat: "3d", file: "samdt-sb-preview-1.png", title: "Drive-thru lot" },
  { cat: "3d", file: "starbucks-hop-3v3.png", title: "Coffee shop interior" },
  { cat: "3d", file: "viana-render-0.png", title: "Viana city cars" },

  // WebGL (video projects live in the #webgl section; poster shows in the grid)
  { cat: "webgl", file: "../video/webgl-poster.jpg", title: "Babylon.js 3D project portal", href: "#webgl" },
];
