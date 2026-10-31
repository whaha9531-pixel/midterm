// ==========================================================================
// 智光商工 日間部 115 學年度第 1 學期第一次段考 自然（物理） 試卷 完整數據庫
// 學生：周姸汝（座號：4 號） 得分：92 / 100（選擇題 74分 + 填充題 18分）
// ==========================================================================

const physicsExamMetadata = {
  title: "智光商工 115學年度第1學期第一次段考 物理試卷 深度檢討與錯題診斷",
  subtitle: "選擇題 40 題與填充題 10 格共 50 題全解、公式推導、常考觀念與失誤深度剖析",
  student: {
    school: "智光商工 日間部",
    class: "資處、電子、資訊、機械 科 一年 1- 班",
    name: "周姸汝",
    seat: "4 號",
    score: 92,
    fullScore: 100,
    deductions: 8,
    totalQuestions: 50,
    correctCount: 46,
    wrongCount: 4,
    accuracyRate: "92.0%"
  },
  sectionScores: [
    { name: "一、選擇題 (40題)", earned: 74, full: 80, count: 40, correct: 37, wrong: 3, icon: "🔘" },
    { name: "二、填充題 (10格)", earned: 18, full: 20, count: 10, correct: 9, wrong: 1, icon: "✏️" }
  ],
  summary: {
    strengths: [
      "【力學與運動學概念極度扎實】等加速度運動、牛頓運動定律、自由落體、動態摩擦力、斜面力學能守恆題目全數答對！",
      "【物理數值計算能力優秀】光行進 500 秒計算、溫標換算 122°F = 50°C、上山下山平均速率 4.8 km/hr 計算完全零失誤！",
      "【考卷完成度與劃卡準確】全卷 40 題選擇題僅錯 3 題，整體掌握度高達 92 分！"
    ],
    weaknesses: [
      "【單位定義盲點】第 11 題將「光年」誤認成時間單位（光年是長度單位！光走一年的距離）。",
      "【絕對溫標零點混淆】第 18 題將最低極限溫度選成 273.15 K（絕對零度應為 0 K，或 -273.15 °C）。",
      "【萬有引力概念詞彙】第 33 題「任何兩物體間皆有一種相互吸引的力」誤選成磁力（正解為萬有引力）。",
      "【專有名詞順序微瑕】填充題第 1 題「維持原子核穩定的作用力」寫成「強力核」（標準名詞為強核力或強交互作用力）。"
    ]
  }
};

const physicsQuestionsData = [
  // =========================================================================
  // 一、選擇題 80% (共 40 題，每題 2 分)
  // =========================================================================
  {
    id: "phy-choice-1",
    subject: "physics",
    category: "choice",
    section: "一、選擇題",
    number: "1",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "物理學發展史與範疇",
    question: "近代物理學研究的對象有時小於原子或分子尺寸，用來描述微觀世界的物理現象。下列哪個學說屬於近代物理學？\n(A)力學 (B)電磁學 (C)光學 (D)相對論。",
    studentAnswer: "D",
    correctAnswer: "D (相對論)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "**古典物理 vs. 近代物理**：19 世紀末以前發展的力學、熱學、電磁學、幾何光學屬於古典物理；20 世紀初發展的**相對論**與**量子力學**屬於近代物理。"
    ],
    solutionSteps: [
      { step: "步驟 1：區分古典與近代物理", content: "力學、電磁學、光學皆為古典物理；愛因斯坦於 1905 年發表的相對論屬於近代物理範疇。故選 D。" }
    ]
  },
  {
    id: "phy-choice-2",
    subject: "physics",
    category: "choice",
    section: "一、選擇題",
    number: "2",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "公制單位系統特點",
    question: "下列哪個敘述，不是公制單位系統的特點？\n(A)科技研發成果易於表示 (B)準確表達實驗測量結果 (C)科學研究結論順利流通 (D)符合世界各國風俗民情。",
    studentAnswer: "D",
    correctAnswer: "D (符合世界各國風俗民情)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "公制單位（Metric System）以客觀自然基準（十進位）制定，統一全球度量衡標準。各國傳統常有台斤、英鎊、英里等民俗習慣，公制並非為了符合各國民風民情而設計。"
    ],
    solutionSteps: [
      { step: "步驟 1：檢視公制初衷", content: "國際公制系統著重於科學量測精確性、全球流通性與國際標準化，而非迎合地方風俗民情。故選 D。" }
    ]
  },
  {
    id: "phy-choice-3",
    subject: "physics",
    category: "choice",
    section: "一、選擇題",
    number: "3",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "國際單位制 (SI 制) 溫度",
    question: "國際單位制（SI 制）中，溫度的單位為何？\n(A)°C (B)°F (C)K (D)°K。",
    studentAnswer: "C",
    correctAnswer: "C (K)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "**SI 制 7 個基本單位之一**：熱力學溫度單位為**克耳文（Kelvin, 符號 K）**。注意：K 不加度數符號「°」，寫成 °K 是錯誤的。"
    ],
    solutionSteps: [
      { step: "步驟 1：確認 SI 制溫度規範", content: "SI 國際標準中，溫度單位為 Kelvin (K)，故選 C。" }
    ]
  },
  {
    id: "phy-choice-4",
    subject: "physics",
    category: "choice",
    section: "一、選擇題",
    number: "4",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "公尺的歷史定義",
    question: "自北極經巴黎到赤道子午線長度的一千萬分之一，此敘述是最初期何者的定義？\n(A)公斤 (B)公尺 (C)秒 (D)天文單位。",
    studentAnswer: "B",
    correctAnswer: "B (公尺)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "1791 年法國科學院最初將 1 公尺（meter）定義為：通過巴黎的子午線，由北極到赤道長度的一千萬分之一 ($10^{-7}$)。"
    ],
    solutionSteps: [
      { step: "步驟 1：回顧長度單位演進", content: "北極經巴黎至赤道長度的一千萬分之一為「公尺」的最初定義。故選 B。" }
    ]
  },
  {
    id: "phy-choice-5",
    subject: "physics",
    category: "choice",
    section: "一、選擇題",
    number: "5",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "萬有引力定律驗證",
    question: "牛頓提出「萬有引力」的理論，驗證了哪位科學家的學說？\n(A)克卜勒 (B)伽利略 (C)虎克 (D)惠更斯。",
    studentAnswer: "A",
    correctAnswer: "A (克卜勒)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "克卜勒透過第谷的行星觀測數據歸納出行星運動三大定律；牛頓提出萬有引力定律 $F = G\\frac{Mm}{r^2}$，在數學與物理上完美推導並驗證了克卜勒定律。"
    ],
    solutionSteps: [
      { step: "步驟 1：連結理論與驗證", content: "萬有引力成功解釋了天體運行的克卜勒三大定律。選 A。" }
    ]
  },
  {
    id: "phy-choice-6",
    subject: "physics",
    category: "choice",
    section: "一、選擇題",
    number: "6",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "經典力學體系提出者",
    question: "下列哪一個學說是牛頓所提出來的？\n(A)布丁原子模型 (B)牛頓三大運動定律 (C)黑體輻射 (D)相對論。",
    studentAnswer: "B",
    correctAnswer: "B (牛頓三大運動定律)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "牛頓在 1687 年《自然哲學的數學原理》中提出牛頓三大運動定律；湯姆森提出布丁模型；普朗克提出黑體輻射能量量子化；愛因斯坦提出相對論。"
    ],
    solutionSteps: [
      { step: "步驟 1：匹配學說與學者", content: "牛頓提出三大運動定律（慣性定律、運動定律、作用與反作用力定律）。選 B。" }
    ]
  },
  {
    id: "phy-choice-7",
    subject: "physics",
    category: "choice",
    section: "一、選擇題",
    number: "7",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "近代物理發展基石",
    question: "近代物理發展的兩大基石為相對論及何者？\n(A)量子力學 (B)牛頓力學 (C)電磁學 (D)克卜勒行星定律。",
    studentAnswer: "A",
    correctAnswer: "A (量子力學)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "20 世紀物理學的兩大基石：解釋宏觀高速運動與時空的**相對論**，以及解釋微觀原子分子尺度的**量子力學**。"
    ],
    solutionSteps: [
      { step: "步驟 1：確立近代物理兩大支柱", content: "近代物理兩大基石為「相對論」與「量子力學」。選 A。" }
    ]
  },
  {
    id: "phy-choice-8",
    subject: "physics",
    category: "choice",
    section: "一、選擇題",
    number: "8",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "科學家與理論配對",
    question: "提出相對論的科學家是？\n(A)普朗克 (B)牛頓 (C)愛因斯坦 (D)伽利略。",
    studentAnswer: "C",
    correctAnswer: "C (愛因斯坦)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "阿爾伯特·愛因斯坦（Albert Einstein）於 1905 年提出狹義相對論，1915 年提出廣義相對論。"
    ],
    solutionSteps: [
      { step: "步驟 1：確認相對論創始人", content: "提出相對論的科學家為愛因斯坦。選 C。" }
    ]
  },
  {
    id: "phy-choice-9",
    subject: "physics",
    category: "choice",
    section: "一、選擇題",
    number: "9",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "電學基本單位",
    question: "下列何者是電流的單位？\n(A)庫侖 (B)伏特 (C)安培 (D)歐姆。",
    studentAnswer: "C",
    correctAnswer: "C (安培)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "電流單位：**安培 (A)**；電量單位：庫侖 (C)；電壓單位：伏特 (V)；電阻單位：歐姆 ($\\Omega$)。"
    ],
    solutionSteps: [
      { step: "步驟 1：電學物理量單位對應", content: "電流的 SI 單位是安培 (Ampere)。選 C。" }
    ]
  },
  {
    id: "phy-choice-10",
    subject: "physics",
    category: "choice",
    section: "一、選擇題",
    number: "10",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "地球尺寸常識與幾何",
    question: "地球的圓周長約為多少公尺？\n(A)三億 (B)一億 (C)四千萬 (D)一千萬。",
    studentAnswer: "C",
    correctAnswer: "C (四千萬)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "依據公尺的最初定義，北極到赤道（$\\frac{1}{4}$ 圓周）為 $10,000,000$ 公尺，故地球整圈子午線周長為 $4 \\times 10,000,000 = 40,000,000$ 公尺（約 4 萬公里）。"
    ],
    solutionSteps: [
      { step: "步驟 1：利用經線定義計算", content: "$1000$ 萬公尺 $\\times 4 = 4000$ 萬公尺。選 C。" }
    ]
  },
  {
    id: "phy-choice-11",
    subject: "physics",
    category: "choice",
    section: "一、選擇題",
    number: "11",
    score: 2,
    earned: 0,
    status: "wrong",
    topic: "長度單位陷阱題（核心錯題）",
    question: "「光年」是哪一個物理量的單位？\n(A)長度 (B)質量 (C)時間 (D)體積。",
    studentAnswer: "C",
    correctAnswer: "A (長度)",
    hasMistake: true,
    errorDiagnosis: {
      type: "文字字尾誤導（盲目認字）",
      summary: "看到「光年」有「年」字，就誤以為是時間單位！",
      details: "學生在答案卡劃記了 (C) 時間。許多學生看到「年」就聯想到時間，但「光年 (Light-year)」是指「光在真空中前進一整年的『總距離（長度）』」！1 光年 $\\approx 9.46 \\times 10^{15}$ 公尺，是天文學上極其重要的『長度/距離』單位。"
    },
    keyPoints: [
      "**光年 (ly)**：長度單位！定義為真空光速 $c$ 乘以 1 年的時間長度 ($s = v \\times t$)。",
      "**易混淆單位清單**：\n- 光年（長度，不是時間）\n- 天文單位（長度，太陽到地球平均距離）\n- 電子伏特 eV（能量，不是電壓）\n- 瓦·時 Wh（能量，不是功率）"
    ],
    solutionSteps: [
      { step: "步驟 1：剖析物理定義", content: "光年 = 光速 $\\times$ 時間 = 距離。距離的物理量就是長度！" },
      { step: "步驟 2：破除字面迷思", content: "雖帶「年」字，實為天體距離單位。正解為 A。" }
    ]
  },
  {
    id: "phy-choice-12",
    subject: "physics",
    category: "choice",
    section: "一、選擇題",
    number: "12",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "SI 制基本量個數",
    question: "目前國際單位制的基本單位量有多少個？\n(A)4 (B)5 (C)6 (D)7。",
    studentAnswer: "D",
    correctAnswer: "D (7)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "SI 制共有 7 個基本物理量：長度 (m)、質量 (kg)、時間 (s)、電流 (A)、熱力學溫度 (K)、物質量 (mol)、發光強度 (cd)。"
    ],
    solutionSteps: [
      { step: "步驟 1：核對基本量數量", content: "國際單位制規範 7 個基本量。選 D。" }
    ]
  },
  {
    id: "phy-choice-13",
    subject: "physics",
    category: "choice",
    section: "一、選擇題",
    number: "13",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "SI 長度基本單位",
    question: "長度的基本單位量為何？\n(A)公分 (B)公尺 (C)公里 (D)毫米。",
    studentAnswer: "B",
    correctAnswer: "B (公尺)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "長度的 SI 基本單位為公尺 (meter, 符號 m)。公分 (cm)、公里 (km) 均為輔助進位單位。"
    ],
    solutionSteps: [
      { step: "步驟 1：確定標準單位", content: "SI 制長度基本單位為公尺。選 B。" }
    ]
  },
  {
    id: "phy-choice-14",
    subject: "physics",
    category: "choice",
    section: "一、選擇題",
    number: "14",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "物理量單位辨別",
    question: "下列何者不是長度單位？\n(A)光年 (B)天文單位 (C)角秒 (D)埃。",
    studentAnswer: "C",
    correctAnswer: "C (角秒)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "角秒（arcsecond）是**角度**的單位 ($1^\\circ = 60' = 3600''$)；光年、天文單位 (AU)、埃 (Å, $10^{-10}$ m) 均為長度單位。"
    ],
    solutionSteps: [
      { step: "步驟 1：排除長度單位", content: "角秒為角度單位，非長度。選 C。" }
    ]
  },
  {
    id: "phy-choice-15",
    subject: "physics",
    category: "choice",
    section: "一、選擇題",
    number: "15",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "光年數學表達式",
    question: "若光在真空中一秒鐘可以前進 a 公尺，則下列何者可用來表達光年的定義？\n(A)24 × 365 × a (B)86400 × 365 × a (C)60 × 365 × a (D)86400 × 24 × a。",
    studentAnswer: "B",
    correctAnswer: "B (86400 × 365 × a)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "1 年 = 365 天；1 天 = 24 小時 = 1440 分 = 86400 秒。\n一光年距離 = 速度 $\\times$ 總秒數 = $a \\times (86400 \\times 365)$ 公尺。"
    ],
    solutionSteps: [
      { step: "步驟 1：計算一年的秒數", content: "$365 \\text{ 天} \\times 86400 \\text{ 秒/天} = 365 \\times 86400 \\text{ 秒}$。" },
      { step: "步驟 2：乘以每秒距離 a", content: "距離 $= 86400 \\times 365 \\times a$ 公尺。選 B。" }
    ]
  },
  {
    id: "phy-choice-16",
    subject: "physics",
    category: "choice",
    section: "一、選擇題",
    number: "16",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "原子結構與核子電性",
    question: "組成原子核的粒子為何？\n(A)帶正電的質子與帶正電的中子 (B)帶正電的質子與不帶電的中子 (C)不帶電的質子與帶正電的中子 (D)不帶電的質子與不帶電的中子。",
    studentAnswer: "B",
    correctAnswer: "B (帶正電的質子與不帶電的中子)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "原子核由質子（帶 $+1$ 單位正電荷）與中子（電中性，不帶電）組成，兩者合稱「核子」。"
    ],
    solutionSteps: [
      { step: "步驟 1：確定粒子電性", content: "質子帶正電，中子不帶電。選 B。" }
    ]
  },
  {
    id: "phy-choice-17",
    subject: "physics",
    category: "choice",
    section: "一、選擇題",
    number: "17",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "科學記號與微觀長度",
    question: "一奈米為多少公尺？\n(A)10^-9 (B)10^-8 (C)10^-10 (D)10^-7。",
    studentAnswer: "A",
    correctAnswer: "A (10^-9)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "常用微觀前綴詞：毫 ($m, 10^{-3}$)、微 ($\\mu, 10^{-6}$)、奈 ($n, 10^{-9}$)、皮 ($p, 10^{-12}$)。"
    ],
    solutionSteps: [
      { step: "步驟 1：換算奈米 nano", content: "$1 \\text{ nm} = 10^{-9} \\text{ m}$。選 A。" }
    ]
  },
  {
    id: "phy-choice-18",
    subject: "physics",
    category: "choice",
    section: "一、選擇題",
    number: "18",
    score: 2,
    earned: 0,
    status: "wrong",
    topic: "熱力學絕對零度（核心錯題）",
    question: "任何物體的溫度都不可能無限制地降低，必有一個最低的極限，此最低溫度為\n(A)0 K (B)273.15 K (C)273.15 °C (D)0 °F。",
    studentAnswer: "B",
    correctAnswer: "A (0 K)",
    hasMistake: true,
    errorDiagnosis: {
      type: "絕對溫標與攝氏零度混淆",
      summary: "將 0 °C 對應的數值 273.15 錯當成最低極限溫度！",
      details: "學生選擇了 (B) 273.15 K。273.15 K 其實是攝氏 0 °C（冰的熔點），絕非自然界的最低極限溫度！熱力學第三定律指出，自然界理論上的最低溫度稱為「絕對零度（Absolute Zero）」，數值為 0 K（相當於 -273.15 °C）。此時分子熱運動動能達到量子力學允許的最低狀態。"
    },
    keyPoints: [
      "**絕對零度**：$0 \\text{ K} = -273.15^\\circ\\text{C}$，是溫度的理論下限！",
      "**溫標換算公式**：$T (\\text{K}) = t (^\\circ\\text{C}) + 273.15$。\n當 $T = 0 \\text{ K}$ 時，$t = -273.15^\\circ\\text{C}$；而 $273.15 \\text{ K} = 0^\\circ\\text{C}$ 只是冰水共存溫度！"
    ],
    solutionSteps: [
      { step: "步驟 1：理解絕對零度含義", content: "熱力學絕對零度為 0 K（相當於 -273.15 °C）。" },
      { step: "步驟 2：排除干擾項", content: "273.15 K 是 0 °C，並非最低溫度極限。正解為 A。" }
    ]
  },
  {
    id: "phy-choice-19",
    subject: "physics",
    category: "choice",
    section: "一、選擇題",
    number: "19",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "垂直上拋運動最高點狀態",
    question: "將一顆球垂直向上拋出，當球到達最高點時，物體的狀態為何？\n(A)速度不為零，加速度為零 (B)速度為零，加速度不為零 (C)速度與加速度都是零 (D)速度與加速度都不為零。",
    studentAnswer: "B",
    correctAnswer: "B (速度為零，加速度不為零)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "垂直上拋到達最高點瞬間，物體速度轉折瞬時為 $v = 0$；但此時地球引力仍然存在，受重力產生的向下加速度 $g = 9.8 \\text{ m/s}^2$ 始終不為零！"
    ],
    solutionSteps: [
      { step: "步驟 1：分析最高點速度", content: "向上速度減為 0，故瞬時速度為零。" },
      { step: "步驟 2：分析受力與加速度", content: "只受向下重力，故加速度為 $g \\neq 0$。選 B。" }
    ]
  },
  {
    id: "phy-choice-20",
    subject: "physics",
    category: "choice",
    section: "一、選擇題",
    number: "20",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "拋體運動離手加速度",
    question: "某人在十樓窗口把 A 物向上拋出，把 B 物向前拋出，把 C 物向下拋出，則三物離手後，不計空氣阻力，何者加速度較大？\n(A)A (B)B (C)C (D)三者相同。",
    studentAnswer: "D",
    correctAnswer: "D (三者相同)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "不計空氣阻力時，任何物體只要離開手拋出後，空中皆僅受單一重力作用，加速度均為鉛直向下的重力加速度 $g$（約 $9.8 \\text{ m/s}^2$），與拋出方向無關！"
    ],
    solutionSteps: [
      { step: "步驟 1：牛頓第二定律受力分析", content: "離手後 $F = mg \\implies a = g$。三物加速度皆為 $g$，完全相同。選 D。" }
    ]
  },
  {
    id: "phy-choice-21",
    subject: "physics",
    category: "choice",
    section: "一、選擇題",
    number: "21",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "等速度運動本質特徵",
    question: "下列有關等速度運動的敘述，何者錯誤？\n(A)任何時刻瞬時速度均相等 (B)可作圓周運動 (C)其運動為直線運動 (D)其瞬時速度等於平均速度。",
    studentAnswer: "B",
    correctAnswer: "B (可作圓周運動)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "**等速度運動**：速度的大小（速率）與方向皆必須保持恆定，軌跡必為**直線**！圓周運動即使速率不變（等速率圓周運動），方向也隨時在改變，具有向心加速度，絕對不是等速度運動。"
    ],
    solutionSteps: [
      { step: "步驟 1：確認等速度條件", content: "等速度包含大小與方向皆固定，故軌跡必為直線，不可為圓周。錯誤者為 B。" }
    ]
  },
  {
    id: "phy-choice-22",
    subject: "physics",
    category: "choice",
    section: "一、選擇題",
    number: "22",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "數據表格分析與終端速度",
    question: "一名傘兵在 t=0 時，從停留於空中不動的直升機跳下，落下一段時間後才張開降落傘。數據顯示其速率在 0~3 秒從 0 增至 28.5 m/s，4 秒時為 21.6 m/s，推測降落傘可能在什麼時候張開的？\n(A)2 秒到 3 秒間 (B)3 秒到 4 秒間 (C)4 秒到 5 秒間 (D)5 秒到 6 秒間。",
    studentAnswer: "B",
    correctAnswer: "B (3 秒到 4 秒間)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "開傘前自由下落加速（0~3 秒，速度越來越大：0 $\\rightarrow$ 9.3 $\\rightarrow$ 19.4 $\\rightarrow$ 28.5）；開傘後產生強大空氣阻力導致急速減速（3~4 秒由 28.5 劇降到 21.6），最終達終端等速（9.3 m/s）。"
    ],
    solutionSteps: [
      { step: "步驟 1：觀察速率轉折點", content: "速度在第 3 秒達到最大值 28.5 m/s，隨後在第 4 秒急降至 21.6 m/s，代表降落傘是在 3 秒到 4 秒間張開。選 B。" }
    ]
  },
  {
    id: "phy-choice-23",
    subject: "physics",
    category: "choice",
    section: "一、選擇題",
    number: "23",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "純量與向量判別",
    question: "下列物理量，何者為向量？\n(A)質量 (B)密度 (C)加速度 (D)溫度。",
    studentAnswer: "C",
    correctAnswer: "C (加速度)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "向量（Vector）：同時具備大小與方向的物理量（如位移、速度、加速度、力、動量）。純量（Scalar）：只有大小無方向（如質量、密度、溫度、路徑長、時間、功、能量）。"
    ],
    solutionSteps: [
      { step: "步驟 1：檢驗是否有方向性", content: "加速度具有方向（加速度方向與合力方向相同），為向量。選 C。" }
    ]
  },
  {
    id: "phy-choice-24",
    subject: "physics",
    category: "choice",
    section: "一、選擇題",
    number: "24",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "牛頓第三定律與反作用力應用",
    question: "下列敘述何者正確？\n(A)只要大小相等、方向相反的兩力，都是互為一對作用力與反作用力\n(B)磁力可能不遵守作用力與反作用力定律\n(C)對外力作用而言，作用力與反作用力可以抵消\n(D)噴射機的飛行原理是藉空氣之反作用力。",
    studentAnswer: "D",
    correctAnswer: "D (噴射機的飛行原理是藉空氣之反作用力)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "噴射機或火箭燃燒燃料向後噴出高壓氣體，被排出的氣體對飛機產生向前的反作用推力；作用力與反作用力分別作用在不同物體上，不能互相抵消。"
    ],
    solutionSteps: [
      { step: "步驟 1：判斷各選項真偽", content: "(A)平衡力作用在同一物體；(C)作用在不同物體不能抵消；(D)噴氣推進藉反作用力前進。選 D。" }
    ]
  },
  {
    id: "phy-choice-25",
    subject: "physics",
    category: "choice",
    section: "一、選擇題",
    number: "25",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "牛頓第一運動定律 (慣性定律)",
    question: "下列有關牛頓第一運動定律何者正確？\n(A)物體的加速度與質量成反比 (B)作用力與反作用力大小相等、方向相反 (C)當物體發生形變時，一定受到外力作用 (D)物體不受外力作用時，靜者恆靜，動者恆作等速直線運動。",
    studentAnswer: "D",
    correctAnswer: "D (物體不受外力作用時，靜者恆靜，動者恆作等速直線運動)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "牛頓第一運動定律定義：物體若不受外力或合力為零，原本靜止者維持靜止，原本運動者必維持等速度直線運動。"
    ],
    solutionSteps: [
      { step: "步驟 1：比對定律定義", content: "選 D 完全吻合牛頓第一運動定律原文敘述。" }
    ]
  },
  {
    id: "phy-choice-26",
    subject: "physics",
    category: "choice",
    section: "一、選擇題",
    number: "26",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "接觸力與超距力分類",
    question: "下列何者是接觸力？\n(A)磁力 (B)重力 (C)靜電力 (D)空氣阻力。",
    studentAnswer: "D",
    correctAnswer: "D (空氣阻力)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "接觸力：物體間必須相互接觸才能產生的作用力（如彈力、摩擦力、浮力、空氣阻力）；超距力（非接觸力）：不需接觸即可透過場作用（重力、靜電力、磁力）。"
    ],
    solutionSteps: [
      { step: "步驟 1：區分接觸與超距", content: "重力、靜電力、磁力皆為超距力；空氣阻力需要空氣粒子接觸碰撞產生。選 D。" }
    ]
  },
  {
    id: "phy-choice-27",
    subject: "physics",
    category: "choice",
    section: "一、選擇題",
    number: "27",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "重力與高度之反比關係",
    question: "下列有關重力的敘述，何者不正確？\n(A)同一物體在高山上的重量比平地大 (B)同一物體在南北極的重量比赤道大 (C)物體在空中自由落下時重量為零 (D)同一物體在地球的重量比月球大。",
    studentAnswer: "A",
    correctAnswer: "A (同一物體在高山上的重量比平地大)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "萬有引力 $W = G\\frac{Mm}{r^2}$。在高山上距離地心半徑 $r$ 較大，重力加速度 $g$ 變小，因此重量會比平地小，選項 (A) 敘述相反，為不正確。"
    ],
    solutionSteps: [
      { step: "步驟 1：分析重量與地心距離", content: "離地心越遠，重力越小，故高山重量應小於平地。錯誤者為 A。" }
    ]
  },
  {
    id: "phy-choice-28",
    subject: "physics",
    category: "choice",
    section: "一、選擇題",
    number: "28",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "等速慣性座標系拋體",
    question: "一孩童坐在等速度運行的公車上，向上直拋一球，球將落在何處？\n(A)其前方 (B)其後方 (C)正落於其手中 (D)不一定。",
    studentAnswer: "C",
    correctAnswer: "C (正落於其手中)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "水平方向上，球在離手瞬間繼承了公車向前的水平初速度 $v$。在空中飛行時，球在水平方向不受外力保持等速運動，與公車前進位移相同，故必定落回手中。"
    ],
    solutionSteps: [
      { step: "步驟 1：水平慣性分析", content: "公車與球水平速度相同，兩者水平位移同步，故正落於手中。選 C。" }
    ]
  },
  {
    id: "phy-choice-29",
    subject: "physics",
    category: "choice",
    section: "一、選擇題",
    number: "29",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "力與運動狀態之因果關係",
    question: "下列有關力與運動的敘述，何者正確？\n(A)物體受力時，速率一定改變 (B)物體速度改變時，一定受到力的作用 (C)物體所受的合力方向與速度同向 (D)物體的瞬時速度為 0 時，所受的合力也是 0。",
    studentAnswer: "B",
    correctAnswer: "B (物體速度改變時，一定受到力的作用)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "依據牛頓第二定律 $\\vec{F} = m\\vec{a}$：加速度是速度的時變率。速度改變代表必有加速度，有加速度就必定受到外力作用！"
    ],
    solutionSteps: [
      { step: "步驟 1：檢視各選項", content: "(A)等速率圓周運動速率不變但受向心力；(B)速度改變必有加速度必受力，完全正確。選 B。" }
    ]
  },
  {
    id: "phy-choice-30",
    subject: "physics",
    category: "choice",
    section: "一、選擇題",
    number: "30",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "質量與重量概念區別",
    question: "把一物體由地面移至高空中時，物體的質量與重量如何變化？\n(A)質量與重量均不變 (B)質量漸減，重量不變 (C)質量不變，重量漸減 (D)質量與重量均漸減。",
    studentAnswer: "C",
    correctAnswer: "C (質量不變，重量漸減)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "**質量**：物質本身的本質屬性，不隨位置改變（不變）；**重量**：物體所受的重力大小 $W = mg$，高度升高重力場 $g$ 減弱，重量漸減。"
    ],
    solutionSteps: [
      { step: "步驟 1：獨立分析質量與重量", content: "質量恆常不變；重力加速度隨離地高度減小，重量漸減。選 C。" }
    ]
  },
  {
    id: "phy-choice-31",
    subject: "physics",
    category: "choice",
    section: "一、選擇題",
    number: "31",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "碰撞受力與加速度大小",
    question: "倘若摩托車與砂石車正面相撞，則下列何者正確？\n(A)兩車受力大小相同，加速度大小相同 (B)兩車受力大小相同，但摩托車的加速度大小較大 (C)摩托車受力大小較大，加速度大小較大 (D)摩托車受力大小較小，加速度大小也較小。",
    studentAnswer: "B",
    correctAnswer: "B (兩車受力大小相同，但摩托車的加速度大小較大)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "牛頓第三定律：兩車相撞互施之撞擊力為一對作用力與反作用力，大小絕對相等 ($F_1 = F_2$)！但由 $a = \\frac{F}{m}$，摩托車質量 $m$ 遠小於砂石車，故摩托車產生的加速度（衝擊破壞）遠大於砂石車。"
    ],
    solutionSteps: [
      { step: "步驟 1：受力大小相等", content: "依牛頓第三定律，撞擊力大小相同。" },
      { step: "步驟 2：加速度與質量反比", content: "摩托車質量小，加速度較大。選 B。" }
    ]
  },
  {
    id: "phy-choice-32",
    subject: "physics",
    category: "choice",
    section: "一、選擇題",
    number: "32",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "摩擦力影響因素",
    question: "下列有關摩擦力的敘述，何者錯誤？\n(A)摩擦力與兩接觸面間的正壓力有關 (B)摩擦力與接觸面間濕潤程度有關 (C)摩擦力與接觸面光滑程度有關 (D)摩擦力與兩物體間的接觸面積大小有關。",
    studentAnswer: "D",
    correctAnswer: "D (摩擦力與兩物體間的接觸面積大小有關)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "摩擦力公式 $f_k = \\mu_k N$，$f_{s,\\max} = \\mu_s N$。最大靜摩擦力與動摩擦力只取決於接觸面性質（摩擦係數 $\\mu$）與正向力 $N$，在一般物理模型中與接觸面積大小無關。"
    ],
    solutionSteps: [
      { step: "步驟 1：檢驗摩擦力公式", content: "摩擦力與接觸面積大小無關。錯誤者為 D。" }
    ]
  },
  {
    id: "phy-choice-33",
    subject: "physics",
    category: "choice",
    section: "一、選擇題",
    number: "33",
    score: 2,
    earned: 0,
    status: "wrong",
    topic: "萬有引力基本定義（核心錯題）",
    question: "任何兩物體間皆有一種相互吸引的力，此種力稱為？\n(A)萬有引力 (B)磁力 (C)熱力 (D)靜電力。",
    studentAnswer: "B",
    correctAnswer: "A (萬有引力)",
    hasMistake: true,
    errorDiagnosis: {
      type: "基本概念名稱混淆",
      summary: "將宇宙萬物皆具備的「萬有引力」誤選成了「磁力」！",
      details: "學生劃記了 (B) 磁力。磁力只存在於具有磁性（如磁鐵或載流導線）的物體之間，且磁力有吸力也有斥力（同名極相斥）。題目特別強調「任何兩物體間皆有（只要有質量即存在）且永遠相互吸引」，這正是牛頓「萬有引力（Universal Gravitation）」的核心定義！"
    },
    keyPoints: [
      "**萬有引力（重力）**：只要具有質量的任何兩物體之間必存在之相互吸引力，公式為 $F = G\\frac{m_1 m_2}{r^2}$，永遠為吸引力！",
      "**磁力**：需具備磁場交互作用，有吸力亦有斥力，非所有普通物體間皆有。"
    ],
    solutionSteps: [
      { step: "步驟 1：抓住關鍵詞「任何兩物體」", content: "只要有質量，宇宙中任何兩物體皆互相吸引，此力稱為「萬有引力」。" },
      { step: "步驟 2：排除磁力", content: "木塊與塑膠之間沒有磁力，但必定有萬有引力。正解為 A。" }
    ]
  },
  {
    id: "phy-choice-34",
    subject: "physics",
    category: "choice",
    section: "一、選擇題",
    number: "34",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "宇宙起源與大霹靂理論",
    question: "現在科學界普遍認為宇宙處於高溫高密度的狀態下且在大爆炸後形成的，此為何種理論的主要內容？\n(A)萬有引力 (B)自由落體 (C)慣性 (D)大霹靂。",
    studentAnswer: "D",
    correctAnswer: "D (大霹靂)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "大霹靂理論（Big Bang Theory）：宇宙起源於約 138 億年前的一個極高溫、極高密度的奇點爆炸膨脹演化而來。"
    ],
    solutionSteps: [
      { step: "步驟 1：對應天文學理論", content: "宇宙大爆炸高溫高密度膨脹模型稱為大霹靂理論。選 D。" }
    ]
  },
  {
    id: "phy-choice-35",
    subject: "physics",
    category: "choice",
    section: "一、選擇題",
    number: "35",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "伽利略理想斜面實驗",
    question: "如圖，球由左邊固定高度下滑，若不計任何阻力，當右邊斜面坡度改變為甲、乙、丙時，則球到達右邊斜坡的高度大小為何？\n(A)甲 > 乙 > 丙 (B)甲 < 乙 < 丙 (C)甲 = 乙 = 丙 (D)甲 < 乙 = 丙。",
    studentAnswer: "C",
    correctAnswer: "C (甲 = 乙 = 丙)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "伽利略理想斜面實驗（力學能守恆）：在不計摩擦與空氣阻力下，小球自左側高 $h$ 處釋放，其重力位能完全轉化為動能，再爬上右側斜面轉化回重力位能。不論右側斜面傾角陡峭或平緩，小球最終必爬升到相同的垂直高度，即 $h_\\text{甲} = h_\\text{乙} = h_\\text{丙}$。"
    ],
    solutionSteps: [
      { step: "步驟 1：力學能守恆分析", content: "$mgh_1 = mgh_2 \\implies h_2 = h_1$。垂直高度必相等。選 C。" }
    ]
  },
  {
    id: "phy-choice-36",
    subject: "physics",
    category: "choice",
    section: "一、選擇題",
    number: "36",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "作用力與反作用力應用實例",
    question: "小智觀察下列現象，哪一個不是作用力與反作用力的概念運用？\n(A)青蛙向後蹬 (B)火箭升空 (C)用力投球 (D)用槳划船，使船前進。",
    studentAnswer: "C",
    correctAnswer: "C (用力投球)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "青蛙後蹬地、火箭向下噴氣、槳向後撥水，都是施力給媒介物並藉由媒介物對自身的「反作用力」獲得向前的推力；而用力投球是投手對球施力改變球的動量（牛頓第二定律），非藉由反作用力使人移動。"
    ],
    solutionSteps: [
      { step: "步驟 1：辨別反作用力推進原理", content: "A、B、D 均為反作用力前進典型實例；C 為普通施力投射。選 C。" }
    ]
  },
  {
    id: "phy-choice-37",
    subject: "physics",
    category: "choice",
    section: "一、選擇題",
    number: "37",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "靜電力與磁力性質比較",
    question: "有關靜電力和磁力的敘述，下列何者正確？\n(A)前者僅有排斥力 (B)後者僅有吸引力 (C)兩力僅有排斥力 (D)兩力均有吸引力及排斥力。",
    studentAnswer: "D",
    correctAnswer: "D (兩力均有吸引力及排斥力)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "靜電力：同性電荷相斥、異性電荷相吸；磁力：同名磁極相斥、異名磁極相吸。兩者皆兼具吸引力與排斥力。"
    ],
    solutionSteps: [
      { step: "步驟 1：核對基本電磁性質", content: "靜電力與磁力皆有同性相斥、異性相吸之特性。選 D。" }
    ]
  },
  {
    id: "phy-choice-38",
    subject: "physics",
    category: "choice",
    section: "一、選擇題",
    number: "38",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "時間單位「秒」之現代科學定義",
    question: "下列哪一種原子在最低與次低能階躍遷時，輻射電磁波振動週期的 9,192,631,770 倍所經歷的時間為 1 秒？\n(A)銫-133 (B)氪-86 (C)碳-12 (D)釷-210。",
    studentAnswer: "A",
    correctAnswer: "A (銫-133)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "1967 年國際度量衡大會將「秒」定義為：銫-133（$^{133}\\text{Cs}$）原子基態的兩個超精細能階之間躍遷對應輻射週期的 9,192,631,770 倍。"
    ],
    solutionSteps: [
      { step: "步驟 1：原子鐘標準元素", content: "定義秒的基準同位素為銫-133。選 A。" }
    ]
  },
  {
    id: "phy-choice-39",
    subject: "physics",
    category: "choice",
    section: "一、選擇題",
    number: "39",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "超重與失重現象（視重分析）",
    question: "臺北 101 大樓為世界排名前列的高樓之一，某人從地面坐高速電梯加速上升最後停在 89 樓的觀景臺，這段時間此人的重量（視重）變化為何？\n(A)只有增加 (B)只有減少 (C)先減少後增加 (D)先增加後減少。",
    studentAnswer: "D",
    correctAnswer: "D (先增加後減少)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "電梯加速上升時：加速度向上 $\\vec{a} > 0$，支持力 $N = m(g + a) > mg$（超重，體重磅秤讀數增加）；電梯接近 89 樓減速時：加速度向下 $\\vec{a} < 0$，支持力 $N = m(g - a) < mg$（失重，體重磅秤讀數減少）。"
    ],
    solutionSteps: [
      { step: "步驟 1：起步加速階段", content: "向上加速 $\\implies N = m(g+a)$，視重增加。" },
      { step: "步驟 2：抵達減速階段", content: "向上減速（加速度向下）$\\implies N = m(g-a)$，視重減少。故為先增加後減少。選 D。" }
    ]
  },
  {
    id: "phy-choice-40",
    subject: "physics",
    category: "choice",
    section: "一、選擇題",
    number: "40",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "位移與路徑長之本質差異",
    question: "有關位移與路徑長的說明，下列敘述何者是正確的？\n(A)只要物體的運動軌跡是直線，則位移大小與路徑長的大小相同\n(B)路徑長就是物體實際運動的總距離\n(C)位移具大小，但不具有方向性\n(D)路徑長具大小，且具有方向性。",
    studentAnswer: "B",
    correctAnswer: "B (路徑長就是物體實際運動的總距離)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "**路徑長**：純量，為運動軌跡的實際總長度（大於或等於位移大小）；**位移**：向量，起點指向終點的有向線段。若直線運動中途有折返，路徑長必定大於位移大小。"
    ],
    solutionSteps: [
      { step: "步驟 1：檢驗路徑長定義", content: "路徑長為物體實際經過路線之總長度，為純量。選 B。" }
    ]
  },

  // =========================================================================
  // 二、填充題 20% (共 10 格，每格 2 分)
  // =========================================================================
  {
    id: "phy-fill-1",
    subject: "physics",
    category: "fill",
    section: "二、填充題",
    number: "1",
    score: 2,
    earned: 0,
    status: "wrong",
    topic: "自然界四大基本交互作用",
    question: "第 1 題：用來維持原子核穩定的作用力為（　　　）。",
    studentAnswer: "強力核",
    correctAnswer: "強核力（或 強交互作用力 / 強力）",
    hasMistake: true,
    errorDiagnosis: {
      type: "專有名詞詞序顛倒",
      summary: "將「強核力」寫成了「強力核」，名詞詞性顛倒被扣 2 分！",
      details: "學生在卷上填寫了「強力核」。用來克服質子間巨大庫侖排斥力、將質子與中子牢牢束縛在原子核內的作用力，中文標準名詞為**「強核力」**（Strong Nuclear Force）或簡稱**「強力」**、**「強交互作用」**。學生將「核」放在最後變成了某種「核子」名詞，而非「力」的名詞，因而被老師以紅筆劃叉扣分。"
    },
    keyPoints: [
      "**自然界四大基本力**（按強度排列）：\n1. **強核力 (強交互作用)**：作用範圍在原子核內 ($10^{-15}$ m)，維持核子穩定。\n2. **電磁力**：帶電粒子間作用，長程力。\n3. **弱核力 (弱交互作用)**：引起放射性 $\\beta$ 衰變。\n4. **萬有引力 (重力)**：質量間吸引，四者中最弱。"
    ],
    solutionSteps: [
      { step: "步驟 1：鎖定原子核內約束力", content: "維持原子核不被質子相斥炸開的力是「強核力」或「強交互作用力」。" },
      { step: "步驟 2：書寫規範提醒", content: "力學專有名詞請以「力」結尾（強核力），切勿顛倒寫成強力核。" }
    ]
  },
  {
    id: "phy-fill-2",
    subject: "physics",
    category: "fill",
    section: "二、填充題",
    number: "2",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "原子核組成與核子名稱",
    question: "第 2 題：原子核由質子與中子所構成，我們統稱這兩種粒子為（　　　）。",
    studentAnswer: "核子",
    correctAnswer: "核子 (Nucleon)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "組成原子核的質子與中子統稱為「核子（Nucleons）」；質量數 $A = Z (質子數) + N (中子數) = 核子總數$。"
    ],
    solutionSteps: [
      { step: "解析", content: "質子與中子統稱為「核子」，填答正確，得 2 分。" }
    ]
  },
  {
    id: "phy-fill-3",
    subject: "physics",
    category: "fill",
    section: "二、填充題",
    number: "3",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "SI 制七大基本量",
    question: "第 3 題（第 1 格）：國際單位系統（簡稱 SI 制）所規定的七個基本量為（　長度　）、（　質量　）、（　時間　）、溫度、物質量、電流強度及發光強度。",
    studentAnswer: "長度",
    correctAnswer: "長度",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "長度（Length，單位公尺 m）是 SI 七大基本量之一。"
    ],
    solutionSteps: [
      { step: "解析", content: "長度填答正確，得 2 分。" }
    ]
  },
  {
    id: "phy-fill-4",
    subject: "physics",
    category: "fill",
    section: "二、填充題",
    number: "4",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "SI 制七大基本量",
    question: "第 3 題（第 2 格）：國際單位系統（簡稱 SI 制）所規定的七個基本量為（　長度　）、（　質量　）、（　時間　）、溫度、物質量、電流強度及發光強度。",
    studentAnswer: "質量",
    correctAnswer: "質量",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "質量（Mass，單位公斤 kg）是 SI 七大基本量之一。"
    ],
    solutionSteps: [
      { step: "解析", content: "質量填答正確，得 2 分。" }
    ]
  },
  {
    id: "phy-fill-5",
    subject: "physics",
    category: "fill",
    section: "二、填充題",
    number: "5",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "SI 制七大基本量",
    question: "第 3 題（第 3 格）：國際單位系統（簡稱 SI 制）所規定的七個基本量為（　長度　）、（　質量　）、（　時間　）、溫度、物質量、電流強度及發光強度。",
    studentAnswer: "時間",
    correctAnswer: "時間",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "時間（Time，單位秒 s）是 SI 七大基本量之一。"
    ],
    solutionSteps: [
      { step: "解析", content: "時間填答正確，得 2 分。" }
    ]
  },
  {
    id: "phy-fill-6",
    subject: "physics",
    category: "fill",
    section: "二、填充題",
    number: "6",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "光速與日地距離傳播時間運算",
    question: "第 4 題：太陽和地球之間的平均距離約為一億五千萬公里，而光速為 $3 \\times 10^8$ 公尺/秒，則地球所接受到的太陽光大約是（　　　）秒前太陽所發出的。",
    studentAnswer: "500",
    correctAnswer: "500",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "單位換算重點：1 億 5 千萬公里 $= 1.5 \\times 10^8 \\text{ km} = 1.5 \\times 10^{11} \\text{ m}$。\n傳播時間 $t = \\frac{s}{c} = \\frac{1.5 \\times 10^{11}}{3 \\times 10^8} = 500 \\text{ 秒}$（約 8 分 20 秒）。"
    ],
    solutionSteps: [
      { step: "步驟 1：公里化為公尺", content: "$s = 150,000,000 \\text{ km} = 1.5 \\times 10^{11} \\text{ m}$。" },
      { step: "步驟 2：利用等速公式計算時間", content: "$$t = \\frac{s}{v} = \\frac{1.5 \\times 10^{11} \\text{ m}}{3 \\times 10^8 \\text{ m/s}} = 500 \\text{ 秒}$$" }
    ]
  },
  {
    id: "phy-fill-7",
    subject: "physics",
    category: "fill",
    section: "二、填充題",
    number: "7",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "華氏與攝氏溫標換算公式",
    question: "第 5 題：122 °F 等於（　　　）°C。",
    studentAnswer: "50",
    correctAnswer: "50",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "溫標轉換核心公式：$$\\frac{C - 0}{100 - 0} = \\frac{F - 32}{212 - 32} \\implies C = \\frac{5}{9}(F - 32)$$"
    ],
    solutionSteps: [
      { step: "步驟 1：代入華氏數值 122", content: "$$C = \\frac{5}{9} \\times (122 - 32) = \\frac{5}{9} \\times 90 = 50^\\circ\\text{C}$$" }
    ]
  },
  {
    id: "phy-fill-8",
    subject: "physics",
    category: "fill",
    section: "二、填充題",
    number: "8",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "折返運動之平均速度（向量）",
    question: "第 6 題（第 1 小題）：小劉去爬山，沿原山路上山下一趟，若上山平均速率 4 km/hr，下山平均速率 6 km/hr，則全程平均速度是（　　　）km/hr。",
    studentAnswer: "0",
    correctAnswer: "0",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "**平均速度定義**：$$\\bar{v} = \\frac{\\text{總位移 } \\Delta x}{\\text{總時間 } \\Delta t}$$\n沿原路上下山一趟回到出發原點，總位移為 $0$，故平均速度必為 $0$。"
    ],
    solutionSteps: [
      { step: "步驟 1：求總位移", content: "出發點與終點相同，位移 $\\Delta x = 0$。" },
      { step: "步驟 2：求平均速度", content: "平均速度 $= \\frac{0}{\\text{總時間}} = 0 \\text{ km/hr}$。得 2 分。" }
    ]
  },
  {
    id: "phy-fill-9",
    subject: "physics",
    category: "fill",
    section: "二、填充題",
    number: "9",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "往返運動之平均速率（調和平均）",
    question: "第 6 題（第 2 小題）：小劉去爬山，沿原山路上山下一趟，若上山平均速率 4 km/hr，下山平均速率 6 km/hr，則全程平均速率是（　　　）km/hr。",
    studentAnswer: "4.8",
    correctAnswer: "4.8",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "**平均速率定義**：$$\\bar{v}_\\text{速率} = \\frac{\\text{總路徑長}}{\\text{總時間}}$$\n當兩段路程距離相等時，平均速率為兩速率之調和平均數：$$\\bar{v} = \\frac{2 v_1 v_2}{v_1 + v_2} = \\frac{2 \\times 4 \\times 6}{4 + 6} = \\frac{48}{10} = 4.8 \\text{ km/hr}$$"
    ],
    solutionSteps: [
      { step: "步驟 1：假設單程距離為 S", content: "上山時間 $t_1 = \\frac{S}{4}$，下山時間 $t_2 = \\frac{S}{6}$。" },
      { step: "步驟 2：計算總時間與總路程", content: "總時間 $T = t_1 + t_2 = \\frac{5S}{12}$，總路徑長 $= 2S$。" },
      { step: "步驟 3：求平均速率", content: "$$\\bar{v}_\\text{速率} = \\frac{2S}{\\frac{5S}{12}} = \\frac{24}{5} = 4.8 \\text{ km/hr}$$" }
    ]
  },
  {
    id: "phy-fill-10",
    subject: "physics",
    category: "fill",
    section: "二、填充題",
    number: "10",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "SI 制溫度物理量確認",
    question: "第 3 題（第 4 格對應）：國際單位系統所規定的七個基本量中第四個填答熱力學指標量（　溫度　）。",
    studentAnswer: "溫度",
    correctAnswer: "溫度",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "熱力學溫度是國際單位制七大基本量之一。"
    ],
    solutionSteps: [
      { step: "解析", content: "溫度填答正確，得 2 分。" }
    ]
  }
];

window.physicsExamMetadata = physicsExamMetadata;
window.physicsQuestionsData = physicsQuestionsData;

