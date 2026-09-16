// ===================================================
// ===================================================
// QUIZ ARENA - QUESTION BANKS & QUIZ ENGINE
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
// HSC BUSINESS STUDIES - 100 PAST HSC QUESTIONS & CURRICULUM PACKS
// Modules: Operations (25 Qs), Marketing (25 Qs), Finance (25 Qs), Human Resources (25 Qs)
// Sourced from past NESA HSC Examinations and Curriculum Dot Points
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
    explanation: "Psychological and financial fears - such as redundancy, deskilling, and career uncertainty - drive resistance."
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
  },
  {
    question: "A bakery purchases pre-mixed flour blends instead of raw grains to save preparation time. Which type of resource is this? (HSC)",
    options: [
      "Transformed resource (materials)",
      "Transforming resource (facilities)",
      "Intermediate consumer service",
      "Capital equity investment"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Transformed resources are inputs that are converted or incorporated into the final product (materials, information, customers)."
  },
  {
    question: "An electronics firm tests 5 out of every 100 finished handsets coming off the assembly line. Which quality strategy is this? (HSC)",
    options: [
      "Quality Control (QC - inspection)",
      "Quality Assurance (QA)",
      "Total Quality Management (TQM)",
      "Continuous Improvement (Kaizen)"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Quality Control (QC) involves inspecting and testing finished goods at the end of the production cycle to detect defects."
  },
  {
    question: "On a Critical Path network, Task C takes 6 days on the critical path. If Task C is delayed by 2 days, what happens? (HSC)",
    options: [
      "The entire project is delayed by exactly 2 days",
      "The project is delayed by 8 days",
      "There is zero delay because Task C has float time",
      "The project finishes 2 days earlier"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Activities on the critical path have zero float time; any delay delays project completion by the exact same duration."
  },
  {
    question: "An online fashion boutique analyses past customer purchase histories and clicks to schedule production. Which resource is this? (HSC)",
    options: [
      "Transformed resource (Information)",
      "Raw Materials input",
      "Transforming resource (Facilities)",
      "Human Resources"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Information (customer purchase data, research, and analytics) is a transformed resource that informs operations planning."
  },
  {
    question: "A furniture factory switches from mass producing identical chairs to custom-designed desks. How do the 4 Vs change? (HSC)",
    options: [
      "Variety increases and volume decreases",
      "Volume increases and variety decreases",
      "Visibility decreases and volume increases",
      "Variation in demand drops to zero"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Custom manufacturing increases product variety (many unique models) while reducing production volume per model."
  },
  {
    question: "An Australian solar panel producer sources silicon from Germany, frames from China, and glass from Vietnam. Which strategy is this? (HSC)",
    options: [
      "Global Sourcing",
      "Domestic Factoring",
      "E-commerce Retailing",
      "Process Layout Design"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Global sourcing involves procuring supplies and components from the most cost-effective international vendors."
  },
  {
    question: "Why would a commercial plant reorganize its factory floor from a process layout to a product (assembly line) layout? (HSC)",
    options: [
      "To achieve smooth continuous workflow for high-volume, standardized processing",
      "To allow staff to hand-wash individual delicate garments",
      "To increase unit production costs and labor intensity",
      "To eliminate all reliance on mechanical washing machinery"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "A product layout arranges equipment in sequential order to optimize high-volume, standardized production runs."
  },
  {
    question: "A computer manufacturer repairs or replaces defective laptop hardware free of charge within 24 months. What output is this? (HSC)",
    options: [
      "Warranties",
      "Transformed Inputs",
      "Quality Control Inspection",
      "Leading Edge Technology"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Warranties are promises by businesses to correct defects and represent an important post-transformation operational output."
  },
  {
    question: "What is the primary purpose of an operations manager achieving ISO 9000 certification? (HSC)",
    options: [
      "To provide international quality assurance through accredited standards",
      "To guarantee zero tax liability on overseas export earnings",
      "To eliminate the need for any employee health and safety training",
      "To legally prevent rival competitors from entering the market"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "ISO 9000 is an internationally recognized quality assurance framework demonstrating certified quality management systems."
  },
  {
    question: "An airline focuses on minimizing aircraft turnaround times between arrival and next departure. Which objective is targeted? (HSC)",
    options: [
      "Speed",
      "Customisation",
      "Flexibility",
      "Environmental Sustainability"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Speed refers to the time it takes for production and operational processes to respond to customer demand or service cycles."
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
    explanation: "The production approach (1850s-1920s) focused on manufacturing capabilities rather than customer needs."
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
  },
  {
    question: "A real estate agency advertises an apartment for '$850,000' knowing the owner will not sell under '$1,100,000'. What is breached? (HSC)",
    options: [
      "Misleading and deceptive advertising (ACL Section 18)",
      "Price discrimination provisions",
      "Breach of statutory implied warranty",
      "Illegal pyramid selling scheme"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Section 18 of the ACL prohibits conduct that is misleading or deceptive or likely to mislead in trade or commerce."
  },
  {
    question: "A brand claims on Instagram that its tea 'cures cancer in 7 days' without scientific proof. Which body prosecutes? (HSC)",
    options: [
      "Australian Competition and Consumer Commission (ACCC)",
      "Australian Securities and Investments Commission (ASIC)",
      "Fair Work Commission (FWC)",
      "Reserve Bank of Australia (RBA)"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "The ACCC enforces the Competition and Consumer Act 2010 and penalizes deceptive and unsubstantiated claims."
  },
  {
    question: "An electronics retailer prices a tablet computer at $499 instead of $500. Which pricing strategy is this? (HSC)",
    options: [
      "Price Points (Psychological Pricing)",
      "Price Skimming",
      "Cost-Plus Pricing",
      "Loss Leader Pricing"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Price points set prices at specific psychological thresholds (e.g. $499) to make goods appear significantly cheaper."
  },
  {
    question: "A fragrance manufacturer distributes free miniature sample bottles to shoppers in department stores. What promotion is this? (HSC)",
    options: [
      "Sales Promotion",
      "Personal Selling",
      "Public Relations",
      "Opinion Leadership"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Sales promotion offers direct incentives to encourage rapid purchase, including free samples, coupons, and premiums."
  },
  {
    question: "An airline segments its passengers into 'weekday corporate flyers' and 'weekend holidaymakers'. Which segmentation base is this? (HSC)",
    options: [
      "Behavioral Segmentation (Usage Occasion)",
      "Geographic Climate Segmentation",
      "Demographic Age Segmentation",
      "Psychographic Personality Segmentation"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Behavioral segmentation divides buyers according to their knowledge of, attitude towards, use of, or occasion for using a product."
  },
  {
    question: "A boutique gym pays an Olympic athlete with 500,000 followers to post workouts wearing their gear. What channel is this? (HSC)",
    options: [
      "Opinion Leader",
      "Word of Mouth",
      "Publicity Stunt",
      "Telemarketing"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "An opinion leader is a respected individual whose opinions and recommendations strongly influence consumer choices."
  },
  {
    question: "In the extended 7 Ps of service marketing, what does 'Physical Evidence' encompass? (HSC)",
    options: [
      "The tangible environment where the service occurs (cleanliness, decor, uniforms)",
      "The medical checkup records of all newly hired staff members",
      "The legal contracts signed between suppliers and wholesalers",
      "The physical weight and cubic dimensions of freight packaging"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Physical evidence is the environment in which the service is delivered and where the firm and customer interact."
  },
  {
    question: "A supermarket chain scans customer loyalty cards at the checkout to capture basket purchase patterns. What data is this? (HSC)",
    options: [
      "Primary Quantitative Data",
      "Secondary Qualitative Data",
      "External Census Data",
      "Tertiary Public Domain Data"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Primary quantitative data is original numerical data collected directly by the business for a specific purpose."
  },
  {
    question: "A chewing gum company sells its products in supermarkets, petrol stations, newsagents, and convenience counters. Which channel is this? (HSC)",
    options: [
      "Intensive Distribution",
      "Exclusive Distribution",
      "Selective Distribution",
      "Direct Network Distribution"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Intensive distribution places products in as many retail outlets as possible so consumers can purchase wherever they go."
  },
  {
    question: "What is the primary difference between a product's 'packaging' and its 'branding'? (HSC)",
    options: [
      "Packaging protects and presents the product; branding identifies and differentiates it",
      "Packaging determines company tax; branding calculates gross profit margins",
      "Branding is legally required by Fair Work; packaging is entirely optional",
      "Packaging is used only for services; branding is used only for tangible goods"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Packaging physically holds, preserves, and labels the product; branding establishes its unique identity, name, and reputation."
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
      "Current Assets / Current Liabilities (Benchmark: 2:1)",
      "Total Debt / Total Equity (Benchmark: 50%)",
      "Gross Profit / Total Sales (Benchmark: 80%)",
      "Net Profit / Owners Equity (Benchmark: 1:1)"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Current Ratio = Current Assets / Current Liabilities. A ratio of 2:1 is the traditional sound benchmark."
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
    explanation: "Net Profit Ratio = (Net Profit / Sales) * 100 = ($300,000 / $2,000,000) * 100 = 15%."
  },
  {
    question: "If Accounts Receivable Turnover is 12 times per year, approximately how many days does it take to collect debts?",
    options: ["30.4 days (365 / 12)", "12.0 days", "60.0 days", "90.0 days"],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Days to collect = 365 / Accounts Receivable Turnover = 365 / 12 = 30.4 days."
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
  },
  {
    question: "A company has Current Assets of $750,000 and Current Liabilities of $500,000. What is working capital and current ratio? (HSC)",
    options: [
      "Working Capital = $250,000; Current Ratio = 1.5:1",
      "Working Capital = $1,250,000; Current Ratio = 2.5:1",
      "Working Capital = $250,000; Current Ratio = 0.67:1",
      "Working Capital = $500,000; Current Ratio = 1:1"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Working Capital = Current Assets - Current Liabilities = $250,000. Current Ratio = $750,000 / $500,000 = 1.5:1."
  },
  {
    question: "If a business has Total Liabilities of $900,000 and Total Owner's Equity of $450,000, what is its Debt-to-Equity ratio? (HSC)",
    options: [
      "200% (or 2:1)",
      "50% (or 0.5:1)",
      "150% (or 1.5:1)",
      "300% (or 3:1)"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Debt-to-Equity Ratio = (Total Liabilities / Total Equity) * 100 = ($900,000 / $450,000) * 100 = 200%."
  },
  {
    question: "Sales are $600,000, COGS is $360,000, and Operating Expenses are $140,000. What are Gross and Net Profit? (HSC)",
    options: [
      "Gross Profit = $240,000; Net Profit = $100,000",
      "Gross Profit = $360,000; Net Profit = $220,000",
      "Gross Profit = $140,000; Net Profit = $40,000",
      "Gross Profit = $240,000; Net Profit = $240,000"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Gross Profit = Sales - COGS = $240,000. Net Profit = Gross Profit - Expenses = $240,000 - $140,000 = $100,000."
  },
  {
    question: "A wholesaler offers terms of '2/10, net 30' on its credit invoices. Which financial strategy is this? (HSC)",
    options: [
      "Discount for Early Payment (Cash Flow Strategy)",
      "Sale and Leaseback of Non-Current Assets",
      "Equity Financing via Share Placements",
      "Currency Hedging via Swap Contracts"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Offering a 2% discount if paid within 10 days accelerates cash inflows and minimizes bad debt risk."
  },
  {
    question: "What type of long-term debt instrument is backed by a fixed charge over the company's real estate assets? (HSC)",
    options: [
      "Mortgage Loan",
      "Unsecured Note",
      "Bank Overdraft",
      "Commercial Bill"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "A mortgage is a debt loan secured against non-current real estate property (land/buildings) owned by the business."
  },
  {
    question: "What is a major advantage of debt financing compared to equity financing for expanding a company? (HSC)",
    options: [
      "Interest repayments are tax-deductible and original owner control is not diluted",
      "Debt never requires principal or interest repayments during recessions",
      "Debt providers gain voting seats on the company's board of directors",
      "Debt increases the company's credit rating automatically"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Debt does not dilute ownership and interest payments are tax-deductible expenses, whereas dividends are not."
  },
  {
    question: "An Australian exporter will receive $500,000 USD in 6 months. If the AUD appreciates, what happens to proceeds? (HSC)",
    options: [
      "The AUD amount received decreases, reducing export profit margins",
      "The AUD amount received increases, boosting export profits",
      "The exchange rate has zero effect on international exports",
      "The overseas buyer must pay double the agreed contract price"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "When the AUD appreciates, foreign currency converts into fewer Australian dollars, reducing export revenue."
  },
  {
    question: "Which financial tool forecasts expected monthly cash inflows and outflows to anticipate upcoming liquidity shortfalls? (HSC)",
    options: [
      "Cash Flow Budget",
      "Balance Sheet Statement",
      "Auditor's Report",
      "Revenue Depreciation Schedule"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "A Cash Flow Budget forecasts future monthly cash receipts and disbursements to ensure the business maintains liquidity."
  },
  {
    question: "When a company records intellectual goodwill at an inflated subjective value on its balance sheet, which limitation is exposed? (HSC)",
    options: [
      "Valuing Assets (Subjective Estimation)",
      "Normalised Earnings",
      "Debt Repayment Schedules",
      "Capitalising Operating Expenses"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Valuing assets is a key limitation because putting a monetary value on intangibles (goodwill, brands) involves subjective estimation."
  },
  {
    question: "A company increases Net Profit from $100,000 to $160,000 while maintaining Owner's Equity constant at $800,000. How does ROE change? (HSC)",
    options: [
      "ROE increases from 12.5% to 20%",
      "ROE decreases from 25% to 15%",
      "ROE remains static at 10%",
      "ROE doubles from 8% to 16%"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Old ROE = ($100k / $800k) = 12.5%. New ROE = ($160k / $800k) = 20%. Higher profit boosts return on invested equity capital."
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
  },
  {
    question: "Under the Fair Work Act NES, what is the maximum standard weekly hours for a full-time employee? (HSC)",
    options: [
      "38 hours per week (plus reasonable additional hours)",
      "44 hours per week strictly",
      "35 hours per week with zero overtime permitted",
      "48 hours per week across all industries"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Under the NES, maximum weekly hours for a full-time employee are 38 hours plus reasonable additional hours."
  },
  {
    question: "A hotel manager fires a bartender immediately on the spot for stealing cash from the safe. What dismissal is this? (HSC)",
    options: [
      "Summary Dismissal (for serious misconduct)",
      "Involuntary Redundancy",
      "Constructive Resignation",
      "Retrenchment"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Summary dismissal occurs without notice when an employee commits serious misconduct, such as theft or violence."
  },
  {
    question: "An engineering firm engages a specialist headhunting consultancy to recruit candidates for an executive role. What is this? (HSC)",
    options: [
      "External Recruitment",
      "Internal Promotion",
      "Job Enlargement",
      "Informal Separation"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "External recruitment involves sourcing employees from outside the organization using agencies, advertisements, or universities."
  },
  {
    question: "Which organization represents the collective industrial interests of employers during National Wage Case hearings? (HSC)",
    options: [
      "Employer Associations (e.g. ACCI, Ai Group)",
      "Trade Unions (e.g. ACTU)",
      "The Australian Taxation Office",
      "The Australian Human Rights Commission"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Employer associations represent employers in industrial disputes, enterprise negotiations, and tribunal wage cases."
  },
  {
    question: "What is the role of the Fair Work Ombudsman (FWO) compared to the Fair Work Commission (FWC)? (HSC)",
    options: [
      "The FWO enforces compliance; the FWC is the industrial tribunal that sets awards and arbitrates disputes",
      "The FWO is a trade union; the FWC is an employer association",
      "The FWC manages corporate tax; the FWO manages company mergers",
      "The FWO operates overseas; the FWC operates only in NSW"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "The FWO enforces workplace compliance; the FWC is the independent national tribunal setting minimum conditions and resolving disputes."
  },
  {
    question: "A tech firm permits staff to work remotely 3 days a week and provides free on-site barista coffee. Which strategy is this? (HSC)",
    options: [
      "Non-Monetary Remuneration (Fringe Benefits & Flexibility)",
      "Base Award Wage Restructuring",
      "Involuntary Separation Settlement",
      "Classical Task Specialisation"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Non-monetary rewards and flexible working arrangements are maintenance strategies that enhance motivation and retention."
  },
  {
    question: "A site supervisor gives strict daily orders without consulting workers and demands absolute compliance. Which style is this? (HSC)",
    options: [
      "Autocratic / Authoritarian Leadership",
      "Democratic Leadership",
      "Laissez-faire Leadership",
      "Affirmative Action Leadership"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Autocratic leaders make decisions unilaterally without employee input and enforce top-down communication and control."
  },
  {
    question: "What statutory protection must an employer maintain by law to cover workers injured in employment? (HSC)",
    options: [
      "Workers Compensation Insurance",
      "Public Liability Indemnity",
      "Director Loss of Profits Policy",
      "Comprehensive Vehicle Collision Insurance"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Employers are legally mandated to hold workers compensation insurance to cover medical costs and rehabilitation for workplace injuries."
  },
  {
    question: "An independent third party facilitates dialogue between management and union delegates to help reach a voluntary settlement. What is this? (HSC)",
    options: [
      "Mediation / Conciliation",
      "Arbitration",
      "Common Law Litigation",
      "Lockout"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Mediation and conciliation involve an independent third party assisting disputing parties to reach a mutually agreed voluntary resolution."
  },
  {
    question: "Why do human resource managers conduct structured exit interviews when employees voluntarily resign? (HSC)",
    options: [
      "To identify underlying workplace issues and develop strategies to reduce future staff turnover",
      "To legally prevent the departing employee from working for any competing firm",
      "To calculate penalty tax deductions for the Australian Taxation Office",
      "To recover all wages paid to the employee over the previous 12 months"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Exit interviews provide honest insights into why staff leave, helping HR address leadership, culture, and retention issues."
  }
];

const HSC_BUSINESS_ALL_QUESTIONS = [
  ...HSC_BUSINESS_OPERATIONS,
  ...HSC_BUSINESS_MARKETING,
  ...HSC_BUSINESS_FINANCE,
  ...HSC_BUSINESS_HUMAN_RESOURCES
];

// Replicate actual 20-Question Section I HSC Examination (5 from each module)
const HSC_BUSINESS_TRIAL_EXAM_QUESTIONS = [
  HSC_BUSINESS_OPERATIONS[0],
  HSC_BUSINESS_OPERATIONS[6],
  HSC_BUSINESS_OPERATIONS[8],
  HSC_BUSINESS_OPERATIONS[15],
  HSC_BUSINESS_OPERATIONS[17],
  HSC_BUSINESS_MARKETING[0],
  HSC_BUSINESS_MARKETING[4],
  HSC_BUSINESS_MARKETING[10],
  HSC_BUSINESS_MARKETING[15],
  HSC_BUSINESS_MARKETING[17],
  HSC_BUSINESS_FINANCE[0],
  HSC_BUSINESS_FINANCE[7],
  HSC_BUSINESS_FINANCE[8],
  HSC_BUSINESS_FINANCE[15],
  HSC_BUSINESS_FINANCE[21],
  HSC_BUSINESS_HUMAN_RESOURCES[0],
  HSC_BUSINESS_HUMAN_RESOURCES[3],
  HSC_BUSINESS_HUMAN_RESOURCES[5],
  HSC_BUSINESS_HUMAN_RESOURCES[15],
  HSC_BUSINESS_HUMAN_RESOURCES[18]
];

// ===================================================
// HSC_ECONOMICS_GLOBAL_ECONOMY (25 Questions)
// ===================================================
const HSC_ECONOMICS_GLOBAL_ECONOMY = [
  {
    question: "Which of the following best defines Gross World Product (GWP)?",
    options: [
      "The total aggregate market value of all final goods and services produced worldwide in a given year",
      "The total volume of international trade merchandise exchanged between nations annually",
      "The sum of foreign direct investment flows minus global foreign debt liabilities",
      "The combined gross domestic product of the member economies of the G20"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Gross World Product (GWP) represents the total aggregate monetary value of all finished goods and services produced globally over a specific period.",
    topic: "Topic 1: Global Economy"
  },
  {
    question: "Which international transmission channel explains how a recession in the United States causes falling export revenues and lower GDP growth in Australia?",
    options: [
      "The international business cycle",
      "The financial speculation corridor",
      "The unilateral transfer conduit",
      "The comparative advantage paradigm"
    ],
    correctIndex: 1,
    timeLimit: 20,
    explanation: "The international business cycle transmits economic shocks across borders through linked trade volumes, commodity demand, investment flows, and consumer confidence.",
    topic: "Topic 1: Global Economy"
  },
  {
    question: "According to David Ricardo\u0027s Theory of Comparative Advantage, international trade mutually benefits two economies when:",
    options: [
      "Each country specializes in producing goods for which it incurs the lowest opportunity cost",
      "Both countries apply identical protective tariff rates to balance their bilateral trade accounts",
      "One country can produce every good using fewer total labor hours than the other",
      "Both nations maintain persistent surpluses in their Balance on Goods and Services"
    ],
    correctIndex: 2,
    timeLimit: 20,
    explanation: "Comparative advantage demonstrates that total global output and welfare expand when nations specialize in goods where their opportunity cost of production is lowest.",
    topic: "Topic 1: Global Economy"
  },
  {
    question: "What is the primary economic effect of a government imposing a protective tariff on imported cars?",
    options: [
      "Resource allocation shifts toward highly competitive export industries with zero welfare loss",
      "Domestic price falls, imported car volumes surge, and government tariff revenue is eliminated",
      "Domestic production contracts, domestic employment drops, and consumer surplus expands",
      "Domestic price rises, domestic production expands, and consumer surplus decreases with a net deadweight loss"
    ],
    correctIndex: 3,
    timeLimit: 20,
    explanation: "Tariffs raise the domestic price, expand inefficient domestic output, reduce consumer surplus, and generate production and consumption deadweight losses.",
    topic: "Topic 1: Global Economy"
  },
  {
    question: "How does a domestic production subsidy differ from an import tariff in its economic effects?",
    options: [
      "A subsidy directly raises consumer prices above world market levels",
      "A subsidy is funded through government budget expenditure rather than raising import prices directly",
      "A subsidy completely eliminates foreign competition by establishing a legal quota ceiling",
      "A subsidy does not cause any misallocation of national economic resources"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Unlike tariffs which increase prices directly for consumers, subsidies shift domestic supply downwards by using taxpayer funds, keeping consumer prices at world levels.",
    topic: "Topic 1: Global Economy"
  },
  {
    question: "What is an import quota?",
    options: [
      "A legal restriction setting the maximum physical volume of a specific good permitted into an economy",
      "A direct financial grant paid to domestic manufacturers to reduce export costs",
      "A progressive consumption excise levied exclusively on imported luxury consumer goods",
      "An exchange control regulation requiring import transactions to be settled in domestic currency"
    ],
    correctIndex: 1,
    timeLimit: 15,
    explanation: "An import quota is a quantitative physical ceiling that restricts the total volume of imports allowed into an economy over a designated timeframe.",
    topic: "Topic 1: Global Economy"
  },
  {
    question: "What is the core argument of the infant industry justification for protection?",
    options: [
      "Industries that employ younger apprentices deserve government subsidies to lower national youth unemployment",
      "Key manufacturing sectors must be permanently shielded to guarantee military independence during conflicts",
      "Temporary protection allows newly established industries to achieve economies of scale and become globally competitive",
      "Tariffs should permanently equalize domestic production costs with low-wage foreign competitors"
    ],
    correctIndex: 2,
    timeLimit: 20,
    explanation: "The infant industry argument contends that newly established firms need temporary shelter from mature foreign rivals to achieve scale economies and lower unit costs.",
    topic: "Topic 1: Global Economy"
  },
  {
    question: "In international trade economics, dumping is defined as:",
    options: [
      "Devaluing a nation\u0027s nominal exchange rate to stimulate agricultural export volumes",
      "Selling exports in a foreign market at a price below their normal cost of production or domestic market price",
      "Imposing emergency embargoes on foreign food imports following domestic harvest surpluses",
      "The unregulated disposal of toxic industrial manufacturing by-products in foreign territories"
    ],
    correctIndex: 3,
    timeLimit: 20,
    explanation: "Dumping occurs when a foreign firm exports products at prices below their production costs or domestic selling prices, often to eliminate competitors and gain market share.",
    topic: "Topic 1: Global Economy"
  },
  {
    question: "Which fundamental principle governs the World Trade Organization (WTO) under the Most Favoured Nation (MFN) rule?",
    options: [
      "Any trade concession granted to one member nation must be extended immediately and unconditionally to all other WTO members",
      "Advanced economies must provide free trade access to developing economies while maintaining domestic tariffs",
      "Member economies must peg their currencies to the US dollar within a narrow target band",
      "Trading partners must guarantee zero bilateral trade deficits across manufactured merchandise"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "The MFN principle requires that any tariff reduction or commercial privilege granted to one nation must immediately be extended to all other WTO members.",
    topic: "Topic 1: Global Economy"
  },
  {
    question: "What is the primary statutory role of the International Monetary Fund (IMF)?",
    options: [
      "Maintaining international financial stability and assisting economies experiencing balance of payments crises",
      "Financing long-term humanitarian infrastructure projects in developing nations",
      "Enforcing global minimum wage standards and occupational health regulations across multinational corporations",
      "Managing the sovereign debt default proceedings of private commercial corporate banks"
    ],
    correctIndex: 1,
    timeLimit: 20,
    explanation: "The IMF serves as the international lender of last resort, providing emergency financial assistance and conditional structural reform programs to stabilize balance of payments.",
    topic: "Topic 1: Global Economy"
  },
  {
    question: "How does the World Bank primarily fulfill its developmental mandate?",
    options: [
      "By conducting open-market bond auctions on behalf of the Group of Seven (G7) central banks",
      "By providing low-interest loans, grants, and technical assistance for long-term economic development and poverty alleviation",
      "By regulating the international foreign exchange currency derivative market",
      "By subsidizing the shipping logistics costs of primary agricultural commodities from Africa"
    ],
    correctIndex: 2,
    timeLimit: 20,
    explanation: "The World Bank focuses on long-term poverty reduction and economic development by financing capital infrastructure, education, and institutional development.",
    topic: "Topic 1: Global Economy"
  },
  {
    question: "What distinguishes a Customs Union from a standard Free Trade Area?",
    options: [
      "A Customs Union mandates the replacement of domestic currencies with a unified regional monetary tender",
      "A Customs Union allows full mobility of labour and capital across national borders, whereas a Free Trade Area does not",
      "A Customs Union abolishes all domestic income taxation among participant economies",
      "Member countries in a Customs Union adopt a common external tariff policy against non-member nations"
    ],
    correctIndex: 3,
    timeLimit: 20,
    explanation: "While both remove tariffs internally, a Customs Union also adopts a unified common external tariff on imports entering from non-member countries.",
    topic: "Topic 1: Global Economy"
  },
  {
    question: "In trade economics, trade diversion occurs when:",
    options: [
      "A preferential trade agreement redirects trade away from a lower-cost global producer toward a higher-cost member nation",
      "New international trade is generated between members due to the removal of protective internal trade barriers",
      "Domestic firms relocate their manufacturing facilities overseas to exploit lower environmental regulations",
      "A country replaces merchandise exports with financial portfolio derivative outflows"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Trade diversion occurs when preferential tariff elimination within a trading bloc causes imports to shift from efficient low-cost global producers to less efficient member nations.",
    topic: "Topic 1: Global Economy"
  },
  {
    question: "Which of the following is a multilateral trade agreement?",
    options: [
      "The China-Australia Free Trade Agreement (ChAFTA)",
      "The Australia-United States Free Trade Agreement (AUSFTA)",
      "The Comprehensive and Progressive Agreement for Trans-Pacific Partnership (CPTPP)",
      "The Australia-United Kingdom Free Trade Agreement (AUKFTA)"
    ],
    correctIndex: 1,
    timeLimit: 20,
    explanation: "The CPTPP is a multilateral (plurilateral) trade agreement involving 11 Pacific Rim economies, whereas AUSFTA, ChAFTA, and AUKFTA are bilateral pacts.",
    topic: "Topic 1: Global Economy"
  },
  {
    question: "Why is Purchasing Power Parity (PPP) preferred over market exchange rates when comparing international living standards?",
    options: [
      "PPP measures only the output produced by government-owned public business enterprises",
      "Market exchange rates are strictly fixed by the United Nations Development Programme",
      "PPP adjusts for national differences in domestic price levels and the cost of living between economies",
      "Market exchange rates automatically exclude the value of intermediate imported capital goods"
    ],
    correctIndex: 2,
    timeLimit: 20,
    explanation: "PPP adjusts nominal GNI figures by measuring what currency can actually purchase domestically, accounting for lower prices of non-traded goods in developing nations.",
    topic: "Topic 1: Global Economy"
  },
  {
    question: "The Human Development Index (HDI) measures an economy\u0027s developmental progress across which three core dimensions?",
    options: [
      "Carbon emissions per capita, corporate tax rate, and Gini coefficient index",
      "GDP growth rate, unemployment rate, and headline consumer price index inflation",
      "Current Account balance, net foreign debt ratio, and labor productivity indices",
      "GNI per capita (PPP), life expectancy at birth, and mean/expected years of schooling"
    ],
    correctIndex: 3,
    timeLimit: 20,
    explanation: "The UNDP HDI evaluates human development across: a decent standard of living (GNI per capita PPP), a long and healthy life (life expectancy), and access to knowledge (education).",
    topic: "Topic 1: Global Economy"
  },
  {
    question: "What does a global Gini coefficient of 0.70 indicate about worldwide income distribution?",
    options: [
      "Income is distributed with extreme equality across the global population",
      "There is a substantial degree of income inequality across the global population",
      "Seventy percent of the global population receives identical real median annual income",
      "Global wealth has expanded at an average compounded annual rate of 7.0%"
    ],
    correctIndex: 0,
    timeLimit: 15,
    explanation: "A Gini coefficient ranges from 0 (perfect equality) to 1 (absolute inequality). A value of 0.70 reflects very severe inequality in global income distribution.",
    topic: "Topic 1: Global Economy"
  },
  {
    question: "What is the statistical distinction between global income inequality and global wealth inequality?",
    options: [
      "Global wealth inequality is significantly more concentrated and unequal than global income inequality",
      "Income is a stock measure whereas wealth is a flow measure calculated monthly",
      "Global income inequality has steadily increased while wealth inequality has dropped to zero",
      "The Gini coefficient can only measure income, whereas wealth is measured by the Consumer Price Index"
    ],
    correctIndex: 1,
    timeLimit: 20,
    explanation: "Wealth (net accumulated assets) is substantially more unequally distributed worldwide than income (annual earnings), with the top 1% owning roughly half of total global net wealth.",
    topic: "Topic 1: Global Economy"
  },
  {
    question: "Which characteristic is typical of developing economies compared to advanced economies?",
    options: [
      "Extremely low birth rates, high public health expenditure, and persistent capital export surpluses",
      "Dominance of advanced service industries, high tertiary education enrollment, and sophisticated bond markets",
      "Heavy reliance on primary agricultural commodities, low capital accumulation, and weak institutional governance",
      "Zero tariffs on imported manufactured goods and fully floating exchange rate regimes"
    ],
    correctIndex: 2,
    timeLimit: 20,
    explanation: "Developing nations typically suffer from low per capita incomes, reliance on primary exports, low savings rates (savings-investment gap), and poor infrastructure.",
    topic: "Topic 1: Global Economy"
  },
  {
    question: "What threshold distinguishes Foreign Direct Investment (FDI) from foreign portfolio investment?",
    options: [
      "Portfolio investment is restricted strictly to bilateral real estate acquisitions by private citizens",
      "FDI refers exclusively to government sovereign purchases of foreign corporate commercial debt bonds",
      "Portfolio investment requires a minimum five-year holding lock-in period, whereas FDI is day-traded",
      "FDI involves acquiring at least 10% voting equity in an enterprise, reflecting a lasting strategic management interest"
    ],
    correctIndex: 3,
    timeLimit: 20,
    explanation: "IMF and ABS standards define FDI as acquiring 10% or more of voting power in a resident enterprise, conferring direct influence over management operations.",
    topic: "Topic 1: Global Economy"
  },
  {
    question: "How do Transnational Corporations (TNCs) utilize transfer pricing within global supply chains?",
    options: [
      "By routing intra-firm trade transactions through low-tax jurisdictions to minimize global corporate tax liabilities",
      "By publicly publishing production unit costs to maintain fair pricing compliance with the WTO",
      "By subsidizing local wages in developing nations to match advanced economy minimum wage rates",
      "By transferring intellectual property ownership to domestic consumer protection tribunals"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Transfer pricing involves pricing internal cross-border transactions between related subsidiaries so that profits are booked in low-tax jurisdictions, reducing overall tax.",
    topic: "Topic 1: Global Economy"
  },
  {
    question: "Which market mechanism was established under the Kyoto Protocol and Paris Agreement to reduce global greenhouse gas emissions efficiently?",
    options: [
      "Mandatory universal flat-rate worldwide vehicle fuel tariffs",
      "International emissions trading and certified carbon credit offset markets",
      "The complete prohibition of maritime freight container transport across oceans",
      "A global cap on sovereign government borrowing for renewable energy projects"
    ],
    correctIndex: 1,
    timeLimit: 20,
    explanation: "International climate treaties facilitate market-based mechanisms such as emissions trading systems (ETS) and carbon offset markets to lower emissions at the lowest marginal cost.",
    topic: "Topic 1: Global Economy"
  },
  {
    question: "Which policy was a pivotal catalyst for China\u0027s rapid integration into the global economy from 1978 onwards?",
    options: [
      "The unilateral adoption of the US dollar as China\u0027s sole legal domestic currency tender",
      "The immediate nationalization of all agricultural land and closure of maritime container ports",
      "The Open Door Policy, establishment of Special Economic Zones (SEZs), and accession to the WTO in 2001",
      "The permanent imposition of a 100% tariff on all imported manufacturing capital equipment"
    ],
    correctIndex: 2,
    timeLimit: 20,
    explanation: "Deng Xiaoping\u0027s Open Door Policy (1978), coastal SEZs offering tax incentives for FDI, and 2001 WTO accession transformed China into the world\u0027s leading export powerhouse.",
    topic: "Topic 1: Global Economy"
  },
  {
    question: "What trade-off has China experienced as a direct consequence of its export-led globalization model?",
    options: [
      "A rapid drop in secondary schooling accompanied by hyperinflation above 50% per annum",
      "Massive industrialization accompanied by a total elimination of national carbon emissions",
      "High economic growth accompanied by persistent deficits on its merchandise trade balance",
      "Rapid real GDP growth accompanied by a widening inequality gap between coastal urban and interior rural regions"
    ],
    correctIndex: 3,
    timeLimit: 20,
    explanation: "While lifting over 800 million people out of extreme poverty, China\u0027s market reforms led to sharp increases in the Gini coefficient and severe coastal-rural income disparities.",
    topic: "Topic 1: Global Economy"
  },
  {
    question: "Why have advanced economies increasingly shifted toward bilateral and regional trade agreements rather than comprehensive WTO rounds?",
    options: [
      "Consensus-based negotiations among 164 diverse WTO members have stalled (e.g. Doha Round), making smaller pacts faster to conclude",
      "The WTO charter legally prohibited members from trading in manufactured computer equipment after 2010",
      "Bilateral agreements guarantee that neither participating nation will ever suffer domestic cyclical unemployment",
      "Regional trading agreements eliminate the need for nations to maintain domestic customs inspection agencies"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "The complexity of achieving unanimous consensus among over 160 members across contentious issues like agricultural subsidies caused the Doha Round to stall, prompting bilateral deals.",
    topic: "Topic 1: Global Economy"
  }
];

// ===================================================
// HSC_ECONOMICS_AUSTRALIAS_PLACE (25 Questions)
// ===================================================
const HSC_ECONOMICS_AUSTRALIAS_PLACE = [
  {
    question: "How has the geographic direction of Australia\u0027s exports evolved over the past six decades?",
    options: [
      "A dramatic shift from the United Kingdom and Europe toward North-East Asian economies, especially China and Japan",
      "A steady withdrawal from Asian markets in favor of exclusive preferential trade with Latin America",
      "An exclusive concentration of agricultural exports toward North American Pacific ports",
      "A complete redirection toward African developing economies following the entry into the CPTPP"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Following the UK\u0027s 1973 accession to the EEC and rapid Asian industrialisation, Australia\u0027s trade shifted decisively toward Japan, South Korea, China, and ASEAN.",
    topic: "Topic 2: Australia\u0027s Place"
  },
  {
    question: "What primary structural feature characterizes the commodity composition of Australia\u0027s merchandise exports?",
    options: [
      "Dominance of complex high-technology consumer electronics and aerospace engineering equipment",
      "Heavy reliance on primary commodities and mineral resources (such as iron ore, coal, and LNG) with low elaboration",
      "An overwhelming concentration of mass-manufactured automotive and textile consumer goods",
      "Equal export shares distributed evenly across heavy chemicals, pharmaceuticals, and telecommunications hardware"
    ],
    correctIndex: 1,
    timeLimit: 20,
    explanation: "Australia\u0027s export base is dominated by high-value primary resource commodities (iron ore, metallurgical coal, LNG, gold) and agricultural produce, reflecting its comparative advantage.",
    topic: "Topic 2: Australia\u0027s Place"
  },
  {
    question: "In Australia\u0027s Balance of Payments accounts, which identity must mathematically hold under a floating exchange rate system?",
    options: [
      "The Current Account Balance must permanently equal the Reserve Bank of Australia cash rate target",
      "Balance on Goods and Services must always equal the Net Primary Income deficit",
      "Current Account Balance + Capital and Financial Account Balance + Net Errors and Omissions = 0",
      "Net Foreign Debt must equal total domestic currency notes and coins in circulation"
    ],
    correctIndex: 2,
    timeLimit: 20,
    explanation: "Because all foreign exchange transactions have double-entry counterparts, the Balance of Payments always sums to zero: CA + KAFA + Net Errors and Omissions = 0.",
    topic: "Topic 2: Australia\u0027s Place"
  },
  {
    question: "An Australian mining enterprise exports  million of lithium ore to South Korea and imports  million of mining haul trucks from Germany. What is the net impact on the Balance on Goods and Services (BOGS)?",
    options: [
      "A capital account transfer of  million",
      "A deficit contribution of  million",
      "A net primary income outflow of  million",
      "A surplus contribution of  million"
    ],
    correctIndex: 3,
    timeLimit: 20,
    explanation: "BOGS = Goods \u0026 Services Exports () minus Imports () = + million surplus contribution.",
    topic: "Topic 2: Australia\u0027s Place"
  },
  {
    question: "Which financial transaction is classified under the Net Primary Income (NPI) sub-account of the Current Account?",
    options: [
      "Interest payments paid by an Australian commercial bank on its overseas corporate borrowing",
      "The physical purchase of an offshore container cargo vessel by an Australian logistics firm",
      "Emergency financial disaster relief aid provided by the Australian Government to Vanuatu",
      "Foreign tourists purchasing dining and hotel accommodations in Sydney"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Net Primary Income records earnings on cross-border investments: interest payments on foreign debt, and dividend/profit payments on foreign equity holdings.",
    topic: "Topic 2: Australia\u0027s Place"
  },
  {
    question: "Where are unilateral transfers such as foreign aid, emigrant personal savings, and offshore pensions recorded in the Balance of Payments?",
    options: [
      "Net Primary Income in the Current Account",
      "Net Secondary Income in the Current Account",
      "The Financial Derivatives account of the Financial Account",
      "The Reserve Assets account of the Reserve Bank of Australia"
    ],
    correctIndex: 1,
    timeLimit: 20,
    explanation: "Net Secondary Income (secondary income) covers non-market unrequited transfers where no economic good or service is received in return (aid, pensions, donations).",
    topic: "Topic 2: Australia\u0027s Place"
  },
  {
    question: "Given the following annual Balance of Payments data: BOGS = + billion; Net Primary Income = - billion; Net Secondary Income = - billion. What is the Current Account Balance?",
    options: [
      "A deficit of  billion (- billion)",
      "A surplus of  billion (+ billion)",
      "A deficit of  billion (- billion)",
      "A balanced account of  billion"
    ],
    correctIndex: 2,
    timeLimit: 25,
    explanation: "Current Account Balance = BOGS () + NPI (-) + NSI (-) = - billion (a Current Account Deficit of ).",
    topic: "Topic 2: Australia\u0027s Place"
  },
  {
    question: "What transaction is recorded in Australia\u0027s Capital Account (within the Capital and Financial Account)?",
    options: [
      "Export revenue generated from overseas international students paying university tuition",
      "Dividends paid to foreign shareholders holding stock in BHP Group",
      "The issuance of 10-year Commonwealth Government Treasury Bonds to Japanese pension funds",
      "Capital transfers such as migrant asset transfers and the acquisition of non-produced, non-financial assets (e.g. intellectual property patents/trademarks)"
    ],
    correctIndex: 3,
    timeLimit: 20,
    explanation: "The Capital Account is minor and records conditional debt forgiveness, migrant transfers, and purchases of non-produced/non-financial assets (patents, copyrights, franchises).",
    topic: "Topic 2: Australia\u0027s Place"
  },
  {
    question: "An overseas pension fund purchases  million of shares in an ASX-listed Australian logistics company, acquiring a 2.5% equity stake. Where is this transaction recorded?",
    options: [
      "Portfolio Investment in the Financial Account",
      "Direct Investment in the Financial Account",
      "Net Primary Income in the Current Account",
      "The Capital Account reserve asset buffer"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Equity purchases of less than 10% voting ownership are classified as Portfolio Investment. Direct investment requires 10% or greater equity control.",
    topic: "Topic 2: Australia\u0027s Place"
  },
  {
    question: "What has been the primary structural driver of Australia\u0027s persistent Net Primary Income (NPI) deficit over several decades?",
    options: [
      "Chronic deficits on the Balance on Goods and Services caused by falling mining export volumes",
      "Servicing costs (interest and dividends) on high net foreign liabilities stemming from a national savings-investment gap",
      "Excessive government humanitarian foreign aid donations distributed to developing economies",
      "Penalties paid to the World Trade Organization for breaching international anti-dumping rules"
    ],
    correctIndex: 1,
    timeLimit: 20,
    explanation: "Australia has historically had high investment needs relative to domestic savings, requiring foreign capital inflows that generate ongoing interest and dividend obligations.",
    topic: "Topic 2: Australia\u0027s Place"
  },
  {
    question: "According to macroeconomic theory, what relationship links national savings, domestic investment, and the Current Account Deficit (CAD)?",
    options: [
      "CAD = Government Tax Receipts (T) minus Total Household Consumption (C)",
      "CAD = National Savings (S) multiplied by the Reserve Bank cash rate target",
      "CAD = Domestic Investment (I) minus National Savings (S)",
      "CAD = Total Mineral Export Value divided by the Trade Weighted Index"
    ],
    correctIndex: 2,
    timeLimit: 20,
    explanation: "The savings-investment identity demonstrates that an economy investing more than it saves internally (I \u003e S) must finance the gap through net foreign capital inflows, generating a CAD.",
    topic: "Topic 2: Australia\u0027s Place"
  },
  {
    question: "What is the central thesis of the \u0027Pitchford Thesis\u0027 (the \u0027consenting adults\u0027 view of the Current Account Deficit)?",
    options: [
      "Public foreign borrowing should be subsidized to offset private sector capital flight",
      "The federal government must mandate balanced bilateral trade accounts with every trading partner",
      "A nation\u0027s Current Account should always be held strictly in surplus to prevent currency appreciation",
      "A CAD driven by private sector borrowing for commercially sound investments is sustainable and does not warrant government intervention"
    ],
    correctIndex: 3,
    timeLimit: 20,
    explanation: "Professor John Pitchford argued that if foreign debt is undertaken by private individuals and firms acting in their commercial self-interest, it generates returns to service itself.",
    topic: "Topic 2: Australia\u0027s Place"
  },
  {
    question: "How is an economy\u0027s Terms of Trade (TOT) index calculated?",
    options: [
      "(Export Price Index / Import Price Index) x 100",
      "(Total Export Volumes / Total Import Volumes) x 100",
      "(Current Account Balance / Gross Domestic Product) x 100",
      "(Nominal Exchange Rate / Real Exchange Rate) x 100"
    ],
    correctIndex: 0,
    timeLimit: 15,
    explanation: "Terms of Trade measures export prices relative to import prices: TOT = (Export Price Index / Import Price Index) x 100.",
    topic: "Topic 2: Australia\u0027s Place"
  },
  {
    question: "If Australia\u0027s Export Price Index rises from 100 to 120 while the Import Price Index rises from 100 to 105, what has occurred?",
    options: [
      "The Terms of Trade have deteriorated, reducing national real gross domestic income",
      "The Terms of Trade have improved, increasing the volume of imports Australia can purchase per unit of exports",
      "Australia\u0027s Balance on Goods and Services will automatically transition into a permanent structural deficit",
      "The Australian dollar must immediately depreciate by precisely 15% against the US dollar"
    ],
    correctIndex: 1,
    timeLimit: 20,
    explanation: "TOT rises to (120 / 105) x 100 = 114.3. An improvement means a given volume of exports can buy more imports, increasing national purchasing power.",
    topic: "Topic 2: Australia\u0027s Place"
  },
  {
    question: "Why did the Australian Government and Reserve Bank float the Australian dollar in December 1983?",
    options: [
      "To legally prohibit foreign hedge funds from participating in domestic bond auctions",
      "To guarantee that the Australian dollar would maintain absolute parity with the British Pound Sterling",
      "To allow the exchange rate to act as an automatic shock absorber against external terms of trade shocks and insulate domestic monetary policy",
      "To prevent Australian mining corporations from exporting raw iron ore to overseas steel mills"
    ],
    correctIndex: 2,
    timeLimit: 20,
    explanation: "Floating the AUD allowed market forces to clear foreign exchange demand and supply, acting as a shock absorber against external commodity price swings while preserving monetary autonomy.",
    topic: "Topic 2: Australia\u0027s Place"
  },
  {
    question: "What does the Trade Weighted Index (TWI) measure?",
    options: [
      "The percentage of total Australian export revenue generated by multinational foreign corporations",
      "The physical weight in metric tonnes of bulk iron ore and metallurgical coal shipped through Australian ports annually",
      "The bilateral purchasing power parity of the Australian dollar exclusively against the US Dollar and Euro",
      "The value of the Australian dollar against a basket of currencies of Australia\u0027s major trading partners, weighted by their share of two-way merchandise trade"
    ],
    correctIndex: 3,
    timeLimit: 20,
    explanation: "The TWI provides a comprehensive measure of the AUD\u0027s overall international value by weighting partner currencies according to their share in Australia\u0027s two-way trade.",
    topic: "Topic 2: Australia\u0027s Place"
  },
  {
    question: "Which combination of factors will typically cause an appreciation of the Australian dollar in foreign exchange markets?",
    options: [
      "Higher domestic interest rates relative to global rates, rising global commodity prices, and strong domestic economic growth",
      "Aggressive RBA cash rate cuts, falling global iron ore prices, and rising domestic inflation expectations",
      "Surging Australian consumer demand for imported electronics and capital flight by foreign investors",
      "A sharp deterioration in the terms of trade and escalating geopolitical conflict among major export trading partners"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Higher domestic interest rates attract foreign capital inflows (increasing AUD demand), while higher commodity prices boost export receipts, pushing the AUD upwards.",
    topic: "Topic 2: Australia\u0027s Place"
  },
  {
    question: "What is the valuation effect on Australia\u0027s foreign debt when the Australian dollar depreciates?",
    options: [
      "The Australian dollar value of all foreign liabilities immediately drops to zero",
      "The Australian dollar value of foreign currency-denominated debt increases, worsening net foreign debt in AUD terms",
      "Domestic interest rates on mortgages are automatically eliminated by the Reserve Bank",
      "Foreign creditors are legally obligated to convert their bond holdings into domestic Australian shares"
    ],
    correctIndex: 1,
    timeLimit: 20,
    explanation: "When the AUD depreciates, the value of debt denominated in foreign currencies (like USD) requires more Australian dollars to service and repay, increasing measured net foreign debt.",
    topic: "Topic 2: Australia\u0027s Place"
  },
  {
    question: "What economic phenomenon does the J-Curve effect illustrate following a real currency depreciation?",
    options: [
      "The government budget deficit expands permanently because tariff revenue is indexed to the exchange rate",
      "Unemployment drops rapidly before surging to record levels as consumer price inflation takes hold",
      "The trade balance initially deteriorates due to pre-existing import contracts before improving in the medium term as price elasticities adjust",
      "Foreign direct investment surges immediately while portfolio capital flows permanently cease"
    ],
    correctIndex: 2,
    timeLimit: 20,
    explanation: "In the short run, import commitments are fixed in volume so higher import prices worsen the trade deficit. Over time, higher export competitiveness and import substitution improve the balance.",
    topic: "Topic 2: Australia\u0027s Place"
  },
  {
    question: "What constitutes Australia\u0027s Net Foreign Liabilities (NFL)?",
    options: [
      "Gross merchandise imports minus gross merchandise export revenue over a financial year",
      "Total government sovereign debt minus official Reserve Bank foreign currency foreign exchange holdings",
      "The cumulative sum of all annual Commonwealth budget deficits since Federation",
      "Net Foreign Debt (gross debt minus Australian lending abroad) plus Net Foreign Equity (foreign equity in Australia minus Australian equity abroad)"
    ],
    correctIndex: 3,
    timeLimit: 20,
    explanation: "Net Foreign Liabilities (NFL) = Net Foreign Debt (borrowing obligations) + Net Foreign Equity (foreign ownership of Australian shares and real estate minus Australian assets overseas).",
    topic: "Topic 2: Australia\u0027s Place"
  },
  {
    question: "Why is the Debt Servicing Ratio an important metric for evaluating an economy\u0027s external stability?",
    options: [
      "It measures the proportion of total export income required to pay interest on net foreign debt",
      "It calculates the percentage of the labor force employed in the primary resource export sector",
      "It determines the ratio of automatic stabilizers to discretionary budget stimulus spending",
      "It indicates the exact rate of headline inflation that triggers an increase in the cash rate"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "The Debt Servicing Ratio (interest payments on foreign debt / export revenue) assesses a country\u0027s capacity to service its external borrowing without jeopardizing international solvency.",
    topic: "Topic 2: Australia\u0027s Place"
  },
  {
    question: "Which structural factor contributed significantly to Australia achieving unprecedented Current Account Surpluses (CAS) between 2019 and 2023?",
    options: [
      "The complete elimination of all foreign investment equity holdings in Australian mining corporations",
      "Booming commodity export receipts (iron ore, LNG, coal) combined with higher national savings driven by mandatory superannuation",
      "A permanent statutory cap that prohibited Australian households from purchasing imported consumer vehicles",
      "The Reserve Bank pegging the Australian dollar at parity with the Chinese Renminbi"
    ],
    correctIndex: 1,
    timeLimit: 20,
    explanation: "Surging commodity export prices generated record trade surpluses (BOGS), while growing domestic superannuation assets and deleveraging helped narrow the national savings-investment gap.",
    topic: "Topic 2: Australia\u0027s Place"
  },
  {
    question: "What was the primary long-term microeconomic rationale behind Australia\u0027s progressive reduction of protective tariffs since the 1970s?",
    options: [
      "To generate substantial increases in federal excise tax revenues collected at maritime borders",
      "To immediately eliminate all forms of seasonal and frictional unemployment across regional communities",
      "To reallocate scarce labor and capital into efficient, internationally competitive export industries and foster technical innovation",
      "To protect inefficient manufacturing firms from the discipline of global price competition"
    ],
    correctIndex: 2,
    timeLimit: 20,
    explanation: "Phasing down protection forced domestic industries to specialize in competitive sectors, enhancing dynamic and allocative efficiency, lowering consumer costs, and raising productivity.",
    topic: "Topic 2: Australia\u0027s Place"
  },
  {
    question: "What short-term cost was experienced in Australia as a consequence of dismantling tariff protection in the automotive and textile manufacturing sectors?",
    options: [
      "The automatic suspension of Australia\u0027s membership in the World Trade Organization",
      "Hyperinflation across all imported durable consumer electrical products",
      "A permanent collapse in the profitability of primary mineral mining operations",
      "Structural unemployment and factory closures in specific manufacturing regions such as Geelong and Adelaide"
    ],
    correctIndex: 3,
    timeLimit: 20,
    explanation: "Tariff reductions exposed uncompetitive manufacturing firms to foreign competition, causing plant closures and concentrated structural unemployment among displaced factory workers.",
    topic: "Topic 2: Australia\u0027s Place"
  },
  {
    question: "The China-Australia Free Trade Agreement (ChAFTA), signed in 2015, delivered which primary benefit to the Australian economy?",
    options: [
      "The progressive elimination of tariffs on key Australian agricultural, resources, and services exports entering China",
      "The mandatory requirement that all Chinese consumer electronics must be assembled in Australian manufacturing hubs",
      "A guarantee that China would exclusively purchase 100% of its thermal coal requirements from New South Wales",
      "The immediate integration of Australia into China\u0027s domestic central banking clearing system"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "ChAFTA eliminated tariffs on over 85% of Australian goods entering China (expanding to 95% at full implementation), securing preferential market access for agriculture, resources, and services.",
    topic: "Topic 2: Australia\u0027s Place"
  }
];

// ===================================================
// HSC_ECONOMICS_ECONOMIC_ISSUES (25 Questions)
// ===================================================
const HSC_ECONOMICS_ECONOMIC_ISSUES = [
  {
    question: "How is an economy\u0027s real economic growth rate calculated over a given annual period?",
    options: [
      "The percentage change in real Gross Domestic Product (GDP), adjusting nominal GDP for the effects of inflation",
      "The annual increase in the total nominal value of currency notes in circulation plus bank deposits",
      "The percentage expansion in the Trade Weighted Index plus the current cash rate target",
      "The net change in the Australian Securities Exchange (ASX200) index over the financial year"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Economic growth is measured as the percentage change in real GDP over time: [(Real GDP Year 2 - Real GDP Year 1) / Real GDP Year 1] x 100, removing the distortion of price changes.",
    topic: "Topic 3: Economic Issues"
  },
  {
    question: "In the Keynesian Aggregate Demand model, what are the core components of Aggregate Demand (AD)?",
    options: [
      "AD = Total Domestic Output (Y) - Taxation (T) + Superannuation (S)",
      "AD = Consumption (C) + Investment (I) + Government Spending (G) + Net Exports (X - M)",
      "AD = Gross National Disposable Income multiplied by the marginal propensity to save",
      "AD = Cash Rate Target + Nominal Mortgage Rates + Total Business Credit"
    ],
    correctIndex: 1,
    timeLimit: 15,
    explanation: "Aggregate Demand represents total planned spending on domestic final goods and services: AD = C + I + G + (X - M).",
    topic: "Topic 3: Economic Issues"
  },
  {
    question: "In macroeconomic theory, if the Marginal Propensity to Consume (MPC) is 0.80, what is the value of the Marginal Propensity to Save (MPS)?",
    options: [
      "0.80",
      "1.25",
      "0.20",
      "5.00"
    ],
    correctIndex: 2,
    timeLimit: 15,
    explanation: "Because any additional dollar of disposable income is either consumed or saved, MPC + MPS = 1. Therefore, MPS = 1 - 0.80 = 0.20.",
    topic: "Topic 3: Economic Issues"
  },
  {
    question: "What is the formula for calculating the simple Keynesian economic multiplier (k)?",
    options: [
      "k = Total Investment (I) / Total National Savings (S)",
      "k = MPC / (1 - MPS)",
      "k = (Nominal GDP / CPI) x 100",
      "k = 1 / (1 - MPC)  or  k = 1 / MPS"
    ],
    correctIndex: 3,
    timeLimit: 15,
    explanation: "The simple multiplier measures how an initial change in autonomous spending leads to a magnified change in equilibrium national income: k = 1 / (1 - MPC) = 1 / MPS.",
    topic: "Topic 3: Economic Issues"
  },
  {
    question: "If an economy\u0027s Marginal Propensity to Save (MPS) is 0.25 and business investment expenditure increases by  billion, what will be the total expansion in equilibrium national income (Y)?",
    options: [
      " billion",
      " billion",
      " billion",
      " billion"
    ],
    correctIndex: 0,
    timeLimit: 25,
    explanation: "Multiplier k = 1 / MPS = 1 / 0.25 = 4. Total change in income = k x Change in Investment = 4 x  billion =  billion.",
    topic: "Topic 3: Economic Issues"
  },
  {
    question: "Which individual is officially classified as part of the Australian labor force by the Australian Bureau of Statistics (ABS)?",
    options: [
      "A 70-year-old retired pensioner who volunteers at a local community garden",
      "A 22-year-old university student working 4 hours per week at a retail bookstore",
      "A 35-year-old full-time parent who does not want and is not seeking paid employment",
      "A 15-year-old full-time secondary student engaged exclusively in classroom study"
    ],
    correctIndex: 1,
    timeLimit: 20,
    explanation: "The labor force consists of all employed persons (working 1 or more hours per week for pay) and all unemployed persons who are actively seeking and available for work.",
    topic: "Topic 3: Economic Issues"
  },
  {
    question: "How is an economy\u0027s Labor Force Participation Rate calculated?",
    options: [
      "(Unemployed Persons / Total Resident Population) x 100",
      "(Total Employed Persons / Total Labor Force) x 100",
      "(Total Labor Force / Working Age Population aged 15 and over) x 100",
      "(Full-Time Workers / Part-Time Workers) x 100"
    ],
    correctIndex: 2,
    timeLimit: 20,
    explanation: "The participation rate is the percentage of the civilian population aged 15 and over who are either working or actively seeking work: (Labor Force / Working Age Population) x 100.",
    topic: "Topic 3: Economic Issues"
  },
  {
    question: "An economy has a working age population of 20 million, a labor force of 14 million, and 700,000 unemployed persons actively seeking employment. What is the official unemployment rate?",
    options: [
      "70.0%",
      "3.5%",
      "7.0%",
      "5.0%"
    ],
    correctIndex: 3,
    timeLimit: 25,
    explanation: "Unemployment Rate = (Unemployed Persons / Total Labor Force) x 100 = (700,000 / 14,000,000) x 100 = 5.0%.",
    topic: "Topic 3: Economic Issues"
  },
  {
    question: "What distinguishes cyclical unemployment from structural unemployment?",
    options: [
      "Cyclical unemployment results from a downturn in the business cycle and deficient aggregate demand, whereas structural unemployment arises from a mismatch between worker skills and job requirements",
      "Cyclical unemployment is permanent and voluntary, whereas structural unemployment is caused exclusively by seasonal weather patterns",
      "Structural unemployment only affects workers aged 55 and older, whereas cyclical unemployment is confined to school leavers",
      "Cyclical unemployment cannot be reduced by government policy, whereas structural unemployment automatically disappears in recessions"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Cyclical unemployment stems from weak aggregate demand during economic slowdowns, while structural unemployment reflects fundamental shifts in technology or consumer tastes causing skill mismatches.",
    topic: "Topic 3: Economic Issues"
  },
  {
    question: "A retail sales assistant employed for 12 hours per week wants to work 35 hours per week and is actively applying for full-time positions. Under ABS labor market definitions, this worker is classified as:",
    options: [
      "Officially unemployed and included in headline unemployment statistics",
      "Underemployed (and included in the overall labor underutilisation rate)",
      "A discouraged worker outside of the civilian labor force",
      "Structurally unemployed due to technological automation"
    ],
    correctIndex: 1,
    timeLimit: 20,
    explanation: "Underemployment refers to workers who are employed part-time or casually but desire and are available to work more hours. They are counted as employed, but captured in the underutilisation rate.",
    topic: "Topic 3: Economic Issues"
  },
  {
    question: "Why does official headline unemployment understate the true extent of labor market slack?",
    options: [
      "It only counts individuals who have been unemployed for longer than 24 consecutive months",
      "It counts all pensioners and university students as fully employed full-time personnel",
      "It excludes hidden unemployment (discouraged jobseekers who ceased actively looking) and underemployment (part-time workers seeking more hours)",
      "It subtracts workers employed in the mining sector from the labor force"
    ],
    correctIndex: 2,
    timeLimit: 20,
    explanation: "The headline unemployment rate excludes \u0027hidden\u0027 unemployed (who give up looking due to poor job prospects) and treats a person working just one hour a week as fully employed.",
    topic: "Topic 3: Economic Issues"
  },
  {
    question: "What is the Non-Accelerating Inflation Rate of Unemployment (NAIRU)?",
    options: [
      "The rate of cyclical job losses that occurs when real GDP expands by more than 4% per annum",
      "The maximum legal proportion of the labor force that can be employed on part-time contracts",
      "The exact unemployment rate at which the Commonwealth Government budget reaches a zero headline cash balance",
      "The minimum level of unemployment below which wage pressures cause price inflation to accelerate (full employment)"
    ],
    correctIndex: 3,
    timeLimit: 20,
    explanation: "The NAIRU represents the level of full employment where cyclical unemployment is zero. Pushing unemployment below the NAIRU creates labor shortages, accelerating wage and price inflation.",
    topic: "Topic 3: Economic Issues"
  },
  {
    question: "Okun\u0027s Law states that to achieve a reduction in an economy\u0027s rate of unemployment, real GDP growth must:",
    options: [
      "Exceed the sum of labor productivity growth plus the growth rate of the labor force",
      "Equal the exact target cash rate set by the Reserve Bank of Australia",
      "Remain below the headline Consumer Price Index rate of inflation",
      "Match the percentage expansion of the Capital and Financial Account"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Okun\u0027s Law shows that because of population growth (labor supply growth) and rising worker productivity, real GDP must grow at around 3-3.5% annually in Australia just to prevent unemployment from rising.",
    topic: "Topic 3: Economic Issues"
  },
  {
    question: "How is headline inflation measured in Australia?",
    options: [
      "The monthly percentage fluctuation in global iron ore and coking coal spot market prices",
      "The annual percentage change in the Consumer Price Index (CPI), which tracks a representative basket of goods and services purchased by metropolitan households",
      "The percentage difference between official cash rate targets and commercial mortgage interest rates",
      "The annual change in the value of the Australian dollar against the US dollar"
    ],
    correctIndex: 1,
    timeLimit: 20,
    explanation: "The Consumer Price Index (CPI) compiled by the ABS measures quarterly price changes of a fixed regimen of household consumer goods and services across Australian capital cities.",
    topic: "Topic 3: Economic Issues"
  },
  {
    question: "Why does the Reserve Bank of Australia place strong emphasis on underlying (core) inflation measures like the trimmed mean and weighted median?",
    options: [
      "They exclude the prices of all imported goods to measure only domestic manufacturing inflation",
      "They are calculated exclusively by private commercial banks rather than the Australian Bureau of Statistics",
      "They strip out extreme price spikes and one-off volatile statistical outliers (such as fruit and fuel) to reveal the persistent underlying trend",
      "They represent the exact interest rates charged on corporate overdraft facilities"
    ],
    correctIndex: 2,
    timeLimit: 20,
    explanation: "Underlying inflation (trimmed mean / weighted median) removes the 15% largest price increases and decreases, giving policymakers a clear view of underlying inflationary pressures.",
    topic: "Topic 3: Economic Issues"
  },
  {
    question: "Demand-pull inflation is caused by which macroeconomic condition?",
    options: [
      "A nationwide collapse in commercial bank lending accompanied by surging household precautionary savings",
      "A sharp increase in the costs of production such as global crude oil supply shocks and surging statutory wages",
      "An aggressive appreciation of the domestic currency making imported finished consumer goods cheaper",
      "Aggregate demand exceeding the productive capacity of the economy near full employment (\u0027too much money chasing too few goods\u0027)"
    ],
    correctIndex: 3,
    timeLimit: 20,
    explanation: "Demand-pull inflation occurs when aggregate spending (AD) outpaces aggregate supply (AS) at near full capacity, enabling businesses to raise prices.",
    topic: "Topic 3: Economic Issues"
  },
  {
    question: "Cost-push inflation occurs when:",
    options: [
      "Rising production costs (e.g. wages, energy prices, raw materials) shift the Aggregate Supply curve to the left, driving price levels upward",
      "Consumer confidence surges, causing retail stores to clear inventory at steep discount sale prices",
      "The federal government delivers an unexpected budget surplus that absorbs discretionary household purchasing power",
      "The Reserve Bank increases the cash rate target to its highest historical level"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Cost-push inflation is driven by supply-side shocks that raise the costs of factor inputs, reducing aggregate supply and forcing firms to pass higher costs onto retail prices.",
    topic: "Topic 3: Economic Issues"
  },
  {
    question: "What does the short-run Phillips Curve demonstrate about the relationship between unemployment and inflation?",
    options: [
      "There is a direct positive correlation: higher unemployment automatically generates runaway hyperinflation",
      "There is an inverse trade-off: lower unemployment is associated with higher rates of wage and price inflation",
      "Inflation and unemployment are completely independent variables with zero statistical correlation",
      "Reducing unemployment to zero eliminates all cost-push inflationary pressures permanently"
    ],
    correctIndex: 1,
    timeLimit: 20,
    explanation: "The short-run Phillips curve illustrates the macroeconomic policy trade-off: tightening labor markets create labor shortages and upward wage pressures, increasing inflation.",
    topic: "Topic 3: Economic Issues"
  },
  {
    question: "In economics, what does a Lorenz Curve illustrate?",
    options: [
      "The trade-off between environmental carbon emissions and annual real gross domestic product",
      "The direct mathematical relationship between the Reserve Bank cash rate and commercial bank mortgage rates",
      "The cumulative percentage of total national income earned against the cumulative percentage of the population",
      "The correlation between tariff protection rates and structural unemployment levels"
    ],
    correctIndex: 2,
    timeLimit: 20,
    explanation: "The Lorenz curve plots the cumulative share of national income received against cumulative shares of the population ranked from poorest to richest. A 45-degree line reflects perfect equality.",
    topic: "Topic 3: Economic Issues"
  },
  {
    question: "How is the Gini coefficient derived from the Lorenz Curve diagram?",
    options: [
      "The area under the Lorenz curve divided by the terms of trade index",
      "The highest marginal income tax rate multiplied by total gross national disposable income",
      "The unemployment rate divided by the headline consumer price index inflation rate",
      "Area A (between the line of perfect equality and the Lorenz curve) divided by the total area under the line of perfect equality (Area A + Area B)"
    ],
    correctIndex: 3,
    timeLimit: 20,
    explanation: "Gini = Area A / (Area A + Area B). A score of 0 means perfect equality (Lorenz curve on diagonal), while 1 indicates complete inequality (one person holds all income).",
    topic: "Topic 3: Economic Issues"
  },
  {
    question: "Why is a progressive personal income tax system an effective fiscal mechanism for reducing income inequality?",
    options: [
      "Higher marginal tax rates are applied as taxable income rises, collecting a higher proportion of income from wealthy earners",
      "It levies an identical flat percentage rate of tax on every citizen regardless of their earnings",
      "It exempts multinational corporate enterprises from paying customs duties on capital imports",
      "It taxes low-income households at higher percentage rates to incentivize longer working hours"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "In a progressive tax system, the marginal rate of tax increases as income increases, compressing after-tax disposable income differentials and lowering the Gini coefficient.",
    topic: "Topic 3: Economic Issues"
  },
  {
    question: "Why is a broad-based consumption tax like the Goods and Services Tax (GST) considered regressive in its economic impact?",
    options: [
      "High-income earners are legally exempt from paying the tax on restaurant meals and consumer electronics",
      "Low-income earners spend a higher percentage of their total income on consumption goods, so the GST represents a higher proportion of their income",
      "The GST tax rate automatically increases by 1% for every additional ,000 an individual earns",
      "It is collected exclusively by the Reserve Bank of Australia rather than the Australian Taxation Office"
    ],
    correctIndex: 1,
    timeLimit: 20,
    explanation: "Because low-income households have a higher average propensity to consume (saving less), flat percentage consumption taxes take a larger fraction of their total income.",
    topic: "Topic 3: Economic Issues"
  },
  {
    question: "Which government policy in Australia acts as the single most powerful direct instrument for redistributing income to low-income households?",
    options: [
      "Subsidizing corporate research and development tax concessions for mining conglomerates",
      "Protective tariffs imposed on imported motor vehicles and consumer clothing",
      "Targeted social security transfer payments (such as JobSeeker, Age Pension, and Family Tax Benefits)",
      "Increasing the overnight cash rate target in the interbank money market"
    ],
    correctIndex: 2,
    timeLimit: 20,
    explanation: "Government social security transfer payments (means-tested welfare cash transfers funded by general taxation) provide direct income support to disadvantaged groups, dramatically reducing inequality.",
    topic: "Topic 3: Economic Issues"
  },
  {
    question: "In environmental economics, why does an unpriced negative externality (such as industrial carbon pollution) represent a market failure?",
    options: [
      "Government regulations prohibit commercial firms from adopting renewable solar technologies",
      "Private producers are legally barred from making commercial operating profits in the energy sector",
      "Consumers are forced to purchase carbon credits directly from international central banks",
      "The social cost of production exceeds the private cost borne by the firm, resulting in market overproduction and welfare loss"
    ],
    correctIndex: 3,
    timeLimit: 20,
    explanation: "Market failure occurs because polluters do not pay for the environmental degradation they inflict on society (spillover costs). The free market equilibrium output exceeds the socially optimal output.",
    topic: "Topic 3: Economic Issues"
  },
  {
    question: "What is the economic rationale for implementing a carbon tax (Pigovian tax) or an Emissions Trading Scheme (ETS)?",
    options: [
      "To internalize the negative externality by putting a price on pollution, incentivizing firms to transition toward cleaner production methods",
      "To guarantee that the federal budget will achieve a permanent headline surplus regardless of economic cycles",
      "To completely eliminate all forms of international trade in primary mineral resources",
      "To mandate identical statutory electricity prices across all suburban residential dwellings"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "By placing a price per tonne on greenhouse gas emissions, carbon pricing internalizes external environmental costs into market prices, harnessing price signals to drive decarbonization.",
    topic: "Topic 3: Economic Issues"
  }
];

// ===================================================
// HSC_ECONOMICS_ECONOMIC_POLICIES (25 Questions)
// ===================================================
const HSC_ECONOMICS_ECONOMIC_POLICIES = [
  {
    question: "What is the primary operational distinction between macroeconomic policies and microeconomic policies?",
    options: [
      "Macroeconomic policies manage aggregate demand to stabilize the business cycle, while microeconomic policies target aggregate supply to improve efficiency and productivity",
      "Macroeconomic policies are conducted exclusively by state governments, while microeconomic policies are governed by the United Nations",
      "Macroeconomic policies aim to reduce international trade, while microeconomic policies set legal minimum wage rates across all sectors",
      "Macroeconomic policies only operate during economic booms, while microeconomic policies are applied during recessions"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Macro policy (monetary and fiscal) manages aggregate demand for counter-cyclical stabilization. Micro policy acts on aggregate supply to boost long-term efficiency and productive capacity.",
    topic: "Topic 4: Economic Policies"
  },
  {
    question: "Which pair of economic objectives frequently conflicts in the short term when policymakers stimulate aggregate demand?",
    options: [
      "Balancing the Commonwealth budget and increasing national superannuation savings",
      "Achieving full employment and maintaining price stability (low inflation)",
      "Expanding renewable energy investment and improving school education outcomes",
      "Reducing protective tariffs and increasing international tourist arrivals"
    ],
    correctIndex: 1,
    timeLimit: 20,
    explanation: "Stimulating demand to lower unemployment risks generating demand-pull inflation and wage acceleration, reflecting the classic short-run trade-off shown by the Phillips Curve.",
    topic: "Topic 4: Economic Policies"
  },
  {
    question: "What is the statutory inflation target of the Reserve Bank of Australia (RBA)?",
    options: [
      "A fixed band between 4% and 6% indexed to global commodity price growth",
      "A strict ceiling of 0% inflation annually to prevent any price rises",
      "Consumer price inflation between 2% and 3% on average over the business cycle",
      "An annual inflation rate exactly matching the United States Federal Reserve rate"
    ],
    correctIndex: 2,
    timeLimit: 15,
    explanation: "The RBA\u0027s target is to keep CPI inflation between 2% and 3% on average over the cycle, anchoring inflation expectations while allowing flexibility for economic growth.",
    topic: "Topic 4: Economic Policies"
  },
  {
    question: "What is the official cash rate in Australia?",
    options: [
      "The fixed exchange rate at which the Australian dollar can be converted into gold bullion",
      "The statutory interest rate applied to consumer credit cards by the Australian Taxation Office",
      "The dividend yield paid to shareholders of the four major Australian commercial retail banks",
      "The interest rate charged on overnight loans between commercial banks in the interbank cash market"
    ],
    correctIndex: 3,
    timeLimit: 20,
    explanation: "The cash rate is the operational target of monetary policy: the interest rate commercial financial institutions pay to borrow and lend unsecured overnight funds in the interbank market.",
    topic: "Topic 4: Economic Policies"
  },
  {
    question: "How does the RBA maintain the cash rate target using its policy rate corridor?",
    options: [
      "By setting a lending rate at +0.25% above target and paying -0.10% (or -0.25%) on Exchange Settlement (ES) balances below target",
      "By legally confiscating the liquid reserves of commercial banks that fail to offer 0% mortgages",
      "By fixing commercial mortgage rates through statutory executive decrees passed by Parliament",
      "By altering the personal income tax brackets of commercial bank chief executive officers"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "The RBA operates an interest rate corridor. Banks will not borrow in the market above the RBA lending rate, nor lend below the rate the RBA pays on ES balances, bounding the market cash rate.",
    topic: "Topic 4: Economic Policies"
  },
  {
    question: "Through which mechanism does the cash flow channel of monetary policy transmission operate when the RBA raises the cash rate?",
    options: [
      "Commercial enterprises immediately halt all domestic research and development tax credit applications",
      "Variable-rate mortgage borrowers face higher debt servicing payments, reducing their discretionary disposable income and consumption",
      "The Australian federal government automatically eliminates welfare payments to age pensioners",
      "The Australian dollar experiences an immediate and permanent depreciation against the Japanese Yen"
    ],
    correctIndex: 1,
    timeLimit: 20,
    explanation: "Because a high proportion of Australian households hold variable-rate mortgages, cash rate increases rapidly raise interest repayments, directly curtailing discretionary cash flow and consumer spending.",
    topic: "Topic 4: Economic Policies"
  },
  {
    question: "How does the exchange rate channel transmit an increase in the RBA cash rate into the real economy?",
    options: [
      "Commercial banks convert their foreign assets into physical US dollar currency notes held in bank vaults",
      "Higher cash rates cause an immediate depreciation of the AUD, sparking surging export revenues for coal miners",
      "Higher relative interest rates attract foreign capital inflows, appreciating the AUD, which reduces import prices and dampens net export demand",
      "The federal government introduces a universal 15% tariff on all imported capital machinery"
    ],
    correctIndex: 2,
    timeLimit: 20,
    explanation: "A higher cash rate increases the interest rate differential, attracting foreign capital, appreciating the AUD, making imports cheaper (lowering inflation), and reducing net exports.",
    topic: "Topic 4: Economic Policies"
  },
  {
    question: "What is the typical time lag profile for monetary policy in Australia?",
    options: [
      "A 5-year statutory delay before commercial banks are legally permitted to alter retail lending rates",
      "A long implementation lag requiring parliamentary legislation, but an instantaneous impact on consumer price inflation within 24 hours",
      "Zero implementation lag and zero impact lag, with real GDP instantly adjusting to central bank announcements",
      "A very short implementation lag (decision takes effect immediately), but a long and variable impact/transmission lag (12 to 18 months)"
    ],
    correctIndex: 3,
    timeLimit: 20,
    explanation: "The RBA Board can alter the cash rate target overnight (short implementation lag), but it takes 12 to 18 months for the full effects to permeate through borrowing costs, spending, output, and inflation.",
    topic: "Topic 4: Economic Policies"
  },
  {
    question: "What is the difference between a Commonwealth Budget headline cash balance and the underlying cash balance?",
    options: [
      "The underlying cash balance strips out one-off non-operational asset sales and privatizations to reflect the true structural fiscal position",
      "The headline cash balance includes only taxation collected from private individual wage earners",
      "The underlying cash balance measures state government expenditure, while the headline balance measures local council spending",
      "The headline cash balance must be balanced to zero by law under the Commonwealth Constitution"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "The underlying cash balance removes volatile, one-off transactions (such as proceeds from privatising Telstra or Medibank) to provide a true indicator of the government\u0027s ongoing fiscal stance.",
    topic: "Topic 4: Economic Policies"
  },
  {
    question: "Which of the following operates as an automatic stabilizer (non-discretionary fiscal policy) during an economic downturn?",
    options: [
      "Parliament passes emergency statutory legislation to construct a new trans-continental freight railway line",
      "Tax receipts fall as incomes drop, and welfare outlays (JobSeeker) automatically increase, supporting aggregate demand without new legislation",
      "The Reserve Bank Board holds an extraordinary meeting to lower the official cash rate target by 50 basis points",
      "The Treasurer increases the corporate income tax rate from 30% to 45% on multinational entities"
    ],
    correctIndex: 1,
    timeLimit: 20,
    explanation: "Automatic stabilizers are built into the budget structure (progressive taxation and unemployment benefits). In a downturn, tax receipts naturally fall and transfers rise, dampening the slowdown.",
    topic: "Topic 4: Economic Policies"
  },
  {
    question: "If the government announces a new  billion infrastructure spending program to stimulate a sluggish economy, this action represents:",
    options: [
      "A microeconomic labor market deregulation initiative",
      "Contractionary automatic fiscal stabilization",
      "Expansionary discretionary fiscal policy",
      "An open market operation conducted by the central bank"
    ],
    correctIndex: 2,
    timeLimit: 15,
    explanation: "Deliberate executive/legislative choices to alter expenditure or taxation constitute discretionary fiscal policy. Increasing government spending (G) is an expansionary stance.",
    topic: "Topic 4: Economic Policies"
  },
  {
    question: "What is the primary method used by the Australian Government to finance a budget deficit?",
    options: [
      "Confiscating a fixed portion of private superannuation balances from Australian citizens",
      "Mandating that the Reserve Bank directly print physical bank notes to cover the Treasury shortfall",
      "Borrowing gold reserves from the International Monetary Fund at commercial interest rates",
      "Issuing Commonwealth Government Securities (Treasury Bonds) to institutional and private investors in financial markets"
    ],
    correctIndex: 3,
    timeLimit: 20,
    explanation: "The Australian Office of Financial Management (AOFM) finances budget deficits by issuing Commonwealth Government Securities (Treasury Bonds and Treasury Indexed Bonds) in open capital markets.",
    topic: "Topic 4: Economic Policies"
  },
  {
    question: "What is the \u0027crowding-out effect\u0027 associated with substantial government deficit financing?",
    options: [
      "Government bond borrowing increases demand for loanable funds, pushing up domestic interest rates and dampening private sector investment",
      "Commercial shopping malls become overcrowded due to surging household welfare stimulus payments",
      "Foreign investors are legally barred from purchasing commercial office real estate in central business districts",
      "High government spending forces state governments to abolish local property council rates"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "When the government issues large volumes of debt to finance a deficit, it increases competition for funds in capital markets, placing upward pressure on interest rates and crowding out private investment.",
    topic: "Topic 4: Economic Policies"
  },
  {
    question: "How can a government productively utilize a substantial budget surplus?",
    options: [
      "Printing additional currency notes to stimulate imported retail luxury purchases",
      "Paying down existing sovereign government debt or investing in sovereign wealth funds (e.g. the Future Fund)",
      "Purchasing unprofitable commercial manufacturing enterprises to protect them from foreign competition",
      "Eliminating all progressive income tax brackets in favor of a 0% tax rate"
    ],
    correctIndex: 1,
    timeLimit: 20,
    explanation: "Budget surpluses can be used to retire accumulated government debt, reducing future interest servicing costs, or saved in sovereign wealth funds (such as the Future Fund) for future liabilities.",
    topic: "Topic 4: Economic Policies"
  },
  {
    question: "What are the three primary dimensions of economic efficiency targeted by microeconomic reform?",
    options: [
      "Headline efficiency, underlying efficiency, and trimmed mean efficiency",
      "Cyclical efficiency, structural efficiency, and seasonal efficiency",
      "Allocative efficiency, technical (productive) efficiency, and dynamic efficiency",
      "Monetary efficiency, fiscal efficiency, and exchange rate efficiency"
    ],
    correctIndex: 2,
    timeLimit: 20,
    explanation: "Microeconomic reform targets: allocative efficiency (resources flow to highest-value uses), technical efficiency (producing at lowest possible cost), and dynamic efficiency (adapting rapidly to change).",
    topic: "Topic 4: Economic Policies"
  },
  {
    question: "What was the primary objective of the landmark National Competition Policy (Hilmer Report 1995) in Australia?",
    options: [
      "Banning all foreign multinational corporations from bidding on public road construction tenders",
      "Imposing permanent government price controls across all retail consumer supermarket chains",
      "Merging Australia\u0027s four largest commercial banks into a single state-owned financial institution",
      "Promoting competitive neutrality between public and private businesses and providing third-party access to essential national monopoly infrastructure"
    ],
    correctIndex: 3,
    timeLimit: 20,
    explanation: "The 1995 Hilmer reforms established competitive neutrality (preventing government businesses from exploiting unfair advantages) and opened essential networks (rail, electricity, ports) to competitors.",
    topic: "Topic 4: Economic Policies"
  },
  {
    question: "Which major economic sector was deregulated in Australia during the 1980s following the recommendations of the Campbell Committee?",
    options: [
      "The financial sector, through the floating of the AUD, removal of direct lending controls, and entry of foreign banks",
      "The primary agricultural sector, through the nationalization of all dairy farms and wheat boards",
      "The maritime defense sector, through the prohibition of commercial cargo shipping",
      "The postal delivery sector, through the banning of private parcel courier services"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "The Campbell Committee (1981) led to sweeping financial deregulation: floating the AUD, removing caps on bank deposit/lending rates, lifting exchange controls, and licensing foreign banks.",
    topic: "Topic 4: Economic Policies"
  },
  {
    question: "What is the difference between corporatisation and privatisation of Government Business Enterprises (GBEs)?",
    options: [
      "Corporatisation involves selling 100% of state assets to foreign governments; privatisation means subsidizing private firms",
      "Corporatisation makes a GBE operate like a private enterprise with commercial board governance while remaining government-owned; privatisation transfers ownership to the private sector",
      "Corporatisation is prohibited under Australian law, while privatisation applies exclusively to public primary schools",
      "Corporatisation eliminates corporate income tax, while privatisation doubles statutory tariff rates"
    ],
    correctIndex: 1,
    timeLimit: 20,
    explanation: "Corporatisation introduces commercial incentives, corporate tax equivalence, and independent boards to public enterprises (e.g. Australia Post), whereas privatisation sells shares to private investors.",
    topic: "Topic 4: Economic Policies"
  },
  {
    question: "Under the Fair Work Act 2009 (Cth), what are the National Employment Standards (NES)?",
    options: [
      "Mandatory wage targets that automatically link executive salaries to company share price growth",
      "A set of voluntary corporate guidelines recommended by the Business Council of Australia",
      "Eleven minimum legislated employment statutory conditions that apply to all national system employees regardless of award or contract",
      "A schedule of protective tariffs designed to protect Australian manufacturing jobs"
    ],
    correctIndex: 2,
    timeLimit: 20,
    explanation: "The 11 National Employment Standards (NES) form the non-negotiable legal safety net in Australia, covering maximum weekly hours, leave entitlements, notice of termination, and redundancy pay.",
    topic: "Topic 4: Economic Policies"
  },
  {
    question: "What role do Modern Awards fulfill within Australia\u0027s contemporary workplace relations framework?",
    options: [
      "They establish the annual cash rate target corridor for the Reserve Bank of Australia",
      "They negotiate annual executive bonus packages for senior corporate managers",
      "They determine the exact wholesale tariff rates applied to imported consumer electronics",
      "They set legally binding industry-wide safety net minimum wages, overtime penalty rates, and working conditions for specific industries and occupations"
    ],
    correctIndex: 3,
    timeLimit: 20,
    explanation: "Modern Awards establish minimum terms and conditions for workers across broad industry or occupational sectors (such as the Retail Award or Hospitality Award), tailored above the NES.",
    topic: "Topic 4: Economic Policies"
  },
  {
    question: "What is the statutory purpose of the Better Off Overall Test (BOOT) conducted by the Fair Work Commission?",
    options: [
      "To ensure that each employee covered by a proposed enterprise bargaining agreement will be better off overall than under the applicable modern award",
      "To evaluate whether a company\u0027s financial profit margin exceeds the official inflation rate",
      "To verify that all registered trade unions contribute funds to the federal budget consolidation",
      "To mandate that executive board directors receive higher compensation than full-time factory staff"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "The Fair Work Commission cannot approve an enterprise agreement unless it satisfies the BOOT, ensuring that employees do not trade away critical award conditions without superior overall compensation.",
    topic: "Topic 4: Economic Policies"
  },
  {
    question: "Why has enterprise bargaining (workplace-level collective agreements) been promoted as a key microeconomic reform since the early 1990s?",
    options: [
      "It legally mandates that all Australian employees must join a registered trade union",
      "It ties wage increases directly to measurable enterprise-level productivity improvements, boosting efficiency without sparking inflationary wage-push spirals",
      "It eliminates the requirement for businesses to maintain workplace health and safety standards",
      "It ensures that all businesses in an industry pay identical wage rates regardless of profitability"
    ],
    correctIndex: 1,
    timeLimit: 20,
    explanation: "Enterprise bargaining allows employers and employees to tailor working arrangements to their specific workplace, incentivizing productivity trade-offs that support sustainable real wage growth.",
    topic: "Topic 4: Economic Policies"
  },
  {
    question: "How does the Fair Work Commission determine the annual Minimum Wage decision?",
    options: [
      "Minimum wage rates are determined automatically by the percentage change in the Trade Weighted Index",
      "The Commonwealth Treasurer issues an executive decree fixing the hourly rate for the upcoming financial year",
      "An expert panel reviews economic submissions regarding inflation, business competitiveness, living costs, and employment to set the National Minimum Wage",
      "The Reserve Bank Board adjusts the minimum wage in tandem with its monthly cash rate announcement"
    ],
    correctIndex: 2,
    timeLimit: 20,
    explanation: "Each year, an expert panel of the Fair Work Commission conducts a formal review, balancing social objectives (improving low-paid living standards) with economic criteria (competitiveness and employment).",
    topic: "Topic 4: Economic Policies"
  },
  {
    question: "Which policy represents an active labor market program designed to reduce long-term structural unemployment?",
    options: [
      "Lowering the official retirement age to 45 to reduce civilian labor force participation",
      "An immediate across-the-board increase in the statutory minimum corporate tax rate",
      "Imposing a 20% tariff on all imported automated industrial manufacturing equipment",
      "Government-funded vocational education and retraining programs (such as Fee-Free TAFE and apprenticeships) targeted at industry skill shortages"
    ],
    correctIndex: 3,
    timeLimit: 20,
    explanation: "Active labor market programs (retraining, apprenticeships, wage subsidies) address structural skill mismatches by equipping jobseekers with competencies demanded in expanding industries.",
    topic: "Topic 4: Economic Policies"
  },
  {
    question: "What is the macro-policy stance if the federal government reduces tax rates while the Reserve Bank simultaneously lowers the official cash rate target?",
    options: [
      "Both fiscal policy and monetary policy are pursuing an expansionary stance designed to stimulate aggregate demand and economic growth",
      "Both policies are pursuing a contractionary stance designed to crush consumer price inflation",
      "Fiscal policy is contractionary while monetary policy is neutral",
      "Monetary policy is expansionary while fiscal policy is operating counter-cyclically to curb external debt"
    ],
    correctIndex: 0,
    timeLimit: 20,
    explanation: "Tax cuts inject purchasing power into households (expansionary fiscal policy), while cash rate cuts reduce borrowing costs and encourage spending (expansionary monetary policy).",
    topic: "Topic 4: Economic Policies"
  }
];

// ===================================================
// HSC ECONOMICS MASTER AGGREGATIONS
// ===================================================
const HSC_ECONOMICS_ALL_QUESTIONS = [
  ...HSC_ECONOMICS_GLOBAL_ECONOMY,
  ...HSC_ECONOMICS_AUSTRALIAS_PLACE,
  ...HSC_ECONOMICS_ECONOMIC_ISSUES,
  ...HSC_ECONOMICS_ECONOMIC_POLICIES
];

// Replicate actual 20-Question Section I HSC Examination (5 from each core topic)
const HSC_ECONOMICS_TRIAL_EXAM_QUESTIONS = [
  HSC_ECONOMICS_GLOBAL_ECONOMY[0],
  HSC_ECONOMICS_GLOBAL_ECONOMY[2],
  HSC_ECONOMICS_GLOBAL_ECONOMY[3],
  HSC_ECONOMICS_GLOBAL_ECONOMY[8],
  HSC_ECONOMICS_GLOBAL_ECONOMY[14],
  HSC_ECONOMICS_AUSTRALIAS_PLACE[2],
  HSC_ECONOMICS_AUSTRALIAS_PLACE[6],
  HSC_ECONOMICS_AUSTRALIAS_PLACE[10],
  HSC_ECONOMICS_AUSTRALIAS_PLACE[12],
  HSC_ECONOMICS_AUSTRALIAS_PLACE[16],
  HSC_ECONOMICS_ECONOMIC_ISSUES[1],
  HSC_ECONOMICS_ECONOMIC_ISSUES[4],
  HSC_ECONOMICS_ECONOMIC_ISSUES[7],
  HSC_ECONOMICS_ECONOMIC_ISSUES[11],
  HSC_ECONOMICS_ECONOMIC_ISSUES[19],
  HSC_ECONOMICS_ECONOMIC_POLICIES[2],
  HSC_ECONOMICS_ECONOMIC_POLICIES[5],
  HSC_ECONOMICS_ECONOMIC_POLICIES[8],
  HSC_ECONOMICS_ECONOMIC_POLICIES[12],
  HSC_ECONOMICS_ECONOMIC_POLICIES[20]
];


const DEFAULT_QUIZZES = [
  {
    id: 'hsc-business-master',
    title: 'HSC Business Studies - Complete Master Arena',
    category: 'HSC Business Studies',
    description: 'The definitive 100-question trial arena covering Operations, Marketing, Finance, and Human Resources.',
    badge: '\\uD83C\\uDFC6 100 QUESTIONS',
    questions: HSC_BUSINESS_ALL_QUESTIONS
  },
  {
    id: 'hsc-business-trial-exam',
    title: 'HSC Business Studies - 20-Question Past Paper Exam Simulator',
    category: 'HSC Business Studies',
    description: 'Exact replica of Section I (Multiple Choice) of the HSC Examination with 5 questions from each core module.',
    badge: '\\uD83D\\uDCDD 20-Q EXAM TRIAL',
    questions: HSC_BUSINESS_TRIAL_EXAM_QUESTIONS
  },
  {
    id: 'hsc-business-operations',
    title: 'HSC Business 1: Operations Management',
    category: 'HSC Business Studies',
    description: 'Cost leadership, 4 Vs, transformed/transforming inputs, CPA scheduling, JIT inventory, QA/QC/TQM, and change.',
    badge: '\\u2699\\uFE0F OPERATIONS (25 Qs)',
    questions: HSC_BUSINESS_OPERATIONS
  },
  {
    id: 'hsc-business-marketing',
    title: 'HSC Business 2: Marketing Strategies',
    category: 'HSC Business Studies',
    description: 'Market approaches, segmentation, ACL consumer laws, sugging, SWOT, skimming/penetration/loss leader, and 7 Ps.',
    badge: '\\uD83D\\uDCE2 MARKETING (25 Qs)',
    questions: HSC_BUSINESS_MARKETING
  },
  {
    id: 'hsc-business-finance',
    title: 'HSC Business 3: Financial Management',
    category: 'HSC Business Studies',
    description: 'Liquidity, gearing, Current ratio, Net Profit ratio, debt vs equity, cash flow factoring, and global hedging.',
    badge: '\\uD83D\\uDCB0 FINANCE (25 Qs)',
    questions: HSC_BUSINESS_FINANCE
  },
  {
    id: 'hsc-business-hr',
    title: 'HSC Business 4: Human Resource Management',
    category: 'HSC Business Studies',
    description: 'The employment contract, NES 11 standards, modern awards, BOOT test, leadership styles, and dispute resolution.',
    badge: '\\uD83D\\uDC65 HR (25 Qs)',
    questions: HSC_BUSINESS_HUMAN_RESOURCES
  },
  {
    id: 'medieval-master-65',
    title: 'Medieval Europe - Complete Master Arena',
    category: 'Medieval History',
    description: 'The complete 65-question curriculum challenge covering Feudalism, 1066, Crusades, Black Death, Crime & Castles.',
    badge: '\\u2694\\uFE0F 65 QUESTIONS',
    questions: MEDIEVAL_ALL_QUESTIONS
  },
  {
    id: 'medieval-feudalism',
    title: 'Medieval Europe 1: Feudalism, Manor & Agriculture',
    category: 'Medieval History',
    description: 'Feudal hierarchy, peasants and serfs, manorialism, chivalry, pages and squires, 3-field crop rotation.',
    badge: '\\uD83D\\uDC51 FEUDAL SYSTEM',
    questions: MEDIEVAL_ALL_QUESTIONS.slice(0, 11)
  },
  {
    id: 'medieval-1066-normans',
    title: 'Medieval Europe 2: The Norman Conquest & 1066',
    category: 'Medieval History',
    description: 'Bayeux Tapestry, William the Conqueror, Stamford Bridge, Battle of Hastings, and the Domesday Book.',
    badge: '\\uD83D\\uDEE1\\uFE0F 1066 CONQUEST',
    questions: MEDIEVAL_ALL_QUESTIONS.slice(11, 20)
  },
  {
    id: 'medieval-crime-punishment',
    title: 'Medieval Europe 3: Medieval Crime & Punishment',
    category: 'Medieval History',
    description: 'Trial by ordeal, compurgation, trial by combat, hue and cry, pillory, stocks, heresy, and common law.',
    badge: '\\u2696\\uFE0F CRIME & LAW',
    questions: MEDIEVAL_ALL_QUESTIONS.slice(20, 30)
  },
  {
    id: 'medieval-crusades',
    title: 'Medieval Europe 4: The Crusades & The Holy Land',
    category: 'Medieval History',
    description: 'Pope Urban II, Council of Clermont, Deus Vult, Outremer, Saladin, Richard the Lionheart, and Knights Templar.',
    badge: '\\u2694\\uFE0F THE CRUSADES',
    questions: MEDIEVAL_ALL_QUESTIONS.slice(30, 40)
  },
  {
    id: 'medieval-black-death',
    title: 'Medieval Europe 5: Monarchs, Magna Carta & The Black Death',
    category: 'Medieval History',
    description: 'Charlemagne, Eleanor of Aquitaine, Joan of Arc, Magna Carta 1215, Yersinia pestis, and Peasants Revolt 1381.',
    badge: '\\u2620\\uFE0F BLACK DEATH',
    questions: MEDIEVAL_ALL_QUESTIONS.slice(40, 53)
  },
  {
    id: 'medieval-warfare-towns',
    title: 'Medieval Europe 6: Castles, Siege Warfare & Towns',
    category: 'Medieval History',
    description: 'Longbows, trebuchets, portcullis, the keep, town charters, merchant guilds, apprentices, and curfews.',
    badge: '\\uD83C\\uDFF0 CASTLES & TOWNS',
    questions: MEDIEVAL_ALL_QUESTIONS.slice(53, 65)
  },
  {
    id: 'hsc-economics-master',
    title: 'HSC Economics - Complete Master Arena',
    category: 'HSC Economics',
    description: 'The complete 100-question curriculum challenge covering The Global Economy, Australia in the Global Economy, Economic Issues, and Economic Policies.',
    badge: '\uD83C\uDFC6 100 QUESTIONS',
    questions: HSC_ECONOMICS_ALL_QUESTIONS
  },
  {
    id: 'hsc-economics-trial-exam',
    title: 'HSC Economics - 20-Question Past Paper Exam Simulator',
    category: 'HSC Economics',
    description: 'Authentic replica of Section I (Multiple Choice) of the HSC Examination with 5 questions drawn from each core topic.',
    badge: '\uD83D\uDCDD 20-Q EXAM TRIAL',
    questions: HSC_ECONOMICS_TRIAL_EXAM_QUESTIONS
  },
  {
    id: 'hsc-economics-global',
    title: 'HSC Economics 1: The Global Economy',
    category: 'HSC Economics',
    description: 'Globalisation, trade patterns, protectionism (tariffs, subsidies, quotas), FTAs, WTO/IMF/World Bank, and global distribution of income and wealth.',
    badge: '\uD83C\uDF10 GLOBAL ECONOMY (25 Qs)',
    questions: HSC_ECONOMICS_GLOBAL_ECONOMY
  },
  {
    id: 'hsc-economics-bop',
    title: 'HSC Economics 2: Australia in the Global Economy',
    category: 'HSC Economics',
    description: 'Balance of Payments (BOGS, NPI, NSI, CA, KAFA), CAD drivers, exchange rates (floating AUD, TWI, J-curve), foreign liabilities, and Terms of Trade.',
    badge: '\uD83C\uDDE6\uD83C\uDDFA AUST & BOP (25 Qs)',
    questions: HSC_ECONOMICS_AUSTRALIAS_PLACE
  },
  {
    id: 'hsc-economics-issues',
    title: 'HSC Economics 3: Economic Issues',
    category: 'HSC Economics',
    description: 'Economic growth (AD/AS, multiplier), unemployment types & NAIRU, inflation (CPI, headline vs core), Lorenz curve, Gini coefficient, and environment.',
    badge: '\uD83D\uDCCA ISSUES (25 Qs)',
    questions: HSC_ECONOMICS_ECONOMIC_ISSUES
  },
  {
    id: 'hsc-economics-policies',
    title: 'HSC Economics 4: Economic Policies & Management',
    category: 'HSC Economics',
    description: 'Monetary policy (cash rate, corridor, transmission channels), Fiscal policy (outcomes, stabilizers), Microeconomic reform, and Fair Work framework.',
    badge: '\uD83C\uDFDB\uFE0F POLICIES (25 Qs)',
    questions: HSC_ECONOMICS_ECONOMIC_POLICIES
  },
  {
    id: 'commerce-consumer-finance',
    title: 'Year 10 Commerce - Consumer, Finance & Smart Travel',
    category: 'Year 10 Commerce',
    description: 'Consumer rights, credit vs debit cards, travel budgets, and financial decisions.',
    badge: '\\uD83D\\uDED2 COMMERCE',
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
