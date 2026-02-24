(() => {
  "use strict";

  // ---- DOM ----
  const elTemplateResult = document.getElementById("template__result");
  const elDesiredTitle   = document.getElementById("desiredTitle");
  const elNumberOfSong   = document.getElementById("numberOfSong");
  const elDownloadWrap   = document.getElementById("download-wrap");
  const elDownloadBtn    = document.getElementById("download-btn");
  const elBadge          = document.getElementById("page-design-badge");
  const elBtnRandomPage  = document.getElementById("btn-randomize-page");

  // ---- Themes (added more) ----
  const pageDesigns = [
    {
      name: "Studio White",
      vars: {
        "--page-bg":"#f9f9f7",
        "--page-font":"'Albert Sans', sans-serif",
        "--page-font-label":"'Albert Sans', sans-serif",
        "--accent":"#111827",
        "--accent-light":"#f3f4f6",
        "--text-primary":"#111827",
        "--text-secondary":"#6b7280",
        "--surface":"#ffffff",
        "--surface-2":"#f9fafb",
        "--border-color":"#e5e7eb",
        "--border-radius":"10px",
        "--border-style":"1px solid #e5e7eb",
        "--input-bg":"#fff",
        "--input-border":"1px solid #d1d5db",
        "--input-radius":"8px",
        "--input-focus-ring":"0 0 0 3px rgba(17,24,39,.1)",
        "--shadow-card":"0 1px 4px rgba(0,0,0,.05)",
        "--shadow-main":"0 4px 20px rgba(0,0,0,.06)",
        "--section-radius":"12px",
      }
    },
    {
      name: "Sage & Linen",
      vars: {
        "--page-bg":"#f4f1ec",
        "--page-font":"'Cormorant Garamond', serif",
        "--page-font-label":"'Josefin Sans', sans-serif",
        "--accent":"#5a7a5c",
        "--accent-light":"#eef4ee",
        "--text-primary":"#2d2a24",
        "--text-secondary":"#7a7060",
        "--surface":"#faf8f4",
        "--surface-2":"#ede9e1",
        "--border-color":"#d8d1c4",
        "--border-radius":"6px",
        "--border-style":"1px solid #d8d1c4",
        "--input-bg":"#faf8f4",
        "--input-border":"1px solid #c8c1b4",
        "--input-radius":"4px",
        "--input-focus-ring":"0 0 0 3px rgba(90,122,92,.12)",
        "--shadow-card":"0 2px 8px rgba(45,42,36,.06)",
        "--shadow-main":"0 4px 20px rgba(45,42,36,.08)",
        "--section-radius":"6px",
      }
    },
    {
      name: "Blueprint",
      vars: {
        "--page-bg":"#eef2ff",
        "--page-font":"'Josefin Sans', sans-serif",
        "--page-font-label":"'Josefin Sans', sans-serif",
        "--accent":"#3730a3",
        "--accent-light":"#e0e7ff",
        "--text-primary":"#1e1b4b",
        "--text-secondary":"#6366f1",
        "--surface":"#fff",
        "--surface-2":"#eef2ff",
        "--border-color":"#c7d2fe",
        "--border-radius":"8px",
        "--border-style":"1.5px solid #c7d2fe",
        "--input-bg":"#f5f3ff",
        "--input-border":"1.5px solid #a5b4fc",
        "--input-radius":"6px",
        "--input-focus-ring":"0 0 0 3px rgba(55,48,163,.15)",
        "--shadow-card":"0 2px 10px rgba(99,102,241,.08)",
        "--shadow-main":"0 4px 24px rgba(99,102,241,.12)",
        "--section-radius":"10px",
      }
    },
    {
      name: "Frost",
      vars: {
        "--page-bg":"linear-gradient(160deg,#e8f4fd 0%,#f0f9ff 60%,#fafffe 100%)",
        "--page-font":"'Outfit', sans-serif",
        "--page-font-label":"'Syne', sans-serif",
        "--accent":"#0284c7",
        "--accent-light":"#e0f2fe",
        "--text-primary":"#0c4a6e",
        "--text-secondary":"#38bdf8",
        "--surface":"rgba(255,255,255,0.75)",
        "--surface-2":"rgba(224,242,254,0.5)",
        "--border-color":"#bae6fd",
        "--border-radius":"14px",
        "--border-style":"1px solid rgba(186,230,253,.8)",
        "--input-bg":"rgba(255,255,255,.8)",
        "--input-border":"1px solid #7dd3fc",
        "--input-radius":"10px",
        "--input-focus-ring":"0 0 0 3px rgba(2,132,199,.15)",
        "--shadow-card":"0 4px 16px rgba(12,74,110,.06)",
        "--shadow-main":"0 8px 32px rgba(12,74,110,.08)",
        "--section-radius":"16px",
      }
    },

    /* NEW page themes */
    {
      name: "Midnight Ink",
      vars: {
        "--page-bg":"#0b1020",
        "--page-font":"'Outfit', sans-serif",
        "--page-font-label":"'Syne', sans-serif",
        "--accent":"#7c3aed",
        "--accent-light":"rgba(124,58,237,.12)",
        "--text-primary":"#eef2ff",
        "--text-secondary":"rgba(238,242,255,.7)",
        "--surface":"rgba(255,255,255,.06)",
        "--surface-2":"rgba(255,255,255,.08)",
        "--border-color":"rgba(255,255,255,.14)",
        "--border-radius":"14px",
        "--border-style":"1px solid rgba(255,255,255,.14)",
        "--input-bg":"rgba(255,255,255,.06)",
        "--input-border":"1px solid rgba(255,255,255,.18)",
        "--input-radius":"12px",
        "--input-focus-ring":"0 0 0 3px rgba(124,58,237,.22)",
        "--shadow-card":"0 8px 26px rgba(0,0,0,.25)",
        "--shadow-main":"0 10px 36px rgba(0,0,0,.28)",
        "--section-radius":"16px",
      }
    },
    {
      name: "Sunset Soda",
      vars: {
        "--page-bg":"linear-gradient(135deg,#fff1f2 0%,#ffedd5 40%,#ecfeff 100%)",
        "--page-font":"'Josefin Sans', sans-serif",
        "--page-font-label":"'Archivo Black', sans-serif",
        "--accent":"#fb7185",
        "--accent-light":"rgba(251,113,133,.14)",
        "--text-primary":"#111827",
        "--text-secondary":"#6b7280",
        "--surface":"rgba(255,255,255,.75)",
        "--surface-2":"rgba(255,255,255,.6)",
        "--border-color":"rgba(17,24,39,.10)",
        "--border-radius":"18px",
        "--border-style":"1px solid rgba(17,24,39,.10)",
        "--input-bg":"rgba(255,255,255,.75)",
        "--input-border":"1px solid rgba(17,24,39,.12)",
        "--input-radius":"14px",
        "--input-focus-ring":"0 0 0 3px rgba(251,113,133,.18)",
        "--shadow-card":"0 6px 20px rgba(0,0,0,.08)",
        "--shadow-main":"0 10px 36px rgba(0,0,0,.10)",
        "--section-radius":"18px",
      }
    },
  ];

  const titleDesigns = [
    { name:"Neon Noir",   font:"'Bebas Neue',sans-serif",    bg:"linear-gradient(135deg,#0f0c29,#302b63,#24243e)", color:"#f0e130", textShadow:"0 0 12px #f0e13088", padding:"16px 20px", letterSpacing:"4px", borderRadius:"4px 4px 0 0" },
    { name:"Pastel Pop",  font:"'Syne',sans-serif",          bg:"linear-gradient(90deg,#ffecd2,#fcb69f)",          color:"#4a0e0e", textShadow:"none",              padding:"14px 18px", letterSpacing:"1px", borderRadius:"12px 12px 0 0" },
    { name:"Editorial",   font:"'Playfair Display',serif",   bg:"#fff",                                            color:"#111",    textShadow:"none",              padding:"16px 20px", letterSpacing:"0px", borderRadius:"0", borderBottom:"3px solid #111" },
    { name:"Retro Tape",  font:"'Space Mono',monospace",     bg:"#f5f0e1",                                         color:"#c0392b", textShadow:"2px 2px 0 #7f8c8d", padding:"14px 18px", letterSpacing:"2px", borderRadius:"0" },
    { name:"Rave",        font:"'Righteous',cursive",        bg:"linear-gradient(135deg,#f953c6,#b91d73)",         color:"#fff",    textShadow:"0 0 8px #fff8",     padding:"16px 20px", letterSpacing:"3px", borderRadius:"8px 8px 0 0" },
    { name:"Luxury Gold", font:"'Abril Fatface',serif",      bg:"#1a1200",                                         color:"#d4af37", textShadow:"0 0 6px #d4af3766", padding:"18px 22px", letterSpacing:"2px", borderRadius:"6px 6px 0 0" },
    { name:"Ice Cold",    font:"'Chakra Petch',sans-serif",  bg:"linear-gradient(120deg,#e0eafc,#cfdef3)",         color:"#1a3c6e", textShadow:"none",              padding:"14px 18px", letterSpacing:"2px", borderRadius:"4px 4px 0 0" },
    { name:"Brutalist",   font:"'Archivo Black',sans-serif", bg:"#000",                                            color:"#fff",    textShadow:"3px 3px 0 #ff0040", padding:"14px 18px", letterSpacing:"0", borderRadius:"0" },

    /* NEW title themes */
    { name:"Holo Chrome", font:"'Syne',sans-serif",          bg:"linear-gradient(90deg,#00f5ff,#a78bfa,#fb7185)",   color:"#0b1020", textShadow:"0 2px 10px rgba(0,0,0,.18)", padding:"16px 20px", letterSpacing:"2px", borderRadius:"14px 14px 0 0" },
    { name:"Midnight Tag",font:"'Space Mono',monospace",     bg:"#0b1020",                                         color:"#7c3aed", textShadow:"0 0 10px rgba(124,58,237,.4)", padding:"14px 18px", letterSpacing:"3px", borderRadius:"10px 10px 0 0", borderBottom:"1px solid rgba(255,255,255,.12)" },
  ];

  const bodyDesigns = [
    { name:"Dark Cards",    wrapBg:"#1a1a2e",                                         cardBg:"#16213e",               rankBg:"#e94560",                                rankColor:"#fff",    textColor:"#eee",    subColor:"#aaa",    borderRadius:"8px",  gap:"8px",  padding:"10px", boxShadow:"none",                          outline:"none" },
    { name:"Soft Gradient", wrapBg:"linear-gradient(160deg,#ffecd2 0%,#fcb69f 100%)", cardBg:"rgba(255,255,255,0.6)", rankBg:"#c0392b",                                rankColor:"#fff",    textColor:"#333",    subColor:"#888",    borderRadius:"12px", gap:"10px", padding:"12px", boxShadow:"0 2px 8px rgba(0,0,0,.1)",      outline:"none" },
    { name:"Mono Print",    wrapBg:"#f5f0e1",                                         cardBg:"#fff",                  rankBg:"#111",                                   rankColor:"#f5f0e1", textColor:"#111",    subColor:"#666",    borderRadius:"0",    gap:"0",    padding:"8px 0",  boxShadow:"none",                          outline:"none", cardBorderBottom:"1px solid #ccc" },
    { name:"Neon Terminal", wrapBg:"#0d0d0d",                                         cardBg:"#111",                  rankBg:"#00ff88",                                rankColor:"#000",    textColor:"#00ff88", subColor:"#00aa55", borderRadius:"4px",  gap:"6px",  padding:"10px", boxShadow:"0 0 8px #00ff8833",             outline:"none" },
    { name:"Candy Stripe",  wrapBg:"#fff0f6",                                         cardBg:"#fff",                  rankBg:"linear-gradient(135deg,#f953c6,#b91d73)", rankColor:"#fff",    textColor:"#4a004e", subColor:"#b91d73", borderRadius:"16px", gap:"10px", padding:"12px", boxShadow:"0 2px 6px rgba(185,29,115,.15)",outline:"none" },
    { name:"Gold Rush",     wrapBg:"#1a1200",                                         cardBg:"#211900",               rankBg:"#d4af37",                                rankColor:"#1a1200", textColor:"#d4af37", subColor:"#8a7020", borderRadius:"6px",  gap:"8px",  padding:"10px", boxShadow:"none",                          outline:"1px solid #d4af3744" },
    { name:"Clean Light",   wrapBg:"#f8f9fa",                                         cardBg:"#fff",                  rankBg:"#007bff",                                rankColor:"#fff",    textColor:"#212529", subColor:"#6c757d", borderRadius:"8px",  gap:"8px",  padding:"10px", boxShadow:"0 1px 4px rgba(0,0,0,.08)",     outline:"none" },
    { name:"Brutalist Red", wrapBg:"#ff0040",                                         cardBg:"#fff",                  rankBg:"#000",                                   rankColor:"#ff0040", textColor:"#000",    subColor:"#333",    borderRadius:"0",    gap:"4px",  padding:"8px",  boxShadow:"none",                          outline:"2px solid #000" },

    /* NEW card themes */
    { name:"Glass Aurora",  wrapBg:"linear-gradient(140deg,#0ea5e9 0%,#a78bfa 45%,#fb7185 100%)", cardBg:"rgba(255,255,255,.22)", rankBg:"rgba(255,255,255,.35)", rankColor:"#0b1020", textColor:"#0b1020", subColor:"rgba(11,16,32,.7)", borderRadius:"18px", gap:"10px", padding:"14px", boxShadow:"0 10px 30px rgba(0,0,0,.15)", outline:"1px solid rgba(255,255,255,.22)" },
    { name:"Ink Minimal",   wrapBg:"#0b1020", cardBg:"rgba(255,255,255,.04)", rankBg:"#7c3aed", rankColor:"#fff", textColor:"#eef2ff", subColor:"rgba(238,242,255,.72)", borderRadius:"12px", gap:"10px", padding:"12px", boxShadow:"none", outline:"1px solid rgba(255,255,255,.10)" },
  ];

  // ---- State ----
  const state = {
    activePageDesign: pageDesigns[0],
    activeTitleDesign: titleDesigns[6],
    activeBodyDesign: bodyDesigns[6],
    currentN: 0,
  };

  // ---- Utils ----
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const $ = (sel, root = document) => root.querySelector(sel);

  function setCSSVars(vars) {
    const root = document.documentElement;
    for (const [k, v] of Object.entries(vars)) root.style.setProperty(k, v);
  }

  function applyPageDesign(design) {
    setCSSVars(design.vars);

    document.body.style.background = design.vars["--page-bg"];
    document.body.style.fontFamily = design.vars["--page-font"];

    if (elBadge) elBadge.textContent = design.name;

    // keep buttons aligned with accent
    document.querySelectorAll(".gen-btn").forEach(b => (b.style.background = design.vars["--accent"]));
    document.querySelectorAll(".style-badge").forEach(b => {
      b.style.background = design.vars["--accent-light"];
      b.style.color = design.vars["--accent"];
    });
    if (elDownloadBtn) elDownloadBtn.style.background = design.vars["--accent"];
  }

  function applyTitleStyle(d) {
    const block = $("#title-block");
    if (!block) return;
    const h5 = $("h5", block);
    if (!h5) return;

    block.style.background   = d.bg;
    block.style.borderRadius = d.borderRadius || "0";
    block.style.borderBottom = d.borderBottom || "none";

    h5.style.fontFamily    = d.font;
    h5.style.color         = d.color;
    h5.style.textShadow    = d.textShadow || "none";
    h5.style.padding       = d.padding;
    h5.style.letterSpacing = d.letterSpacing || "0";
    h5.style.fontSize      = "1.3rem";
  }

  function applyBodyStyle(d) {
    const wrap = $("#cards-wrap");
    if (!wrap) return;

    wrap.style.background = d.wrapBg;
    wrap.style.padding = d.padding;
    wrap.style.borderRadius = d.borderRadius;
    wrap.style.display = "flex";
    wrap.style.flexDirection = "column";
    wrap.style.gap = d.gap;

    wrap.querySelectorAll(".song-card").forEach(card => {
      card.style.background = d.cardBg;
      card.style.borderRadius = d.borderRadius;
      card.style.outline = d.outline || "none";
      card.style.boxShadow = d.boxShadow || "none";
      card.style.overflow = "hidden";
      card.style.borderBottom = d.cardBorderBottom || "none";

      const rank = $(".rank-badge", card);
      rank.style.background = d.rankBg;
      rank.style.color = d.rankColor;

      const inputs = card.querySelectorAll("input");
      if (inputs[0]) inputs[0].style.color = d.textColor;
      if (inputs[1]) inputs[1].style.color = d.subColor;
    });
  }

  function refreshTitle() {
    const el = $("#title-block h5");
    if (!el) return;
    el.textContent = elDesiredTitle.value || (state.currentN ? `My Top ${state.currentN} Fave!` : "My Playlist");
  }

  function generateTemplate(n) {
    state.currentN = n;
    const title = elDesiredTitle.value || `My Top ${n} Fave!`;

    let html = `
      <div class="settings-panel">
        <div class="s-label">⚙ Card Design Settings</div>

        <div class="settings-row">
          <span>Title style:</span>
          <button class="gen-btn" id="btn-random-title" type="button">🎲 Randomize</button>
          <span class="style-badge" id="title-design-name">${state.activeTitleDesign.name}</span>
        </div>

        <div class="settings-row">
          <span>Card style:</span>
          <button class="gen-btn" id="btn-random-body" type="button">🎲 Randomize</button>
          <span class="style-badge" id="body-design-name">${state.activeBodyDesign.name}</span>
        </div>
      </div>

      <div id="cards-wrap">
        <div id="title-block"><h5>${escapeHTML(title)}</h5></div>
    `;

    for (let i = 0; i < n; i++) {
      html += `
        <div class="song-card" data-num="${i + 1}">
          <div class="rank-badge">#${i + 1}</div>
          <div class="song-info">
            <input type="text" value="Song Title" class="fsz-md fw-bold" placeholder="Song Title" />
            <input type="text" value="Artist Name" class="fsz-sm" placeholder="Artist Name" />
          </div>
        </div>
      `;
    }

    html += `</div>`;
    elTemplateResult.innerHTML = html;

    // bind newly created buttons
    $("#btn-random-title")?.addEventListener("click", () => {
      state.activeTitleDesign = pick(titleDesigns);
      $("#title-design-name").textContent = state.activeTitleDesign.name;
      applyTitleStyle(state.activeTitleDesign);
    });

    $("#btn-random-body")?.addEventListener("click", () => {
      state.activeBodyDesign = pick(bodyDesigns);
      $("#body-design-name").textContent = state.activeBodyDesign.name;
      applyBodyStyle(state.activeBodyDesign);
    });

    applyPageDesign(state.activePageDesign);
    applyTitleStyle(state.activeTitleDesign);
    applyBodyStyle(state.activeBodyDesign);

    elDownloadWrap.style.display = "flex";
  }

  function escapeHTML(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  // ---- Fix: style-safe text capture ----
  function copyRelevantTextStyles(fromEl, toEl, computed) {
    // Copy only stable & important properties (instead of cssText)
    const props = [
      "color",
      "fontFamily",
      "fontSize",
      "fontWeight",
      "fontStyle",
      "letterSpacing",
      "textTransform",
      "textShadow",
      "lineHeight",
      "textAlign",
      "paddingTop",
      "paddingRight",
      "paddingBottom",
      "paddingLeft",
      "marginTop",
      "marginRight",
      "marginBottom",
      "marginLeft",
      "whiteSpace",
    ];

    for (const p of props) {
      toEl.style[p] = computed[p];
    }

    // ensure theme-friendly defaults
    toEl.classList.add("capture-text");
    toEl.style.display = "block";
  }

  async function downloadImage() {
    const target = $("#cards-wrap");
    if (!target) return;

    elDownloadBtn.classList.add("loading");
    elDownloadBtn.innerHTML = '<i class="bi bi-hourglass-split"></i> Capturing...';

    // Replace inputs with spans so html2canvas captures correctly + preserves theme colors
    const inputs = target.querySelectorAll("input");
    const replacements = [];

    inputs.forEach((inp) => {
      const span = document.createElement("span");
      span.textContent = inp.value || inp.placeholder || "";

      const cs = window.getComputedStyle(inp);
      copyRelevantTextStyles(inp, span, cs);

      // In case the computed color is missing/empty, fallback to CSS variables.
      // (Also helps if some browsers normalize to rgb(0,0,0) unexpectedly.)
      if (!cs.color || cs.color === "rgb(0, 0, 0)") {
        // Use theme-driven colors based on which line (title vs artist)
        const isArtist = inp.classList.contains("fsz-sm");
        span.style.color = isArtist ? "var(--text-secondary)" : "var(--text-primary)";
      }

      inp.insertAdjacentElement("beforebegin", span);
      inp.style.display = "none";
      replacements.push({ inp, span });
    });

    try {
      const canvas = await html2canvas(target, {
        scale: 2,
        useCORS: true,
        backgroundColor: null,
        logging: false,
      });

      // Restore
      replacements.forEach(({ inp, span }) => {
        span.remove();
        inp.style.display = "";
      });

      const link = document.createElement("a");
      const titleText = (elDesiredTitle.value || `my-top-${state.currentN}`)
        .trim()
        .replace(/\s+/g, "-")
        .toLowerCase();

      link.download = `${titleText || "my-playlist"}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (err) {
      console.error("Screenshot failed:", err);
      replacements.forEach(({ inp, span }) => {
        span.remove();
        inp.style.display = "";
      });
    } finally {
      elDownloadBtn.classList.remove("loading");
      elDownloadBtn.innerHTML = '<i class="bi bi-download"></i> Download Image';
    }
  }

  // ---- Events ----
  elBtnRandomPage.addEventListener("click", () => {
    state.activePageDesign = pick(pageDesigns);
    applyPageDesign(state.activePageDesign);
  });

  elDesiredTitle.addEventListener("input", refreshTitle);

  elNumberOfSong.addEventListener("change", () => {
    const val = Number(elNumberOfSong.value);
    if (!Number.isNaN(val) && val >= 1) generateTemplate(Math.min(val, 50));
  });

  elDownloadBtn.addEventListener("click", downloadImage);

  // ---- Init ----
  applyPageDesign(state.activePageDesign);
})();
