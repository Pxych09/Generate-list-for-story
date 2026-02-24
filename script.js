(() => {
  "use strict";

  // ---- DOM ----
  const elTemplateResult = document.getElementById("template__result");
  const elDesiredTitle   = document.getElementById("desiredTitle");
  const elNumberOfSong   = document.getElementById("numberOfSong");
  const elDownloadWrap   = document.getElementById("download-wrap");
  const elDownloadBtn    = document.getElementById("download-btn");

  const $ = (sel, root = document) => root.querySelector(sel);
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const rand = (min, max) => Math.random() * (max - min) + min;

  // ---- Presets ----
  const titleDesigns = [
    { name:"Neon Noir",   font:"'Bebas Neue',sans-serif",    bg:"linear-gradient(135deg,#0f0c29,#302b63,#24243e)", color:"#f0e130", textShadow:"0 0 12px #f0e13088", padding:"16px 20px", letterSpacing:"4px", borderRadius:"4px 4px 0 0" },
    { name:"Pastel Pop",  font:"'Syne',sans-serif",          bg:"linear-gradient(90deg,#ffecd2,#fcb69f)",          color:"#4a0e0e", textShadow:"none",              padding:"14px 18px", letterSpacing:"1px", borderRadius:"12px 12px 0 0" },
    { name:"Editorial",   font:"'Playfair Display',serif",   bg:"#fff",                                            color:"#111",    textShadow:"none",              padding:"16px 20px", letterSpacing:"0px", borderRadius:"0", borderBottom:"3px solid #111" },
    { name:"Retro Tape",  font:"'Space Mono',monospace",     bg:"#f5f0e1",                                         color:"#c0392b", textShadow:"2px 2px 0 #7f8c8d", padding:"14px 18px", letterSpacing:"2px", borderRadius:"0" },
    { name:"Rave",        font:"'Righteous',cursive",        bg:"linear-gradient(135deg,#f953c6,#b91d73)",         color:"#fff",    textShadow:"0 0 8px #fff8",     padding:"16px 20px", letterSpacing:"3px", borderRadius:"8px 8px 0 0" },
    { name:"Luxury Gold", font:"'Abril Fatface',serif",      bg:"#1a1200",                                         color:"#d4af37", textShadow:"0 0 6px #d4af3766", padding:"18px 22px", letterSpacing:"2px", borderRadius:"6px 6px 0 0" },
    { name:"Ice Cold",    font:"'Chakra Petch',sans-serif",  bg:"linear-gradient(120deg,#e0eafc,#cfdef3)",         color:"#1a3c6e", textShadow:"none",              padding:"14px 18px", letterSpacing:"2px", borderRadius:"4px 4px 0 0" },
    { name:"Brutalist",   font:"'Archivo Black',sans-serif", bg:"#000",                                            color:"#fff",    textShadow:"3px 3px 0 #ff0040", padding:"14px 18px", letterSpacing:"0", borderRadius:"0" },
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
    { name:"Glass Aurora",  wrapBg:"linear-gradient(140deg,#0ea5e9 0%,#a78bfa 45%,#fb7185 100%)", cardBg:"rgba(255,255,255,.22)", rankBg:"rgba(255,255,255,.35)", rankColor:"#0b1020", textColor:"#0b1020", subColor:"rgba(11,16,32,.7)", borderRadius:"18px", gap:"10px", padding:"14px", boxShadow:"0 10px 30px rgba(0,0,0,.15)", outline:"1px solid rgba(255,255,255,.22)" },
    { name:"Ink Minimal",   wrapBg:"#0b1020", cardBg:"rgba(255,255,255,.04)", rankBg:"#7c3aed", rankColor:"#fff", textColor:"#eef2ff", subColor:"rgba(238,242,255,.72)", borderRadius:"12px", gap:"10px", padding:"12px", boxShadow:"none", outline:"1px solid rgba(255,255,255,.10)" },
  ];

  const ORNAMENTS = [
    { label: "Star", value: "star", char: "★" },
    { label: "Heart", value: "heart", char: "❤" },
    { label: "Spade", value: "spade", char: "♠" },
    { label: "Club", value: "club", char: "♣" },
    { label: "Circle", value: "circle", char: "●" },
    { label: "Triangle", value: "triangle", char: "▲" },
    { label: "Diamond", value: "diamond", char: "◆" },
  ];

  // ---- State ----
  const state = {
    activeTitle: titleDesigns[6],
    activeBody: bodyDesigns[9],
    currentN: 0,

    customEnabled: false,
    custom: {
      titleBg: "#0b1020",
      titleBgTransparent: false,
      titleText: "#eef2ff",
      titleFont: "",
      titleAlign: "left",

      wrapBg: "#0b1020",

      wrapObject: "star",
      wrapObjectCustomChar: "",        // NEW: user supplied ornament (e.g. 🚀)
      wrapObjectSize: 22,
      wrapObjectQty: 24,
      wrapObjectDistance: 24,
      wrapGlow: false,
      wrapAnimate: false,

      cardBgHex: "#ffffff",
      cardBgAlpha: 0.04,
      cardBg: "rgba(255,255,255,.04)",

      rankBg: "#7c3aed",
      rankText: "#ffffff",

      songText: "#eef2ff",

      artistTextHex: "#eef2ff",
      artistTextAlpha: 0.72,
      artistText: "rgba(238,242,255,.72)",
    }
  };

  // ---- Utils ----
  function escapeHTML(str){
    return String(str)
      .replaceAll("&","&amp;")
      .replaceAll("<","&lt;")
      .replaceAll(">","&gt;")
      .replaceAll('"',"&quot;")
      .replaceAll("'","&#039;");
  }

  function fillSelect(selectEl, items){
    selectEl.innerHTML = items
      .map(d => `<option value="${escapeHTML(d.name)}">${escapeHTML(d.name)}</option>`)
      .join("");
  }

  function isValidHex(s){
    const v = String(s || "").trim();
    return /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(v);
  }

  function normalizeHex(s){
    const v = String(s || "").trim();
    if (!isValidHex(v)) return null;
    if (v.length === 4) return ("#" + v.slice(1).split("").map(c => c + c).join("")).toLowerCase();
    return v.toLowerCase();
  }

  function clamp01(n){ return Math.max(0, Math.min(1, n)); }

  function hexToRgb(hex){
    const h = hex.replace("#","");
    const n = parseInt(h, 16);
    return { r:(n>>16)&255, g:(n>>8)&255, b:n&255 };
  }

  function rgbaFromHex(hex, a){
    const {r,g,b} = hexToRgb(hex);
    return `rgba(${r},${g},${b},${a})`;
  }

  // NEW: best-effort first grapheme (emoji-safe enough)
  function firstGrapheme(s){
    const v = String(s || "").trim();
    if (!v) return "";
    if (window.Intl && Intl.Segmenter){
      const seg = new Intl.Segmenter(undefined, { granularity: "grapheme" });
      const it = seg.segment(v)[Symbol.iterator]().next();
      return it?.value?.segment || "";
    }
    return Array.from(v)[0] || "";
  }

  // ---- Google Fonts loader ----
  function extractFirstFontFamily(raw){
    const s = String(raw || "").trim();
    if (!s) return "";
    const first = s.split(",")[0].trim();
    const unquoted = first.replace(/^["']|["']$/g, "").trim();
    const safe = unquoted.replace(/[^a-zA-Z0-9 \-]/g, "").trim();
    return safe;
  }

  function ensureGoogleFontLoaded(fontFamily){
    const family = extractFirstFontFamily(fontFamily);
    if (!family) return;

    const id = "dynamic-title-font";
    let link = document.getElementById(id);
    if (!link){
      link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }

    const familyParam = encodeURIComponent(family).replace(/%20/g, "+");
    link.href = `https://fonts.googleapis.com/css2?family=${familyParam}:wght@300;400;600;700;800&display=swap`;
  }

  function debounce(fn, wait){
    let t = null;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...args), wait);
    };
  }
  const debouncedFontLoad = debounce((val) => ensureGoogleFontLoaded(val), 350);

  // ---- Ornaments ----
  function getOrnChar(){
    // NEW: if user typed something, use it instead of dropdown
    const customChar = firstGrapheme(state.custom.wrapObjectCustomChar);
    if (state.customEnabled && customChar) return customChar;

    return ORNAMENTS.find(o => o.value === state.custom.wrapObject)?.char || "★";
  }

  function generatePositions(qty, w, h, minDist){
    const pts = [];
    const maxAttempts = qty * 60;

    let attempts = 0;
    while (pts.length < qty && attempts < maxAttempts){
      attempts++;
      const x = rand(0, w);
      const y = rand(0, h);

      let ok = true;
      for (const p of pts){
        const dx = x - p.x;
        const dy = y - p.y;
        if ((dx*dx + dy*dy) < (minDist*minDist)){
          ok = false;
          break;
        }
      }
      if (ok) pts.push({x,y});
    }

    while (pts.length < qty){
      pts.push({ x: rand(0,w), y: rand(0,h) });
    }
    return pts;
  }

  // ---- Apply preset styles ----
  function applyTitleStyle(d){
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
    h5.style.textAlign     = "left";
  }

  function applyBodyStyle(d){
    const wrap = $("#cards-wrap");
    if (!wrap) return;

    wrap.style.background = d.wrapBg;
    wrap.style.padding = d.padding;
    wrap.style.borderRadius = d.borderRadius;
    wrap.style.display = "flex";
    wrap.style.flexDirection = "column";
    wrap.style.gap = d.gap;
    wrap.style.bottom = "1em";

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

  // ---- Custom derived ----
  function syncCustomDerived(){
    state.custom.cardBgAlpha = clamp01(state.custom.cardBgAlpha);
    state.custom.artistTextAlpha = clamp01(state.custom.artistTextAlpha);

    state.custom.cardBg = rgbaFromHex(state.custom.cardBgHex, state.custom.cardBgAlpha);
    state.custom.artistText = rgbaFromHex(state.custom.artistTextHex, state.custom.artistTextAlpha);

    state.custom.wrapObjectSize = Math.max(8, Math.min(80, Number(state.custom.wrapObjectSize) || 22));
    state.custom.wrapObjectQty = Math.max(0, Math.min(250, Number(state.custom.wrapObjectQty) || 0));
    state.custom.wrapObjectDistance = Math.max(0, Math.min(120, Number(state.custom.wrapObjectDistance) || 0));
  }

  function renderOrnaments(){
    const layer = $("#wrap-ornaments");
    const wrap  = $("#cards-wrap");
    if (!layer || !wrap) return;

    layer.innerHTML = "";
    layer.classList.toggle("is-animated", !!state.custom.wrapAnimate);
    layer.classList.toggle("is-glow", !!state.custom.wrapGlow);

    const qty = state.custom.wrapObjectQty;
    if (!state.customEnabled || qty <= 0) return;

    const char = getOrnChar();
    const size = state.custom.wrapObjectSize;
    const minDist = state.custom.wrapObjectDistance;
    const ornColor = state.custom.rankBg || "#7c3aed";

    const w = wrap.clientWidth || 520;
    const h = wrap.clientHeight || 300;

    const pts = generatePositions(qty, w, h, minDist);

    for (let i = 0; i < qty; i++){
      const s = document.createElement("span");
      s.className = "orn";
      s.textContent = char;

      const {x,y} = pts[i];

      const rot = rand(-25, 25);
      const dx = rand(-16, 16);
      const dy = rand(-18, 18);
      const speed = rand(4.5, 8.5);

      s.style.left = `${x}px`;
      s.style.top  = `${y}px`;
      s.style.fontSize = `${size}px`;
      s.style.color = ornColor;
      s.style.opacity = String(rand(0.10, 0.22));

      s.style.setProperty("--orn-rot", `${rot}deg`);
      s.style.setProperty("--orn-dx", `${dx}px`);
      s.style.setProperty("--orn-dy", `${dy}px`);
      s.style.setProperty("--orn-speed", `${speed}s`);

      layer.appendChild(s);
    }
  }

  // ---- Apply preset + custom overrides ----
  function applyTitleWithOverrides(){
    applyTitleStyle(state.activeTitle);

    if (!state.customEnabled) return;

    const block = $("#title-block");
    if (!block) return;
    const h5 = $("h5", block);
    if (!h5) return;

    if (state.custom.titleBgTransparent) {
      block.style.background = "transparent";
    } else {
      block.style.background = state.custom.titleBg;
    }

    h5.style.color = state.custom.titleText;

    const raw = String(state.custom.titleFont || "").trim();
    if (raw){
      debouncedFontLoad(raw);
      const hasCommaOrQuote = /['",]/.test(raw);
      h5.style.fontFamily = hasCommaOrQuote ? raw : `'${raw}', sans-serif`;
    }

    h5.style.textAlign = state.custom.titleAlign || "left";
  }

  function applyBodyWithOverrides(){
    applyBodyStyle(state.activeBody);

    const wrap = $("#cards-wrap");
    if (!wrap) return;

    if (state.customEnabled) {
      wrap.style.background = state.custom.wrapBg;

      wrap.querySelectorAll(".song-card").forEach(card => {
        card.style.background = state.custom.cardBg;

        const rank = $(".rank-badge", card);
        if (rank){
          rank.style.background = state.custom.rankBg;
          rank.style.color = state.custom.rankText;
        }

        const inputs = card.querySelectorAll("input");
        if (inputs[0]) inputs[0].style.color = state.custom.songText;
        if (inputs[1]) inputs[1].style.color = state.custom.artistText;
      });
    }

    renderOrnaments();
  }

  function refreshTitle(){
    const el = $("#title-block h5");
    if (!el) return;
    el.textContent = elDesiredTitle.value || (state.currentN ? `My Top ${state.currentN} Fave!` : "My Playlist");
  }

  // ---- Custom color binding ----
  function bindHexColor(pickerId, hexId, getVal, setVal, onApply){
    const picker = $(pickerId);
    const hexIn  = $(hexId);
    if (!picker || !hexIn) return;

    const syncUI = () => {
      const v = getVal();
      picker.value = v;
      hexIn.value = v;
    };

    picker.addEventListener("input", () => {
      const v = normalizeHex(picker.value) || "#000000";
      setVal(v);
      hexIn.value = v;
      onApply();
    });

    const onHexChange = () => {
      const v = normalizeHex(hexIn.value);
      if (!v) {
        hexIn.style.borderColor = "rgba(255,80,120,.55)";
        return;
      }
      hexIn.style.borderColor = "";
      setVal(v);
      picker.value = v;
      hexIn.value = v;
      onApply();
    };

    hexIn.addEventListener("input", onHexChange);
    hexIn.addEventListener("change", onHexChange);

    syncUI();
  }

  // ---- UI builders ----
  function colorControl(label, key){
    return `
      <div class="ctrl">
        <div class="ctrl-head">
          <label>${escapeHTML(label)}</label>
        </div>
        <div class="ctrl-inputs">
          <input type="color" id="${key}_picker" />
          <input class="hex-input" id="${key}_hex" type="text" value="#000000" placeholder="#rrggbb" spellcheck="false" />
        </div>
      </div>
    `;
  }

  function rangeControl(label, key, min, max, value){
    return `
      <div class="ctrl">
        <div class="ctrl-head">
          <label>${escapeHTML(label)}</label>
        </div>
        <input class="range" id="${key}_range" type="range" min="${min}" max="${max}" value="${value}">
      </div>
    `;
  }

  function textControl(label, id, placeholder, value){
    return `
      <div class="ctrl">
        <div class="ctrl-head">
          <label>${escapeHTML(label)}</label>
        </div>
        <input class="text-input" id="${id}" type="text" placeholder="${escapeHTML(placeholder)}" value="${escapeHTML(value || "")}" spellcheck="false" />
      </div>
    `;
  }

  function selectControl(label, id, options, value){
    const opts = options.map(o => `<option value="${o.value}">${escapeHTML(o.label)}</option>`).join("");
    return `
      <div class="ctrl">
        <div class="ctrl-head">
          <label>${escapeHTML(label)}</label>
        </div>
        <div class="ctrl-inputs">
          <select class="theme-select" id="${id}">${opts}</select>
        </div>
      </div>
    `;
  }

  function radioControl(label, name, options, checkedValue){
    const radios = options.map(o => `
      <label class="format-option" style="gap:8px;">
        <input type="radio" name="${name}" value="${o.value}" ${o.value === checkedValue ? "checked" : ""}>
        ${escapeHTML(o.label)}
      </label>
    `).join("");
    return `
      <div class="ctrl">
        <div class="ctrl-head">
          <label>${escapeHTML(label)}</label>
        </div>
        <div class="ctrl-inputs" style="gap:14px; flex-wrap:wrap;">
          ${radios}
        </div>
      </div>
    `;
  }

  function wrapObjectsControl(){
    const options = ORNAMENTS.map(o => ({label:o.label, value:o.value}));
    return `
      ${selectControl("Wrap BG Objects", "wrapObjSelect", options, state.custom.wrapObject)}

      <!-- NEW: custom character input -->
      ${textControl("Input a desired object instead", "wrapObjCustomChar", "e.g. 🚀", state.custom.wrapObjectCustomChar)}

      ${rangeControl("Object Size", "wrapObjSize", 8, 80, state.custom.wrapObjectSize)}
      <div class="ctrl">
        <div class="ctrl-head"><label>Quantity</label></div>
        <div class="ctrl-inputs">
          <input class="num-input" id="wrapObjQty" type="number" min="0" max="250" value="${state.custom.wrapObjectQty}" />
        </div>
      </div>
      ${rangeControl("Distance", "wrapObjDist", 0, 120, state.custom.wrapObjectDistance)}
      ${radioControl("Toggle Glows", "wrapGlow", [{label:"Off", value:"off"},{label:"On", value:"on"}], state.custom.wrapGlow ? "on" : "off")}
      <div class="ctrl">
        <div class="ctrl-head"><label>Animate</label></div>
        <button class="small-btn" id="wrapObjAnimBtn" type="button">OFF</button>
      </div>
    `;
  }

  // ---- Helper: sync UI controls from state (for reset correctness) ----
  function syncCustomControlsFromState(){
    // checkboxes + selects + text
    const elCustomEnabled = $("#customEnabled");
    const elCustomGrid    = $("#custom-grid");
    if (elCustomEnabled) elCustomEnabled.checked = !!state.customEnabled;
    if (elCustomGrid) elCustomGrid.classList.toggle("is-visible", !!state.customEnabled);

    const elTitleBgTransparent = $("#titleBgTransparentChk");
    if (elTitleBgTransparent) elTitleBgTransparent.checked = !!state.custom.titleBgTransparent;

    const elFont = $("#titleFontInput");
    if (elFont) elFont.value = state.custom.titleFont || "";

    const elAlign = $("#titleAlignSelect");
    if (elAlign) elAlign.value = state.custom.titleAlign || "left";

    // color pickers + hex
    const setColor = (key, value) => {
      const p = $(`#${key}_picker`);
      const h = $(`#${key}_hex`);
      if (p) p.value = value;
      if (h){ h.value = value; h.style.borderColor = ""; }
    };

    setColor("c_titleBg", state.custom.titleBg);
    setColor("c_titleText", state.custom.titleText);
    setColor("c_wrapBg", state.custom.wrapBg);
    setColor("c_cardBg", state.custom.cardBgHex);
    setColor("c_rankBg", state.custom.rankBg);
    setColor("c_rankText", state.custom.rankText);
    setColor("c_songText", state.custom.songText);
    setColor("c_artistText", state.custom.artistTextHex);

    // ranges
    const elCardAlpha = $("#c_cardAlpha_range");
    if (elCardAlpha) elCardAlpha.value = String(Math.round(state.custom.cardBgAlpha * 100));

    const elArtistAlpha = $("#c_artistAlpha_range");
    if (elArtistAlpha) elArtistAlpha.value = String(Math.round(state.custom.artistTextAlpha * 100));

    // wrap controls
    const elObjSelect = $("#wrapObjSelect");
    if (elObjSelect) elObjSelect.value = state.custom.wrapObject;

    const elObjCustom = $("#wrapObjCustomChar");
    if (elObjCustom) elObjCustom.value = state.custom.wrapObjectCustomChar || "";

    const elObjSize = $("#wrapObjSize_range");
    if (elObjSize) elObjSize.value = String(state.custom.wrapObjectSize);

    const elObjQty = $("#wrapObjQty");
    if (elObjQty) elObjQty.value = String(state.custom.wrapObjectQty);

    const elObjDist = $("#wrapObjDist_range");
    if (elObjDist) elObjDist.value = String(state.custom.wrapObjectDistance);

    // glow radio
    const glowRadios = document.querySelectorAll('input[name="wrapGlow"]');
    glowRadios.forEach(r => {
      r.checked = (state.custom.wrapGlow ? "on" : "off") === r.value;
    });

    // animate button
    const elAnimBtn = $("#wrapObjAnimBtn");
    if (elAnimBtn){
      elAnimBtn.textContent = state.custom.wrapAnimate ? "ON" : "OFF";
      elAnimBtn.classList.toggle("is-on", !!state.custom.wrapAnimate);
    }

    // title bg input disabled state
    const titleBgPicker = $("#c_titleBg_picker");
    const titleBgHex = $("#c_titleBg_hex");
    if (titleBgPicker && titleBgHex){
      const disabled = !!state.custom.titleBgTransparent;
      titleBgPicker.disabled = disabled;
      titleBgHex.disabled = disabled;
      titleBgPicker.style.opacity = disabled ? "0.4" : "1";
      titleBgHex.style.opacity = disabled ? "0.4" : "1";
    }
  }

  // ---- Template ----
  function generateTemplate(n){
    state.currentN = n;
    const title = elDesiredTitle.value || `My Top ${n} Fave!`;

    syncCustomDerived();

    let html = `
      <div class="settings-panel">
        <div class="s-label">⚙ Card Design Settings</div>

        <div class="settings-row">
          <span>Title style:</span>
          <select id="titleThemeSelect" class="theme-select theme-select-inline"></select>
          <button class="gen-btn" id="btn-random-title" type="button">🎲</button>
        </div>

        <div class="settings-row">
          <span>Card style:</span>
          <select id="bodyThemeSelect" class="theme-select theme-select-inline"></select>
          <button class="gen-btn" id="btn-random-body" type="button">🎲</button>
        </div>

        <div class="ctrl-row">
          <label class="toggle">
            <input type="checkbox" id="customEnabled">
            Enable Custom Colors
          </label>
          <button class="btn-ghost" id="btn-reset-custom" type="button">Reset Custom</button>
        </div>

        <div class="settings-grid" id="custom-grid">
          ${colorControl("Title BG", "c_titleBg")}
          <div class="ctrl">
            <label class="toggle">
              <input type="checkbox" id="titleBgTransparentChk">
              Set this to transparent instead
            </label>
          </div>

          ${colorControl("Title Text", "c_titleText")}
          ${textControl("Title Font Style", "titleFontInput", "e.g. Poppins", state.custom.titleFont)}
          ${selectControl("Title Alignment", "titleAlignSelect", [
            {label:"Left", value:"left"},
            {label:"Center", value:"center"},
            {label:"Right", value:"right"},
          ], state.custom.titleAlign)}

          ${colorControl("Wrap BG", "c_wrapBg")}
          ${wrapObjectsControl()}

          ${colorControl("Card BG", "c_cardBg")}
          ${rangeControl("Card BG Opacity", "c_cardAlpha", 0, 100, Math.round(state.custom.cardBgAlpha * 100))}

          ${colorControl("Rank BG", "c_rankBg")}
          ${colorControl("Rank Text", "c_rankText")}

          ${colorControl("Song Text", "c_songText")}

          ${colorControl("Artist Text", "c_artistText")}
          ${rangeControl("Artist Opacity", "c_artistAlpha", 0, 100, Math.round(state.custom.artistTextAlpha * 100))}
        </div>
      </div>

      <div id="cards-wrap" class="position-sticky">
        <div id="wrap-ornaments" aria-hidden="true"></div>
        <div id="title-block"><h5>${escapeHTML(title)}</h5></div>
    `;

    for (let i=0;i<n;i++){
      html += `
        <div class="song-card">
          <div class="rank-badge">#${i+1}</div>
          <div class="song-info">
            <input type="text" value="Song Title" class="fsz-md fw-bold" placeholder="Song Title" />
            <input type="text" value="Artist Name" class="fsz-sm" placeholder="Artist Name" />
          </div>
        </div>
      `;
    }

    html += `</div>`;
    elTemplateResult.innerHTML = html;

    // ---- Bind preset dropdowns ----
    const elTitleSelect = $("#titleThemeSelect");
    const elBodySelect  = $("#bodyThemeSelect");

    fillSelect(elTitleSelect, titleDesigns);
    fillSelect(elBodySelect, bodyDesigns);

    elTitleSelect.value = state.activeTitle.name;
    elBodySelect.value  = state.activeBody.name;

    elTitleSelect.addEventListener("change", () => {
      const d = titleDesigns.find(x => x.name === elTitleSelect.value);
      if (d) state.activeTitle = d;
      applyTitleWithOverrides();
    });

    elBodySelect.addEventListener("change", () => {
      const d = bodyDesigns.find(x => x.name === elBodySelect.value);
      if (d) state.activeBody = d;
      applyBodyWithOverrides();
    });

    $("#btn-random-title").addEventListener("click", () => {
      const d = pick(titleDesigns);
      state.activeTitle = d;
      elTitleSelect.value = d.name;
      applyTitleWithOverrides();
    });

    $("#btn-random-body").addEventListener("click", () => {
      const d = pick(bodyDesigns);
      state.activeBody = d;
      elBodySelect.value = d.name;
      applyBodyWithOverrides();
    });

    // ---- Toggle custom grid ----
    const elCustomEnabled = $("#customEnabled");
    const btnResetCustom  = $("#btn-reset-custom");
    const elCustomGrid    = $("#custom-grid");

    function syncCustomGridVisibility(){
      if (!elCustomGrid) return;
      elCustomGrid.classList.toggle("is-visible", !!state.customEnabled);
    }

    elCustomEnabled.checked = state.customEnabled;
    syncCustomGridVisibility();

    elCustomEnabled.addEventListener("change", () => {
      state.customEnabled = elCustomEnabled.checked;
      syncCustomGridVisibility();
      syncCustomDerived();

      if (state.customEnabled && state.custom.titleFont) {
        ensureGoogleFontLoaded(state.custom.titleFont);
      }

      applyTitleWithOverrides();
      applyBodyWithOverrides();
    });

    // ---- Bind Title BG transparency checkbox + disable inputs ----
    const elTitleBgTransparent = $("#titleBgTransparentChk");
    const titleBgPicker = $("#c_titleBg_picker");
    const titleBgHex = $("#c_titleBg_hex");

    if (elTitleBgTransparent){
      elTitleBgTransparent.checked = !!state.custom.titleBgTransparent;

      const syncTitleBgUI = () => {
        const disabled = state.custom.titleBgTransparent;
        if (titleBgPicker) titleBgPicker.disabled = disabled;
        if (titleBgHex) titleBgHex.disabled = disabled;
        if (titleBgPicker) titleBgPicker.style.opacity = disabled ? "0.4" : "1";
        if (titleBgHex) titleBgHex.style.opacity = disabled ? "0.4" : "1";
      };

      syncTitleBgUI();

      elTitleBgTransparent.addEventListener("change", () => {
        state.custom.titleBgTransparent = elTitleBgTransparent.checked;
        syncTitleBgUI();
        applyTitleWithOverrides();
      });
    }

    // ---- Bind Title Text font + align ----
    const elFont = $("#titleFontInput");
    if (elFont){
      elFont.value = state.custom.titleFont || "";
      elFont.addEventListener("input", () => {
        state.custom.titleFont = elFont.value;
        debouncedFontLoad(elFont.value);
        applyTitleWithOverrides();
      });
    }

    const elAlign = $("#titleAlignSelect");
    if (elAlign){
      elAlign.value = state.custom.titleAlign || "left";
      elAlign.addEventListener("change", () => {
        state.custom.titleAlign = elAlign.value;
        applyTitleWithOverrides();
      });
    }

    // ---- Bind custom colors ----
    bindHexColor("#c_titleBg_picker", "#c_titleBg_hex",
      () => state.custom.titleBg,
      (v) => state.custom.titleBg = v,
      () => applyTitleWithOverrides()
    );

    bindHexColor("#c_titleText_picker", "#c_titleText_hex",
      () => state.custom.titleText,
      (v) => state.custom.titleText = v,
      () => applyTitleWithOverrides()
    );

    bindHexColor("#c_wrapBg_picker", "#c_wrapBg_hex",
      () => state.custom.wrapBg,
      (v) => state.custom.wrapBg = v,
      () => applyBodyWithOverrides()
    );

    bindHexColor("#c_cardBg_picker", "#c_cardBg_hex",
      () => state.custom.cardBgHex,
      (v) => { state.custom.cardBgHex = v; syncCustomDerived(); },
      () => applyBodyWithOverrides()
    );

    bindHexColor("#c_rankBg_picker", "#c_rankBg_hex",
      () => state.custom.rankBg,
      (v) => state.custom.rankBg = v,
      () => applyBodyWithOverrides()
    );

    bindHexColor("#c_rankText_picker", "#c_rankText_hex",
      () => state.custom.rankText,
      (v) => state.custom.rankText = v,
      () => applyBodyWithOverrides()
    );

    bindHexColor("#c_songText_picker", "#c_songText_hex",
      () => state.custom.songText,
      (v) => state.custom.songText = v,
      () => applyBodyWithOverrides()
    );

    bindHexColor("#c_artistText_picker", "#c_artistText_hex",
      () => state.custom.artistTextHex,
      (v) => { state.custom.artistTextHex = v; syncCustomDerived(); },
      () => applyBodyWithOverrides()
    );

    // ranges
    const elCardAlpha = $("#c_cardAlpha_range");
    if (elCardAlpha){
      elCardAlpha.value = String(Math.round(state.custom.cardBgAlpha * 100));
      elCardAlpha.addEventListener("input", () => {
        state.custom.cardBgAlpha = Number(elCardAlpha.value) / 100;
        syncCustomDerived();
        applyBodyWithOverrides();
      });
    }

    const elArtistAlpha = $("#c_artistAlpha_range");
    if (elArtistAlpha){
      elArtistAlpha.value = String(Math.round(state.custom.artistTextAlpha * 100));
      elArtistAlpha.addEventListener("input", () => {
        state.custom.artistTextAlpha = Number(elArtistAlpha.value) / 100;
        syncCustomDerived();
        applyBodyWithOverrides();
      });
    }

    // ---- Wrap BG controls ----
    const elObjSelect = $("#wrapObjSelect");
    const elObjCustom = $("#wrapObjCustomChar"); // NEW
    const elObjSize   = $("#wrapObjSize_range");
    const elObjQty    = $("#wrapObjQty");
    const elObjDist   = $("#wrapObjDist_range");
    const elAnimBtn   = $("#wrapObjAnimBtn");

    if (elObjSelect){
      elObjSelect.value = state.custom.wrapObject;
      elObjSelect.addEventListener("change", () => {
        state.custom.wrapObject = elObjSelect.value;
        applyBodyWithOverrides();
      });
    }

    // NEW: custom char input overrides dropdown when non-empty
    if (elObjCustom){
      elObjCustom.value = state.custom.wrapObjectCustomChar || "";
      elObjCustom.addEventListener("input", () => {
        state.custom.wrapObjectCustomChar = elObjCustom.value;
        applyBodyWithOverrides();
      });
    }

    if (elObjSize){
      elObjSize.value = String(state.custom.wrapObjectSize);
      elObjSize.addEventListener("input", () => {
        state.custom.wrapObjectSize = Number(elObjSize.value);
        syncCustomDerived();
        applyBodyWithOverrides();
      });
    }

    if (elObjQty){
      elObjQty.value = String(state.custom.wrapObjectQty);
      elObjQty.addEventListener("input", () => {
        state.custom.wrapObjectQty = Number(elObjQty.value);
        syncCustomDerived();
        applyBodyWithOverrides();
      });
    }

    if (elObjDist){
      elObjDist.value = String(state.custom.wrapObjectDistance);
      elObjDist.addEventListener("input", () => {
        state.custom.wrapObjectDistance = Number(elObjDist.value);
        syncCustomDerived();
        applyBodyWithOverrides();
      });
    }

    // glow radio
    const glowRadios = document.querySelectorAll('input[name="wrapGlow"]');
    glowRadios.forEach(r => {
      r.addEventListener("change", () => {
        state.custom.wrapGlow = (r.value === "on");
        applyBodyWithOverrides();
      });
    });

    const syncAnimBtn = () => {
      if (!elAnimBtn) return;
      elAnimBtn.textContent = state.custom.wrapAnimate ? "ON" : "OFF";
      elAnimBtn.classList.toggle("is-on", !!state.custom.wrapAnimate);
    };

    if (elAnimBtn){
      syncAnimBtn();
      elAnimBtn.addEventListener("click", () => {
        state.custom.wrapAnimate = !state.custom.wrapAnimate;
        syncAnimBtn();
        applyBodyWithOverrides();
      });
    }

    // reset (UPDATED: resets state + UI controls)
    btnResetCustom.addEventListener("click", () => {
      state.customEnabled = false;

      state.custom = {
        titleBg: "#0b1020",
        titleBgTransparent: false,
        titleText: "#eef2ff",
        titleFont: "",
        titleAlign: "left",

        wrapBg: "#0b1020",

        wrapObject: "star",
        wrapObjectCustomChar: "",   // NEW reset
        wrapObjectSize: 22,
        wrapObjectQty: 24,
        wrapObjectDistance: 24,
        wrapGlow: false,
        wrapAnimate: false,

        cardBgHex: "#ffffff",
        cardBgAlpha: 0.04,
        cardBg: "rgba(255,255,255,.04)",
        rankBg: "#7c3aed",
        rankText: "#ffffff",
        songText: "#eef2ff",
        artistTextHex: "#eef2ff",
        artistTextAlpha: 0.72,
        artistText: "rgba(238,242,255,.72)",
      };

      syncCustomDerived();
      syncCustomControlsFromState(); // IMPORTANT: resets the UI inputs too

      applyTitleWithOverrides();
      applyBodyWithOverrides();
    });

    // Apply initial styles + show download
    applyTitleWithOverrides();
    applyBodyWithOverrides();

    elDownloadWrap.style.display = "flex";
  }

  // ---- Download (PNG/JPG) ----
  function copyRelevantTextStyles(span, computed){
    const props = [
      "color","fontFamily","fontSize","fontWeight","fontStyle",
      "letterSpacing","textTransform","textShadow","lineHeight","textAlign",
      "paddingTop","paddingRight","paddingBottom","paddingLeft",
      "marginTop","marginRight","marginBottom","marginLeft","whiteSpace",
    ];
    for (const p of props) span.style[p] = computed[p];
    span.classList.add("capture-text");
    span.style.display = "block";
  }

  function getExportFormat(){
    const checked = document.querySelector('input[name="exportFormat"]:checked');
    return checked?.value === "jpg" ? "jpg" : "png";
  }

  async function downloadImage(){
    const target = $("#cards-wrap");
    if (!target) return;

    const format = getExportFormat();
    const isJpg = format === "jpg";

    elDownloadBtn.classList.add("loading");
    elDownloadBtn.innerHTML = '<i class="bi bi-hourglass-split"></i> Capturing...';

    const inputs = target.querySelectorAll("input");
    const replacements = [];

    inputs.forEach((inp) => {
      const span = document.createElement("span");
      span.textContent = inp.value || inp.placeholder || "";

      const cs = window.getComputedStyle(inp);
      copyRelevantTextStyles(span, cs);

      const isArtist = inp.classList.contains("fsz-sm");
      span.style.color = isArtist ? (cs.color || "var(--text-secondary)") : (cs.color || "var(--text-primary)");

      inp.insertAdjacentElement("beforebegin", span);
      inp.style.display = "none";
      replacements.push({ inp, span });
    });

    try{
      const bodyBG = window.getComputedStyle(document.body).backgroundColor || "#0b1020";

      const canvas = await html2canvas(target, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: isJpg ? bodyBG : null,
      });

      replacements.forEach(({ inp, span }) => {
        span.remove();
        inp.style.display = "";
      });

      const safeName = (elDesiredTitle.value || `my-top-${state.currentN}`)
        .trim()
        .replace(/\s+/g,"-")
        .toLowerCase() || "my-playlist";

      const link = document.createElement("a");
      link.download = `${safeName}.${format}`;
      link.href = isJpg ? canvas.toDataURL("image/jpeg", 0.95) : canvas.toDataURL("image/png");
      link.click();
    } catch (err){
      console.error("Screenshot failed:", err);
      replacements.forEach(({ inp, span }) => {
        span.remove();
        inp.style.display = "";
      });
    } finally {
      elDownloadBtn.classList.remove("loading");
      elDownloadBtn.innerHTML = '<i class="bi bi-download"></i> Download';
    }
  }

  // ---- Events ----
  elDesiredTitle.addEventListener("input", refreshTitle);

  elNumberOfSong.addEventListener("change", () => {
    const val = Number(elNumberOfSong.value);
    if (!Number.isNaN(val) && val >= 1) generateTemplate(Math.min(val, 50));
  });

  elDownloadBtn.addEventListener("click", downloadImage);

})();
