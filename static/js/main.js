/**
 * Renders the lists in content.js and wires up page interactions.
 */

const ME = "Rahul Ramachandran"; // bolded in author lists
const NEWS_PREVIEW = 5; // news items shown before "Older news"

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

/* ---------- Rendering ---------- */

function formatMonth(date) {
  const [year, month] = date.split("-").map(Number);
  return new Date(year, month - 1).toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function timelineItem({ when, title, detail }) {
  return `
    <li class="timeline-item">
      <span class="timeline-when">${when}</span>
      <div>
        <div class="timeline-title">${title}</div>
        ${detail ? `<div class="timeline-detail">${detail}</div>` : ""}
      </div>
    </li>`;
}

function authorList(authors) {
  return authors
    .map((author) => {
      const [, name, marker] = author.match(/^(.*?)([*†‡]*)$/);
      if (name === ME) return `<strong>${name}</strong>${marker}`;
      return (PEOPLE[name] ? `<a href="${PEOPLE[name]}">${name}</a>` : name) + marker;
    })
    .join(", ");
}

/** Wraps `html` in a link to `url`, if there is one. */
const linkTo = (url, html) => (url ? `<a href="${url}">${html}</a>` : html);

function paperCard(paper, index) {
  const links = Object.entries(paper.links ?? {});
  const mainUrl = links[0]?.[1];
  const tldrId = `tldr-${index}`;

  const media = `
    <img src="${paper.image}" alt="" loading="lazy" />
    ${paper.video ? `<video src="${paper.video}" muted loop playsinline preload="none"></video>` : ""}`;

  const actions = [
    paper.venue && `<span class="badge">${paper.venue}</span>`,
    ...links.map(([label, url]) => `<a class="chip" href="${url}">${label}</a>`),
    paper.tldr && `<button class="chip" aria-controls="${tldrId}" aria-expanded="false">TL;DR<i class="fa-solid fa-chevron-down"></i></button>`,
  ].filter(Boolean);

  return `
    <article class="paper">
      ${mainUrl ? `<a class="paper-media" href="${mainUrl}" tabindex="-1" aria-hidden="true">${media}</a>` : `<div class="paper-media">${media}</div>`}
      <div class="paper-body">
        <h3 class="paper-title">${linkTo(mainUrl, paper.title)}</h3>
        ${paper.authors ? `<p class="paper-authors">${authorList(paper.authors)}</p>` : ""}
        ${actions.length ? `<div class="paper-actions">${actions.join("")}</div>` : ""}
        ${paper.tldr ? `<div class="collapse" id="${tldrId}" inert><p class="paper-tldr">${paper.tldr}</p></div>` : ""}
      </div>
    </article>`;
}

function render() {
  const news = NEWS.map((item) => timelineItem({ when: formatMonth(item.date), title: item.text }));
  $("#news-list").innerHTML = news.slice(0, NEWS_PREVIEW).join("");
  $("#news-older ul").innerHTML = news.slice(NEWS_PREVIEW).join("");
  $("[aria-controls='news-older']").hidden = news.length <= NEWS_PREVIEW;

  $("#paper-list").innerHTML = PUBLICATIONS.map(paperCard).join("");
  $("#education-list").innerHTML = EDUCATION.map(timelineItem).join("");
}

/* ---------- Interactions ---------- */

function initThemeToggle() {
  $(".theme-toggle").addEventListener("click", () => {
    const theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch {}
  });
}

/** Any <button aria-controls="id"> toggles the matching .collapse element. */
function initDisclosures() {
  document.addEventListener("click", (event) => {
    const button = event.target.closest("button[aria-controls]");
    if (!button) return;
    const panel = document.getElementById(button.getAttribute("aria-controls"));
    const open = button.getAttribute("aria-expanded") !== "true";
    button.setAttribute("aria-expanded", open);
    panel.classList.toggle("is-open", open);
    panel.inert = !open;
  });
}

/** Assemble the address on click so it never appears in the page source. */
function initEmail() {
  $("[data-email]").addEventListener("click", (event) => {
    event.preventDefault();
    location.href = "mailto:" + ["rahulr12", "illinois.edu"].join("@");
  });
}

function initPaperVideos() {
  $$(".paper").forEach((card) => {
    const video = card.querySelector("video");
    if (!video) return;
    video.addEventListener("playing", () => card.classList.add("is-playing"));
    card.addEventListener("mouseenter", () => video.play().catch(() => {}));
    card.addEventListener("mouseleave", () => {
      card.classList.remove("is-playing");
      video.pause();
    });
  });
}

/** Fade sections in as they scroll into view. */
function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries
        .filter((entry) => entry.isIntersecting)
        .forEach(({ target }) => {
          target.classList.add("is-visible");
          observer.unobserve(target);
        });
    },
    { rootMargin: "0px 0px -8% 0px" },
  );
  $$(".section").forEach((section) => {
    section.classList.add("reveal");
    observer.observe(section);
  });
}

function openExternalLinksInNewTab() {
  $$("a[href^='http']").forEach((link) => {
    link.target = "_blank";
    link.rel = "noopener";
  });
}

render();
initThemeToggle();
initDisclosures();
initEmail();
initPaperVideos();
initReveal();
openExternalLinksInNewTab();
