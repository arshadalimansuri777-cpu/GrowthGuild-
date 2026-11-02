(function () {
  var PHONE_TEXT = "+91 99217 28033";
  var PHONE_TEL = "tel:+919921728033";
  var EMAIL = "mansuriarshad018@gmail.com";
  var JOIN_URL = "https://chat.whatsapp.com/FeYSsu0IieVLfke8HyHcKo?s=cl&p=a&mlu=4&ilr=4";
  var IG_URL = "https://www.instagram.com/growthguild.in/";
  var IG_HANDLE = "@growthguild.in";
  // Set this to the logo image (a data: URL) to replace the text wordmark in the nav and footer.
  var LOGO_SRC = "logo-lockup.png";
  var LOGO_FULL = "logo-full.png";

  var FOUNDER_IMG = "assets/founder-arsad.jpg";

  var PAGES = [
    ["index.html", "Home", "home"],
    ["services.html", "Services", "services"],
    ["pricing.html", "Pricing", "pricing"],
    ["community.html", "Community", "community"],
    ["content.html", "Content", "content"],
    ["about.html", "About", "about"]
  ];

  var S = 'class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
  var ICONS = {
    phone: "<svg " + S + '><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>',
    mail: "<svg " + S + '><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M3.5 7l8.5 6 8.5-6"/></svg>',
    ig: "<svg " + S + '><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
    wa: "<svg " + S + '><path d="M3 21l1.6-4.6A8.5 8.5 0 1 1 8 19.5L3 21z"/><path d="M9 9.5c.3 2.4 2.6 4.7 5 5l1.3-1.3-1.8-1-.8.7a4 4 0 0 1-1.7-1.7l.7-.8-1-1.8L9 9.5z" fill="currentColor" stroke="none"/></svg>',
    users: "<svg " + S + '><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6"/><circle cx="17" cy="9" r="2.5"/><path d="M17.5 14.2c2.4.3 4 2 4 4.8"/></svg>',
    layers: "<svg " + S + '><path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5"/></svg>',
    chat: "<svg " + S + '><path d="M4 5h16v11H9l-5 4V5z"/></svg>',
    heart: "<svg " + S + '><path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.6 4.3 4.3 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10z"/></svg>',
    comment: "<svg " + S + '><path d="M21 12a8 8 0 0 1-11.8 7L3 20.5l1.6-5A8 8 0 1 1 21 12z"/></svg>',
    send: "<svg " + S + '><path d="M21 3L10 14M21 3l-7 18-4-7-7-4 18-7z"/></svg>',
    play: "<svg " + S + '><path d="M7 4l13 8-13 8V4z" fill="currentColor"/></svg>',
    arrow: "<svg " + S + '><path d="M5 12h14M13 6l6 6-6 6"/></svg>'
  };

  var DEFS =
    '<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><defs>' +
    '<linearGradient id="gg" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ff9a3d"/><stop offset="1" stop-color="#ff3f8e"/></linearGradient>' +
    '<linearGradient id="gv" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff3f8e"/><stop offset="1" stop-color="#7a4dff"/></linearGradient>' +
    '<linearGradient id="go" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#7a4dff"/><stop offset="1" stop-color="#ff8f3f"/></linearGradient>' +
    "</defs></svg>";

  function bars(xs, hs, base, w) {
    var out = "";
    for (var i = 0; i < xs.length; i++) {
      out += '<rect x="' + xs[i] + '" y="' + (base - hs[i]) + '" width="' + w + '" height="' + hs[i] + '" rx="5" fill="url(#gg)" opacity="' + (i % 2 ? 0.6 : 0.95) + '"/>';
    }
    return out;
  }

  var ILL = {
    web:
      '<svg viewBox="0 0 420 270" role="img" aria-label="Website layout illustration">' +
      '<rect class="i-panel" x="16" y="16" width="388" height="238" rx="16"/>' +
      '<circle cx="38" cy="38" r="5" fill="#ff5f57"/><circle cx="55" cy="38" r="5" fill="#febc2e"/><circle cx="72" cy="38" r="5" fill="#28c840"/>' +
      '<rect class="i-soft" x="96" y="30" width="220" height="16" rx="8"/>' +
      '<rect x="36" y="70" width="190" height="16" rx="8" fill="url(#gg)"/><rect x="36" y="94" width="130" height="16" rx="8" fill="url(#gg)" opacity=".6"/>' +
      '<rect class="i-soft" x="36" y="124" width="170" height="8" rx="4"/><rect class="i-soft" x="36" y="140" width="140" height="8" rx="4"/>' +
      '<rect x="36" y="162" width="104" height="30" rx="15" fill="url(#gg)"/><text class="i-txt" x="56" y="181" style="fill:#1a0b10">Get a quote</text>' +
      '<rect x="250" y="68" width="136" height="124" rx="14" fill="url(#gv)"/><circle cx="318" cy="116" r="22" fill="rgba(255,255,255,.25)"/><path d="M276 184c14-34 40-34 54 0z" fill="rgba(255,255,255,.2)"/>' +
      '<rect class="i-faint" x="36" y="208" width="108" height="32" rx="10"/><rect class="i-faint" x="156" y="208" width="108" height="32" rx="10"/><rect class="i-faint" x="276" y="208" width="110" height="32" rx="10"/>' +
      '<rect class="i-soft" x="48" y="220" width="50" height="8" rx="4"/><rect class="i-soft" x="168" y="220" width="50" height="8" rx="4"/><rect class="i-soft" x="288" y="220" width="50" height="8" rx="4"/>' +
      "</svg>",
    meta:
      '<svg viewBox="0 0 420 270" role="img" aria-label="Ad campaign chart illustration">' +
      '<rect class="i-panel" x="16" y="16" width="388" height="238" rx="16"/>' +
      '<text class="i-txt" x="36" y="44">Campaign</text><text class="i-txt2" x="36" y="60">Leads over time</text>' +
      '<path class="i-line" d="M36 100H236M36 140H236M36 180H236M36 220H236"/>' +
      bars([44, 72, 100, 128, 156, 184, 212], [36, 52, 46, 78, 70, 104, 128], 220, 20) +
      '<path d="M54 176L82 160L110 168L138 130L166 138L194 108L222 80" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity=".9"/><circle cx="222" cy="80" r="6" fill="#fff"/>' +
      '<rect class="i-panel" x="262" y="34" width="126" height="206" rx="14"/>' +
      '<rect x="270" y="42" width="110" height="88" rx="10" fill="url(#gv)"/><circle cx="325" cy="86" r="18" fill="rgba(255,255,255,.25)"/>' +
      '<text class="i-txt2" x="272" y="146">Sponsored</text>' +
      '<rect class="i-soft" x="272" y="156" width="96" height="9" rx="4.5"/><rect class="i-soft" x="272" y="172" width="70" height="9" rx="4.5"/>' +
      '<rect x="272" y="196" width="106" height="30" rx="15" fill="url(#gg)"/><text class="i-txt" x="296" y="215" style="fill:#1a0b10">Shop now</text>' +
      "</svg>",
    ai:
      '<svg viewBox="0 0 420 270" role="img" aria-label="AI automation flow illustration">' +
      '<rect class="i-panel" x="16" y="16" width="388" height="238" rx="16"/>' +
      '<path class="i-flow" d="M120 128H168"/><path class="i-flow" d="M252 128C278 128 276 84 304 84"/><path class="i-flow" d="M252 128C278 128 276 172 304 172"/><path class="i-flow" d="M210 170V206"/>' +
      '<rect class="i-panel" x="30" y="100" width="90" height="56" rx="14"/><text class="i-txt" x="46" y="124">New DM</text><text class="i-txt2" x="46" y="140">Instagram</text>' +
      '<circle cx="210" cy="128" r="42" fill="url(#gv)"/><circle cx="210" cy="128" r="54" fill="none" stroke="rgba(255,63,142,.35)"/>' +
      '<path d="M210 104l5 15 15 5-15 5-5 15-5-15-15-5 15-5z" fill="#fff"/>' +
      '<rect class="i-panel" x="304" y="58" width="90" height="52" rx="14"/><text class="i-txt" x="318" y="80">Reply sent</text><text class="i-txt2" x="318" y="96">In seconds</text>' +
      '<rect class="i-panel" x="304" y="146" width="90" height="52" rx="14"/><text class="i-txt" x="318" y="168">Lead saved</text><text class="i-txt2" x="318" y="184">To your sheet</text>' +
      '<rect class="i-panel" x="150" y="206" width="120" height="34" rx="17"/><circle cx="170" cy="223" r="5" fill="#4ade80"/><text class="i-txt" x="184" y="227">Follow-up</text>' +
      "</svg>",
    video:
      '<svg viewBox="0 0 420 270" role="img" aria-label="Video editing timeline illustration">' +
      '<rect class="i-panel" x="16" y="16" width="388" height="238" rx="16"/>' +
      '<rect x="34" y="30" width="352" height="112" rx="12" fill="url(#gv)"/><circle cx="210" cy="86" r="24" fill="rgba(255,255,255,.22)"/><path d="M203 74l17 12-17 12z" fill="#fff"/>' +
      '<text class="i-txt" x="46" y="128" style="fill:#fff">00:12</text>' +
      '<rect x="34" y="156" width="92" height="26" rx="8" fill="url(#gg)"/><rect x="132" y="156" width="68" height="26" rx="8" fill="url(#gv)"/><rect x="206" y="156" width="110" height="26" rx="8" fill="url(#go)"/><rect x="322" y="156" width="64" height="26" rx="8" fill="url(#gg)" opacity=".7"/>' +
      '<line x1="34" y1="203" x2="386" y2="203" stroke="url(#gg)" stroke-width="16" stroke-dasharray="3 5" opacity=".8"/>' +
      '<rect class="i-soft" x="34" y="222" width="70" height="14" rx="7"/><rect class="i-soft" x="112" y="222" width="104" height="14" rx="7"/><rect class="i-soft" x="224" y="222" width="58" height="14" rx="7"/><rect class="i-soft" x="290" y="222" width="96" height="14" rx="7"/>' +
      '<line x1="256" y1="148" x2="256" y2="244" stroke="#fff" stroke-width="2"/><path d="M248 146h16l-8 10z" fill="#fff"/>' +
      "</svg>",
    social:
      '<svg viewBox="0 0 420 270" role="img" aria-label="Social media planner illustration">' +
      '<rect class="i-panel" x="16" y="16" width="388" height="238" rx="16"/>' +
      '<circle cx="46" cy="46" r="14" fill="url(#gg)"/><rect class="i-soft" x="68" y="36" width="96" height="9" rx="4.5"/><rect class="i-soft" x="68" y="51" width="64" height="8" rx="4"/>' +
      '<rect x="300" y="32" width="86" height="28" rx="14" fill="none" stroke="rgba(255,143,63,.6)"/><text class="i-txt" x="314" y="50" style="fill:#ff8f3f">Scheduled</text>' +
      [0, 1, 2, 3, 4, 5, 6].map(function (i) {
        return '<rect x="' + (36 + i * 51) + '" y="76" width="44" height="22" rx="8" ' + (i === 2 ? 'fill="url(#gg)"' : 'class="i-soft"') + "/>";
      }).join("") +
      '<rect x="36" y="112" width="108" height="62" rx="12" fill="url(#gv)"/><rect x="156" y="112" width="108" height="62" rx="12" fill="url(#go)"/><rect x="276" y="112" width="110" height="62" rx="12" fill="url(#gg)"/>' +
      '<rect x="36" y="184" width="108" height="56" rx="12" fill="url(#gg)" opacity=".75"/><rect x="156" y="184" width="108" height="56" rx="12" fill="url(#gv)" opacity=".75"/><rect x="276" y="184" width="110" height="56" rx="12" fill="url(#go)" opacity=".75"/>' +
      '<circle cx="54" cy="130" r="6" fill="rgba(255,255,255,.7)"/><circle cx="174" cy="130" r="6" fill="rgba(255,255,255,.7)"/><circle cx="294" cy="130" r="6" fill="rgba(255,255,255,.7)"/>' +
      "</svg>"
  };

  var root = document.querySelector("[data-page]");
  var current = root ? root.getAttribute("data-page") : "home";

  function logo() {
    return LOGO_SRC
      ? '<img src="' + LOGO_SRC + '" alt="GrowthGuild" width="117" height="38" decoding="sync" fetchpriority="high">'
      : 'Growth<span class="grad">Guild</span>';
  }

  function nav() {
    var host = document.getElementById("site-nav");
    if (!host) return;
    var links = PAGES.map(function (p) {
      return '<a href="' + p[0] + '"' + (p[2] === current ? ' aria-current="page"' : "") + ">" + p[1] + "</a>";
    }).join("");
    host.innerHTML =
      '<header class="nav" id="nav"><div class="wrap nav-in">' +
      '<a class="logo logo-chip" href="index.html" aria-label="GrowthGuild home">' + logo() + "</a>" +
      '<nav class="nav-links" id="nav-links" aria-label="Main">' + links + "</nav>" +
      '<div class="nav-right">' +
      '<a class="icon-btn" href="' + IG_URL + '" target="_blank" rel="noopener" aria-label="GrowthGuild on Instagram">' + ICONS.ig + "</a>" +
      '<a class="btn btn-grad btn-sm" data-join href="community.html">Join Community</a>' +
      '<button class="menu-btn" id="menu-btn" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="nav-links">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>' +
      "</button></div></div></header>";
    var btn = document.getElementById("menu-btn");
    var bar = document.getElementById("nav");
    btn.addEventListener("click", function () {
      var open = bar.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  function founderThumb() {
    return '<span class="f-thumb"><span class="avatar" aria-hidden="true">AM</span>' +
      '<img src="' + FOUNDER_IMG + '" alt="Arsad Mansuri, Founder of GrowthGuild" width="64" height="64" loading="lazy" onerror="this.remove()"></span>';
  }

  function foot() {
    var host = document.getElementById("site-foot");
    if (!host) return;
    var links = PAGES.map(function (p) { return '<a href="' + p[0] + '">' + p[1] + "</a>"; }).join("");
    host.innerHTML =
      '<footer class="foot"><span class="wm" aria-hidden="true" style="font-size:clamp(3rem,13.5vw,12rem)">GROWTHGUILD</span><div class="wrap"><div class="foot-in">' +
      '<div><div class="foot-brand"><a class="logo-card" href="index.html" aria-label="GrowthGuild home"><img src="' + LOGO_FULL + '" alt="GrowthGuild, Built by Founders. For Founders." width="720" height="631"></a>' + founderThumb() + '</div>' +
      '<p style="margin-top:16px;max-width:36ch">A community and marketing team for founders and small business owners.</p></div>' +
      '<div><h4>Pages</h4><div class="foot-links">' + links + "</div></div>" +
      '<div><h4>Connect</h4><div class="foot-links">' +
      '<a href="' + IG_URL + '" target="_blank" rel="noopener">' + ICONS.ig + IG_HANDLE + "</a>" +
      '<a href="#join" data-join>' + ICONS.wa + "WhatsApp community</a>" +
      '<a href="' + PHONE_TEL + '">' + ICONS.phone + PHONE_TEXT + "</a>" +
      "<!-- TODO: owner to confirm this email address before publishing -->" +
      '<a href="mailto:' + EMAIL + '">' + ICONS.mail + EMAIL + "</a></div></div>" +
      '<div><h4>Legal</h4><div class="foot-links"><a href="privacy.html">Privacy Policy</a><a href="terms.html">Terms of Service</a></div></div></div>' +
      '<div class="foot-bottom"><small>&copy; 2026 GrowthGuild. Built in Maharashtra, India.</small><a class="btn btn-ghost btn-sm foot-admin" href="admin.html">Login Admin</a></div></div></footer>';
  }

  function fill() {
    var i, list;
    list = document.querySelectorAll("[data-ig]");
    for (i = 0; i < list.length; i++) {
      list[i].setAttribute("href", IG_URL);
      list[i].setAttribute("target", "_blank");
      list[i].setAttribute("rel", "noopener");
    }
    list = document.querySelectorAll("[data-handle]");
    for (i = 0; i < list.length; i++) list[i].textContent = IG_HANDLE;
    list = document.querySelectorAll("[data-icon]");
    for (i = 0; i < list.length; i++) list[i].innerHTML = ICONS[list[i].getAttribute("data-icon")] || "";
    list = document.querySelectorAll("[data-ill]");
    for (i = 0; i < list.length; i++) list[i].innerHTML = ILL[list[i].getAttribute("data-ill")] || "";
  }

  function network() {
    var c = document.getElementById("net");
    if (!c || !c.getContext) return;
    var ctx = c.getContext("2d");
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var cols = ["255,143,63", "255,63,142", "122,77,255"];
    var W = 0, H = 0, nodes = [], i;
    var logoImg = new Image();
    var ready = false;
    c.style.opacity = "0";
    c.style.transition = "opacity .35s ease";
    function show() { if (ready) return; ready = true; size(); draw(); c.style.opacity = "1"; }
    logoImg.onload = show;
    logoImg.onerror = show;
    logoImg.src = "logo-icon.png";
    if (logoImg.complete) show();

    function size() {
      var r = c.getBoundingClientRect();
      var d = Math.min(window.devicePixelRatio || 1, 2);
      W = r.width; H = r.height;
      c.width = Math.round(W * d); c.height = Math.round(H * d);
      ctx.setTransform(d, 0, 0, d, 0, 0);
    }

    function init() {
      nodes = [];
      for (i = 0; i < 34; i++) {
        var a = Math.random() * Math.PI * 2;
        var rad = Math.sqrt(Math.random()) * 0.4;
        nodes.push({
          x: 0.5 + Math.cos(a) * rad, y: 0.5 + Math.sin(a) * rad,
          vx: (Math.random() - 0.5) * 0.0005, vy: (Math.random() - 0.5) * 0.0005,
          r: 2 + Math.random() * 3.5, c: cols[i % 3], hub: false
        });
      }
      nodes[0] = { x: 0.5, y: 0.5, vx: 0, vy: 0, r: 17, c: cols[1], hub: true };
    }

    function step() {
      for (i = 1; i < nodes.length; i++) {
        var n = nodes[i];
        n.x += n.vx * 16; n.y += n.vy * 16;
        var dx = n.x - 0.5, dy = n.y - 0.5;
        if (Math.sqrt(dx * dx + dy * dy) > 0.44) { n.vx = -n.vx; n.vy = -n.vy; n.x -= dx * 0.02; n.y -= dy * 0.02; }
      }
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(255,255,255,0.07)";
      ctx.beginPath(); ctx.arc(W / 2, H / 2, W * 0.46, 0, Math.PI * 2); ctx.stroke();
      ctx.beginPath(); ctx.arc(W / 2, H / 2, W * 0.3, 0, Math.PI * 2); ctx.stroke();
      var j;
      for (i = 0; i < nodes.length; i++) {
        for (j = i + 1; j < nodes.length; j++) {
          var a = nodes[i], b = nodes[j];
          var dx = a.x - b.x, dy = a.y - b.y, d = Math.sqrt(dx * dx + dy * dy);
          var lim = a.hub || b.hub ? 0.3 : 0.17;
          if (d < lim) {
            ctx.strokeStyle = "rgba(255,140,110," + ((1 - d / lim) * 0.45).toFixed(3) + ")";
            ctx.beginPath(); ctx.moveTo(a.x * W, a.y * H); ctx.lineTo(b.x * W, b.y * H); ctx.stroke();
          }
        }
      }
      for (i = 0; i < nodes.length; i++) {
        var n = nodes[i], px = n.x * W, py = n.y * H, gr = n.r * (n.hub ? 4.2 : 3.4) * (W / 430);
        var g = ctx.createRadialGradient(px, py, 0, px, py, gr);
        g.addColorStop(0, "rgba(" + n.c + ",0.55)"); g.addColorStop(1, "rgba(" + n.c + ",0)");
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(px, py, gr, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = "rgb(" + n.c + ")";
        ctx.beginPath(); ctx.arc(px, py, n.r * (W / 430) * (n.hub ? 1.5 : 1), 0, Math.PI * 2); ctx.fill();
        if (n.hub) {
          var hr = 32 * (W / 430);
          ctx.fillStyle = "#fff"; ctx.beginPath(); ctx.arc(px, py, hr, 0, Math.PI * 2); ctx.fill();
          if (logoImg.complete && logoImg.naturalWidth) {
            var ih = hr * 1.35, iw = ih * logoImg.naturalWidth / logoImg.naturalHeight;
            ctx.drawImage(logoImg, px - iw / 2, py - ih / 2, iw, ih);
          }
        }
      }
    }

    function loop() { step(); draw(); requestAnimationFrame(loop); }

    size(); init(); draw();
    window.addEventListener("resize", function () { size(); draw(); });
    if (!reduce) requestAnimationFrame(loop);
  }

  /* ---------- Join form (modal) + Supabase ---------- */
  var CFG = window.GG_SUPABASE || {};

  function supabaseReady() {
    return CFG.url && CFG.anonKey && CFG.url.indexOf("TODO") === -1 && CFG.anonKey.indexOf("TODO") === -1;
  }

  // Generic insert-only save. Used by the join form; the future audit form should call
  // window.GGSave("audit_requests", {...}) the same way.
  function saveRow(table, row) {
    if (!supabaseReady()) {
      if (window.console) console.warn("GrowthGuild: set SUPABASE_URL and SUPABASE_ANON_KEY in supabase-config.js");
      return Promise.reject(new Error("not configured"));
    }
    var headers = { "Content-Type": "application/json", apikey: CFG.anonKey, Prefer: "return=minimal" };
    // Legacy anon keys are JWTs and go in Authorization too; new sb_publishable_ keys are not JWTs and must not.
    if (CFG.anonKey.indexOf("sb_") !== 0) headers.Authorization = "Bearer " + CFG.anonKey;
    return fetch(CFG.url.replace(/\/+$/, "") + "/rest/v1/" + table, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(row)
    }).then(function (res) {
      if (!res.ok) throw new Error("save failed " + res.status);
    });
  }
  window.GGSave = saveRow;

  function cleanPhone(v) {
    var t = String(v || "").replace(/[\s\-()]/g, "");
    if (t.indexOf("+91") === 0) t = t.slice(3);
    return t;
  }

  function joinModal() {
    var host = document.createElement("div");
    host.className = "jm";
    host.hidden = true;
    host.innerHTML =
      '<div class="jm-bg" data-close></div>' +
      '<div class="jm-box card" role="dialog" aria-modal="true" aria-labelledby="jm-title">' +
      '<button class="jm-x" type="button" aria-label="Close" data-close>&times;</button>' +
      '<form id="jm-form" novalidate>' +
      '<span class="label">Join the Guild</span>' +
      '<h3 id="jm-title">Join the community</h3>' +
      '<p>Tell us a little about you. Then we will open the WhatsApp community.</p>' +
      '<div class="jm-f"><label for="jm-name">Full name</label><input id="jm-name" name="name" type="text" autocomplete="name" required><small class="jm-err" id="jm-name-e" role="alert"></small></div>' +
      '<div class="jm-f"><label for="jm-num">WhatsApp number</label><input id="jm-num" name="num" type="tel" inputmode="tel" autocomplete="tel" placeholder="10-digit mobile number" required><small class="jm-err" id="jm-num-e" role="alert"></small></div>' +
      '<div class="jm-f"><label for="jm-role">I am a...</label><select id="jm-role" name="role" required><option value="">Select one</option><option>Founder</option><option>Small business owner</option><option>Content creator</option><option>Student</option><option>Other</option></select><small class="jm-err" id="jm-role-e" role="alert"></small></div>' +
      '<div class="jm-f"><label for="jm-biz">Your business / what you do <em>(optional)</em></label><input id="jm-biz" name="biz" type="text" autocomplete="organization"></div>' +
      '<p class="jm-msg" id="jm-msg" role="status" aria-live="polite"></p>' +
      '<button class="btn btn-grad btn-lg jm-submit" id="jm-submit" type="submit">Join on WhatsApp</button>' +
      '</form></div>';
    document.body.appendChild(host);

    var form = host.querySelector("#jm-form");
    var msg = host.querySelector("#jm-msg");
    var submit = host.querySelector("#jm-submit");
    var lastFocus = null;

    function setErr(id, text) {
      var el = host.querySelector("#" + id + "-e");
      el.textContent = text || "";
      var inp = host.querySelector("#" + id);
      if (text) inp.setAttribute("aria-invalid", "true"); else inp.removeAttribute("aria-invalid");
    }
    function open(e) {
      if (e) e.preventDefault();
      lastFocus = document.activeElement;
      var nav = document.getElementById("nav");
      if (nav) nav.classList.remove("open");
      host.hidden = false;
      document.documentElement.classList.add("jm-lock");
      setTimeout(function () { host.querySelector("#jm-name").focus(); }, 30);
    }
    function close() {
      host.hidden = true;
      document.documentElement.classList.remove("jm-lock");
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }
    function reset() {
      submit.disabled = false;
      submit.classList.remove("loading");
      submit.textContent = "Join on WhatsApp";
    }

    document.addEventListener("click", function (e) {
      var t = e.target.closest ? e.target.closest("[data-join]") : null;
      if (t) open(e);
    });
    host.addEventListener("click", function (e) {
      if (e.target.hasAttribute && e.target.hasAttribute("data-close")) close();
    });
    document.addEventListener("keydown", function (e) {
      if (host.hidden) return;
      if (e.key === "Escape") close();
      if (e.key === "Tab") {
        var f = host.querySelectorAll("button:not([disabled]),input,select,a[href]");
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.querySelector("#jm-name").value.trim();
      var num = cleanPhone(form.querySelector("#jm-num").value);
      var role = form.querySelector("#jm-role").value;
      var biz = form.querySelector("#jm-biz").value.trim();
      var ok = true;
      msg.textContent = ""; msg.className = "jm-msg";
      setErr("jm-name", ""); setErr("jm-num", ""); setErr("jm-role", "");
      if (!name) { setErr("jm-name", "Please enter your name."); ok = false; }
      if (!/^[6-9]\d{9}$/.test(num)) { setErr("jm-num", "Enter a valid 10-digit Indian mobile number."); ok = false; }
      if (!role) { setErr("jm-role", "Please choose one."); ok = false; }
      if (!ok) { var bad = form.querySelector('[aria-invalid="true"]'); if (bad) bad.focus(); return; }

      submit.disabled = true;
      submit.classList.add("loading");
      submit.textContent = "Saving...";
      saveRow("community_members", { name: name, whatsapp_number: num, role: role, business: biz || null, source: "website" })
        .then(function () {
          submit.textContent = "Done";
          msg.className = "jm-msg ok";
          msg.textContent = "You're in! Opening the WhatsApp community...";
          var w = null;
          try { w = window.open(JOIN_URL, "_blank"); if (w) w.opener = null; } catch (err) { w = null; }
          if (!w) {
            msg.innerHTML = "You're in! Opening the WhatsApp community...<br><a class=\"btn btn-grad jm-wa\" href=\"" + JOIN_URL + "\" target=\"_blank\" rel=\"noopener\">Tap here to join on WhatsApp</a>";
          }
          form.reset();
          setTimeout(reset, 1500);
        })
        .catch(function () {
          reset();
          msg.className = "jm-msg bad";
          msg.textContent = "Could not save, please try again";
        });
    });
  }

  var defs = document.createElement("div");
  defs.innerHTML = DEFS;
  document.body.appendChild(defs);
  nav(); foot(); fill(); network(); joinModal();
})();
