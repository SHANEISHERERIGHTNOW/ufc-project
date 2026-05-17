// ============================================================
//  SECTION 1 — DATA
// ============================================================

const EVENTS = [  // EVENTS is a list (array) that holds every UFC event

  {  // start of the first event object — UFC Fight Night 276
    id: "fn276",                       // unique ID used by the code to find this event
    name: "UFC FIGHT NIGHT 276",       // the full event name shown on screen
    subtitle: "Allen vs. Costa",       // the main fight matchup shown under the name
    date: "2026-05-16",                // the date in year-month-day format
    location: "Las Vegas, NV",         // the city where the event takes place
    venue: "UFC Apex",                 // the arena name
    ticketUrl: "https://ufc.com",      // the link the ticket button goes to
    type: "fightnight",                // "ppv" or "fightnight" — controls the badge colour
    status: "upcoming",                // "upcoming" or "past" — controls which tab it appears in
    fights: [                          // a list of every fight on this card

      // Each fight has: order (1=main event), label, two fighters, division, title info, and win probability
      { order:1, label:"MAIN EVENT",   f1:"BRENDAN ALLEN",   f1info:"🇺🇸 #4 MW · 24-6",   f2:"PAULO COSTA",         f2info:"🇧🇷 #15 MW · 14-3",  division:"Middleweight", isTitleFight:false, belt:"", f1prob:55 },
      { order:2, label:"CO-MAIN",      f1:"SONG YADONG",     f1info:"🇨🇳 #5 BW · 22-8-1", f2:"DEIVESON FIGUEIREDO", f2info:"🇧🇷 #7 BW · 23-5-1", division:"Bantamweight", isTitleFight:false, belt:"", f1prob:52 },
      { order:3, label:"MAIN CARD",    f1:"PADDY PIMBLETT",  f1info:"🇬🇧 #6 LW · 22-4",   f2:"KING GREEN",          f2info:"🇺🇸 LW · 29-12",      division:"Lightweight",  isTitleFight:false, belt:"", f1prob:60 },
      { order:4, label:"MAIN CARD",    f1:"TBA",             f1info:"TBA",                  f2:"TBA",                 f2info:"TBA",                  division:"TBA",          isTitleFight:false, belt:"", f1prob:50 },
      { order:5, label:"PRELIM",       f1:"TBA",             f1info:"TBA",                  f2:"TBA",                 f2info:"TBA",                  division:"TBA",          isTitleFight:false, belt:"", f1prob:50 },
      { order:6, label:"EARLY PRELIM", f1:"TBA",             f1info:"TBA",                  f2:"TBA",                 f2info:"TBA",                  division:"TBA",          isTitleFight:false, belt:"", f1prob:50 },
    ]  // end of fights list for this event
  },  // end of UFC Fight Night 276

  {  // UFC Freedom 250
    id: "freedom250",
    name: "UFC FREEDOM 250",
    subtitle: "Topuria vs. Gaethje",
    date: "2026-06-14",
    location: "Washington D.C.",
    venue: "The White House",
    ticketUrl: "https://ufc.com",
    type: "ppv",                       // PPV means pay-per-view — a bigger event
    status: "upcoming",
    fights: [
      // isTitleFight:true shows the gold belt banner. belt: is the name of the belt
      { order:1, label:"MAIN EVENT",   f1:"ILIA TOPURIA",    f1info:"🇬🇪 LW Champ · 16-0", f2:"JUSTIN GAETHJE",  f2info:"🇺🇸 Interim · 25-5",  division:"Lightweight", isTitleFight:true,  belt:"LIGHTWEIGHT UNIFICATION", f1prob:58 },
      { order:2, label:"CO-MAIN",      f1:"ALEX PEREIRA",    f1info:"🇧🇷 HW · 12-2",        f2:"CIRYL GANE",      f2info:"🇫🇷 #1 HW · 13-2",    division:"Heavyweight", isTitleFight:true,  belt:"INTERIM HW TITLE",        f1prob:54 },
      { order:3, label:"MAIN CARD",    f1:"ARMAN TSARUKYAN", f1info:"🇦🇲 #2 LW · 23-4",     f2:"MAX HOLLOWAY",    f2info:"🇺🇸 #4 LW · 26-8",    division:"Lightweight", isTitleFight:false, belt:"",                        f1prob:53 },
      { order:4, label:"MAIN CARD",    f1:"TBA",             f1info:"TBA",                   f2:"TBA",             f2info:"TBA",                   division:"TBA",         isTitleFight:false, belt:"",                        f1prob:50 },
      { order:5, label:"PRELIM",       f1:"TBA",             f1info:"TBA",                   f2:"TBA",             f2info:"TBA",                   division:"TBA",         isTitleFight:false, belt:"",                        f1prob:50 },
      { order:6, label:"EARLY PRELIM", f1:"TBA",             f1info:"TBA",                   f2:"TBA",             f2info:"TBA",                   division:"TBA",         isTitleFight:false, belt:"",                        f1prob:50 },
    ]
  },

  {  // UFC 329 — fights not announced yet so everything is TBA
    id: "ufc329", name: "UFC 329", subtitle: "TBA",
    date: "2026-08-15", location: "TBA", venue: "TBA",
    ticketUrl: "https://ufc.com", type: "ppv", status: "upcoming",
    fights: [
      { order:1, label:"MAIN EVENT", f1:"TBA", f1info:"TBA", f2:"TBA", f2info:"TBA", division:"TBA", isTitleFight:false, belt:"", f1prob:50 }
    ]
  },

  {  // UFC 330
    id: "ufc330", name: "UFC 330", subtitle: "TBA",
    date: "2026-09-01", location: "Philadelphia, PA", venue: "Xfinity Mobile Arena",
    ticketUrl: "https://ufc.com", type: "ppv", status: "upcoming",
    fights: [
      { order:1, label:"MAIN EVENT", f1:"TBA", f1info:"TBA", f2:"TBA", f2info:"TBA", division:"TBA", isTitleFight:false, belt:"", f1prob:50 }
    ]
  },

  {  // UFC 328 — this already happened so status is "past"
    id: "ufc328", name: "UFC 328", subtitle: "Chimaev vs. Strickland",
    date: "2026-05-09", location: "Newark, NJ", venue: "Prudential Center",
    ticketUrl: null,                   // null means no ticket link — the event already happened
    type: "ppv", status: "past",
    fights: [
      // Past fights also store: winner ("f1" or "f2"), method (how it ended), round (which round)
      { order:1, label:"MAIN EVENT",   f1:"KHAMZAT CHIMAEV",  f1info:"🇸🇪 MW Champ · 15-0", f2:"SEAN STRICKLAND",     f2info:"🇺🇸 · 30-7",         division:"Middleweight",     isTitleFight:true,  belt:"MIDDLEWEIGHT TITLE", f1prob:75, winner:"f2", method:"Split Decision", round:"R5" },
      { order:2, label:"CO-MAIN",      f1:"JOSHUA VAN",        f1info:"🇲🇲 FLY Champ",        f2:"TATSURO TAIRA",       f2info:"🇯🇵 · 18-1",          division:"Flyweight",        isTitleFight:true,  belt:"FLYWEIGHT TITLE",    f1prob:58, winner:"f1", method:"TKO",            round:"R5" },
      { order:3, label:"MAIN CARD",    f1:"ALEXANDER VOLKOV",  f1info:"🇷🇺 #2 HW · 37-10",    f2:"WALDO CORTES-ACOSTA", f2info:"🇩🇴 #4 HW · 12-1",   division:"Heavyweight",      isTitleFight:false, belt:"", f1prob:55, winner:"f1", method:"Decision",       round:"R3" },
      { order:4, label:"MAIN CARD",    f1:"SEAN BRADY",        f1info:"🇺🇸 #6 WW · 17-0",     f2:"GILBERT BURNS",       f2info:"🇧🇷 #11 WW · 22-7",  division:"Welterweight",     isTitleFight:false, belt:"", f1prob:60, winner:"f1", method:"Decision",       round:"R3" },
      { order:5, label:"MAIN CARD",    f1:"KING GREEN",        f1info:"🇺🇸 LW · 29-12",        f2:"JEREMY STEPHENS",     f2info:"🇺🇸 FW · 40-24",     division:"Lightweight",      isTitleFight:false, belt:"", f1prob:65, winner:"f1", method:"Submission",     round:"R1" },
      { order:6, label:"PRELIM",       f1:"GRANT DAWSON",      f1info:"🇺🇸 LW · 21-3",         f2:"MATEUSZ REBECKI",     f2info:"🇵🇱 LW · 18-3",      division:"Lightweight",      isTitleFight:false, belt:"", f1prob:62, winner:"f1", method:"Submission",     round:"R3" },
      { order:7, label:"PRELIM",       f1:"JIM MILLER",        f1info:"🇺🇸 LW · 40-18",        f2:"JARED GORDON",        f2info:"🇺🇸 LW · 20-8",      division:"Lightweight",      isTitleFight:false, belt:"", f1prob:55, winner:"f1", method:"Submission",     round:"R1" },
      { order:8, label:"PRELIM",       f1:"YAROSLAV AMOSOV",   f1info:"🇺🇦 WW",                f2:"JOEL ALVAREZ",        f2info:"🇪🇸 LW",              division:"Welterweight",     isTitleFight:false, belt:"", f1prob:52, winner:"f1", method:"Submission",     round:"R2" },
      { order:9, label:"EARLY PRELIM", f1:"ATEBA GAUTIER",     f1info:"🇫🇷 LW",                f2:"OZZY DIAZ",           f2info:"🇺🇸 LW",              division:"Lightweight",      isTitleFight:false, belt:"", f1prob:58, winner:"f1", method:"KO",             round:"R2" },
    ]
  },

  {  // UFC Fight Night Perth
    id: "fn-perth", name: "UFC FIGHT NIGHT · PERTH", subtitle: "Della Maddalena vs. Prates",
    date: "2026-05-02", location: "Perth, Australia", venue: "RAC Arena",
    ticketUrl: null, type: "fightnight", status: "past",
    fights: [
      { order:1, label:"MAIN EVENT", f1:"CARLOS PRATES",    f1info:"🇧🇷 WW · 23-7",      f2:"JACK DELLA MADDALENA", f2info:"🇦🇺 #1 WW · 18-2", division:"Welterweight", isTitleFight:false, belt:"", f1prob:45, winner:"f1", method:"TKO",      round:"R3" },
      { order:2, label:"CO-MAIN",    f1:"QUILLAN SALKILLD", f1info:"🇦🇺 LW",              f2:"BENEIL DARIUSH",       f2info:"🇮🇷 LW · 22-6",     division:"Lightweight",  isTitleFight:false, belt:"", f1prob:38, winner:"f1", method:"TKO",      round:"R1" },
      { order:3, label:"MAIN CARD",  f1:"BRENDAN ALLEN",    f1info:"🇺🇸 #4 MW · 24-5",   f2:"ROMAN DOLIDZE",        f2info:"🇬🇪 MW · 13-3",     division:"Middleweight", isTitleFight:false, belt:"", f1prob:58, winner:"f1", method:"Decision", round:"R3" },
      { order:4, label:"MAIN CARD",  f1:"GABRIEL BONFIM",   f1info:"🇧🇷 #10 WW · 16-1",  f2:"SEAN BRADY",           f2info:"🇺🇸 WW · 16-0",     division:"Welterweight", isTitleFight:false, belt:"", f1prob:48, winner:"f2", method:"Decision", round:"R3" },
      { order:5, label:"PRELIM",     f1:"NIKO PRICE",       f1info:"🇺🇸 WW",              f2:"GUNNAR NELSON",        f2info:"🇮🇸 WW",             division:"Welterweight", isTitleFight:false, belt:"", f1prob:50, winner:"f2", method:"Decision", round:"R3" },
    ]
  },

  {  // UFC Fight Night Las Vegas — Sterling vs Zalal
    id: "fn-sterling", name: "UFC FIGHT NIGHT · LAS VEGAS", subtitle: "Sterling vs. Zalal",
    date: "2026-04-25", location: "Las Vegas, NV", venue: "UFC Apex",
    ticketUrl: null, type: "fightnight", status: "past",
    fights: [
      { order:1, label:"MAIN EVENT", f1:"ALJAMAIN STERLING", f1info:"🇺🇸 #4 FW · 25-5",   f2:"YOUSSEF ZALAL",          f2info:"🇲🇦 #8 FW · 18-5", division:"Featherweight",    isTitleFight:false, belt:"", f1prob:62, winner:"f1", method:"Decision",   round:"R5" },
      { order:2, label:"CO-MAIN",    f1:"DAVEY GRANT",       f1info:"🇬🇧 BW",               f2:"ADRIÁN LUNA MARTINETTI", f2info:"🇲🇽 BW",            division:"Bantamweight",     isTitleFight:false, belt:"", f1prob:48, winner:"f1", method:"Decision",   round:"R3" },
      { order:3, label:"MAIN CARD",  f1:"RYAN SPANN",        f1info:"🇺🇸 LHW · 22-8",      f2:"BOGDAN GUSKOV",          f2info:"🇷🇺 LHW",           division:"Light Heavyweight", isTitleFight:false, belt:"", f1prob:55, winner:"f1", method:"KO",         round:"R1" },
      { order:4, label:"MAIN CARD",  f1:"ERIC McCONICO",     f1info:"🇺🇸 WW",               f2:"RODOLFO VIEIRA",         f2info:"🇧🇷 WW",            division:"Welterweight",     isTitleFight:false, belt:"", f1prob:52, winner:"f1", method:"Decision",   round:"R3" },
      { order:5, label:"PRELIM",     f1:"JACKSON McVEY",     f1info:"🇺🇸 LW",               f2:"SEDRIQUES DUMAS",        f2info:"🇺🇸 LW",            division:"Lightweight",      isTitleFight:false, belt:"", f1prob:51, winner:"f1", method:"Submission", round:"R1" },
    ]
  },

  {  // UFC 327 — Prochazka vs Ulberg
    id: "ufc327", name: "UFC 327", subtitle: "Prochazka vs. Ulberg",
    date: "2026-04-11", location: "Miami, FL", venue: "Kaseya Center",
    ticketUrl: null, type: "ppv", status: "past",
    fights: [
      { order:1, label:"MAIN EVENT", f1:"JIRI PROCHAZKA", f1info:"🇨🇿 LHW · 32-5",     f2:"CARLOS ULBERG",    f2info:"🇳🇿 LHW · 14-1",   division:"Light Heavyweight", isTitleFight:true,  belt:"LHW VACANT TITLE", f1prob:55, winner:"f2", method:"KO",       round:"R1" },
      { order:2, label:"CO-MAIN",    f1:"PAULO COSTA",    f1info:"🇧🇷 · 13-3",           f2:"AZAMAT MURZAKANOV",f2info:"🇷🇺 LHW",           division:"Light Heavyweight", isTitleFight:false, belt:"",                 f1prob:52, winner:"f1", method:"TKO",      round:"R3" },
      { order:3, label:"MAIN CARD",  f1:"JOSH HOKIT",     f1info:"🇺🇸 HW",               f2:"CURTIS BLAYDES",   f2info:"🇺🇸 #4 HW · 18-4", division:"Heavyweight",       isTitleFight:false, belt:"",                 f1prob:45, winner:"f1", method:"KO",       round:"R1" },
      { order:4, label:"MAIN CARD",  f1:"DOMINICK REYES", f1info:"🇺🇸 LHW",              f2:"JOHNNY WALKER",    f2info:"🇧🇷 LHW",           division:"Light Heavyweight", isTitleFight:false, belt:"",                 f1prob:48, winner:"f1", method:"Decision", round:"R3" },
    ]
  },

];  // end of EVENTS list

/*
  WHAT SECTION 1 DOES:
  This is where all the UFC event information lives. EVENTS is a
  list (called an array) of every event on the site. Each event
  is an object — a collection of named values like name, date,
  and location. Inside each event is another list called fights,
  which holds every fight on that card from early prelims to the
  main event. Past fights also store who won, how, and what round.
  Nothing runs here — this is just the data that the rest of the
  code reads from.
*/


// ============================================================
//  SECTION 2 — HELPER FUNCTIONS
// ============================================================

// Takes a date string like "2026-06-14" and returns "June 14, 2026"
const fmtDate = d => new Date(d + "T12:00:00").toLocaleDateString("en-US", { month:"long", day:"numeric", year:"numeric" });

// Takes a date string and returns how many days away it is as a number
const daysUntil = d => {
  const today  = new Date();              // get today's date and time
  today.setHours(0, 0, 0, 0);            // strip the time so we only compare dates, not hours
  const target = new Date(d);            // turn the date string into a date object
  target.setHours(0, 0, 0, 0);          // strip time from the target date too
  return Math.round((target - today) / 86400000);  // subtract dates (gives milliseconds), divide by ms in one day
};

// Takes a date and returns a readable label like "⏳ 29 DAYS AWAY"
const countdown = d => {
  const n = daysUntil(d);               // get the number of days away
  if (n < 0)   return "⚔️ PASSED";     // negative means it already happened
  if (n === 0) return "🔴 TONIGHT";    // zero means it's today
  if (n === 1) return "🔴 TOMORROW";   // one means it's tomorrow
  return `⏳ ${n} DAYS AWAY`;           // anything else shows the count
};

// Takes a fight finish method and returns the right CSS class for colouring it
const mClass = m => m && (m.includes("KO") || m.includes("TKO")) ? "method-ko"   // red for knockouts
               : m && m.includes("Sub") ? "method-sub"                            // gold for submissions
               : "method-dec";                                                     // blue for decisions

// Takes a fight finish method and returns the matching emoji
const mEmoji = m => m && (m.includes("KO") || m.includes("TKO")) ? "💥"          // explosion for KO
               : m && m.includes("Sub") ? "🔒"                                    // lock for submission
               : "📋";                                                             // clipboard for decision

/*
  WHAT SECTION 2 DOES:
  These are small reusable tools used throughout the file.
  Instead of writing the same logic repeatedly, we write it
  once and call it by name. fmtDate turns "2026-06-14" into
  "June 14, 2026". daysUntil works out how many days until
  an event. countdown turns that number into a label like
  "⏳ 29 DAYS AWAY". mClass and mEmoji look at how a fight
  ended (KO, Submission, Decision) and return the right CSS
  colour class or emoji for it.
*/


// ============================================================
//  SECTION 3 — NAVIGATION
// ============================================================

// Find every element with class "nav-tab" and loop through them
document.querySelectorAll(".nav-tab").forEach(tab => {

  // Attach a click listener to each tab button
  tab.addEventListener("click", () => {

    // Remove "active" from every tab to unhighlight them all
    document.querySelectorAll(".nav-tab").forEach(t => t.classList.remove("active"));

    // Remove "active" from every page to hide them all
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));

    // Add "active" to the tab that was just clicked to highlight it
    tab.classList.add("active");

    // Show the page whose id matches this tab's data-page value
    // e.g. data-page="events" shows the element with id="page-events"
    document.getElementById("page-" + tab.dataset.page).classList.add("active");

    // Scroll back to the top of the screen smoothly
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

/*
  WHAT SECTION 3 DOES:
  This makes the three buttons at the top of the page work.
  When you click Events, Fighter Search, or Tickets, this code
  first removes the highlight from every tab and hides every
  page. Then it highlights the tab you clicked and shows the
  matching page. The data-page attribute on each button in the
  HTML connects it to the right page — for example the button
  with data-page="events" shows the div with id="page-events".
*/


// ============================================================
//  SECTION 4 — EVENTS PAGE
// ============================================================

// renderEvents — builds and displays all event cards on screen
function renderEvents(filter) {

  if (!filter) filter = "all";                        // if no filter given, default to showing all events

  const grid = document.getElementById("eventsGrid"); // find the container div in the HTML
  grid.innerHTML = "";                                 // clear anything already inside it

  const list = EVENTS                                  // start with the full EVENTS list
    .filter(e => filter === "all" || e.status === filter)  // keep only events that match the filter
    .sort((a, b) => new Date(b.date) - new Date(a.date)); // sort newest events to the top

  list.forEach((ev, i) => {                            // loop through each filtered event

    const past = ev.status === "past";                 // true if this event already happened
    const m    = ev.fights[0];                         // the first fight in the list is always the main event

    const card = document.createElement("div");        // create a new empty div element for this card
    card.className = "event-card" + (past ? " event-past" : "");  // add extra class for past events (green stripe)
    card.style.animationDelay = (i * 0.06) + "s";     // stagger the animation so cards appear one after another

    // Build the result preview shown on past events (e.g. "💥 Strickland wins · Split Decision · R5")
    const winPrev = past && m.winner
      ? `<div class="ec-result-preview ${mClass(m.method)}">${mEmoji(m.method)} ${m.winner === "f1" ? m.f1 : m.f2} wins · ${m.method} · ${m.round}</div>`
      : "";  // empty string for upcoming events — no result to show yet

    // Fill the card with HTML using a template literal (text inside backticks with ${} for values)
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
          ${m.isTitleFight ? `<div class="ec-belt-banner">🏆 ${m.belt}</div>` : ""}
          <div class="ec-fighters">
            <div class="ec-fname">${m.f1}</div>
            <div class="ec-fvs">VS</div>
            <div class="ec-fname">${m.f2}</div>
          </div>
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
            <span>${ev.name} — FULL CARD</span>
            <span class="ec-fullcard-count">${ev.fights.length} fights · ${ev.venue}</span>
          </div>
          ${buildRows(ev)}
        </div>
      </div>`;

    grid.appendChild(card);  // add the finished card into the grid on the page
  });
}


// buildRows — builds the individual fight rows inside an expanded event card
function buildRows(ev) {

  const past = ev.status === "past";  // check if this event is in the past

  // .slice() copies the array so we don't change the original order
  // .sort() puts early prelims first (high order number) and main event last (order 1)
  return ev.fights.slice().sort((a, b) => b.order - a.order).map(f => {

    const isMain = f.order === 1;  // true if this is the main event row
    const isCo   = f.order === 2;  // true if this is the co-main event row

    const w1 = past && f.winner === "f1";  // true if fighter 1 won this fight
    const w2 = past && f.winner === "f2";  // true if fighter 2 won this fight

    // CSS class for fighter 1's block — winners stay bright, losers get dimmed
    const f1c = "ef-fighter-block" + (w1 ? " ef-winner-block" : "") + (past && !w1 && f.winner ? " ef-loser-block" : "");

    // CSS class for fighter 2's block — same logic, right-aligned
    const f2c = "ef-fighter-block ef-block-right" + (w2 ? " ef-winner-block" : "") + (past && !w2 && f.winner ? " ef-loser-block" : "");

    let extra = "";  // this will hold either a probability bar or a result pill

    if (!past) {
      // UPCOMING FIGHT — show a green and red probability bar
      const fav = f.f1prob >= 50;  // true if fighter 1 is the favourite (50% or more)
      extra = `
        <div class="ef-prob-bar">
          <div class="ef-p1" style="width:${f.f1prob}%">${f.f1prob}%</div>
          <div class="ef-p2">${100 - f.f1prob}%</div>
        </div>
        <div class="ef-prob-labels">
          <span class="${fav ? "fav" : "dog"}">${fav ? "⭐ FAV" : "🐶 UNDERDOG"}</span>
          <span class="${!fav ? "fav" : "dog"}">${!fav ? "FAV ⭐" : "UNDERDOG 🐶"}</span>
        </div>`;

    } else if (f.winner) {
      // PAST FIGHT — show who won and how
      const wn = f.winner === "f1" ? f.f1 : f.f2;  // winner's name
      const ln = f.winner === "f1" ? f.f2 : f.f1;  // loser's name
      extra = `<div class="ef-result ${mClass(f.method)}">${mEmoji(f.method)} <strong>${wn}</strong> def. ${ln}<span class="ef-result-detail">${f.method} · ${f.round}</span></div>`;
    }

    // Return the full HTML for this one fight row
    return `
      <div class="ef-row${isMain ? " ef-row-main" : isCo ? " ef-row-comain" : ""}">
        <div class="ef-row-label">
          <div class="ef-label-text ${isMain ? "efl-main" : isCo ? "efl-comain" : "efl-other"}">${f.label}</div>
          ${f.isTitleFight ? `<div class="ef-label-belt">🏆 TITLE</div>` : ""}
          <div class="ef-label-division">${f.division}</div>
        </div>
        <div class="ef-row-fight">
          <div class="${f1c}">
            <div class="ef-fighter-name">${f.f1}</div>
            <div class="ef-fighter-info">${f.f1info}</div>
            ${w1 ? `<div class="ef-w-tag">✓ WINNER</div>` : ""}
          </div>
          <div class="ef-mid"><div class="ef-vs-text">VS</div></div>
          <div class="${f2c}">
            <div class="ef-fighter-name">${f.f2}</div>
            <div class="ef-fighter-info">${f.f2info}</div>
            ${w2 ? `<div class="ef-w-tag">✓ WINNER</div>` : ""}
          </div>
        </div>
        <div class="ef-row-extra">${extra}</div>
      </div>`;

  }).join("");  // join all the row strings into one big string
}


// toggleEvent — opens or closes an event card when the user clicks it
function toggleEvent(id) {

  const panel = document.getElementById("panel-" + id);      // the hidden panel below the card
  const btn   = document.getElementById("expand-btn-" + id); // the expand button on the right
  const open  = panel.classList.contains("open");             // check if this panel is already open

  // Close any other panels that are currently open — only one can be open at a time
  document.querySelectorAll(".ec-fullcard.open").forEach(p => {
    if (p.id !== "panel-" + id) {                             // don't close the one we just clicked
      p.classList.remove("open");                             // hide this other open panel
      const ob = document.getElementById("expand-btn-" + p.id.replace("panel-", ""));  // find its button
      if (ob) {
        ob.querySelector(".ec-expand-icon").textContent = "▼";              // reset arrow to point down
        ob.querySelector(".ec-expand-label").innerHTML  = "SEE FULL<br>FIGHT CARD";  // reset button text
      }
    }
  });

  panel.classList.toggle("open");  // toggle this panel: if closed, open it; if open, close it

  if (!open) {
    // The panel is now OPENING
    btn.querySelector(".ec-expand-icon").textContent = "▲";               // change arrow to point up
    btn.querySelector(".ec-expand-label").innerHTML  = "HIDE<br>FIGHT CARD"; // change button text

    // Scroll the card into view after a short delay so the animation plays first
    setTimeout(() => document.getElementById("summary-" + id).scrollIntoView({ behavior: "smooth", block: "start" }), 100);

    const ev = EVENTS.find(e => e.id === id);  // find this event's data in the EVENTS list

    // Show the ticket bar only for upcoming events that have a ticket link
    if (ev && ev.status === "upcoming" && ev.ticketUrl) showTicketBar(ev);
    else hideTicketBar();  // hide the ticket bar for past events

  } else {
    // The panel is now CLOSING
    btn.querySelector(".ec-expand-icon").textContent = "▼";               // reset arrow to point down
    btn.querySelector(".ec-expand-label").innerHTML  = "SEE FULL<br>FIGHT CARD";  // reset button text
    hideTicketBar();  // hide the ticket bar when the card closes
  }
}


// showTicketBar — creates and slides up the "Buy Tickets" strip at the bottom of the screen
function showTicketBar(ev) {

  let bar = document.getElementById("ticketBar");  // check if a ticket bar already exists
  if (!bar) {                                       // if it doesn't exist yet, create it
    bar = document.createElement("div");            // create a new div element
    bar.id = "ticketBar";                           // give it an id so we can find it later
    bar.className = "ticket-bar";                   // give it the CSS class for styling
    document.body.appendChild(bar);                 // add it to the bottom of the page
  }

  // Fill the bar with the event name, details, and a button that switches to the Tickets page
  bar.innerHTML = `
    <div class="ticket-bar-inner">
      <div>
        <div class="ticket-bar-event">${ev.name}</div>
        <div class="ticket-bar-details">📅 ${fmtDate(ev.date)} · 📍 ${ev.location} · 🏟 ${ev.venue}</div>
      </div>
      <div class="ticket-bar-actions">
        <button class="ticket-btn-bar" onclick="document.querySelector('[data-page=tickets]').click()">🎟 BUY TICKETS</button>
        <button class="ticket-bar-close" onclick="hideTicketBar()">✕</button>
      </div>
    </div>`;

  setTimeout(() => bar.classList.add("visible"), 10);  // wait 10ms then add "visible" to trigger the CSS slide-up animation
}


// hideTicketBar — slides the ticket bar back down and removes it
function hideTicketBar() {
  const bar = document.getElementById("ticketBar");  // find the ticket bar
  if (bar) {                                          // only run if it exists
    bar.classList.remove("visible");                  // removing "visible" triggers the CSS slide-down animation
    setTimeout(() => bar.remove(), 350);              // wait for animation to finish then remove it from the page
  }
}


// Attach click listeners to the filter buttons: All Events, Upcoming, Past Results
document.querySelectorAll("[data-efilter]").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("[data-efilter]").forEach(b => b.classList.remove("active")); // unhighlight all filter buttons
    btn.classList.add("active");           // highlight the one that was clicked
    renderEvents(btn.dataset.efilter);     // re-draw the event cards with the new filter
    hideTicketBar();                       // hide the ticket bar since the list just changed
  });
});

/*
  WHAT SECTION 4 DOES:
  This section controls everything on the Events page.
  renderEvents reads the EVENTS list and builds a clickable
  card on screen for each one, showing the event name, date,
  location, and main event matchup. buildRows runs inside
  renderEvents and creates the individual fight rows you see
  when a card is expanded — for upcoming fights it shows a
  green and red probability bar, for past fights it shows who
  won and how. toggleEvent runs when you click a card — it
  opens the full fight card below it and closes any other card
  that was already open. showTicketBar and hideTicketBar control
  the strip that slides up from the bottom of the screen when
  you open an upcoming event. The filter buttons at the top
  (All, Upcoming, Past) re-run renderEvents with a different
  filter each time they are clicked.
*/


// ============================================================
//  SECTION 5 — FIGHTER SEARCH
// ============================================================

const searchInput   = document.getElementById("fighterSearchInput");  // the text input box
const searchClear   = document.getElementById("searchClear");         // the X clear button
const searchResults = document.getElementById("searchResults");       // the div where results appear


// showPrompt — displays the default "search a fighter" message
function showPrompt() {
  searchResults.className = "";  // remove any grid layout class
  searchResults.innerHTML = `
    <div class="search-prompt-wrap">
      <div class="search-prompt-icon">🥊</div>
      <p class="search-prompt">Search any UFC fighter — AI powered</p>
      <p class="search-prompt-sub">Live stats, records and fight history</p>
    </div>`;
}


// fetchFighter — sends the fighter name to the Claude AI and returns their stats as an object
// "async" means this function can wait for things (like a network request) before continuing
async function fetchFighter(name) {

  // This is the instruction we send to Claude — we ask it to reply only with JSON data
  const prompt = `You are a UFC data expert. Look up the UFC fighter: "${name}".
Respond ONLY with valid JSON, no markdown, no backticks.
Use this exact structure:
{"found":true,"name":"FULL NAME IN CAPS","nickname":"nickname or empty string","division":"weight class e.g. Lightweight","rank":"Champion or #1 etc","record":"W-L-D e.g. 34-10-0","country":"flag + country e.g. 🇧🇷 Brazil","age":30,"height":"5'10\\"","reach":"74\\"","style":"e.g. BJJ / Submissions","history":[{"opp":"Name","result":"W or L or D","method":"KO or TKO or Submission or Decision","round":"R1 etc"}],"summary":"2 sentence summary of who this fighter is"}
If not a UFC fighter: {"found":false}
Include 5 most recent fights. Today is ${new Date().toDateString()}.`;

  // Send the request to the Anthropic (Claude) API
  // "await" pauses the function here until the server responds
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",                                    // POST sends data to the server
    headers: { "Content-Type": "application/json" },  // tells the server we're sending JSON
    body: JSON.stringify({                             // convert the JS object to a JSON text string
      model: "claude-sonnet-4-20250514",               // which version of Claude to use
      max_tokens: 1000,                                // maximum length of the reply
      messages: [{ role: "user", content: prompt }]   // the message we're sending to Claude
    })
  });

  const data = await res.json();  // wait for the response and parse it from JSON text into a JS object

  // Pull out Claude's reply text, remove any accidental markdown formatting, then parse it as JSON
  return JSON.parse(data.content[0].text.trim().replace(/```json|```/g, ""));
}


// buildFighterCard — takes the AI data object and returns an HTML string for the profile card
function buildFighterCard(f) {

  // Build the division CSS class e.g. "div-lightweight" — used for the coloured top border
  const dc = "div-" + f.division.toLowerCase().replace(/\s+/g, "").replace(/[^a-z]/g, "");

  const wins = f.history.filter(h => h.result === "W").length;          // count the wins
  const real = f.history.filter(h => h.result === "W" || h.result === "L").length;  // count wins + losses
  const wr   = real ? Math.round(wins / real * 100) : 0;                // calculate win % (avoid dividing by zero)

  // Build each row of the fight history
  const hist = f.history.map(h => {

    // Choose badge colour: green for W, yellow for draw, red for L
    const bc = h.result === "W" ? "fp-res-w" : h.result === "D" ? "fp-res-up" : "fp-res-l";

    // Choose method text colour: red for KO, gold for submission, blue for decision
    const mc = h.method && (h.method.includes("KO") || h.method.includes("TKO")) ? "m-ko"
             : h.method && h.method.includes("Sub") ? "m-sub"
             : "m-dec";

    return `
      <div class="fp-fight-row">
        <span class="fp-fight-opp">vs ${h.opp}</span>
        <div class="fp-fight-result">
          <span class="fp-res-badge ${bc}">${h.result}</span>
          <span class="fp-fight-method ${mc}">${h.method} · ${h.round}</span>
        </div>
      </div>`;

  }).join("");  // join all fight rows into one string

  // Return the full profile card HTML
  return `
    <div class="fighter-profile-card ${dc}">
      <div class="fp-header">
        <div class="fp-division-badge">${f.division.toUpperCase()} · ${f.rank}</div>
        <div class="fp-name">${f.name}</div>
        ${f.nickname ? `<div class="fp-nickname">"${f.nickname}"</div>` : ""}
      </div>
      <div class="fp-body">
        <div class="fp-record-row">
          <div class="fp-record">${f.record}</div>
          <div class="fp-style">${f.style}</div>
        </div>
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
          <div class="fp-winrate-track">
            <div class="fp-winrate-fill" style="width:${wr}%">${wr > 18 ? wr + "%" : ""}</div>
          </div>
        </div>
        ${f.summary ? `<div class="ai-summary"><span class="ai-badge">🤖 AI INSIGHT</span>${f.summary}</div>` : ""}
        <div class="fp-history">
          <div class="fp-history-title">⚔️ Recent Fight History</div>
          ${hist}
        </div>
      </div>
    </div>`;
}


let searchTimer = null;  // stores the timer ID so we can cancel and restart it when the user keeps typing


// doSearch — runs every time the user types in the search box
function doSearch(q) {

  q = q.trim();                                          // remove any spaces from start and end of the text
  searchClear.classList.toggle("visible", q.length > 0); // show the X button only when there is text
  clearTimeout(searchTimer);                             // cancel any previous timer that hasn't fired yet

  if (!q) { showPrompt(); return; }  // if the box is empty, show the default prompt and stop here

  // Show a spinning loading indicator while waiting for the API
  searchResults.className = "";
  searchResults.innerHTML = `
    <div class="search-prompt-wrap">
      <div class="search-loading-ring"></div>
      <p class="search-prompt">Looking up <strong>${q}</strong>...</p>
      <p class="search-prompt-sub">Asking AI for live UFC data</p>
    </div>`;

  // Wait 600ms after the last keystroke before calling the API
  // This stops us sending a new request for every single letter typed
  searchTimer = setTimeout(async () => {
    try {
      const f = await fetchFighter(q);  // call Claude and wait for the fighter data

      if (!f.found) {
        // Claude said the fighter wasn't found — show a "not found" message
        searchResults.innerHTML = `
          <div class="search-prompt-wrap">
            <div class="search-prompt-icon">❓</div>
            <p class="search-prompt">No UFC fighter found for "<strong>${q}</strong>"</p>
          </div>`;
        return;  // stop here
      }

      // Fighter was found — show the profile card
      searchResults.className = "fighter-cards-grid";  // switch to grid layout
      searchResults.innerHTML = buildFighterCard(f);   // build and insert the card HTML

    } catch (e) {
      // Something went wrong with the API call (e.g. no internet)
      searchResults.innerHTML = `
        <div class="search-prompt-wrap">
          <div class="search-prompt-icon">⚠️</div>
          <p class="search-prompt">Something went wrong. Try again.</p>
        </div>`;
    }
  }, 600);  // 600 milliseconds = 0.6 seconds
}


// Listen for any typing in the search box and run doSearch each time
searchInput.addEventListener("input", e => doSearch(e.target.value));

// When the X button is clicked, clear the search and reset
searchClear.addEventListener("click", () => {
  searchInput.value = "";  // empty the text box
  doSearch("");            // reset results back to the default prompt
  searchInput.focus();     // put the cursor back inside the search box
});

// Hint pills (Oliveira, Makhachev etc.) — clicking one fills the box and searches automatically
document.querySelectorAll(".hint-pill").forEach(p => {
  p.addEventListener("click", () => {

    // If the user is not on the search page, switch to it first
    if (!document.getElementById("page-search").classList.contains("active")) {
      document.querySelector("[data-page='search']").click();
    }

    // Short delay so the page can finish switching before we fill in the search
    setTimeout(() => {
      searchInput.value = p.dataset.hint;  // put the hint text into the search box
      doSearch(p.dataset.hint);            // trigger the search immediately
    }, 60);
  });
});

/*
  WHAT SECTION 5 DOES:
  This section powers the Fighter Search page using the Claude
  AI API. When you type a fighter's name, doSearch waits 600ms
  after your last keystroke before doing anything — this stops
  it calling the API on every single letter you type. Once it
  fires, it shows a loading spinner and calls fetchFighter, which
  sends the name to Claude and asks it to reply with the fighter's
  stats as JSON data. JSON is a simple format for storing
  information that both humans and code can read easily. When
  Claude replies, buildFighterCard takes that data and turns it
  into the profile card you see on screen, showing the record,
  stats grid, win rate bar, and fight history. The X button clears
  the search, and the hint pills (Oliveira, Makhachev etc.) fill
  in the box and trigger a search automatically when clicked.
*/


// ============================================================
//  SECTION 6 — TICKET MODAL
// ============================================================

let modalBase = 89;  // stores the current price per ticket (changes when you pick a tier)
let modalQty  = 1;   // stores how many tickets the user wants (starts at 1)


// openModal — called when a "BUY TICKETS" button is clicked on the Tickets page
function openModal(name, date, loc, fight, base) {

  modalBase = base;  // save the starting price for this event
  modalQty  = 1;     // reset quantity to 1 every time the modal opens

  document.getElementById("modal-name").textContent  = name;          // set the event name in the popup
  document.getElementById("modal-date").textContent  = "📅 " + date;  // set the date
  document.getElementById("modal-loc").textContent   = "📍 " + loc;   // set the location
  document.getElementById("modal-fight").textContent = fight;          // set the main fight matchup

  document.getElementById("price-ga").textContent    = "$" + base;           // General Admission = base price
  document.getElementById("price-floor").textContent = "$" + (base * 2.8 | 0);  // Floor Seats = 2.8x base (| 0 removes decimal)
  document.getElementById("price-vip").textContent   = "$" + (base * 6.7 | 0);  // Ringside VIP = 6.7x base

  document.getElementById("modal-qty").textContent   = "1";      // show quantity as 1
  document.getElementById("modal-total").textContent = "$" + base;  // show total as the base price

  // Select the first tier (General Admission) by default, deselect the others
  document.querySelectorAll(".modal-tier").forEach((t, i) => t.classList.toggle("selected", i === 0));

  document.getElementById("ticketModal").classList.add("open");  // show the modal popup
}


// pickTier — called when the user clicks General Admission, Floor Seats, or Ringside VIP
function pickTier(el, idx) {

  document.querySelectorAll(".modal-tier").forEach(t => t.classList.remove("selected")); // deselect all tiers
  el.classList.add("selected");  // select the one that was clicked

  const prices = [modalBase, modalBase * 2.8 | 0, modalBase * 6.7 | 0];  // the three tier prices
  modalBase = prices[idx];       // update the base price to the chosen tier

  updateTotal();  // recalculate and show the new total
}


// changeQty — called when the + or − buttons are pressed
function changeQty(delta) {

  // Add delta (+1 or -1) to the current quantity, but keep it between 1 and 10
  modalQty = Math.max(1, Math.min(10, modalQty + delta));

  document.getElementById("modal-qty").textContent = modalQty;  // update the number on screen

  updateTotal();  // recalculate and show the new total
}


// updateTotal — recalculates the total price and displays it
function updateTotal() {
  // Multiply price by quantity, then format with commas e.g. 1000 becomes "1,000"
  document.getElementById("modal-total").textContent = "$" + (modalBase * modalQty).toLocaleString();
}


// closeModal — closes the popup if the user clicks the dark background behind it
function closeModal(e) {
  // e.target is whatever was clicked — only close if they clicked the dark overlay itself, not the white box
  if (e.target === document.getElementById("ticketModal")) {
    document.getElementById("ticketModal").classList.remove("open");  // hide the modal
  }
}


// confirmOrder — called when the "CONFIRM ORDER" button is clicked
function confirmOrder() {

  const name  = document.getElementById("modal-name").textContent;                           // get event name
  const total = document.getElementById("modal-total").textContent;                          // get total price
  const tier  = document.querySelector(".modal-tier.selected .tier-name").textContent;       // get selected tier name

  // Build a confirmation message e.g. "2× Floor Seats for UFC 329 — $498 total."
  document.getElementById("confirm-msg").textContent = modalQty + "× " + tier + " for " + name + " — " + total + " total.";

  document.getElementById("ticketModal").classList.remove("open");   // close the ticket modal
  document.getElementById("confirmModal").classList.add("open");     // open the success confirmation modal
}

/*
  WHAT SECTION 6 DOES:
  This section controls the popup window on the Tickets page.
  When you click any Buy Tickets button, openModal fills the
  popup with that event's details and sets the three ticket
  tier prices — General Admission at the base price, Floor
  Seats at roughly 2.8x that, and Ringside VIP at 6.7x.
  pickTier runs when you click one of those tiers and updates
  the base price to match. changeQty runs when you press the
  + or − buttons and keeps the quantity between 1 and 10.
  updateTotal multiplies the price by the quantity and shows
  the result. closeModal closes the popup if you click the dark
  background behind it. confirmOrder shows a second popup
  confirming your order with a summary of what you selected.
*/


// ============================================================
//  START UP
// ============================================================

// Wait for the HTML to fully load before running anything
document.addEventListener("DOMContentLoaded", () => {
  renderEvents("all");  // build and display all event cards on the Events page
  showPrompt();         // show the default "search a fighter" message on the Search page
});

/*
  WHAT THE START UP DOES:
  This runs automatically once the browser has finished loading
  all the HTML on the page. We have to wait for this before
  running any code, because the code needs the HTML elements
  to already exist before it can read or change them.
  renderEvents builds all the event cards on the Events page,
  and showPrompt displays the default message on the Fighter
  Search page telling you to type a name.
*/


// ── DARK MODE ─────────────────────────────────────────────────

// toggleDark — switches the site between light and dark mode
function toggleDark() {
  document.body.classList.toggle("dark");  // add or remove the "dark" class on the body element
  const btn = document.getElementById("darkToggle");  // find the toggle button
  btn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";  // swap the icon
  localStorage.setItem("dark", document.body.classList.contains("dark"));  // remember the preference
}

// On page load, check if the user previously turned on dark mode and apply it
if (localStorage.getItem("dark") === "true") {
  document.body.classList.add("dark");  // turn on dark mode
  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("darkToggle");  // find the button
    if (btn) btn.textContent = "☀️";  // set the icon to the sun (light mode icon)
  });
}
