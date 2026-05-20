// ============================================================
//  SECTION 1 — DATA
// ============================================================

const EVENTS = [
  { id:"fn276", name:"UFC FIGHT NIGHT 276", subtitle:"Allen vs. Costa", date:"2026-05-16", location:"Las Vegas, NV", venue:"UFC Apex", ticketUrl:"https://ufc.com", type:"fightnight", status:"upcoming",
    fights:[
      { order:1, label:"MAIN EVENT",   f1:"BRENDAN ALLEN",   f1info:"🇺🇸 #4 MW · 24-6",   f2:"PAULO COSTA",         f2info:"🇧🇷 #15 MW · 14-3",  division:"Middleweight", isTitleFight:false, belt:"", f1prob:55 },
      { order:2, label:"CO-MAIN",      f1:"SONG YADONG",     f1info:"🇨🇳 #5 BW · 22-8-1", f2:"DEIVESON FIGUEIREDO", f2info:"🇧🇷 #7 BW · 23-5-1", division:"Bantamweight", isTitleFight:false, belt:"", f1prob:52 },
      { order:3, label:"MAIN CARD",    f1:"PADDY PIMBLETT",  f1info:"🇬🇧 #6 LW · 22-4",   f2:"KING GREEN",          f2info:"🇺🇸 LW · 29-12",      division:"Lightweight",  isTitleFight:false, belt:"", f1prob:60 },
      { order:4, label:"MAIN CARD",    f1:"TBA",             f1info:"TBA",                  f2:"TBA",                 f2info:"TBA",                  division:"TBA",          isTitleFight:false, belt:"", f1prob:50 },
      { order:5, label:"PRELIM",       f1:"TBA",             f1info:"TBA",                  f2:"TBA",                 f2info:"TBA",                  division:"TBA",          isTitleFight:false, belt:"", f1prob:50 },
      { order:6, label:"EARLY PRELIM", f1:"TBA",             f1info:"TBA",                  f2:"TBA",                 f2info:"TBA",                  division:"TBA",          isTitleFight:false, belt:"", f1prob:50 },
    ]},
  { id:"freedom250", name:"UFC FREEDOM 250", subtitle:"Topuria vs. Gaethje", date:"2026-06-14", location:"Washington D.C.", venue:"The White House", ticketUrl:"https://ufc.com", type:"ppv", status:"upcoming",
    fights:[
      { order:1, label:"MAIN EVENT",   f1:"ILIA TOPURIA",    f1info:"🇬🇪 LW Champ · 16-0", f2:"JUSTIN GAETHJE",  f2info:"🇺🇸 Interim · 25-5",  division:"Lightweight", isTitleFight:true,  belt:"LIGHTWEIGHT UNIFICATION", f1prob:58 },
      { order:2, label:"CO-MAIN",      f1:"ALEX PEREIRA",    f1info:"🇧🇷 HW · 12-2",        f2:"CIRYL GANE",      f2info:"🇫🇷 #1 HW · 13-2",    division:"Heavyweight", isTitleFight:true,  belt:"INTERIM HW TITLE",        f1prob:54 },
      { order:3, label:"MAIN CARD",    f1:"ARMAN TSARUKYAN", f1info:"🇦🇲 #2 LW · 23-4",     f2:"MAX HOLLOWAY",    f2info:"🇺🇸 #4 LW · 26-8",    division:"Lightweight", isTitleFight:false, belt:"",                        f1prob:53 },
      { order:4, label:"MAIN CARD",    f1:"TBA",             f1info:"TBA",                   f2:"TBA",             f2info:"TBA",                   division:"TBA",         isTitleFight:false, belt:"",                        f1prob:50 },
      { order:5, label:"PRELIM",       f1:"TBA",             f1info:"TBA",                   f2:"TBA",             f2info:"TBA",                   division:"TBA",         isTitleFight:false, belt:"",                        f1prob:50 },
      { order:6, label:"EARLY PRELIM", f1:"TBA",             f1info:"TBA",                   f2:"TBA",             f2info:"TBA",                   division:"TBA",         isTitleFight:false, belt:"",                        f1prob:50 },
    ]},
  { id:"ufc329", name:"UFC 329", subtitle:"TBA", date:"2026-08-15", location:"TBA", venue:"TBA", ticketUrl:"https://ufc.com", type:"ppv", status:"upcoming",
    fights:[{ order:1, label:"MAIN EVENT", f1:"TBA", f1info:"TBA", f2:"TBA", f2info:"TBA", division:"TBA", isTitleFight:false, belt:"", f1prob:50 }]},
  { id:"ufc330", name:"UFC 330", subtitle:"TBA", date:"2026-09-01", location:"Philadelphia, PA", venue:"Xfinity Mobile Arena", ticketUrl:"https://ufc.com", type:"ppv", status:"upcoming",
    fights:[{ order:1, label:"MAIN EVENT", f1:"TBA", f1info:"TBA", f2:"TBA", f2info:"TBA", division:"TBA", isTitleFight:false, belt:"", f1prob:50 }]},
  { id:"ufc328", name:"UFC 328", subtitle:"Chimaev vs. Strickland", date:"2026-05-09", location:"Newark, NJ", venue:"Prudential Center", ticketUrl:null, type:"ppv", status:"past",
    fights:[
      { order:1, label:"MAIN EVENT",   f1:"KHAMZAT CHIMAEV",  f1info:"🇸🇪 MW Champ · 15-0", f2:"SEAN STRICKLAND",     f2info:"🇺🇸 · 30-7",         division:"Middleweight",     isTitleFight:true,  belt:"MIDDLEWEIGHT TITLE", f1prob:75, winner:"f2", method:"Split Decision", round:"R5" },
      { order:2, label:"CO-MAIN",      f1:"JOSHUA VAN",        f1info:"🇲🇲 FLY Champ",        f2:"TATSURO TAIRA",       f2info:"🇯🇵 · 18-1",          division:"Flyweight",        isTitleFight:true,  belt:"FLYWEIGHT TITLE",    f1prob:58, winner:"f1", method:"TKO",            round:"R5" },
      { order:3, label:"MAIN CARD",    f1:"ALEXANDER VOLKOV",  f1info:"🇷🇺 #2 HW",             f2:"WALDO CORTES-ACOSTA", f2info:"🇩🇴 #4 HW",           division:"Heavyweight",      isTitleFight:false, belt:"", f1prob:55, winner:"f1", method:"Decision", round:"R3" },
      { order:4, label:"MAIN CARD",    f1:"SEAN BRADY",        f1info:"🇺🇸 #6 WW",             f2:"GILBERT BURNS",       f2info:"🇧🇷 #11 WW",          division:"Welterweight",     isTitleFight:false, belt:"", f1prob:60, winner:"f1", method:"Decision", round:"R3" },
      { order:5, label:"MAIN CARD",    f1:"KING GREEN",        f1info:"🇺🇸 LW",                 f2:"JEREMY STEPHENS",     f2info:"🇺🇸 FW",              division:"Lightweight",      isTitleFight:false, belt:"", f1prob:65, winner:"f1", method:"Submission", round:"R1" },
      { order:6, label:"PRELIM",       f1:"GRANT DAWSON",      f1info:"🇺🇸 LW · 21-3",         f2:"MATEUSZ REBECKI",     f2info:"🇵🇱 LW · 18-3",      division:"Lightweight",      isTitleFight:false, belt:"", f1prob:62, winner:"f1", method:"Submission", round:"R3" },
      { order:7, label:"PRELIM",       f1:"JIM MILLER",        f1info:"🇺🇸 LW",                 f2:"JARED GORDON",        f2info:"🇺🇸 LW",              division:"Lightweight",      isTitleFight:false, belt:"", f1prob:55, winner:"f1", method:"Submission", round:"R1" },
      { order:8, label:"PRELIM",       f1:"YAROSLAV AMOSOV",   f1info:"🇺🇦 WW",                f2:"JOEL ALVAREZ",        f2info:"🇪🇸 LW",              division:"Welterweight",     isTitleFight:false, belt:"", f1prob:52, winner:"f1", method:"Submission", round:"R2" },
      { order:9, label:"EARLY PRELIM", f1:"ATEBA GAUTIER",     f1info:"🇫🇷 LW",                f2:"OZZY DIAZ",           f2info:"🇺🇸 LW",              division:"Lightweight",      isTitleFight:false, belt:"", f1prob:58, winner:"f1", method:"KO",         round:"R2" },
    ]},
  { id:"fn-perth", name:"UFC FIGHT NIGHT · PERTH", subtitle:"Della Maddalena vs. Prates", date:"2026-05-02", location:"Perth, Australia", venue:"RAC Arena", ticketUrl:null, type:"fightnight", status:"past",
    fights:[
      { order:1, label:"MAIN EVENT", f1:"CARLOS PRATES",    f1info:"🇧🇷 WW · 23-7",      f2:"JACK DELLA MADDALENA", f2info:"🇦🇺 #1 WW · 18-2", division:"Welterweight", isTitleFight:false, belt:"", f1prob:45, winner:"f1", method:"TKO",      round:"R3" },
      { order:2, label:"CO-MAIN",    f1:"QUILLAN SALKILLD", f1info:"🇦🇺 LW",              f2:"BENEIL DARIUSH",       f2info:"🇮🇷 LW · 22-6",     division:"Lightweight",  isTitleFight:false, belt:"", f1prob:38, winner:"f1", method:"TKO",      round:"R1" },
      { order:3, label:"MAIN CARD",  f1:"BRENDAN ALLEN",    f1info:"🇺🇸 MW · 24-5",       f2:"ROMAN DOLIDZE",        f2info:"🇬🇪 MW · 13-3",     division:"Middleweight", isTitleFight:false, belt:"", f1prob:58, winner:"f1", method:"Decision", round:"R3" },
      { order:4, label:"MAIN CARD",  f1:"GABRIEL BONFIM",   f1info:"🇧🇷 WW · 16-1",       f2:"SEAN BRADY",           f2info:"🇺🇸 WW · 16-0",     division:"Welterweight", isTitleFight:false, belt:"", f1prob:48, winner:"f2", method:"Decision", round:"R3" },
      { order:5, label:"PRELIM",     f1:"NIKO PRICE",       f1info:"🇺🇸 WW",              f2:"GUNNAR NELSON",        f2info:"🇮🇸 WW",             division:"Welterweight", isTitleFight:false, belt:"", f1prob:50, winner:"f2", method:"Decision", round:"R3" },
    ]},
  { id:"fn-sterling", name:"UFC FIGHT NIGHT · LAS VEGAS", subtitle:"Sterling vs. Zalal", date:"2026-04-25", location:"Las Vegas, NV", venue:"UFC Apex", ticketUrl:null, type:"fightnight", status:"past",
    fights:[
      { order:1, label:"MAIN EVENT", f1:"ALJAMAIN STERLING", f1info:"🇺🇸 FW · 25-5",       f2:"YOUSSEF ZALAL",          f2info:"🇲🇦 FW · 18-5",    division:"Featherweight",    isTitleFight:false, belt:"", f1prob:62, winner:"f1", method:"Decision",   round:"R5" },
      { order:2, label:"CO-MAIN",    f1:"DAVEY GRANT",       f1info:"🇬🇧 BW",               f2:"ADRIÁN LUNA MARTINETTI", f2info:"🇲🇽 BW",            division:"Bantamweight",     isTitleFight:false, belt:"", f1prob:48, winner:"f1", method:"Decision",   round:"R3" },
      { order:3, label:"MAIN CARD",  f1:"RYAN SPANN",        f1info:"🇺🇸 LHW · 22-8",      f2:"BOGDAN GUSKOV",          f2info:"🇷🇺 LHW",           division:"Light Heavyweight", isTitleFight:false,belt:"",  f1prob:55, winner:"f1", method:"KO",         round:"R1" },
      { order:4, label:"MAIN CARD",  f1:"ERIC McCONICO",     f1info:"🇺🇸 WW",               f2:"RODOLFO VIEIRA",         f2info:"🇧🇷 WW",            division:"Welterweight",     isTitleFight:false, belt:"", f1prob:52, winner:"f1", method:"Decision",   round:"R3" },
      { order:5, label:"PRELIM",     f1:"JACKSON McVEY",     f1info:"🇺🇸 LW",               f2:"SEDRIQUES DUMAS",        f2info:"🇺🇸 LW",            division:"Lightweight",      isTitleFight:false, belt:"", f1prob:51, winner:"f1", method:"Submission", round:"R1" },
    ]},
  { id:"ufc327", name:"UFC 327", subtitle:"Prochazka vs. Ulberg", date:"2026-04-11", location:"Miami, FL", venue:"Kaseya Center", ticketUrl:null, type:"ppv", status:"past",
    fights:[
      { order:1, label:"MAIN EVENT", f1:"JIRI PROCHAZKA", f1info:"🇨🇿 LHW · 32-5",     f2:"CARLOS ULBERG",    f2info:"🇳🇿 LHW · 14-1",   division:"Light Heavyweight", isTitleFight:true,  belt:"LHW VACANT TITLE", f1prob:55, winner:"f2", method:"KO",       round:"R1" },
      { order:2, label:"CO-MAIN",    f1:"PAULO COSTA",    f1info:"🇧🇷 · 13-3",           f2:"AZAMAT MURZAKANOV",f2info:"🇷🇺 LHW",           division:"Light Heavyweight", isTitleFight:false, belt:"",                 f1prob:52, winner:"f1", method:"TKO",      round:"R3" },
      { order:3, label:"MAIN CARD",  f1:"JOSH HOKIT",     f1info:"🇺🇸 HW",               f2:"CURTIS BLAYDES",   f2info:"🇺🇸 HW · 18-4",    division:"Heavyweight",       isTitleFight:false, belt:"",                 f1prob:45, winner:"f1", method:"KO",       round:"R1" },
      { order:4, label:"MAIN CARD",  f1:"DOMINICK REYES", f1info:"🇺🇸 LHW",              f2:"JOHNNY WALKER",    f2info:"🇧🇷 LHW",           division:"Light Heavyweight", isTitleFight:false, belt:"",                 f1prob:48, winner:"f1", method:"Decision", round:"R3" },
    ]},
];

/*
  WHAT SECTION 1 DOES:
  Stores all UFC event data. EVENTS is an array (list) of event objects. Each event has
  info like name, date, and a fights array. Past fights include winner, method, and round.
  Nothing runs here — it is just the data the rest of the code reads from.
*/


// ============================================================
//  SECTION 2 — HELPER FUNCTIONS
// ============================================================

// Turns "2026-06-14" into "June 14, 2026"
const fmtDate = d => new Date(d + "T12:00:00").toLocaleDateString("en-US", { month:"long", day:"numeric", year:"numeric" });

// Returns how many days until the given date (negative if it has passed)
const daysUntil = d => {
  const t = new Date(); t.setHours(0,0,0,0);
  const s = new Date(d); s.setHours(0,0,0,0);
  return Math.round((s - t) / 86400000); // 86400000 = ms in one day
};

// Returns a countdown label like "⏳ 29 DAYS AWAY"
const countdown = d => {
  const n = daysUntil(d);
  if (n < 0)   return "⚔️ PASSED";
  if (n === 0) return "🔴 TONIGHT";
  if (n === 1) return "🔴 TOMORROW";
  return `⏳ ${n} DAYS AWAY`;
};

// Returns a CSS class based on how a fight ended (for colour coding)
const mClass = m => m && (m.includes("KO") || m.includes("TKO")) ? "mko"
               : m && m.includes("Sub") ? "msub" : "mdec";

// Returns an emoji based on how a fight ended
const mEmoji = m => m && (m.includes("KO") || m.includes("TKO")) ? "💥"
               : m && m.includes("Sub") ? "🔒" : "📋";

/*
  WHAT SECTION 2 DOES:
  Small reusable tools. fmtDate formats dates. daysUntil calculates how far away
  an event is. countdown turns that into a label. mClass and mEmoji return the
  right colour class and emoji based on how a fight ended.
*/


// ============================================================
//  SECTION 3 — NAVIGATION
// ============================================================

// When a nav tab is clicked, hide all pages and show the matching one
document.querySelectorAll(".nav-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".nav-tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById("page-" + tab.dataset.page).classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

/*
  WHAT SECTION 3 DOES:
  Makes the three nav buttons at the top work. Clicking one removes "active" from
  every tab and page, then adds it to the clicked tab and its matching page div.
*/


// ============================================================
//  SECTION 4 — EVENTS PAGE
// ============================================================

// Build and show all event cards on screen
function renderEvents(filter) {
  if (!filter) filter = "all";
  const grid = document.getElementById("eventsGrid");
  grid.innerHTML = ""; // clear existing cards

  // Filter and sort events
  const list = EVENTS
    .filter(e => filter === "all" || e.status === filter)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  list.forEach((ev, i) => {
    const past = ev.status === "past";
    const m = ev.fights[0]; // main event is always first

    const card = document.createElement("div");
    card.className = "event-card" + (past ? " event-past" : "");
    card.style.animationDelay = (i * 0.06) + "s";

    // Result preview shown on past event cards
    const winPrev = past && m.winner
      ? `<div class="ec-result ${mClass(m.method)}">${mEmoji(m.method)} ${m.winner === "f1" ? m.f1 : m.f2} wins · ${m.method} · ${m.round}</div>`
      : "";

    card.innerHTML = `
      <div class="ec-summary" id="summary-${ev.id}" onclick="toggleEvent('${ev.id}')">
        <div>
          <div class="ec-badges">
            <span class="ec-badge ${ev.type === "ppv" ? "ecb-ppv" : "ecb-fn"}">${ev.type === "ppv" ? "PPV" : "FIGHT NIGHT"}</span>
            ${past ? `<span class="ec-badge ecb-done">✓ COMPLETED</span>` : `<span class="ec-badge ecb-live">${countdown(ev.date)}</span>`}
          </div>
          <div class="ec-name">${ev.name}</div>
          <div class="ec-sub">${ev.subtitle}</div>
          <div class="ec-details">
            <span>📅 ${fmtDate(ev.date)}</span>
            <span>📍 ${ev.location}</span>
            <span>🏟 ${ev.venue}</span>
          </div>
        </div>
        <div class="ec-matchup">
          ${m.isTitleFight ? `<div class="ec-belt">🏆 ${m.belt}</div>` : ""}
          <div class="ec-fighters">
            <div class="ec-fname">${m.f1}</div>
            <div class="ec-fvs">VS</div>
            <div class="ec-fname">${m.f2}</div>
          </div>
          <div class="ec-div">${m.division} · MAIN EVENT</div>
          ${winPrev}
        </div>
        <div class="ec-expand" id="expand-btn-${ev.id}">
          <div class="ec-expand-icon">▼</div>
          <div class="ec-expand-label">SEE FULL<br>FIGHT CARD</div>
          <div class="ec-fight-count">${ev.fights.length} FIGHTS</div>
        </div>
      </div>
      <div class="ec-panel" id="panel-${ev.id}">
        <div class="ec-panel-inner">
          <div class="ec-panel-title">
            <span>${ev.name} — FULL CARD</span>
            <span class="ec-panel-count">${ev.fights.length} fights · ${ev.venue}</span>
          </div>
          ${buildRows(ev)}
        </div>
      </div>`;

    grid.appendChild(card);
  });
}

// Build the fight rows inside an expanded event card
function buildRows(ev) {
  const past = ev.status === "past";
  return ev.fights.slice().sort((a, b) => b.order - a.order).map(f => {
    const isMain = f.order === 1;
    const isCo   = f.order === 2;
    const w1 = past && f.winner === "f1";
    const w2 = past && f.winner === "f2";

    // CSS classes for each fighter block — dim the loser, keep the winner bright
    const fc1 = "fr-fighter" + (w1 ? " fr-winner" : "") + (past && !w1 && f.winner ? " fr-loser" : "");
    const fc2 = "fr-fighter fr-right" + (w2 ? " fr-winner" : "") + (past && !w2 && f.winner ? " fr-loser" : "");

    // Right column — probability bar for upcoming, result for past
    let extra = "";
    if (!past) {
      const fav = f.f1prob >= 50;
      extra = `
        <div class="prob-bar">
          <div class="prob-f1" style="width:${f.f1prob}%">${f.f1prob}%</div>
          <div class="prob-f2">${100 - f.f1prob}%</div>
        </div>
        <div class="prob-labels">
          <span class="${fav ? "plabel-fav" : "plabel-dog"}">${fav ? "⭐ FAV" : "🐶 UNDERDOG"}</span>
          <span class="${!fav ? "plabel-fav" : "plabel-dog"}">${!fav ? "FAV ⭐" : "UNDERDOG 🐶"}</span>
        </div>`;
    } else if (f.winner) {
      const wn = f.winner === "f1" ? f.f1 : f.f2;
      const ln = f.winner === "f1" ? f.f2 : f.f1;
      extra = `<div class="fr-result ${mClass(f.method)}">${mEmoji(f.method)} <strong>${wn}</strong> def. ${ln}<span class="fr-result-detail">${f.method} · ${f.round}</span></div>`;
    }

    return `
      <div class="fight-row${isMain ? " fr-main" : isCo ? " fr-co" : ""}">
        <div class="fr-label">
          <div class="fr-label-text ${isMain ? "frl-main" : isCo ? "frl-co" : "frl-other"}">${f.label}</div>
          ${f.isTitleFight ? `<div class="fr-belt-tag">🏆 TITLE</div>` : ""}
          <div class="fr-division">${f.division}</div>
        </div>
        <div class="fr-matchup">
          <div class="${fc1}">
            <div class="fr-name">${f.f1}</div>
            <div class="fr-info">${f.f1info}</div>
            ${w1 ? `<div class="fr-win-tag">✓ WINNER</div>` : ""}
          </div>
          <div class="fr-vs">VS</div>
          <div class="${fc2}">
            <div class="fr-name">${f.f2}</div>
            <div class="fr-info">${f.f2info}</div>
            ${w2 ? `<div class="fr-win-tag">✓ WINNER</div>` : ""}
          </div>
        </div>
        <div class="fr-extra">${extra}</div>
      </div>`;
  }).join("");
}

// Open or close an event card when clicked
function toggleEvent(id) {
  const panel = document.getElementById("panel-" + id);
  const btn   = document.getElementById("expand-btn-" + id);
  const open  = panel.classList.contains("open");

  // Close any other open panels first
  document.querySelectorAll(".ec-panel.open").forEach(p => {
    if (p.id !== "panel-" + id) {
      p.classList.remove("open");
      const ob = document.getElementById("expand-btn-" + p.id.replace("panel-", ""));
      if (ob) { ob.querySelector(".ec-expand-icon").textContent = "▼"; ob.querySelector(".ec-expand-label").innerHTML = "SEE FULL<br>FIGHT CARD"; }
    }
  });

  panel.classList.toggle("open");

  if (!open) {
    btn.querySelector(".ec-expand-icon").textContent = "▲";
    btn.querySelector(".ec-expand-label").innerHTML  = "HIDE<br>FIGHT CARD";
    setTimeout(() => document.getElementById("summary-" + id).scrollIntoView({ behavior:"smooth", block:"start" }), 100);
    const ev = EVENTS.find(e => e.id === id);
    if (ev && ev.status === "upcoming" && ev.ticketUrl) showTicketBar(ev);
    else hideTicketBar();
  } else {
    btn.querySelector(".ec-expand-icon").textContent = "▼";
    btn.querySelector(".ec-expand-label").innerHTML  = "SEE FULL<br>FIGHT CARD";
    hideTicketBar();
  }
}

// Show the ticket bar at the bottom for upcoming events
function showTicketBar(ev) {
  document.getElementById("tb-name").textContent = ev.name;
  document.getElementById("tb-info").textContent = "📅 " + fmtDate(ev.date) + " · 📍 " + ev.location + " · 🏟 " + ev.venue;
  document.getElementById("ticketBar").classList.add("visible");
}

// Hide the ticket bar
function hideTicketBar() {
  document.getElementById("ticketBar").classList.remove("visible");
}

// Filter buttons — All, Upcoming, Past
document.querySelectorAll("[data-efilter]").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("[data-efilter]").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderEvents(btn.dataset.efilter);
    hideTicketBar();
  });
});

/*
  WHAT SECTION 4 DOES:
  renderEvents builds event cards. buildRows builds fight rows inside each card.
  toggleEvent opens/closes a card and shows/hides the ticket bar. The filter buttons
  re-render cards with different filters. showTicketBar and hideTicketBar control
  the strip at the bottom of the screen.
*/


// ============================================================
//  SECTION 5 — FIGHTER SEARCH (AI POWERED)
// ============================================================

const searchInput   = document.getElementById("fighterSearchInput");
const searchClear   = document.getElementById("searchClear");
const searchResults = document.getElementById("searchResults");

// Show the default "start searching" prompt
function showPrompt() {
  searchResults.className = "";
  searchResults.innerHTML = `
    <div class="prompt-wrap">
      <div class="prompt-icon">🥊</div>
      <p class="prompt-text">Search any UFC fighter — AI powered</p>
      <p class="prompt-sub">Live stats, records and fight history</p>
    </div>`;
}

// Ask Claude AI for fighter info and return it as a JavaScript object
async function fetchFighter(name) {
  const prompt = `You are a UFC data expert. Look up the UFC fighter: "${name}".
Respond ONLY with valid JSON, no markdown, no backticks.
Structure: {"found":true,"name":"FULL NAME IN CAPS","nickname":"or empty","division":"e.g. Lightweight","rank":"Champion or #1 etc","record":"W-L-D","country":"flag + country","age":30,"height":"5'10\\"","reach":"74\\"","style":"e.g. BJJ","history":[{"opp":"Name","result":"W or L or D","method":"KO/TKO/Submission/Decision","round":"R1"}],"summary":"2 sentences about this fighter"}
If not UFC: {"found":false}
Include 5 most recent fights. Today is ${new Date().toDateString()}.`;

  const res  = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ model:"claude-sonnet-4-20250514", max_tokens:1000, messages:[{ role:"user", content:prompt }] })
  });
  const data = await res.json();
  return JSON.parse(data.content[0].text.trim().replace(/```json|```/g, ""));
}

// Build a fighter profile card from the AI data
function buildFighterCard(f) {
  const dc   = "div-" + f.division.toLowerCase().replace(/\s+/g,"").replace(/[^a-z]/g,"");
  const wins = f.history.filter(h => h.result === "W").length;
  const real = f.history.filter(h => h.result === "W" || h.result === "L").length;
  const wr   = real ? Math.round(wins / real * 100) : 0;

  const hist = f.history.map(h => {
    const bc = h.result === "W" ? "fpw" : h.result === "D" ? "fpd" : "fpl";
    const mc = h.method && (h.method.includes("KO") || h.method.includes("TKO")) ? "mko"
             : h.method && h.method.includes("Sub") ? "msub" : "mdec";
    return `<div class="fp-fight-row">
      <span class="fp-opp">vs ${h.opp}</span>
      <div class="fp-res-wrap">
        <span class="fp-badge ${bc}">${h.result}</span>
        <span class="fp-method ${mc}">${h.method} · ${h.round}</span>
      </div>
    </div>`;
  }).join("");

  return `<div class="fighter-card ${dc}">
    <div class="fp-header">
      <div class="fp-div">${f.division.toUpperCase()} · ${f.rank}</div>
      <div class="fp-name">${f.name}</div>
      ${f.nickname ? `<div class="fp-nick">"${f.nickname}"</div>` : ""}
    </div>
    <div class="fp-body">
      <div class="fp-rec-row"><div class="fp-rec">${f.record}</div><div class="fp-style">${f.style}</div></div>
      <div class="fp-stats">
        <div class="fp-stat"><div class="fp-stat-l">Country</div><div class="fp-stat-v">${f.country}</div></div>
        <div class="fp-stat"><div class="fp-stat-l">Age</div><div class="fp-stat-v">${f.age}</div></div>
        <div class="fp-stat"><div class="fp-stat-l">Height</div><div class="fp-stat-v">${f.height}</div></div>
        <div class="fp-stat"><div class="fp-stat-l">Reach</div><div class="fp-stat-v">${f.reach}</div></div>
        <div class="fp-stat"><div class="fp-stat-l">Division</div><div class="fp-stat-v">${f.division}</div></div>
        <div class="fp-stat"><div class="fp-stat-l">Ranking</div><div class="fp-stat-v">${f.rank}</div></div>
      </div>
      <div class="fp-wr">
        <div class="fp-wr-l">Win Rate — ${wr}%</div>
        <div class="fp-wr-track"><div class="fp-wr-fill" style="width:${wr}%">${wr > 18 ? wr + "%" : ""}</div></div>
      </div>
      ${f.summary ? `<div class="ai-box"><span class="ai-tag">🤖 AI INSIGHT</span>${f.summary}</div>` : ""}
      <div class="fp-hist">
        <div class="fp-hist-title">⚔️ Recent Fight History</div>
        ${hist}
      </div>
    </div>
  </div>`;
}

// Timer so the API only fires after the user stops typing for 600ms
let searchTimer = null;

function doSearch(q) {
  q = q.trim();
  searchClear.classList.toggle("visible", q.length > 0);
  clearTimeout(searchTimer);
  if (!q) { showPrompt(); return; }

  searchResults.className = "";
  searchResults.innerHTML = `
    <div class="prompt-wrap">
      <div class="spin-ring"></div>
      <p class="prompt-text">Looking up <strong>${q}</strong>...</p>
      <p class="prompt-sub">Asking AI for live UFC data</p>
    </div>`;

  searchTimer = setTimeout(async () => {
    try {
      const f = await fetchFighter(q);
      if (!f.found) {
        searchResults.innerHTML = `<div class="prompt-wrap"><div class="prompt-icon">❓</div><p class="prompt-text">No UFC fighter found for "<strong>${q}</strong>"</p></div>`;
        return;
      }
      searchResults.className = "fighter-grid";
      searchResults.innerHTML = buildFighterCard(f);
    } catch (e) {
      searchResults.innerHTML = `<div class="prompt-wrap"><div class="prompt-icon">⚠️</div><p class="prompt-text">Something went wrong. Try again.</p></div>`;
    }
  }, 600);
}

searchInput.addEventListener("input", e => doSearch(e.target.value));
searchClear.addEventListener("click", () => { searchInput.value = ""; doSearch(""); searchInput.focus(); });
document.querySelectorAll(".hint-pill").forEach(p => {
  p.addEventListener("click", () => {
    if (!document.getElementById("page-search").classList.contains("active")) document.querySelector("[data-page='search']").click();
    setTimeout(() => { searchInput.value = p.dataset.hint; doSearch(p.dataset.hint); }, 60);
  });
});

/*
  WHAT SECTION 5 DOES:
  The AI fighter search. doSearch waits 600ms after the last keystroke then calls
  fetchFighter which sends the name to Claude AI. Claude replies with JSON data.
  buildFighterCard turns that data into a profile card on screen. The hint pills
  and X button also trigger searches.
*/


// ============================================================
//  SECTION 6 — TICKET MODAL
// ============================================================

let modalBasePrice = 89; // current price per ticket
let modalQty       = 1;  // current number of tickets

// Open the ticket modal with event details
function openModal(name, date, loc, fight, base) {
  modalBasePrice = base;
  modalQty       = 1;

  document.getElementById("modal-name").textContent  = name;
  document.getElementById("modal-date").textContent  = "📅 " + date;
  document.getElementById("modal-loc").textContent   = "📍 " + loc;
  document.getElementById("modal-fight").textContent = fight;

  // Set the three tier prices
  document.getElementById("price-ga").textContent    = "$" + base;
  document.getElementById("price-floor").textContent = "$" + (base * 2.8 | 0);
  document.getElementById("price-vip").textContent   = "$" + (base * 6.7 | 0);

  document.getElementById("modal-qty").textContent   = "1";
  document.getElementById("modal-total").textContent = "$" + base;

  // Select General Admission by default
  document.querySelectorAll(".tier").forEach((t, i) => t.classList.toggle("selected", i === 0));

  document.getElementById("ticketModal").classList.add("open");
}

// When a tier is selected, read its price from the displayed text
function pickTier(el) {
  document.querySelectorAll(".tier").forEach(t => t.classList.remove("selected"));
  el.classList.add("selected");
  // Read the price from the tier's text — e.g. "$249" → 249
  modalBasePrice = parseInt(el.querySelector(".tier-price").textContent.replace("$", ""));
  updateTotal();
}

// Increase or decrease ticket quantity (1 to 10)
function changeQty(delta) {
  modalQty = Math.max(1, Math.min(10, modalQty + delta));
  document.getElementById("modal-qty").textContent = modalQty;
  updateTotal();
}

// Recalculate and show the total price
function updateTotal() {
  document.getElementById("modal-total").textContent = "$" + (modalBasePrice * modalQty).toLocaleString();
}

// Close the modal if the dark background is clicked (not the white box)
function bgClose(e) {
  if (e.target === document.getElementById("ticketModal")) document.getElementById("ticketModal").classList.remove("open");
}

// Show the confirmation modal after order is placed
function confirmOrder() {
  const name  = document.getElementById("modal-name").textContent;
  const total = document.getElementById("modal-total").textContent;
  const tier  = document.querySelector(".tier.selected .tier-name").textContent;
  document.getElementById("confirm-msg").textContent = modalQty + "× " + tier + " for " + name + " — " + total + " total.";
  document.getElementById("ticketModal").classList.remove("open");
  document.getElementById("confirmModal").classList.add("open");
}

/*
  WHAT SECTION 6 DOES:
  Controls the ticket popup. openModal fills it with event details and prices.
  pickTier reads the clicked tier's price from its displayed text. changeQty
  adjusts the quantity. updateTotal recalculates the total. bgClose closes
  the modal when the background is clicked. confirmOrder shows the success popup.
*/


// ============================================================
//  DARK MODE
// ============================================================

// Toggle between light and dark mode
function toggleDark() {
  document.body.classList.toggle("dark");
  document.getElementById("darkToggle").textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
  localStorage.setItem("dark", document.body.classList.contains("dark"));
}

// Restore dark mode preference on page load
if (localStorage.getItem("dark") === "true") {
  document.body.classList.add("dark");
  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("darkToggle");
    if (btn) btn.textContent = "☀️";
  });
}


// ============================================================
//  START UP
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  renderEvents("all"); // draw all event cards
  showPrompt();        // show the default search message
});

/*
  WHAT START UP DOES:
  Waits for the HTML to fully load before running anything.
  Then draws the event cards and shows the search prompt.
*/
