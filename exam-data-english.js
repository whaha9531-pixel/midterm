// ==========================================================================
// 智光商工 日間部 115 學年度第 1 學期第一次段考 英語文 試卷 完整數據庫
// 學生：周姸汝（座號：4 號） 得分：78 / 100
// ==========================================================================

const englishExamMetadata = {
  title: "智光商工 115學年度第1學期第一次段考 英語文試卷 深度檢討與錯題診斷",
  subtitle: "全卷 7 大題共 50 小題逐題詳解、失誤盲點深度剖析、閱讀全文對譯與考點重點歸納",
  student: {
    school: "智光商工 日間部",
    class: "工、商科 一年 1- 班",
    name: "周姸汝",
    seat: "4 號",
    score: 78,
    fullScore: 100,
    deductions: 22,
    totalQuestions: 50,
    correctCount: 39,
    wrongCount: 11,
    accuracyRate: "78.0%"
  },
  sectionScores: [
    { name: "一、單字", earned: 10, full: 20, count: 10, correct: 5, wrong: 5, icon: "🔤" },
    { name: "二、文意字彙", earned: 20, full: 20, count: 10, correct: 10, wrong: 0, icon: "📝" },
    { name: "三、句子配合", earned: 10, full: 10, count: 5, correct: 5, wrong: 0, icon: "🔗" },
    { name: "四、課文默寫填空", earned: 10, full: 10, count: 5, correct: 5, wrong: 0, icon: "📖" },
    { name: "五、翻譯填空", earned: 18, full: 20, count: 10, correct: 9, wrong: 1, icon: "🌐" },
    { name: "六、對話測驗", earned: 2, full: 10, count: 5, correct: 1, wrong: 4, icon: "💬" },
    { name: "七、閱讀測驗", earned: 8, full: 10, count: 5, correct: 4, wrong: 1, icon: "📚" }
  ],
  summary: {
    strengths: [
      "【文意字彙全對】二、文意字彙 10 題全部命中（滿分 20 分），能精確掌握因此 (Therefore)、象徵 (symbol)、傳統 (tradition)、電腦技能 (skills) 等核心名詞與副詞用法。",
      "【句型配合滿分】三、句子配合 5 題全對，熟練掌握日常生活對話應對與社交感謝禮節（如 I appreciate it. 我非常感謝）。",
      "【課文默寫無懈可擊】四、課文默寫 5 格全對，無論是動詞一致性 (bring) 或專有名詞字首大寫 (Romans) 均未出錯。",
      "【閱讀理解基礎扎實】七、閱讀測驗 5 題答對 4 題，能精準自長文中擷取細節資訊（如節日時間、活動特色與象徵意涵）。"
    ],
    weaknesses: [
      "【單字拼寫漏字與作答錯位】一、單字部分因緊張導致作答順序對應顛倒（如將 surprise 填入第 1 題、result 填入第 3 題），且拼寫出現字母脫落（reltion 漏 a、surpise 漏 r、surbject 多 r）。",
      "【日常情境對話邏輯盲區（致命失分區）】六、對話 5 題錯了 4 題！作答時未通讀前後句的語意關聯（例如看到 I'd love to go with you 欣然接受邀約，前方卻選了拒絕的 I'm afraid I can't；告別場合誤用不客氣 You're welcome 代替 Talk to you later）。",
      "【介系詞搭配細節】五、翻譯填空第 6 題將「四處參觀」look around 誤寫為「轉移視線」look away，需加強動詞片語的介系詞精準記憶。"
    ]
  }
};

const englishQuestionsData = [
  // =========================================================================
  // 一、單字 20% (每題 2 分)
  // =========================================================================
  {
    id: "eng-vocab-1",
    subject: "english",
    category: "vocab",
    section: "一、單字",
    number: "1",
    score: 2,
    earned: 0,
    status: "wrong",
    topic: "單字詞意與拼寫",
    question: "中文提示：【結果】（名詞）",
    studentAnswer: "surpise",
    correctAnswer: "result",
    hasMistake: true,
    errorDiagnosis: {
      type: "作答順序錯位 ＆ 字母拼寫漏字",
      summary: "將第 7 題的 surprise 誤填入第 1 題，且漏拼字母 r！",
      details: "本題中文提示為「結果」，正確單字應為 result。學生在答案卡填寫了 surpise，不僅把「驚奇/驚喜 (surprise)」的答案錯位填在第 1 格，而且單字本身還漏掉了中間的字母 r（拼成 surpise）。"
    },
    keyPoints: [
      "**字義辨析**：**result** [rɪˈzʌlt] 名詞，表「結果、成果」；如 as a result（結果、因此）。",
      "**易混單字**：**surprise** [sɚˈpraɪz] 名詞/動詞，表「驚訝、驚奇」。",
      "**拼讀技巧**：re- + -sult（result）；sur- + -prise（surprise，注意包含兩個 r）。"
    ],
    solutionSteps: [
      { step: "步驟 1：審視題目中文詞義", content: "題目要求寫出「結果」的英文單字。" },
      { step: "步驟 2：檢索對應詞彙", content: "「結果」的標準英文為 result [r-e-s-u-l-t]。" },
      { step: "步驟 3：排查錯位失誤", content: "作答時先將所有中文提示與英文單字在題卷上連線標註，再謄寫至答案卡，可徹底杜絕跳題錯位。" }
    ]
  },
  {
    id: "eng-vocab-2",
    subject: "english",
    category: "vocab",
    section: "一、單字",
    number: "2",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "單字拼寫",
    question: "中文提示：【電梯】（名詞）",
    studentAnswer: "elevator",
    correctAnswer: "elevator",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "**elevator** [ˈɛləˌvetɚ]：美式英語指「電梯、升降機」；英式英語常稱為 **lift**。",
      "詞根記憶：elevate（動詞，舉起、提升）+ -or（名詞字尾，裝置/人）= 升降裝置。"
    ],
    solutionSteps: [
      { step: "解析", content: "電梯對應英文為 elevator，拼寫正確，獲得滿分 2 分。" }
    ]
  },
  {
    id: "eng-vocab-3",
    subject: "english",
    category: "vocab",
    section: "一、單字",
    number: "3",
    score: 2,
    earned: 0,
    status: "wrong",
    topic: "單字詞意與拼寫",
    question: "中文提示：【請求；要求】（名詞/動詞）",
    studentAnswer: "result",
    correctAnswer: "request",
    hasMistake: true,
    errorDiagnosis: {
      type: "作答錯位倒置",
      summary: "將第 1 題的「結果 (result)」填入第 3 題「請求」！",
      details: "本題中文提示為「請求；要求」，正確英文為 request。學生將原本屬於第 1 題的單字 result 寫在第 3 格，導致連鎖錯位扣分。"
    },
    keyPoints: [
      "**request** [rɪˈkwɛst]：名詞/動詞，表「請求、懇求、要求」。",
      "常用片語：make a request（提出請求）、upon request（應要求）。",
      "字首拆解：re-（回、向後）+ quest（尋求、探求）= 請求回覆。"
    ],
    solutionSteps: [
      { step: "步驟 1：明確中文提示", content: "「請求；要求」的名詞/動詞詞彙為 request。" },
      { step: "步驟 2：正解拼寫確認", content: "r-e-q-u-e-s-t。請注意字母 q 必定與 u 搭配發 /kw/ 音。" }
    ]
  },
  {
    id: "eng-vocab-4",
    subject: "english",
    category: "vocab",
    section: "一、單字",
    number: "4",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "單字拼寫",
    question: "中文提示：【包裹】（名詞）",
    studentAnswer: "package",
    correctAnswer: "package",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "**package** [ˈpækɪdʒ]：名詞，指「包裹、包裝盒」。",
      "延伸片語：package tour（套裝行程）、deliver a package（遞送包裹）。"
    ],
    solutionSteps: [
      { step: "解析", content: "包裹對應英文為 package，拼寫完全正確，得 2 分。" }
    ]
  },
  {
    id: "eng-vocab-5",
    subject: "english",
    category: "vocab",
    section: "一、單字",
    number: "5",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "單字拼寫",
    question: "中文提示：【命令；掌握】（名詞/動詞）",
    studentAnswer: "command",
    correctAnswer: "command",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "**command** [kəˈmænd]：名詞/動詞，指「命令、指揮、掌握精通」。",
      "進階用法：have a good command of English（精通英語）。"
    ],
    solutionSteps: [
      { step: "解析", content: "命令對應英文為 command，雙寫 m 拼寫精確，得 2 分。" }
    ]
  },
  {
    id: "eng-vocab-6",
    subject: "english",
    category: "vocab",
    section: "一、單字",
    number: "6",
    score: 2,
    earned: 0,
    status: "wrong",
    topic: "單字拼寫細節",
    question: "中文提示：【關係】（名詞）",
    studentAnswer: "reltion",
    correctAnswer: "relation",
    hasMistake: true,
    errorDiagnosis: {
      type: "字母漏寫失誤",
      summary: "漏掉中間的字母 a，拼成 reltion！",
      details: "「關係」的標準單字是 relation，音標為 [rɪˈleʃən]。學生在第二音節 /le/ 的部分漏寫了關鍵元音字母 a，拼成了 reltion。"
    },
    keyPoints: [
      "**relation** [rɪˈleʃən]：名詞，表「關係、關聯、親戚」。",
      "**音節拆解法**：re-la-tion（三音節），注意 la 音節中的 a 是重音雙元音 [eɪ]，絕對不可漏掉！",
      "延伸詞彙：relationship（人際關係、戀愛關係）。"
    ],
    solutionSteps: [
      { step: "步驟 1：音節拆解", content: "re- (第一音節) + la- (第二音節) + tion (名詞字尾)。" },
      { step: "步驟 2：拼寫檢查", content: "確認每個音節均有元音字母支撐：r-e-l-a-t-i-o-n。" }
    ]
  },
  {
    id: "eng-vocab-7",
    subject: "english",
    category: "vocab",
    section: "一、單字",
    number: "7",
    score: 2,
    earned: 0,
    status: "wrong",
    topic: "單字詞意與拼寫",
    question: "中文提示：【驚訝；驚喜】（名詞/動詞）",
    studentAnswer: "reguset",
    correctAnswer: "surprise",
    hasMistake: true,
    errorDiagnosis: {
      type: "詞意錯位 ＆ 拼寫混淆",
      summary: "將第 3 題的「請求 (request)」移到此處，且拼成 reguset！",
      details: "本題中文提示為「驚訝；驚喜」，英文為 surprise。學生在此格填寫了 reguset，推測是將「請求 (request)」寫在此處，同時把字母 q 誤寫成 g、u 與 e 顛倒（拼成 reguset）。"
    },
    keyPoints: [
      "**surprise** [sɚˈpraɪz]：名詞/動詞，表「驚訝、驚喜、使驚奇」。",
      "**request** [rɪˈkwɛst]：表「請求、要求」。字母 q 永遠接 u，不可寫成 g。",
      "避錯口訣：驚喜要說 surprise（sur-prise，有兩個 r）；請求要說 request（re-quest，qu 同行）。"
    ],
    solutionSteps: [
      { step: "步驟 1：中文詞義確認", content: "「驚訝；驚喜」= surprise。" },
      { step: "步驟 2：自然發音拼寫", content: "sur- + -prise $\\rightarrow$ s-u-r-p-r-i-s-e。" }
    ]
  },
  {
    id: "eng-vocab-8",
    subject: "english",
    category: "vocab",
    section: "一、單字",
    number: "8",
    score: 2,
    earned: 0,
    status: "wrong",
    topic: "單字拼寫細節",
    question: "中文提示：【主題；學科】（名詞）",
    studentAnswer: "surbject",
    correctAnswer: "subject",
    hasMistake: true,
    errorDiagnosis: {
      type: "發音誤導多加字母",
      summary: "受捲舌音干擾多寫了 r，拼成了 surbject！",
      details: "「主題；學科」正確英文為 subject [ˈsʌbdʒɪkt]。學生在 sub 後方多插入了一個字母 r，寫成 surbject。"
    },
    keyPoints: [
      "**subject** [ˈsʌbdʒɪkt]：名詞，表「主題、學科、主詞」。",
      "**字根字首剖析**：字首 **sub-**（在...之下，不含 r）+ **ject**（投擲）= 臣服、引申為討論的主題。整個單字完全沒有字母 r！"
    ],
    solutionSteps: [
      { step: "步驟 1：確認字首", content: "sub-（如 subway 地鐵、submarine 潛水艇），均無 r。" },
      { step: "步驟 2：組合拼寫", content: "sub + ject = s-u-b-j-e-c-t。" }
    ]
  },
  {
    id: "eng-vocab-9",
    subject: "english",
    category: "vocab",
    section: "一、單字",
    number: "9",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "單字拼寫",
    question: "中文提示：【目的】（名詞）",
    studentAnswer: "purpose",
    correctAnswer: "purpose",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "**purpose** [ˈpɝpəs]：名詞，表「目的、意圖」。",
      "高頻片語：on purpose（故意地）、for the purpose of（為了...目的）。"
    ],
    solutionSteps: [
      { step: "解析", content: "目的對應英文為 purpose，拼寫正確，得 2 分。" }
    ]
  },
  {
    id: "eng-vocab-10",
    subject: "english",
    category: "vocab",
    section: "一、單字",
    number: "10",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "單字拼寫",
    question: "中文提示：【街角；角落】（名詞）",
    studentAnswer: "corner",
    correctAnswer: "corner",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "**corner** [ˈkɔrnɚ]：名詞，表「街角、角落」。",
      "常見搭配：around the corner（在轉角處、即將來臨）、in the corner（在室內角落）。"
    ],
    solutionSteps: [
      { step: "解析", content: "角落對應英文為 corner，拼寫正確，得 2 分。" }
    ]
  },

  // =========================================================================
  // 二、文意字彙 20% (每題 2 分) (滿分 20/20)
  // =========================================================================
  {
    id: "eng-choice-1",
    subject: "english",
    category: "choice",
    section: "二、文意字彙",
    number: "1",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "文意選填（形容詞）",
    question: "Tom seldom talks about his ___ life, so I don't know much about him.",
    options: "A. Therefore  B. introduce  C. personal  D. members  E. respect  F. likely  G. impressed  H. skills  I. tradition  J. symbol",
    studentAnswer: "C",
    correctAnswer: "C (personal)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "句意：Tom 很少談論他的**個人生活 (personal life)**，所以我對他不太了解。",
      "語境線索：後句「so I don't know much about him」，表示前面是談論「私人生活/隱私」。"
    ],
    solutionSteps: [
      { step: "步驟 1：詞性分析", content: "修飾名詞 life，空格需填入形容詞。" },
      { step: "步驟 2：語意搭配", content: "personal life 為固定習慣搭配，表示「私人生活」。故選 C。" }
    ]
  },
  {
    id: "eng-choice-2",
    subject: "english",
    category: "choice",
    section: "二、文意字彙",
    number: "2",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "文意選填（動詞）",
    question: "Let me ___ myself. My name is Andy.",
    options: "A. Therefore  B. introduce  C. personal  D. members  E. respect  F. likely  G. impressed  H. skills  I. tradition  J. symbol",
    studentAnswer: "B",
    correctAnswer: "B (introduce)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "句意：讓我**自我介紹 (introduce myself)**一下，我的名字是 Andy。",
      "文法結構：Let + 受詞 + 原形動詞。introduce oneself 表「自我介紹」。"
    ],
    solutionSteps: [
      { step: "解析", content: "後句告知姓名，前面必定是自我介紹 introduce myself。故選 B。" }
    ]
  },
  {
    id: "eng-choice-3",
    subject: "english",
    category: "choice",
    section: "二、文意字彙",
    number: "3",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "文意選填（名詞複數）",
    question: "The reading club has six ___. They meet once a month.",
    options: "A. Therefore  B. introduce  C. personal  D. members  E. respect  F. likely  G. impressed  H. skills  I. tradition  J. symbol",
    studentAnswer: "D",
    correctAnswer: "D (members)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "句意：這個讀書會有六位**成員 (members)**。他們每月聚會一次。",
      "名詞搭配：club（社團、俱樂部）的人員稱為 members。"
    ],
    solutionSteps: [
      { step: "解析", content: "主詞為讀書會，受詞是六個「成員」members，代名詞以 They 指代。故選 D。" }
    ]
  },
  {
    id: "eng-choice-4",
    subject: "english",
    category: "choice",
    section: "二、文意字彙",
    number: "4",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "文意選填（名詞）",
    question: "Everyone needs to show ___ for their parents.",
    options: "A. Therefore  B. introduce  C. personal  D. members  E. respect  F. likely  G. impressed  H. skills  I. tradition  J. symbol",
    studentAnswer: "E",
    correctAnswer: "E (respect)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "句意：每個人都必須對父母表達**尊敬 (respect)**。",
      "核心片語：show respect for... 表「對...表達敬意」。"
    ],
    solutionSteps: [
      { step: "解析", content: "搭配介系詞 for their parents，動詞為 show，最佳名詞為 respect。故選 E。" }
    ]
  },
  {
    id: "eng-choice-5",
    subject: "english",
    category: "choice",
    section: "二、文意字彙",
    number: "5",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "文意選填（轉折副詞）",
    question: "Henry didn't prepare for the test. ___, he didn't pass it.",
    options: "A. Therefore  B. introduce  C. personal  D. members  E. respect  F. likely  G. impressed  H. skills  I. tradition  J. symbol",
    studentAnswer: "A",
    correctAnswer: "A (Therefore)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "句意：Henry 沒有準備考試。**因此 (Therefore)**，他沒有通過考試。",
      "邏輯因果：前句為原因（沒準備），後句為結果（沒及格），用副詞 Therefore 引導。"
    ],
    solutionSteps: [
      { step: "解析", content: "前因後果關聯，位於句首且有逗號隔開，選擇轉折副詞 Therefore。故選 A。" }
    ]
  },
  {
    id: "eng-choice-6",
    subject: "english",
    category: "choice",
    section: "二、文意字彙",
    number: "6",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "文意選填（名詞）",
    question: "For Chinese people, the color red is a ___ of luck.",
    options: "A. Therefore  B. introduce  C. personal  D. members  E. respect  F. likely  G. impressed  H. skills  I. tradition  J. symbol",
    studentAnswer: "J",
    correctAnswer: "J (symbol)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "句意：對華人而言，紅色是幸運的**象徵 (symbol)**。",
      "文化搭配：a symbol of luck（幸運的象徵）、a symbol of peace（和平的象徵）。"
    ],
    solutionSteps: [
      { step: "解析", content: "紅色代表好運，此處填入「象徵」symbol。故選 J。" }
    ]
  },
  {
    id: "eng-choice-7",
    subject: "english",
    category: "choice",
    section: "二、文意字彙",
    number: "7",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "文意選填（形容詞）",
    question: "Julia and her boyfriend are ___ to get married next year.",
    options: "A. Therefore  B. introduce  C. personal  D. members  E. respect  F. likely  G. impressed  H. skills  I. tradition  J. symbol",
    studentAnswer: "F",
    correctAnswer: "F (likely)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "句意：Julia 和她的男友明年**很有可能 (likely)**要結婚了。",
      "重要文法句型：be likely to + 原形動詞，表示「很有可能...」。"
    ],
    solutionSteps: [
      { step: "解析", content: "are ___ to get married，搭配 be likely to 句型，選 F。" }
    ]
  },
  {
    id: "eng-choice-8",
    subject: "english",
    category: "choice",
    section: "二、文意字彙",
    number: "8",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "文意選填（名詞）",
    question: "Emily followed the family ___ and became a cook.",
    options: "A. Therefore  B. introduce  C. personal  D. members  E. respect  F. likely  G. impressed  H. skills  I. tradition  J. symbol",
    studentAnswer: "I",
    correctAnswer: "I (tradition)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "句意：Emily 遵從家族**傳統 (tradition)**，成為了一名廚師。",
      "常用片語：follow a tradition（遵從/遵循傳統）、family tradition（家傳/家族傳統）。"
    ],
    solutionSteps: [
      { step: "解析", content: "修飾語為 family，後接 became a cook，最符合文意的是「傳統」tradition。選 I。" }
    ]
  },
  {
    id: "eng-choice-9",
    subject: "english",
    category: "choice",
    section: "二、文意字彙",
    number: "9",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "文意選填（名詞複數）",
    question: "My grandma enjoys learning computer ___.",
    options: "A. Therefore  B. introduce  C. personal  D. members  E. respect  F. likely  G. impressed  H. skills  I. tradition  J. symbol",
    studentAnswer: "H",
    correctAnswer: "H (skills)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "句意：我的祖母喜歡學習電腦**技能 (skills)**。",
      "名詞搭配：computer skills（電腦技能/操作技巧）。"
    ],
    solutionSteps: [
      { step: "解析", content: "learning computer ___ 搭配「技能」skills 最自然。選 H。" }
    ]
  },
  {
    id: "eng-choice-10",
    subject: "english",
    category: "choice",
    section: "二、文意字彙",
    number: "10",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "文意選填（動詞過去式）",
    question: "The man ___ everyone at the party with his funny tricks.",
    options: "A. Therefore  B. introduce  C. personal  D. members  E. respect  F. likely  G. impressed  H. skills  I. tradition  J. symbol",
    studentAnswer: "G",
    correctAnswer: "G (impressed)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "句意：那個男人在派對上用有趣的把戲讓大家**留下了深刻的印象 (impressed)**。",
      "核心用法：impress sb with sth（以某物使某人留下深刻印象）。"
    ],
    solutionSteps: [
      { step: "解析", content: "動詞填入 impressed，與後方 with his funny tricks 完美呼應。選 G。" }
    ]
  },

  // =========================================================================
  // 三、句子配合 10% (每題 2 分) (滿分 10/10)
  // =========================================================================
  {
    id: "eng-match-1",
    subject: "english",
    category: "match",
    section: "三、句子配合",
    number: "1",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "日常社交會話配對",
    question: "I've caught a cold.",
    options: "A. 很好，謝謝，你也很好嗎？  B. 我感冒了。  C. 非常感謝。  D. 你好嗎？  E. 怎麼啦？",
    studentAnswer: "B",
    correctAnswer: "B (我感冒了。)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "catch a cold 為固定片語「感冒」。現在完成式 I've caught a cold 表目前處於感冒狀態。"
    ],
    solutionSteps: [
      { step: "解析", content: "直譯為「我感冒了」，精準對應選項 B。" }
    ]
  },
  {
    id: "eng-match-2",
    subject: "english",
    category: "match",
    section: "三、句子配合",
    number: "2",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "關心詢問句型",
    question: "What's wrong with you?",
    options: "A. 很好，謝謝，你也很好嗎？  B. 我感冒了。  C. 非常感謝。  D. 你好嗎？  E. 怎麼啦？",
    studentAnswer: "E",
    correctAnswer: "E (怎麼啦？)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "What's wrong with you? / What's the matter? 用於關心詢問對方出了什麼問題、怎麼了。"
    ],
    solutionSteps: [
      { step: "解析", content: "中文意思是「怎麼啦？/ 你哪裡不舒服？」，對應選項 E。" }
    ]
  },
  {
    id: "eng-match-3",
    subject: "english",
    category: "match",
    section: "三、句子配合",
    number: "3",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "問候回應句型",
    question: "Fine, thank you. And how are you?",
    options: "A. 很好，謝謝，你也很好嗎？  B. 我感冒了。  C. 非常感謝。  D. 你好嗎？  E. 怎麼啦？",
    studentAnswer: "A",
    correctAnswer: "A (很好，謝謝，你也很好嗎？)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "經典問候回應：先答 Fine, thank you（很好，謝謝），再禮貌反問 And how are you?（那你呢/你也很好嗎？）。"
    ],
    solutionSteps: [
      { step: "解析", content: "完全對應中文選項 A。" }
    ]
  },
  {
    id: "eng-match-4",
    subject: "english",
    category: "match",
    section: "三、句子配合",
    number: "4",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "基礎問候句型",
    question: "How are you?",
    options: "A. 很好，謝謝，你也很好嗎？  B. 我感冒了。  C. 非常感謝。  D. 你好嗎？  E. 怎麼啦？",
    studentAnswer: "D",
    correctAnswer: "D (你好嗎？)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "How are you? 是最普遍的問候語「你好嗎？」。"
    ],
    solutionSteps: [
      { step: "解析", content: "對應選項 D。" }
    ]
  },
  {
    id: "eng-match-5",
    subject: "english",
    category: "match",
    section: "三、句子配合",
    number: "5",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "致謝感激句型",
    question: "I appreciate it.",
    options: "A. 很好，謝謝，你也很好嗎？  B. 我感冒了。  C. 非常感謝。  D. 你好嗎？  E. 怎麼啦？",
    studentAnswer: "C",
    correctAnswer: "C (非常感謝。)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "appreciate [əˈpriʃɪˌet] 表感激、感謝。I appreciate it. 是正式且誠懇的致謝語。"
    ],
    solutionSteps: [
      { step: "解析", content: "中文意為「非常感謝 / 我很感激」，對應選項 C。" }
    ]
  },

  // =========================================================================
  // 四、課文默寫填空 10% (每題 2 分) (滿分 10/10)
  // =========================================================================
  {
    id: "eng-dict-1",
    subject: "english",
    category: "dict",
    section: "四、課文默寫填空",
    number: "1",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "動詞時態與主詞一致",
    question: "\"Happy Birthday!\" These words always 1. ___ fun and joy to people.",
    studentAnswer: "bring",
    correctAnswer: "bring",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "主詞 These words 為複數名詞，配合現在式動詞原形 bring（帶來）。",
      "常態性事實用現在簡單式。"
    ],
    solutionSteps: [
      { step: "解析", content: "bring 完全正確，獲得 2 分。" }
    ]
  },
  {
    id: "eng-dict-2",
    subject: "english",
    category: "dict",
    section: "四、課文默寫填空",
    number: "2",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "名詞複數與語境",
    question: "Most birthday 2. ___ look forward to getting presents 3. ___ enjoying birthday celebrations.",
    studentAnswer: "children",
    correctAnswer: "children",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "birthday children（壽星孩子們），child 的不規則複數為 children。",
      "與後文 look forward to 複數動詞搭配一致。"
    ],
    solutionSteps: [
      { step: "解析", content: "children 拼寫無誤，得 2 分。" }
    ]
  },
  {
    id: "eng-dict-3",
    subject: "english",
    category: "dict",
    section: "四、課文默寫填空",
    number: "3",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "對等連接詞",
    question: "Most birthday children look forward to getting presents 3. ___ enjoying birthday celebrations.",
    studentAnswer: "and",
    correctAnswer: "and",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "平行結構 (Parallel Structure)：look forward to 後接動名詞 V-ing，getting presents [and] enjoying celebrations 兩者並列。"
    ],
    solutionSteps: [
      { step: "解析", content: "填入 and 連接兩項動名詞活動，得 2 分。" }
    ]
  },
  {
    id: "eng-dict-4",
    subject: "english",
    category: "dict",
    section: "四、課文默寫填空",
    number: "4",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "專有名詞大寫",
    question: "In fact, the ancient 4. ___ might be the first people to celebrate birthdays.",
    studentAnswer: "Romans",
    correctAnswer: "Romans",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "the ancient Romans 表「古羅馬人」。專有名詞首字母必須大寫 R。"
    ],
    solutionSteps: [
      { step: "解析", content: "Romans 首字母大寫且拼寫完全正確，得 2 分。" }
    ]
  },
  {
    id: "eng-dict-5",
    subject: "english",
    category: "dict",
    section: "四、課文默寫填空",
    number: "5",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "空間介系詞片語",
    question: "Today, people have fun birthday traditions 5. ___ the world.",
    studentAnswer: "around",
    correctAnswer: "around",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "around the world 為固定片語「世界各地、全世界」。"
    ],
    solutionSteps: [
      { step: "解析", content: "around 填寫正確，得 2 分。" }
    ]
  },

  // =========================================================================
  // 五、翻譯填空 20% (每格 2 分) (18/20)
  // =========================================================================
  {
    id: "eng-trans-1",
    subject: "english",
    category: "trans",
    section: "五、翻譯填空",
    number: "1",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "名詞詞彙",
    question: "第 1 題：那名演員穿上他的戲服，然後走上舞台。\nThe actor put on his 1. ___ and walked on to the 2. ___.",
    studentAnswer: "costume",
    correctAnswer: "costume",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "**costume** [ˈkɑstum]：名詞，指「戲服、服裝、化裝舞會服飾」。"
    ],
    solutionSteps: [
      { step: "解析", content: "戲服對應英文為 costume，拼寫正確，得 2 分。" }
    ]
  },
  {
    id: "eng-trans-2",
    subject: "english",
    category: "trans",
    section: "五、翻譯填空",
    number: "2",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "名詞詞彙",
    question: "第 1 題：那名演員穿上他的戲服，然後走上舞台。\nThe actor put on his 1. costume and walked on to the 2. ___.",
    studentAnswer: "stage",
    correctAnswer: "stage",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "**stage** [stedʒ]：名詞，指「舞台」。on to the stage 走上舞台。"
    ],
    solutionSteps: [
      { step: "解析", content: "舞台對應 stage，拼寫無誤，得 2 分。" }
    ]
  },
  {
    id: "eng-trans-3",
    subject: "english",
    category: "trans",
    section: "五、翻譯填空",
    number: "3",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "片語首字大寫",
    question: "第 2 題：Karen 擅長烹飪。事實上，她正計畫要開一間小餐館。\nKaren is good at cooking. 3. ___ 4. ___, she is planning to open a small restaurant.",
    studentAnswer: "In",
    correctAnswer: "In",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "**In fact** 為常用片語「事實上」。位於句首字母 I 必須大寫。"
    ],
    solutionSteps: [
      { step: "解析", content: "In 正確大寫，得 2 分。" }
    ]
  },
  {
    id: "eng-trans-4",
    subject: "english",
    category: "trans",
    section: "五、翻譯填空",
    number: "4",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "副詞片語",
    question: "第 2 題：Karen 擅長烹飪。事實上，她正計畫要開一間小餐館。\nKaren is good at cooking. 3. In 4. ___, she is planning to open a small restaurant.",
    studentAnswer: "fact",
    correctAnswer: "fact",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "In fact 搭配 fact [fækt] 名詞「事實」。"
    ],
    solutionSteps: [
      { step: "解析", content: "fact 填寫正確，得 2 分。" }
    ]
  },
  {
    id: "eng-trans-5",
    subject: "english",
    category: "trans",
    section: "五、翻譯填空",
    number: "5",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "動詞片語原形",
    question: "第 3 題：請隨意在房子四處參觀。\nPlease feel free to 5. ___ 6. ___ the house.",
    studentAnswer: "look",
    correctAnswer: "look",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "feel free to + 原形動詞（請隨意...）。此處動詞為 look。"
    ],
    solutionSteps: [
      { step: "解析", content: "look 填寫正確，得 2 分。" }
    ]
  },
  {
    id: "eng-trans-6",
    subject: "english",
    category: "trans",
    section: "五、翻譯填空",
    number: "6",
    score: 2,
    earned: 0,
    status: "wrong",
    topic: "介系詞片語搭配（核心錯題）",
    question: "第 3 題：請隨意在房子四處參觀。\nPlease feel free to 5. look 6. ___ the house.",
    studentAnswer: "away",
    correctAnswer: "around",
    hasMistake: true,
    errorDiagnosis: {
      type: "片語介系詞混淆（詞意相悖）",
      summary: "將「四處參觀」look around 誤寫成「轉移視線」look away！",
      details: "中文「四處參觀/到處看看」的固定動詞片語是 look around。學生在此格填入 away，但 look away 的意思是「將視線轉開、不看」，與邀請客人「隨意參觀」完全背道而馳！"
    },
    keyPoints: [
      "**look around** [片語]：環視、四處參觀、到處逛逛（around 表周圍、四周）。",
      "**look away** [片語]：把目光移開、轉移視線（away 表遠離）。例如：He looked away from the accident.（他把視線從事故現場移開）。",
      "**記憶技巧**：參觀要看「周圍一圈」(around)，千萬不要「轉頭不看」(away)！"
    ],
    solutionSteps: [
      { step: "步驟 1：分析中文要求", content: "中文為「在房子四處參觀」，強調在空間四周瀏覽。" },
      { step: "步驟 2：鎖定介系詞", content: "「四處、環繞」對應介系詞 around。" },
      { step: "步驟 3：完整句型", content: "Please feel free to look around the house." }
    ]
  },
  {
    id: "eng-trans-7",
    subject: "english",
    category: "trans",
    section: "五、翻譯填空",
    number: "7",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "動詞片語原形",
    question: "第 4 題：小男孩等不及要吹熄他生日蛋糕上的蠟燭。\nThe little boy couldn't wait to 7. ___ 8. ___ the candles on his birthday cake.",
    studentAnswer: "blow",
    correctAnswer: "blow",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "couldn't wait to + 原形動詞（迫不及待要做...）。吹熄蠟燭動詞用 blow。"
    ],
    solutionSteps: [
      { step: "解析", content: "blow 拼寫正確，得 2 分。" }
    ]
  },
  {
    id: "eng-trans-8",
    subject: "english",
    category: "trans",
    section: "五、翻譯填空",
    number: "8",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "副詞小品詞",
    question: "第 4 題：小男孩等不及要吹熄他生日蛋糕上的蠟燭。\nThe little boy couldn't wait to 7. blow 8. ___ the candles on his birthday cake.",
    studentAnswer: "out",
    correctAnswer: "out",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "**blow out** 為動詞片語「吹熄（蠟燭、火）」。"
    ],
    solutionSteps: [
      { step: "解析", content: "out 填寫正確，得 2 分。" }
    ]
  },
  {
    id: "eng-trans-9",
    subject: "english",
    category: "trans",
    section: "五、翻譯填空",
    number: "9",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "轉折舉例片語",
    question: "第 5 題：我們的花園裡有不同種類的花，例如玫瑰和百合。\nThere are different kinds of flowers in our garden. 9. ___ 10. ___, we have roses and lilies.",
    studentAnswer: "For",
    correctAnswer: "For",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "For example 為常用舉例片語「例如」。位於新句句首 F 需大寫。"
    ],
    solutionSteps: [
      { step: "解析", content: "For 大寫正確，得 2 分。" }
    ]
  },
  {
    id: "eng-trans-10",
    subject: "english",
    category: "trans",
    section: "五、翻譯填空",
    number: "10",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "名詞詞彙",
    question: "第 5 題：我們的花園裡有不同種類的花，例如玫瑰和百合。\nThere are different kinds of flowers in our garden. 9. For 10. ___, we have roses and lilies.",
    studentAnswer: "example",
    correctAnswer: "example",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "example [ɪɡˈzæmpəl] 表「範例、例子」。"
    ],
    solutionSteps: [
      { step: "解析", content: "example 拼寫無誤，得 2 分。" }
    ]
  },

  // =========================================================================
  // 六、對話測驗 10% (每題 2 分) 🚨 重災區 (答對 1 題，扣 8 分)
  // =========================================================================
  {
    id: "eng-dial-1",
    subject: "english",
    category: "dial",
    section: "六、對話測驗",
    number: "1",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "情緒驚訝反問句",
    question: "Tony: Jason, are you going to the show in the evening?\nJason: Sure.\nTony: Sorry, but it will be too late for me to go home if I go to the show.\nJason: ___\n(A) Are you busy?\n(B) Are you serious?\n(C) Are you coming with me?\n(D) Are you leaving the show?",
    studentAnswer: "B",
    correctAnswer: "B (Are you serious?)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "**Are you serious?** 表示「你是認真的嗎？/ 你不是在開玩笑吧？」。",
      "對話情境：Tony 先主動問 Jason 去不去表演，Jason 答應後，Tony 卻突然反悔說自己太晚不能去，Jason 自然感到驚訝並反問 B。"
    ],
    solutionSteps: [
      { step: "解析", content: "針對臨時變卦的反應，(B) Are you serious? 最為合適。學生答對，得 2 分。" }
    ]
  },
  {
    id: "eng-dial-2",
    subject: "english",
    category: "dial",
    section: "六、對話測驗",
    number: "2",
    score: 2,
    earned: 0,
    status: "wrong",
    topic: "情境提議與銜接（核心錯題）",
    question: "Ben: It's cold today. ___\nDaniel: Sounds nice. Let's get into the café up ahead.\n(A) How about having some hot coffee together?\n(B) I want to take a hot bath.\n(C) Are you coming with me?\n(D) Would you like to know the hottest news?",
    studentAnswer: "D",
    correctAnswer: "A (How about having some hot coffee together?)",
    hasMistake: true,
    errorDiagnosis: {
      type: "前後文回應邏輯中斷 ＆ 詞彙誤導",
      summary: "被 hot 誤導選了 (D)，忽視了 Daniel 回應說「聽起來很棒，進咖啡館吧」！",
      details: "Daniel 的回話是關鍵線索：「Sounds nice. Let's get into the café up ahead.」（聽起來很棒，我們去前面的咖啡館吧！）。這代表 Ben 前面必定是提出了一個與「去咖啡館/喝熱飲」相關的提議！選項 (A)「一起喝杯熱咖啡如何？」正是完美提議。學生誤選了 (D)「你想知道最新最熱門的新聞嗎？」，跟進咖啡館喝飲料毫無關聯。"
    },
    keyPoints: [
      "**對話題黃金解題法**：**看答句推問句**！看到回應是「Sounds nice（聽起來不錯）+ 走進咖啡館」，前一句 100% 是邀約提議 (How about...?)。",
      "**How about + V-ing?**：常用於提出建議或邀約（例如：How about having a cup of tea?）。",
      "**避錯盲點**：不要因為看到 cold 就隨便找含有 hot 的單字 (hottest news)，必須看整段對話情節！"
    ],
    solutionSteps: [
      { step: "步驟 1：精讀對方回應", content: "Daniel 說：Sounds nice. Let's get into the café up ahead." },
      { step: "步驟 2：逆推前面提議", content: "能讓 Daniel 同意並提議去「前方咖啡館」的，只有 (A) 一起喝熱咖啡。" },
      { step: "步驟 3：排除無關選項", content: "(B) 泡熱水澡應在家中；(C) 詢問要不要跟我來；(D) 想聽勁爆八卦新聞。均不符合邏輯。" }
    ]
  },
  {
    id: "eng-dial-3",
    subject: "english",
    category: "dial",
    section: "六、對話測驗",
    number: "3",
    score: 2,
    earned: 0,
    status: "wrong",
    topic: "活動規劃與時間順序（核心錯題）",
    question: "Lenny: What are we going to do on your sister's birthday party?\nBarry: ___, and later we can play some games by the swimming pool.\n(A) I don't have time for it\n(B) We will have a pretty cake\n(C) We are not going anywhere\n(D) It's at my new house",
    studentAnswer: "C",
    correctAnswer: "B (We will have a pretty cake)",
    hasMistake: true,
    errorDiagnosis: {
      type: "句意邏輯矛盾",
      summary: "選了 (C)「我們哪裡都不去」，但後半句卻說「稍後去泳池邊玩遊戲」！",
      details: "Lenny 詢問生日派對要做什麼活動（What are we going to do...?）。Barry 的回答後半段有連接詞「and later we can play some games...」（然後稍後我們可以在泳池邊玩遊戲）。這說明前半句也是一項派對慶祝活動！選項 (B)「我們會準備一個漂亮的蛋糕（切蛋糕）」，與後面的泳池遊戲構成完整的派對流程。學生選 (C)「我們哪兒都不去」，後半句又接去泳池玩遊戲，前後完全矛盾。"
    },
    keyPoints: [
      "**and later 的平行順序結構**：[事件 1] + and later + [事件 2]。兩者必須都是安排好的活動！",
      "生日派對典型活動：have a cake（吃蛋糕吹蠟燭）、play games（玩遊戲）。",
      "排除法：(A) 我沒時間（已在籌辦派對，不符）；(C) 我們哪裡都不去（與泳池遊戲衝突）；(D) 在我的新家（回答的是地點 Where，而非做什麼 What）。"
    ],
    solutionSteps: [
      { step: "步驟 1：抓出問句關鍵字", content: "What are we going to do...?（詢問活動內容）" },
      { step: "步驟 2：解析後半句結構", content: "and later we can play games... 表示前面是第一階段活動。" },
      { step: "步驟 3：得出正確活動", content: "生日派對先吃蛋糕 (We will have a pretty cake)，再玩遊戲。正解為 B。" }
    ]
  },
  {
    id: "eng-dial-4",
    subject: "english",
    category: "dial",
    section: "六、對話測驗",
    number: "4",
    score: 2,
    earned: 0,
    status: "wrong",
    topic: "道別社交用語（核心錯題）",
    question: "Jerry: It's getting late. We should go home now.\nYvonne: Oh, you're right. I'll see you tomorrow.\nJerry: ___\n(A) You're welcome.\n(B) Talk to you later.\n(C) Nice to meet you, too.\n(D) I guess you're wrong.",
    studentAnswer: "A",
    correctAnswer: "B (Talk to you later.)",
    hasMistake: true,
    errorDiagnosis: {
      type: "社交語用情境誤用",
      summary: "對方說明天見道別，竟然回答「不客氣 You're welcome」！",
      details: "Yvonne 說「I'll see you tomorrow.」（明天見。），此時情境為雙方準備回家、互相道別。告別時應回覆 (B)「Talk to you later.」（晚點聊 / 回頭聊 / 再見）。學生選了 (A)「You're welcome.」，這是當別人向你說「Thank you.（謝謝你）」時的應答語（不客氣），在道別時使用極度突兀且文不對題。"
    },
    keyPoints: [
      "**道別場合專用句**：See you tomorrow. $\\rightarrow$ **Talk to you later.** / **See you.** / **Take care.**",
      "**You're welcome. 的唯一使用時機**：只有在對方說 **Thank you / Thanks** 時才能回答 You're welcome（不客氣）！",
      "**Nice to meet you, too.**：初次見面介紹時的問候回應，不是用在老朋友告別。"
    ],
    solutionSteps: [
      { step: "步驟 1：判定對話情境", content: "It's getting late. We should go home now.（天色已晚，該回家了，屬於告別情境）" },
      { step: "步驟 2：確認對方最後一句", content: "Yvonne 說 I'll see you tomorrow.（明天見）" },
      { step: "步驟 3：選擇道別回覆", content: "道別語呼應道別語，選 (B) Talk to you later.（回頭再聊）。" }
    ]
  },
  {
    id: "eng-dial-5",
    subject: "english",
    category: "dial",
    section: "六、對話測驗",
    number: "5",
    score: 2,
    earned: 0,
    status: "wrong",
    topic: "邀約回應與前後語意一致（核心錯題）",
    question: "Leslie: Jenny and I are going hiking this Sunday. Would you like to join us?\nChris: ___ I'd love to go with you.\n(A) I'm afraid I can't.\n(B) I have to think about it.\n(C) I'm not sure about it.\n(D) That sounds interesting.",
    studentAnswer: "A",
    correctAnswer: "D (That sounds interesting.)",
    hasMistake: true,
    errorDiagnosis: {
      type: "前後句語意嚴重對立",
      summary: "後句明明說「我很樂意去」，前句卻選了「恐怕不行」！",
      details: "Chris 的後一句話是：**「I'd love to go with you.」**（我非常樂意和你們一起去！），這表明 Chris 態度極為熱情且明確答應邀約。然而學生卻選了 (A)「I'm afraid I can't.」（恐怕我沒辦法去。）。若連在一起讀變成「恐怕我沒辦法去，我非常樂意和你們一起去」，直接前後自相矛盾！答題時只看到前半句就憑直覺選，沒有把整句讀完。"
    },
    keyPoints: [
      "**I'd love to... 的語義傾向**：I'd love to = I would love to，表示「非常願意/求之不得」，是**正面接受邀約**的最高級表達！",
      "**答應邀約的成套表達**：**That sounds interesting / That sounds like fun / I'd love to go!**",
      "**拒絕邀約的表達**：I'd love to, **BUT** I can't.（我很想去，但是沒辦法）。注意：如果沒有轉折詞 but，就絕對不是拒絕！",
      "**審題軍規**：英文字句務必看到「最後一個標點符號」，萬不可斷章取義！"
    ],
    solutionSteps: [
      { step: "步驟 1：通讀完整回答", content: "Chris 說：___ I'd love to go with you." },
      { step: "步驟 2：判斷情感態度", content: "I'd love to go with you 表明欣然同意，為正面肯定態度。" },
      { step: "步驟 3：篩選正面選項", content: "(A) 恐怕不行（負面拒絕）；(B) 考慮看看（猶豫不決）；(C) 不太確定（猶豫）；只有 (D) That sounds interesting（聽起來很有趣）是正面讚賞並欣然答應。正解為 D。" }
    ]
  },

  // =========================================================================
  // 七、閱讀測驗 10% (每題 2 分) (8/10)
  // =========================================================================
  {
    id: "eng-read-1",
    subject: "english",
    category: "read",
    section: "七、閱讀測驗",
    number: "1",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "細節反向理解題 (NOT)",
    question: "The Mexican people do NOT ___ on the Day of the Dead.\n(A) join in parades\n(B) play music\n(C) cry\n(D) wear pretty costumes",
    studentAnswer: "C",
    correctAnswer: "C (cry)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "文章定位句：\"There are pretty costumes, music, and dancing people. Many people join in parades...\"",
      "文章描述這是一個 happy holiday，人們不害怕鬼魂，因此不會哭泣 (cry)。"
    ],
    solutionSteps: [
      { step: "解析", content: "文章中提及遊行 (A)、音樂 (B)、漂亮戲服 (D)，唯獨沒有哭泣 (C)。故選 C。" }
    ]
  },
  {
    id: "eng-read-2",
    subject: "english",
    category: "read",
    section: "七、閱讀測驗",
    number: "2",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "時間細節定位題",
    question: "The Day of the Dead in Mexico is ___\n(A) a terrible day\n(B) at the beginning of November\n(C) a time when all the dead people get together\n(D) nothing special at all",
    studentAnswer: "B",
    correctAnswer: "B (at the beginning of November)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "文章定位句：\"It's a holiday at the beginning of November each year.\""
    ],
    solutionSteps: [
      { step: "解析", content: "文章第一句直接指明節日時間是在每年十一月初 (at the beginning of November)。選 B。" }
    ]
  },
  {
    id: "eng-read-3",
    subject: "english",
    category: "read",
    section: "七、閱讀測驗",
    number: "3",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "節日意義推論題",
    question: "Why do people want a holiday like the Day of the Dead?\n(A) To make death less scary.\n(B) To make friends with the dead.\n(C) To stop ghosts from making trouble for the living.\n(D) To give the dead new lives.",
    studentAnswer: "A",
    correctAnswer: "A (To make death less scary.)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "文章定位句：\"The Day of the Dead also teaches people that death isn't really terrible. Death is just a part of nature.\""
    ],
    solutionSteps: [
      { step: "解析", content: "「死亡並不可怕」與選項 (A)「讓死亡不那麼可怕 (make death less scary)」同義轉換。選 A。" }
    ]
  },
  {
    id: "eng-read-4",
    subject: "english",
    category: "read",
    section: "七、閱讀測驗",
    number: "4",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "地理範圍事實理解題",
    question: "According to the passage, we know the Day of the Dead is ___\n(A) for dead people only\n(B) held in many countries\n(C) getting less popular\n(D) when people stay at home",
    studentAnswer: "B",
    correctAnswer: "B (held in many countries)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "文章定位句：\"Mexican and North American people have 'The Day of the Dead' in their countries.\""
    ],
    solutionSteps: [
      { step: "解析", content: "墨西哥人與北美洲人都在他們的國家慶祝，代表「在多個國家舉行」(held in many countries)。選 B。" }
    ]
  },
  {
    id: "eng-read-5",
    subject: "english",
    category: "read",
    section: "七、閱讀測驗",
    number: "5",
    score: 2,
    earned: 0,
    status: "wrong",
    topic: "文章主旨大意題（核心錯題）",
    question: "What is the main idea of the passage?\n(A) The Mexicans hate to die.\n(B) The Mexicans don't care about ghosts.\n(C) The Day of the Dead is a serious day.\n(D) The Day of the Dead shows the ghosts that they are remembered.",
    studentAnswer: "C",
    correctAnswer: "D (The Day of the Dead shows the ghosts that they are remembered.)",
    hasMistake: true,
    errorDiagnosis: {
      type: "主旨把握失真 ＆ 事實判斷錯誤",
      summary: "誤選 (C)「這是一個嚴肅肅穆的日子」，但全文一再強調是歡樂慶典！",
      details: "文章第二句開宗明義指出：**「This Day of the Dead is a happy holiday」**（這是一個歡樂的節日），有跳舞、音樂、戲服與遊行，絕非 (C) 所說的「serious day（嚴肅嚴肅的日子）」。而文章最核心的情感主旨正如文中述及：**「they want to show the ghosts that the living remember the dead」**（他們想向鬼魂傳達，活著的人依然深深記掛著他們），與選項 (D) 完全一致！"
    },
    keyPoints: [
      "**主旨題避坑法則**：主旨題必須涵蓋全文核心思想，且**不能與文章明文敘述牴觸**！",
      "**happy vs. serious**：文中明寫 happy holiday，選 serious 就直接違反文本事實！",
      "**亡靈節的文化真諦**：亡靈節不是恐懼死亡，而是透過歡樂慶典告訴逝去的親人「你們永遠活在我們心中 (you are remembered)」！"
    ],
    solutionSteps: [
      { step: "步驟 1：檢視各選項與原文事實", content: "(A) 墨西哥人討厭死亡（文中未提）；(B) 不在乎鬼魂（不對，他們很在乎並紀念靈魂）；(C) 是嚴肅肅穆的日子（與 happy holiday 相反，錯誤）。" },
      { step: "步驟 2：比對核心主題句", content: "文中明確寫道：they want to show the ghosts that the living remember the dead。" },
      { step: "步驟 3：確定主旨選項", content: "(D) The Day of the Dead shows the ghosts that they are remembered. 完美概括全文精神。正解為 D。" }
    ]
  }
];

// 閱讀測驗原文與中文全譯
const englishReadingPassage = {
  title: "The Day of the Dead (亡靈節)",
  originalText: `Mexican and North American people have "The Day of the Dead" in their countries. It's a holiday at the beginning of November each year. This Day of the Dead is a happy holiday when the living remember all their families' souls. There are pretty costumes, music, and dancing people. Many people join in parades (遊行) and go through the streets. People aren't afraid that ghosts come around and make trouble for the living on the Day of the Dead. They believe the ghosts will be around, so they want to show the ghosts that the living remember the dead. The Day of the Dead also teaches people that death isn't really terrible. Death is just a part of nature.`,
  chineseTranslation: `墨西哥人和北美洲人在他們的國家慶祝「亡靈節」（The Day of the Dead）。這是一個在每年十一月初舉行的節日。亡靈節是一個歡樂的節日，活著的人在這一天緬懷所有已故家人的靈魂。現場有美麗的服飾、音樂和載歌載舞的人群。許多人參加遊行並穿過街道。在亡靈節這天，人們不害怕鬼魂來到身邊並給活人製造麻煩。他們相信鬼魂會圍繞在身旁，因此他們希望向鬼魂展示活著的人依然惦記著逝者。亡靈節同時也教導人們：死亡其實並不可怕，死亡只是大自然的一部分。`,
  culturalNotes: [
    "**亡靈節由來**：融合了古代阿茲特克原住民信仰與天主教「萬聖節/萬靈節」傳統，於每年 11 月 1 日至 2 日慶祝。",
    "**核心哲學**：墨西哥人認為「死不是生命的終點，而是另一個旅程的開始」。只要被活著的親人記住，靈魂就不會真正消亡（如同電影《可可夜總會 Coco》所傳達的核心思想）。",
    "**象徵元素**：萬壽菊（引導靈魂回家的花）、骷髏糖果（Sugar Skulls）、美麗化裝遊行（La Catrina）。"
  ]
};

window.englishExamMetadata = englishExamMetadata;
window.englishQuestionsData = englishQuestionsData;
window.englishReadingPassage = englishReadingPassage;

