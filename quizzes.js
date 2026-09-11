// ===================================================
// HSC SANDO 1603 QUIZ ARENA — QUESTION BANKS & QUIZ ENGINE
// High-yield syllabus packs for NSW HSC Economics, Business Studies & Commerce
// ===================================================

const DEFAULT_QUIZZES = [
  {
    id: 'hsc-econ-core',
    title: 'HSC Economics — Global Economy & Macro Policy',
    category: 'Year 12 Economics',
    description: 'High-yield trial revision on Balance of Payments, Exchange Rates, Free Trade, and Macro Policy.',
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
        explanation: 'Servicing foreign debt (interest, profits, dividends) is classified under Net Primary Income (BOGS + NPY + NSY = Current Account).'
      },
      {
        question: 'If the Australian Dollar depreciates from $0.68 USD to $0.62 USD, which of the following is most likely to occur in the short term?',
        options: [
          'Increased international price competitiveness for Australian exports',
          'Cheaper imported capital goods for Australian manufacturers',
          'A decrease in headline inflation via tradable goods',
          'An immediate reduction in Australian foreign debt denominated in USD'
        ],
        correctIndex: 0,
        timeLimit: 20,
        explanation: 'A depreciation makes Australian goods cheaper in foreign currency terms, enhancing export price competitiveness while making imports more expensive (cost-push inflation).'
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
        explanation: 'The RBA conducts monetary policy to keep consumer price inflation between 2 and 3 per cent on average over the medium term.'
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
        timeLimit: 25,
        explanation: 'Tariffs create production and consumption distortion losses (triangles on trade diagrams), leading to a net loss of total economic surplus (deadweight loss).'
      },
      {
        question: 'Which of the following is considered an automatic stabiliser in Australian fiscal policy?',
        options: [
          'Progressive personal income taxation & JobSeeker payments',
          'Discretionary infrastructure grants announced in the Federal Budget',
          'Changes to the RBA Cash Rate target',
          'One-off energy relief rebates directly subsidised by Treasury'
        ],
        correctIndex: 0,
        timeLimit: 20,
        explanation: 'Automatic stabilisers operate without deliberate government legislation as GDP fluctuates; tax receipts rise and welfare transfers fall during booms, and vice versa.'
      },
      {
        question: 'The Natural Rate of Unemployment (NAIRU) represents the rate of unemployment at which:',
        options: [
          'Inflation remains stable and does not accelerate',
          'Cyclical unemployment is at its absolute maximum',
          'Both frictional and structural unemployment are zero',
          'The labour force participation rate reaches 100%'
        ],
        correctIndex: 0,
        timeLimit: 20,
        explanation: 'The Non-Accelerating Inflation Rate of Unemployment (NAIRU) is the rate below which wage and price inflation begins to accelerate due to labour supply constraints.'
      },
      {
        question: 'According to the J-curve effect, what typically happens to the current account deficit immediately after currency depreciation?',
        options: [
          'It initially worsens before improving as trade volumes adjust',
          'It improves immediately due to instant consumer substitution',
          'It remains unchanged permanently',
          'Exports immediately collapse due to quota restrictions'
        ],
        correctIndex: 0,
        timeLimit: 25,
        explanation: 'In the short run, import and export demand is price inelastic (contracts are pre-committed in foreign currency), worsening the balance before trade volumes adjust over time.'
      },
      {
        question: 'If the Australian Terms of Trade rises from 100 to 115, what does this indicate?',
        options: [
          'Export prices have risen relative to import prices',
          'The total volume of exports has exceeded the volume of imports',
          'The Australian federal budget has returned to surplus',
          'Import prices have risen faster than commodity export prices'
        ],
        correctIndex: 0,
        timeLimit: 20,
        explanation: 'Terms of Trade = (Export Price Index / Import Price Index) × 100. An increase means Australia can purchase more imports for any given volume of exports.'
      }
    ]
  },
  {
    id: 'hsc-business-core',
    title: 'HSC Business Studies — Marketing, Finance & Operations',
    category: 'Year 12 Business',
    description: 'High-frequency exam questions on 4Ps, financial ratios, liquidity, and operations strategies.',
    badge: 'HSC BUSINESS',
    questions: [
      {
        question: 'What financial ratio measures a firm’s liquidity (ability to pay short-term debts from current assets)?',
        options: [
          'Current Ratio (Current Assets / Current Liabilities)',
          'Gearing Ratio (Total Liabilities / Owner’s Equity)',
          'Net Profit Ratio (Net Profit / Sales Revenue)',
          'Expense Ratio (Total Operating Expenses / Sales)'
        ],
        correctIndex: 0,
        timeLimit: 20,
        explanation: 'The Current Ratio (working capital ratio) indicates whether a business has sufficient liquid assets to meet obligations due within 12 months (benchmark 2:1).'
      },
      {
        question: 'Which of the following pricing strategies involves setting a high introductory price to recover R&D costs before competitors enter?',
        options: [
          'Price Skimming',
          'Penetration Pricing',
          'Loss Leader',
          'Cost-Plus Pricing'
        ],
        correctIndex: 0,
        timeLimit: 15,
        explanation: 'Price skimming charges the highest possible price during the introduction stage of the product life cycle (e.g., Apple iPhone launches).'
      },
      {
        question: 'In operations management, what is the primary purpose of Computer-Integrated Manufacturing (CIM)?',
        options: [
          'To integrate computer-aided design (CAD) and computer-aided manufacturing (CAM) into a unified production flow',
          'To replace the human resource recruitment process entirely with AI',
          'To calculate sales tax and payroll automatically',
          'To eliminate the need for inventory quality control checks'
        ],
        correctIndex: 0,
        timeLimit: 20,
        explanation: 'CIM coordinates computer-aided design and computer-aided manufacturing across production processes to improve speed, flexibility, and precision.'
      },
      {
        question: 'Under the Australian Consumer Law (ACL), which of the following is strictly illegal regarding retail pricing?',
        options: [
          'Misleading and deceptive two-price comparison advertising',
          'Offering seasonal clearance discounts below cost price',
          'Dynamic price matching with verified online retailers',
          'Charging higher prices in rural regional branches due to freight costs'
        ],
        correctIndex: 0,
        timeLimit: 20,
        explanation: 'Deceptive "was/now" pricing where the "was" price was never genuinely offered breaches section 18 and 29 of the ACL (Competition and Consumer Act 2010).'
      },
      {
        question: 'Which working capital management strategy involves selling accounts receivable to a financial firm at a discount for immediate cash?',
        options: [
          'Factoring',
          'Leasing',
          'Sale and Leaseback',
          'Commercial Bill issuance'
        ],
        correctIndex: 0,
        timeLimit: 15,
        explanation: 'Factoring provides instantaneous working capital by transferring unpaid invoices to a factoring company in exchange for immediate cash (minus fee).'
      },
      {
        question: 'What is the key difference between psychographic and demographic market segmentation?',
        options: [
          'Psychographic is based on consumer lifestyle, values and personality; Demographic is based on age, gender and income',
          'Psychographic is geographic location only; Demographic is purchasing frequency',
          'Demographic is purely psychological testing; Psychographic is government census data',
          'There is no distinction in modern marketing'
        ],
        correctIndex: 0,
        timeLimit: 20,
        explanation: 'Demographics divide by measurable statistical population traits (age, gender, income), whereas psychographics segment by opinions, values, and lifestyle attitudes.'
      },
      {
        question: 'If a business has an Accounts Receivable Turnover of 12 times per year, what does this indicate?',
        options: [
          'On average, the business collects credit sales every 30 days',
          'The business is insolvent and unable to collect debts',
          'The business pays its inventory suppliers every 12 days',
          'Total credit sales are 12 times larger than owner equity'
        ],
        correctIndex: 0,
        timeLimit: 20,
        explanation: '365 days / 12 turns ≈ 30.4 days. This means receivables are collected approximately once a month, demonstrating strong credit control.'
      }
    ]
  },
  {
    id: 'commerce-consumer-finance',
    title: 'Year 10 Commerce — Consumer, Finance & Smart Travel',
    category: 'Year 10 Commerce',
    description: 'Everyday consumer rights, credit vs debit cards, travel budgets, and smart financial decision making.',
    badge: 'YEAR 10 COMMERCE',
    questions: [
      {
        question: 'Under Australian Consumer Law, what is a consumer entitled to if a newly purchased phone has a major manufacturing defect?',
        options: [
          'A choice between a full refund or a direct replacement',
          'Only a store credit voucher valid for 30 days',
          'The manufacturer is only obliged to attempt repair twice',
          'No remedy if the store has a "No Refunds" sign displayed'
        ],
        correctIndex: 0,
        timeLimit: 20,
        explanation: 'For a MAJOR failure under ACL, the consumer has the legal right to choose between a full refund or a replacement product. "No Refund" signs are illegal.'
      },
      {
        question: 'When planning an international holiday from Sydney to Tokyo, why is buying foreign cash at the airport usually the most expensive option?',
        options: [
          'Airport exchange booths charge wider exchange rate spreads and higher commission fees',
          'Airport booths are prohibited from converting Australian dollars directly',
          'Japanese customs taxes foreign cash purchased at departure gates',
          'Travellers can only pay in Japanese Yen using travellers cheques'
        ],
        correctIndex: 0,
        timeLimit: 20,
        explanation: 'Retail airport currency kiosks have high overheads and captive markets, resulting in high markup spreads (often 8–15% worse than market mid-rates).'
      },
      {
        question: 'What happens to the total interest paid if a borrower chooses to repay a car loan over 5 years instead of 3 years?',
        options: [
          'Total interest increases significantly, even though monthly repayments are lower',
          'Total interest decreases because payments are spread out',
          'Total interest remains identical as long as the interest rate is fixed',
          'The bank waives interest after 36 months'
        ],
        correctIndex: 0,
        timeLimit: 15,
        explanation: 'Extending the loan term lowers the monthly instalment but charges compounding interest over a longer period, substantially increasing total interest paid.'
      },
      {
        question: 'Which of the following payment methods gives the strongest consumer protection against fraudulent unauthorized overseas transactions?',
        options: [
          'Credit Card with zero-liability chargeback protection',
          'Direct bank wire transfer (SWIFT)',
          'Pre-loaded unregistered gift card',
          'Physical currency notes'
        ],
        correctIndex: 0,
        timeLimit: 20,
        explanation: 'Credit cards provide statutory chargeback protection and zero-liability guarantees for verified fraudulent transactions, unlike wire transfers or cash.'
      },
      {
        question: 'What is the main purpose of creating a comprehensive travel insurance policy before travelling abroad?',
        options: [
          'To protect against catastrophic overseas medical bills and emergency medical evacuation',
          'To guarantee free room upgrades at luxury hotels',
          'To avoid paying foreign transaction fees on bank cards',
          'To bypass international airport security and visa checks'
        ],
        correctIndex: 0,
        timeLimit: 20,
        explanation: 'Australia’s Medicare does not cover citizens overseas. A broken bone or medical airlift in the USA or Japan can cost in excess of $100,000 without insurance.'
      }
    ]
  },
  {
    id: 'hsc-speed-round',
    title: 'HSC Rapid-Fire Trivia & Concepts',
    category: 'Rapid Fire',
    description: 'Fast 10-second questions testing core terminology, formulas, and landmark concepts.',
    badge: '⚡ SPEED ROUND',
    questions: [
      {
        question: 'Formula for Gross Operating Profit:',
        options: [
          'Sales Revenue − Cost of Goods Sold (COGS)',
          'Sales Revenue − Total Expenses',
          'Current Assets − Current Liabilities',
          'Net Profit + Dividends'
        ],
        correctIndex: 0,
        timeLimit: 10,
        explanation: 'Gross Profit = Sales − COGS. Net Profit = Gross Profit − Expenses.'
      },
      {
        question: 'Current Governor of the Reserve Bank of Australia:',
        options: [
          'Michele Bullock',
          'Philip Lowe',
          'Glenn Stevens',
          'Ian Macfarlane'
        ],
        correctIndex: 0,
        timeLimit: 10,
        explanation: 'Michele Bullock commenced as Governor of the Reserve Bank of Australia on 18 September 2023.'
      },
      {
        question: 'Which economic indicator measures the total market value of all final goods and services produced in an economy?',
        options: [
          'Gross Domestic Product (GDP)',
          'Consumer Price Index (CPI)',
          'Current Account Balance (CAD)',
          'Gini Coefficient'
        ],
        correctIndex: 0,
        timeLimit: 10,
        explanation: 'GDP is the comprehensive measure of domestic economic output over a given period.'
      },
      {
        question: 'A Gini Coefficient score of 0 represents:',
        options: [
          'Perfect income equality',
          'Perfect income inequality (one person has everything)',
          'A balanced federal budget surplus',
          'Zero unemployment'
        ],
        correctIndex: 0,
        timeLimit: 10,
        explanation: 'A Gini coefficient of 0 indicates complete equality; a coefficient of 1 indicates maximum inequality.'
      },
      {
        question: 'Which of the following is NOT one of the traditional 4Ps of Marketing?',
        options: [
          'Perception',
          'Product',
          'Price',
          'Promotion'
        ],
        correctIndex: 0,
        timeLimit: 10,
        explanation: 'The 4Ps are Product, Price, Promotion, Place. (Extended 7Ps add People, Processes, Physical Evidence).'
      }
    ]
  }
];

class QuizRepository {
  static STORAGE_KEY = 'hscsando_custom_quizzes';

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
