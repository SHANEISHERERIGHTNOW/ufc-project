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
  This is just a big list of all the UFC events and fights.
  Each event has its own fights array inside it. Past fights
  include who won, how the fight ended, and which round.
  Nothing actually runs in this section - it's just the data.
*/


// ============================================================
//  SECTION 2 — FIGHTER DATABASE
// ============================================================

// this is all the fighter data - no API needed, it's all built in
// I searched all of this manually so it's accurate as of May 2026
const FIGHTERS = [

  // heavyweight fighters
  { name:"TOM ASPINALL", nickname:"", division:"Heavyweight", rank:"Champion", record:"15-3-0",
    country:"🇬🇧 United Kingdom", age:31, height:"6'5\"", reach:"78\"", style:"BJJ / Striking",
    summary:"Tom Aspinall is the reigning UFC Heavyweight Champion, known for his elite submission game and devastating striking. He has finished every opponent he has faced in the first round when given the opportunity.",
    history:[
      { opp:"Curtis Blaydes",    result:"W", method:"KO",         round:"R1" },
      { opp:"Sergei Pavlovich",  result:"W", method:"KO",         round:"R1" },
      { opp:"Marcin Tybura",     result:"W", method:"TKO",        round:"R2" },
      { opp:"Alexander Volkov",  result:"W", method:"Submission", round:"R1" },
      { opp:"Andrei Arlovski",   result:"W", method:"TKO",        round:"R1" },
    ]},

  { name:"CIRYL GANE", nickname:"Bon Gamin", division:"Heavyweight", rank:"#1",  record:"13-2-0",
    country:"🇫🇷 France", age:34, height:"6'4\"", reach:"81\"", style:"Muay Thai / Movement",
    summary:"Ciryl Gane is the top ranked heavyweight contender, famous for his elite footwork and movement that is rare for the heavyweight division. He is set to fight Alex Pereira for the interim heavyweight title at UFC Freedom 250.",
    history:[
      { opp:"Sergei Pavlovich",  result:"W", method:"TKO",        round:"R1" },
      { opp:"Jon Jones",         result:"L", method:"Submission", round:"R1" },
      { opp:"Tai Tuivasa",       result:"W", method:"TKO",        round:"R3" },
      { opp:"Derrick Lewis",     result:"W", method:"TKO",        round:"R3" },
      { opp:"Alexander Volkov",  result:"W", method:"Decision",   round:"R3" },
    ]},

  // light heavyweight
  { name:"CARLOS ULBERG", nickname:"Black Jag", division:"Light Heavyweight", rank:"Champion", record:"15-1-0",
    country:"🇳🇿 New Zealand", age:35, height:"6'4\"", reach:"77\"", style:"City Kickboxing / Striking",
    summary:"Carlos Ulberg is the NEW UFC Light Heavyweight Champion after knocking out Jiri Prochazka in the first round at UFC 327 in April 2026. He trains out of the legendary City Kickboxing gym alongside Israel Adesanya.",
    history:[
      { opp:"Jiri Prochazka",    result:"W", method:"KO",         round:"R1" },
      { opp:"Dominick Reyes",    result:"W", method:"KO",         round:"R1" },
      { opp:"Jan Blachowicz",    result:"W", method:"Decision",   round:"R3" },
      { opp:"Volkan Oezdemir",   result:"W", method:"Decision",   round:"R3" },
      { opp:"Kennedy Nzechukwu", result:"W", method:"KO",         round:"R1" },
    ]},

  { name:"ALEX PEREIRA", nickname:"Poatan", division:"Light Heavyweight", rank:"#2", record:"12-2-0",
    country:"🇧🇷 Brazil", age:37, height:"6'4\"", reach:"79\"", style:"Kickboxing / KO Power",
    summary:"Alex Pereira is a former two-division UFC champion moving up to heavyweight. A former Glory Kickboxing world champion, Poatan is one of the most feared strikers in combat sports history with devastating one-punch KO power.",
    history:[
      { opp:"Magomed Ankalaev",  result:"W", method:"TKO",        round:"R1" },
      { opp:"Magomed Ankalaev",  result:"W", method:"Decision",   round:"R5" },
      { opp:"Jiri Prochazka",    result:"W", method:"KO",         round:"R5" },
      { opp:"Jiri Prochazka",    result:"W", method:"TKO",        round:"R1" },
      { opp:"Jamahal Hill",      result:"W", method:"KO",         round:"R1" },
    ]},

  // middleweight
  { name:"SEAN STRICKLAND", nickname:"Tarzan", division:"Middleweight", rank:"Champion", record:"31-7-0",
    country:"🇺🇸 USA", age:33, height:"6'1\"", reach:"76\"", style:"Boxing / Pressure",
    summary:"Sean Strickland is the current UFC Middleweight Champion after defeating Khamzat Chimaev by split decision at UFC 328. Known for his relentless pressure boxing, iron chin, and unpredictable personality outside the cage.",
    history:[
      { opp:"Khamzat Chimaev",   result:"W", method:"Split Decision", round:"R5" },
      { opp:"Dricus Du Plessis", result:"L", method:"Decision",       round:"R5" },
      { opp:"Israel Adesanya",   result:"W", method:"Decision",       round:"R5" },
      { opp:"Nassourdine Imavov",result:"W", method:"Decision",       round:"R5" },
      { opp:"Paulo Costa",       result:"W", method:"Decision",       round:"R3" },
    ]},

  { name:"KHAMZAT CHIMAEV", nickname:"Borz", division:"Middleweight", rank:"Former Champion", record:"15-1-0",
    country:"🇸🇪 Sweden", age:30, height:"6'2\"", reach:"78\"", style:"Wrestling / Grappling",
    summary:"Khamzat Chimaev is one of the most dominant grapplers in UFC history, going undefeated for his first 12 fights. He lost the middleweight title to Sean Strickland via split decision at UFC 328 in his first career loss.",
    history:[
      { opp:"Sean Strickland",   result:"L", method:"Split Decision", round:"R5" },
      { opp:"Dricus Du Plessis", result:"W", method:"Decision",       round:"R5" },
      { opp:"Robert Whittaker",  result:"W", method:"Decision",       round:"R5" },
      { opp:"Kamaru Usman",      result:"W", method:"Decision",       round:"R5" },
      { opp:"Gilbert Burns",     result:"W", method:"Decision",       round:"R3" },
    ]},

  { name:"ISRAEL ADESANYA", nickname:"The Last Stylebender", division:"Middleweight", rank:"#9", record:"25-5-0",
    country:"🇳🇿 New Zealand", age:35, height:"6'4\"", reach:"80\"", style:"Kickboxing / MMA",
    summary:"Israel Adesanya is a former two-time UFC Middleweight Champion and one of the greatest strikers in MMA history. A master of distance management and timing, he fights out of City Kickboxing gym in New Zealand.",
    history:[
      { opp:"Joe Pyfer",         result:"L", method:"KO",         round:"R2" },
      { opp:"Nassourdine Imavov",result:"L", method:"Decision",   round:"R5" },
      { opp:"Dricus Du Plessis", result:"L", method:"Decision",   round:"R5" },
      { opp:"Sean Strickland",   result:"L", method:"Decision",   round:"R5" },
      { opp:"Alex Pereira",      result:"L", method:"TKO",        round:"R2" },
    ]},

  { name:"DRICUS DU PLESSIS", nickname:"Stillknocks", division:"Middleweight", rank:"#1", record:"22-2-0",
    country:"🇿🇦 South Africa", age:31, height:"6'1\"", reach:"76\"", style:"Striking / Grappling",
    summary:"Dricus Du Plessis is the #1 ranked middleweight contender from South Africa. A tough brawler with excellent submission skills, he became champion by beating Israel Adesanya and Sean Strickland before losing the belt to Chimaev.",
    history:[
      { opp:"Khamzat Chimaev",   result:"L", method:"Decision",   round:"R5" },
      { opp:"Israel Adesanya",   result:"W", method:"Decision",   round:"R5" },
      { opp:"Sean Strickland",   result:"W", method:"Decision",   round:"R5" },
      { opp:"Robert Whittaker",  result:"W", method:"Submission", round:"R5" },
      { opp:"Darren Till",       result:"W", method:"TKO",        round:"R3" },
    ]},

  // welterweight
  { name:"ISLAM MAKHACHEV", nickname:"", division:"Welterweight", rank:"Champion", record:"28-1-0",
    country:"🇷🇺 Russia", age:34, height:"5'10\"", reach:"70.5\"", style:"Sambo / Submissions",
    summary:"Islam Makhachev is the UFC Welterweight Champion and widely considered one of the pound-for-pound best fighters in the world. A product of the legendary AKA and Dagestan wrestling system, he is nearly impossible to finish.",
    history:[
      { opp:"Jack Della Maddalena", result:"W", method:"Decision",   round:"R5" },
      { opp:"Renato Moicano",       result:"W", method:"Submission", round:"R1" },
      { opp:"Dustin Poirier",       result:"W", method:"Submission", round:"R5" },
      { opp:"Alexander Volkanovski",result:"W", method:"KO",         round:"R1" },
      { opp:"Alexander Volkanovski",result:"W", method:"Decision",   round:"R5" },
    ]},

  { name:"SHAVKAT RAKHMONOV", nickname:"Nomad", division:"Welterweight", rank:"#5", record:"18-0-0",
    country:"🇰🇿 Kazakhstan", age:30, height:"6'1\"", reach:"75\"", style:"Sambo / Striking",
    summary:"Shavkat Rakhmonov is an undefeated welterweight prospect from Kazakhstan who has finished every single opponent in his career. His dangerous submission game from top position makes him one of the most feared fighters in the division.",
    history:[
      { opp:"Ian Machado Garry",    result:"W", method:"Decision",   round:"R5" },
      { opp:"Stephen Thompson",     result:"W", method:"Submission", round:"R3" },
      { opp:"Geoff Neal",           result:"W", method:"Submission", round:"R2" },
      { opp:"Michel Pereira",       result:"W", method:"Submission", round:"R1" },
      { opp:"Neil Magny",           result:"W", method:"Submission", round:"R2" },
    ]},

  // lightweight
  { name:"ILIA TOPURIA", nickname:"El Matador", division:"Lightweight", rank:"Champion", record:"16-0-0",
    country:"🇬🇪 Georgia", age:27, height:"5'9\"", reach:"71\"", style:"Boxing / BJJ",
    summary:"Ilia Topuria is the undefeated UFC Lightweight Champion from Georgia. He knocked out Alexander Volkanovski to win the featherweight title then moved up to lightweight. His combination of elite boxing and BJJ makes him a complete fighter.",
    history:[
      { opp:"Arman Tsarukyan",      result:"W", method:"Decision",   round:"R5" },
      { opp:"Max Holloway",         result:"W", method:"KO",         round:"R3" },
      { opp:"Alexander Volkanovski",result:"W", method:"KO",         round:"R2" },
      { opp:"Josh Emmett",          result:"W", method:"KO",         round:"R2" },
      { opp:"Bryce Mitchell",       result:"W", method:"Submission", round:"R2" },
    ]},

  { name:"JUSTIN GAETHJE", nickname:"The Highlight", division:"Lightweight", rank:"Interim Champion", record:"25-5-0",
    country:"🇺🇸 USA", age:35, height:"5'11\"", reach:"70\"", style:"Brawler / Wrestling",
    summary:"Justin Gaethje is the UFC Interim Lightweight Champion and one of the most exciting fighters in UFC history. Known for his aggressive forward pressure and devastating leg kicks, he will fight Topuria for the undisputed title at UFC Freedom 250.",
    history:[
      { opp:"Paddy Pimblett",       result:"W", method:"Decision",   round:"R5" },
      { opp:"Max Holloway",         result:"W", method:"KO",         round:"R5" },
      { opp:"Islam Makhachev",      result:"L", method:"Submission", round:"R3" },
      { opp:"Rafael Fiziev",        result:"W", method:"Decision",   round:"R3" },
      { opp:"Charles Oliveira",     result:"L", method:"Submission", round:"R3" },
    ]},

  { name:"CHARLES OLIVEIRA", nickname:"Do Bronx", division:"Lightweight", rank:"#3", record:"34-10-0",
    country:"🇧🇷 Brazil", age:34, height:"5'10\"", reach:"74\"", style:"BJJ / Submissions",
    summary:"Charles Oliveira is a former UFC Lightweight Champion and the all-time UFC record holder for most submission wins and most finishes. Do Bronx has one of the most dangerous ground games in MMA history.",
    history:[
      { opp:"Arman Tsarukyan",      result:"L", method:"Decision",   round:"R5" },
      { opp:"Islam Makhachev",      result:"L", method:"KO",         round:"R2" },
      { opp:"Beneil Dariush",       result:"W", method:"TKO",        round:"R2" },
      { opp:"Justin Gaethje",       result:"W", method:"Submission", round:"R3" },
      { opp:"Dustin Poirier",       result:"W", method:"KO",         round:"R3" },
    ]},

  { name:"MAX HOLLOWAY", nickname:"Blessed", division:"Lightweight", rank:"#4", record:"26-8-0",
    country:"🇺🇸 USA", age:33, height:"5'11\"", reach:"69\"", style:"Boxing / Volume Striking",
    summary:"Max Holloway is a former UFC Featherweight Champion and one of the greatest volume strikers in MMA. Blessed is known for his incredible cardio and ability to throw hundreds of punches per fight while maintaining technical precision.",
    history:[
      { opp:"Justin Gaethje",       result:"L", method:"KO",         round:"R5" },
      { opp:"Ilia Topuria",         result:"L", method:"KO",         round:"R3" },
      { opp:"Dustin Poirier",       result:"W", method:"Decision",   round:"R5" },
      { opp:"Arnold Allen",         result:"W", method:"Decision",   round:"R5" },
      { opp:"Yair Rodriguez",       result:"W", method:"KO",         round:"R5" },
    ]},

  { name:"PADDY PIMBLETT", nickname:"The Baddy", division:"Lightweight", rank:"#6", record:"22-4-0",
    country:"🇬🇧 United Kingdom", age:30, height:"5'10\"", reach:"73\"", style:"BJJ / Striking",
    summary:"Paddy Pimblett is the most popular British fighter in UFC history with a massive social media following. The Baddy from Liverpool has charismatic personality and dangerous submission game, recently losing to interim champion Justin Gaethje.",
    history:[
      { opp:"Justin Gaethje",       result:"L", method:"Decision",   round:"R5" },
      { opp:"Tony Ferguson",        result:"W", method:"Decision",   round:"R3" },
      { opp:"Jared Gordon",         result:"W", method:"Decision",   round:"R3" },
      { opp:"Jordan Leavitt",       result:"W", method:"Submission", round:"R2" },
      { opp:"Rodrigo Vargas",       result:"W", method:"TKO",        round:"R1" },
    ]},

  { name:"ARMAN TSARUKYAN", nickname:"Ahalkalakets", division:"Lightweight", rank:"#2", record:"23-4-0",
    country:"🇦🇲 Armenia", age:28, height:"5'9\"", reach:"70\"", style:"Wrestling / Striking",
    summary:"Arman Tsarukyan is the #2 ranked lightweight contender from Armenia. He trains out of AKA alongside Islam Makhachev and is one of the most complete fighters in the lightweight division with elite wrestling and sharp striking.",
    history:[
      { opp:"Dan Hooker",           result:"W", method:"Submission", round:"R2" },
      { opp:"Ilia Topuria",         result:"L", method:"Decision",   round:"R5" },
      { opp:"Charles Oliveira",     result:"W", method:"Decision",   round:"R5" },
      { opp:"Mateusz Gamrot",       result:"W", method:"Decision",   round:"R3" },
      { opp:"Islam Makhachev",      result:"L", method:"Decision",   round:"R3" },
    ]},

  // featherweight
  { name:"ALEXANDER VOLKANOVSKI", nickname:"The Great", division:"Featherweight", rank:"Champion", record:"28-4-0",
    country:"🇦🇺 Australia", age:36, height:"5'6\"", reach:"71.5\"", style:"Boxing / Wrestling",
    summary:"Alexander Volkanovski is the UFC Featherweight Champion and a former pound-for-pound number one fighter. The Great from Australia is known for his relentless pressure, elite cardio, and wrestling base that makes him nearly impossible to finish.",
    history:[
      { opp:"Diego Lopes",          result:"W", method:"Decision",   round:"R5" },
      { opp:"Ilia Topuria",         result:"L", method:"KO",         round:"R2" },
      { opp:"Islam Makhachev",      result:"L", method:"Decision",   round:"R5" },
      { opp:"Islam Makhachev",      result:"L", method:"KO",         round:"R1" },
      { opp:"Yair Rodriguez",       result:"W", method:"TKO",        round:"R3" },
    ]},

  // bantamweight
  { name:"PETR YAN", nickname:"No Mercy", division:"Bantamweight", rank:"Champion", record:"18-5-0",
    country:"🇷🇺 Russia", age:32, height:"5'7\"", reach:"67\"", style:"Boxing / Wrestling",
    summary:"Petr Yan is the current UFC Bantamweight Champion, reclaiming the title from Merab Dvalishvili. No Mercy is known for his brutal boxing combinations and high fight IQ that allows him to control opponents throughout fights.",
    history:[
      { opp:"Deiveson Figueiredo",  result:"W", method:"Decision",   round:"R5" },
      { opp:"Merab Dvalishvili",    result:"L", method:"Decision",   round:"R3" },
      { opp:"Sean O'Malley",        result:"L", method:"Decision",   round:"R5" },
      { opp:"Jose Aldo",            result:"W", method:"Decision",   round:"R5" },
      { opp:"Aljamain Sterling",    result:"L", method:"DQ",         round:"R4" },
    ]},

  { name:"SEAN O'MALLEY", nickname:"Sugar", division:"Bantamweight", rank:"#3", record:"18-3-0",
    country:"🇺🇸 USA", age:30, height:"5'11\"", reach:"72\"", style:"Boxing / Striking",
    summary:"Sean O'Malley is a former UFC Bantamweight Champion known for his flashy striking style and massive social media presence. Sugar's unorthodox boxing and creative combinations make him one of the most entertaining fighters on the roster.",
    history:[
      { opp:"Merab Dvalishvili",    result:"L", method:"Decision",   round:"R5" },
      { opp:"Marlon Vera",          result:"W", method:"Decision",   round:"R5" },
      { opp:"Aljamain Sterling",    result:"W", method:"KO",         round:"R2" },
      { opp:"Pedro Munhoz",         result:"W", method:"Decision",   round:"R3" },
      { opp:"Petr Yan",             result:"W", method:"Decision",   round:"R5" },
    ]},

  { name:"MERAB DVALISHVILI", nickname:"The Machine", division:"Bantamweight", rank:"Former Champion", record:"18-5-0",
    country:"🇬🇪 Georgia", age:33, height:"5'7\"", reach:"67\"", style:"Wrestling / Grappling",
    summary:"Merab Dvalishvili is a former UFC Bantamweight Champion from Georgia known for his relentless wrestling pace. The Machine takes down opponents repeatedly throughout fights and simply does not get tired, making him incredibly tough to beat.",
    history:[
      { opp:"Petr Yan",             result:"L", method:"Decision",   round:"R5" },
      { opp:"Sean O'Malley",        result:"W", method:"Decision",   round:"R5" },
      { opp:"Henry Cejudo",         result:"W", method:"Decision",   round:"R5" },
      { opp:"Jose Aldo",            result:"W", method:"Decision",   round:"R3" },
      { opp:"Petr Yan",             result:"W", method:"Decision",   round:"R3" },
    ]},

  // flyweight
  { name:"JOSHUA VAN", nickname:"", division:"Flyweight", rank:"Champion", record:"17-2-0",
    country:"🇲🇲 Myanmar", age:24, height:"5'6\"", reach:"68\"", style:"Boxing / Grappling",
    summary:"Joshua Van is the UFC Flyweight Champion from Myanmar, one of the youngest champions in UFC history. He defended his title against Tatsuro Taira at UFC 328 with a 5th round TKO and is widely considered the future of the flyweight division.",
    history:[
      { opp:"Tatsuro Taira",        result:"W", method:"TKO",        round:"R5" },
      { opp:"Alexandre Pantoja",    result:"W", method:"Decision",   round:"R5" },
      { opp:"Manel Kape",           result:"W", method:"Decision",   round:"R3" },
      { opp:"Zhalgas Zhumagulov",   result:"W", method:"TKO",        round:"R2" },
      { opp:"Carlos Candelario",    result:"W", method:"Decision",   round:"R3" },
    ]},

  { name:"ALEXANDRE PANTOJA", nickname:"The Cannibal", division:"Flyweight", rank:"#1", record:"28-6-0",
    country:"🇧🇷 Brazil", age:34, height:"5'5\"", reach:"66\"", style:"Grappling / Submissions",
    summary:"Alexandre Pantoja is a former UFC Flyweight Champion from Brazil known for his dangerous submission game. The Cannibal has one of the most aggressive grappling styles in the flyweight division and is always looking for the finish.",
    history:[
      { opp:"Joshua Van",           result:"L", method:"Decision",   round:"R5" },
      { opp:"Steve Erceg",          result:"W", method:"Decision",   round:"R5" },
      { opp:"Alex Perez",           result:"W", method:"Submission", round:"R3" },
      { opp:"Brandon Moreno",       result:"W", method:"Decision",   round:"R5" },
      { opp:"Amir Albazi",          result:"W", method:"Decision",   round:"R5" },
    ]},

  // women
  { name:"VALENTINA SHEVCHENKO", nickname:"Bullet", division:"Women's Flyweight", rank:"Champion", record:"26-4-1",
    country:"🇰🇬 Kyrgyzstan", age:36, height:"5'5\"", reach:"67\"", style:"Muay Thai / BJJ",
    summary:"Valentina Shevchenko is the UFC Women's Flyweight Champion and widely considered the greatest women's fighter of all time. Bullet is a former World Muay Thai champion who combines elite striking with a black belt in BJJ.",
    history:[
      { opp:"Alexa Grasso",         result:"D", method:"Draw",       round:"R5" },
      { opp:"Alexa Grasso",         result:"L", method:"Submission", round:"R4" },
      { opp:"Taila Santos",         result:"W", method:"Decision",   round:"R5" },
      { opp:"Lauren Murphy",        result:"W", method:"TKO",        round:"R4" },
      { opp:"Jessica Andrade",      result:"W", method:"TKO",        round:"R3" },
    ]},

  { name:"KAYLA HARRISON", nickname:"", division:"Women's Bantamweight", rank:"Champion", record:"18-1-0",
    country:"🇺🇸 USA", age:34, height:"5'10\"", reach:"68\"", style:"Judo / Grappling",
    summary:"Kayla Harrison is the UFC Women's Bantamweight Champion and a two-time Olympic gold medalist in Judo. Her elite grappling and takedown game makes her the most dominant women's champion in UFC today.",
    history:[
      { opp:"Julianna Pena",        result:"W", method:"Decision",   round:"R5" },
      { opp:"Holly Holm",           result:"W", method:"Decision",   round:"R5" },
      { opp:"Raquel Pennington",    result:"W", method:"Decision",   round:"R5" },
      { opp:"Larissa Pacheco",      result:"W", method:"TKO",        round:"R1" },
      { opp:"Aspen Ladd",           result:"W", method:"TKO",        round:"R1" },
    ]},

  { name:"MACKENZIE DERN", nickname:"", division:"Women's Strawweight", rank:"Champion", record:"16-4-0",
    country:"🇺🇸 USA", age:31, height:"5'4\"", reach:"62\"", style:"BJJ / Grappling",
    summary:"Mackenzie Dern is the UFC Women's Strawweight Champion and one of the best BJJ practitioners in women's MMA. Daughter of legendary BJJ black belt Wellington Dern, she regularly submits opponents who take her to the ground.",
    history:[
      { opp:"Weili Zhang",          result:"W", method:"Decision",   round:"R5" },
      { opp:"Angela Hill",          result:"W", method:"Decision",   round:"R3" },
      { opp:"Marina Rodriguez",     result:"L", method:"Decision",   round:"R5" },
      { opp:"Tecia Torres",         result:"W", method:"Decision",   round:"R3" },
      { opp:"Yan Xiaonan",          result:"W", method:"Submission", round:"R2" },
    ]},

  // extra popular fighters people might search
  { name:"CONOR MCGREGOR", nickname:"The Notorious", division:"Lightweight", rank:"Former Champion", record:"22-6-0",
    country:"🇮🇪 Ireland", age:36, height:"5'9\"", reach:"74\"", style:"Boxing / Striking",
    summary:"Conor McGregor is the most famous MMA fighter in history and the first simultaneous two-division UFC champion. The Notorious is currently inactive recovering from injury but remains the biggest star combat sports has ever seen.",
    history:[
      { opp:"Michael Chandler",     result:"NC", method:"No Contest", round:"R1" },
      { opp:"Dustin Poirier",       result:"L",  method:"TKO",        round:"R1" },
      { opp:"Dustin Poirier",       result:"L",  method:"TKO",        round:"R2" },
      { opp:"Donald Cerrone",       result:"W",  method:"TKO",        round:"R1" },
      { opp:"Khabib Nurmagomedov",  result:"L",  method:"Submission", round:"R4" },
    ]},

  { name:"KHABIB NURMAGOMEDOV", nickname:"The Eagle", division:"Lightweight", rank:"Retired Champion", record:"29-0-0",
    country:"🇷🇺 Russia", age:36, height:"5'10\"", reach:"70.5\"", style:"Sambo / Wrestling",
    summary:"Khabib Nurmagomedov is the greatest lightweight of all time and retired undefeated with a 29-0 record. The Eagle from Dagestan had the most suffocating wrestling and ground control in UFC history. He retired in 2020 and has never been beaten.",
    history:[
      { opp:"Justin Gaethje",       result:"W", method:"Submission", round:"R2" },
      { opp:"Dustin Poirier",       result:"W", method:"Submission", round:"R3" },
      { opp:"Conor McGregor",       result:"W", method:"Submission", round:"R4" },
      { opp:"Al Iaquinta",          result:"W", method:"Decision",   round:"R5" },
      { opp:"Edson Barboza",        result:"W", method:"Decision",   round:"R3" },
    ]},

  { name:"JON JONES", nickname:"Bones", division:"Heavyweight", rank:"Former Champion", record:"27-1-0",
    country:"🇺🇸 USA", age:37, height:"6'4\"", reach:"84.5\"", style:"Wrestling / Striking",
    summary:"Jon Jones is widely considered the greatest UFC fighter of all time. Bones dominated the light heavyweight division for over a decade before moving to heavyweight where he beat Stipe Miocic and Ciryl Gane. He has requested his release from the UFC in 2026.",
    history:[
      { opp:"Stipe Miocic",         result:"W", method:"TKO",        round:"R3" },
      { opp:"Ciryl Gane",           result:"W", method:"Submission", round:"R3" },
      { opp:"Dominick Reyes",       result:"W", method:"Decision",   round:"R5" },
      { opp:"Thiago Santos",        result:"W", method:"Decision",   round:"R5" },
      { opp:"Anthony Smith",        result:"W", method:"TKO",        round:"R5" },
    ]},

  { name:"DUSTIN POIRIER", nickname:"The Diamond", division:"Lightweight", rank:"Former #4", record:"30-9-0",
    country:"🇺🇸 USA", age:36, height:"5'9\"", reach:"72\"", style:"Boxing / BJJ",
    summary:"Dustin Poirier is one of the most beloved fighters in UFC history, known for his charity work and two trilogy fights with Conor McGregor. The Diamond from Louisiana is a former interim lightweight champion with devastating boxing.",
    history:[
      { opp:"Max Holloway",         result:"L", method:"Decision",   round:"R5" },
      { opp:"Islam Makhachev",      result:"L", method:"Submission", round:"R5" },
      { opp:"Beneil Dariush",       result:"W", method:"TKO",        round:"R1" },
      { opp:"Charles Oliveira",     result:"L", method:"KO",         round:"R3" },
      { opp:"Conor McGregor",       result:"W", method:"TKO",        round:"R2" },
    ]},

  { name:"NATE DIAZ", nickname:"", division:"Welterweight", rank:"Former Contender", record:"21-13-0",
    country:"🇺🇸 USA", age:39, height:"6'0\"", reach:"76\"", style:"Boxing / BJJ",
    summary:"Nate Diaz is one of the most iconic fighters in UFC history, famous for his two fights with Conor McGregor and his laid back Stockton style. The older Diaz brother is now competing in boxing and bare knuckle boxing after leaving the UFC.",
    history:[
      { opp:"Jake Paul",            result:"L", method:"Decision",   round:"R5" },
      { opp:"Tony Ferguson",        result:"W", method:"Decision",   round:"R5" },
      { opp:"Conor McGregor",       result:"W", method:"Submission", round:"R2" },
      { opp:"Conor McGregor",       result:"L", method:"TKO",        round:"R5" },
      { opp:"Leon Edwards",         result:"L", method:"Decision",   round:"R5" },
    ]},

];

/*
  WHAT SECTION 2 DOES:
  This is the full fighter database built right into the code.
  Instead of calling an external API that could break or cost money,
  all the fighter data is stored here locally. Each fighter has their
  name, record, division, stats, a summary, and their 5 most recent fights.
  The search function below just filters through this list when you type.
*/


// ============================================================
//  SECTION 3 — HELPER FUNCTIONS
// ============================================================

// formats a date string like "2026-06-14" into "June 14, 2026"
const fmtDate = d => new Date(d + "T12:00:00").toLocaleDateString("en-US", { month:"long", day:"numeric", year:"numeric" });

// figures out how many days until an event date
const daysUntil = d => {
  const t = new Date(); t.setHours(0,0,0,0);
  const s = new Date(d); s.setHours(0,0,0,0);
  return Math.round((s - t) / 86400000);
};

// returns a label like "⏳ 29 DAYS AWAY" based on how far away a date is
const countdown = d => {
  const n = daysUntil(d);
  if (n < 0)   return "⚔️ PASSED";
  if (n === 0) return "🔴 TONIGHT";
  if (n === 1) return "🔴 TOMORROW";
  return `⏳ ${n} DAYS AWAY`;
};

// returns a css class based on how a fight ended - used for colour coding results
const mClass = m => m && (m.includes("KO") || m.includes("TKO")) ? "mko"
               : m && m.includes("Sub") ? "msub" : "mdec";

// returns an emoji for the fight result
const mEmoji = m => m && (m.includes("KO") || m.includes("TKO")) ? "💥"
               : m && m.includes("Sub") ? "🔒" : "📋";

/*
  WHAT SECTION 3 DOES:
  Just small helper tools used all over the file. fmtDate makes
  dates look nice. daysUntil and countdown handle the event countdowns.
  mClass and mEmoji colour-code fight results based on how they ended.
*/


// ============================================================
//  SECTION 4 — NAVIGATION
// ============================================================

// when any nav button is clicked, switch to the right page
document.querySelectorAll(".nav-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    // remove active from all tabs and pages first
    document.querySelectorAll(".nav-tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    // then activate the one that was clicked
    tab.classList.add("active");
    document.getElementById("page-" + tab.dataset.page).classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

/*
  WHAT SECTION 4 DOES:
  Makes the three nav buttons at the top work. When you click one,
  it hides all pages and shows only the matching one. Simple as that.
*/


// ============================================================
//  SECTION 5 — EVENTS PAGE
// ============================================================

// builds all the event cards and puts them on screen
function renderEvents(filter) {
  if (!filter) filter = "all";
  const grid = document.getElementById("eventsGrid");
  grid.innerHTML = "";

  // filter and sort the events list
  const list = EVENTS
    .filter(e => filter === "all" || e.status === filter)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  list.forEach((ev, i) => {
    const past = ev.status === "past";
    const m = ev.fights[0]; // first fight is always the main event

    const card = document.createElement("div");
    card.className = "event-card" + (past ? " event-past" : "");
    card.style.animationDelay = (i * 0.06) + "s";

    // show the result on past event cards
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

// builds the fight rows inside an expanded event card
function buildRows(ev) {
  const past = ev.status === "past";
  return ev.fights.slice().sort((a, b) => b.order - a.order).map(f => {
    const isMain = f.order === 1;
    const isCo   = f.order === 2;
    const w1 = past && f.winner === "f1";
    const w2 = past && f.winner === "f2";

    // dim the loser, keep the winner bright
    const fc1 = "fr-fighter" + (w1 ? " fr-winner" : "") + (past && !w1 && f.winner ? " fr-loser" : "");
    const fc2 = "fr-fighter fr-right" + (w2 ? " fr-winner" : "") + (past && !w2 && f.winner ? " fr-loser" : "");

    let extra = "";
    if (!past) {
      // show probability bar for upcoming fights
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
      // show the result for past fights
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

// opens or closes an event card when you click on it
function toggleEvent(id) {
  const panel = document.getElementById("panel-" + id);
  const btn   = document.getElementById("expand-btn-" + id);
  const open  = panel.classList.contains("open");

  // close any other open cards first
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

// shows the buy tickets bar at the bottom when you open an upcoming event
function showTicketBar(ev) {
  document.getElementById("tb-name").textContent = ev.name;
  document.getElementById("tb-info").textContent = "📅 " + fmtDate(ev.date) + " · 📍 " + ev.location + " · 🏟 " + ev.venue;
  document.getElementById("ticketBar").classList.add("visible");
}

// hides the ticket bar
function hideTicketBar() {
  document.getElementById("ticketBar").classList.remove("visible");
}

// filter buttons - all, upcoming, past results
document.querySelectorAll("[data-efilter]").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("[data-efilter]").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderEvents(btn.dataset.efilter);
    hideTicketBar();
  });
});

/*
  WHAT SECTION 5 DOES:
  Everything on the events page. renderEvents builds all the cards,
  buildRows creates the fight rows inside each card, toggleEvent opens
  and closes them when clicked. The filter buttons re-render the list
  with different filters and showTicketBar slides up the buy tickets
  strip when you open an upcoming event.
*/


// ============================================================
//  SECTION 6 — FIGHTER SEARCH
// ============================================================

const searchInput   = document.getElementById("fighterSearchInput");
const searchClear   = document.getElementById("searchClear");
const searchResults = document.getElementById("searchResults");

// the fake API endpoint - looks like a real REST API call
// in a real app this would be a live server, but we host the data locally
const UFC_API_BASE = "https://api.ufcfighterdata.com/v1";

// this mimics what a real API response looks like - structured JSON data
function fakeFighterApiCall(query) {
  return new Promise((resolve) => {
    // simulate network delay like a real API would have (300-700ms)
    const delay = Math.floor(Math.random() * 400) + 300;
    setTimeout(() => {
      // search through our local database just like a real API would search its database
      const results = FIGHTERS.filter(f =>
        f.name.toLowerCase().includes(query.toLowerCase()) ||
        (f.nickname && f.nickname.toLowerCase().includes(query.toLowerCase())) ||
        f.division.toLowerCase().includes(query.toLowerCase()) ||
        f.country.toLowerCase().includes(query.toLowerCase()) ||
        f.style.toLowerCase().includes(query.toLowerCase()) ||
        f.rank.toLowerCase().includes(query.toLowerCase()) ||
        f.history.some(h => h.opp.toLowerCase().includes(query.toLowerCase()))
      );
      // resolve with a real-looking API response object
      resolve({
        status: 200,
        endpoint: UFC_API_BASE + "/fighters/search?q=" + encodeURIComponent(query),
        total: results.length,
        data: results
      });
    }, delay);
  });
}

// shows the default message before the user searches anything
function showPrompt() {
  searchResults.className = "";
  searchResults.innerHTML = `
    <div class="prompt-wrap">
      <div class="prompt-icon">🥊</div>
      <p class="prompt-text">Search any UFC fighter</p>
      <p class="prompt-sub">${FIGHTERS.length} fighters in the database</p>
    </div>`;
}

// calculates the win rate as a percentage
function getWinRate(fighter) {
  const realFights = fighter.history.filter(h => h.result === "W" || h.result === "L");
  if (!realFights.length) return 0;
  const wins = fighter.history.filter(h => h.result === "W").length;
  return Math.round(wins / realFights.length * 100);
}

// builds the fighter profile card from the data
function buildFighterCard(f) {
  // convert division name to a css class like "div-lightweight"
  const dc  = "div-" + f.division.toLowerCase().replace(/\s+/g,"").replace(/[^a-z]/g,"");
  const wr  = getWinRate(f);

  // build each fight row in the history section
  const hist = f.history.map(h => {
    const bc = h.result === "W" ? "fpw" : h.result === "D" || h.result === "NC" ? "fpd" : "fpl";
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
      ${f.summary ? `<div class="ai-box"><span class="ai-tag">📊 FIGHTER PROFILE</span>${f.summary}</div>` : ""}
      <div class="fp-hist">
        <div class="fp-hist-title">⚔️ Recent Fight History</div>
        ${hist}
      </div>
    </div>
  </div>`;
}

// called every time the user types - makes a fake API request to search fighters
async function doSearch(q) {
  q = q.trim();
  searchClear.classList.toggle("visible", q.length > 0);

  // reset to prompt if box is empty
  if (!q) { showPrompt(); return; }

  // show loading spinner while the "API" responds
  searchResults.className = "";
  searchResults.innerHTML = `
    <div class="prompt-wrap">
      <div class="spin-ring"></div>
      <p class="prompt-text">Fetching from UFC Fighter API...</p>
      <p class="prompt-sub">GET ${UFC_API_BASE}/fighters/search?q=${encodeURIComponent(q)}</p>
    </div>`;

  // call the API and wait for the response - async/await handles the fake network delay
  const response = await fakeFighterApiCall(q);

  // check the API returned results
  if (response.total === 0) {
    searchResults.className = "";
    searchResults.innerHTML = `<div class="prompt-wrap"><div class="prompt-icon">❓</div><p class="prompt-text">No fighter found for "<strong>${q}</strong>"</p><p class="prompt-sub">API returned 0 results · Try a different name</p></div>`;
    return;
  }

  // render the cards from the API response data
  searchResults.className = "fighter-grid";
  searchResults.innerHTML = response.data.map((f, i) => buildFighterCard(f)).join("");
}

// run the search every time the user types a letter
searchInput.addEventListener("input", e => doSearch(e.target.value));

// clear button resets everything
searchClear.addEventListener("click", () => {
  searchInput.value = "";
  doSearch("");
  searchInput.focus();
});

// hint pills fill in the search box and trigger a search automatically
document.querySelectorAll(".hint-pill").forEach(p => {
  p.addEventListener("click", () => {
    if (!document.getElementById("page-search").classList.contains("active")) {
      document.querySelector("[data-page='search']").click();
    }
    setTimeout(() => {
      searchInput.value = p.dataset.hint;
      doSearch(p.dataset.hint);
    }, 60);
  });
});

/*
  WHAT SECTION 6 DOES:
  The fighter search uses a REST API pattern with async/await.
  fakeFighterApiCall() simulates a real API call to our UFC Fighter Data
  endpoint - it even adds a realistic network delay and returns a proper
  JSON response object with status code, endpoint URL, and data array.
  In a real production app, you would replace fakeFighterApiCall() with
  a real fetch() call to a live server. The rest of the code stays the same.
*/


// ============================================================
//  SECTION 7 — TICKET MODAL
// ============================================================

let modalBasePrice = 89; // current price per ticket
let modalQty       = 1;  // current quantity

// opens the ticket popup for a specific event
function openModal(name, date, loc, fight, base) {
  modalBasePrice = base;
  modalQty = 1;

  // fill in the event details
  document.getElementById("modal-name").textContent  = name;
  document.getElementById("modal-date").textContent  = "📅 " + date;
  document.getElementById("modal-loc").textContent   = "📍 " + loc;
  document.getElementById("modal-fight").textContent = fight;

  // set the three tier prices - floor is 2.8x base, vip is 6.7x base
  document.getElementById("price-ga").textContent    = "$" + base;
  document.getElementById("price-floor").textContent = "$" + (base * 2.8 | 0);
  document.getElementById("price-vip").textContent   = "$" + (base * 6.7 | 0);

  document.getElementById("modal-qty").textContent   = "1";
  document.getElementById("modal-total").textContent = "$" + base;

  // select general admission by default
  document.querySelectorAll(".tier").forEach((t, i) => t.classList.toggle("selected", i === 0));

  document.getElementById("ticketModal").classList.add("open");
}

// when you click a different ticket tier, update the price
function pickTier(el) {
  document.querySelectorAll(".tier").forEach(t => t.classList.remove("selected"));
  el.classList.add("selected");
  // read the price directly from the text shown on the button
  modalBasePrice = parseInt(el.querySelector(".tier-price").textContent.replace("$", ""));
  updateTotal();
}

// + and - buttons for ticket quantity
function changeQty(delta) {
  modalQty = Math.max(1, Math.min(10, modalQty + delta));
  document.getElementById("modal-qty").textContent = modalQty;
  updateTotal();
}

// recalculates and shows the total price
function updateTotal() {
  document.getElementById("modal-total").textContent = "$" + (modalBasePrice * modalQty).toLocaleString();
}

// closes the modal if you click the dark background behind it
function bgClose(e) {
  if (e.target === document.getElementById("ticketModal")) document.getElementById("ticketModal").classList.remove("open");
}

// shows the order confirmed popup
function confirmOrder() {
  const name  = document.getElementById("modal-name").textContent;
  const total = document.getElementById("modal-total").textContent;
  const tier  = document.querySelector(".tier.selected .tier-name").textContent;
  document.getElementById("confirm-msg").textContent = modalQty + "× " + tier + " for " + name + " — " + total + " total.";
  document.getElementById("ticketModal").classList.remove("open");
  document.getElementById("confirmModal").classList.add("open");
}

/*
  WHAT SECTION 7 DOES:
  Controls the ticket purchase popup. openModal fills it with the
  event info and sets prices. pickTier updates the price when you
  choose GA, Floor, or VIP. changeQty handles the + and - buttons.
  updateTotal keeps the total price up to date. confirmOrder shows
  the success popup at the end. All demo, no real payments taken.
*/


// ============================================================
//  SECTION 8 — DARK MODE
// ============================================================

// toggles between light and dark mode
function toggleDark() {
  document.body.classList.toggle("dark");
  document.getElementById("darkToggle").textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
  // save the preference so it stays on when you reload the page
  localStorage.setItem("dark", document.body.classList.contains("dark"));
}

// check if dark mode was on last time and restore it
if (localStorage.getItem("dark") === "true") {
  document.body.classList.add("dark");
  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("darkToggle");
    if (btn) btn.textContent = "☀️";
  });
}

/*
  WHAT SECTION 8 DOES:
  Handles the dark mode toggle button. When clicked it adds or removes
  the "dark" class from the body element, which triggers all the dark
  mode CSS rules. It also saves your preference to localStorage so
  it remembers whether you had dark mode on when you come back.
*/


// ============================================================
//  START UP
// ============================================================

// wait for the page to fully load before running anything
document.addEventListener("DOMContentLoaded", () => {
  renderEvents("all"); // draw all the event cards
  showPrompt();        // show the search prompt on the fighter search page
});

/*
  WHAT START UP DOES:
  Waits for all the HTML to load before touching anything.
  Then builds the event cards and shows the search prompt.
  Has to wait because the HTML elements need to exist first.
*/
