/* 破甲史 · 站点交互 */
(function () {
  "use strict";

  const D = window.SITE_DATA;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));
  const fmt = (n) => n == null ? "—" : Number(n).toLocaleString("en-US");

  /* ---------- theme ---------- */
  const root = document.documentElement;
  const stored = localStorage.getItem("aba-theme");
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initial = stored || (prefersDark ? "dark" : "light");
  root.setAttribute("data-theme", initial);

  const themeBtn = $("#themeToggle");
  themeBtn.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("aba-theme", next);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", next === "dark" ? "#121211" : "#f4f0e6");
  });

  /* ---------- mobile menu ---------- */
  const nav = $("#siteNav");
  const menuBtn = $("#menuToggle");
  menuBtn.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "关闭菜单" : "打开菜单");
  });
  $$("#siteNav a").forEach((a) => a.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuBtn.setAttribute("aria-expanded", "false");
  }));

  /* ---------- scroll progress / header / to top ---------- */
  const progress = $("#scrollProgress");
  const header = $("#siteHeader");
  const toTop = $("#toTop");
  let ticking = false;
  function onScroll() {
    const top = window.scrollY || document.documentElement.scrollTop;
    const h = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = h > 0 ? Math.min(100, (top / h) * 100) + "%" : "0%";
    header.classList.toggle("is-scrolled", top > 10);
    toTop.classList.toggle("is-visible", top > 600);
    updateActiveNav();
    ticking = false;
  }
  window.addEventListener("scroll", () => {
    if (!ticking) { window.requestAnimationFrame(onScroll); ticking = true; }
  }, { passive: true });
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  /* ---------- reveal ---------- */
  let revealObserver = null;
  function observeReveals() {
    const items = $$(".reveal:not(.is-visible)");
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("is-visible"); revealObserver.unobserve(e.target); }
        });
      }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
    }
    items.forEach((el) => revealObserver.observe(el));
  }
  observeReveals();

  /* ---------- active nav ---------- */
  const navLinks = $$("#siteNav a");
  const navSections = navLinks.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);
  function updateActiveNav() {
    const y = (window.scrollY || document.documentElement.scrollTop) + 160;
    let currentId = null;
    navSections.forEach((sec) => {
      if (sec.offsetTop <= y) currentId = sec.id;
    });
    navLinks.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === "#" + currentId));
  }

  /* ---------- timeline ---------- */
  const timelineList = $("#timelineList");
  const timelineMore = $("#timelineMore");
  let tlEra = "all";
  let tlLimit = 10;
  const tlSorted = D.timeline.slice().reverse();

  function renderTimeline() {
    const filtered = tlSorted.filter((e) => tlEra === "all" || e.era === tlEra);
    const shown = filtered.slice(0, tlLimit);
    timelineList.innerHTML = shown.map((e, i) => `
      <article class="timeline-item" data-era="${esc(e.era)}">
        <div class="timeline-year">${i === 0 || shown[i - 1].year !== e.year ? esc(e.year) : ""}</div>
        <div class="timeline-card">
          <div class="timeline-top">
            <time class="timeline-date">${esc(e.date)}</time>
            <span class="timeline-tag">${esc(e.tag)}</span>
            <span class="badge badge-${esc(e.level.toLowerCase())}">${esc(e.level)}</span>
          </div>
          <h3>${esc(e.title)}</h3>
          <p>${esc(e.desc)}</p>
        </div>
      </article>
    `).join("");
    const remaining = filtered.length - shown.length;
    timelineMore.style.display = remaining > 0 ? "" : "none";
    timelineMore.textContent = remaining > 0 ? `加载更多（还有 ${remaining} 个节点）` : "已全部显示";
  }

  const tlFilters = $("#timelineFilters");
  tlFilters.addEventListener("click", (ev) => {
    const btn = ev.target.closest("button[data-era]");
    if (!btn) return;
    $$("button", tlFilters).forEach((b) => b.classList.toggle("is-active", b === btn));
    tlEra = btn.dataset.era;
    tlLimit = 10;
    renderTimeline();
  });
  timelineMore.addEventListener("click", () => { tlLimit += 10; renderTimeline(); });
  renderTimeline();

  /* ---------- schools ---------- */
  const schoolGrid = $("#schoolGrid");
  schoolGrid.innerHTML = D.schools.map((s) => `
    <article class="school-card reveal">
      <div class="school-top">
        <span class="school-num">${esc(s.num)}</span>
        <span class="school-en">${esc(s.en)}</span>
      </div>
      <h3>${esc(s.name)}</h3>
      <p class="school-summary">${esc(s.summary)}</p>
      <div class="school-tags">${s.tags.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
      <details>
        <summary>做法与启发</summary>
        <div class="school-body">
          <p><strong>做法：</strong>${esc(s.practice)}</p>
          <p style="margin-top:8px"><strong>启发：</strong>${esc(s.insight)}</p>
        </div>
      </details>
    </article>
  `).join("");
  observeReveals();

  /* ---------- mechanisms ---------- */
  const mechTabs = $("#mechanismTabs");
  const mechPanel = $("#mechanismPanel");
  const mechKeys = Object.keys(D.mechanisms);
  mechTabs.innerHTML = mechKeys.map((k, i) => `
    <button type="button" role="tab" data-key="${esc(k)}" aria-selected="${i === 0}" class="${i === 0 ? "is-active" : ""}">${esc(D.mechanisms[k].name)}</button>
  `).join("");

  function renderMechanism(key) {
    const m = D.mechanisms[key];
    mechPanel.innerHTML = `
      <div class="mech-main">
        <h3>${esc(m.name)}</h3>
        <div class="mech-row">
          <div class="mech-label">指令入口</div>
          <div class="mech-value">${esc(m.entry)}</div>
        </div>
        <div class="mech-row">
          <div class="mech-label">官方语义</div>
          <div class="mech-value">${esc(m.official)}</div>
        </div>
        <div class="mech-row">
          <div class="mech-label">边界</div>
          <div class="mech-value">${esc(m.boundary)}</div>
        </div>
      </div>
      <aside class="mech-side">
        <h4>攻击面</h4>
        <div class="mech-surface">${m.surface.map((x) => `<span>${esc(x)}</span>`).join("")}</div>
        <div class="mech-boundary">客户端注入的上限：改的是上下文，不是服务端策略；写进去的破甲只是建议，模型可以不听。</div>
      </aside>
    `;
  }
  renderMechanism(mechKeys[0]);
  mechTabs.addEventListener("click", (ev) => {
    const btn = ev.target.closest("button[data-key]");
    if (!btn) return;
    $$("button", mechTabs).forEach((b) => {
      const active = b === btn;
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-selected", String(active));
    });
    renderMechanism(btn.dataset.key);
  });

  /* ---------- catalog ---------- */
  const repoBody = $("#repoTableBody");
  const repoCount = $("#repoCount");
  const repoSearch = $("#repoSearch");
  const repoFilters = $("#repoFilters");
  const repoSort = $("#repoSort");
  let activeGroup = "all";
  let query = "";
  let repoLimit = 12;
  const repoMore = $("#repoMore");

  function repoRow(r) {
    return `
      <tr>
        <td class="repo-name">
          <a href="${esc(r.url)}" target="_blank" rel="noopener">${esc(r.name)}</a>
          <small>${esc(r.group === "codex" ? "CODEX" : r.group === "dsh" ? "DSH" : "PRE-2026")}</small>
        </td>
        <td><span class="repo-type">${esc(r.type)}</span></td>
        <td class="repo-target">${esc(r.target)}</td>
        <td class="num">${fmt(r.stars)}</td>
        <td class="num">${fmt(r.forks)}</td>
        <td class="repo-target">${esc(r.created)}</td>
        <td class="repo-note">${esc(r.note)}</td>
        <td><span class="badge badge-${esc(r.level.toLowerCase())}">${esc(r.level)}</span></td>
      </tr>
    `;
  }

  function renderRepos() {
    let list = D.repos.slice();
    if (activeGroup !== "all") list = list.filter((r) => r.group === activeGroup);
    if (query) {
      const q = query.toLowerCase();
      list = list.filter((r) => [r.name, r.type, r.target, r.note].join(" ").toLowerCase().includes(q));
    }
    if (repoSort.value === "stars") list.sort((a, b) => (b.stars || 0) - (a.stars || 0));
    if (repoSort.value === "created") list.sort((a, b) => String(b.created).localeCompare(String(a.created)));
    if (repoSort.value === "name") list.sort((a, b) => a.name.localeCompare(b.name));

    const total = list.length;
    const shown = list.slice(0, repoLimit);
    repoCount.textContent = `显示 ${shown.length} / ${total} 个条目`;
    repoBody.innerHTML = shown.length
      ? shown.map(repoRow).join("")
      : `<tr class="empty-row"><td colspan="8">没有匹配的条目。试试别的关键词。</td></tr>`;
    const remaining = total - shown.length;
    repoMore.style.display = remaining > 0 ? "" : "none";
    repoMore.textContent = remaining > 0 ? `加载更多（还有 ${remaining} 个）` : "已全部显示";
  }
  repoSearch.addEventListener("input", (e) => { query = e.target.value.trim(); repoLimit = 12; renderRepos(); });
  repoFilters.addEventListener("click", (ev) => {
    const btn = ev.target.closest("button[data-group]");
    if (!btn) return;
    activeGroup = btn.dataset.group;
    repoLimit = 12;
    $$("button", repoFilters).forEach((b) => b.classList.toggle("is-active", b === btn));
    renderRepos();
  });
  repoSort.addEventListener("change", () => { repoLimit = 12; renderRepos(); });
  repoMore.addEventListener("click", () => { repoLimit += 12; renderRepos(); });
  renderRepos();

  /* ---------- insights ---------- */
  const insightGrid = $("#insightGrid");
  const insightToggle = $("#insightToggle");
  let expanded = false;
  insightGrid.innerHTML = D.insights.map((x, i) => `
    <article class="insight-card reveal${i >= 12 ? " is-hidden" : ""}" data-index="${i}">
      <span class="insight-group">${esc(x.group)}</span>
      <h3>${esc(x.title)}</h3>
      <p>${esc(x.text)}</p>
    </article>
  `).join("");
  observeReveals();

  insightToggle.addEventListener("click", () => {
    expanded = !expanded;
    $$(".insight-card", insightGrid).forEach((card, i) => {
      card.classList.toggle("is-hidden", !expanded && i >= 12);
    });
    insightToggle.textContent = expanded ? "收起" : "展开全部 21 条";
  });

  /* ---------- footer year / misc ---------- */
  // no-op placeholder for future analytics-free enhancements

  // initial paint after all nav references are initialized
  onScroll();
})();
