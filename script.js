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

  // ---- Locked page theme: Midnight Ink (no randomizer, no picker) ----
  // All page theme vars are now in CSS :root, so we don't need pageDesign JS at all.

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

  const state = {
    activeTitle: titleDesigns[6],
    activeBody: bodyDesigns[9], // Ink Minimal looks great on Midnight Ink
    currentN: 0,
  };

  function escapeHTML(str){
    return String(str)
      .replaceAll("&","&amp;")
      .replaceAll("<","&lt;")
      .replaceAll(">","&gt;")
      .replaceAll('"',"&quot;")
      .replaceAll("'","&#039;");
  }

  function refreshTitle(){
    const el = $("#title-block h5");
    if (!el) return;
    el.textContent = elDesiredTitle.value || (state.currentN ? `My Top ${state.currentN} Fave!` : "My Playlist");
  }

  function applyTitleStyle(d){
    state.activeTitle = d;
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
    state.activeBody = d;
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

  function fillSelect(selectEl, items){
    selectEl.innerHTML = items.map(d => `<option value="${escapeHTML(d.name)}">${escapeHTML(d.name)}</option>`).join("");
  }

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

    const elTitleSelect = $("#titleThemeSelect");
    const elBodySelect  = $("#bodyThemeSelect");

    fillSelect(elTitleSelect, titleDesigns);
    fillSelect(elBodySelect, bodyDesigns);

    elTitleSelect.value = state.activeTitle.name;
    elBodySelect.value  = state.activeBody.name;

    elTitleSelect.addEventListener("change", () => {
      const d = titleDesigns.find(x => x.name === elTitleSelect.value);
      if (d) applyTitleStyle(d);
    });

    elBodySelect.addEventListener("change", () => {
      const d = bodyDesigns.find(x => x.name === elBodySelect.value);
      if (d) applyBodyStyle(d);
    });

    $("#btn-random-title").addEventListener("click", () => {
      const d = pick(titleDesigns);
      elTitleSelect.value = d.name;
      applyTitleStyle(d);
    });

    $("#btn-random-body").addEventListener("click", () => {
      const d = pick(bodyDesigns);
      elBodySelect.value = d.name;
      applyBodyStyle(d);
    });

    applyTitleStyle(state.activeTitle);
    applyBodyStyle(state.activeBody);

    elDownloadWrap.style.display = "flex";
  }

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
      // JPG needs solid background (use your locked page bg)
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
