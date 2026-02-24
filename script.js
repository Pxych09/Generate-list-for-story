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

  // ---- Locked page theme: Midnight Ink ----
  // Page colors/vars live in CSS :root. No page randomizer. No page picker.

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

  // ---- State ----
  const state = {
    activeTitle: titleDesigns[6],
    activeBody: bodyDesigns[9],
    currentN: 0,

    customEnabled: false,
    custom: {
      titleBg: "#0b1020",
      titleText: "#eef2ff",

      wrapBg: "#0b1020",
      cardBgHex: "#ffffff",         // used for picker only
      cardBgAlpha: 0.04,            // 0..1
      cardBg: "rgba(255,255,255,.04)",

      rankBg: "#7c3aed",
      rankText: "#ffffff",

      songText: "#eef2ff",
      artistTextHex: "#eef2ff",     // used for picker
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

  function hexToRgb(hex){
    const h = hex.replace("#","");
    const full = h.length === 3 ? h.split("").map(c=>c+c).join("") : h;
    const n = parseInt(full, 16);
    return { r:(n>>16)&255, g:(n>>8)&255, b:n&255 };
  }

  function rgbaFromHex(hex, a){
    const {r,g,b} = hexToRgb(hex);
    return `rgba(${r},${g},${b},${a})`;
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

  // ---- Apply preset + custom overrides ----
  function applyTitleWithOverrides(){
    applyTitleStyle(state.activeTitle);

    if (!state.customEnabled) return;

    const block = $("#title-block");
    if (!block) return;
    const h5 = $("h5", block);
    if (!h5) return;

    block.style.background = state.custom.titleBg;
    h5.style.color = state.custom.titleText;
  }

  function applyBodyWithOverrides(){
    applyBodyStyle(state.activeBody);

    if (!state.customEnabled) return;

    const wrap = $("#cards-wrap");
    if (!wrap) return;

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

  function refreshTitle(){
    const el = $("#title-block h5");
    if (!el) return;
    el.textContent = elDesiredTitle.value || (state.currentN ? `My Top ${state.currentN} Fave!` : "My Playlist");
  }

  // ---- Template ----
  function generateTemplate(n){
    
    state.currentN = n;
    const title = elDesiredTitle.value || `My Top ${n} Fave!`;

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
          <div class="ctrl">
            <label>Title BG</label>
            <input type="color" id="c_titleBg">
          </div>
          <div class="ctrl">
            <label>Title Text</label>
            <input type="color" id="c_titleText">
          </div>

          <div class="ctrl">
            <label>Wrap BG</label>
            <input type="color" id="c_wrapBg">
          </div>

          <div class="ctrl">
            <label>Card BG</label>
            <input type="color" id="c_cardBg">
          </div>

          <div class="ctrl">
            <label>Card BG Opacity</label>
            <input type="range" id="c_cardAlpha" min="0" max="100" value="4">
          </div>

          <div class="ctrl">
            <label>Rank BG</label>
            <input type="color" id="c_rankBg">
          </div>

          <div class="ctrl">
            <label>Rank Text</label>
            <input type="color" id="c_rankText">
          </div>

          <div class="ctrl">
            <label>Song Text</label>
            <input type="color" id="c_songText">
          </div>

          <div class="ctrl">
            <label>Artist Text</label>
            <input type="color" id="c_artistText">
          </div>

          <div class="ctrl">
            <label>Artist Opacity</label>
            <input type="range" id="c_artistAlpha" min="0" max="100" value="72">
          </div>
        </div>
      </div>

      <div id="cards-wrap">
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

    // ---- Bind custom color controls ----
    const elCustomEnabled = $("#customEnabled");
    const btnResetCustom  = $("#btn-reset-custom");

    const elCustomGrid = $("#custom-grid");
    function syncCustomGridVisibility(){
    if (!elCustomGrid) return;
    elCustomGrid.classList.toggle("is-visible", !!state.customEnabled);
    }

    const syncCustomDerived = () => {
      // card bg from hex + alpha slider
      state.custom.cardBg = rgbaFromHex(state.custom.cardBgHex, state.custom.cardBgAlpha);

      // artist text from hex + alpha slider
      state.custom.artistText = rgbaFromHex(state.custom.artistTextHex, state.custom.artistTextAlpha);
    };

    const setPicker = (id, value) => {
      const el = $(id);
      if (el) el.value = value;
    };

    const setRange = (id, value) => {
      const el = $(id);
      if (el) el.value = String(value);
    };

    // init UI from state
    elCustomEnabled.checked = state.customEnabled;
    syncCustomGridVisibility();

    setPicker("#c_titleBg", state.custom.titleBg);
    setPicker("#c_titleText", state.custom.titleText);
    setPicker("#c_wrapBg", state.custom.wrapBg);

    setPicker("#c_cardBg", state.custom.cardBgHex);
    setRange("#c_cardAlpha", Math.round(state.custom.cardBgAlpha * 100));

    setPicker("#c_rankBg", state.custom.rankBg);
    setPicker("#c_rankText", state.custom.rankText);

    setPicker("#c_songText", state.custom.songText);

    setPicker("#c_artistText", state.custom.artistTextHex);
    setRange("#c_artistAlpha", Math.round(state.custom.artistTextAlpha * 100));

    syncCustomDerived();

    elCustomEnabled.addEventListener("change", () => {
      state.customEnabled = elCustomEnabled.checked;
      syncCustomGridVisibility();
      applyTitleWithOverrides();
      applyBodyWithOverrides();
    });

    const onColor = (id, cb) => {
      const el = $(id);
      if (!el) return;
      el.addEventListener("input", cb);
    };
    const onRange = (id, cb) => {
      const el = $(id);
      if (!el) return;
      el.addEventListener("input", cb);
    };

    onColor("#c_titleBg", () => {
      state.custom.titleBg = $("#c_titleBg").value;
      applyTitleWithOverrides();
    });

    onColor("#c_titleText", () => {
      state.custom.titleText = $("#c_titleText").value;
      applyTitleWithOverrides();
    });

    onColor("#c_wrapBg", () => {
      state.custom.wrapBg = $("#c_wrapBg").value;
      applyBodyWithOverrides();
    });

    onColor("#c_cardBg", () => {
      state.custom.cardBgHex = $("#c_cardBg").value;
      syncCustomDerived();
      applyBodyWithOverrides();
    });

    onRange("#c_cardAlpha", () => {
      state.custom.cardBgAlpha = Number($("#c_cardAlpha").value) / 100;
      syncCustomDerived();
      applyBodyWithOverrides();
    });

    onColor("#c_rankBg", () => {
      state.custom.rankBg = $("#c_rankBg").value;
      applyBodyWithOverrides();
    });

    onColor("#c_rankText", () => {
      state.custom.rankText = $("#c_rankText").value;
      applyBodyWithOverrides();
    });

    onColor("#c_songText", () => {
      state.custom.songText = $("#c_songText").value;
      applyBodyWithOverrides();
    });

    onColor("#c_artistText", () => {
      state.custom.artistTextHex = $("#c_artistText").value;
      syncCustomDerived();
      applyBodyWithOverrides();
    });

    onRange("#c_artistAlpha", () => {
      state.custom.artistTextAlpha = Number($("#c_artistAlpha").value) / 100;
      syncCustomDerived();
      applyBodyWithOverrides();
    });

    btnResetCustom.addEventListener("click", () => {
      state.customEnabled = false;
      elCustomEnabled.checked = false;
      syncCustomGridVisibility();

      state.custom = {
        titleBg: "#0b1020",
        titleText: "#eef2ff",
        wrapBg: "#0b1020",
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

      setPicker("#c_titleBg", state.custom.titleBg);
      setPicker("#c_titleText", state.custom.titleText);
      setPicker("#c_wrapBg", state.custom.wrapBg);

      setPicker("#c_cardBg", state.custom.cardBgHex);
      setRange("#c_cardAlpha", Math.round(state.custom.cardBgAlpha * 100));

      setPicker("#c_rankBg", state.custom.rankBg);
      setPicker("#c_rankText", state.custom.rankText);

      setPicker("#c_songText", state.custom.songText);

      setPicker("#c_artistText", state.custom.artistTextHex);
      setRange("#c_artistAlpha", Math.round(state.custom.artistTextAlpha * 100));

      applyTitleWithOverrides();
      applyBodyWithOverrides();
    });

    // Apply initial styles
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

      // Theme-safe fallback
      const isArtist = inp.classList.contains("fsz-sm");
      span.style.color = isArtist ? (cs.color || "var(--text-secondary)") : (cs.color || "var(--text-primary)");

      inp.insertAdjacentElement("beforebegin", span);
      inp.style.display = "none";
      replacements.push({ inp, span });
    });

    try{
      // For JPG: use solid background = Midnight Ink (or your custom wrap/page)
      // Since body background is a solid color, this is safe.
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
