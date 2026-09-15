// ===================================================
// QUIZ ARENA — QUESTION BANKS & QUIZ ENGINE
// Curriculum question packs for Medieval History & Secondary Studies
// ===================================================

const MEDIEVAL_ALL_QUESTIONS = [
    {
        "question":  "What was the primary medieval system based on land and loyalty?",
        "options":  [
                        "Feudalism",
                        "Capitalism",
                        "Democracy",
                        "Imperialism"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: Feudalism",
        "image":  "assets/images/q1_feudalism.jpg"
    },
    {
        "question":  "Who held the supreme authority at the peak of the feudal pyramid?",
        "options":  [
                        "The King",
                        "The Pope",
                        "The Barons",
                        "The Knights"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: The King",
        "image":  "assets/images/q2_king_authority.jpg"
    },
    {
        "question":  "What was land granted by a lord to a vassal called?",
        "options":  [
                        "Fief",
                        "Manor",
                        "Tithe",
                        "Guild"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: Fief",
        "image":  "assets/images/q3_granting_fief.jpg"
    },
    {
        "question":  "Which group formed the majority of the population in medieval Europe?",
        "options":  [
                        "Serfs/Peasants",
                        "Knights",
                        "Clergy",
                        "Barons"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: Serfs/Peasants",
        "image":  "assets/images/q4_serfs_majority.jpg"
    },
    {
        "question":  "What bound serfs legally to the land they worked on?",
        "options":  [
                        "Manorialism",
                        "Chivalry",
                        "Heresy",
                        "The Charter"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: Manorialism",
        "image":  "assets/images/q5_manorialism.jpg"
    },
    {
        "question":  "What were knights-in-training caring for horses and armour called?",
        "options":  [
                        "Vassals",
                        "Squires",
                        "Pages",
                        "Barons"
                    ],
        "correctIndex":  1,
        "timeLimit":  20,
        "explanation":  "Correct answer: Squires",
        "image":  "assets/images/q6_squires_armour.jpg"
    },
    {
        "question":  "At what age did a noble boy typically begin training as a page?",
        "options":  [
                        "7",
                        "14",
                        "21",
                        "18"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: 7",
        "image":  "assets/images/q7_page_boy_age7.jpg"
    },
    {
        "question":  "What moral and social code were medieval knights expected to uphold?",
        "options":  [
                        "Code of Chivalry",
                        "Canon Law",
                        "Common Law",
                        "Feudal Contract"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: Code of Chivalry",
        "image":  "assets/images/q8_chivalry_code.jpg"
    },
    {
        "question":  "What was a 10% tax paid to the Catholic Church by villagers called?",
        "options":  [
                        "Tithe",
                        "Toll",
                        "Charter",
                        "Ransom"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: Tithe",
        "image":  "assets/images/q9_church_tithe.jpg"
    },
    {
        "question":  "What agricultural technique left one field unplanted each year?",
        "options":  [
                        "Three-Field System",
                        "Crop Rotation",
                        "Strip Farming",
                        "Slash and Burn"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: Three-Field System",
        "image":  "assets/images/q10_three_field_system.jpg"
    },
    {
        "question":  "What heavy tool revolutionized medieval European agriculture?",
        "options":  [
                        "Heavy Wheeled Plough",
                        "Wooden Hoe",
                        "Iron Scythe",
                        "Sickle"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: Heavy Wheeled Plough"
    },
    {
        "question":  "Which textile artifact depicts the 1066 Norman Conquest?",
        "options":  [
                        "Bayeux Tapestry",
                        "Book of Kells",
                        "Magna Carta",
                        "Domesday Book"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: Bayeux Tapestry"
    },
    {
        "question":  "What technique was actually used to make the Bayeux Tapestry?",
        "options":  [
                        "Embroidery",
                        "Loom Weaving",
                        "Oil Painting",
                        "Fresco"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: Embroidery"
    },
    {
        "question":  "Which French duke invaded England in October 1066?",
        "options":  [
                        "William the Conqueror",
                        "Charlemagne",
                        "Philip II",
                        "Louis IX"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: William the Conqueror"
    },
    {
        "question":  "Who was the last Anglo-Saxon king killed at the Battle of Hastings?",
        "options":  [
                        "Harold Godwinson",
                        "Edward the Confessor",
                        "Harald Hardrada",
                        "Alfred the Great"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: Harold Godwinson"
    },
    {
        "question":  "Where in England did William\u0027s forces land prior to Hastings?",
        "options":  [
                        "Pevensey",
                        "Dover",
                        "Hastings",
                        "London"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: Pevensey"
    },
    {
        "question":  "Which king\u0027s death in January 1066 caused the succession crisis?",
        "options":  [
                        "Edward the Confessor",
                        "Harold Godwinson",
                        "William I",
                        "Henry I"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: Edward the Confessor"
    },
    {
        "question":  "What Norwegian king was defeated at Stamford Bridge in 1066?",
        "options":  [
                        "Harald Hardrada",
                        "Ragnar Lothbrok",
                        "Cnut the Great",
                        "Leif Erikson"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: Harald Hardrada"
    },
    {
        "question":  "What great survey of England was commissioned by William in 1086?",
        "options":  [
                        "Domesday Book",
                        "Magna Carta",
                        "Exchequer Rolls",
                        "Pipe Rolls"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: Domesday Book"
    },
    {
        "question":  "Which bishop and brother of William likely commissioned the tapestry?",
        "options":  [
                        "Bishop Odo",
                        "Bishop Thomas",
                        "Bishop Anselm",
                        "Pope Alexander II"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: Bishop Odo"
    },
    {
        "question":  "Which trial method required 12 oath-helpers to testify for someone?",
        "options":  [
                        "Trial by Compurgation",
                        "Trial by Ordeal",
                        "Trial by Combat",
                        "Trial by Jury"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: Trial by Compurgation"
    },
    {
        "question":  "In Trial by Cold Water, what did floating mean for the accused?",
        "options":  [
                        "Guilt",
                        "Innocence",
                        "Witchcraft",
                        "A botched trial"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: Guilt"
    },
    {
        "question":  "In Trial by Hot Iron, how many days until bandages were inspected?",
        "options":  [
                        "3 days",
                        "7 days",
                        "1 day",
                        "14 days"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: 3 days"
    },
    {
        "question":  "What legal dispute method was used mainly by noblemen and knights?",
        "options":  [
                        "Trial by Combat",
                        "Trial by Compurgation",
                        "Wergild",
                        "Hue and Cry"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: Trial by Combat"
    },
    {
        "question":  "What medieval system required all villagers to chase down criminals?",
        "options":  [
                        "Hue and Cry",
                        "Tithing",
                        "Watch and Ward",
                        "Sheriff\u0027s Posse"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: Hue and Cry"
    },
    {
        "question":  "What wooden framework publicly held a criminal\u0027s head and hands?",
        "options":  [
                        "Pillory",
                        "Stocks",
                        "Gallows",
                        "Scold\u0027s Bridle"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: Pillory"
    },
    {
        "question":  "What wooden device specifically locked an offender\u0027s feet and ankles?",
        "options":  [
                        "Stocks",
                        "Pillory",
                        "Iron Maiden",
                        "Rack"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: Stocks"
    },
    {
        "question":  "What crime was defined as directly rejecting Catholic Church teachings?",
        "options":  [
                        "Heresy",
                        "Treason",
                        "Usury",
                        "Simony"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: Heresy"
    },
    {
        "question":  "What English legal reform in 1166 established regular jury courts?",
        "options":  [
                        "Assize of Clarendon",
                        "Magna Carta",
                        "Domesday Book",
                        "Constitutions of Clarendon"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: Assize of Clarendon"
    },
    {
        "question":  "Which English monarch introduced common law and the early jury system?",
        "options":  [
                        "Henry II",
                        "King John",
                        "Richard I",
                        "William I"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: Henry II"
    },
    {
        "question":  "Which Pope preached the First Crusade at Clermont in 1095?",
        "options":  [
                        "Pope Urban II",
                        "Pope Gregory VII",
                        "Pope Innocent III",
                        "Pope Leo IX"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: Pope Urban II"
    },
    {
        "question":  "What primary destination did the First Crusade aim to capture?",
        "options":  [
                        "Jerusalem",
                        "Constantinople",
                        "Antioch",
                        "Cairo"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: Jerusalem"
    },
    {
        "question":  "What Latin phrase meaning \u0027God wills it\u0027 was the Crusaders\u0027 battle cry?",
        "options":  [
                        "Deus Vult",
                        "Pax Dei",
                        "Carpe Diem",
                        "Veni Vidi Vici"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: Deus Vult"
    },
    {
        "question":  "What collective term described the four Crusader States?",
        "options":  [
                        "Outremer",
                        "Levant",
                        "Holy Roman Empire",
                        "Byzantine March"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: Outremer"
    },
    {
        "question":  "Which French monarch and his queen Eleanor took part in Crusade II?",
        "options":  [
                        "Louis VII",
                        "Philip Augustus",
                        "Charlemagne",
                        "Charles the Bald"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: Louis VII"
    },
    {
        "question":  "Which Muslim leader famously recaptured Jerusalem in 1187?",
        "options":  [
                        "Saladin",
                        "Nur ad-Din",
                        "Baibars",
                        "Al-Kamil"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: Saladin"
    },
    {
        "question":  "Which English king famously fought Saladin during the Third Crusade?",
        "options":  [
                        "Richard the Lionheart",
                        "King John",
                        "Henry II",
                        "Edward I"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: Richard the Lionheart"
    },
    {
        "question":  "Which Christian capital was shockingly sacked in the Fourth Crusade?",
        "options":  [
                        "Constantinople",
                        "Rome",
                        "Alexandria",
                        "Antioch"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: Constantinople"
    },
    {
        "question":  "What powerful order of fighting monks was founded during Crusades?",
        "options":  [
                        "Knights Templar",
                        "Benedictines",
                        "Franciscans",
                        "Dominicans"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: Knights Templar"
    },
    {
        "question":  "Which final major Crusader stronghold in the Levant fell in 1291?",
        "options":  [
                        "Acre",
                        "Tripoli",
                        "Tyre",
                        "Jaffa"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: Acre"
    },
    {
        "question":  "Who was crowned Emperor on Christmas Day in 800 AD by Pope Leo III?",
        "options":  [
                        "Charlemagne",
                        "Otto I",
                        "William I",
                        "Justinian"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: Charlemagne"
    },
    {
        "question":  "Which noblewoman was Queen of both France and England?",
        "options":  [
                        "Eleanor of Aquitaine",
                        "Joan of Arc",
                        "Empress Matilda",
                        "Isabella of France"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: Eleanor of Aquitaine"
    },
    {
        "question":  "Which peasant girl led the French army at the Siege of Orleans?",
        "options":  [
                        "Joan of Arc",
                        "Eleanor of Aquitaine",
                        "Margery Kempe",
                        "Hildegard of Bingen"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: Joan of Arc"
    },
    {
        "question":  "Which English king was forced to seal the Magna Carta in 1215?",
        "options":  [
                        "King John",
                        "Richard I",
                        "Henry II",
                        "Edward I"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: King John"
    },
    {
        "question":  "What famous English archbishop was murdered at Canterbury Cathedral?",
        "options":  [
                        "Thomas Becket",
                        "Anselm",
                        "Cranmer",
                        "Dunstan"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: Thomas Becket"
    },
    {
        "question":  "What devastating pandemic struck Europe between 1347 and 1351?",
        "options":  [
                        "The Black Death",
                        "The Antonine Plague",
                        "The Justinian Plague",
                        "Smallpox"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: The Black Death"
    },
    {
        "question":  "What type of bacteria caused the bubonic plague in medieval Europe?",
        "options":  [
                        "Yersinia pestis",
                        "Vibrio cholerae",
                        "Mycobacterium",
                        "Bacillus anthracis"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: Yersinia pestis"
    },
    {
        "question":  "How was the bubonic plague primarily transmitted to humans?",
        "options":  [
                        "Flea bites from rats",
                        "Contaminated air",
                        "Drinking dirty water",
                        "Mosquito bites"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: Flea bites from rats"
    },
    {
        "question":  "What distinctive swellings in the lymph nodes marked the plague?",
        "options":  [
                        "Buboes",
                        "Boils",
                        "Welts",
                        "Carbuncles"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: Buboes"
    },
    {
        "question":  "What group whipped themselves publicly to seek God\u0027s forgiveness?",
        "options":  [
                        "Flagellants",
                        "Lollards",
                        "Cathars",
                        "Friars"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: Flagellants"
    },
    {
        "question":  "How much of Europe\u0027s population perished during the Black Death?",
        "options":  [
                        "Around 30% to 50%",
                        "Under 10%",
                        "Over 90%",
                        "Around 15%"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: Around 30% to 50%"
    },
    {
        "question":  "What major economic effect did the Black Death have for serfs?",
        "options":  [
                        "Wages increased",
                        "Feudal ties tightened",
                        "Wages decreased",
                        "Taxes dropped to zero"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: Wages increased"
    },
    {
        "question":  "What major English uprising took place in 1381 due to poll taxes?",
        "options":  [
                        "Peasants\u0027 Revolt",
                        "Wat Tyler March",
                        "Barons\u0027 War",
                        "Cornish Rebellion"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: Peasants\u0027 Revolt"
    },
    {
        "question":  "What long-range weapon gave English archers military dominance?",
        "options":  [
                        "Longbow",
                        "Crossbow",
                        "Ballista",
                        "Trebuchet"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: Longbow"
    },
    {
        "question":  "What wooden siege weapon used counterweights to fling massive rocks?",
        "options":  [
                        "Trebuchet",
                        "Mangonel",
                        "Catapult",
                        "Ballista"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: Trebuchet"
    },
    {
        "question":  "What heavy iron or wooden grid dropped down inside a castle gate?",
        "options":  [
                        "Portcullis",
                        "Drawbridge",
                        "Barbican",
                        "Machicolation"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: Portcullis"
    },
    {
        "question":  "What was the strongest inner fortified tower of a castle called?",
        "options":  [
                        "The Keep",
                        "The Bailey",
                        "The Moat",
                        "The Curtain Wall"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: The Keep"
    },
    {
        "question":  "Why did medieval knights replace chain mail with plate armour?",
        "options":  [
                        "Better arrow protection",
                        "Plate was lighter",
                        "Easier to wash",
                        "Cheaper to produce"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: Better arrow protection"
    },
    {
        "question":  "What opening in castle battlements allowed arrows or boiling oil?",
        "options":  [
                        "Machicolations",
                        "Arrow Slits",
                        "Embrasures",
                        "Murder Holes"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: Machicolations"
    },
    {
        "question":  "What document granted town dwellers independence and self-rule?",
        "options":  [
                        "Town Charter",
                        "Papal Bull",
                        "Feudal Contract",
                        "Exchequer Writ"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: Town Charter"
    },
    {
        "question":  "What associations formed in towns to control craft quality and trade?",
        "options":  [
                        "Guilds",
                        "Charters",
                        "Fiefs",
                        "Parishes"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: Guilds"
    },
    {
        "question":  "What was an aspiring craftsman called before becoming a journeyman?",
        "options":  [
                        "Apprentice",
                        "Master",
                        "Page",
                        "Squire"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: Apprentice"
    },
    {
        "question":  "What French fair region served as the hub of international trade?",
        "options":  [
                        "Champagne",
                        "Normandy",
                        "Burgundy",
                        "Aquitaine"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: Champagne"
    },
    {
        "question":  "What new merchant and artisan middle class developed in towns?",
        "options":  [
                        "Bourgeoisie",
                        "Serfs",
                        "Clergy",
                        "Nobility"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: Bourgeoisie"
    },
    {
        "question":  "What overnight signal required townsfolk to extinguish home fires?",
        "options":  [
                        "Curfew",
                        "Toll",
                        "Watch",
                        "Angelus"
                    ],
        "correctIndex":  0,
        "timeLimit":  20,
        "explanation":  "Correct answer: Curfew"
    }
];

const DEFAULT_QUIZZES = [
  {
    id: 'medieval-master-65',
    title: 'Medieval Europe — Complete Master Arena',
    category: 'Medieval History',
    description: 'The complete 65-question curriculum challenge covering Feudalism, 1066, Crusades, Black Death, Crime & Castles.',
    badge: '👑 65 QUESTIONS',
    questions: MEDIEVAL_ALL_QUESTIONS
  },
  {
    id: 'medieval-feudalism',
    title: 'Medieval Europe 1: Feudalism, Manor & Agriculture',
    category: 'Medieval History',
    description: 'Feudal hierarchy, peasants and serfs, manorialism, chivalry, pages and squires, 3-field crop rotation.',
    badge: '⚔️ FEUDAL SYSTEM',
    questions: MEDIEVAL_ALL_QUESTIONS.slice(0, 11)
  },
  {
    id: 'medieval-1066-normans',
    title: 'Medieval Europe 2: The Norman Conquest & 1066',
    category: 'Medieval History',
    description: 'Bayeux Tapestry, William the Conqueror, Stamford Bridge, Battle of Hastings, and the Domesday Book.',
    badge: '🛡️ 1066 CONQUEST',
    questions: MEDIEVAL_ALL_QUESTIONS.slice(11, 20)
  },
  {
    id: 'medieval-crime-punishment',
    title: 'Medieval Europe 3: Medieval Crime & Punishment',
    category: 'Medieval History',
    description: 'Trial by ordeal, compurgation, trial by combat, hue and cry, pillory, stocks, heresy, and common law.',
    badge: '⚖️ CRIME & LAW',
    questions: MEDIEVAL_ALL_QUESTIONS.slice(20, 30)
  },
  {
    id: 'medieval-crusades',
    title: 'Medieval Europe 4: The Crusades & The Holy Land',
    category: 'Medieval History',
    description: 'Pope Urban II, Council of Clermont, Deus Vult, Outremer, Saladin, Richard the Lionheart, and Knights Templar.',
    badge: '🚩 THE CRUSADES',
    questions: MEDIEVAL_ALL_QUESTIONS.slice(30, 40)
  },
  {
    id: 'medieval-black-death',
    title: 'Medieval Europe 5: Monarchs, Magna Carta & The Black Death',
    category: 'Medieval History',
    description: 'Charlemagne, Eleanor of Aquitaine, Joan of Arc, Magna Carta 1215, Yersinia pestis, and Peasants Revolt 1381.',
    badge: '💀 BLACK DEATH',
    questions: MEDIEVAL_ALL_QUESTIONS.slice(40, 53)
  },
  {
    id: 'medieval-warfare-towns',
    title: 'Medieval Europe 6: Castles, Siege Warfare & Towns',
    category: 'Medieval History',
    description: 'Longbows, trebuchets, portcullis, the keep, town charters, merchant guilds, apprentices, and curfews.',
    badge: '🏰 CASTLES & TOWNS',
    questions: MEDIEVAL_ALL_QUESTIONS.slice(53, 65)
  },
  {
    id: 'hsc-econ-core',
    title: 'HSC Economics — Global Economy & Macro Policy',
    category: 'Year 12 Economics',
    description: 'Balance of Payments, Exchange Rates, Free Trade, and Macro Policy.',
    badge: 'HSC ECON',
    questions: [
      {
        question: 'Which component of the Balance of Payments records Australian interest payments on foreign debt?',
        options: [
          'Net Primary Income (Current Account)',
          'Capital Account',
          'Net Secondary Income (Current Account)',
          'Financial Account'
        ],
        correctIndex: 0,
        timeLimit: 20,
        explanation: 'Servicing foreign debt is classified under Net Primary Income.'
      },
      {
        question: 'What is the primary target band of the Reserve Bank of Australia (RBA) for consumer price inflation (CPI)?',
        options: [
          '2% to 3% on average over the cycle',
          '0% to 2% strictly annually',
          '3% to 5% medium-term target',
          '1.5% fixed target'
        ],
        correctIndex: 0,
        timeLimit: 15,
        explanation: 'The RBA conducts monetary policy to keep CPI inflation between 2% and 3% on average.'
      },
      {
        question: 'A tariff placed on imported steel in Australia will typically cause which outcome?',
        options: [
          'A net deadweight loss to societal welfare',
          'An increase in overall domestic consumer surplus',
          'A reallocation of resources towards more efficient export industries',
          'A decrease in Australian government tax revenue'
        ],
        correctIndex: 0,
        timeLimit: 20,
        explanation: 'Tariffs create production and consumption distortion losses (deadweight loss).'
      }
    ]
  },
  {
    id: 'commerce-consumer-finance',
    title: 'Year 10 Commerce — Consumer, Finance & Smart Travel',
    category: 'Year 10 Commerce',
    description: 'Consumer rights, credit vs debit cards, travel budgets, and financial decisions.',
    badge: 'COMMERCE',
    questions: [
      {
        question: 'Under Australian Consumer Law, what is a consumer entitled to if a product has a major defect?',
        options: [
          'A choice between a full refund or a direct replacement',
          'Only a store credit voucher valid for 30 days',
          'The manufacturer is only obliged to attempt repair twice',
          'No remedy if the store has a "No Refunds" sign displayed'
        ],
        correctIndex: 0,
        timeLimit: 20,
        explanation: 'For a MAJOR failure under ACL, the consumer has the right to choose between refund or replacement.'
      },
      {
        question: 'What happens to the total interest paid if a borrower repays a car loan over 5 years instead of 3 years?',
        options: [
          'Total interest increases significantly, even though monthly repayments are lower',
          'Total interest decreases because payments are spread out',
          'Total interest remains identical as long as the interest rate is fixed',
          'The bank waives interest after 36 months'
        ],
        correctIndex: 0,
        timeLimit: 15,
        explanation: 'Extending the loan term increases the compounding duration, raising total interest paid.'
      }
    ]
  }
];

class QuizRepository {
  static STORAGE_KEY = 'quizarena_custom_quizzes';

  static getAllQuizzes() {
    let custom = [];
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      if (raw) {
        custom = JSON.parse(raw);
      }
    } catch (e) {
      console.warn('Failed to load custom quizzes from localStorage', e);
    }
    return [...DEFAULT_QUIZZES, ...custom];
  }

  static getQuizById(id) {
    const all = this.getAllQuizzes();
    return all.find(q => q.id === id) || DEFAULT_QUIZZES[0];
  }

  static saveCustomQuiz(quiz) {
    if (!quiz.id) {
      quiz.id = 'custom-' + Date.now().toString(36);
    }
    quiz.isCustom = true;
    const custom = this.getCustomQuizzes().filter(q => q.id !== quiz.id);
    custom.unshift(quiz);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(custom));
    return quiz;
  }

  static deleteCustomQuiz(id) {
    const custom = this.getCustomQuizzes().filter(q => q.id !== id);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(custom));
  }

  static getCustomQuizzes() {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  static exportAsJSON(quizId) {
    const quiz = this.getQuizById(quizId);
    return JSON.stringify(quiz, null, 2);
  }

  static importFromJSON(jsonString) {
    try {
      const parsed = JSON.parse(jsonString);
      if (!parsed.title || !Array.isArray(parsed.questions) || parsed.questions.length === 0) {
        throw new Error('Invalid quiz format. Title and at least one question required.');
      }
      return this.saveCustomQuiz(parsed);
    } catch (e) {
      throw new Error('JSON parsing error: ' + e.message);
    }
  }
}

// Expose globally
if (typeof window !== 'undefined') {
  window.DEFAULT_QUIZZES = DEFAULT_QUIZZES;
  window.QuizRepository = QuizRepository;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DEFAULT_QUIZZES, QuizRepository };
}