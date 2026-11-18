(function () {
  const P = PROFILE;
  const $ = (id) => document.getElementById(id);
  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const tags = (list) => list.map((t) => `<span class="tag">${esc(t)}</span>`).join("");

  const ICONS = {
    linkedin:
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>',
    github:
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57v-2c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 12 .3"/></svg>',
    email:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
  };

  // Nav + hero
  $("navLogo").innerHTML = `${esc(P.firstName)}<span>.</span>`;
  $("heroEyebrow").textContent = `${P.headline} — ${P.location}`;
  $("heroTitle").innerHTML = `${esc(P.firstName)} <em>${esc(P.lastName)}</em>`;
  $("heroSubtitle").textContent = P.tagline;
  $("heroCta").innerHTML =
    `<a class="btn btn-primary" href="#projects">View my work</a>` +
    `<a class="btn btn-outline" href="#contact">Get in touch</a>` +
    (P.resumeUrl ? `<a class="btn btn-ghost" href="${esc(P.resumeUrl)}" target="_blank" rel="noopener">Résumé</a>` : "");

  // About
  $("aboutText").innerHTML = P.about.map((p) => `<p>${esc(p)}</p>`).join("");
  $("stats").innerHTML = P.stats
    .map((s) => `<div class="stat"><div class="stat-value">${esc(s.value)}</div><div class="stat-label">${esc(s.label)}</div></div>`)
    .join("");

  // Timelines
  const timeline = (items) =>
    items
      .map(
        (e) => `
      <div class="timeline-item">
        <div class="timeline-date">${esc(e.period)}</div>
        <h3 class="timeline-title">${esc(e.title)}</h3>
        <div class="timeline-company">${esc(e.company)}</div>
        <div class="timeline-content">
          ${e.points.length ? `<ul>${e.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>` : ""}
          ${e.tech.length ? `<div class="timeline-tech">${tags(e.tech)}</div>` : ""}
        </div>
      </div>`
      )
      .join("");
  $("experienceTimeline").innerHTML = timeline(P.experience);
  $("educationTimeline").innerHTML = timeline(P.education);

  // Projects
  $("projectsGrid").innerHTML = P.projects
    .map(
      (p) => `
    <article class="card project-card${p.featured ? " project-featured" : ""}">
      <div class="card-label">${esc(p.label)}</div>
      <h3 class="card-title">${esc(p.title)}</h3>
      <p class="card-description">${esc(p.description)}</p>
      <div class="card-tags">${tags(p.tags)}</div>
      ${p.link ? `<div class="card-meta"><a class="btn btn-ghost" href="${esc(p.link)}" target="_blank" rel="noopener">View project</a></div>` : ""}
    </article>`
    )
    .join("");

  // Skills
  $("skillsGrid").innerHTML = P.skills
    .map(
      (s) => `
    <div class="skill-category">
      <div class="skill-category-title">${esc(s.category)}</div>
      <ul class="skill-list">${s.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>
    </div>`
    )
    .join("");

  // Social links
  const socials = [];
  if (P.links.linkedin) socials.push(["LinkedIn", P.links.linkedin, ICONS.linkedin]);
  if (P.links.github) socials.push(["GitHub", P.links.github, ICONS.github]);
  if (P.email) socials.push(["Email", `mailto:${P.email}`, ICONS.email]);
  $("socialLinks").innerHTML = socials
    .map(([label, href, icon]) => `<a class="social-link" href="${esc(href)}" aria-label="${label}" target="_blank" rel="noopener">${icon}</a>`)
    .join("");

  // Contact form → opens the visitor's email client
  $("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = $("name").value.trim();
    const body = $("message").value.trim();
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    window.location.href = `mailto:${P.email}?subject=${subject}&body=${encodeURIComponent(body)}`;
  });

  // Footer
  $("footerText").textContent = `© ${new Date().getFullYear()} ${P.firstName} ${P.lastName}. Built with care.`;
  document.title = `${P.firstName} ${P.lastName} — Portfolio`;

  // Nav: scrolled state + mobile toggle + active link
  const nav = $("nav");
  const toggle = $("navToggle");
  const links = $("navLinks");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 40);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  toggle.addEventListener("click", () => {
    links.classList.toggle("open");
    toggle.classList.toggle("open");
  });
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.classList.remove("open");
    })
  );

  const navLinks = [...document.querySelectorAll(".nav-link")];
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          const id = entry.target.id;
          navLinks.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === `#${id}`));
        }
      });
    },
    { threshold: 0.15 }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
})();
