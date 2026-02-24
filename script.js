// DOM
const elTemplateResult = document.getElementById('template__result');
const elDesiredTitle   = document.getElementById('desiredTitle');
const elNumberOfSong   = document.getElementById('numberOfSong');
const elDownloadWrap   = document.getElementById('download-wrap');
const elDownloadBtn    = document.getElementById('download-btn');
const elBadge          = document.getElementById('page-design-badge');
const btnRandomPage    = document.getElementById('btn-randomize-page');

// ── Themes ─────────────────────────────────────────────────────────────
const pageDesigns = [
  {
    name: "Studio White",
    vars: {
      '--page-bg':         '#f9f9f7',
      '--page-font':       "'Albert Sans', sans-serif",
      '--page-font-label': "'Albert Sans', sans-serif",
      '--accent':          '#111827',
      '--accent-light':    '#f3f4f6',
      '--text-primary':    '#111827',
      '--text-secondary':  '#6b7280',
      '--surface':         '#ffffff',
      '--surface-2':       '#f9fafb',
      '--border-color':    '#e5e7eb',
      '--border-radius':   '10px',
      '--border-style':    '1px solid #e5e7eb',
      '--input-bg':        '#fff',
      '--input-border':    '1px solid #d1d5db',
      '--input-radius':    '8px',
      '--input-focus-ring':'0 0 0 3px rgba(17,24,39,.1)',
      '--shadow-card':     '0 1px 4px rgba(0,0,0,.05)',
      '--shadow-main':     '0 4px 20px rgba(0,0,0,.06)',
      '--section-radius':  '12px',
    }
  },
  {
    name: "Sage & Linen",
    vars: {
      '--page-bg':         '#f4f1ec',
      '--page-font':       "'Cormorant Garamond', serif",
      '--page-font-label': "'Josefin Sans', sans-serif",
      '--accent':          '#5a7a5c',
      '--accent-light':    '#eef4ee',
      '--text-primary':    '#2d2a24',
      '--text-secondary':  '#7a7060',
      '--surface':         '#faf8f4',
      '--surface-2':       '#ede9e1',
      '--border-color':    '#d8d1c4',
      '--border-radius':   '6px',
      '--border-style':    '1px solid #d8d1c4',
      '--input-bg':        '#faf8f4',
      '--input-border':    '1px solid #c8c1b4',
      '--input-radius':    '4px',
      '--input-focus-ring':'0 0 0 3px rgba(90,122,92,.12)',
      '--shadow-card':     '0 2px 8px rgba(45,42,36,.06)',
      '--shadow-main':     '0 4px 20px rgba(45,42,36,.08)',
      '--section-radius':  '6px',
    }
  },
  {
    name: "Blueprint",
    vars: {
      '--page-bg':         '#eef2ff',
      '--page-font':       "'Josefin Sans', sans-serif",
      '--page-font-label': "'Josefin Sans', sans-serif",
      '--accent':          '#3730a3',
      '--accent-light':    '#e0e7ff',
      '--text-primary':    '#1e1b4b',
      '--text-secondary':  '#6366f1',
      '--surface':         '#fff',
      '--surface-2':       '#eef2ff',
      '--border-color':    '#c7d2fe',
      '--border-radius':   '8px',
      '--border-style':    '1.5px solid #c7d2fe',
      '--input-bg':        '#f5f3ff',
      '--input-border':    '1.5px solid #a5b4fc',
      '--input-radius':    '6px',
      '--input-focus-ring':'0 0 0 3px rgba(55,48,163,.15)',
      '--shadow-card':     '0 2px 10px rgba(99,102,241,.08)',
      '--shadow-main':     '0 4px 24px rgba(99,102,241,.12)',
      '--section-radius':  '10px',
    }
  },
  {
    name: "Warm Paper",
    vars: {
      '--page-bg':         '#fdf6e3',
      '--page-font':       "'DM Serif Display', serif",
      '--page-font-label': "'Space Mono', monospace",
      '--accent':          '#b45309',
      '--accent-light':    '#fef3c7',
      '--text-primary':    '#292524',
      '--text-secondary':  '#78716c',
      '--surface':         '#fffbf0',
      '--surface-2':       '#fef9e7',
      '--border-color':    '#e5dcc8',
      '--border-radius':   '4px',
      '--border-style':    '1px solid #e5dcc8',
      '--input-bg':        '#fffbf0',
      '--input-border':    '1px solid #d6c9a8',
      '--input-radius':    '3px',
      '--input-focus-ring':'0 0 0 3px rgba(180,83,9,.12)',
      '--shadow-card':     '1px 2px 6px rgba(41,37,36,.06)',
      '--shadow-main':     '2px 4px 16px rgba(41,37,36,.08)',
      '--section-radius':  '4px',
    }
  },
  {
    name: "Frost",
    vars: {
      '--page-bg':         'linear-gradient(160deg,#e8f4fd 0%,#f0f9ff 60%,#fafffe 100%)',
      '--page-font':       "'Outfit', sans-serif",
      '--page-font-label': "'Syne', sans-serif",
      '--accent':          '#0284c7',
      '--accent-light':    '#e0f2fe',
      '--text-primary':    '#0c4a6e',
      '--text-secondary':  '#38bdf8',
      '--surface':         'rgba(255,255,255,0.75)',
      '--surface-2':       'rgba(224,242,254,0.5)',
      '--border-color':    '#bae6fd',
      '--border-radius':   '14px',
      '--border-style':    '1px solid rgba(186,230,253,.8)',
      '--input-bg':        'rgba(255,255,255,.8)',
      '--input-border':    '1px solid #7dd3fc',
      '--input-radius':    '10px',
      '--input-focus-ring':'0 0 0 3px rgba(2,132,199,.15)',
      '--shadow-card':     '0 4px 16px rgba(12,74,110,.06)',
      '--shadow-main':     '0 8px 32px rgba(12,74,110,.08)',
      '--section-radius':  '16px',
    }
  },
  {
    name: "Editorial",
    vars: {
      '--page-bg':         '#fff',
      '--page-font':       "'Playfair Display', serif",
      '--page-font-label': "'Josefin Sans', sans-serif",
      '--accent':          '#dc2626',
      '--accent-light':    '#fef2f2',
      '--text-primary':    '#0f0f0f',
      '--text-secondary':  '#525252',
      '--surface':         '#fff',
      '--surface-2':       '#fafafa',
      '--border-color':    '#0f0f0f',
      '--border-radius':   '0px',
      '--border-style':    '1.5px solid #0f0f0f',
      '--input-bg':        '#fff',
      '--input-border':    '1.5px solid #0f0f0f',
      '--input-radius':    '0px',
      '--input-focus-ring':'none',
      '--shadow-card':     'none',
      '--shadow-main':     'none',
      '--section-radius':  '0px',
    }
  },
  {
    name: "Rose Quartz",
    vars: {
      '--page-bg':         '#fff5f7',
      '--page-font':       "'Outfit', sans-serif",
      '--page-font-label': "'Syne', sans-serif",
      '--accent':          '#e11d48',
      '--accent-light':    '#ffe4e6',
      '--text-primary':    '#4c0519',
      '--text-secondary':  '#9f1239',
      '--surface':         '#fff',
      '--surface-2':       '#fff1f2',
      '--border-color':    '#fecdd3',
      '--border-radius':   '16px',
      '--border-style':    '1px solid #fecdd3',
      '--input-bg':        '#fff8f8',
      '--input-border':    '1px solid #fda4af',
      '--input-radius':    '12px',
      '--input-focus-ring':'0 0 0 3px rgba(225,29,72,.12)',
      '--shadow-card':     '0 2px 12px rgba(225,29,72,.07)',
      '--shadow-main':     '0 6px 24px rgba(225,29,72,.08)',
      '--section-radius':  '18px',
    }
  },
  {
    name: "Concrete",
    vars: {
      '--page-bg':         '#f1f0ee',
      '--page-font':       "'Chakra Petch', sans-serif",
      '--page-font-label': "'Chakra Petch', sans-serif",
      '--accent':          '#374151',
      '--accent-light':    '#e5e7eb',
      '--text-primary':    '#111',
      '--text-secondary':  '#6b7280',
      '--surface':         '#e8e6e2',
      '--surface-2':       '#dedad4',
      '--border-color':    '#c9c5bd',
      '--border-radius':   '3px',
      '--border-style':    '2px solid #c9c5bd',
      '--input-bg':        '#dedad4',
      '--input-border':    '2px solid #b3afa8',
      '--input-radius':    '2px',
      '--input-focus-ring':'0 0 0 2px rgba(55,65,81,.2)',
      '--shadow-card':     'inset 0 1px 3px rgba(0,0,0,.1)',
      '--shadow-main':     '3px 3px 0 rgba(0,0,0,.08)',
      '--section-radius':  '3px',
    }
  },

  // Extra page themes
  {
    name: "Midnight Ink",
    vars: {
      '--page-bg':         '#0b1020',
      '--page-font':       "'Outfit', sans-serif",
      '--page-font-label': "'Syne', sans-serif",
      '--accent':          '#22c55e',
      '--accent-light':    'rgba(34,197,94,.14)',
      '--text-primary':    '#e5e7eb',
      '--text-secondary':  '#94a3b8',
      '--surface':         'rgba(255,255,255,.06)',
      '--surface-2':       'rgba(255,255,255,.04)',
      '--border-color':    'rgba(255,255,255,.10)',
      '--border-radius':   '14px',
      '--border-style':    '1px solid rgba(255,255,255,.12)',
      '--input-bg':        'rgba(255,255,255,.06)',
      '--input-border':    '1px solid rgba(255,255,255,.16)',
      '--input-radius':    '12px',
      '--input-focus-ring':'0 0 0 3px rgba(34,197,94,.18)',
      '--shadow-card':     '0 10px 30px rgba(0,0,0,.25)',
      '--shadow-main':     '0 18px 60px rgba(0,0,0,.40)',
      '--section-radius':  '18px',
    }
  },
  {
    name: "Tropical Soda",
    vars: {
      '--page-bg':         'linear-gradient(160deg,#e0f2fe 0%,#fce7f3 55%,#fff7ed 100%)',
      '--page-font':       "'Josefin Sans', sans-serif",
      '--page-font-label': "'Archivo Black', sans-serif",
      '--accent':          '#06b6d4',
      '--accent-light':    'rgba(6,182,212,.14)',
      '--text-primary':    '#0f172a',
      '--text-secondary':  '#475569',
      '--surface':         'rgba(255,255,255,.65)',
      '--surface-2':       'rgba(255,255,255,.45)',
      '--border-color':    'rgba(15,23,42,.10)',
      '--border-radius':   '18px',
      '--border-style':    '1px solid rgba(15,23,42,.10)',
      '--input-bg':        'rgba(255,255,255,.75)',
      '--input-border':    '1px solid rgba(15,23,42,.12)',
      '--input-radius':    '14px',
      '--input-focus-ring':'0 0 0 3px rgba(6,182,212,.20)',
      '--shadow-card':     '0 10px 26px rgba(15,23,42,.10)',
      '--shadow-main':     '0 16px 44px rgba(15,23,42,.12)',
      '--section-radius':  '20px',
    }
  }
];

const titleDesigns = [
  { name:"Neon Noir",   font:"'Bebas Neue',sans-serif",    bg:"linear-gradient(135deg,#0f0c29,#302b63,#24243e)", color:"#f0e130", textShadow:"0 0 12px #f0e13088", padding:"16px 20px", letterSpacing:"4px", borderRadius:"4px 4px 0 0" },
  { name:"Pastel Pop",  font:"'Syne',sans-serif",          bg:"linear-gradient(90deg,#ffecd2,#fcb69f)",          color:"#4a0e0e", textShadow:"none",               padding:"14px 18px", letterSpacing:"1px", borderRadius:"12px 12px 0 0" },
  { name:"Editorial",   font:"'Playfair Display',serif",   bg:"#fff",                                            color:"#111",    textShadow:"none",               padding:"16px 20px", letterSpacing:"0px", borderRadius:"0", borderBottom:"3px solid #111" },
  { name:"Retro Tape",  font:"'Space Mono',monospace",     bg:"#f5f0e1",                                         color:"#c0392b", textShadow:"2px 2px 0 #7f8c8d",  padding:"14px 18px", letterSpacing:"2px", borderRadius:"0" },
  { name:"Rave",        font:"'Righteous',cursive",        bg:"linear-gradient(135deg,#f953c6,#b91d73)",         color:"#fff",    textShadow:"0 0 8px #fff8",      padding:"16px 20px", letterSpacing:"3px", borderRadius:"8px 8px 0 0" },
  { name:"Luxury Gold", font:"'Abril Fatface',serif",      bg:"#1a1200",                                         color:"#d4af37", textShadow:"0 0 6px #d4af3766",  padding:"18px 22px", letterSpacing:"2px", borderRadius:"6px 6px 0 0" },
  { name:"Ice Cold",    font:"'Chakra Petch',sans-serif",  bg:"linear-gradient(120deg,#e0eafc,#cfdef3)",         color:"#1a3c6e", textShadow:"none",               padding:"14px 18px", letterSpacing:"2px", borderRadius:"4px 4px 0 0" },
  { name:"Brutalist",   font:"'Archivo Black',sans-serif", bg:"#000",                                            color:"#fff",    textShadow:"3px 3px 0 #ff0040",  padding:"14px 18px", letterSpacing:"0",   borderRadius:"0" },

  // Extra title themes
  { name:"Cyber Lime",  font:"'Archivo Black',sans-serif", bg:"linear-gradient(135deg,#0b1020,#111827)",         color:"#a3ff12", textShadow:"0 0 14px rgba(163,255,18,.45)", padding:"18px 22px", letterSpacing:"3px", borderRadius:"12px 12px 0 0" },
  { name:"Soft Serif",  font:"'Cormorant Garamond',serif", bg:"rgba(255,255,255,.75)",                           color:"#0f172a", textShadow:"none", padding:"16px 20px", letterSpacing:"1px", borderRadius:"16px 16px 0 0" },
];

const bodyDesigns = [
  { name:"Dark Cards",    wrapBg:"#1a1a2e",                                         cardBg:"#16213e",               rankBg:"#e94560",                                rankColor:"#fff",    textColor:"#eee",    subColor:"#aaa",    borderRadius:"8px",  gap:"8px",  padding:"10px", boxShadow:"none",                          outline:"none" },
  { name:"Soft Gradient", wrapBg:"linear-gradient(160deg,#ffecd2 0%,#fcb69f 100%)", cardBg:"rgba(255,255,255,0.6)", rankBg:"#c0392b",                                rankColor:"#fff",    textColor:"#333",    subColor:"#888",    borderRadius:"12px", gap:"10px", padding:"12px", boxShadow:"0 2px 8px rgba(0,0,0,.1)",      outline:"none" },
  { name:"Mono Print",    wrapBg:"#f5f0e1",                                         cardBg:"#fff",                  rankBg:"#111",                                   rankColor:"#f5f0e1", textColor:"#111",    subColor:"#666",    borderRadius:"0",    gap:"0",    padding:"8px 0", boxShadow:"none",                         outline:"none", cardBorderBottom:"1px solid #ccc" },
  { name:"Neon Terminal", wrapBg:"#0d0d0d",                                         cardBg:"#111",                  rankBg:"#00ff88",                                rankColor:"#000",    textColor:"#00ff88", subColor:"#00aa55", borderRadius:"4px",  gap:"6px",  padding:"10px", boxShadow:"0 0 8px #00ff8833",             outline:"none" },
  { name:"Candy Stripe",  wrapBg:"#fff0f6",                                         cardBg:"#fff",                  rankBg:"linear-gradient(135deg,#f953c6,#b91d73)", rankColor:"#fff",    textColor:"#4a004e", subColor:"#b91d73", borderRadius:"16px", gap:"10px", padding:"12px", boxShadow:"0 2px 6px rgba(185,29,115,.15)", outline:"none" },
  { name:"Gold Rush",     wrapBg:"#1a1200",                                         cardBg:"#211900",               rankBg:"#d4af37",                                rankColor:"#1a1200", textColor:"#d4af37", subColor:"#8a7020", borderRadius:"6px",  gap:"8px",  padding:"10px", boxShadow:"none",                          outline:"1px solid #d4af3744" },
  { name:"Clean Light",   wrapBg:"#f8f9fa",                                         cardBg:"#fff",                  rankBg:"#007bff",                                rankColor:"#fff",    textColor:"#212529", subColor:"#6c757d", borderRadius:"8px",  gap:"8px",  padding:"10px", boxShadow:"0 1px 4px rgba(0,0,0,.08)",     outline:"none" },
  { name:"Brutalist Red", wrapBg:"#ff0040",                                         cardBg:"#fff",                  rankBg:"#000",                                   rankColor:"#ff0040", textColor:"#000",    subColor:"#333",    borderRadius:"0",    gap:"4px",  padding:"8px",  boxShadow:"none",                         outline:"2px solid #000" },

  // Extra body themes
  { name:"Glass Night",   wrapBg:"linear-gradient(160deg,#0b1020 0%,#111827 60%,#0b1020 100%)", cardBg:"rgba(255,255,255,0.08)", rankBg:"rgba(34,197,94,.95)", rankColor:"#081018", textColor:"#e5e7eb", subColor:"#94a3b8", borderRadius:"16px", gap:"12px", padding:"18px", boxShadow:"0 10px 30px rgba(0,0,0,.35)", outline:"1px solid rgba(255,255,255,.10)" },
  { name:"Cream Minimal", wrapBg:"#fff7ed", cardBg:"#ffffff", rankBg:"#0f172a", rankColor:"#fff7ed", textColor:"#0f172a", subColor:"#64748b", borderRadius:"14px", gap:"10px", padding:"16px", boxShadow:"0 6px 18px rgba(15,23,42,.08)", outline:"none" },
];

// ── State ──────────────────────────────────────────────────────────────
let activeTitleDesign = titleDesigns[6];
let activeBodyDesign  = bodyDesigns[6];
let activePageDesign  = pageDesigns[0];
let currentN = 0;

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

// ── Apply Themes ───────────────────────────────────────────────────────
function applyPageDesign(d) {
  const root = document.documentElement;

  Object.entries(d.vars).forEach(([k, v]) => root.style.setProperty(k, v));
  document.body.style.background = d.vars['--page-bg'];
  document.body.style.fontFamily = d.vars['--page-font'];

  if (elBadge) elBadge.textContent = d.name;

  document.querySelectorAll('.gen-btn').forEach(b => b.style.background = d.vars['--accent']);
  document.querySelectorAll('.style-badge').forEach(b => {
    b.style.background = d.vars['--accent-light'];
    b.style.color      = d.vars['--accent'];
  });

  if (elDownloadBtn) elDownloadBtn.style.background = d.vars['--accent'];
}

function applyTitleStyle(d) {
  const block = document.getElementById('title-block');
  if (!block) return;

  const h5 = block.querySelector('h5');
  block.style.background   = d.bg;
  block.style.borderRadius = d.borderRadius || '0';
  block.style.borderBottom = d.borderBottom || 'none';

  h5.style.fontFamily    = d.font;
  h5.style.color         = d.color;
  h5.style.textShadow    = d.textShadow;
  h5.style.padding       = d.padding;
  h5.style.letterSpacing = d.letterSpacing;
  h5.style.fontSize      = '1.3rem';
}

function applyBodyStyle(d) {
  const wrap = document.getElementById('cards-wrap');
  if (!wrap) return;

  wrap.style.background    = d.wrapBg;
  wrap.style.padding       = d.padding;
  wrap.style.borderRadius  = d.borderRadius;
  wrap.style.display       = 'flex';
  wrap.style.flexDirection = 'column';
  wrap.style.gap           = d.gap;

  wrap.querySelectorAll('.song-card').forEach(card => {
    card.style.background   = d.cardBg;
    card.style.borderRadius = d.borderRadius;
    card.style.outline      = d.outline || 'none';
    card.style.boxShadow    = d.boxShadow || 'none';
    card.style.overflow     = 'hidden';
    card.style.borderBottom = d.cardBorderBottom || 'none';

    const rank = card.querySelector('.rank-badge');
    if (rank) {
      rank.style.background = d.rankBg;
      rank.style.color      = d.rankColor;
    }

    const inputs = card.querySelectorAll('input');
    const t = inputs[0];
    const a = inputs[1];
    if (t) t.style.color = d.textColor;
    if (a) a.style.color = d.subColor;
  });
}

// ── UI Actions ─────────────────────────────────────────────────────────
function randomizePageDesign() {
  activePageDesign = pick(pageDesigns);
  applyPageDesign(activePageDesign);
}

function randomizeTitleDesign() {
  activeTitleDesign = pick(titleDesigns);
  const b = document.getElementById('title-design-name');
  if (b) b.textContent = activeTitleDesign.name;
  applyTitleStyle(activeTitleDesign);
}

function randomizeBodyDesign() {
  activeBodyDesign = pick(bodyDesigns);
  const b = document.getElementById('body-design-name');
  if (b) b.textContent = activeBodyDesign.name;
  applyBodyStyle(activeBodyDesign);
}

function refreshTitle() {
  const el = document.querySelector('#title-block h5');
  if (!el) return;
  el.textContent = elDesiredTitle.value || (currentN ? `My Top ${currentN} Fave!` : 'My Playlist');
}

// ── Template Generation ────────────────────────────────────────────────
function generateTemplate(n) {
  currentN = n;
  const title = elDesiredTitle.value || `My Top ${n} Fave!`;

  let html = `
    <div class="settings-panel">
      <div class="s-label">⚙ Card Design Settings</div>
      <div class="settings-row">
        <span>Title style:</span>
        <button class="gen-btn" id="btn-title-rand" type="button">🎲 Randomize</button>
        <span class="style-badge" id="title-design-name">${activeTitleDesign.name}</span>
      </div>
      <div class="settings-row">
        <span>Card style:</span>
        <button class="gen-btn" id="btn-body-rand" type="button">🎲 Randomize</button>
        <span class="style-badge" id="body-design-name">${activeBodyDesign.name}</span>
      </div>
    </div>

    <div class="story-frame" id="story-frame">
      <div class="story-inner" id="story-inner">
        <div class="story-canvas" id="cards-wrap">
          <div id="title-block"><h5>${title}</h5></div>
  `;

  for (let i = 0; i < n; i++) {
    html += `
      <div class="song-card" data-num="${i + 1}">
        <div class="rank-badge">#${i + 1}</div>
        <div class="song-info">
          <input type="text" value="Song Title" class="fsz-md fw-bold" placeholder="Song Title">
          <input type="text" value="Artist Name" class="fsz-sm" placeholder="Artist Name">
        </div>
      </div>
    `;
  }

  html += `
        </div>
      </div>
    </div>
  `;

  elTemplateResult.innerHTML = html;

  // Wire generated buttons
  document.getElementById('btn-title-rand')?.addEventListener('click', randomizeTitleDesign);
  document.getElementById('btn-body-rand')?.addEventListener('click', randomizeBodyDesign);

  applyPageDesign(activePageDesign);
  applyTitleStyle(activeTitleDesign);
  applyBodyStyle(activeBodyDesign);

  if (elDownloadWrap) elDownloadWrap.style.display = 'flex';
}

// ── Input Handlers ─────────────────────────────────────────────────────
function onSongCountChange() {
  const val = Number(elNumberOfSong.value);
  if (!Number.isNaN(val) && val >= 1) generateTemplate(val);
}

// ── Export Fix (no cssText reliance) ───────────────────────────────────
const COPY_PROPS = [
  'fontFamily','fontSize','fontWeight','fontStyle',
  'color','letterSpacing','textShadow','lineHeight','textTransform',
  'textAlign','whiteSpace',
  'paddingTop','paddingRight','paddingBottom','paddingLeft',
  'marginTop','marginRight','marginBottom','marginLeft',
  'borderRadius','width'
];

function copyStyles(fromEl, toEl) {
  const cs = window.getComputedStyle(fromEl);
  COPY_PROPS.forEach(p => { toEl.style[p] = cs[p]; });
  toEl.style.display = 'block';
  toEl.style.background = 'transparent';
  toEl.style.border = 'none';
  toEl.style.outline = 'none';
  toEl.style.webkitTextFillColor = cs.color; // helps Safari/Chrome
  toEl.style.opacity = '1';
}

async function downloadImage() {
  const storyTarget = document.getElementById('story-inner') || document.getElementById('cards-wrap');
  if (!storyTarget) return;

  elDownloadBtn.classList.add('loading');
  elDownloadBtn.innerHTML = '<i class="bi bi-hourglass-split"></i> Capturing...';

  try {
    const canvas = await html2canvas(storyTarget, {
      scale: 2,
      useCORS: true,
      backgroundColor: null,
      logging: false,
      onclone: (clonedDoc) => {
        const clonedTarget =
          clonedDoc.getElementById('story-inner') || clonedDoc.getElementById('cards-wrap');
        if (!clonedTarget) return;

        clonedTarget.querySelectorAll('input').forEach(inp => {
          const span = clonedDoc.createElement('span');
          span.textContent = inp.value || inp.placeholder || '';
          copyStyles(inp, span);
          inp.replaceWith(span);
        });
      }
    });

    const link = document.createElement('a');
    const titleText = (elDesiredTitle.value || `my-top-${currentN}`)
      .replace(/\s+/g, '-')
      .toLowerCase();

    link.download = `${titleText}-story.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  } catch (err) {
    console.error('Screenshot failed:', err);
    alert('Export failed. Try again (or reduce number of songs).');
  }

  elDownloadBtn.classList.remove('loading');
  elDownloadBtn.innerHTML = '<i class="bi bi-download"></i> Download Image';
}

// ── Event Wiring ───────────────────────────────────────────────────────
btnRandomPage?.addEventListener('click', randomizePageDesign);
elDesiredTitle?.addEventListener('input', refreshTitle);
elNumberOfSong?.addEventListener('change', onSongCountChange);
elDownloadBtn?.addEventListener('click', downloadImage);

// Init
applyPageDesign(activePageDesign);

// Expose functions if you want to call in console (optional)
window.randomizeTitleDesign = randomizeTitleDesign;
window.randomizeBodyDesign  = randomizeBodyDesign;
window.randomizePageDesign  = randomizePageDesign;
window.downloadImage        = downloadImage;