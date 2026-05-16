// ── DATA ─────────────────────────────────────────────────────

const EVENTS = [
  { id:"fn276", name:"UFC FIGHT NIGHT 276", subtitle:"Allen vs. Costa", date:"2026-05-16", location:"Las Vegas, NV", venue:"UFC Apex", ticketUrl:"https://www.ufc.com/event/ufc-fight-night-may-16-2026", type:"fightnight", status:"upcoming",
    fights:[
      { order:1, label:"MAIN EVENT",   f1:"BRENDAN ALLEN",    f1info:"🇺🇸 #4 MW · 24-6",   f2:"PAULO COSTA",         f2info:"🇧🇷 #15 MW · 14-3",  division:"Middleweight", isTitleFight:false, belt:"", f1prob:55 },
      { order:2, label:"CO-MAIN",      f1:"SONG YADONG",      f1info:"🇨🇳 #5 BW · 22-8-1", f2:"DEIVESON FIGUEIREDO", f2info:"🇧🇷 #7 BW · 23-5-1", division:"Bantamweight", isTitleFight:false, belt:"", f1prob:52 },
      { order:3, label:"MAIN CARD",    f1:"PADDY PIMBLETT",   f1info:"🇬🇧 #6 LW · 22-4",   f2:"KING GREEN",          f2info:"🇺🇸 LW · 29-12",      division:"Lightweight",  isTitleFight:false, belt:"", f1prob:60 },
      { order:4, label:"MAIN CARD",    f1:"TBA", f1info:"TBA", f2:"TBA", f2info:"TBA",      division:"TBA",           isTitleFight:false, belt:"", f1prob:50 },
      { order:5, label:"PRELIM",       f1:"TBA", f1info:"TBA", f2:"TBA", f2info:"TBA",      division:"TBA",           isTitleFight:false, belt:"", f1prob:50 },
      { order:6, label:"EARLY PRELIM", f1:"TBA", f1info:"TBA", f2:"TBA", f2info:"TBA",      division:"TBA",           isTitleFight:false, belt:"", f1prob:50 },
    ]},
  { id:"freedom250", name:"UFC FREEDOM 250", subtitle:"Topuria vs. Gaethje", date:"2026-06-14", location:"Washington D.C.", venue:"The White House", ticketUrl:"https://www.ufc.com/event/ufc-freedom-250", type:"ppv", status:"upcoming",
    fights:[
      { order:1, label:"MAIN EVENT",   f1:"ILIA TOPURIA",    f1info:"🇬🇪 LW Champ · 16-0", f2:"JUSTIN GAETHJE",  f2info:"🇺🇸 Interim · 25-5", division:"Lightweight", isTitleFight:true,  belt:"LIGHTWEIGHT UNIFICATION", f1prob:58 },
      { order:2, label:"CO-MAIN",      f1:"ALEX PEREIRA",    f1info:"🇧🇷 HW · 12-2",        f2:"CIRYL GANE",      f2info:"🇫🇷 #1 HW · 13-2",   division:"Heavyweight", isTitleFight:true,  belt:"INTERIM HW TITLE",        f1prob:54 },
      { order:3, label:"MAIN CARD",    f1:"ARMAN TSARUKYAN", f1info:"🇦🇲 #2 LW · 23-4",     f2:"MAX HOLLOWAY",    f2info:"🇺🇸 #4 LW · 26-8",   division:"Lightweight", isTitleFight:false, belt:"", f1prob:53 },
      { order:4, label:"MAIN CARD",    f1:"TBA", f1info:"TBA", f2:"TBA", f2info:"TBA",      division:"TBA",         isTitleFight:false, belt:"", f1prob:50 },
      { order:5, label:"PRELIM",       f1:"TBA", f1info:"TBA", f2:"TBA", f2info:"TBA",      division:"TBA",         isTitleFight:false, belt:"", f1prob:50 },
      { order:6, label:"EARLY PRELIM", f1:"TBA", f1info:"TBA", f2:"TBA", f2info:"TBA",      division:"TBA",         isTitleFight:false, belt:"", f1prob:50 },
    ]},
  { id:"ufc329", name:"UFC 329", subtitle:"TBA", date:"2026-08-15", location:"TBA", venue:"TBA", ticketUrl:"https://www.ufc.com/events", type:"ppv", status:"upcoming",
    fights:[{ order:1, label:"MAIN EVENT", f1:"TBA", f1info:"TBA", f2:"TBA", f2info:"TBA", division:"TBA", isTitleFight:false, belt:"", f1prob:50 }]},
  { id:"ufc330", name:"UFC 330", subtitle:"TBA", date:"2026-09-01", location:"Philadelphia, PA", venue:"Xfinity Mobile Arena", ticketUrl:"https://www.ufc.com/events", type:"ppv", status:"upcoming",
    fights:[{ order:1, label:"MAIN EVENT", f1:"TBA", f1info:"TBA", f2:"TBA", f2info:"TBA", division:"TBA", isTitleFight:false, belt:"", f1prob:50 }]},

  { id:"ufc328", name:"UFC 328", subtitle:"Chimaev vs. Strickland", date:"2026-05-09", location:"Newark, NJ", venue:"Prudential Center", ticketUrl:null, type:"ppv", status:"past",
    fights:[
      { order:1, label:"MAIN EVENT",   f1:"KHAMZAT CHIMAEV",  f1info:"🇸🇪 MW Champ · 15-0", f2:"SEAN STRICKLAND",     f2info:"🇺🇸 · 30-7",        division:"Middleweight",     isTitleFight:true,  belt:"MIDDLEWEIGHT TITLE", f1prob:75, winner:"f2", method:"Split Decision", round:"R5" },
      { order:2, label:"CO-MAIN",      f1:"JOSHUA VAN",        f1info:"🇲🇲 FLY Champ",        f2:"TATSURO TAIRA",       f2info:"🇯🇵 · 18-1",         division:"Flyweight",        isTitleFight:true,  belt:"FLYWEIGHT TITLE",    f1prob:58, winner:"f1", method:"TKO",            round:"R5" },
      { order:3, label:"MAIN CARD",    f1:"ALEXANDER VOLKOV",  f1info:"🇷🇺 #2 HW · 37-10",   f2:"WALDO CORTES-ACOSTA", f2info:"🇩🇴 #4 HW · 12-1",  division:"Heavyweight",      isTitleFight:false, belt:"", f1prob:55, winner:"f1", method:"Decision",       round:"R3" },
      { order:4, label:"MAIN CARD",    f1:"SEAN BRADY",        f1info:"🇺🇸 #6 WW · 17-0",    f2:"GILBERT BURNS",       f2info:"🇧🇷 #11 WW · 22-7", division:"Welterweight",     isTitleFight:false, belt:"", f1prob:60, winner:"f1", method:"Decision",       round:"R3" },
      { order:5, label:"MAIN CARD",    f1:"KING GREEN",        f1info:"🇺🇸 LW · 29-12",       f2:"JEREMY STEPHENS",     f2info:"🇺🇸 FW · 40-24",    division:"Lightweight",      isTitleFight:false, belt:"", f1prob:65, winner:"f1", method:"Submission",     round:"R1" },
      { order:6, label:"PRELIM",       f1:"GRANT DAWSON",      f1info:"🇺🇸 LW · 21-3",        f2:"MATEUSZ REBECKI",     f2info:"🇵🇱 LW · 18-3",     division:"Lightweight",      isTitleFight:false, belt:"", f1prob:62, winner:"f1", method:"Submission",     round:"R3" },
      { order:7, label:"PRELIM",       f1:"JIM MILLER",        f1info:"🇺🇸 LW · 40-18",       f2:"JARED GORDON",        f2info:"🇺🇸 LW · 20-8",     division:"Lightweight",      isTitleFight:false, belt:"", f1prob:55, winner:"f1", method:"Submission",     round:"R1" },
      { order:8, label:"PRELIM",       f1:"YAROSLAV AMOSOV",   f1info:"🇺🇦 WW",               f2:"JOEL ALVAREZ",        f2info:"🇪🇸 LW",             division:"Welterweight",     isTitleFight:false, belt:"", f1prob:52, winner:"f1", method:"Submission",     round:"R2" },
      { order:9, label:"EARLY PRELIM", f1:"ATEBA GAUTIER",     f1info:"🇫🇷 LW",               f2:"OZZY DIAZ",           f2info:"🇺🇸 LW",             division:"Lightweight",      isTitleFight:false, belt:"", f1prob:58, winner:"f1", method:"KO",             round:"R2" },
    ]},
  { id:"fn-perth", name:"UFC FIGHT NIGHT · PERTH", subtitle:"Della Maddalena vs. Prates", date:"2026-05-02", location:"Perth, Australia", venue:"RAC Arena", ticketUrl:null, type:"fightnight", status:"past",
    fights:[
      { order:1, label:"MAIN EVENT", f1:"CARLOS PRATES",      f1info:"🇧🇷 WW · 23-7",       f2:"JACK DELLA MADDALENA", f2info:"🇦🇺 #1 WW · 18-2", division:"Welterweight",  isTitleFight:false, belt:"", f1prob:45, winner:"f1", method:"TKO",      round:"R3" },
      { order:2, label:"CO-MAIN",    f1:"QUILLAN SALKILLD",   f1info:"🇦🇺 LW",               f2:"BENEIL DARIUSH",       f2info:"🇮🇷 LW · 22-6",    division:"Lightweight",   isTitleFight:false, belt:"", f1prob:38, winner:"f1", method:"TKO",      round:"R1" },
      { order:3, label:"MAIN CARD",  f1:"BRENDAN ALLEN",      f1info:"🇺🇸 #4 MW · 24-5",    f2:"ROMAN DOLIDZE",        f2info:"🇬🇪 MW · 13-3",    division:"Middleweight",  isTitleFight:false, belt:"", f1prob:58, winner:"f1", method:"Decision", round:"R3" },
      { order:4, label:"MAIN CARD",  f1:"GABRIEL BONFIM",     f1info:"🇧🇷 #10 WW · 16-1",   f2:"SEAN BRADY",           f2info:"🇺🇸 WW · 16-0",    division:"Welterweight",  isTitleFight:false, belt:"", f1prob:48, winner:"f2", method:"Decision", round:"R3" },
      { order:5, label:"PRELIM",     f1:"NIKO PRICE",         f1info:"🇺🇸 WW",               f2:"GUNNAR NELSON",        f2info:"🇮🇸 WW",            division:"Welterweight",  isTitleFight:false, belt:"", f1prob:50, winner:"f2", method:"Decision", round:"R3" },
    ]},
  { id:"fn-sterling", name:"UFC FIGHT NIGHT · LAS VEGAS", subtitle:"Sterling vs. Zalal", date:"2026-04-25", location:"Las Vegas, NV", venue:"UFC Apex", ticketUrl:null, type:"fightnight", status:"past",
    fights:[
      { order:1, label:"MAIN EVENT", f1:"ALJAMAIN STERLING",  f1info:"🇺🇸 #4 FW · 25-5",   f2:"YOUSSEF ZALAL",         f2info:"🇲🇦 #8 FW · 18-5", division:"Featherweight",    isTitleFight:false, belt:"", f1prob:62, winner:"f1", method:"Decision",   round:"R5" },
      { order:2, label:"CO-MAIN",    f1:"DAVEY GRANT",        f1info:"🇬🇧 BW",               f2:"ADRIÁN LUNA MARTINETTI",f2info:"🇲🇽 BW",            division:"Bantamweight",     isTitleFight:false, belt:"", f1prob:48, winner:"f1", method:"Decision",   round:"R3" },
      { order:3, label:"MAIN CARD",  f1:"RYAN SPANN",         f1info:"🇺🇸 LHW · 22-8",      f2:"BOGDAN GUSKOV",         f2info:"🇷🇺 LHW",           division:"Light Heavyweight", isTitleFight:false,belt:"",  f1prob:55, winner:"f1", method:"KO",         round:"R1" },
      { order:4, label:"MAIN CARD",  f1:"ERIC McCONICO",      f1info:"🇺🇸 WW",               f2:"RODOLFO VIEIRA",        f2info:"🇧🇷 WW",            division:"Welterweight",     isTitleFight:false, belt:"", f1prob:52, winner:"f1", method:"Decision",   round:"R3" },
      { order:5, label:"PRELIM",     f1:"JACKSON McVEY",      f1info:"🇺🇸 LW",               f2:"SEDRIQUES DUMAS",       f2info:"🇺🇸 LW",            division:"Lightweight",      isTitleFight:false, belt:"", f1prob:51, winner:"f1", method:"Submission", round:"R1" },
    ]},
  { id:"fn-moicano", name:"UFC FIGHT NIGHT · LAS VEGAS", subtitle:"Moicano vs. Duncan", date:"2026-04-04", location:"Las Vegas, NV", venue:"UFC Apex", ticketUrl:null, type:"fightnight", status:"past",
    fights:[
      { order:1, label:"MAIN EVENT", f1:"RENATO MOICANO",     f1info:"🇧🇷 #9 LW · 20-5",   f2:"CHRIS DUNCAN",   f2info:"🇺🇸 MW",         division:"Lightweight",  isTitleFight:false, belt:"", f1prob:65, winner:"f1", method:"TKO",      round:"R2" },
      { order:2, label:"CO-MAIN",    f1:"NASSOURDINE IMAVOV", f1info:"🇫🇷 #2 MW · 15-3",   f2:"JOE PYFER",      f2info:"🇺🇸 MW · 13-1", division:"Middleweight", isTitleFight:false, belt:"", f1prob:55, winner:"f1", method:"Decision", round:"R3" },
      { order:3, label:"MAIN CARD",  f1:"ISRAEL ADESANYA",    f1info:"🇳🇿 #9 MW · 24-5",   f2:"JOE PYFER",      f2info:"🇺🇸 MW · 12-2", division:"Middleweight", isTitleFight:false, belt:"", f1prob:60, winner:"f2", method:"KO",       round:"R2" },
    ]},
  { id:"ufc327", name:"UFC 327", subtitle:"Prochazka vs. Ulberg", date:"2026-04-11", location:"Miami, FL", venue:"Kaseya Center", ticketUrl:null, type:"ppv", status:"past",
    fights:[
      { order:1, label:"MAIN EVENT", f1:"JIRI PROCHAZKA", f1info:"🇨🇿 LHW · 32-5",     f2:"CARLOS ULBERG",     f2info:"🇳🇿 LHW · 14-1",   division:"Light Heavyweight", isTitleFight:true,  belt:"LHW VACANT TITLE", f1prob:55, winner:"f2", method:"KO",       round:"R1" },
      { order:2, label:"CO-MAIN",    f1:"PAULO COSTA",    f1info:"🇧🇷 · 13-3",          f2:"AZAMAT MURZAKANOV", f2info:"🇷🇺 LHW",           division:"Light Heavyweight", isTitleFight:false, belt:"",                 f1prob:52, winner:"f1", method:"TKO",      round:"R3" },
      { order:3, label:"MAIN CARD",  f1:"JOSH HOKIT",     f1info:"🇺🇸 HW",              f2:"CURTIS BLAYDES",    f2info:"🇺🇸 #4 HW · 18-4", division:"Heavyweight",       isTitleFight:false, belt:"",                 f1prob:45, winner:"f1", method:"KO",       round:"R1" },
      { order:4, label:"MAIN CARD",  f1:"DOMINICK REYES", f1info:"🇺🇸 LHW",             f2:"JOHNNY WALKER",     f2info:"🇧🇷 LHW",           division:"Light Heavyweight", isTitleFight:false, belt:"",                 f1prob:48, winner:"f1", method:"Decision", round:"R3" },
      { order:5, label:"MAIN CARD",  f1:"CUB SWANSON",    f1info:"🇺🇸 FW · 31-14",      f2:"NATE LANDWEHR",     f2info:"🇺🇸 FW",            division:"Featherweight",     isTitleFight:false, belt:"",                 f1prob:50, winner:"f1", method:"KO",       round:"R1" },
    ]},
];


// ── HELPERS ───────────────────────────────────────────────────

const daysUntil = d => { const t=new Date(); t.setHours(0,0,0,0); const s=new Date(d); s.setHours(0,0,0,0); return Math.round((s-t)/86400000); };
const fmtDate   = d => new Date(d+"T12:00:00").toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"});
const countdown = d => { const n=daysUntil(d); return n<0?"⚔️ PASSED":n===0?"🔴 TONIGHT":n===1?"🔴 TOMORROW":`⏳ ${n} DAYS AWAY`; };
const mClass    = m => m&&(m.includes("KO")||m.includes("TKO"))?"method-ko":m&&m.includes("Sub")?"method-sub":"method-dec";
const mEmoji    = m => m&&(m.includes("KO")||m.includes("TKO"))?"💥":m&&m.includes("Sub")?"🔒":"📋";

// ── NAV ───────────────────────────────────────────────────────

document.querySelectorAll(".nav-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".nav-tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById("page-"+tab.dataset.page).classList.add("active");
    window.scrollTo({top:0,behavior:"smooth"});
  });
});

// ── EVENTS ────────────────────────────────────────────────────

function renderEvents(filter="all") {
  const grid = document.getElementById("eventsGrid");
  grid.innerHTML = "";
  const list = EVENTS
    .filter(e => filter==="all" || e.status===filter)
    .sort((a,b) => new Date(b.date)-new Date(a.date));
  if (!list.length) { grid.innerHTML = `<p style="font-family:var(--font-heading);color:var(--gray);padding:30px 0;letter-spacing:3px;">NO EVENTS FOUND.</p>`; return; }
  list.forEach((ev, i) => {
    const past = ev.status==="past";
    const m    = ev.fights[0];
    const card = document.createElement("div");
    card.className = `event-card${past?" event-past":""}`;
    card.style.animationDelay = `${i*0.07}s`;
    const winPrev = past&&m.winner ? `<div class="ec-result-preview ${mClass(m.method)}">${mEmoji(m.method)} ${m.winner==="f1"?m.f1:m.f2} wins · ${m.method} · ${m.round}</div>` : "";
    card.innerHTML = `
      <div class="ec-summary" id="summary-${ev.id}" onclick="toggleEvent('${ev.id}')">
        <div class="ec-info">
          <div class="ec-badges">
            <span class="ec-badge ${ev.type==="ppv"?"ecb-ppv":"ecb-fn"}">${ev.type==="ppv"?"PPV":"FIGHT NIGHT"}</span>
            ${past?`<span class="ec-badge ecb-done">✓ COMPLETED</span>`:`<span class="ec-badge ecb-live">${countdown(ev.date)}</span>`}
          </div>
          <div class="ec-name">${ev.name}</div>
          <div class="ec-sub">${ev.subtitle}</div>
          <div class="ec-details"><span>📅 ${fmtDate(ev.date)}</span><span>📍 ${ev.location}</span><span>🏟 ${ev.venue}</span></div>
        </div>
        <div class="ec-matchup">
          ${m.isTitleFight?`<div class="ec-belt-banner">🏆 ${m.belt}</div>`:""}
          <div class="ec-fighters"><div class="ec-fname">${m.f1}</div><div class="ec-fvs">VS</div><div class="ec-fname">${m.f2}</div></div>
          <div class="ec-fdivision">${m.division} · MAIN EVENT</div>
          ${winPrev}
        </div>
        <div class="ec-expand" id="expand-btn-${ev.id}">
          <div class="ec-expand-icon">▼</div>
          <div class="ec-expand-label">SEE FULL<br>FIGHT CARD</div>
          <div class="ec-fight-count">${ev.fights.length} FIGHTS</div>
        </div>
      </div>
      <div class="ec-fullcard" id="panel-${ev.id}">
        <div class="ec-fullcard-inner">
          <div class="ec-fullcard-title">
            <span>${ev.name} — FULL FIGHT CARD</span>
            <span class="ec-fullcard-count">${ev.fights.length} fights · ${ev.venue}</span>
          </div>
          ${buildRows(ev)}
        </div>
      </div>`;
    grid.appendChild(card);
  });
}

function buildRows(ev) {
  const past = ev.status==="past";
  return ev.fights.slice().sort((a,b)=>b.order-a.order).map(f => {
    const isMain  = f.order===1, isCo = f.order===2;
    const w1 = past&&f.winner==="f1", w2 = past&&f.winner==="f2";
    const f1cls = `ef-fighter-block${w1?" ef-winner-block":""}${past&&!w1&&f.winner?" ef-loser-block":""}`;
    const f2cls = `ef-fighter-block ef-block-right${w2?" ef-winner-block":""}${past&&!w2&&f.winner?" ef-loser-block":""}`;
    let extra = "";
    if (!past) {
      const fav = f.f1prob>=50;
      extra = `<div class="ef-prob-bar"><div class="ef-p1" style="width:${f.f1prob}%">${f.f1prob}%</div><div class="ef-p2">${100-f.f1prob}%</div></div>
               <div class="ef-prob-labels"><span class="${fav?"fav":"dog"}">${fav?"⭐ FAVOURITE":"🐶 UNDERDOG"}</span><span class="${!fav?"fav":"dog"}">${!fav?"FAVOURITE ⭐":"UNDERDOG 🐶"}</span></div>`;
    } else if (f.winner) {
      const wn = f.winner==="f1"?f.f1:f.f2, ln = f.winner==="f1"?f.f2:f.f1;
      extra = `<div class="ef-result ${mClass(f.method)}">${mEmoji(f.method)} <strong>${wn}</strong> def. ${ln}<span class="ef-result-detail">${f.method} · ${f.round}</span></div>`;
    }
    return `<div class="ef-row${isMain?" ef-row-main":isCo?" ef-row-comain":""}">
      <div class="ef-row-label">
        <div class="ef-label-text ${isMain?"efl-main":isCo?"efl-comain":"efl-other"}">${f.label}</div>
        ${f.isTitleFight?`<div class="ef-label-belt">🏆 TITLE</div>`:""}
        <div class="ef-label-division">${f.division}</div>
      </div>
      <div class="ef-row-fight">
        <div class="${f1cls}"><div class="ef-fighter-name">${f.f1}</div><div class="ef-fighter-info">${f.f1info}</div>${w1?`<div class="ef-w-tag">✓ WINNER</div>`:""}</div>
        <div class="ef-mid"><div class="ef-vs-text">VS</div></div>
        <div class="${f2cls}"><div class="ef-fighter-name">${f.f2}</div><div class="ef-fighter-info">${f.f2info}</div>${w2?`<div class="ef-w-tag">✓ WINNER</div>`:""}</div>
      </div>
      <div class="ef-row-extra">${extra}</div>
    </div>`;
  }).join("");
}

function toggleEvent(id) {
  const panel = document.getElementById("panel-"+id);
  const btn   = document.getElementById("expand-btn-"+id);
  const open  = panel.classList.contains("open");
  document.querySelectorAll(".ec-fullcard.open").forEach(p => {
    if (p.id !== "panel-"+id) {
      p.classList.remove("open");
      const ob = document.getElementById("expand-btn-"+p.id.replace("panel-",""));
      if (ob) { ob.querySelector(".ec-expand-icon").textContent="▼"; ob.querySelector(".ec-expand-label").innerHTML="SEE FULL<br>FIGHT CARD"; }
    }
  });
  panel.classList.toggle("open");
  if (!open) {
    btn.querySelector(".ec-expand-icon").textContent = "▲";
    btn.querySelector(".ec-expand-label").innerHTML  = "HIDE<br>FIGHT CARD";
    setTimeout(() => document.getElementById("summary-"+id).scrollIntoView({behavior:"smooth",block:"start"}), 100);
    const ev = EVENTS.find(e => e.id===id);
    if (ev?.status==="upcoming" && ev?.ticketUrl) showTicketBar(ev); else hideTicketBar();
  } else {
    btn.querySelector(".ec-expand-icon").textContent = "▼";
    btn.querySelector(".ec-expand-label").innerHTML  = "SEE FULL<br>FIGHT CARD";
    hideTicketBar();
  }
}

// ── TICKET BAR ────────────────────────────────────────────────

function showTicketBar(ev) {
  let bar = document.getElementById("ticketBar") || document.createElement("div");
  bar.id = "ticketBar"; bar.className = "ticket-bar";
  bar.innerHTML = `
    <div class="ticket-bar-inner">
      <div class="ticket-bar-info">
        <div class="ticket-bar-event">${ev.name}</div>
        <div class="ticket-bar-details">📅 ${fmtDate(ev.date)} &nbsp;·&nbsp; 📍 ${ev.location} &nbsp;·&nbsp; 🏟 ${ev.venue}</div>
      </div>
      <div class="ticket-bar-actions">
        <a href="${ev.ticketUrl}" target="_blank" class="ticket-btn-main">🎟 BUY TICKETS</a>
        <button class="ticket-bar-close" onclick="hideTicketBar()">✕</button>
      </div>
    </div>`;
  if (!document.getElementById("ticketBar")) document.body.appendChild(bar);
  setTimeout(() => bar.classList.add("visible"), 10);
}

function hideTicketBar() {
  const bar = document.getElementById("ticketBar");
  if (bar) { bar.classList.remove("visible"); setTimeout(() => bar.remove(), 350); }
}

// ── FILTER BUTTONS ────────────────────────────────────────────

document.querySelectorAll("[data-efilter]").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("[data-efilter]").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderEvents(btn.dataset.efilter);
    hideTicketBar();
  });
});

// ── AI FIGHTER SEARCH ─────────────────────────────────────────

const searchInput   = document.getElementById("fighterSearchInput");
const searchClear   = document.getElementById("searchClear");
const searchResults = document.getElementById("searchResults");

const showPrompt = () => {
  searchResults.className = "";
  searchResults.innerHTML = `
    <div class="search-prompt-wrap">
      <div class="search-prompt-icon">🥊</div>
      <p class="search-prompt">Search any UFC fighter — powered by AI</p>
      <p class="search-prompt-sub">Live stats, records &amp; fight history pulled in real time</p>
    </div>`;
};

// Ask Claude for fighter info as clean JSON
async function fetchFighterFromAI(name) {
  const prompt = `You are a UFC data expert. The user is searching for the UFC fighter: "${name}".

Respond ONLY with a valid JSON object — no markdown, no explanation, no backticks.

Use this exact structure:
{
  "found": true,
  "name": "FULL NAME IN CAPS",
  "nickname": "nickname or empty string",
  "division": "exact UFC weight class e.g. Lightweight",
  "rank": "Champion or #1 or Former Champion etc",
  "record": "W-L-D format e.g. 34-10-0",
  "country": "flag emoji + country e.g. 🇧🇷 Brazil",
  "age": 30,
  "height": "5'10\\"",
  "reach": "74\\"",
  "style": "Fighting style e.g. BJJ / Submissions",
  "history": [
    { "opp": "Opponent Name", "result": "W or L or D", "method": "KO or TKO or Submission or Decision", "round": "R1 or R3 etc" }
  ],
  "summary": "2 sentence plain English summary of who this fighter is and their current status"
}

If the fighter is not a UFC fighter, respond with: { "found": false }

Include their 5 most recent fights in history. Use your most up to date knowledge. Today is ${new Date().toDateString()}.`;

  const res  = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1000,
      messages: [{ role: "user", content: prompt }]
    })
  });
  const data = await res.json();
  const text = data.content[0].text.trim().replace(/```json|```/g, "");
  return JSON.parse(text);
}

// Build the visual fighter card from AI JSON
function buildAICard(f) {
  const dc   = "div-" + f.division.toLowerCase().replace(/\s+/g,"").replace(/[^a-z]/g,"");
  const wins = f.history.filter(h => h.result==="W").length;
  const real = f.history.filter(h => h.result==="W"||h.result==="L").length;
  const wr   = real ? Math.round(wins/real*100) : 0;

  const histHTML = f.history.map(h => {
    const bc  = h.result==="W"?"fp-res-w":h.result==="D"?"fp-res-up":"fp-res-l";
    const msc = h.method&&(h.method.includes("KO")||h.method.includes("TKO"))?"m-ko":h.method&&h.method.includes("Sub")?"m-sub":"m-dec";
    return `<div class="fp-fight-row">
      <span class="fp-fight-opp">vs ${h.opp}</span>
      <div class="fp-fight-result">
        <span class="fp-res-badge ${bc}">${h.result}</span>
        <span class="fp-fight-method ${msc}">${h.method} · ${h.round}</span>
      </div>
    </div>`;
  }).join("");

  return `<div class="fighter-profile-card ${dc}">
    <div class="fp-header">
      <div class="fp-division-badge">${f.division.toUpperCase()} · ${f.rank}</div>
      <div class="fp-name">${f.name}</div>
      ${f.nickname?`<div class="fp-nickname">"${f.nickname}"</div>`:""}
    </div>
    <div class="fp-body">
      <div class="fp-record-row"><div class="fp-record">${f.record}</div><div class="fp-style">${f.style}</div></div>
      <div class="fp-stats-grid">
        <div class="fp-stat"><div class="fp-stat-label">Country</div><div class="fp-stat-value">${f.country}</div></div>
        <div class="fp-stat"><div class="fp-stat-label">Age</div><div class="fp-stat-value">${f.age}</div></div>
        <div class="fp-stat"><div class="fp-stat-label">Height</div><div class="fp-stat-value">${f.height}</div></div>
        <div class="fp-stat"><div class="fp-stat-label">Reach</div><div class="fp-stat-value">${f.reach}</div></div>
        <div class="fp-stat"><div class="fp-stat-label">Division</div><div class="fp-stat-value">${f.division}</div></div>
        <div class="fp-stat"><div class="fp-stat-label">Ranking</div><div class="fp-stat-value">${f.rank}</div></div>
      </div>
      <div class="fp-winrate">
        <div class="fp-winrate-label">Win Rate — ${wr}%</div>
        <div class="fp-winrate-track"><div class="fp-winrate-fill" style="width:${wr}%">${wr>18?wr+"%":""}</div></div>
      </div>
      ${f.summary?`<div class="ai-summary"><span class="ai-badge">🤖 AI INSIGHT</span>${f.summary}</div>`:""}
      <div class="fp-history"><div class="fp-history-title">⚔️ Recent Fight History</div>${histHTML}</div>
    </div>
  </div>`;
}

// Wait 600ms after last keystroke before calling API (avoids calling on every letter)
let searchTimer = null;

function doSearch(q) {
  q = q.trim();
  searchClear.classList.toggle("visible", q.length > 0);
  clearTimeout(searchTimer);
  if (!q) { showPrompt(); return; }

  searchResults.className = "";
  searchResults.innerHTML = `
    <div class="search-prompt-wrap">
      <div class="search-loading-ring"></div>
      <p class="search-prompt">Looking up <strong>${q}</strong>...</p>
      <p class="search-prompt-sub">Asking AI for live UFC data</p>
    </div>`;

  searchTimer = setTimeout(async () => {
    try {
      const fighter = await fetchFighterFromAI(q);
      if (!fighter.found) {
        searchResults.innerHTML = `
          <div class="search-prompt-wrap">
            <div class="search-prompt-icon">❓</div>
            <p class="search-prompt">No UFC fighter found for "<strong>${q}</strong>"</p>
            <p class="search-prompt-sub">Try a different name or spelling</p>
          </div>`;
        return;
      }
      searchResults.className = "fighter-cards-grid";
      searchResults.innerHTML = buildAICard(fighter);
    } catch(err) {
      searchResults.innerHTML = `
        <div class="search-prompt-wrap">
          <div class="search-prompt-icon">⚠️</div>
          <p class="search-prompt">Something went wrong. Try again.</p>
        </div>`;
    }
  }, 600);
}

searchInput.addEventListener("input", e => doSearch(e.target.value));
searchClear.addEventListener("click", () => { searchInput.value=""; doSearch(""); searchInput.focus(); });
document.querySelectorAll(".hint-pill").forEach(p => {
  p.addEventListener("click", () => {
    if (!document.getElementById("page-search").classList.contains("active")) document.querySelector("[data-page='search']").click();
    setTimeout(() => { searchInput.value=p.dataset.hint; doSearch(p.dataset.hint); }, 60);
  });
});

// ── INIT ──────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => { renderEvents("all"); showPrompt(); });

// ── TICKET MODAL ──────────────────────────────────────────────

let ticketBasePrice = 89;
let ticketQty       = 1;
let ticketTier      = "General Admission";

function showTicketModal(name, date, location, fight, price) {
  // Fill in event details
  document.getElementById("modal-event-name").textContent     = name;
  document.getElementById("modal-event-date").textContent     = "📅 " + date;
  document.getElementById("modal-event-location").textContent = "📍 " + location;
  document.getElementById("modal-event-fight").textContent    = fight;

  // Set base price from the card
  ticketBasePrice = parseInt(price.replace("$",""));
  ticketQty       = 1;
  ticketTier      = "General Admission";

  // Set the 3 tier prices relative to base
  document.getElementById("tier-ga").textContent    = "$" + ticketBasePrice;
  document.getElementById("tier-floor").textContent = "$" + (ticketBasePrice * 2.8 | 0);
  document.getElementById("tier-vip").textContent   = "$" + (ticketBasePrice * 6.7 | 0);

  // Reset tier selection and quantity
  document.querySelectorAll(".modal-tier").forEach(t => t.classList.remove("selected"));
  document.querySelectorAll(".modal-tier")[0].classList.add("selected");
  document.getElementById("modal-qty").textContent   = "1";
  document.getElementById("modal-total").textContent = "$" + ticketBasePrice;

  // Show the modal
  document.getElementById("ticketModal").classList.add("open");
}

function selectTier(el, tierName) {
  document.querySelectorAll(".modal-tier").forEach(t => t.classList.remove("selected"));
  el.classList.add("selected");
  ticketTier      = tierName;
  // Get price from the clicked tier's price element
  const priceText = el.querySelector(".modal-tier-price").textContent;
  ticketBasePrice = parseInt(priceText.replace("$",""));
  updateTotal();
}

function changeQty(delta) {
  ticketQty = Math.max(1, Math.min(10, ticketQty + delta));
  document.getElementById("modal-qty").textContent = ticketQty;
  updateTotal();
}

function updateTotal() {
  document.getElementById("modal-total").textContent = "$" + (ticketBasePrice * ticketQty).toLocaleString();
}

function closeTicketModal(e) {
  // Only close if clicking the dark overlay, not the box itself
  if (e.target === document.getElementById("ticketModal"))
    document.getElementById("ticketModal").classList.remove("open");
}

function confirmTicket() {
  const name     = document.getElementById("modal-event-name").textContent;
  const total    = document.getElementById("modal-total").textContent;
  document.getElementById("confirm-msg").textContent =
    ticketQty + "× " + ticketTier + " ticket" + (ticketQty > 1 ? "s" : "") +
    " for " + name + " — " + total + " total.";
  document.getElementById("ticketModal").classList.remove("open");
  document.getElementById("confirmModal").classList.add("open");
}
