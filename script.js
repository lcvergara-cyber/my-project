// ====== EDIT YOUR CONTENT HERE ======
const details = [
  ["grad", "Course", "BS Information Technology"],
  ["book", "Year level", "3rd Year College"],
  ["school", "School", "City College of Calamba"],
  ["pin", "Location", "Calamba City, Laguna, Philippines"]
];
const languages = ["Filipino", "English"];

const hardSkills = [
  { icon: "code", title: "Programming Languages", tags: ["C", "C++"] },
  { icon: "globe", title: "Web Development", tags: ["HTML", "CSS"] },
  { icon: "palette", title: "Layout and Graphic Design", tags: ["Canva"] },
  { icon: "office", title: "Office Productivity", tags: ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint"] }
];
const certs = [
  {
    title: "Legacy Responsive Web Design V8",
    desc: "Issued by freeCodeCamp · September 20, 2025 · 300 hours of coursework",
    date: "September 20, 2025",
    image: "freecodecamp.png"
  }
];
const softSkills = [
  ["chat", "Communication Skills"],
  ["eye", "Attention to Detail"],
  ["shield", "Ethics and Integrity"],
  ["users", "Teamwork and Collaboration"],
  ["bulb", "Willingness to Learn"]
];

const projects = [
  {
    title: "PesoPal",
    description: "A personal budget tracker website concept designed to organize income and expenses, categorize transactions, and help users monitor their finances.",
    problem: "Managing personal finances can be difficult when expenses are not properly recorded and monitored. PesoPal was created to help users organize and track their spending.",
    built: "We developed PesoPal, a budget tracker website with user registration, login, transaction management, expense categories, history logs, and a pie chart for visualizing expenses.",
    how: "We developed the website using JavaScript, CSS, PHP, and MySQL, with Bootstrap for styling and XAMPP as our local development environment.",
    tools: ["JavaScript", "CSS", "PHP", "MySQL", "Bootstrap", "XAMPP"],
    result: "The result was a functional website that allows users to record, manage, and monitor their expenses in a more organized way.",
    learned: "We learned how to develop a website, manage database records, implement system functionalities, and create a user-friendly interface.",
    image: "pesopal.png",
    live: "", repo: ""
  },
  {
    title: "Web-Based Restaurant Operation Management with POS System",
    description: "A web-based Restaurant Management System for Likod Bahay ni Tito Jonjie Samgyupsal, designed to improve restaurant operations through QR code ordering, automated billing, inventory monitoring, kitchen order management, and sales reporting.",
    problem: "The restaurant relied on manual processes for orders, billing, inventory, and sales tracking, which sometimes caused errors, delays, and difficulties managing daily operations.",
    built: "We developed a web-based Restaurant Management System with QR code ordering, cashier management, kitchen monitoring, automated billing and discounts, FIFO inventory tracking, low-stock alerts, and sales reports.",
    how: "We used React.js for the frontend, Node.js and Express.js for the backend, and SQLite for the database. We used Visual Studio Code for development and Hostinger for web hosting.",
    tools: ["React.js", "Node.js", "Express.js", "SQLite", "Visual Studio Code", "Hostinger"],
    result: "The system provides a centralized platform for managing restaurant orders, billing, inventory, kitchen operations, and sales records.",
    learned: "We learned how to develop a web-based management system, integrate different technologies, implement algorithms, and create solutions for real-world business problems.",
    image: "web-based.png",
    live: "", repo: ""
  }
];

const education = [
  { icon: "grad", school: "City College of Calamba", level: "Bachelor of Science in Information Technology (BSIT)", lines: ["2024 – 2028", "Currently Studying · 3rd Year College", "Calamba City, Laguna, Philippines"] },
  { icon: "book", school: "Looc Integrated School", level: "Senior High School", lines: ["2022 – 2024", "STEM (Science, Technology, Engineering, and Mathematics)"] },
  { icon: "school", school: "Looc Integrated School", level: "Junior High School", lines: ["2019 – 2022"] },
  { icon: "school", school: "San Felipe National High School", level: "Junior High School", lines: ["2018 – 2019"] },
  { icon: "book", school: "Manlimonsito Elementary School", level: "Elementary", lines: ["2017 – 2018"] },
  { icon: "book", school: "Looc Elementary School", level: "Elementary", lines: ["2012 – 2017"] }
];
// ====== END OF EDITABLE CONTENT ======

const P = {
  grad: '<path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/>',
  book: '<path d="M2 4h7a3 3 0 0 1 3 3v14a2 2 0 0 0-2-2H2z"/><path d="M22 4h-7a3 3 0 0 0-3 3v14a2 2 0 0 1 2-2h8z"/>',
  school: '<path d="M3 21h18"/><path d="M5 21V9l7-5 7 5v12"/><path d="M10 21v-6h4v6"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/>',
  award: '<circle cx="12" cy="8" r="6"/><path d="M15.5 13.5 17 22l-5-3-5 3 1.5-8.5"/>',
  code: '<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>',
  palette: '<circle cx="8.5" cy="7.5" r="1"/><circle cx="13.5" cy="6.5" r="1"/><circle cx="17.5" cy="10.5" r="1"/><circle cx="6.5" cy="12.5" r="1"/><path d="M12 22a10 10 0 1 1 10-10c0 3-2 4-4 4h-2a2 2 0 0 0-1 3.5c.6.8.2 2.5-3 2.5z"/>',
  office: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/>',
  chat: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  eye: '<path d="M2 12s4-8 10-8 10 8 10 8-4 8-10 8S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2 21a7 7 0 0 1 14 0"/><circle cx="17" cy="9" r="2.5"/><path d="M17 14a5 5 0 0 1 5 5"/>',
  bulb: '<path d="M9 18h6M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.3h6c0-1 .4-1.8 1-2.3A7 7 0 0 0 12 2z"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/>',
  github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-1-2.6c3.1-.3 6.4-1.5 6.4-7A5.4 5.4 0 0 0 20 4.8 5 5 0 0 0 19.9 1S18.7.7 16 2.5a13.4 13.4 0 0 0-7 0C6.3.7 5.1 1 5.1 1A5 5 0 0 0 5 4.8a5.4 5.4 0 0 0-1.5 3.8c0 5.4 3.3 6.7 6.4 7a3.4 3.4 0 0 0-1 2.6V22"/>',
  up: '<path d="M12 19V5M5 12l7-7 7 7"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
  info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
  lang: '<path d="M5 8h8M9 4v4M7 16c3-2 5-5 6-8M6 8c1 3 3 5 6 7"/><path d="m14 20 4-9 4 9M15.5 17h5"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>'
};
const icon = n => `<svg class="i" viewBox="0 0 24 24" aria-hidden="true">${P[n]}</svg>`;
const $ = id => document.getElementById(id);
const tile = n => `<span class="tile">${icon(n)}</span>`;
const tagList = t => `<ul class="tags">${t.map(x => `<li>${x}</li>`).join("")}</ul>`;

$("details").innerHTML = details.map(([i, k, v]) =>
  `<div class="detail">${tile(i)}<div><b>${k}</b><span class="v">${v}</span></div></div>`).join("");
$("languages").innerHTML = languages.map(l => `<div class="chip">${tile("lang")}${l}</div>`).join("");
$("hard-skills").innerHTML = hardSkills.map(s =>
  `<div class="card">${tile(s.icon)}<h3>${s.title}</h3>${tagList(s.tags)}</div>`).join("");
$("soft-skills").innerHTML = softSkills.map(([i, t]) =>
  `<div class="card center">${tile(i)}<h3>${t}</h3></div>`).join("");

$("certs").innerHTML = certs.map((c, i) => `
  <div class="card center">${tile("award")}<h3>${c.title}</h3><p class="muted">${c.desc}</p>
    <button class="btn ghost small" type="button" data-cert="${i}">${icon("eye")} View</button></div>`).join("");

$("projects-list").innerHTML = projects.map((p, n) => `
  <article class="card project">
    <div class="imgwrap"><img src="${p.image}" alt="Screenshot of ${p.title}" loading="lazy"></div>
    <div class="body">
      <h3>${p.title}</h3><p>${p.description}</p>${tagList(p.tools)}
      <button class="btn ghost small" type="button" data-project="${n}">${icon("info")} View project details</button>
    </div>
  </article>`).join("");

$("timeline").innerHTML = education.map(e => `
  <article class="t-item"><span class="dot">${icon(e.icon)}</span>
    <div class="card"><h3>${e.school}</h3><p class="lvl">${e.level}</p>
    <ul>${e.lines.map(l => `<li>${l}</li>`).join("")}</ul></div></article>`).join("");

// Project details modal
const modal = $("modal");
document.addEventListener("click", e => {
  const b = e.target.closest("[data-project]");
  if (b) {
    const p = projects[b.dataset.project];
    const extra = [["Problem", p.problem], ["What we built", p.built], ["How we built it", p.how], ["Result", p.result], ["What we learned", p.learned]]
      .filter(x => x[1]).map(([k, v]) => `<p><strong>${k}:</strong> ${v}</p>`).join("");
    const links = [["Live demo", p.live], ["GitHub", p.repo]].filter(x => x[1])
      .map(([k, u]) => `<a class="btn small" href="${u}" target="_blank" rel="noopener">${k}</a>`).join("");
    modal.innerHTML = `<div class="m-body">
      <button class="icon-btn close" type="button" aria-label="Close" data-close>${icon("x")}</button>
      <img src="${p.image}" alt="Screenshot of ${p.title}">
      <h3 id="modal-title">${p.title}</h3><p>${p.description}</p>${extra}
      ${tagList(p.tools)}${links ? `<div class="cta">${links}</div>` : ""}</div>`;
    modal.showModal();
  } else if (e.target.closest("[data-close]") || e.target === modal) modal.close();
});

// Certificate viewer
document.addEventListener("click", e => {
  const v = e.target.closest("[data-cert]");
  if (!v) return;
  const c = certs[v.dataset.cert];
  modal.innerHTML = `<div class="m-body">
    <button class="icon-btn close" type="button" aria-label="Close" data-close>${icon("x")}</button>
    <h3 id="modal-title">${c.title}</h3>
    <img src="${c.image}" alt="Certificate: ${c.title}, issued by freeCodeCamp to Lora Faye Vergara on ${c.date}">
  </div>`;
  modal.showModal();
});

// Icons in static markup
document.querySelectorAll("[data-icon]").forEach(el => (el.innerHTML = icon(el.dataset.icon)));
$("gh").innerHTML = icon("github");
$("to-top").innerHTML = icon("up");

// Theme toggle (follows system by default)
const root = document.documentElement, tbtn = $("theme-toggle");
const isDark = () => root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
const syncTheme = () => (tbtn.innerHTML = icon(isDark() ? "sun" : "moon"));
tbtn.addEventListener("click", () => { root.dataset.theme = isDark() ? "light" : "dark"; syncTheme(); });
syncTheme();

// Active nav link
const links = [...document.querySelectorAll("#nav a")];
const secs = links.map(a => document.querySelector(a.getAttribute("href")));
const setActive = () => {
  let cur = 0;
  secs.forEach((s, i) => { if (s.getBoundingClientRect().top <= 120) cur = i; });
  links.forEach((a, i) => a.classList.toggle("active", i === cur));
};
addEventListener("scroll", setActive, { passive: true }); setActive();

// Copy email
const cb = $("copy-email");
cb.addEventListener("click", async () => {
  try { await navigator.clipboard.writeText($("email-link").textContent.trim()); cb.textContent = "Copied"; }
  catch { cb.textContent = "Copy failed"; }
  setTimeout(() => (cb.textContent = "Copy email"), 2000);
});

$("year").textContent = new Date().getFullYear();


// ===== Effects =====
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
root.classList.add("js");

// Typing effect
const roles = ["Information Technology Student", "Aspiring IT Professional", "Eager Learner"];
const typed = $("typed");
if (reduce) { typed.textContent = roles[0]; }
else {
  let r = 0, c = 0, del = false;
  const tick = () => {
    const word = roles[r];
    c += del ? -1 : 1;
    typed.textContent = word.slice(0, c);
    let wait = del ? 40 : 85;
    if (!del && c === word.length) { del = true; wait = 1600; }
    else if (del && c === 0) { del = false; r = (r + 1) % roles.length; wait = 350; }
    setTimeout(tick, wait);
  };
  tick();
}

// Scroll progress bar + back-to-top visibility
const bar = $("progress"), toTop = $("to-top");
const onScroll = () => {
  const h = document.documentElement;
  bar.style.transform = `scaleX(${h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight)})`;
  toTop.style.opacity = h.scrollTop > 500 ? 1 : 0;
  toTop.style.pointerEvents = h.scrollTop > 500 ? "auto" : "none";
};
addEventListener("scroll", onScroll, { passive: true }); onScroll();

// Scroll reveal
const targets = document.querySelectorAll(".section-title, .sub, .group-title, .two-col > *, .detail, .chip, .grid > *, .t-item, .hero-grid > *");
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
}), { threshold: 0.12 });
targets.forEach(el => {
  el.classList.add("reveal");
  const i = [...el.parentElement.children].indexOf(el);
  el.style.transitionDelay = Math.min(i, 5) * 90 + "ms";
  io.observe(el);
});

// Card spotlight follows the pointer
document.addEventListener("pointermove", e => {
  const c = e.target.closest(".card, .detail, .chip");
  if (!c) return;
  const r = c.getBoundingClientRect();
  c.style.setProperty("--mx", e.clientX - r.left + "px");
  c.style.setProperty("--my", e.clientY - r.top + "px");
});