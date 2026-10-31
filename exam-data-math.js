// 考卷數據：包含題目、學生作答、正確答案、錯題分析、觀念重點、詳解步驟及推薦學習網址
const examMetadata = {
  title: "高中數學段考 · 試卷深度檢討與錯題診斷報告",
  subtitle: "含完整解答、盲點剖析、概念精華、視覺化工具與精選學習資源",
  student: {
    name: "周姸汝",
    seat: "4 號",
    score: 88,
    fullScore: 100,
    deductions: 12,
    totalQuestions: 13,
    correctCount: 10,
    wrongCount: 3
  },
  summary: {
    strengths: [
      "解析幾何與坐標計算非常扎實（重心、平行四邊形第四頂點、直徑與圓心皆全對）",
      "二次函數配方與頂點判斷精準，能正確找出極值與對稱軸",
      "判別式 D 的計算與根的個數判定掌握度 100%",
      "絕對值不等式概念清晰，能正確分段與求解"
    ],
    weaknesses: [
      "十字交乘時正負號粗心：只檢驗兩數相加，忘記檢查常數項乘積的正負符號",
      "函數圖形平移搞混方向：「向右平移」誤用加法，應為自變數代換 (x - h)",
      "解方程式時求根的正負號移項粗心：(2x - 1)(x + 3) = 0 的根誤看成 -1/2 與 3"
    ]
  }
};

const questionsData = [
  {
    id: "fill-1",
    category: "fill",
    section: "填充題",
    number: "1",
    score: 4,
    earned: 0,
    status: "wrong", // "wrong" or "correct"
    topic: "多項式因式分解",
    question: "因式分解下列各式：$x^2 - 10x + 24$",
    studentAnswer: "(x + 2)(x - 12)",
    correctAnswer: "(x - 4)(x - 6)",
    hasMistake: true,
    errorDiagnosis: {
      type: "符號檢驗疏忽（致命粗心）",
      summary: "只顧湊合一次項相加，忽略了常數項乘積的正負號！",
      details: "十字交乘時，找到了 $+2$ 與 $-12$，發現 $(+2) + (-12) = -10$，便急忙寫下答案。然而 $(+2) \\times (-12) = -24$，但題目給的常數項是 $+24$！若常數項為正（$+24$），兩數必定「同號」（同正或同負）；且一次項為負（$-10$），因此兩數必為「同負數」。"
    },
    keyPoints: [
      "**同號得正、異號得負原則**：常數項 $> 0 \\implies$ 兩數同號；一次項 $< 0 \\implies$ 兩數皆為負。",
      "**黃金驗算 2 秒鐘**：因式分解完成後，立刻用心算檢查「兩數乘積」是否等於常數項，即可 100% 避免此類失誤。",
      "**因數對列舉法**：24 的同號負因數對為 $(-1, -24), (-2, -12), (-3, -8), (-4, -6)$，其中只有 $(-4) + (-6) = -10$ 符合。"
    ],
    solutionSteps: [
      {
        step: "步驟 1：分析符號特徵",
        content: "多項式為 $x^2 - 10x + 24$。二次項係數為 $1$，一次項係數為 $-10$，常數項為 $+24$。"
      },
      {
        step: "步驟 2：尋找滿足條件的兩數 $p, q$",
        content: "需滿足：$p \\times q = +24$ 且 $p + q = -10$。因為乘積為正、和為負，故 $p < 0$ 且 $q < 0$。"
      },
      {
        step: "步驟 3：十字交乘檢驗",
        content: "取 $p = -4, q = -6$：\n$$\\begin{array}{rcc}\nx & \\searrow & -4 \\\\\nx & \\nearrow & -6\n\\end{array}$$\n交叉相乘：$(-4x) + (-6x) = -10x$，乘積：$(-4) \\times (-6) = +24$。完全吻合！"
      },
      {
        step: "步驟 4：得出因式分解",
        content: "原式 $= (x - 4)(x - 6)$。"
      }
    ],
    links: [
      {
        title: "均一教育平台 · 十字交乘法因式分解專題",
        url: "https://www.junyiacademy.org/course-compare/math-jh/jh-m2a/jh-m2bch2/jh-m2bch2-2",
        desc: "系統化練習二次項係數為 1 與非 1 的十字交乘正負號判斷技巧。"
      },
      {
        title: "維基百科 · 十字相乘法",
        url: "https://zh.wikipedia.org/zh-tw/%E5%8D%81%E5%AD%97%E7%9B%B8%E4%B9%98",
        desc: "詳解因式分解原理、因數拆解法與常見易錯符號陷阱。"
      },
      {
        title: "GeoGebra · 二次三項式因式分解動態圖形工具",
        url: "https://www.geogebra.org/m/c9jfxptg",
        desc: "透過面積矩形模型直觀理解 $(x - a)(x - b)$ 的幾何意義。"
      }
    ]
  },
  {
    id: "fill-2",
    category: "fill",
    section: "填充題",
    number: "2",
    score: 4,
    earned: 4,
    status: "correct",
    topic: "多項式函數運算",
    question: "設 $f(x) = 3x^2 - x + 1$，試求 $f(2) + f(-1)$ 之值。",
    studentAnswer: "16",
    correctAnswer: "16",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "**負數代入運算順序**：$(-1)^2 = 1$（先平方），再乘前面係數 $3 \\times 1 = 3$。",
      "**負負得正**：$-x$ 當 $x = -1$ 時為 $-(-1) = +1$。",
      "分段計算再求和，能有效降低心算失誤率。"
    ],
    solutionSteps: [
      {
        step: "步驟 1：求 $f(2)$ 之值",
        content: "$$f(2) = 3(2)^2 - 2 + 1 = 3(4) - 2 + 1 = 12 - 2 + 1 = 11$$"
      },
      {
        step: "步驟 2：求 $f(-1)$ 之值",
        content: "$$f(-1) = 3(-1)^2 - (-1) + 1 = 3(1) + 1 + 1 = 3 + 1 + 1 = 5$$"
      },
      {
        step: "步驟 3：兩者相加求總值",
        content: "$$f(2) + f(-1) = 11 + 5 = 16$$"
      }
    ],
    links: [
      {
        title: "均一教育平台 · 函數值與多項式求值",
        url: "https://www.junyiacademy.org/course-compare/math-jh/jh-m2b/jh-m2bch3/jh-m2bch3-1",
        desc: "鞏固函數代入、多項式運算與四則混合運算優先級。"
      }
    ]
  },
  {
    id: "fill-3",
    category: "fill",
    section: "填充題",
    number: "3",
    score: 4,
    earned: 4,
    status: "correct",
    topic: "坐標平面與象限判別",
    question: "設 $a < 0$、$b > 0$，則判斷下列各點位於第幾象限：$P(b - a, a^2 b)$。",
    studentAnswer: "第一象限",
    correctAnswer: "第一象限",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "**相反數的性質**：$a < 0 \\implies -a > 0$。",
      "**正數相加必為正**：$b > 0$ 且 $-a > 0 \\implies b - a = b + (-a) > 0$。",
      "**非零實數平方必為正**：$a \\neq 0 \\implies a^2 > 0$；正數乘正數為正數 $\\implies a^2 b > 0$。",
      "**象限正負號定義**：第一象限 $(+, +)$、第二象限 $(-, +)$、第三象限 $(-, -)$、第四象限 $(+, -)$。"
    ],
    solutionSteps: [
      {
        step: "步驟 1：判斷 $x$ 坐標 $b - a$ 的正負",
        content: "因為 $b > 0$ 且 $a < 0$（則 $-a > 0$），故 $b - a = b + (-a) > 0$（為正數）。"
      },
      {
        step: "步驟 2：判斷 $y$ 坐標 $a^2 b$ 的正負",
        content: "因為 $a < 0 \\implies a^2 > 0$；又 $b > 0$，故兩正數相乘 $a^2 b > 0$（為正數）。"
      },
      {
        step: "步驟 3：確定象限",
        content: "點 $P$ 之坐標為 $(+, +)$，位於**第一象限**。"
      }
    ],
    links: [
      {
        title: "均一教育平台 · 直角坐標與象限判別",
        url: "https://www.junyiacademy.org/course-compare/math-jh/jh-m1b/jh-m1bch2/jh-m1bch2-1",
        desc: "複習直角坐標系四個象限的符號特徵與坐標代數判斷技巧。"
      }
    ]
  },
  {
    id: "fill-4",
    category: "fill",
    section: "填充題",
    number: "4",
    score: 4,
    earned: 0,
    status: "wrong",
    topic: "二次函數圖形平移",
    question: "將二次函數 $f(x) = (x - 3)^2 - 1$ 的圖形向右平移 2 單位，向下平移 3 單位，試求移動後的函數 $f(x)$。",
    studentAnswer: "(x - 1)^2 - 4",
    correctAnswer: "(x - 5)^2 - 4  或展開為  x^2 - 10x + 21",
    hasMistake: true,
    errorDiagnosis: {
      type: "圖形平移口訣代數混淆",
      summary: "向右平移在括號內應為「減 2」，卻誤寫成「加 2」！",
      details: "學生寫成 $(x - 3 + 2)^2 - 4 = (x - 1)^2 - 4$。這是非常普遍的盲點！平移口訣「左加右減」的意思是：向右平移 $h$ 單位時，是將原本的變數 $x$ 替換成 $(x - h)$。因此原式內的 $x$ 換成 $(x - 2)$，括號內會變成 $((x - 2) - 3) = (x - 5)$，而不是直接在 $-3$ 後面加 $2$！"
    },
    keyPoints: [
      "**左加右減的本質**：圖形向右平移 $h$，是以 $(x - h)$ 替換原函數中的所有 $x$；向左平移 $h$ 則替換為 $(x + h)$。",
      "**上加下減**：圖形向上平移 $k$，整體函數值 $+k$；向下平移 $k$，整體函數值 $-k$。",
      "**萬無一失的「頂點坐標法」**：\n  1. 原函數頂點 $V_1 = (3, -1)$。\n  2. 坐標直接移動：向右平移 2 單位（$x$ 坐標 $+2$），向下平移 3 單位（$y$ 坐標 $-3$）。\n  3. 新頂點 $V_2 = (3 + 2, -1 - 3) = (5, -4)$。\n  4. 開口方向與形狀不變（$a = 1$），直接寫出標準式：$f(x) = (x - 5)^2 - 4$！**用頂點坐標絕對不會搞混正負號！**"
    ],
    solutionSteps: [
      {
        step: "方法一：頂點平移法（最不易出錯，強烈推薦）",
        content: "1. 原拋物線 $y = (x - 3)^2 - 1$ 之頂點坐標為 $(3, -1)$。\n2. 向右平移 2 單位、向下平移 3 單位後，新頂點為：\n$$(3 + 2, -1 - 3) = (5, -4)$$\n3. 拋物線開口形狀不變（$a = 1$），故平移後函數為：\n$$f(x) = (x - 5)^2 - 4$$"
      },
      {
        step: "方法二：代數變數替換法",
        content: "1. 向右平移 2 單位 $\\implies x$ 替換為 $(x - 2)$。\n2. 向下平移 3 單位 $\\implies$ 全式減去 3。\n$$f(x) = ((x - 2) - 3)^2 - 1 - 3 = (x - 5)^2 - 4$$"
      }
    ],
    links: [
      {
        title: "GeoGebra · 拋物線平移互動探究模擬器",
        url: "https://www.geogebra.org/m/kcrv5kze",
        desc: "動手拖動滑桿體驗向右平移時頂點與公式中 (x - h) 的動態變化。"
      },
      {
        title: "均一教育平台 · 二次函數圖形的平移",
        url: "https://www.junyiacademy.org/course-compare/math-jh/jh-m3b/jh-m3bch1/jh-m3bch1-2",
        desc: "系統化學習二次函數 y = a(x - h)^2 + k 平移變化法則與避錯訣竅。"
      }
    ]
  },
  {
    id: "fill-5",
    category: "fill",
    section: "填充題",
    number: "5",
    score: 4,
    earned: 4,
    status: "correct",
    topic: "坐標幾何與點線距離",
    question: "坐標平面上 $A$ 點 $(-2, -5)$ 到 $x$ 軸距離為 $a$，到 $y$ 軸距離為 $b$，試求 $a$、$b$ 之值。",
    studentAnswer: "a = 5, b = 2",
    correctAnswer: "a = 5, b = 2",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "**點到坐標軸距離公式**：\n- 點 $P(x_0, y_0)$ 到 $x$ 軸距離為 $|y_0|$（鉛直距離，看 $y$ 坐標絕對值）。\n- 點 $P(x_0, y_0)$ 到 $y$ 軸距離為 $|x_0|$（水平距離，看 $x$ 坐標絕對值）。",
      "**距離必為非負值**：距離為幾何長度，永遠 $\\ge 0$，絕不能寫負數！"
    ],
    solutionSteps: [
      {
        step: "步驟 1：求到 $x$ 軸距離 $a$",
        content: "$$a = |y_A| = |-5| = 5$$"
      },
      {
        step: "步驟 2：求到 $y$ 軸距離 $b$",
        content: "$$b = |x_A| = |-2| = 2$$"
      },
      {
        step: "結論",
        content: "故 $a = 5, b = 2$。"
      }
    ],
    links: [
      {
        title: "均一教育平台 · 坐標平面上的距離概念",
        url: "https://www.junyiacademy.org/course-compare/math-jh/jh-m1b/jh-m1bch2/jh-m1bch2-2",
        desc: "圖解點到軸的垂直投影與幾何距離定義。"
      }
    ]
  },
  {
    id: "calc-1",
    category: "calc",
    section: "計算題",
    number: "1",
    score: 10,
    earned: 10,
    status: "correct",
    topic: "二次函數的極值與頂點配方",
    question: "試求下列二次函數的開口方向、頂點坐標、對稱軸及最大(小)值：$$y = -2x^2 + 4x + 1$$",
    studentAnswer: "① 頂點 (1, 3) ② 開口向下 ③ 最大值 = 3 ④ 對稱軸 x = 1",
    correctAnswer: "開口向下，頂點為 (1, 3)，對稱軸為直線 x = 1，當 x = 1 時有最大值 3",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "**配方法流程**：提出二次項係數 $\\implies$ 括號內補上一半的平方 $\\implies$ 括號外平衡常數。",
      "**頂點公式速算法**：頂點 $x = -\\frac{b}{2a} = -\\frac{4}{2(-2)} = 1$；將 $x = 1$ 代入得 $y = -2(1) + 4(1) + 1 = 3$。",
      "**極值判定**：$a < 0 \\implies$ 拋物線開口向下，頂點是最高點，有最大值（無最小值）。",
      "**對稱軸格式規範**：對稱軸是一條直線，必須寫成直線方程式 $x = h$（例如 $x = 1$），不可只寫數字 1。"
    ],
    solutionSteps: [
      {
        step: "步驟 1：配方化為標準式",
        content: "$$\\begin{aligned} y &= -2(x^2 - 2x) + 1 \\\\ &= -2(x^2 - 2x + 1^2) + 1 - (-2 \\times 1^2) \\\\ &= -2(x - 1)^2 + 1 + 2 \\\\ &= -2(x - 1)^2 + 3 \\end{aligned}$$"
      },
      {
        step: "步驟 2：各項幾何性質判斷",
        content: "1. **開口方向**：二次項係數 $a = -2 < 0$，開口**向下**。\n2. **頂點坐標**：由標準式可得頂點為 $(1, 3)$。\n3. **對稱軸**：通過頂點的鉛直線，方程式為 $x = 1$。\n4. **極值**：因開口向下，當 $x = 1$ 時有**最大值 3**。"
      }
    ],
    links: [
      {
        title: "均一教育平台 · 二次函數的配方法與極值",
        url: "https://www.junyiacademy.org/course-compare/math-jh/jh-m3b/jh-m3bch1/jh-m3bch1-3",
        desc: "全面掌握配方步驟與生活極值應用題型。"
      },
      {
        title: "GeoGebra · 二次函數各係數動態探究",
        url: "https://www.geogebra.org/m/mkvk62y3",
        desc: "拖曳 a, b, c 滑桿即時觀察開口、頂點與對稱軸移動軌跡。"
      }
    ]
  },
  {
    id: "calc-2",
    category: "calc",
    section: "計算題",
    number: "2",
    score: 10,
    earned: 10,
    status: "correct",
    topic: "判別式與圖形相交情形",
    question: "試判斷下列各二次函數的圖形與 $x$ 軸的相交情形：\n(1) $f(x) = x^2 - 3x + 5$\n(2) $f(x) = -x^2 + 6x - 9$",
    studentAnswer: "(1) D = -11 < 0，沒有相交\n(2) D = 0，相交一點",
    correctAnswer: "(1) 與 x 軸不相交（無交點）\n(2) 與 x 軸相交於一點（相切）",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "**判別式 $D = b^2 - 4ac$ 與 $x$ 軸交點關係**：\n- $D > 0 \\iff$ 與 $x$ 軸交於相異兩點（有兩相異實根）。\n- $D = 0 \\iff$ 與 $x$ 軸相切於一點（有一組重根）。\n- $D < 0 \\iff$ 與 $x$ 軸不相交（無實根）。",
      "求交點等價於令 $f(x) = 0$ 解一元二次方程式。"
    ],
    solutionSteps: [
      {
        step: "小題 (1) 求解過程",
        content: "函數 $f(x) = x^2 - 3x + 5$，係數 $a = 1, b = -3, c = 5$。\n$$D = b^2 - 4ac = (-3)^2 - 4(1)(5) = 9 - 20 = -11 < 0$$\n因為 $D < 0$，方程式 $f(x) = 0$ 無實數解，故圖形與 $x$ 軸**沒有相交（不相交）**。"
      },
      {
        step: "小題 (2) 求解過程",
        content: "函數 $f(x) = -x^2 + 6x - 9$，係數 $a = -1, b = 6, c = -9$。\n$$D = b^2 - 4ac = 6^2 - 4(-1)(-9) = 36 - 36 = 0$$\n因為 $D = 0$，方程式有重根，故圖形與 $x$ 軸**相交於一點（相切）**（切點為 $(3, 0)$）。"
      }
    ],
    links: [
      {
        title: "均一教育平台 · 判別式與二次函數圖形位置關係",
        url: "https://www.junyiacademy.org/course-compare/math-jh/jh-m3b/jh-m3bch1/jh-m3bch1-4",
        desc: "圖解 D > 0, D = 0, D < 0 與開口向上/向下的 6 種圖形相對位置。"
      }
    ]
  },
  {
    id: "calc-3",
    category: "calc",
    section: "計算題",
    number: "3",
    score: 10,
    earned: 10,
    status: "correct",
    topic: "絕對值不等式（小於型）",
    question: "求不等式 $|x + 3| \\le 2$ 的解。",
    studentAnswer: "-5 <= x <= -1",
    correctAnswer: "-5 <= x <= -1",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "**絕對值小於型公式**：若 $k > 0$，則 $|A| \\le k \\iff -k \\le A \\le k$（口訣：小於在中間）。",
      "**幾何距離意義**：$|x - (-3)| \\le 2$ 代表數線上 $x$ 到定點 $-3$ 的距離不超過 2 個單位，故 $x$ 落在 $[-3-2, -3+2] = [-5, -1]$。"
    ],
    solutionSteps: [
      {
        step: "步驟 1：去除絕對值化為雙重不等式",
        content: "$$|x + 3| \\le 2 \\iff -2 \\le x + 3 \\le 2$$"
      },
      {
        step: "步驟 2：各邊同時減去 3",
        content: "$$-2 - 3 \\le x \\le 2 - 3 \\implies -5 \\le x \\le -1$$"
      }
    ],
    links: [
      {
        title: "均一教育平台 · 絕對值方程式與不等式",
        url: "https://www.junyiacademy.org/course-compare/math-sh/sh-math-1/sh-math-1-1",
        desc: "以數線距離詮釋絕對值不等式，掌握雙向夾擠與區間表示法。"
      }
    ]
  },
  {
    id: "calc-4",
    category: "calc",
    section: "計算題",
    number: "4",
    score: 10,
    earned: 10,
    status: "correct",
    topic: "絕對值不等式（大於型）",
    question: "求不等式 $|2x - 5| > 3$ 的解。",
    studentAnswer: "x < 1 或 x > 4",
    correctAnswer: "x < 1 或 x > 4",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "**絕對值大於型公式**：若 $k > 0$，則 $|A| > k \\iff A > k \\text{ 或 } A < -k$（口訣：大於在兩邊）。",
      "**聯集表達**：解為兩段分開的區間，必須使用「或 (or)」連接，絕不可寫成 $4 < x < 1$ 的矛盾式。"
    ],
    solutionSteps: [
      {
        step: "步驟 1：依據性質拆解為兩分支",
        content: "$$|2x - 5| > 3 \\iff 2x - 5 > 3 \\quad \\text{或} \\quad 2x - 5 < -3$$"
      },
      {
        step: "步驟 2：分別求解一次不等式",
        content: "分支 1：$2x - 5 > 3 \\implies 2x > 8 \\implies x > 4$\n分支 2：$2x - 5 < -3 \\implies 2x < 2 \\implies x < 1$"
      },
      {
        step: "步驟 3：合併答案",
        content: "不等式之解為 $x < 1 \\text{ 或 } x > 4$。"
      }
    ],
    links: [
      {
        title: "Khan Academy · Solving Absolute Value Inequalities",
        url: "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:solve-equations-inequalities/x2f8bb11595b61c86:absolute-value-inequalities/v/absolute-value-inequalities",
        desc: "全方位解析絕對值大於與小於不等式的數線圖解與解法技巧。"
      }
    ]
  },
  {
    id: "calc-5",
    category: "calc",
    section: "計算題",
    number: "5",
    score: 10,
    earned: 10,
    status: "correct",
    topic: "解析幾何與三角形重心坐標",
    question: "已知 $\\triangle ABC$ 的三頂點為 $A(a, -5)$、$B(3, b)$、$C(4, -3)$，且 $\\triangle ABC$ 重心為 $(3, -1)$，試求 $a$、$b$ 之值。",
    studentAnswer: "a = 2, b = 5",
    correctAnswer: "a = 2, b = 5",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "**重心坐標公式**：若三頂點為 $(x_1, y_1), (x_2, y_2), (x_3, y_3)$，則重心 $G$ 為坐標的算術平均數：\n$$G = \\left(\\frac{x_1 + x_2 + x_3}{3}, \\frac{y_1 + y_2 + y_3}{3}\\right)$$",
      "**速算小技巧**：$x_1 + x_2 + x_3 = 3x_G$，$y_1 + y_2 + y_3 = 3y_G$。"
    ],
    solutionSteps: [
      {
        step: "步驟 1：列出重心坐標關係式",
        content: "$$G = \\left(\\frac{a + 3 + 4}{3}, \\frac{-5 + b + (-3)}{3}\\right) = (3, -1)$$"
      },
      {
        step: "步驟 2：解 $x$ 坐標求 $a$",
        content: "$$\\frac{a + 7}{3} = 3 \\implies a + 7 = 9 \\implies a = 2$$"
      },
      {
        step: "步驟 3：解 $y$ 坐標求 $b$",
        content: "$$\\frac{b - 8}{3} = -1 \\implies b - 8 = -3 \\implies b = 5$$"
      },
      {
        step: "結論",
        content: "故 $a = 2, b = 5$。"
      }
    ],
    links: [
      {
        title: "均一教育平台 · 三角形重心性質與坐標公式",
        url: "https://www.junyiacademy.org/course-compare/math-jh/jh-m3b/jh-m3bch3/jh-m3bch3-2",
        desc: "探討三角形三中線交點（重心）2:1 比例與坐標幾何推導。"
      }
    ]
  },
  {
    id: "calc-6",
    category: "calc",
    section: "計算題",
    number: "6",
    score: 10,
    earned: 10,
    status: "correct",
    topic: "圓的坐標性質（中點與兩點距離）",
    question: "設圓的直徑為 $\\overline{AB}$，且 $A(-3, 2)$、$B(0, 6)$，試求：\n(1) 圓心坐標\n(2) 直徑長",
    studentAnswer: "(1) (-3/2, 4)  (2) 5",
    correctAnswer: "(1) 圓心坐標 (-3/2, 4)  (2) 直徑長為 5",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "**圓心即直徑兩端點之中點**：$M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$。",
      "**兩點距離公式**：$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$。",
      "**畢氏常見三元數**：$\\Delta x = 3, \\Delta y = 4 \\implies$ 斜邊長度必為 $5$（$3-4-5$ 直角三角形）。"
    ],
    solutionSteps: [
      {
        step: "小題 (1) 求圓心坐標",
        content: "直徑兩端點為 $A(-3, 2)$ 與 $B(0, 6)$，圓心為線段 $\\overline{AB}$ 中點：\n$$O = \\left(\\frac{-3 + 0}{2}, \\frac{2 + 6}{2}\\right) = \\left(-\\frac{3}{2}, 4\\right)$$"
      },
      {
        step: "小題 (2) 求直徑長",
        content: "$$\\overline{AB} = \\sqrt{(0 - (-3))^2 + (6 - 2)^2} = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$$"
      }
    ],
    links: [
      {
        title: "均一教育平台 · 平面上兩點距離與中點坐標",
        url: "https://www.junyiacademy.org/course-compare/math-jh/jh-m1b/jh-m1bch2/jh-m1bch2-2",
        desc: "中點公式與畢氏定理在坐標平面上的綜合應用練習。"
      }
    ]
  },
  {
    id: "calc-7",
    category: "calc",
    section: "計算題",
    number: "7",
    score: 10,
    earned: 6,
    status: "wrong",
    topic: "一元二次不等式求解",
    question: "解一元二次不等式：$$2x^2 + 5x - 3 < 0$$",
    studentAnswer: "-1/2 < x < 3",
    correctAnswer: "-3 < x < 1/2",
    hasMistake: true,
    errorDiagnosis: {
      type: "方程式求根移項正負號相反（失分 4 分）",
      summary: "因式分解 $(2x - 1)(x + 3)$ 正確，但解兩根時正負號完全弄反！",
      details: "學生十字交乘非常正確，成功拆解為 $(2x - 1)(x + 3) < 0$。\n然而在找對應方程式的兩根時出現嚴重疏失：\n- 令 $2x - 1 = 0 \\implies 2x = 1 \\implies x = +\\frac{1}{2}$，學生卻誤寫為 $-\\frac{1}{2}$！\n- 令 $x + 3 = 0 \\implies x = -3$，學生卻誤寫為 $+3$！\n正負號弄反導致數線上的兩端點錯置，最終寫出了完全相反的區間 $-\\frac{1}{2} < x < 3$。"
    },
    keyPoints: [
      "**移項基本功**：$ax - b = 0 \\implies ax = +b \\implies x = +\\frac{b}{a}$；$x + c = 0 \\implies x = -c$。切忌憑直覺掃過！",
      "**一元二次不等式三部曲**：\n  1. 確保領導係數 $a > 0$（開口向上）。\n  2. 因式分解求兩根 $\\alpha < \\beta$（本題為 $-3 < \\frac{1}{2}$）。\n  3. 口訣：「小於取中間（$\\alpha < x < \\beta$），大於取兩邊（$x < \\alpha$ 或 $x > \\beta$）」。",
      "**圖形檢驗法**：拋物線開口向上，頂點在下方。小於 0 代表在 $x$ 軸下方的部分，必定是介於兩根之間。"
    ],
    solutionSteps: [
      {
        step: "步驟 1：十字交乘因式分解",
        content: "$$\\begin{array}{rcc}\n2x & \\searrow & -1 \\\\\nx & \\nearrow & +3\n\\end{array}$$\n交叉相乘：$(2x)(3) + (x)(-1) = 6x - x = 5x$。故不等式化為：\n$$(2x - 1)(x + 3) < 0$$"
      },
      {
        step: "步驟 2：嚴謹求出兩根（注意正負號！）",
        content: "令相應方程式等於 0：\n$$2x - 1 = 0 \\implies 2x = 1 \\implies x = \\frac{1}{2}$$\n$$x + 3 = 0 \\implies x = -3$$\n兩根為 $-3$ 與 $\\frac{1}{2}$，且明確知 $-3 < \\frac{1}{2}$。"
      },
      {
        step: "步驟 3：依不等號方向決定解區間",
        content: "拋物線 $y = 2x^2 + 5x - 3$ 開口向上，欲求 $< 0$（在 $x$ 軸下方）之部分，解應夾在兩根之間：\n$$-3 < x < \\frac{1}{2}$$"
      }
    ],
    links: [
      {
        title: "GeoGebra · 一元二次不等式圖像解析課件",
        url: "https://www.geogebra.org/m/e3jrmm9m",
        desc: "動態顯示二次曲線與 x 軸交點，清楚看見 f(x) < 0 的負值區域為何在兩根中間。"
      },
      {
        title: "均一教育平台 · 一元二次不等式的圖形解法",
        url: "https://www.junyiacademy.org/course-compare/math-sh/sh-math-1/sh-math-1-2",
        desc: "透過拋物線圖形掌握大於與小於不等式的區間解題思維。"
      },
      {
        title: "昌爸工作坊 · 一元二次不等式詳解與盲點總整理",
        url: "http://www.mathland.idv.tw/",
        desc: "台灣經典數學學習網站，整理高中各版本常見一元二次不等式考題。"
      }
    ]
  },
  {
    id: "calc-8",
    category: "calc",
    section: "計算題",
    number: "8",
    score: 10,
    earned: 10,
    status: "correct",
    topic: "解析幾何與平行四邊形性質",
    question: "設平行四邊形 $ABCD$，已知 $A(3, 4)$、$C(-1, -2)$、$D(2, 5)$，求 $B$ 點坐標。",
    studentAnswer: "B(0, -3)",
    correctAnswer: "B(0, -3)",
    hasMistake: false,
    errorDiagnosis: null,
    keyPoints: [
      "**對角線中點重合性質**：平行四邊形 $ABCD$ 兩對角線為 $\\overline{AC}$ 與 $\\overline{BD}$，兩者互相平分，中點相同：\n$$\\frac{A + C}{2} = \\frac{B + D}{2} \\implies A + C = B + D$$",
      "**求第四頂點速算絕招**：對角兩點相加，減去相鄰頂點！\n$$B = A + C - D$$",
      "頂點順序注意事項：題目指明為平行四邊形 $ABCD$，頂點依序環繞，因此對角線一定是 $AC$ 與 $BD$，不可配錯！"
    ],
    solutionSteps: [
      {
        step: "步驟 1：運用對角線中點性質建立等式",
        content: "平行四邊形 $ABCD$ 之對角線為 $\\overline{AC}$ 與 $\\overline{BD}$。因為對角線互相平分，故：\n$$\\frac{A + C}{2} = \\frac{B + D}{2} \\implies A + C = B + D$$"
      },
      {
        step: "步驟 2：移項解 $B$ 點坐標",
        content: "$$B = A + C - D$$"
      },
      {
        step: "步驟 3：分別代入 $x$ 與 $y$ 坐標計算",
        content: "$$x_B = x_A + x_C - x_D = 3 + (-1) - 2 = 0$$\n$$y_B = y_A + y_C - y_D = 4 + (-2) - 5 = -3$$"
      },
      {
        step: "結論",
        content: "故 $B$ 點坐標為 $(0, -3)$。"
      }
    ],
    links: [
      {
        title: "均一教育平台 · 平行四邊形性質與坐標應用",
        url: "https://www.junyiacademy.org/course-compare/math-jh/jh-m3a/jh-m3ach2/jh-m3ach2-1",
        desc: "詳解平行四邊形對角線平分性質與向量坐標計算技巧。"
      }
    ]
  }
];

// 匯出數據供 app.js 使用
window.examMetadata = examMetadata;
window.questionsData = questionsData;
window.mathExamMetadata = examMetadata;
window.mathQuestionsData = questionsData;

