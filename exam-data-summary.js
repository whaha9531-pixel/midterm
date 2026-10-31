// ==========================================================================
// 全科段考總和分析、跨科統計數據、錯題挑戰與考卷原卷圖庫
// 涵蓋四大科目：數學科、英語文、自然（物理）、國語文
// ==========================================================================

const summaryData = {
  student: {
    name: "周姸汝",
    seat: "4 號",
    school: "智光商工 日間部",
    class: "工、商科 一年 1- 班",
    examName: "115 學年度第 1 學期第一次段考",
    totalScore: 344,
    maxScore: 400,
    averageScore: 86.0,
    totalItems: 163,
    correctItems: 138,
    wrongItems: 25,
    overallAccuracy: "84.7%"
  },
  subjects: [
    {
      id: "math",
      name: "數學科",
      shortName: "數學",
      icon: "📐",
      score: 88,
      fullScore: 100,
      deductions: 12,
      accuracy: "76.9%",
      totalQuestions: 13,
      correctCount: 10,
      wrongCount: 3,
      accentColor: "#06b6d4",
      gradient: "linear-gradient(135deg, #06b6d4, #3b82f6)",
      summary: "幾何計算與配方極值基礎非常扎實；失分集中在因式分解乘積正負號檢查、函數向右平移代換方向，以及二次不等式求根正負號顛倒。"
    },
    {
      id: "english",
      name: "英語文",
      shortName: "英文",
      icon: "📖",
      score: 78,
      fullScore: 100,
      deductions: 22,
      accuracy: "78.0%",
      totalQuestions: 50,
      correctCount: 39,
      wrongCount: 11,
      accentColor: "#f59e0b",
      gradient: "linear-gradient(135deg, #f59e0b, #ec4899)",
      summary: "文意字彙 (20/20)、句子配合 (10/10)、課文默寫 (10/10) 滿分；失分關鍵在於單字作答錯位、日常生活對話前後邏輯矛盾（錯 4 題扣 8 分），以及閱讀主旨題誤判。"
    },
    {
      id: "physics",
      name: "自然（物理）",
      shortName: "物理",
      icon: "🔬",
      score: 92,
      fullScore: 100,
      deductions: 8,
      accuracy: "92.0%",
      totalQuestions: 50,
      correctCount: 46,
      wrongCount: 4,
      accentColor: "#10b981",
      gradient: "linear-gradient(135deg, #10b981, #06b6d4)",
      summary: "運動學與牛頓定律掌握極佳，數值計算全對（平均速率 4.8 km/hr、溫標 50°C）；失分在於「光年」誤認成時間單位、最低溫誤選 273.15 K、萬有引力誤選磁力，以及強核力寫成強力核。"
    },
    {
      id: "chinese",
      name: "國語文",
      shortName: "國文",
      icon: "📜",
      score: 86,
      fullScore: 100,
      deductions: 14,
      accuracy: "86.0%",
      totalQuestions: 50,
      correctCount: 43,
      wrongCount: 7,
      accentColor: "#8b5cf6",
      gradient: "linear-gradient(135deg, #8b5cf6, #ec4899)",
      summary: "韓愈〈師說〉從師哲理與歸有光〈項脊軒志〉親情書寫掌握深刻；失分在於倒裝句型（句讀之不知）、阿Q精神勝利法深層諷刺、素養數據推論過度極端，以及針砭等字形字音。"
    }
  ],
  radarMetrics: [
    { label: "物理：牛頓運動定律與力學能", subject: "physics", val: 100, rating: "精通 ⭐⭐⭐" },
    { label: "數學：解析幾何與坐標計算", subject: "math", val: 100, rating: "精通 ⭐⭐⭐" },
    { label: "數學：二次函數配方與頂點極值", subject: "math", val: 100, rating: "精通 ⭐⭐⭐" },
    { label: "英文：文意字彙理解與語法", subject: "english", val: 100, rating: "精通 ⭐⭐⭐" },
    { label: "英文：課文默寫與名詞句法", subject: "english", val: 100, rating: "精通 ⭐⭐⭐" },
    { label: "物理：運動學公式與數值運算", subject: "physics", val: 95, rating: "精通 ⭐⭐⭐" },
    { label: "國文：經典古文理解（師說／項脊軒）", subject: "chinese", val: 90, rating: "優秀 ⭐⭐" },
    { label: "英文：翻譯填空與片語搭配", subject: "english", val: 90, rating: "優秀 ⭐⭐" },
    { label: "國文：成語修辭與文學常識", subject: "chinese", val: 85, rating: "良好 ⭐⭐" },
    { label: "英文：閱讀測驗長文理解", subject: "english", val: 80, rating: "良好 ⭐⭐" },
    { label: "國文：素養題組客觀數據推論", subject: "chinese", val: 80, rating: "良好 ⭐⭐" },
    { label: "數學：不等式分段與解集判定", subject: "math", val: 75, rating: "良好 ⭐⭐" },
    { label: "物理：單位定義與物理量概念（光年）", subject: "physics", val: 70, rating: "需加強 🚨" },
    { label: "英文：單字拼寫精準度與防錯位", subject: "english", val: 50, rating: "需加強 🚨" },
    { label: "英文：生活情境對話邏輯推理", subject: "english", val: 20, rating: "重災區 🚨" }
  ],
  crossDiagnosis: {
    title: "四科綜合深度盲點診斷與思維模式解析",
    habits: [
      {
        icon: "⚡",
        title: "「作答急躁，缺乏兩秒黃金驗算」",
        description: "數學十字交乘只驗算相加為 -10，忘記乘積是 -24 還是 +24；英文單字填卡時順序錯位（第 7 題 surprise 填在第 1 格，第 1 題 result 填在第 3 格）；物理填充第 1 題字序顛倒寫成「強力核」。"
      },
      {
        icon: "👁️",
        title: "「字面直覺誤導，忽視嚴謹科學與語境定義」",
        description: "物理看到「光年」有年字就選時間（實為長度！）；看到 273.15 就選最低溫度（0 K 才是絕對零度！）；英文看到 I'd love to go with you 欣然同意，前句卻選了拒絕的 I'm afraid I can't；國文看到「針砭」誤寫為「針貶」。"
      },
      {
        icon: "🔄",
        title: "「方向與正負號的代數/幾何直覺需強化」",
        description: "數學「向右平移」誤以為要加，忽略自變數代換公式應為 (x - h)；一元二次不等式分解 (2x - 1)(x + 3) = 0 時，兩根的正負號在腦中看反（誤將 2x - 1 看成 -1/2）。"
      }
    ],
    actionPlan: [
      {
        subject: "全科通用",
        strategy: "【交卷前 5 分鐘防禦清單】",
        action: "1. 題目題號與答案卡格子逐格對齊核對。<br>2. 英文每個單字用手指劃過檢查元音字母是否齊全（r-e-l-a-t-i-o-n）。<br>3. 物理單位與定義題在題目上圈出物理量本質（如光年圈出「距離」）。<br>4. 國文倒裝句還原成正常語序再作答。"
      },
      {
        subject: "數學科提分",
        strategy: "【目標：88 分 $\\rightarrow$ 96+ 分】",
        action: "1. 因式分解完成後，強制心算兩常數相乘是否等於題目的常數項。<br>2. 函數平移牢記頂點坐標法：先寫出原本頂點，平移後算出新頂點坐標，再倒推回標準式！<br>3. 解不等式時先在草稿紙畫出數線標出正負號，絕對不在腦中空想。"
      },
      {
        subject: "英語文提分",
        strategy: "【目標：78 分 $\\rightarrow$ 92+ 分】",
        action: "1. 對話解題軍規：**看答句逆推問句**，標記答句中的關鍵態度詞（如 Sounds nice、I'll see you tomorrow）。<br>2. 熟背三大社交場景對應：道別說 Talk to you later / See you；道謝說 You're welcome / My pleasure；邀約同意說 That sounds great / I'd love to。<br>3. 單字本建立「易漏字母清單」：relation（漏 a）、surprise（雙 r）、subject（無 r）。"
      },
      {
        subject: "自然物理提分",
        strategy: "【目標：92 分 $\\rightarrow$ 98+ 分】",
        action: "1. 單位陷阱專題卡：光年（長度）、天文單位（長度）、電子伏特（能量）。<br>2. 溫標換算死記基準點：0 K = -273.15 °C（絕對零度），273.15 K = 0 °C（冰點）。<br>3. 四大基本力書寫牢記以「力」結尾：強核力、弱核力、電磁力、萬有引力。"
      },
      {
        subject: "國語文提分",
        strategy: "【目標：86 分 $\\rightarrow$ 95+ 分】",
        action: "1. 古文倒裝句辨識：受詞＋之＋動詞（句讀之不知＝不知句讀；何陋之有＝有何陋）。<br>2. 韓愈師說主旨：道之所存師之所存，徹底破除年齡與貴賤階級迷思。<br>3. 素養圖表題：避免絕對化與極端推論詞彙（如「完全不、徹底絕版」）。"
      }
    ]
  },
  // 錯題特訓測驗題庫（涵蓋四大科目核心變形題）
  combinedQuizQuestions: [
    {
      subject: "math",
      badge: "📐 數學科 · 因式分解正負號",
      title: "【數學挑戰 1】因式分解多項式：$x^2 - 9x + 20$，請選出正確的分解式：",
      options: [
        { text: "(x + 4)(x - 5)", isCorrect: false, note: "乘積為 (+4) × (-5) = -20，與題目 +20 符號相反！" },
        { text: "(x - 4)(x - 5)", isCorrect: true, note: "完全正確！乘積 (-4) × (-5) = +20，相加 (-4) + (-5) = -9。" },
        { text: "(x - 2)(x - 10)", isCorrect: false, note: "乘積 (+20) 對了，但相加 (-2) + (-10) = -12 ≠ -9。" },
        { text: "(x + 2)(x - 10)", isCorrect: false, note: "相加為 -8，乘積為 -20，皆不符合！" }
      ]
    },
    {
      subject: "math",
      badge: "📐 數學科 · 二次函數圖形平移",
      title: "【數學挑戰 2】將拋物線 $f(x) = (x - 2)^2 + 3$ 的圖形「向右平移 3 單位，向下平移 2 單位」，移動後方程式為何？",
      options: [
        { text: "f(x) = (x + 1)^2 + 1", isCorrect: false, note: "向右平移誤用加法！向右 3 單位應代換為 (x - 3)。" },
        { text: "(x - 5)^2 + 1", isCorrect: true, note: "太棒了！頂點 (2, 3) 移至 (2+3, 3-2) = (5, 1)，標準式為 (x - 5)^2 + 1。" },
        { text: "(x - 5)^2 + 5", isCorrect: false, note: "向下平移 2 單位應為 3 - 2 = 1，不是加 2！" },
        { text: "(x - 1)^2 + 1", isCorrect: false, note: "平移代換方向弄反。" }
      ]
    },
    {
      subject: "math",
      badge: "📐 數學科 · 一元二次不等式",
      title: "【數學挑戰 3】解一元二次不等式：$2x^2 - 7x + 3 < 0$",
      options: [
        { text: "x < 1/2 或 x > 3", isCorrect: false, note: "小於 0 拋物線在 x 軸下方，解集應夾在兩根中間！" },
        { text: "-1/2 < x < 3", isCorrect: false, note: "2x - 1 = 0 的根為 x = +1/2，不是 -1/2！" },
        { text: "1/2 < x < 3", isCorrect: true, note: "完全正確！因式分解為 (2x - 1)(x - 3) < 0，兩根為 1/2 與 3，小於取中間！" },
        { text: "-3 < x < -1/2", isCorrect: false, note: "兩根正負號皆計算錯誤。" }
      ]
    },
    {
      subject: "english",
      badge: "📖 英語文 · 單字拼寫與辨析",
      title: "【英文挑戰 1】下列四個單字拼寫與中文詞義配對，哪一個完全正確無誤？",
      options: [
        { text: "reltion（關係）", isCorrect: false, note: "拼寫錯誤！漏掉中間字母 a，正確應為 relation。" },
        { text: "surbject（主題；學科）", isCorrect: false, note: "拼寫錯誤！字首 sub- 不含 r，正確應為 subject。" },
        { text: "surprise（驚奇；驚喜）", isCorrect: true, note: "完全正確！sur-prise 包含前後兩個 r，拼寫完全精確！" },
        { text: "reguset（請求）", isCorrect: false, note: "拼寫錯誤！字母 q 與 u 搭配，正確應為 request。" }
      ]
    },
    {
      subject: "english",
      badge: "📖 英語文 · 動詞片語搭配",
      title: "【英文挑戰 2】當你熱情邀請朋友到你家新居「四處參觀」時，應該說：Please feel free to ___ the house.",
      options: [
        { text: "look away", isCorrect: false, note: "look away 是「轉移目光/轉頭不看」，跟熱情參觀完全相反！" },
        { text: "look around", isCorrect: true, note: "太棒了！look around 表示「四處參觀、到處逛逛」，around 表周圍一圈！" },
        { text: "look into", isCorrect: false, note: "look into 是「調查、深入研究」，不符合參觀房子情境。" },
        { text: "look after", isCorrect: false, note: "look after 是「照顧、照料」。" }
      ]
    },
    {
      subject: "english",
      badge: "📖 英語文 · 日常情境對話",
      title: "【英文挑戰 3】朋友對你說：「It's getting late. I'll see you tomorrow.（時間晚了，明天見。）」，你應該如何禮貌道別？",
      options: [
        { text: "You're welcome.", isCorrect: false, note: "You're welcome（不客氣）只能在對方說 Thank you 時使用！" },
        { text: "Talk to you later.", isCorrect: true, note: "完全正確！Talk to you later（回頭再聊 / 晚點聊）是標準道別用語！" },
        { text: "Nice to meet you, too.", isCorrect: false, note: "初次見面介紹時才說 Nice to meet you，熟人道別不適用。" },
        { text: "Are you serious?", isCorrect: false, note: "問對方「你是認真的嗎？」，語意突兀不合情境。" }
      ]
    },
    {
      subject: "physics",
      badge: "🔬 自然物理 · 物理量單位本質",
      title: "【物理挑戰 1】天文學中常說「比鄰星距離地球約 4.22 光年」，句中的「光年」屬於下列何種物理量的單位？",
      options: [
        { text: "時間", isCorrect: false, note: "陷阱！光年雖然有「年」字，但它是光行駛一年的總距離，是長度單位！" },
        { text: "長度", isCorrect: true, note: "太棒了！光年是距離/長度單位，1 光年約為 9.46 兆公里！" },
        { text: "速度", isCorrect: false, note: "速度單位是公尺/秒 (m/s) 或公里/小時 (km/h)。" },
        { text: "質量", isCorrect: false, note: "質量單位為公斤 (kg)。" }
      ]
    },
    {
      subject: "physics",
      badge: "🔬 自然物理 · 絕對零度觀念",
      title: "【物理挑戰 2】熱力學理論中，物質溫度降低的最低極限稱為「絕對零度」，其在絕對溫標（K）與攝氏溫標（°C）的數值分別為：",
      options: [
        { text: "273.15 K 與 0 °C", isCorrect: false, note: "這是水的冰點，不是最低極限溫度！" },
        { text: "0 K 與 -273.15 °C", isCorrect: true, note: "完全正確！絕對零度即為 0 K，相當於攝氏 -273.15 °C！" },
        { text: "0 K 與 0 °C", isCorrect: false, note: "0 K 等於 -273.15 °C，兩者數值不同。" },
        { text: "-273.15 K 與 0 °C", isCorrect: false, note: "絕對溫標沒有負數，0 K 是最低點。" }
      ]
    },
    {
      subject: "physics",
      badge: "🔬 自然物理 · 基本力專有名詞",
      title: "【物理挑戰 3】在原子核內部克服質子同性電斥力、將核子牢固束縛在一起的強大作用力，其標準物理名稱為：",
      options: [
        { text: "強力核", isCorrect: false, note: "詞序顛倒！名詞應以「力」結尾，不可寫成強力核。" },
        { text: "強核力（強交互作用力）", isCorrect: true, note: "太棒了！強核力是自然界四大基本力中強度最強者！" },
        { text: "靜電力", isCorrect: false, note: "靜電力在質子間是排斥力，會使原子核分裂。" },
        { text: "萬有引力", isCorrect: false, note: "萬有引力在微觀尺度太過微弱，無法維持原子核穩定。" }
      ]
    },
    {
      subject: "chinese",
      badge: "📜 國語文 · 文言倒裝句型",
      title: "【國文挑戰 1】韓愈〈師說〉中「句讀之不知，惑之不解」為文言倒裝句，其正常語序應為：",
      options: [
        { text: "不知句讀，不解惑", isCorrect: true, note: "完全正確！這是賓語（受詞）提前倒裝，句中的「之」是提賓助詞！" },
        { text: "句讀不知之，惑不解之", isCorrect: false, note: "文言無此重複結構。" },
        { text: "知句讀，解惑", isCorrect: false, note: "遺漏否定詞「不」，意思完全相反。" },
        { text: "以不知為句讀，以不解為惑", isCorrect: false, note: "語義理解錯誤。" }
      ]
    },
    {
      subject: "chinese",
      badge: "📜 國語文 · 擇師核心哲思",
      title: "【國文挑戰 2】韓愈在〈師說〉中提出「是故無貴無賤，無長無少，道之所存，師之所存也」，其核心主旨強調：",
      options: [
        { text: "擇師唯一標準為真理大道，徹底破除年齡長幼與門第貴賤之迷思", isCorrect: true, note: "太棒了！韓愈打破世俗階級與年齡枷鎖，堅持「以道為師」！" },
        { text: "年紀比自己小的人絕對不能當老師", isCorrect: false, note: "韓愈明文強調「無長無少」，反對年齡論。" },
        { text: "只有貴族官員才有資格收徒講學", isCorrect: false, note: "韓愈明文強調「無貴無賤」。" },
        { text: "只要給予豐厚束脩就能求得真道", isCorrect: false, note: "完全脫離儒家傳道初衷。" }
      ]
    },
    {
      subject: "chinese",
      badge: "📜 國語文 · 字形正誤辨別",
      title: "【國文挑戰 3】下列各詞語的用字，何者完全正確無誤？",
      options: [
        { text: "嚴厲針貶", isCorrect: false, note: "錯字！古代以石針治病，應為「針砭（石部）」。" },
        { text: "針砭時弊", isCorrect: true, note: "完全正確！針砭之「砭」從石部，指評論規勸過失！" },
        { text: "阿談奉承", isCorrect: false, note: "錯字！應為阿「諛」奉承（言部）。" },
        { text: "走頭無路", isCorrect: false, note: "錯字！投奔無路，應為走「投」無路。" }
      ]
    }
  ],
  // 考卷原卷與答案卡照片圖庫（共 10 頁：英語文 5 頁 + 物理 5 頁）
  examGalleries: [
    // 物理試卷 (5 頁)
    {
      id: "img-phy-card",
      title: "自然（物理）試卷 P1 · 答案卡與得分欄（計分 92 分）",
      badge: "物理試卷 P1",
      subtitle: "班級：資處、電子、資訊、機械 科 一年 1- 班 · 座號：4 · 姓名：周姸汝 · 紅筆計分 92",
      image: "images/physics_p1_card_upright.jpg",
      rawImage: "images/physics_p1_card.jpg",
      annotations: [
        { label: "選擇題得分 +74", text: "40 題選擇題僅錯 3 題（第 11 題、第 18 題、第 33 題），得 74 分！" },
        { label: "劃卡答案卡", text: "2B 鉛筆劃卡整潔規範，條理分明。" },
        { label: "第 1~9 題全對", text: "近代物理、SI 單位、克卜勒與牛頓運動定律掌握度 100%！" }
      ]
    },
    {
      id: "img-phy-p1-part2",
      title: "自然（物理）試卷 P1 右欄 · 選擇題 10~22 題",
      badge: "物理試卷 選擇題",
      subtitle: "光年定義、單位數量、原子核粒子、絕對零度、傘兵速度表格",
      image: "images/physics_p1_part2_upright.jpg",
      rawImage: "images/physics_p1_part2.jpg",
      annotations: [
        { label: "第 11 題錯題剖析", text: "「光年」是長度單位！學生誤劃記 (C) 時間，老師紅筆註記 A。" },
        { label: "第 18 題錯題剖析", text: "最低極限溫度為絕對零度 0 K！學生誤選 (B) 273.15 K，老師紅筆註記 A。" },
        { label: "傘兵數據分析全對", text: "精確由速率劇降分析出開傘時間在 3~4 秒間！" }
      ]
    },
    {
      id: "img-phy-p2-part1",
      title: "自然（物理）試卷 P2 左欄 · 選擇題 23~33 題",
      badge: "物理試卷 選擇題",
      subtitle: "牛頓三大運動定律、接觸力超距力、重力與高度、摩擦力",
      image: "images/physics_p2_part1_upright.jpg",
      rawImage: "images/physics_p2_part1.jpg",
      annotations: [
        { label: "第 33 題錯題剖析", text: "任何兩物體間皆有之相互吸引力為「萬有引力」！學生誤劃記 (B) 磁力，紅筆訂正 A。" },
        { label: "摩托車砂石車碰撞受力", text: "牛頓第三定律受力相等、加速度與質量反比，判斷完全正確！" }
      ]
    },
    {
      id: "img-phy-p2-part2",
      title: "自然（物理）試卷 P2 右欄 · 選擇題 34~40 題",
      badge: "物理試卷 選擇題",
      subtitle: "大霹靂、伽利略理想斜面、秒的銫-133 定義、101 電梯視重超重失重",
      image: "images/physics_p2_part2_upright.jpg",
      rawImage: "images/physics_p2_part2.jpg",
      annotations: [
        { label: "斜面等高全對", text: "力學能守恆，小球上升高度甲 = 乙 = 丙，正確選 C。" },
        { label: "101 電梯視重全對", text: "加速上升超重、減速上升失重，正確選先增加後減少 D。" }
      ]
    },
    {
      id: "img-phy-fillin",
      title: "自然（物理）試卷 P2 下方 · 填充題 10 格（得分 +18 分）",
      badge: "物理填充題",
      subtitle: "強核力、核子、SI 七基本量、太陽光 500 秒、122°F 溫標換算、平均速率 4.8 km/hr",
      image: "images/physics_fillin_upright.jpg",
      rawImage: "images/physics_fillin.jpg",
      annotations: [
        { label: "填充第 1 題錯題剖析", text: "維持原子核穩定為「強核力」！學生字序顛倒寫成「強力核」，紅筆劃叉扣 2 分。" },
        { label: "光速計算 500 秒全對", text: "1.5 億公里 / 30 萬公里每秒 = 500 秒，計算無誤！" },
        { label: "溫標 50°C 全對", text: "(122 - 32) * 5/9 = 50°C，計算完全精確！" },
        { label: "平均速度 0 與速率 4.8 全對", text: "往返位移為 0；調和平均數 2*4*6 / (4+6) = 4.8 km/hr 滿分！" }
      ]
    },

    // 英語文試卷 (5 頁)
    {
      id: "img-ans",
      title: "英語文 答案欄（計分 78 分 · 老師紅筆批改原卷）",
      badge: "英文答案卷",
      subtitle: "含所有大題作答手跡、扣分紅筆圈記與總分 78 分標示",
      image: "images/eng_answersheet_upright.jpg",
      rawImage: "images/eng_answersheet.jpg",
      annotations: [
        { label: "單字區扣分 ①②③", text: "單字第 1、3、7 題出現作答順序顛倒錯位；第 6 題 reltion 漏 a、第 8 題 surbject 多 r。" },
        { label: "翻譯填空 扣分 ⑥", text: "第 6 格寫成 away（原意應為 look around），扣 2 分。" },
        { label: "對話測驗 錯 4 題", text: "第 2、3、4、5 題紅筆圈起，每題扣 2 分共扣 8 分。" },
        { label: "閱讀測驗 錯第 5 題", text: "主旨題選 C 被圈起扣 2 分，正解為 D。" }
      ]
    },
    {
      id: "img-p1",
      title: "英語文 試卷第 1 頁（P1 · 單字、文意字彙、句子配合）",
      badge: "英文試題卷 P1",
      subtitle: "班級：工、商科 一年 1- 班 · 座號：4 · 姓名：周姸汝 · 紅筆得分 78",
      image: "images/eng_p1_upright.jpg",
      rawImage: "images/eng_p1.jpg",
      annotations: [
        { label: "大題一：單字", text: "印有 1~10 題中文詞義提示（結束、電梯、請求、包裹、命令、關係、驚訝、學科、目的、角落）。" },
        { label: "大題二：文意字彙 (20/20)", text: "Tom seldom talks about his personal life 等 10 題代號填空，周同學全對！" },
        { label: "大題三：句子配合 (10/10)", text: "I've caught a cold、What's wrong with you 等 5 題會話配對全對！" }
      ]
    },
    {
      id: "img-fillin",
      title: "英語文 試卷默寫與翻譯（四、課文默寫填空 · 五、翻譯填空）",
      badge: "英文試題卷 默寫/翻譯",
      subtitle: "課文 Happy Birthday 默寫 (10/10) · 五、翻譯填空 (18/20)",
      image: "images/eng_fillin_upright.jpg",
      rawImage: "images/eng_fillin.jpg",
      annotations: [
        { label: "課文默寫滿分", text: "bring, children, and, Romans, around 全部默寫正確。" },
        { label: "戲服與舞台", text: "The actor put on his costume and walked on to the stage. 正確。" },
        { label: "失誤處：隨意四處參觀", text: "Please feel free to look around the house.（卷上鉛筆註記 look away 與 In around）。" }
      ]
    },
    {
      id: "img-dialog",
      title: "英語文 試卷對話測驗（六、日常情境對話 1~5 題）",
      badge: "英文試題卷 對話篇",
      subtitle: "對話情境完整考題：看展覽、喝咖啡、生日派對、回家道別、登山邀約",
      image: "images/eng_dialog_upright.jpg",
      rawImage: "images/eng_dialog.jpg",
      annotations: [
        { label: "第 1 題答對", text: "Are you serious? 答對得 2 分。" },
        { label: "第 2~5 題失誤剖析", text: "包含咖啡邀約 (A)、生日蛋糕 (B)、道別 Talk to you later (B)、欣然答應 That sounds interesting (D)。" }
      ]
    },
    {
      id: "img-reading",
      title: "英語文 試卷閱讀測驗（七、亡靈節 The Day of the Dead 短文與 5 題）",
      badge: "英文試題卷 閱讀篇",
      subtitle: "墨西哥與北美亡靈節文化閱讀短文 · 5 道測驗題",
      image: "images/eng_reading_upright.jpg",
      rawImage: "images/eng_reading.jpg",
      annotations: [
        { label: "短文核心主旨", text: "show the ghosts that the living remember the dead（向靈魂展示逝者被記住）。" },
        { label: "前 4 題全對", text: "第 1 題 (C cry)、第 2 題 (B beginning of November)、第 3 題 (A less scary)、第 4 題 (B held in many countries) 皆正確！" },
        { label: "第 5 題主旨失誤", text: "選了 C（serious day），正解為 D。" }
      ]
    }
  ]
};

window.summaryData = summaryData;
