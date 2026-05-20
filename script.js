// ============================================================
//  SECTION 1 — DATA
// ============================================================

// EVENTS is a constant (a value that never changes) holding an array (a list) of every UFC event.
// Each item in the array is an object — a group of related pieces of information stored together.
// Objects use curly brackets {} and store data as "key: value" pairs, like a row in a spreadsheet.
const EVENTS = [

  {  // ── UFC FIGHT NIGHT 276 ──────────────────────────────────────────────────────────────
    id: "fn276",                       // a short unique text ID — used by the code to find this specific event
    name: "UFC FIGHT NIGHT 276",       // the full event name shown on the card on screen
    subtitle: "Allen vs. Costa",       // the main fight shown in smaller text under the name
    date: "2026-05-16",                // the event date in YYYY-MM-DD format so the code can do maths on it
    location: "Las Vegas, NV",         // the city — shown on the card
    venue: "UFC Apex",                 // the arena name — shown on the card
    ticketUrl: "https://ufc.com",      // the web address the ticket bar button links to
    type: "fightnight",                // either "ppv" (pay-per-view) or "fightnight" — controls the badge colour
    status: "upcoming",                // either "upcoming" or "past" — controls which filter tab shows this event
    fights: [                          // a nested array (list inside a list) of every fight on this card

      // Each fight object stores:
      //   order      — which position on the card (1 = main event, 2 = co-main, higher = earlier in the night)
      //   label      — the text shown on the left of the row e.g. "MAIN EVENT" or "PRELIM"
      //   f1 / f2    — the names of the two fighters
      //   f1info     — small text under fighter 1's name showing flag, rank, and record
      //   f2info     — same for fighter 2
      //   division   — the weight class this fight is in
      //   isTitleFight — true shows the gold belt banner, false hides it
      //   belt       — the name of the belt (only used when isTitleFight is true)
      //   f1prob     — fighter 1's estimated win probability as a whole number percentage (e.g. 55 means 55%)
      { order:1, label:"MAIN EVENT",   f1:"BRENDAN ALLEN",   f1info:"🇺🇸 #4 MW · 24-6",   f2:"PAULO COSTA",         f2info:"🇧🇷 #15 MW · 14-3",  division:"Middleweight", isTitleFight:false, belt:"", f1prob:55 },
      { order:2, label:"CO-MAIN",      f1:"SONG YADONG",     f1info:"🇨🇳 #5 BW · 22-8-1", f2:"DEIVESON FIGUEIREDO", f2info:"🇧🇷 #7 BW · 23-5-1", division:"Bantamweight", isTitleFight:false, belt:"", f1prob:52 },
      { order:3, label:"MAIN CARD",    f1:"PADDY PIMBLETT",  f1info:"🇬🇧 #6 LW · 22-4",   f2:"KING GREEN",          f2info:"🇺🇸 LW · 29-12",      division:"Lightweight",  isTitleFight:false, belt:"", f1prob:60 },
      { order:4, label:"MAIN CARD",    f1:"TBA",             f1info:"TBA",                  f2:"TBA",                 f2info:"TBA",                  division:"TBA",          isTitleFight:false, belt:"", f1prob:50 },
      { order:5, label:"PRELIM",       f1:"TBA",             f1info:"TBA",                  f2:"TBA",                 f2info:"TBA",                  division:"TBA",          isTitleFight:false, belt:"", f1prob:50 },
      { order:6, label:"EARLY PRELIM", f1:"TBA",             f1info:"TBA",                  f2:"TBA",                 f2info:"TBA",                  division:"TBA",          isTitleFight:false, belt:"", f1prob:50 },
    ]  // end of the fights array for this event
  },  // end of UFC Fight Night 276 object — note the comma, because there are more items in the array

  {  // ── UFC FREEDOM 250 ──────────────────────────────────────────────────────────────────
    id: "freedom250",
    name: "UFC FREEDOM 250",
    subtitle: "Topuria vs. Gaethje",
    date: "2026-06-14",
    location: "Washington D.C.",
    venue: "The White House",
    ticketUrl: "https://ufc.com",
    type: "ppv",       // PPV means Pay-Per-View — a bigger, premium event
    status: "upcoming",
    fights: [
      // isTitleFight: true means the gold "🏆 TITLE" banner will appear on this fight row
      // belt: is what text goes inside that banner
      { order:1, label:"MAIN EVENT",   f1:"ILIA TOPURIA",    f1info:"🇬🇪 LW Champ · 16-0", f2:"JUSTIN GAETHJE",  f2info:"🇺🇸 Interim · 25-5",  division:"Lightweight", isTitleFight:true,  belt:"LIGHTWEIGHT UNIFICATION", f1prob:58 },
      { order:2, label:"CO-MAIN",      f1:"ALEX PEREIRA",    f1info:"🇧🇷 HW · 12-2",        f2:"CIRYL GANE",      f2info:"🇫🇷 #1 HW · 13-2",    division:"Heavyweight", isTitleFight:true,  belt:"INTERIM HW TITLE",        f1prob:54 },
      { order:3, label:"MAIN CARD",    f1:"ARMAN TSARUKYAN", f1info:"🇦🇲 #2 LW · 23-4",     f2:"MAX HOLLOWAY",    f2info:"🇺🇸 #4 LW · 26-8",    division:"Lightweight", isTitleFight:false, belt:"",                        f1prob:53 },
      { order:4, label:"MAIN CARD",    f1:"TBA",             f1info:"TBA",                   f2:"TBA",             f2info:"TBA",                   division:"TBA",         isTitleFight:false, belt:"",                        f1prob:50 },
      { order:5, label:"PRELIM",       f1:"TBA",             f1info:"TBA",                   f2:"TBA",             f2info:"TBA",                   division:"TBA",         isTitleFight:false, belt:"",                        f1prob:50 },
      { order:6, label:"EARLY PRELIM", f1:"TBA",             f1info:"TBA",                   f2:"TBA",             f2info:"TBA",                   division:"TBA",         isTitleFight:false, belt:"",                        f1prob:50 },
    ]
  },

  {  // ── UFC 329 ── (fights not yet announced, so TBA everywhere)
    id: "ufc329", name: "UFC 329", subtitle: "TBA",
    date: "2026-08-15", location: "TBA", venue: "TBA",
    ticketUrl: "https://ufc.com", type: "ppv", status: "upcoming",
    fights: [
      { order:1, label:"MAIN EVENT", f1:"TBA", f1info:"TBA", f2:"TBA", f2info:"TBA", division:"TBA", isTitleFight:false, belt:"", f1prob:50 }
    ]
  },

  {  // ── UFC 330 ──
    id: "ufc330", name: "UFC 330", subtitle: "TBA",
    date: "2026-09-01", location: "Philadelphia, PA", venue: "Xfinity Mobile Arena",
    ticketUrl: "https://ufc.com", type: "ppv", status: "upcoming",
    fights: [
      { order:1, label:"MAIN EVENT", f1:"TBA", f1info:"TBA", f2:"TBA", f2info:"TBA", division:"TBA", isTitleFight:false, belt:"", f1prob:50 }
    ]
  },

  {  // ── UFC 328 ── (already happened — status is "past" and fights include results)
    id: "ufc328", name: "UFC 328", subtitle: "Chimaev vs. Strickland",
    date: "2026-05-09", location: "Newark, NJ", venue: "Prudential Center",
    ticketUrl: null,   // null means no value — the event is over so there are no tickets to buy
    type: "ppv", status: "past",
    fights: [
      // Past fights have three extra fields that upcoming fights don't have:
      //   winner  — "f1" means fighter 1 won, "f2" means fighter 2 won
      //   method  — how the fight ended: KO, TKO, Submission, or Decision
      //   round   — which round it finished in, e.g. "R5" means round 5
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

  {  // ── UFC FIGHT NIGHT · PERTH ──
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

  {  // ── UFC FIGHT NIGHT · LAS VEGAS (Sterling vs Zalal) ──
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

  {  // ── UFC 327 ──
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

];  // end of the EVENTS array — the closing ] ends the list, and the ; ends the statement

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

// fmtDate — takes a date string like "2026-06-14" and returns a human-readable string like "June 14, 2026"
// new Date() turns the string into a Date object that JavaScript understands
// We add "T12:00:00" (noon time) to avoid timezone issues that could shift the date by one day
// .toLocaleDateString("en-US", {...}) formats it in English with the month written out in full
const fmtDate = d => new Date(d + "T12:00:00").toLocaleDateString("en-US", { month:"long", day:"numeric", year:"numeric" });

// daysUntil — takes a date string and returns how many whole days away that date is from today
const daysUntil = d => {
  const today = new Date();       // get the current date and time right now
  today.setHours(0, 0, 0, 0);    // reset hours, minutes, seconds, milliseconds to zero — we only want to compare calendar dates, not exact times
  const target = new Date(d);    // convert the event date string into a JavaScript Date object
  target.setHours(0, 0, 0, 0);  // strip the time from the target date too so both dates are at midnight
  return Math.round((target - today) / 86400000); // subtracting two Date objects gives milliseconds — divide by 86400000 (the number of milliseconds in one full day) to get days
};

// countdown — takes a date string and returns a short label that shows how far away the event is
const countdown = d => {
  const n = daysUntil(d);          // call daysUntil to get the number as a plain number
  if (n < 0)   return "⚔️ PASSED"; // a negative number means the date is in the past
  if (n === 0) return "🔴 TONIGHT"; // zero days means it's happening today
  if (n === 1) return "🔴 TOMORROW"; // one day means it's tomorrow
  return `⏳ ${n} DAYS AWAY`;        // the backtick string uses ${n} to insert the number into the text
};

// mClass — takes a fight method string and returns the right CSS class name for colour coding it
// The ? : syntax is called a ternary — it works like a one-line if/else: condition ? valueIfTrue : valueIfFalse
// .includes() checks whether a string contains another string — e.g. "TKO".includes("KO") returns true
const mClass = m => m && (m.includes("KO") || m.includes("TKO")) ? "method-ko"  // KO and TKO both return the red class
               : m && m.includes("Sub") ? "method-sub"                           // any submission returns the gold class
               : "method-dec";                                                    // everything else (decisions) returns the blue class

// mEmoji — takes a fight method string and returns the matching emoji to show next to results
const mEmoji = m => m && (m.includes("KO") || m.includes("TKO")) ? "💥" // fist explosion for knockouts
               : m && m.includes("Sub") ? "🔒"                           // padlock for submissions
               : "📋";                                                    // clipboard for decisions

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

// document.querySelectorAll(".nav-tab") finds every HTML element that has the class "nav-tab"
// .forEach() loops through each one and runs the function inside for each tab button
document.querySelectorAll(".nav-tab").forEach(tab => {

  // .addEventListener("click", ...) means: when this button is clicked, run the function inside
  tab.addEventListener("click", () => {

    // Loop through every nav tab again and remove the "active" class from all of them
    // This unhighlights every tab so we can start fresh before highlighting just the one that was clicked
    document.querySelectorAll(".nav-tab").forEach(t => t.classList.remove("active"));

    // Loop through every page div and remove "active" from all of them
    // Without "active", the CSS sets display:none which hides the page completely
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));

    // Add "active" back to only the tab that was just clicked — this makes it appear highlighted
    tab.classList.add("active");

    // tab.dataset.page reads the data-page attribute from the HTML button element
    // For example, if the button has data-page="events", this builds the string "page-events"
    // document.getElementById() then finds the div with that id and adds "active" to show it
    document.getElementById("page-" + tab.dataset.page).classList.add("active");

    // Scroll the browser window smoothly back to the very top of the page
    // { top: 0 } means scroll to position 0 (the top), behavior: "smooth" animates it
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

// renderEvents — reads the EVENTS data and builds all the event cards on the page
// filter is a string: "all", "upcoming", or "past" — controls which events are shown
function renderEvents(filter) {

  // If renderEvents is called without a filter argument, default to "all"
  if (!filter) filter = "all";

  // Find the HTML div with id="eventsGrid" — this is the container where all cards live
  const grid = document.getElementById("eventsGrid");

  // Setting innerHTML to "" deletes everything currently inside the grid
  // This clears old cards before we draw the new ones (important when switching filters)
  grid.innerHTML = "";

  // Build a filtered and sorted list from the EVENTS array
  const list = EVENTS
    // .filter() creates a new array containing only items where the function returns true
    // We keep an event if the filter is "all", or if the event's status matches the filter
    .filter(e => filter === "all" || e.status === filter)
    // .sort() reorders the array — here we sort by date so newest events appear at the top
    // new Date(b.date) - new Date(a.date) gives a negative number if b is newer, putting b first
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  // Loop through every event in the filtered list
  // i is the index (0, 1, 2...) which we use to stagger the animation timing
  list.forEach((ev, i) => {

    // Store whether this event is in the past — we use this many times below
    const past = ev.status === "past";

    // The first fight in the fights array (index 0) is always the main event
    // We use it to show the main event matchup on the card summary
    const m = ev.fights[0];

    // Create a brand new <div> element in memory — it doesn't appear on screen yet
    document.createElement("div") creates the HTML element
    const card = document.createElement("div");

    // Set the CSS class on the card
    // Past events get an extra class "event-past" which makes their left border green
    // The + operator joins strings together: "event-card" + " event-past" = "event-card event-past"
    card.className = "event-card" + (past ? " event-past" : "");

    // Set a CSS animation delay so each card slides in slightly after the previous one
    // i * 0.06 means card 0 has no delay, card 1 waits 0.06 seconds, card 2 waits 0.12 seconds etc.
    card.style.animationDelay = (i * 0.06) + "s";

    // Build the result preview for past events — e.g. "💥 Strickland wins · Split Decision · R5"
    // The && operator means "only evaluate the right side if the left side is true"
    // The ? : ternary checks if m.winner is "f1" and picks the right fighter name accordingly
    const winPrev = past && m.winner
      ? `<div class="ec-result-preview ${mClass(m.method)}">${mEmoji(m.method)} ${m.winner === "f1" ? m.f1 : m.f2} wins · ${m.method} · ${m.round}</div>`
      : "";  // if there's no winner data yet, winPrev is an empty string and nothing is shown

    // Set the card's inner HTML using a template literal
    // Template literals use backticks `` instead of quotes and allow ${} to insert JavaScript values directly
    // This builds the full HTML structure for one event card, including the hidden expandable panel
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

    // .appendChild() physically adds the finished card div into the grid on the page
    // Only after this line does the card become visible in the browser
    grid.appendChild(card);
  });
}


// buildRows — builds the HTML for all the individual fight rows inside an expanded event card
// This function is called from inside renderEvents above, once per event
function buildRows(ev) {

  // Check if this event is in the past — affects what we show in the right column
  const past = ev.status === "past";

  // .slice() creates a shallow copy of the fights array so we don't accidentally change the original data
  // .sort() then reorders the copy — we sort by order number descending so the lowest number (1 = main event) ends up last
  // This means the card reads from top to bottom: early prelims → prelims → main card → co-main → main event
  // .map() then transforms each fight object into an HTML string — it returns an array of HTML strings
  return ev.fights.slice().sort((a, b) => b.order - a.order).map(f => {

    // Boolean checks for where this fight sits on the card
    const isMain = f.order === 1;  // true only for the main event (order 1)
    const isCo   = f.order === 2;  // true only for the co-main event (order 2)

    // For past fights, check which fighter won by comparing f.winner to the strings "f1" and "f2"
    // The && operator means both conditions must be true — the event must be past AND f.winner must match
    const w1 = past && f.winner === "f1";  // fighter 1 won
    const w2 = past && f.winner === "f2";  // fighter 2 won

    // Build the CSS class string for fighter 1's block
    // If they won, we add "ef-winner-block" which keeps them bright
    // If it's a past fight and they lost (winner exists but it's not them), we add "ef-loser-block" which dims them
    const f1c = "ef-fighter-block" + (w1 ? " ef-winner-block" : "") + (past && !w1 && f.winner ? " ef-loser-block" : "");

    // Same logic for fighter 2, but we also add "ef-block-right" to right-align their name and info
    const f2c = "ef-fighter-block ef-block-right" + (w2 ? " ef-winner-block" : "") + (past && !w2 && f.winner ? " ef-loser-block" : "");

    // extra holds the HTML for the right column — either a probability bar or a result pill
    let extra = "";  // we use let (not const) because we're going to assign it differently depending on the event status

    if (!past) {
      // UPCOMING FIGHT — show a green/red probability bar showing each fighter's win chance
      const fav = f.f1prob >= 50;  // fighter 1 is the favourite if their probability is 50% or more
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
      // PAST FIGHT — show a coloured pill saying who won and how
      const wn = f.winner === "f1" ? f.f1 : f.f2;  // pick the winner's name based on whether f.winner is "f1" or "f2"
      const ln = f.winner === "f1" ? f.f2 : f.f1;  // pick the loser's name (the other fighter)
      // mClass(f.method) picks the right colour class (red/gold/blue), mEmoji picks the icon
      extra = `<div class="ef-result ${mClass(f.method)}">${mEmoji(f.method)} <strong>${wn}</strong> def. ${ln}<span class="ef-result-detail">${f.method} · ${f.round}</span></div>`;
    }

    // Return the complete HTML string for this one fight row
    // This string gets collected by .map() and then joined together by .join("") at the end
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

  }).join("");  // .join("") takes the array of HTML strings that .map() produced and merges them into one big string
}


// toggleEvent — called when the user clicks an event card — opens or closes the fight card panel
function toggleEvent(id) {

  // Get the hidden expandable panel below the card using its id (built from the event's id)
  const panel = document.getElementById("panel-" + id);

  // Get the expand button on the right side of the card (also built from the event's id)
  const btn = document.getElementById("expand-btn-" + id);

  // Check whether this panel is currently open by seeing if it has the CSS class "open"
  // .contains() returns true if the class exists, false if it doesn't
  const open = panel.classList.contains("open");

  // Before opening this panel, close any others that are currently open
  // We only allow one panel to be open at a time to keep the page tidy
  document.querySelectorAll(".ec-fullcard.open").forEach(p => {
    if (p.id !== "panel-" + id) {  // make sure we don't accidentally close the one we just clicked
      p.classList.remove("open");   // remove "open" — CSS then collapses it back to height 0

      // Also reset that other panel's button text back to its default state
      const ob = document.getElementById("expand-btn-" + p.id.replace("panel-", ""));  // find the button by replacing "panel-" with nothing to get just the id
      if (ob) {
        ob.querySelector(".ec-expand-icon").textContent = "▼";               // reset the arrow to point downward
        ob.querySelector(".ec-expand-label").innerHTML  = "SEE FULL<br>FIGHT CARD";  // reset the label text
      }
    }
  });

  // .toggle() adds the class if it's missing, or removes it if it's already there
  // This is the moment the panel actually opens or closes
  panel.classList.toggle("open");

  if (!open) {
    // The panel was closed and is now OPENING
    btn.querySelector(".ec-expand-icon").textContent = "▲";               // change the arrow to point upward
    btn.querySelector(".ec-expand-label").innerHTML  = "HIDE<br>FIGHT CARD"; // change the button label

    // Scroll the top of this card into view — setTimeout delays it by 100ms so the opening animation can start first
    setTimeout(() => document.getElementById("summary-" + id).scrollIntoView({ behavior: "smooth", block: "start" }), 100);

    // Search the EVENTS array for the event that matches this id
    // .find() returns the first item in the array where the function returns true
    const ev = EVENTS.find(e => e.id === id);

    // Only show the ticket bar if the event is upcoming AND it has a ticket URL defined
    if (ev && ev.status === "upcoming" && ev.ticketUrl) showTicketBar(ev);
    else hideTicketBar();  // hide the bar for past events (no tickets to buy)

  } else {
    // The panel was open and is now CLOSING — reset the button back to its default look
    btn.querySelector(".ec-expand-icon").textContent = "▼";
    btn.querySelector(".ec-expand-label").innerHTML  = "SEE FULL<br>FIGHT CARD";
    hideTicketBar();  // hide the ticket bar whenever a card closes
  }
}


// showTicketBar — creates and slides up a "Buy Tickets" strip at the bottom of the screen
function showTicketBar(ev) {

  // Try to find an existing ticket bar first — if the user opens multiple cards quickly, we don't want duplicates
  let bar = document.getElementById("ticketBar");

  if (!bar) {
    // No ticket bar exists yet — create one from scratch
    bar = document.createElement("div");  // create a new empty <div> element
    bar.id = "ticketBar";                 // give it the id "ticketBar" so we can find it later
    bar.className = "ticket-bar";         // give it the CSS class that controls its styling and position
    document.body.appendChild(bar);       // add it to the very end of the page's body element
  }

  // Fill the bar with the event name, date/location info, and two buttons
  // The BUY TICKETS button switches to the Tickets page by clicking the tab with data-page="tickets"
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

  // Wait 10 milliseconds then add the "visible" class — this tiny delay lets the browser paint the bar first
  // Without the delay, the CSS transition animation wouldn't play because the element was invisible from the start
  setTimeout(() => bar.classList.add("visible"), 10);
}


// hideTicketBar — slides the ticket bar back down off screen and removes it from the page
function hideTicketBar() {
  const bar = document.getElementById("ticketBar");  // look for the ticket bar in the page

  if (bar) {
    // Removing "visible" triggers the CSS slide-down transition animation
    bar.classList.remove("visible");

    // Wait 350ms (the same duration as the CSS transition) before removing the element
    // If we removed it immediately, the animation wouldn't have time to play
    setTimeout(() => bar.remove(), 350);
  }
}


// Attach click listeners to the three filter buttons above the events grid
// data-efilter is a custom HTML attribute — its value is "all", "upcoming", or "past"
document.querySelectorAll("[data-efilter]").forEach(btn => {
  btn.addEventListener("click", () => {

    // Remove the "active" highlight from every filter button
    document.querySelectorAll("[data-efilter]").forEach(b => b.classList.remove("active"));

    // Add "active" to the button that was just clicked so it appears highlighted
    btn.classList.add("active");

    // Re-render all the event cards using the new filter value from this button's data-efilter attribute
    renderEvents(btn.dataset.efilter);

    // Hide the ticket bar because the event list just changed — the previously open card is now gone
    hideTicketBar();
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

// Store references to the three HTML elements we need for the search page
// We do this once here rather than searching for them every time a function runs — it's faster
const searchInput   = document.getElementById("fighterSearchInput");  // the text input box the user types into
const searchClear   = document.getElementById("searchClear");         // the small X button that clears the search
const searchResults = document.getElementById("searchResults");       // the div where the results card will appear


// showPrompt — displays the default "search a fighter" message before the user types anything
function showPrompt() {
  searchResults.className = "";  // remove any CSS class like "fighter-cards-grid" that was added by a previous search

  // Set the inner HTML of the results area to the prompt message
  searchResults.innerHTML = `
    <div class="search-prompt-wrap">
      <div class="search-prompt-icon">🥊</div>
      <p class="search-prompt">Search any UFC fighter — AI powered</p>
      <p class="search-prompt-sub">Live stats, records and fight history</p>
    </div>`;
}


// fetchFighter — sends the fighter's name to the Claude AI API and waits for the response
// "async" marks this function as asynchronous — it can pause and wait for things (like network requests) without freezing the page
async function fetchFighter(name) {

  // Build the instruction text we send to Claude — we tell it exactly what format to reply in
  // We ask for JSON only because JSON (JavaScript Object Notation) is easy for the code to read and use
  const prompt = `You are a UFC data expert. Look up the UFC fighter: "${name}".
Respond ONLY with valid JSON, no markdown, no backticks.
Use this exact structure:
{"found":true,"name":"FULL NAME IN CAPS","nickname":"nickname or empty string","division":"weight class e.g. Lightweight","rank":"Champion or #1 etc","record":"W-L-D e.g. 34-10-0","country":"flag + country e.g. 🇧🇷 Brazil","age":30,"height":"5'10\\"","reach":"74\\"","style":"e.g. BJJ / Submissions","history":[{"opp":"Name","result":"W or L or D","method":"KO or TKO or Submission or Decision","round":"R1 etc"}],"summary":"2 sentence summary of who this fighter is"}
If not a UFC fighter: {"found":false}
Include 5 most recent fights. Today is ${new Date().toDateString()}.`;

  // fetch() sends an HTTP request to the Anthropic API server over the internet
  // "await" pauses this function right here until the server sends back a response
  // Without await, the code would keep running before the response arrived, causing errors
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",                                    // POST means we are sending data TO the server (not just requesting a page)
    headers: { "Content-Type": "application/json" },  // this header tells the server that we're sending JSON formatted data
    body: JSON.stringify({                             // JSON.stringify converts our JavaScript object into a JSON text string that can be sent over the internet
      model: "claude-sonnet-4-20250514",               // which specific version of Claude to use
      max_tokens: 1000,                                // the maximum number of "tokens" (roughly words) Claude is allowed to reply with
      messages: [{ role: "user", content: prompt }]   // the conversation — "user" means this is the human's message, and content is the actual text
    })
  });

  // .json() parses the response body from JSON text back into a JavaScript object we can work with
  // We await again because reading the response body is also an asynchronous operation
  const data = await res.json();

  // data.content[0].text is where Claude's reply text lives inside the response object
  // .trim() removes any whitespace or newlines from the start and end of the string
  // .replace(/```json|```/g, "") removes any markdown code fences Claude might accidentally include
  // JSON.parse() converts the cleaned JSON string back into a JavaScript object we can use like normal data
  return JSON.parse(data.content[0].text.trim().replace(/```json|```/g, ""));
}


// buildFighterCard — takes the fighter data object returned by Claude and returns an HTML string for the profile card
function buildFighterCard(f) {

  // Build the CSS division class so the card gets the right coloured top border for its weight class
  // .toLowerCase() makes the division name all lowercase, .replace() removes spaces and non-letter characters
  // e.g. "Light Heavyweight" becomes "div-lightheavyweight"
  const dc = "div-" + f.division.toLowerCase().replace(/\s+/g, "").replace(/[^a-z]/g, "");

  // Count wins by filtering the history array to only items where result is "W"
  // .length gives us the count of items in that filtered array
  const wins = f.history.filter(h => h.result === "W").length;

  // Count only real fights (wins and losses) — we ignore draws and upcoming fights for the win rate calculation
  const real = f.history.filter(h => h.result === "W" || h.result === "L").length;

  // Calculate the win rate as a percentage — Math.round removes the decimal
  // The ternary (real ? ... : 0) avoids dividing by zero if there are no real fights
  const wr = real ? Math.round(wins / real * 100) : 0;

  // Build the fight history rows by looping through each fight in Claude's response
  const hist = f.history.map(h => {

    // Choose the correct CSS badge class based on the fight result
    // Green badge for wins, yellow for draws, red for losses
    const bc = h.result === "W" ? "fp-res-w" : h.result === "D" ? "fp-res-up" : "fp-res-l";

    // Choose the correct CSS text colour class based on the fight method
    // Red text for knockouts, gold for submissions, blue for decisions
    const mc = h.method && (h.method.includes("KO") || h.method.includes("TKO")) ? "m-ko"
             : h.method && h.method.includes("Sub") ? "m-sub"
             : "m-dec";

    // Return the HTML for one row in the fight history list
    return `
      <div class="fp-fight-row">
        <span class="fp-fight-opp">vs ${h.opp}</span>
        <div class="fp-fight-result">
          <span class="fp-res-badge ${bc}">${h.result}</span>
          <span class="fp-fight-method ${mc}">${h.method} · ${h.round}</span>
        </div>
      </div>`;

  }).join("");  // .join("") merges all the row strings from .map() into one single HTML string

  // Return the complete HTML string for the fighter profile card
  // The CSS class "dc" gives it the coloured top border matching its weight division
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


// searchTimer stores the ID of the waiting timer so we can cancel it if the user keeps typing
// We declare it with let (not const) because its value changes every time the user types
let searchTimer = null;


// doSearch — called every time the user types a character in the search box
function doSearch(q) {

  // .trim() removes any leading or trailing whitespace from the typed text
  // e.g. "  Oliveira  " becomes "Oliveira"
  q = q.trim();

  // .toggle() adds "visible" if q has text, or removes "visible" if q is empty
  // This shows or hides the X clear button depending on whether the box has content
  searchClear.classList.toggle("visible", q.length > 0);

  // Cancel the previous timer — if the user types another character within 600ms,
  // we don't want to fire the old search — we want to wait for them to stop typing
  clearTimeout(searchTimer);

  // If the search box is now empty, reset the page to the default prompt and stop here
  // "return" exits the function immediately so nothing below this runs
  if (!q) { showPrompt(); return; }

  // Replace the results area with a loading spinner to give the user visual feedback
  searchResults.className = "";  // remove the grid layout class from any previous search
  searchResults.innerHTML = `
    <div class="search-prompt-wrap">
      <div class="search-loading-ring"></div>
      <p class="search-prompt">Looking up <strong>${q}</strong>...</p>
      <p class="search-prompt-sub">Asking AI for live UFC data</p>
    </div>`;

  // setTimeout schedules the API call to run after 600ms of inactivity
  // If the user types again before 600ms is up, clearTimeout cancels this and we start again
  // The "async" keyword on the arrow function allows us to use "await" inside it
  searchTimer = setTimeout(async () => {
    try {
      // Call fetchFighter and wait for Claude's response — this could take 1-2 seconds
      const f = await fetchFighter(q);

      if (!f.found) {
        // Claude returned { found: false } meaning this isn't a UFC fighter — show a message
        searchResults.innerHTML = `
          <div class="search-prompt-wrap">
            <div class="search-prompt-icon">❓</div>
            <p class="search-prompt">No UFC fighter found for "<strong>${q}</strong>"</p>
          </div>`;
        return;  // stop here — don't try to build a card with invalid data
      }

      // Claude found the fighter — switch the results div to a grid layout and show the card
      searchResults.className = "fighter-cards-grid";  // this CSS class gives the card its grid positioning
      searchResults.innerHTML = buildFighterCard(f);   // call buildFighterCard with the data and put the result in the div

    } catch (e) {
      // If anything goes wrong (no internet, API error, bad JSON) the catch block runs
      // "e" is the error object — we don't use it here but it contains details about what failed
      searchResults.innerHTML = `
        <div class="search-prompt-wrap">
          <div class="search-prompt-icon">⚠️</div>
          <p class="search-prompt">Something went wrong. Try again.</p>
        </div>`;
    }
  }, 600);  // 600 milliseconds = 0.6 seconds of waiting after the last keystroke
}


// "input" event fires every single time the user types, pastes, or deletes a character
// e.target is the input element itself, .value is the current text inside it
searchInput.addEventListener("input", e => doSearch(e.target.value));

// When the X button is clicked, clear the input box, reset the results, and refocus the cursor
searchClear.addEventListener("click", () => {
  searchInput.value = "";   // clear all text from the input box
  doSearch("");              // pass an empty string to doSearch — this triggers the showPrompt() reset
  searchInput.focus();       // put the keyboard cursor back inside the search box so the user can type immediately
});

// Hint pills are the quick-search buttons (Oliveira, Makhachev, etc.) below the search box
document.querySelectorAll(".hint-pill").forEach(p => {
  p.addEventListener("click", () => {

    // If the user is currently on a different page (Events or Tickets), switch to the search page first
    // .contains() checks if the "active" class is present on the search page
    if (!document.getElementById("page-search").classList.contains("active")) {
      document.querySelector("[data-page='search']").click();  // simulate a click on the Fighter Search nav tab
    }

    // Use a 60ms delay so the page has time to fully switch before we start the search
    // Without this delay, the search might run before the search page is visible
    setTimeout(() => {
      searchInput.value = p.dataset.hint;   // fill the input box with the hint text from the button's data-hint attribute
      doSearch(p.dataset.hint);             // run doSearch immediately with that text — don't wait for the user to type
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

// These two variables track the current state of the ticket modal
// We use let because their values change every time the user interacts with the modal
let modalBase = 89;  // the current price per ticket in dollars — changes when you pick a different seat tier
let modalQty  = 1;   // how many tickets the user wants to buy — starts at 1, changes with + and − buttons


// openModal — called by the onclick attribute on each "BUY TICKETS" button in the HTML
// It receives the event details as arguments so it knows what to display in the popup
function openModal(name, date, loc, fight, base) {

  modalBase = base;  // save the starting base price for this event so other functions can use it
  modalQty  = 1;     // reset to 1 ticket every time a new modal opens (don't carry over from last time)

  // Use getElementById to find each element in the modal popup by its id, then set its text content
  document.getElementById("modal-name").textContent  = name;           // set the event name at the top of the popup
  document.getElementById("modal-date").textContent  = "📅 " + date;  // set the date with a calendar emoji
  document.getElementById("modal-loc").textContent   = "📍 " + loc;   // set the location with a pin emoji
  document.getElementById("modal-fight").textContent = fight;           // set the matchup e.g. "Topuria vs. Gaethje"

  // Set the three tier prices in the popup
  // General Admission is the base price
  document.getElementById("price-ga").textContent    = "$" + base;
  // Floor Seats cost 2.8 times the base price — | 0 is a fast way to remove the decimal (floor the number)
  document.getElementById("price-floor").textContent = "$" + (base * 2.8 | 0);
  // Ringside VIP costs 6.7 times the base price
  document.getElementById("price-vip").textContent   = "$" + (base * 6.7 | 0);

  // Reset the quantity display to 1
  document.getElementById("modal-qty").textContent   = "1";

  // Reset the total price display to just the base price (1 ticket at General Admission)
  document.getElementById("modal-total").textContent = "$" + base;

  // Loop through all the tier buttons and select only the first one (General Admission at index 0)
  // .toggle(className, condition) adds the class when condition is true, removes it when false
  // i === 0 is only true for the first tier, so only that one gets the "selected" class
  document.querySelectorAll(".modal-tier").forEach((t, i) => t.classList.toggle("selected", i === 0));

  // Add the "open" class to the modal overlay — the CSS then makes it visible and fades it in
  document.getElementById("ticketModal").classList.add("open");
}


// pickTier — called when the user clicks one of the three seat tier options in the modal
// el is the HTML element that was clicked, idx is its position (0, 1, or 2)
function pickTier(el, idx) {

  // First remove "selected" from all tier buttons so none of them are highlighted
  document.querySelectorAll(".modal-tier").forEach(t => t.classList.remove("selected"));

  // Then add "selected" only to the button that was just clicked
  el.classList.add("selected");

  // Build an array of the three prices in the same order as the buttons
  // idx tells us which position was clicked, so prices[idx] gives us the right price
  const prices = [modalBase, modalBase * 2.8 | 0, modalBase * 6.7 | 0];

  // Update modalBase to the chosen tier's price so updateTotal uses the correct price
  modalBase = prices[idx];

  // Recalculate and display the new total based on the new tier price
  updateTotal();
}


// changeQty — called when the user clicks the + or − buttons next to the quantity number
// delta is +1 when + is clicked and -1 when − is clicked
function changeQty(delta) {

  // Math.max() ensures the quantity never goes below 1 (can't buy 0 tickets)
  // Math.min() ensures the quantity never goes above 10 (maximum per order)
  // Adding delta moves the quantity up or down by exactly 1
  modalQty = Math.max(1, Math.min(10, modalQty + delta));

  // Update the number shown between the + and − buttons in the modal
  document.getElementById("modal-qty").textContent = modalQty;

  // Recalculate the total because quantity changed
  updateTotal();
}


// updateTotal — recalculates the total price and updates the display in the modal
function updateTotal() {
  // Multiply the price per ticket by the number of tickets to get the total
  // .toLocaleString() formats large numbers with commas, e.g. 1000 becomes "1,000"
  document.getElementById("modal-total").textContent = "$" + (modalBase * modalQty).toLocaleString();
}


// closeModal — closes the modal if the user clicks the dark semi-transparent background behind it
// e is the click event object — e.target is the specific element that was actually clicked
function closeModal(e) {
  // Only close if the user clicked the dark overlay itself (id="ticketModal")
  // This prevents closing when the user clicks inside the white box (the actual modal content)
  if (e.target === document.getElementById("ticketModal")) {
    document.getElementById("ticketModal").classList.remove("open");  // removing "open" hides the modal via CSS
  }
}


// confirmOrder — called when the "CONFIRM ORDER" button inside the modal is clicked
function confirmOrder() {

  // Read the current values displayed in the modal so we can show them in the confirmation message
  const name  = document.getElementById("modal-name").textContent;                     // e.g. "UFC FREEDOM 250"
  const total = document.getElementById("modal-total").textContent;                    // e.g. "$498"
  const tier  = document.querySelector(".modal-tier.selected .tier-name").textContent; // e.g. "Floor Seats"

  // Build and display a confirmation message that summarises what was ordered
  // e.g. "2× Floor Seats for UFC FREEDOM 250 — $498 total."
  document.getElementById("confirm-msg").textContent = modalQty + "× " + tier + " for " + name + " — " + total + " total.";

  // Close the ticket selection modal by removing its "open" class
  document.getElementById("ticketModal").classList.remove("open");

  // Open the success confirmation modal by adding "open" to it
  document.getElementById("confirmModal").classList.add("open");
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

// DOMContentLoaded fires as soon as the browser has finished reading and building all the HTML
// We wait for this event before running any code that touches HTML elements
// If we ran the code immediately (not inside this listener), the HTML elements might not exist yet
document.addEventListener("DOMContentLoaded", () => {
  renderEvents("all");  // build and display all event cards on the Events page using the "all" filter
  showPrompt();         // show the default "search a fighter" message on the Fighter Search page
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


// ============================================================
//  DARK MODE
// ============================================================

// toggleDark — switches the whole site between light mode and dark mode
function toggleDark() {
  // .toggle() on the body element adds the "dark" class if it's missing, or removes it if it exists
  // The CSS file has a whole section of rules that only apply when body has the class "dark"
  document.body.classList.toggle("dark");

  // Find the moon/sun toggle button in the header
  const btn = document.getElementById("darkToggle");

  // Swap the button's icon — if dark mode is now active show ☀️ (to switch back to light), otherwise show 🌙
  btn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";

  // Save the user's preference to localStorage — this is like a tiny built-in database in the browser
  // localStorage.setItem(key, value) saves a value that survives page refreshes and browser restarts
  // We store the string "true" or "false" depending on whether dark mode is currently on
  localStorage.setItem("dark", document.body.classList.contains("dark"));
}

// This code runs immediately when the script loads (not inside any function)
// It checks if the user turned on dark mode last time and restores their preference
if (localStorage.getItem("dark") === "true") {
  // localStorage.getItem("dark") returns the string "true" if we saved it before
  document.body.classList.add("dark");   // immediately apply dark mode before the page finishes loading

  // Wait for the HTML to load, then also update the button icon to ☀️ to match dark mode
  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("darkToggle");   // find the toggle button
    if (btn) btn.textContent = "☀️";                    // change it to the sun icon since dark mode is active
  });
}
