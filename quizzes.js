// ===================================================
// QUIZ ARENA � QUESTION BANKS & QUIZ ENGINE
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

// ===================================================
// HSC BUSINESS STUDIES — OFFICIAL CURRICULUM QUESTIONS
// Covers all 4 Stage 6 Modules: Operations, Marketing, Finance, Human Resources
// ===================================================

const HSC_BUSINESS_OPERATIONS = [
  {
    question: "Which strategic role is an operations manager pursuing when aiming to be the lowest-cost producer in the market?",
    options: ["Cost Leadership", "Product Differentiation", "Niche Saturation", "Price Skimming"],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Cost leadership involves delivering goods or services at the lowest possible unit cost in the industry."
  },
  {
    question: "How does environmental sustainability as an influence impact a manufacturing business's operations?",
    options: [
      "Operations must minimize waste, reduce carbon emissions, and use recyclable inputs",
      "Operations can legally ignore emissions standards if production volume increases",
      "Operations must prioritize lowest immediate cost over resource conservation",
      "Operations is exempted from corporate social responsibility reporting"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Environmental sustainability requires operations to operate without compromising future generations' resources."
  },
  {
    question: "Which of the following is classified as a transformed resource in a commercial airline's operations?",
    options: [
      "Passengers and booking information",
      "The Boeing 787 aircraft fleet",
      "Pilots and cabin flight crew",
      "Terminal gates and hangar facilities"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Transformed resources are changed or converted in the process: materials, information, and customers."
  },
  {
    question: "What are the two primary transforming resources used to execute operational processes?",
    options: [
      "Human resources (staff) and facilities (plant/machinery)",
      "Raw materials and digital data",
      "Customer feedback and intermediate goods",
      "Shareholder capital and bank loans"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Transforming resources remain in the business to perform the transformation: human resources and facilities."
  },
  {
    question: "Which operational characteristic typically results when a firm manufactures at very high volume?",
    options: [
      "Lower per-unit production costs and high capital automation",
      "High unit costs and customized artisan hand-crafting",
      "Extreme flexibility in handling unique daily changes",
      "High unit labor costs and zero standardized machinery"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "High volume production enables economies of scale, heavy automation, and low per-unit costs."
  },
  {
    question: "How does high customer visibility impact a service enterprise such as a high-end restaurant?",
    options: [
      "Staff customer service, presentation, and speed are directly observed by clients",
      "Operations can hide process errors and backlog until delivery",
      "Transformation can occur entirely off-site with zero client interaction",
      "Inventory storage costs become the primary operational expense"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "High visibility means customers directly experience the operational transformation in real time."
  },
  {
    question: "What does Critical Path Analysis (CPA) identify in an operations scheduling process?",
    options: [
      "The longest sequence of dependent tasks that determines the minimum total project time",
      "The cheapest supplier of raw components in the supply chain",
      "The legal compliance path for Fair Work certification",
      "The shortest single task that can be delayed indefinitely"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "The critical path is the longest sequence of dependent activities; any delay on it delays the whole project."
  },
  {
    question: "What is the primary operational advantage of Computer-Integrated Manufacturing (CIM)?",
    options: [
      "Integrates computer-aided design (CAD) and manufacturing (CAM) into full automation",
      "Eliminates the requirement for any financial record keeping",
      "Replaces all senior marketing and human resource managers",
      "Guarantees zero competition from international imported goods"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "CIM integrates CAD and CAM software with computer networks to control the entire manufacturing process."
  },
  {
    question: "What is the primary operational goal of implementing a Just-in-Time (JIT) inventory management method?",
    options: [
      "Holding zero excess inventory and eliminating holding and warehousing costs",
      "Stockpiling maximum raw materials in case of global supply shocks",
      "Producing goods months in advance of anticipated consumer demand",
      "Relying on LIFO accounting to artificially reduce company tax"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "JIT aims to have inventory arrive precisely as needed in production, eliminating storage and holding costs."
  },
  {
    question: "During periods of rising prices (inflation), why does FIFO report higher gross profit than LIFO?",
    options: [
      "Older, cheaper inventory is recorded as Cost of Goods Sold first",
      "Recent, expensive inventory is sold first, increasing expenses",
      "FIFO eliminates the need to calculate closing inventory balances",
      "LIFO is mandatory under Australian Accounting Standards (AASB)"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Under FIFO, older cheaper stock is expensed first, resulting in lower COGS and higher reported gross profit."
  },
  {
    question: "How does Quality Assurance (QA) differ fundamentally from traditional Quality Control (QC)?",
    options: [
      "QA proactively prevents defects throughout the entire process via standards",
      "QC is proactive while QA only inspects finished items at the end",
      "QA relies entirely on customer complaints after product delivery",
      "QC is an international certification awarded by ISO"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "QA is a proactive, system-wide approach preventing defects before they occur; QC inspects finished products."
  },
  {
    question: "What core philosophy underpins Total Quality Management (TQM) in operations?",
    options: [
      "Continuous improvement (Kaizen) and universal employee commitment to quality",
      "Conducting quality inspections only on the final production line",
      "Outsourcing all quality responsibility to third-party offshore contractors",
      "Accepting a 10% defect rate as standard industry practice"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "TQM is an ongoing, organization-wide commitment to continuous improvement (Kaizen) and zero defects."
  },
  {
    question: "Why do employees frequently resist operational changes involving new automated robotics?",
    options: [
      "Fear of redundancy, loss of job security, and anxiety over retraining",
      "Desire to work longer shifts without additional compensation",
      "Preference for manual physical labor over digital equipment",
      "Mandatory requirements to invest personal savings in machinery"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Psychological and financial fears—such as redundancy, deskilling, and career uncertainty—drive resistance."
  },
  {
    question: "Which financial cost is incurred directly by a firm when terminating workers whose roles are made redundant?",
    options: [
      "Redundancy payout packages",
      "Purchasing new capital equipment",
      "Reorganizing factory floor plant layout",
      "Payment of patent licensing fees"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Redundancy payments are legal compensation paid to employees whose positions are eliminated by restructuring."
  },
  {
    question: "What is a primary operational benefit of global sourcing for a manufacturing enterprise?",
    options: [
      "Accessing lower component costs, specialized expertise, and new technology",
      "Eliminating all exchange rate and foreign currency exposure",
      "Completely avoiding compliance with Australian consumer laws",
      "Removing all logistics and international transport transit times"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Global sourcing allows businesses to acquire inputs from the most cost-effective global suppliers."
  }
];

const HSC_BUSINESS_MARKETING = [
  {
    question: "What is the strategic role of marketing in a business?",
    options: [
      "Generating sales and revenue to achieve long-term profit and business growth",
      "Supervising daily factory assembly lines and raw materials",
      "Auditing end-of-year tax returns and financial accounts",
      "Negotiating enterprise agreements with trade union representatives"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Marketing's strategic role is translating business goals into consumer demand, revenue, and profit."
  },
  {
    question: "Which marketing approach focuses on producing high volume under the belief that products sell themselves?",
    options: ["Production Approach", "Selling Approach", "Marketing Approach", "Relationship Marketing Approach"],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "The production approach (1850s–1920s) focused on manufacturing capabilities rather than customer needs."
  },
  {
    question: "What characterizes an 'Industrial Market' in business marketing?",
    options: [
      "Businesses purchasing products and raw materials used to manufacture other goods",
      "Individual consumers buying groceries for household use",
      "Retailers buying finished products to resell to consumers without alteration",
      "Government departments buying public infrastructure goods"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Industrial markets comprise businesses that purchase inputs to produce other finished goods."
  },
  {
    question: "Which internal factor influencing consumer choice involves an individual's motives, attitudes, and personality?",
    options: [
      "Psychological Influences",
      "Sociocultural Influences",
      "Economic Influences",
      "Government Regulatory Influences"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Psychological factors are internal influences: perception, motives, attitudes, personality, and learning."
  },
  {
    question: "Under the Australian Consumer Law (ACL), what is 'Bait Advertising'?",
    options: [
      "Advertising low-priced products when the business lacks reasonable stock to satisfy demand",
      "Offering discounts to customers who pay using cash instead of credit",
      "Comparing product features directly against a competitor's brand",
      "Sponsoring community sporting clubs to build local goodwill"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Bait advertising lures customers with low prices for goods unavailable in reasonable quantities."
  },
  {
    question: "Under Australian consumer law, why is price discrimination regulated?",
    options: [
      "To prevent charging different prices to different buyers if it substantially reduces competition",
      "To guarantee all consumers pay the exact same price across all countries",
      "To eliminate the use of holiday or seasonal retail discounts",
      "To outlaw student and pensioner discount concession rates"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Price discrimination is unlawful if it substantially lessens market competition without cost differences."
  },
  {
    question: "What unethical marketing practice is known as 'Sugging'?",
    options: [
      "Selling Under the Guise of market research",
      "Promoting products that damage public health",
      "Displaying misleading fine print on food packaging",
      "Sponsoring cultural events without notifying regulatory authorities"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "SUGGING stands for Selling Under the Guise of a survey/research, misleading the consumer."
  },
  {
    question: "In a marketing SWOT analysis, which quadrant examines internal financial strength and patents?",
    options: ["Strengths", "Weaknesses", "Opportunities", "Threats"],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Strengths are internal positive attributes controlled by the business, like strong finances and patents."
  },
  {
    question: "What marketing strategy is typically required during the 'Maturity' stage of the product life cycle?",
    options: [
      "Differentiating features, promotional discounting, and protecting market share",
      "Setting premium skimming prices with zero sales advertising",
      "Immediately discontinuing the product from all retail shelves",
      "Halting all distribution and product packaging updates"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "At maturity, competition is intense; firms must differentiate and use promotions to defend market share."
  },
  {
    question: "Dividing an athletic footwear market into marathon runners, trail hikers, and gym-goers is an example of what?",
    options: [
      "Psychographic / Behavioral segmentation",
      "Geographic climate segmentation",
      "Demographic age segmentation",
      "Income bracket segmentation"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Behavioral and psychographic segmentation groups consumers by lifestyle, usage rate, and benefits sought."
  },
  {
    question: "When a tech company charges an initial premium high price for a groundbreaking smartphone, what strategy is used?",
    options: ["Price Skimming", "Price Penetration", "Loss Leader Pricing", "Cost-Plus Pricing"],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Price skimming charges the highest possible price during introduction to recover R&D costs quickly."
  },
  {
    question: "What is the strategic objective of a retailer selling a product as a 'Loss Leader'?",
    options: [
      "Selling below cost to attract foot traffic and stimulate purchases of higher-margin goods",
      "Exiting an unprofitable product line permanently",
      "Complying with mandatory Australian Consumer Law minimum price floors",
      "Maximizing gross profit margins on that specific product"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Loss leaders sell below cost to draw shoppers into the store to buy other profitable products."
  },
  {
    question: "What is the primary focus of relationship marketing?",
    options: [
      "Building long-term customer loyalty and repeat business through personalized engagement",
      "Conducting high-pressure one-off television sales blitzes",
      "Outsourcing customer service to unsolicited telemarketing agencies",
      "Engaging in aggressive predatory pricing to eliminate rivals"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Relationship marketing focuses on customer retention and long-term relationships (e.g. loyalty programs)."
  },
  {
    question: "Which distribution channel strategy sells through only one exclusive outlet in a designated geographic area?",
    options: ["Exclusive Distribution", "Intensive Distribution", "Selective Distribution", "Mass Distribution"],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Exclusive distribution restricts sales to a single retail outlet in an area, maintaining luxury prestige."
  },
  {
    question: "Why would a multinational fast-food chain customise its marketing mix in overseas markets?",
    options: [
      "To adapt to local cultural traditions, tastes, and dietary regulations",
      "To guarantee all products look and taste identical worldwide",
      "To eliminate all advertising expenses in foreign territories",
      "Because international trade agreements prohibit standardisation"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Customisation adapts the marketing mix to suit distinct local consumer preferences, cultures, and laws."
  }
];

const HSC_BUSINESS_FINANCE = [
  {
    question: "Which financial objective evaluates a firm's ability to pay its short-term debts as they fall due within 12 months?",
    options: ["Liquidity", "Solvency", "Profitability", "Efficiency"],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Liquidity measures how quickly assets can be converted to cash to satisfy current liabilities."
  },
  {
    question: "What does the financial objective of solvency measure?",
    options: [
      "The business's capacity to meet long-term financial commitments over several years",
      "The percentage of gross profit generated per dollar of sales",
      "The speed at which inventory turns over in the warehouse",
      "The short-term bank balance at the end of each trading day"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Solvency reflects long-term financial stability and ability to survive and service debt over time."
  },
  {
    question: "What is the primary internal source of finance reinvested into business operations?",
    options: ["Retained Profits", "Commercial Bank Overdraft", "Debentures", "Ordinary Share Placements"],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Retained profits are undistributed operating profits retained by the business for growth."
  },
  {
    question: "What short-term external debt facility allows a business to overdraw its bank account up to an agreed limit?",
    options: ["Commercial Bank Overdraft", "Mortgage Loan", "Debenture Issue", "Private Equity Placement"],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "An overdraft allows a business to draw more funds than available in its account to manage short-term cash."
  },
  {
    question: "How does a business use factoring to generate immediate operational cash flow?",
    options: [
      "Selling accounts receivable (unpaid customer invoices) at a discount to a finance company",
      "Taking out a 25-year mortgage against the company headquarters",
      "Issuing unsecured notes to institutional superannuation funds",
      "Relying on government small-business export grants"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Factoring sells accounts receivable at a discount to receive immediate cash, improving liquidity."
  },
  {
    question: "What is a 'Rights Issue' in ASX equity financing?",
    options: [
      "An offer granting existing shareholders the right to buy additional new shares in proportion to their holding",
      "Selling ordinary shares exclusively to company executives as bonuses",
      "A compulsory government acquisition of corporate equity",
      "Converting bank loans into non-voting preference shares"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "A rights issue offers existing shareholders additional new shares proportional to their current holding."
  },
  {
    question: "What core financial service do investment banks provide to large corporate enterprises?",
    options: [
      "Underwriting new share floats, advising on mergers, and structuring large debt issues",
      "Providing residential mortgage loans to household consumers",
      "Insuring motor vehicles and home contents against storm damage",
      "Managing small retail savings passbook accounts"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Investment banks specialize in corporate advisory, underwriting initial public offerings (IPOs), and M&A."
  },
  {
    question: "How is the Current Ratio calculated and what is the standard benchmark for healthy liquidity?",
    options: [
      "Current Assets ÷ Current Liabilities (Benchmark: 2:1)",
      "Total Debt ÷ Total Equity (Benchmark: 50%)",
      "Gross Profit ÷ Total Sales (Benchmark: 80%)",
      "Net Profit ÷ Owners Equity (Benchmark: 1:1)"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Current Ratio = Current Assets ÷ Current Liabilities. A ratio of 2:1 is the traditional sound benchmark."
  },
  {
    question: "What does a high Debt-to-Equity ratio indicate about a business's capital structure?",
    options: [
      "The business is highly geared and carries significant financial risk during economic downturns",
      "The business carries zero debt and is funded 100% by retained earnings",
      "The business possesses exceptional liquidity and rapid cash conversion",
      "The business is legally immune to increases in central bank interest rates"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "High gearing means a large proportion of assets is funded by debt, increasing interest commitments and solvency risk."
  },
  {
    question: "If a company reports $2,000,000 in sales revenue and $300,000 in net profit, what is its Net Profit Ratio?",
    options: ["15%", "6.67%", "30%", "20%"],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Net Profit Ratio = (Net Profit ÷ Sales) × 100 = ($300,000 ÷ $2,000,000) × 100 = 15%."
  },
  {
    question: "If Accounts Receivable Turnover is 12 times per year, approximately how many days does it take to collect debts?",
    options: ["30.4 days (365 ÷ 12)", "12.0 days", "60.0 days", "90.0 days"],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Days to collect = 365 ÷ Accounts Receivable Turnover = 365 ÷ 12 ≈ 30.4 days."
  },
  {
    question: "Why is capitalising operating expenses considered a limitation of financial reports?",
    options: [
      "It records expenses as capital assets, artificially inflating current reported profits",
      "It understates company assets and reports false financial losses",
      "It is an illegal accounting procedure under all international standards",
      "It forces the business to pay immediate corporate taxes on revenue"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Capitalising expenses treats an operating expense as a capital asset on the balance sheet, overstating profit."
  },
  {
    question: "How does the financial strategy of 'Distribution of Payments' assist cash flow management?",
    options: [
      "Spreading invoice due dates across the year prevents major cash shortfalls and crunches",
      "Paying all annual supplier bills in one single lump sum in January",
      "Withholding payments indefinitely until legal debt collectors intervene",
      "Requiring all customers to pay only via credit card installments"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Distributing payments evenly prevents large periodic cash drains and keeps cash flow steady."
  },
  {
    question: "What is the primary financial advantage of a 'Sale and Leaseback' transaction?",
    options: [
      "Liquidates cash tied up in non-current assets while retaining uninterrupted operational use",
      "Transfers ownership of the business to the commercial landlord",
      "Eliminates all ongoing commercial rent expenses permanently",
      "Reduces corporate tax liabilities to zero dollars"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Sale and leaseback frees up substantial cash from fixed property while the business leases it back for operations."
  },
  {
    question: "How does an Australian importer use a currency Forward Exchange Contract to hedge financial risk?",
    options: [
      "Locks in a fixed future exchange rate with the bank to eliminate currency depreciation losses",
      "Speculates on overseas currency markets to generate high-risk capital gains",
      "Demands overseas suppliers accept Australian banknotes via postal mail",
      "Borrows foreign currency at unhedged floating international interest rates"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "A forward exchange contract fixes the exchange rate for a future date, protecting against adverse currency swings."
  }
];

const HSC_BUSINESS_HUMAN_RESOURCES = [
  {
    question: "What is the overarching strategic role of Human Resource Management (HRM)?",
    options: [
      "Aligning the workforce with business goals to achieve sustainable competitive advantage",
      "Calculating weekly payroll tax deductions for the Australian Taxation Office",
      "Operating automated assembly machinery on the manufacturing floor",
      "Managing public relations campaigns during corporate product recalls"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Strategic HRM aligns staff recruitment, training, and retention with broad business strategic goals."
  },
  {
    question: "How does human resource management directly interrelate with the marketing function?",
    options: [
      "HR recruits, trains, and rewards staff who deliver customer service and brand value",
      "HR sets retail pricing strategies for newly developed product lines",
      "HR determines the target market demographic segmentation criteria",
      "HR designs digital social media advertising campaigns for consumers"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "HR ensures skilled, customer-oriented staff are in place to represent the brand and deliver marketing promises."
  },
  {
    question: "What legal feature distinguishes an independent contractor from a regular employee?",
    options: [
      "Contractors run their own business, bear commercial risk, and invoice under an ABN",
      "Contractors are entitled to paid annual leave and sick leave under the NES",
      "Employers must withhold standard PAYG income tax from contractors",
      "Contractors cannot be dismissed without Fair Work Commission approval"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Independent contractors operate their own business, control their work methods, and invoice via an ABN."
  },
  {
    question: "Under the Australian Fair Work Act, what are the National Employment Standards (NES)?",
    options: [
      "11 minimum statutory employment entitlements guaranteed to all national system employees",
      "Voluntary corporate guidelines for multinational executive bonuses",
      "Maximum working hours permitted before overtime is banned",
      "Tax deduction benchmarks calculated by the Fair Work Ombudsman"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "The NES consists of 11 legislated minimum standards (leave, maximum weekly hours, notice of termination, etc.)."
  },
  {
    question: "What is the legal function of a Modern Award in the Australian workplace relations system?",
    options: [
      "Sets legally binding minimum wages and conditions across specific industries or occupations",
      "Governs the terms of a voluntary retirement package for company directors",
      "Grants employers the legal right to ban union membership in workplaces",
      "Replaces all health and safety obligations under the WHS Act"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Modern Awards provide the safety net of minimum terms and conditions for workers across broad industries."
  },
  {
    question: "What test must the Fair Work Commission apply before approving an Enterprise Agreement?",
    options: [
      "Better Off Overall Test (BOOT) compared to the relevant modern award",
      "Minimum Executive Profitability Test (MEPT)",
      "Standard National Tariff Alignment Test (STAT)",
      "Annual Shareholder Dividend Approval Test (ASDAT)"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "The BOOT ensures employees are better off overall under the enterprise agreement than under the relevant award."
  },
  {
    question: "Under the Work Health and Safety (WHS) Act, what is an employer's primary legal duty of care?",
    options: [
      "Ensuring health, safety, and welfare of workers so far as is reasonably practicable",
      "Eliminating all business operating costs associated with safety gear",
      "Providing monetary compensation in place of providing a safe workplace",
      "Guaranteeing zero equipment breakdowns during factory production"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Employers must ensure the health and safety of workers and visitors so far as is reasonably practicable."
  },
  {
    question: "What occurs during the 'Job Analysis' stage of human resource acquisition?",
    options: [
      "Determining the specific duties, responsibilities, and skills required for a vacant role",
      "Conducting final exit interviews with departing staff members",
      "Evaluating the annual monetary bonus structure for senior sales staff",
      "Disciplining employees for breaches of company digital device codes"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Job analysis systematically examines a role to produce a job description (duties) and specification (skills)."
  },
  {
    question: "How does employee development differ from employee training?",
    options: [
      "Training teaches skills for current tasks; development prepares employees for future career roles",
      "Training is voluntary for management; development is compulsory for casual staff",
      "Development only involves physical fitness; training involves academic study",
      "Training is provided by trade unions; development is provided by universities"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Training focuses on immediate job performance; development broadens skills for future career advancement."
  },
  {
    question: "Which of the following is classified as a non-monetary employee fringe benefit?",
    options: [
      "Flexible working hours, company car, and subsidized health care",
      "Base hourly award wage payments",
      "Sales commissions deposited directly into bank accounts",
      "Overtime penalty rate pay for weekend shifts"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Non-monetary benefits include perks, flexible hours, gym memberships, and cars that do not involve cash pay."
  },
  {
    question: "When is an employee's separation legally classified as an involuntary redundancy?",
    options: [
      "When the employer no longer requires the job to be done due to restructuring or technology",
      "When an employee voluntarily resigns to accept a job with a competitor",
      "When an employee reaches the national statutory retirement age",
      "When a worker is dismissed on grounds of serious workplace misconduct"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Redundancy occurs when the position itself ceases to exist due to technological change or structural decline."
  },
  {
    question: "Which workplace leadership style emphasizes consultation, delegation, and shared decision-making?",
    options: [
      "Democratic / Participative Leadership",
      "Autocratic / Authoritarian Leadership",
      "Classical Scientific Leadership",
      "Laissez-faire Absentee Leadership"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Democratic leadership consults employees, encourages input, and delegates authority to team members."
  },
  {
    question: "What is the primary objective of a 'Developmental' performance appraisal system?",
    options: [
      "Identifying employee strengths, training needs, and future career progression goals",
      "Gathering documentary evidence to justify immediate staff dismissal",
      "Calculating deductions for employee salary penalties",
      "Publishing individual worker productivity rankings publicly"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Developmental appraisals focus on employee growth, mentoring, and skill enhancement."
  },
  {
    question: "How does mediation differ from arbitration in resolving workplace disputes?",
    options: [
      "A mediator assists parties to reach a voluntary agreement; an arbitrator makes a legally binding ruling",
      "Mediation takes place only in the High Court; arbitration occurs in private offices",
      "An arbitrator cannot enforce decisions; a mediator has absolute legal power",
      "Mediation requires full strike action; arbitration is always conducted without lawyers"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Mediators facilitate voluntary consensus without imposing solutions; arbitrators make binding legal rulings."
  },
  {
    question: "When the Fair Work Commission resolves a dispute through Arbitration, what is the legal outcome?",
    options: [
      "A formal, legally binding decision (order or award) that both parties must adhere to",
      "A non-binding set of gentle suggestions that either party can ignore",
      "A mandatory referral to the federal criminal court system",
      "Immediate dissolution of the company's corporate entity"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Arbitration is a formal legal process where the industrial tribunal makes an order that is binding on all parties."
  }
];

const HSC_BUSINESS_ALL_QUESTIONS = [
  ...HSC_BUSINESS_OPERATIONS,
  ...HSC_BUSINESS_MARKETING,
  ...HSC_BUSINESS_FINANCE,
  ...HSC_BUSINESS_HUMAN_RESOURCES
];

const DEFAULT_QUIZZES = [
  {
    id: 'hsc-business-master',
    title: 'HSC Business Studies — Complete Master Arena',
    category: 'HSC Business Studies',
    description: 'Comprehensive 60-question trial arena covering Operations, Marketing, Finance, and Human Resources.',
    badge: '👑 60 QUESTIONS',
    questions: HSC_BUSINESS_ALL_QUESTIONS
  },
  {
    id: 'hsc-business-operations',
    title: 'HSC Business 1: Operations Management',
    category: 'HSC Business Studies',
    description: 'Cost leadership, 4 Vs, transformed/transforming inputs, CPA scheduling, JIT inventory, QA/QC/TQM, and change.',
    badge: '⚙️ OPERATIONS',
    questions: HSC_BUSINESS_OPERATIONS
  },
  {
    id: 'hsc-business-marketing',
    title: 'HSC Business 2: Marketing Strategies',
    category: 'HSC Business Studies',
    description: 'Market approaches, segmentation, ACL consumer laws, sugging, SWOT, skimming/penetration/loss leader, and 7 Ps.',
    badge: '🎯 MARKETING',
    questions: HSC_BUSINESS_MARKETING
  },
  {
    id: 'hsc-business-finance',
    title: 'HSC Business 3: Financial Management',
    category: 'HSC Business Studies',
    description: 'Liquidity, gearing, Current ratio, Net Profit ratio, debt vs equity, cash flow factoring, and global hedging.',
    badge: '📊 FINANCE',
    questions: HSC_BUSINESS_FINANCE
  },
  {
    id: 'hsc-business-hr',
    title: 'HSC Business 4: Human Resource Management',
    category: 'HSC Business Studies',
    description: 'The employment contract, NES 11 standards, modern awards, BOOT test, leadership styles, and dispute resolution.',
    badge: '👥 HUMAN RESOURCES',
    questions: HSC_BUSINESS_HUMAN_RESOURCES
  },
  {
    id: 'medieval-master-65',
    title: 'Medieval Europe � Complete Master Arena',
    category: 'Medieval History',
    description: 'The complete 65-question curriculum challenge covering Feudalism, 1066, Crusades, Black Death, Crime & Castles.',
    badge: '?? 65 QUESTIONS',
    questions: MEDIEVAL_ALL_QUESTIONS
  },
  {
    id: 'medieval-feudalism',
    title: 'Medieval Europe 1: Feudalism, Manor & Agriculture',
    category: 'Medieval History',
    description: 'Feudal hierarchy, peasants and serfs, manorialism, chivalry, pages and squires, 3-field crop rotation.',
    badge: '?? FEUDAL SYSTEM',
    questions: MEDIEVAL_ALL_QUESTIONS.slice(0, 11)
  },
  {
    id: 'medieval-1066-normans',
    title: 'Medieval Europe 2: The Norman Conquest & 1066',
    category: 'Medieval History',
    description: 'Bayeux Tapestry, William the Conqueror, Stamford Bridge, Battle of Hastings, and the Domesday Book.',
    badge: '??? 1066 CONQUEST',
    questions: MEDIEVAL_ALL_QUESTIONS.slice(11, 20)
  },
  {
    id: 'medieval-crime-punishment',
    title: 'Medieval Europe 3: Medieval Crime & Punishment',
    category: 'Medieval History',
    description: 'Trial by ordeal, compurgation, trial by combat, hue and cry, pillory, stocks, heresy, and common law.',
    badge: '?? CRIME & LAW',
    questions: MEDIEVAL_ALL_QUESTIONS.slice(20, 30)
  },
  {
    id: 'medieval-crusades',
    title: 'Medieval Europe 4: The Crusades & The Holy Land',
    category: 'Medieval History',
    description: 'Pope Urban II, Council of Clermont, Deus Vult, Outremer, Saladin, Richard the Lionheart, and Knights Templar.',
    badge: '?? THE CRUSADES',
    questions: MEDIEVAL_ALL_QUESTIONS.slice(30, 40)
  },
  {
    id: 'medieval-black-death',
    title: 'Medieval Europe 5: Monarchs, Magna Carta & The Black Death',
    category: 'Medieval History',
    description: 'Charlemagne, Eleanor of Aquitaine, Joan of Arc, Magna Carta 1215, Yersinia pestis, and Peasants Revolt 1381.',
    badge: '?? BLACK DEATH',
    questions: MEDIEVAL_ALL_QUESTIONS.slice(40, 53)
  },
  {
    id: 'medieval-warfare-towns',
    title: 'Medieval Europe 6: Castles, Siege Warfare & Towns',
    category: 'Medieval History',
    description: 'Longbows, trebuchets, portcullis, the keep, town charters, merchant guilds, apprentices, and curfews.',
    badge: '?? CASTLES & TOWNS',
    questions: MEDIEVAL_ALL_QUESTIONS.slice(53, 65)
  },
  {
    id: 'hsc-econ-core',
    title: 'HSC Economics � Global Economy & Macro Policy',
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
    title: 'Year 10 Commerce � Consumer, Finance & Smart Travel',
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