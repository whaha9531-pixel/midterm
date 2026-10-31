// ==========================================================================
// 智光商工 日間部 115 學年度第 1 學期第一次段考 國語文 試卷 完整數據庫
// 學生：周姸汝（座號：4 號）
// 涵蓋：韓愈〈師說〉、歸有光〈項脊軒志〉、字形字音字義、成語修辭與閱讀題組
// ==========================================================================

const chineseExamMetadata = {
  title: "智光商工 115學年度第1學期第一次段考 國語文試卷 深度檢討與全解分析",
  subtitle: "全卷 5 大核心考點共 50 題逐題詳解、經典文言對譯、修辭句型圖表與段考精華歸納",
  student: {
    school: "智光商工 日間部",
    class: "工、商科 一年 1- 班",
    name: "周姸汝",
    seat: "4 號",
    score: 86,
    fullScore: 100,
    deductions: 14,
    totalQuestions: 50,
    correctCount: 43,
    wrongCount: 7,
    accuracyRate: "86.0%"
  },
  sectionScores: [
    { name: "一、字音字形與詞義辨析", earned: 18, full: 20, count: 10, correct: 9, wrong: 1, icon: "🔤" },
    { name: "二、成語與修辭技巧", earned: 18, full: 20, count: 10, correct: 9, wrong: 1, icon: "✒️" },
    { name: "三、經典古文〈師說〉專題", earned: 16, full: 20, count: 10, correct: 8, wrong: 2, icon: "📜" },
    { name: "四、抒情散文〈項脊軒志〉專題", earned: 18, full: 20, count: 10, correct: 9, wrong: 1, icon: "🏡" },
    { name: "五、現代文學與素養閱讀題組", earned: 16, full: 20, count: 10, correct: 8, wrong: 2, icon: "📖" }
  ],
  summary: {
    strengths: [
      "【古文句讀與文意掌握敏銳】能深刻理解韓愈「傳道、受業、解惑」從師核心哲學，以及歸有光以書齋瑣事寄託三代親情的細膩筆法。",
      "【修辭與文學常識基礎扎實】對對偶、轉化、互文、借代等高頻修辭手法判斷準確，對唐宋八大家與明代歸有光之文風特點記憶清晰。",
      "【字詞訓詁掌握度佳】通同字（受＝授、說＝悅）、文言虛字（之、其、所以）之語法功能辨析到位。"
    ],
    weaknesses: [
      "【文言倒裝句型判別】「句讀之不知，惑之不解」之賓語提前倒裝句型容易誤判為一般陳述句。",
      "【字音字形微小筆畫陷阱】「針砭」之「砭（ㄅㄧㄢ）」誤認成「貶」、「諛（ㄩˊ）諂」之形音容易混淆。",
      "【成語情境褒貶反誤】「不吝賜教」、「門可羅雀」等成語於社交自謙或特定場景的語用語境需再加強精準度。"
    ]
  }
};

const chineseQuestionsData = [
  // =========================================================================
  // 一、字音字形與詞義辨析 (10 題 · 20%)
  // =========================================================================
  {
    id: "chi-vocab-1",
    subject: "chinese",
    category: "vocab",
    section: "一、字音字形與詞義辨析",
    number: "1",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "字音辨析",
    question: "下列各組「」中的字，讀音完全相同的是哪一選項？\n(A)六藝經「傳」／名揚「傳」頌\n(B)「句讀」之不知／初生之「犢」\n(C)「曚曨」微光／啟「蒙」教育\n(D)「呱呱」墜地／「沽」名釣譽。",
    studentAnswer: "B",
    correctAnswer: "B (句讀ㄓㄡˋ／初生之犢ㄉㄨˊ)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "句讀（ㄉㄡˋ），古人斷句停頓處；初生之犢（ㄉㄨˊ）。六藝經傳（ㄓㄨㄢˋ）／傳頌（ㄔㄨㄢˊ）；呱呱墜地（ㄍㄨ），沽名釣譽（ㄍㄨ）。"
    ],
    solutionSteps: [
      { step: "步驟 1：逐一標注各組注音", content: "(B) 讀（ㄉㄡˋ）音通「逗」；犢為ㄉㄨˊ。經傳（ㄓㄨㄢˋ）與傳頌（ㄔㄨㄢˊ）不同；呱呱（ㄍㄨ）墜地與沽（ㄍㄨ）相同。此處選音同組。" }
    ]
  },
  {
    id: "chi-vocab-2",
    subject: "chinese",
    category: "vocab",
    section: "一、字音字形與詞義辨析",
    number: "2",
    score: 2,
    earned: 0,
    status: "wrong",
    topic: "字形正誤與筆畫陷阱（核心錯題）",
    question: "下列文句中，完全「沒有」錯別字的是哪一選項？\n(A)他面對外界的嚴厲針貶，依然泰然自若、面不改色\n(B)小軒室雖然狹窄鄙陋，經修葺後倒也窗明几淨、令人神往\n(C)老李為人謙和，從不阿諛奉承，深得同仁尊崇\n(D)這篇悼念亡妻的文章字字血淚，讀來令人動容，真是催人淚下。",
    studentAnswer: "A",
    correctAnswer: "C (老李為人謙和，從不阿諛奉承，深得同仁尊崇)",
    hasMistake: true,
    errorDiagnosis: {
      type: "形近字混淆（砭 vs 貶）",
      summary: "誤選了 (A)！「針砭」之「砭」從石部，不可寫成言部或貶職的「貶」！",
      details: "學生選了 (A)。(A) 選項中的「針貶」是極為常見的錯別字陷阱！古代「砭」是以石針治病（石部），引申為評論規勸過失；而「貶」是貶低、貶謫。因此批評過失只能寫成「針砭」，寫成「針貶」是錯誤的。(C) 句完全正確無誤。"
    },
    keyPoints: [
      "**針砭（ㄅㄧㄢ）**：從「石」部，原指古代石針治病。**不可寫成「針貶」**！",
      "修葺（ㄑㄧˋ）：葺不可寫成「茸」；催人淚下應為「潸然淚下」或催淚。"
    ],
    solutionSteps: [
      { step: "步驟 1：抓出各選項錯字", content: "(A) 針「貶」$\\rightarrow$ 針「砭」；(B) 修「葺」；(C) 完全無錯字。故正解為 C。" }
    ]
  },
  {
    id: "chi-vocab-3",
    subject: "chinese",
    category: "vocab",
    section: "一、字音字形與詞義辨析",
    number: "3",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "古文通同字",
    question: "韓愈〈師說〉：「師者，所以傳道、受業、解惑也。」句中「受」字通哪一個字？\n(A)授 (B)首 (C)守 (D)壽。",
    studentAnswer: "A",
    correctAnswer: "A (授)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "受＝授，動詞，傳授課業。古代「受」常兼具給予與接受之意。"
    ],
    solutionSteps: [
      { step: "步驟 1：字義訓詁", content: "受業即「傳授學業」，通「授」。選 A。" }
    ]
  },
  {
    id: "chi-vocab-4",
    subject: "chinese",
    category: "vocab",
    section: "一、字音字形與詞義辨析",
    number: "4",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "文言虛字「所以」用法",
    question: "〈師說〉中「師者，所以傳道、受業、解惑也」與「所以興懷，其致一也」兩句中的「所以」，詞義何者正確？\n(A)兩者皆表「因此、因而」\n(B)前者表「用來……的憑藉」，後者表「……的原因」\n(C)前者表「……的原因」，後者表「用來……的方法」\n(D)兩者皆表「何以、為什麼」。",
    studentAnswer: "B",
    correctAnswer: "B (前者表「用來……的憑藉」，後者表「……的原因」)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "文言「所以」三大經典語義：1. 用來……的憑藉/工具；2. ……的原因緣故；3. 連詞因此。"
    ],
    solutionSteps: [
      { step: "步驟 1：比對語境", content: "老師是用來傳道之憑藉；興懷是產生感慨的原因。選 B。" }
    ]
  },
  {
    id: "chi-vocab-5",
    subject: "chinese",
    category: "vocab",
    section: "一、字音字形與詞義辨析",
    number: "5",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "古今異義詞",
    question: "〈師說〉中「小學而大遺，吾未見其明也」，句中「小學」的意思為何？\n(A)國民小學教育 (B)文字學、音韻學、訓詁學 (C)學習句讀微小之事 (D)學識淺陋的小人。",
    studentAnswer: "C",
    correctAnswer: "C (學習句讀微小之事)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "古今異義：古代「小學」指學習句讀等細小之學問；「大遺」指遺漏解決疑難大道理。"
    ],
    solutionSteps: [
      { step: "步驟 1：文意推導", content: "對比「句讀之不知（小學）」與「惑之不解（大遺）」，小學指學習斷句小事。選 C。" }
    ]
  },
  {
    id: "chi-vocab-6",
    subject: "chinese",
    category: "vocab",
    section: "一、字音字形與詞義辨析",
    number: "6",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "多義字「師」之詞性與意義",
    question: "下列各句中的「師」字，何者當作「動詞（學習、效法）」使用？\n(A)古之學者必有「師」\n(B)吾「師」道也，夫庸知其年之先後生於吾乎\n(C)巫、醫、樂「師」百工之人\n(D)三人行，則必有我「師」。",
    studentAnswer: "B",
    correctAnswer: "B (吾「師」道也，夫庸知其年之先後生於吾乎)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "「師道」之師為動詞，指「學習、以……為師」；其他選項皆為名詞（老師、樂師、榜樣）。"
    ],
    solutionSteps: [
      { step: "步驟 1：詞性結構分析", content: "吾（主詞）＋ 師（動詞，效法學習）＋ 道（受詞）。選 B。" }
    ]
  },
  {
    id: "chi-vocab-7",
    subject: "chinese",
    category: "vocab",
    section: "一、字音字形與詞義辨析",
    number: "7",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "〈項脊軒志〉詞義訓詁",
    question: "歸有光〈項脊軒志〉：「塵泥滲漉，雨澤下注；每移案，顧視無可置者。」句中「案」的意思為何？\n(A)公文檔案 (B)書桌、書案 (C)犯罪案件 (D)古代食器。",
    studentAnswer: "B",
    correctAnswer: "B (書桌、書案)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "「移案」指漏水時搬移書桌几案以避雨水。"
    ],
    solutionSteps: [
      { step: "步驟 1：空間環境聯想", content: "屋頂漏雨，每次移動「書桌几案」無處安放。選 B。" }
    ]
  },
  {
    id: "chi-vocab-8",
    subject: "chinese",
    category: "vocab",
    section: "一、字音字形與詞義辨析",
    number: "8",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "年齡代稱詞語",
    question: "〈項脊軒志〉：「此吾祖太常公宣德間執此以朝，他日汝當用之！」句中「朝」的字音與詞義為何？\n(A)ㄔㄠˊ，上朝朝見君王 (B)ㄓㄠ，早晨時分 (C)ㄔㄠˊ，朝代歷史 (D)ㄓㄠ，一日之計。",
    studentAnswer: "A",
    correctAnswer: "A (ㄔㄠˊ，上朝朝見君王)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "「執此以朝」：手持象笏上朝覲見皇帝。動詞，音 ㄔㄠˊ。"
    ],
    solutionSteps: [
      { step: "步驟 1：文意判定", content: "手拿象笏朝見天子，讀音 ㄔㄠˊ。選 A。" }
    ]
  },
  {
    id: "chi-vocab-9",
    subject: "chinese",
    category: "vocab",
    section: "一、字音字形與詞義辨析",
    number: "9",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "詞義精確對應",
    question: "下列各「」中字義的詮釋，何者完全正確？\n(A)位「卑」則足羞：卑鄙無恥\n(B)術業有「專攻」：專門研究\n(C)「呱呱」而泣：青蛙叫聲\n(D)長號不「自禁」：禁止通行。",
    studentAnswer: "B",
    correctAnswer: "B (術業有「專攻」：專門研究)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "位卑指官職低下；呱呱泣指嬰兒啼哭聲；不自禁指情不自禁（忍受、承受）。"
    ],
    solutionSteps: [
      { step: "步驟 1：辨析詞義", content: "專攻即專門研究攻讀。選 B。" }
    ]
  },
  {
    id: "chi-vocab-10",
    subject: "chinese",
    category: "vocab",
    section: "一、字音字形與詞義辨析",
    number: "10",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "成語形音正誤",
    question: "下列成語的用字，何者完全正確？\n(A)門可羅雀 (B)不磷賜教 (C)走投無路寫成走頭 (D)以蠡測海寫成以蠢。",
    studentAnswer: "A",
    correctAnswer: "A (門可羅雀)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "門可羅雀：形容門庭冷落；不吝賜教（吝不可寫成磷）。"
    ],
    solutionSteps: [
      { step: "解析", content: "門可羅雀用字精準無誤。選 A。" }
    ]
  },

  // =========================================================================
  // 二、成語與修辭技巧 (10 題 · 20%)
  // =========================================================================
  {
    id: "chi-rhet-1",
    subject: "chinese",
    category: "rhet",
    section: "二、成語與修辭技巧",
    number: "1",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "借代修辭法",
    question: "「此吾祖太常公宣德間執此以朝」中的「象笏」，在古代是臣子朝見君王時記事的手板，常借代為：\n(A)官位仕途 (B)兵權武力 (C)財富土地 (D)文人隱居。",
    studentAnswer: "A",
    correctAnswer: "A (官位仕途)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "借代修辭：象笏、簪纓、朱門、紈絝。象笏為大臣上朝手板，借代仕途官位。"
    ],
    solutionSteps: [
      { step: "步驟 1：修辭聯想", content: "象笏代表朝廷高官職位，寄託祖母對孫兒考中登仕的期許。選 A。" }
    ]
  },
  {
    id: "chi-rhet-2",
    subject: "chinese",
    category: "rhet",
    section: "二、成語與修辭技巧",
    number: "2",
    score: 2,
    earned: 0,
    status: "wrong",
    topic: "倒裝修辭與語法結構（核心錯題）",
    question: "韓愈〈師說〉：「句讀之不知，惑之不解，或師焉，或不焉。」關於此句的修辭與語法，下列說明何者錯誤？\n(A)「句讀之不知」為賓語提前的倒裝句型\n(B)其正常語序為「不知句讀，不解惑」\n(C)句中的「之」字是結構助詞，作為賓語提前的標誌\n(D)此句採用了「誇飾」修辭手法，極力形容求學之困難。",
    studentAnswer: "A",
    correctAnswer: "D (此句採用了「誇飾」修辭手法，極力形容求學之困難)",
    hasMistake: true,
    errorDiagnosis: {
      type: "文言特殊句型概念模糊",
      summary: "把正確的倒裝句判斷當成錯誤，忽視了此句根本沒有誇飾！",
      details: "學生誤選了 (A)。「句讀之不知，惑之不解」是高中經典文言倒裝句型（賓語前置）！正常語序為「不知句讀，不解惑」。「之」是提賓助詞（如「何陋之有」、「父母唯其疾之憂」），完全沒有誇張誇飾的成分。因此錯誤的選項為 (D)。"
    },
    keyPoints: [
      "**賓語前置倒裝公式**：[受詞] + 之 + [否定副詞/及物動詞] $\\rightarrow$ 「句讀之不知」＝「不知句讀」！",
      "「或師焉，或不（ㄈㄡˇ）焉」：錯綜互文結構，指「知句讀者不請益老師，不解惑者反而去請教老師」，前後形成諷刺對比。"
    ],
    solutionSteps: [
      { step: "步驟 1：確認語序結構", content: "A、B、C 均為客觀倒裝語法事實；本句無任何誇飾手法。故選 D。" }
    ]
  },
  {
    id: "chi-rhet-3",
    subject: "chinese",
    category: "rhet",
    section: "二、成語與修辭技巧",
    number: "3",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "對偶修辭法",
    question: "下列〈項脊軒志〉文句中，哪一組構成嚴格的「對偶」修辭？\n(A)三五之夜，明月半牆\n(B)借書滿架，偃仰嘯歌\n(C)風移影動，珊珊可愛\n(D)庭有枇杷樹，吾妻死之年所手植也。",
    studentAnswer: "B",
    correctAnswer: "B (借書滿架，偃仰嘯歌)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "對偶修辭：字數相等、詞性對應、結構相同。「借書滿架」對「偃仰嘯歌」，四字四字對仗工整。"
    ],
    solutionSteps: [
      { step: "步驟 1：字數詞性平仄比對", content: "借書對偃仰，滿架對嘯歌，為對偶。選 B。" }
    ]
  },
  {
    id: "chi-rhet-4",
    subject: "chinese",
    category: "rhet",
    section: "二、成語與修辭技巧",
    number: "4",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "互文見義修辭",
    question: "古文中常有「互文見義」的筆法，下列何者「不屬於」互文修辭？\n(A)將軍百戰死，壯士十年歸\n(B)秦時明月漢時關\n(C)句讀之不知，惑之不解，或師焉，或不焉\n(D)落霞與孤鶩齊飛，秋水共長天一色。",
    studentAnswer: "D",
    correctAnswer: "D (落霞與孤鶩齊飛，秋水共長天一色)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "互文見義：上下文相互補充呼應（如將軍與壯士皆百戰死、十年歸）。落霞與孤鶩為工整對偶，非互文。"
    ],
    solutionSteps: [
      { step: "步驟 1：辨識互文特徵", content: "(D) 屬於駢文名對，非互文見義。選 D。" }
    ]
  },
  {
    id: "chi-rhet-5",
    subject: "chinese",
    category: "rhet",
    section: "二、成語與修辭技巧",
    number: "5",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "轉化修辭（擬人/擬物）",
    question: "「風移影動，珊珊可愛」將月下桂影搖曳的情狀描繪得宛如環珮相撞之聲，這運用了何種感官修辭？\n(A)通感（移覺） (B)頂真 (C)倒裝 (D)設問。",
    studentAnswer: "A",
    correctAnswer: "A (通感／移覺)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "珊珊本為玉器撞擊聲（聽覺），此處借來形容樹影婆娑之態（視覺），將視覺化為聽覺，為典型「通感（移覺）」。"
    ],
    solutionSteps: [
      { step: "步驟 1：感官轉移分析", content: "由視覺樹影轉移為聽覺聲響，為通感移覺修辭。選 A。" }
    ]
  },
  {
    id: "chi-rhet-6",
    subject: "chinese",
    category: "rhet",
    section: "二、成語與修辭技巧",
    number: "6",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "成語應用語境",
    question: "王老師教學認真，學術造詣極高。若學生想要向他請教問題，下列題辭或成語何者最得體？\n(A)敬祈 賜教 (B)不吝 珠玉 (C)大放 厥詞 (D)班門 弄斧。",
    studentAnswer: "A",
    correctAnswer: "A (敬祈 賜教)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "向長輩或老師請益，常用「敬祈賜教」；不吝賜教多用於請對方指正；班門弄斧為自謙或批評自不量力。"
    ],
    solutionSteps: [
      { step: "解析", content: "敬祈賜教得體莊重。選 A。" }
    ]
  },
  {
    id: "chi-rhet-7",
    subject: "chinese",
    category: "rhet",
    section: "二、成語與修辭技巧",
    number: "7",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "成語辨義（感情色彩）",
    question: "下列各組同義成語中，感情色彩（褒貶）完全一致的是哪一選項？\n(A)侃侃而談／夸夸其談\n(B)深謀遠慮／老謀深算\n(C)高瞻遠矚／高瞻遠觀\n(D)集思廣益／群策群力。",
    studentAnswer: "D",
    correctAnswer: "D (集思廣益／群策群力)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "褒貶辨析：侃侃而談（褒）vs 夸夸其談（貶）；深謀遠慮（褒）vs 老謀深算（貶）；集思廣益與群策群力皆為褒義詞。"
    ],
    solutionSteps: [
      { step: "步驟 1：檢驗成語褒貶", content: "(D) 兩者皆為凝聚眾人智慧之褒義詞。選 D。" }
    ]
  },
  {
    id: "chi-rhet-8",
    subject: "chinese",
    category: "rhet",
    section: "二、成語與修辭技巧",
    number: "8",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "師道尊嚴相關成語",
    question: "形容感念恩師諄諄教誨、如沐春風的成語，下列何者最恰當？\n(A)桃李春風 (B)師心自用 (C)尸位素餐 (D)別具隻眼。",
    studentAnswer: "A",
    correctAnswer: "A (桃李春風)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "桃李春風：比喻學生受到良師的教誨；師心自用：貶義，形容自以為是不聽勸告。"
    ],
    solutionSteps: [
      { step: "解析", content: "桃李春風為感念師恩美詞。選 A。" }
    ]
  },
  {
    id: "chi-rhet-9",
    subject: "chinese",
    category: "rhet",
    section: "二、成語與修辭技巧",
    number: "9",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "借代物象指涉",
    question: "下列詩句中的借代意象，指涉對象何者錯誤？\n(A)千里共「嬋娟」：月亮\n(B)何以解憂，唯有「杜康」：美酒\n(C)過盡「千帆」皆不是：船隻\n(D)無「絲竹」之亂耳：美麗織錦綢緞。",
    studentAnswer: "D",
    correctAnswer: "D (無「絲竹」之亂耳：美麗織錦綢緞)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "絲竹借代為「音樂樂器（弦樂器與管樂器）」，非絲織品綢緞！"
    ],
    solutionSteps: [
      { step: "步驟 1：確認絲竹內涵", content: "絲竹指代世俗嘈雜的管弦音樂。錯誤者為 D。" }
    ]
  },
  {
    id: "chi-rhet-10",
    subject: "chinese",
    category: "rhet",
    section: "二、成語與修辭技巧",
    number: "10",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "誇飾修辭判定",
    question: "下列各句，何者運用了「誇飾」修辭？\n(A)白髮三千丈，緣愁似個長\n(B)庭有枇杷樹，吾妻死之年所手植也\n(C)位卑則足羞，官盛則近諛\n(D)巫、醫、樂師百工之人，不恥相師。",
    studentAnswer: "A",
    correctAnswer: "A (白髮三千丈，緣愁似個長)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "白髮三千丈為極度擴大的空間誇飾修辭。"
    ],
    solutionSteps: [
      { step: "解析", content: "三千丈極力誇大頭髮之長與愁緒之深。選 A。" }
    ]
  },

  // =========================================================================
  // 三、經典古文〈師說〉專題 (10 題 · 20%)
  // =========================================================================
  {
    id: "chi-classic-1",
    subject: "chinese",
    category: "classic",
    section: "三、經典古文〈師說〉專題",
    number: "1",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "韓愈古文運動背景",
    question: "韓愈發起古文運動，力抗六朝以來靡麗駢儷的文風，其提倡之古文核心理念為：\n(A)文以載道，復興先秦兩漢質樸散文\n(B)主情浪漫，追求詞藻華麗與形式聲律\n(C)崇尚佛老，主張出世清談\n(D)強調格律駢偶與典故繁複。",
    studentAnswer: "A",
    correctAnswer: "A (文以載道，復興先秦兩漢質樸散文)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "古文運動倡導者：韓愈、柳宗元。主張「文以載道」、「文道合一」，提倡言之有物的儒家散文。"
    ],
    solutionSteps: [
      { step: "步驟 1：記憶文學史要點", content: "韓愈以復古為名行創新之實，強調文以載道。選 A。" }
    ]
  },
  {
    id: "chi-classic-2",
    subject: "chinese",
    category: "classic",
    section: "三、經典古文〈師說〉專題",
    number: "2",
    score: 2,
    earned: 0,
    status: "wrong",
    topic: "師道擇師標準（核心錯題）",
    question: "韓愈在〈師說〉中提出擇師的終極標準為何？\n(A)年齡必須長於自己，以彰顯尊師重道\n(B)官位必須高於自己，以獲得仕途庇蔭\n(C)「道之所存，師之所存」，以真理之道為唯一準則\n(D)家世清白顯赫且具備百年名門背景。",
    studentAnswer: "A",
    correctAnswer: "C (「道之所存，師之所存」，以真理之道為唯一準則)",
    hasMistake: true,
    errorDiagnosis: {
      type: "主旨把握偏差",
      summary: "誤選 (A) 年齡論！韓愈全文正是大力批判「以年齡大小論師」的世俗謬見！",
      details: "學生誤選了 (A)。韓愈在文中白紙黑字寫道：「是故無貴無賤，無長無少，道之所存，師之所存也」、「生乎吾前，其聞道也固先乎吾，吾從而師之；生乎吾後，其聞道也亦先乎吾，吾從而師之。吾師道也，夫庸知其年之先後生於吾乎？」韓愈破除封建年齡與貴賤束縛，指出只要誰掌握了大道真理（道之所存），誰就是老師！"
    },
    keyPoints: [
      "**韓愈擇師標準**：**無貴無賤，無長無少，道之所存，師之所存**！",
      "**三大破除**：破除年齡迷思、破除門第階級、破除虛榮面子（不恥相師）。"
    ],
    solutionSteps: [
      { step: "步驟 1：回扣核心名句", content: "韓愈強調「吾師道也」，唯一的衡量標準就是「道之所存」。正解為 C。" }
    ]
  },
  {
    id: "chi-classic-3",
    subject: "chinese",
    category: "classic",
    section: "三、經典古文〈師說〉專題",
    number: "3",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "對比論證手法",
    question: "〈師說〉第三段大量運用「對比論證」批判唐代士大夫恥於從師的怪現象，下列哪一組「不屬於」文中的對比？\n(A)古之聖人（從師） vs 今之眾人（恥學於師）\n(B)愛其子擇師而教 vs 於其身則恥師焉\n(C)巫醫樂師百工之人（不恥相師） vs 士大夫之族（群聚而笑之）\n(D)孔子問學於郯子 vs 韓愈贈序於李蟠。",
    studentAnswer: "D",
    correctAnswer: "D (孔子問學於郯子 vs 韓愈贈序於李蟠)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "韓愈以三大對比論證世態荒謬；孔子從師郯子、萇弘是舉例論證「聖人無常師」，李蟠是贈文勉勵之動機，兩者非對比。"
    ],
    solutionSteps: [
      { step: "步驟 1：梳理對比層次", content: "A、B、C 為經典三大對比；D 非相反對立面。選 D。" }
    ]
  },
  {
    id: "chi-classic-4",
    subject: "chinese",
    category: "classic",
    section: "三、經典古文〈師說〉專題",
    number: "4",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "孔子從師例證",
    question: "韓愈引述「孔子師郯子、萇弘、師襄、老聃」，其目的在論證何種觀點？\n(A)聖人無常師，弟子不必不如師，師不必賢於弟子\n(B)孔子博學多聞，無人能及\n(C)各行各業皆有其祖師爺\n(D)古代官制遠優於唐朝體制。",
    studentAnswer: "A",
    correctAnswer: "A (聖人無常師，弟子不必不如師，師不必賢於弟子)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "引孔子之言行證明連至聖先師都沒有固定的老師，聞道有先後，術業有專攻。"
    ],
    solutionSteps: [
      { step: "解析", content: "論點為「聖人無常師，聞道有先後」。選 A。" }
    ]
  },
  {
    id: "chi-classic-5",
    subject: "chinese",
    category: "classic",
    section: "三、經典古文〈師說〉專題",
    number: "5",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "贈文動機與寫作緣起",
    question: "韓愈在〈師說〉結尾提及「李氏子蟠，年十七，好古文……余嘉其能行古道，作〈師說〉以貽之」，此處「古道」指：\n(A)古代之驛道交通 (B)古人虛心求學從師之道 (C)上古三代井田法制 (D)隱士出世避禍之道。",
    studentAnswer: "B",
    correctAnswer: "B (古人虛心求學從師之道)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "「行古道」：力行古人尊師重道、不恥相師的大道。"
    ],
    solutionSteps: [
      { step: "解析", content: "古道即文章通篇倡導之從師正道。選 B。" }
    ]
  },
  {
    id: "chi-classic-6",
    subject: "chinese",
    category: "classic",
    section: "三、經典古文〈師說〉專題",
    number: "6",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "韓愈諡號與稱譽",
    question: "蘇軾在〈潮州韓文公廟碑〉中稱讚韓愈：\n(A)匹夫而為百世師，一言而為天下法；文起八代之衰，而道濟天下之溺\n(B)世上瘡痍，詩中聖哲；民間疾苦，筆底波瀾\n(C)鐵板銅琶，繼東坡高唱大江東去\n(D)志在春秋，功在漢室。",
    studentAnswer: "A",
    correctAnswer: "A (匹夫而為百世師，一言而為天下法；文起八代之衰，而道濟天下之溺)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "「文起八代之衰，道濟天下之溺」為蘇軾讚譽韓愈之千古定評。"
    ],
    solutionSteps: [
      { step: "解析", content: "A 為韓愈專屬評語；B 為杜甫；C 為辛棄疾；D 為關羽。選 A。" }
    ]
  },
  {
    id: "chi-classic-7",
    subject: "chinese",
    category: "classic",
    section: "三、經典古文〈師說〉專題",
    number: "7",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "詞句情感與語氣",
    question: "「嗟乎！師道之不傳也久矣！欲人之無惑也難矣！」句中「嗟乎」表達出韓愈何種情感？\n(A)憤世嫉俗且狂放不羈\n(B)感嘆世風日下、師道淪亡的深沉痛心\n(C)自鳴得意、傲視群雄\n(D)無可奈何、打算歸隱田園。",
    studentAnswer: "B",
    correctAnswer: "B (感嘆世風日下、師道淪亡的深沉痛心)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "「嗟乎」發出沉重感嘆，表達對當時社會恥學於師之浮誇風氣的痛惜。"
    ],
    solutionSteps: [
      { step: "解析", content: "深沉痛惜師道失傳。選 B。" }
    ]
  },
  {
    id: "chi-classic-8",
    subject: "chinese",
    category: "classic",
    section: "三、經典古文〈師說〉專題",
    number: "8",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "「師說」文體分類",
    question: "在文體分類上，〈師說〉的「說」屬於哪一類文體？\n(A)記敘抒情文 (B)論說文（解說事理、發表己見） (C)應用文書信 (D)章表奏議。",
    studentAnswer: "B",
    correctAnswer: "B (論說文（解說事理、發表己見）)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "「說」是古代論說文的一種，可說明事理、發表議論（如〈馬說〉、〈愛蓮說〉、〈黃生借書說〉）。"
    ],
    solutionSteps: [
      { step: "解析", content: "師說為論述從師之道的論說文。選 B。" }
    ]
  },
  {
    id: "chi-classic-9",
    subject: "chinese",
    category: "classic",
    section: "三、經典古文〈師說〉專題",
    number: "9",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "成語「不恥下問」比較",
    question: "韓愈提及士大夫「位卑則足羞，官盛則近諛」，這揭示出當時士大夫缺乏何種美德？\n(A)廉潔自持 (B)虛心向他人請教學習 (C)孝順父母 (D)保家衛國勇氣。",
    studentAnswer: "B",
    correctAnswer: "B (虛心向他人請教學習)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "士大夫因虛榮面子與官位階級，向官小的人學覺得可恥，向官大的人學又怕被譏為阿諛，故喪失虛懷若谷之求學精神。"
    ],
    solutionSteps: [
      { step: "解析", content: "缺乏放下身段向能者請教的美德。選 B。" }
    ]
  },
  {
    id: "chi-classic-10",
    subject: "chinese",
    category: "classic",
    section: "三、經典古文〈師說〉專題",
    number: "10",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "唐宋八大家體系",
    question: "唐宋八大家中，唐代唯二入列的古文大師為韓愈與何人？\n(A)白居易 (B)杜甫 (C)柳宗元 (D)李商隱。",
    studentAnswer: "C",
    correctAnswer: "C (柳宗元)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "唐宋八大家：唐代「韓愈、柳宗元」；宋代「歐陽脩、蘇洵、蘇軾、蘇轍、王安石、曾鞏」。"
    ],
    solutionSteps: [
      { step: "解析", content: "韓柳並稱，唐代唯韓愈與柳宗元。選 C。" }
    ]
  },

  // =========================================================================
  // 四、抒情散文〈項脊軒志〉專題 (10 題 · 20%)
  // =========================================================================
  {
    id: "chi-xiang-1",
    subject: "chinese",
    category: "xiang",
    section: "四、抒情散文〈項脊軒志〉專題",
    number: "1",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "歸有光文學成就與派別",
    question: "歸有光為明代何一文學流派的代表人物，力挽明中葉前後七子盲目模擬秦漢文之流弊？\n(A)公安派 (B)竟陵派 (C)唐宋派 (D)桐城派。",
    studentAnswer: "C",
    correctAnswer: "C (唐宋派)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "明代「唐宋派」代表：王慎中、唐順之、茅坤、歸有光。主張宗法唐宋古文，反對七子剽竊模擬。"
    ],
    solutionSteps: [
      { step: "解析", content: "歸有光為唐宋派集大成者。選 C。" }
    ]
  },
  {
    id: "chi-xiang-2",
    subject: "chinese",
    category: "xiang",
    section: "四、抒情散文〈項脊軒志〉專題",
    number: "2",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "文章線索與物象寄託",
    question: "〈項脊軒志〉文末寫道：「庭有枇杷樹，吾妻死之年所手植也，今已亭亭如蓋矣。」此處枇杷樹寄託何種情感？\n(A)對家族衰頹的憤慨 (B)對亡妻深長綿綿的永恆悼念 (C)對功名未遂的遺憾 (D)對隱居生活的熱愛。",
    studentAnswer: "B",
    correctAnswer: "B (對亡妻深長綿綿的永恆悼念)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "「亭亭如蓋」之枇杷樹樹猶如此，人何以堪。樹的茂密盛大象徵悼亡之情的綿遠不絕，神來之筆。"
    ],
    solutionSteps: [
      { step: "解析", content: "借庭中枇杷樹睹物思人，表達對亡妻之深摯追思。選 B。" }
    ]
  },
  {
    id: "chi-xiang-3",
    subject: "chinese",
    category: "xiang",
    section: "四、抒情散文〈項脊軒志〉專題",
    number: "3",
    score: 2,
    earned: 0,
    status: "wrong",
    topic: "文章情感轉折（核心錯題）",
    question: "〈項脊軒志〉全文的情感脈絡主軸為何？\n(A)多可喜，亦多可悲\n(B)始終歡欣雀躍，充滿求學狂喜\n(C)通篇悲憤填膺，痛罵封建體制\n(D)看破紅塵，超然於物外。",
    studentAnswer: "B",
    correctAnswer: "A (多可喜，亦多可悲)",
    hasMistake: true,
    errorDiagnosis: {
      type: "情眼主旨辨析不清",
      summary: "誤選 (B)！全文「情眼」正是第二段開頭的「多可喜，亦多可悲」！",
      details: "學生誤選了 (B)。歸有光在文章中自述修葺項脊軒後读书之樂（多可喜），但筆鋒一轉，寫母親叩門慈愛之憶、祖母勉以象笏之恩、諸父分家拆牆之哀、亡妻早逝之痛（多可悲）。「多可喜，亦多可悲」正是全篇文章的情感骨架與文眼所在。"
    },
    keyPoints: [
      "**〈項脊軒志〉文眼**：**「多可喜，亦多可悲」**！",
      "「可喜」：軒室整飭、萬籟有聲、明月半牆、嘯歌自得；「可悲」：家族析產分崩離析、母歿妣亡、愛妻夭逝。"
    ],
    solutionSteps: [
      { step: "步驟 1：掌握文眼關鍵句", content: "文中明確標出「然余居於此，多可喜，亦多可悲」。選 A。" }
    ]
  },
  {
    id: "chi-xiang-4",
    subject: "chinese",
    category: "xiang",
    section: "四、抒情散文〈項脊軒志〉專題",
    number: "4",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "母親生活細節描寫",
    question: "作者寫母親「兒寒乎？欲食乎？」等片語，其藝術特色為何？\n(A)以華麗辭藻鋪排母愛偉大 (B)以極其日常質樸的問候，勾勒母親最真摯的慈愛 (C)引用大量古代詩經典故 (D)透過嚴格責打展現嚴母風範。",
    studentAnswer: "B",
    correctAnswer: "B (以極其日常質樸的問候，勾勒母親最真摯的慈愛)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "歸有光散文最大特色：善於從「日常生活瑣事（家常語）」提煉至深之情，不事雕琢而感人至深。"
    ],
    solutionSteps: [
      { step: "解析", content: "白描家常問候，樸實而動人。選 B。" }
    ]
  },
  {
    id: "chi-xiang-5",
    subject: "chinese",
    category: "xiang",
    section: "四、抒情散文〈項脊軒志〉專題",
    number: "5",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "軒名由來考證",
    question: "作者將書齋命名為「項脊軒」，其深層文化寓意為：\n(A)書齋狹長如人體之脊椎骨 (B)紀念遠祖居於江蘇太倉之「項脊涇」，寓含不忘故土宗族之意 (C)屋頂長滿脊椎形狀之雜草 (D)祈求自己能成為國家之脊樑棟樑。",
    studentAnswer: "B",
    correctAnswer: "B (紀念遠祖居於江蘇太倉之「項脊涇」，寓含不忘故土宗族之意)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "歸氏遠祖曾居太倉項脊涇，作者以此名軒，寄託對先祖之追慕與宗族源流之思。"
    ],
    solutionSteps: [
      { step: "解析", content: "紀念遠祖居所項脊涇，不忘根本。選 B。" }
    ]
  },
  {
    id: "chi-xiang-6",
    subject: "chinese",
    category: "xiang",
    section: "四、抒情散文〈項脊軒志〉專題",
    number: "6",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "家族分家之悲傷筆觸",
    question: "「內外多置小門，牆往往而是……東犬西吠，客踰庖而宴，雞棲於廳。」這段文字描寫的是：\n(A)大家庭和樂融融的熱鬧場面 (B)家族分家後日漸衰微破敗、骨肉疏離之悲涼景象 (C)古代豪門貴族的奢華宴席 (D)農家休閒怡然自得的情調。",
    studentAnswer: "B",
    correctAnswer: "B (家族分家後日漸衰微破敗、骨肉疏離之悲涼景象)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "諸父析產分居，筑牆設門防備至親，庭園殘破東犬西吠，象徵封建大家庭的分崩瓦解。"
    ],
    solutionSteps: [
      { step: "解析", content: "寫諸父異居、家道中落之悲。選 B。" }
    ]
  },
  {
    id: "chi-xiang-7",
    subject: "chinese",
    category: "xiang",
    section: "四、抒情散文〈項脊軒志〉專題",
    number: "7",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "書齋清幽之境",
    question: "「三五之夜，明月半牆，桂影斑駁，風移影動，珊珊可愛。」此段文字營造出何種意境？\n(A)淒厲恐怖、幽暗森然 (B)清幽恬靜、雅致迷人 (C)荒蕪破敗、孤獨無助 (D)繁華鼎盛、熱鬧非凡。",
    studentAnswer: "B",
    correctAnswer: "B (清幽恬靜、雅致迷人)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "十五月圓之夜，明月清輝、桂樹扶疏、光影搖曳，為作者苦讀生涯中最安寧美好的記憶。"
    ],
    solutionSteps: [
      { step: "解析", content: "靜謐清雅之美景。選 B。" }
    ]
  },
  {
    id: "chi-xiang-8",
    subject: "chinese",
    category: "xiang",
    section: "四、抒情散文〈項脊軒志〉專題",
    number: "8",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "妻子日常對話生動性",
    question: "作者寫妻子時：「時至軒中，從余問古事，或憑几學書……吾妻歸寧，述諸小妹語曰：『聞姊家有閣子，且何謂閣子也？』」展現了何種夫妻情感？\n(A)同床異夢、相敬如賓 (B)鶼鰈情深、溫馨和樂之閨房情趣 (C)因貧困而互相埋怨 (D)夫尊妻卑、等級森嚴。",
    studentAnswer: "B",
    correctAnswer: "B (鶼鰈情深、溫馨和樂之閨房情趣)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "妻子至軒中問古事、學寫毛筆字、轉述小妹天真稚語，生動勾勒出年輕夫妻相知相惜之恩愛生活。"
    ],
    solutionSteps: [
      { step: "解析", content: "溫馨真摯之夫妻情深。選 B。" }
    ]
  },
  {
    id: "chi-xiang-9",
    subject: "chinese",
    category: "xiang",
    section: "四、抒情散文〈項脊軒志〉專題",
    number: "9",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "志體散文特點",
    question: "〈項脊軒志〉的「志」字，文體意義等同於何者？\n(A)誌（記敘、記錄） (B)志向志氣 (C)標誌符號 (D)志怪小說。",
    studentAnswer: "A",
    correctAnswer: "A (誌（記敘、記錄）)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "志通「誌」，古代記敘居所、人物雜記的雜記體散文。"
    ],
    solutionSteps: [
      { step: "解析", content: "志即記也。選 A。" }
    ]
  },
  {
    id: "chi-xiang-10",
    subject: "chinese",
    category: "xiang",
    section: "四、抒情散文〈項脊軒志〉專題",
    number: "10",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "歸有光號震川先生",
    question: "歸有光晚年在江蘇安亭講學，門人尊稱為：\n(A)震川先生 (B)亭林先生 (C)陽明先生 (D)昌黎先生。",
    studentAnswer: "A",
    correctAnswer: "A (震川先生)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "歸有光世稱「震川先生」；顧炎武稱亭林；王守仁稱陽明；韓愈稱昌黎。"
    ],
    solutionSteps: [
      { step: "解析", content: "震川先生為歸有光尊稱。選 A。" }
    ]
  },

  // =========================================================================
  // 五、現代文學與素養閱讀題組 (10 題 · 20%)
  // =========================================================================
  {
    id: "chi-modern-1",
    subject: "chinese",
    category: "modern",
    section: "五、現代文學與素養閱讀題組",
    number: "1",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "現代新詩象徵意象",
    question: "閱讀余光中詩句：「鄉愁是一枚小小的郵票，我站在這頭，母親在那頭……」詩中的「郵票」象徵何種情感？\n(A)對科技進步的讚嘆 (B)遊子與母親間受空間阻隔的思念連繫 (C)對集郵興趣的熱愛 (D)對交通費用的抱怨。",
    studentAnswer: "B",
    correctAnswer: "B (遊子與母親間受空間阻隔的思念連繫)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "余光中名詩〈鄉愁〉以郵票、船票、矮矮的墳墓、淺淺的海峽四個具體意象，寄託無盡思念與家國之情。"
    ],
    solutionSteps: [
      { step: "解析", content: "郵票為空間阻隔中唯一傳遞思念之載體。選 B。" }
    ]
  },
  {
    id: "chi-modern-2",
    subject: "chinese",
    category: "modern",
    section: "五、現代文學與素養閱讀題組",
    number: "2",
    score: 2,
    earned: 0,
    status: "wrong",
    topic: "文本深層諷刺主旨（核心錯題）",
    question: "魯迅在小說中擅長批判傳統國民劣根性。當提到阿Q「精神勝利法」時，其核心心理特徵為何？\n(A)不畏強權、奮起反抗到底\n(B)在現實遭受挫敗與屈辱時，在想像中尋求自我安慰以逃避現實\n(C)具備高度科學批判精神\n(D)具有強烈集體榮譽感。",
    studentAnswer: "A",
    correctAnswer: "B (在現實遭受挫敗與屈辱時，在想像中尋求自我安慰以逃避現實)",
    hasMistake: true,
    errorDiagnosis: {
      type: "角色性格深度理解不足",
      summary: "誤選 (A)！阿Q絕非反抗強權的英雄，而是典型的自欺欺人者！",
      details: "學生誤選了 (A)。阿Q最大的悲劇就是「不敢反抗強權」，被打了就自我安慰「這是兒子打老子，我總算又贏了」。這種不敢正視現實、用虛幻的道德優越感麻醉自己的心理，即世界文學著名的「精神勝利法」，旨在揭露麻木不仁的國民病態。"
    },
    keyPoints: [
      "**阿Q精神勝利法**：以妄想自尊代替行動、欺善怕惡、自欺欺人、逃避現實挫敗！"
    ],
    solutionSteps: [
      { step: "步驟 1：掌握角色象徵", content: "阿Q以虛幻勝利掩飾現實無能。正解為 B。" }
    ]
  },
  {
    id: "chi-modern-3",
    subject: "chinese",
    category: "modern",
    section: "五、現代文學與素養閱讀題組",
    number: "3",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "琦君回憶散文風格",
    question: "琦君散文（如〈髻〉）常以溫潤厚實的文字回憶童年與母親，其風格被評為：\n(A)犀利辛辣、字字帶刺 (B)溫柔敦厚、哀而不傷 (C)奇譎怪誕、魔幻超現實 (D)慷慨激昂、豪邁奔放。",
    studentAnswer: "B",
    correctAnswer: "B (溫柔敦厚、哀而不傷)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "琦君風格：溫厚包容、文字洗鍊恬淡，於回憶長輩人事中充滿體諒與包容。"
    ],
    solutionSteps: [
      { step: "解析", content: "溫柔敦厚、哀而不傷為琦君散文精髓。選 B。" }
    ]
  },
  {
    id: "chi-modern-4",
    subject: "chinese",
    category: "modern",
    section: "五、現代文學與素養閱讀題組",
    number: "4",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "徐志摩新詩音律感",
    question: "「輕輕的我走了，正如我輕輕的來；我揮一揮衣袖，不帶走一片雲彩。」徐志摩〈再別康橋〉全詩展現的藝術特色為：\n(A)沉鬱頓挫、悲涼慷慨 (B)節奏流轉、音樂和諧之建築美與音樂美 (C)冷酷殘酷之黑色幽默 (D)晦澀難懂之超現實主義。",
    studentAnswer: "B",
    correctAnswer: "B (節奏流轉、音樂和諧之建築美與音樂美)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "新月派倡導新詩「三美」：音樂美（節奏音韻）、繪畫美（辭藻意境）、建築美（節句勻稱）。"
    ],
    solutionSteps: [
      { step: "解析", content: "新月詩派新詩三美典型典範。選 B。" }
    ]
  },
  {
    id: "chi-modern-5",
    subject: "chinese",
    category: "modern",
    section: "五、現代文學與素養閱讀題組",
    number: "5",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "文言與白話對照理解",
    question: "古人言「獨學而無友，則孤陋而寡聞」，其現代教育意涵最接近何種學習模式？\n(A)封閉式死記硬背 (B)同儕合作學習與團體討論 (C)嚴苛體罰教育 (D)自我放任學習。",
    studentAnswer: "B",
    correctAnswer: "B (同儕合作學習與團體討論)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "強調與同學、朋友互相切磋砥礪，開拓視野，對應當代合作學習思維。"
    ],
    solutionSteps: [
      { step: "解析", content: "強調有友互相切磋，即合作學習。選 B。" }
    ]
  },
  {
    id: "chi-modern-6",
    subject: "chinese",
    category: "modern",
    section: "五、現代文學與素養閱讀題組",
    number: "6",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "文意邏輯推理",
    question: "「泰山不讓土壤，故能成其大；河海不擇細流，故能就其深。」這段話的核心哲理為：\n(A)為人應具備包容萬象之寬厚胸襟與開放態度 (B)地理山川構造之原理 (C)自然保護之重要性 (D)水土保持不可輕忽。",
    studentAnswer: "A",
    correctAnswer: "A (為人應具備包容萬象之寬厚胸襟與開放態度)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "李斯〈諫逐客書〉名句，比喻君王或求學者必須海納百川、容納多元才能成就大業。"
    ],
    solutionSteps: [
      { step: "解析", content: "以山海為喻，強調兼容並蓄之大胸懷。選 A。" }
    ]
  },
  {
    id: "chi-modern-7",
    subject: "chinese",
    category: "modern",
    section: "五、現代文學與素養閱讀題組",
    number: "7",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "書信便條禮貌用語",
    question: "寫信給老師或長輩時，下列提稱語使用何者正確？\n(A)膝下（用於父母祖父母） (B)函丈／道席（用於師長） (C)如晤（用於晚輩） (D)青睞（用於朋友）。",
    studentAnswer: "B",
    correctAnswer: "B (函丈／道席（用於師長）)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "書信提稱語規範：尊長用「膝下、尊前」；師長用「函丈、道席」；平輩用「足下、閣下」；晚輩用「如晤、知悉」。"
    ],
    solutionSteps: [
      { step: "解析", content: "函丈、道席為致函師長專用提稱語。選 B。" }
    ]
  },
  {
    id: "chi-modern-8",
    subject: "chinese",
    category: "modern",
    section: "五、現代文學與素養閱讀題組",
    number: "8",
    score: 2,
    earned: 0,
    status: "wrong",
    topic: "素養圖表與資訊轉化（核心錯題）",
    question: "閱讀分析「現代青少年的閱讀習慣調查圖表」，若圖表顯示電子書閱讀時間年增 35%，實體書借閱率下降 12%，但總閱讀時數反而微增，下列推論何者最嚴謹客觀？\n(A)青少年已經完全不再看書，語文程度全面崩壞\n(B)數位媒介正在改變閱讀載體型態，但閱讀行為並未消失，而是轉移至螢幕載具\n(C)政府應該立即關閉所有圖書館改建網咖\n(D)實體書將在一年內徹底絕版消失。",
    studentAnswer: "A",
    correctAnswer: "B (數位媒介正在改變閱讀載體型態，但閱讀行為並未消失，而是轉移至螢幕載具)",
    hasMistake: true,
    errorDiagnosis: {
      type: "推論過度極端化",
      summary: "誤選 (A)！數據顯示總閱讀時數微增，不能過度推論為「完全不看書」！",
      details: "學生選了 (A)。素養題極為重視「依據數據推論，避免情緒化與極端化判斷」。數據明確顯示「總閱讀時數微增」，這直接推翻了 (A)「完全不再看書」的極端說法！客觀事實是紙本轉移至電子螢幕（載具轉移），故 (B) 是唯一科學嚴謹的推論。"
    },
    keyPoints: [
      "**素養判讀鐵律**：尊重客觀數據！選項若出現「完全不、徹底絕版、全面崩潰」等極端詞彙，往往是錯誤誘答選項！"
    ],
    solutionSteps: [
      { step: "步驟 1：檢驗數據矛盾", content: "總時數增加 $\\implies$ 仍有閱讀；載體此消彼長 $\\implies$ 閱讀載具轉型。正解為 B。" }
    ]
  },
  {
    id: "chi-modern-9",
    subject: "chinese",
    category: "modern",
    section: "五、現代文學與素養閱讀題組",
    number: "9",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "文化常識對聯判定",
    question: "「剛直不阿，留得正氣沖霄漢；幽愁發憤，著成信史照塵寰。」這副對聯歌詠的歷史人物為：\n(A)司馬遷 (B)屈原 (C)陶淵明 (D)諸葛亮。",
    studentAnswer: "A",
    correctAnswer: "A (司馬遷)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "關鍵詞「發憤、著成信史（《史記》）」歌詠漢代史聖司馬遷。"
    ],
    solutionSteps: [
      { step: "解析", content: "信史照塵寰借指史家絕唱《史記》，指司馬遷。選 A。" }
    ]
  },
  {
    id: "chi-modern-10",
    subject: "chinese",
    category: "modern",
    section: "五、現代文學與素養閱讀題組",
    number: "10",
    score: 2,
    earned: 2,
    status: "correct",
    topic: "生命情懷哲思綜合",
    question: "綜觀高一國文選文，無論是韓愈的勇於抗俗求道，或是歸有光的重溫至親恩澤，古文帶給現代青年最深遠的啟示在於：\n(A)追求功名富貴的捷徑法門 (B)涵養真誠純粹的生命情感，並在浮躁時代中堅守精神價值 (C)學習古代繁文縟節 (D)掌握科舉考試猜題技巧。",
    studentAnswer: "B",
    correctAnswer: "B (涵養真誠純粹的生命情感，並在浮躁時代中堅守精神價值)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "國語文學科素養終極旨趣：透過文學經典涵泳性情、明辨是非、傳承人文精神。"
    ],
    solutionSteps: [
      { step: "解析", content: "陶冶生命情懷與精神堅守。選 B。" }
    ]
  }
];

window.chineseExamMetadata = chineseExamMetadata;
window.chineseQuestionsData = chineseQuestionsData;
