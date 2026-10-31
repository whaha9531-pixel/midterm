// ==========================================================================
// 考卷智能檢討系統 · 主程式 (Application Logic)
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderQuestions("all");
  setupFilters();
  setupSearch();
  setupModals();
  setupParabolaCanvas();
  setupInequalityCanvas();
  setupQuiz();
  setupPrint();
});

// --------------------------------------------------------------------------
// 1. 主題切換 (Theme Toggle)
// --------------------------------------------------------------------------
function initTheme() {
  const toggleBtn = document.getElementById("themeToggleBtn");
  const currentTheme = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", currentTheme);

  toggleBtn.addEventListener("click", () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    const nextTheme = isDark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
    // 重新繪製 canvas 以適應亮暗底色
    drawParabola();
    drawInequality();
  });
}

// --------------------------------------------------------------------------
// 2. 題目卡片動態渲染 (Render Question Cards)
// --------------------------------------------------------------------------
let currentFilter = "all";
let currentSearch = "";

function renderQuestions(filter = "all", searchQuery = "") {
  const container = document.getElementById("questionsList");
  if (!container) return;

  const filtered = window.questionsData.filter((q) => {
    // 狀態篩選
    if (filter === "wrong" && q.status !== "wrong") return false;
    if (filter === "correct" && q.status !== "correct") return false;

    // 搜尋關鍵字
    if (searchQuery.trim() !== "") {
      const qText = `${q.section} ${q.number} ${q.topic} ${q.question} ${q.studentAnswer} ${q.correctAnswer}`.toLowerCase();
      if (!qText.includes(searchQuery.toLowerCase())) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 60px 20px; color: var(--text-muted); background: var(--bg-card-glass); border-radius: var(--radius-lg); border: 1px solid var(--border-light);">
        <p style="font-size: 1.2rem; font-weight: 600; margin-bottom: 8px;">沒有找到符合條件的題目</p>
        <p style="font-size: 0.9rem;">請嘗試變更搜尋關鍵字或清除篩選條件</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map((q) => createQuestionCardHTML(q)).join("");

  // 觸發 KaTeX 渲染數學公式
  triggerMathRender(container);
}

function triggerMathRender(el = document.body) {
  if (window.renderMathInElement) {
    window.renderMathInElement(el, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false }
      ],
      throwOnError: false
    });
  } else {
    // 若 CDN 載入稍有延遲，每 100ms 重試直到載入完成
    setTimeout(() => triggerMathRender(el), 100);
  }
}

function createQuestionCardHTML(q) {
  const isWrong = q.status === "wrong";
  const badgeClass = q.category === "fill" ? "fill" : "calc";
  const statusBadge = isWrong
    ? `<span class="status-badge wrong">🚨 需訂正 (扣 ${q.score - q.earned} 分)</span>`
    : `<span class="status-badge correct">✅ 答對滿分 (+${q.score} 分)</span>`;

  // 【我寫錯在哪】區塊
  let errorHTML = "";
  if (isWrong && q.errorDiagnosis) {
    errorHTML = `
      <div class="error-analysis-box">
        <div class="error-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          🚨 我寫錯在哪？盲點深度剖析（${q.errorDiagnosis.type}）
        </div>
        <div class="error-summary">${q.errorDiagnosis.summary}</div>
        <div class="error-details">${q.errorDiagnosis.details.replace(/\n/g, "<br>")}</div>
      </div>
    `;
  }

  // 【重點精華】區塊
  const keyPointsHTML = `
    <div class="key-points-box">
      <div class="key-points-title">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="16" x2="12" y2="12"/>
          <line x1="12" y1="8" x2="12.01" y2="8"/>
        </svg>
        💡 本題核心觀念與解題技巧
      </div>
      <ul class="key-points-list">
        ${q.keyPoints.map((pt) => `<li>${formatMarkdownBold(pt)}</li>`).join("")}
      </ul>
    </div>
  `;

  // 【檢討與步驟詳解】區塊
  const stepsHTML = `
    <div class="solution-section">
      <div class="solution-title">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="9 11 12 14 22 4"/>
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
        </svg>
        📝 考卷檢討 · 完整步驟分解
      </div>
      <div class="solution-steps">
        ${q.solutionSteps
          .map(
            (s) => `
          <div class="solution-step">
            <div class="step-label">${s.step}</div>
            <div class="step-content">${s.content.replace(/\n/g, "<br>")}</div>
          </div>
        `
          )
          .join("")}
      </div>
    </div>
  `;

  // 【推薦學習網址】清單
  const linksHTML = `
    <div class="links-section">
      <div class="links-title">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
        </svg>
        🌐 推薦學習資源與延伸網址
      </div>
      <div class="links-grid">
        ${q.links
          .map(
            (link) => `
          <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="learn-link-card" title="在新分頁開啟 ${link.title}">
            <div class="link-icon">↗</div>
            <div class="link-texts">
              <h4>${link.title}</h4>
              <p>${link.desc}</p>
            </div>
          </a>
        `
          )
          .join("")}
      </div>
    </div>
  `;

  return `
    <article class="question-card status-${q.status}" id="card-${q.id}">
      <div class="q-header">
        <div class="q-meta">
          <span class="q-badge ${badgeClass}">${q.section} 第 ${q.number} 題</span>
          <span class="q-topic">單元：${q.topic}</span>
        </div>
        <div class="q-score-tag">
          <span class="q-score-points">配分 ${q.score} 分 / 得分 ${q.earned} 分</span>
          ${statusBadge}
        </div>
      </div>

      <div class="q-body">
        <div class="q-title">${q.question.replace(/\n/g, "<br>")}</div>
      </div>

      <div class="answers-comparison">
        <div class="ans-box student ${isWrong ? "is-wrong" : ""}">
          <div class="ans-header">
            ${isWrong ? "❌ 你的作答（卷面錯誤）" : "✅ 你的作答（卷面答對）"}
          </div>
          <div class="ans-content">${q.studentAnswer}</div>
        </div>
        <div class="ans-box correct">
          <div class="ans-header">
            🎯 標準正確解答
          </div>
          <div class="ans-content">${q.correctAnswer}</div>
        </div>
      </div>

      ${errorHTML}
      ${keyPointsHTML}
      ${stepsHTML}
      ${linksHTML}
    </article>
  `;
}

function formatMarkdownBold(text) {
  return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
}

// --------------------------------------------------------------------------
// 3. 篩選與搜尋 (Filter & Search)
// --------------------------------------------------------------------------
function setupFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.getAttribute("data-filter");
      renderQuestions(currentFilter, currentSearch);
    });
  });
}

function setupSearch() {
  const searchInput = document.getElementById("searchInput");
  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    currentSearch = e.target.value;
    renderQuestions(currentFilter, currentSearch);
  });
}

// --------------------------------------------------------------------------
// 4. 模態彈窗 (Modals Management)
// --------------------------------------------------------------------------
function setupModals() {
  // 開啟彈窗
  document.getElementById("openParabolaTool")?.addEventListener("click", () => {
    openModal("parabolaModal");
    drawParabola();
  });

  document.getElementById("openInequalityTool")?.addEventListener("click", () => {
    openModal("inequalityModal");
    drawInequality();
  });

  document.getElementById("openRetestTool")?.addEventListener("click", () => {
    openModal("retestModal");
  });

  // 關閉彈窗
  document.querySelectorAll("[data-close]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const modalId = btn.getAttribute("data-close");
      closeModal(modalId);
    });
  });

  document.querySelectorAll(".modal-overlay").forEach((overlay) => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.classList.remove("active");
      }
    });
  });
}

function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add("active");
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove("active");
  }
}

// --------------------------------------------------------------------------
// 5. 拋物線平移互動模擬器 (Parabola Canvas)
// --------------------------------------------------------------------------
let parabolaState = {
  h: 2, // 向右平移 2
  k: -3 // 向下平移 3
};

function setupParabolaCanvas() {
  const sliderH = document.getElementById("sliderH");
  const sliderK = document.getElementById("sliderK");
  const hVal = document.getElementById("hVal");
  const kVal = document.getElementById("kVal");

  if (!sliderH || !sliderK) return;

  const update = () => {
    parabolaState.h = parseInt(sliderH.value, 10);
    parabolaState.k = parseInt(sliderK.value, 10);

    hVal.textContent = (parabolaState.h >= 0 ? `+${parabolaState.h}` : parabolaState.h) + " 單位";
    kVal.textContent = (parabolaState.k >= 0 ? `+${parabolaState.k}` : parabolaState.k) + " 單位";

    const newH = 3 + parabolaState.h;
    const newK = -1 + parabolaState.k;
    const formulaText = document.getElementById("currentFormulaText");
    if (formulaText) {
      formulaText.textContent = `當前移動後: f(x) = (x - ${newH})² ${newK >= 0 ? "+ " + newK : "- " + Math.abs(newK)}，頂點 (${newH}, ${newK})`;
    }

    drawParabola();
  };

  sliderH.addEventListener("input", update);
  sliderK.addEventListener("input", update);
}

function drawParabola() {
  const canvas = document.getElementById("parabolaCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;

  // 清空畫布
  ctx.clearRect(0, 0, width, height);

  // 坐標系統映射：中心原點 (0, 0)
  const originX = width / 2 - 40;
  const originY = height / 2 + 60;
  const scale = 26; // 1 單位 = 26px

  const toScreenX = (x) => originX + x * scale;
  const toScreenY = (y) => originY - y * scale;

  // 1. 繪製坐標網格與軸線
  ctx.strokeStyle = "#1e293b";
  ctx.lineWidth = 1;
  ctx.beginPath();
  for (let x = -10; x <= 15; x++) {
    ctx.moveTo(toScreenX(x), 0);
    ctx.lineTo(toScreenX(x), height);
  }
  for (let y = -8; y <= 10; y++) {
    ctx.moveTo(0, toScreenY(y));
    ctx.lineTo(width, toScreenY(y));
  }
  ctx.stroke();

  // 主軸 (X, Y 軸)
  ctx.strokeStyle = "#475569";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  // X 軸
  ctx.moveTo(0, originY);
  ctx.lineTo(width, originY);
  // Y 軸
  ctx.moveTo(originX, 0);
  ctx.lineTo(originX, height);
  ctx.stroke();

  // 軸標籤
  ctx.fillStyle = "#94a3b8";
  ctx.font = "12px Outfit, sans-serif";
  ctx.fillText("x", width - 20, originY - 8);
  ctx.fillText("y", originX + 8, 20);
  ctx.fillText("O", originX - 14, originY + 16);

  // 輔助繪圖函式
  const plotCurve = (func, color, isDashed = false, lineWidth = 2.5) => {
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    if (isDashed) ctx.setLineDash([6, 6]);
    ctx.beginPath();
    let started = false;
    for (let px = 0; px <= width; px += 2) {
      const x = (px - originX) / scale;
      const y = func(x);
      const py = toScreenY(y);
      if (!started) {
        ctx.moveTo(px, py);
        started = true;
      } else {
        ctx.lineTo(px, py);
      }
    }
    ctx.stroke();
    ctx.restore();
  };

  // 繪製頂點圓點與標籤
  const drawVertex = (vx, vy, color, label) => {
    const sx = toScreenX(vx);
    const sy = toScreenY(vy);
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(sx, sy, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 12px Outfit, sans-serif";
    ctx.fillText(`${label} (${vx}, ${vy})`, sx + 10, sy - 6);
  };

  // A. 原始拋物線: f(x) = (x - 3)^2 - 1
  plotCurve((x) => Math.pow(x - 3, 2) - 1, "#38bdf8", true, 2);
  drawVertex(3, -1, "#38bdf8", "原頂點");

  // B. 學生誤答拋物線: (x - 1)^2 - 4 (頂點在 1, -4)
  plotCurve((x) => Math.pow(x - 1, 2) - 4, "#f43f5e", true, 1.8);
  drawVertex(1, -4, "#f43f5e", "你的誤答");

  // C. 目標動態平移拋物線: f(x) = (x - (3+h))^2 + (-1+k)
  const targetH = 3 + parabolaState.h;
  const targetK = -1 + parabolaState.k;
  plotCurve((x) => Math.pow(x - targetH, 2) + targetK, "#10b981", false, 3);
  drawVertex(targetH, targetK, "#10b981", "目前移動");
}

// --------------------------------------------------------------------------
// 6. 一元二次不等式圖像模擬器 (Inequality Canvas)
// --------------------------------------------------------------------------
function setupInequalityCanvas() {
  // 自動在 openModal 時調用 drawInequality
}

function drawInequality() {
  const canvas = document.getElementById("inequalityCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;

  ctx.clearRect(0, 0, width, height);

  const originX = width / 2;
  const originY = height / 2 + 40;
  const scaleX = 45; // X軸放大
  const scaleY = 16; // Y軸縮小

  const toScreenX = (x) => originX + x * scaleX;
  const toScreenY = (y) => originY - y * scaleY;

  // 1. 軸線
  ctx.strokeStyle = "#475569";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  // X 軸
  ctx.moveTo(20, originY);
  ctx.lineTo(width - 20, originY);
  // Y 軸
  ctx.moveTo(originX, 20);
  ctx.lineTo(originX, height - 20);
  ctx.stroke();

  // 軸標籤
  ctx.fillStyle = "#94a3b8";
  ctx.font = "12px Outfit, sans-serif";
  ctx.fillText("x", width - 20, originY - 10);
  ctx.fillText("y", originX + 8, 30);

  // 2. 拋物線 y = 2x^2 + 5x - 3
  const f = (x) => 2 * x * x + 5 * x - 3;

  // 著色：y < 0 的負值區域 (在 -3 到 0.5 之間)
  ctx.fillStyle = "rgba(16, 185, 129, 0.2)";
  ctx.beginPath();
  ctx.moveTo(toScreenX(-3), originY);
  for (let px = toScreenX(-3); px <= toScreenX(0.5); px += 2) {
    const x = (px - originX) / scaleX;
    const y = f(x);
    ctx.lineTo(px, toScreenY(y));
  }
  ctx.lineTo(toScreenX(0.5), originY);
  ctx.closePath();
  ctx.fill();

  // 繪製拋物線主線條
  ctx.strokeStyle = "#6366f1";
  ctx.lineWidth = 3;
  ctx.beginPath();
  for (let px = 20; px <= width - 20; px += 2) {
    const x = (px - originX) / scaleX;
    const y = f(x);
    const py = toScreenY(y);
    if (px === 20) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.stroke();

  // 標記正解兩根 (-3, 0) 與 (0.5, 0)
  const drawRoot = (rx, label, color) => {
    const sx = toScreenX(rx);
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(sx, originY, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 13px Outfit, sans-serif";
    ctx.fillText(label, sx - 16, originY + 24);
  };

  drawRoot(-3, "x = -3", "#10b981");
  drawRoot(0.5, "x = 1/2", "#10b981");

  // 標記學生誤認的兩根 (-0.5 與 3) 虛線記號
  const drawWrongRoot = (rx, label) => {
    const sx = toScreenX(rx);
    ctx.strokeStyle = "#f43f5e";
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(sx, originY - 30);
    ctx.lineTo(sx, originY + 30);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = "#f43f5e";
    ctx.font = "bold 11px Outfit, sans-serif";
    ctx.fillText(label, sx - 18, originY - 36);
  };

  drawWrongRoot(-0.5, "誤看: -1/2");
  drawWrongRoot(3, "誤看: 3");

  // 說明文字
  ctx.fillStyle = "#10b981";
  ctx.font = "bold 14px 'Noto Sans TC', sans-serif";
  ctx.fillText("y < 0 區域（拋物線在 x 軸下方）：-3 < x < 1/2", originX - 160, originY - 50);
}

// --------------------------------------------------------------------------
// 7. 錯題加強測驗挑戰 (Retest Quiz)
// --------------------------------------------------------------------------
const quizQuestions = [
  {
    title: "【挑戰 1 · 十字交乘符號強化】因式分解多項式：$x^2 - 9x + 20$",
    options: [
      { text: "(x + 4)(x - 5)", isCorrect: false, note: "乘積為 (+4) × (-5) = -20，與題目 +20 符號相反！" },
      { text: "(x - 4)(x - 5)", isCorrect: true, note: "完全正確！乘積 (-4) × (-5) = +20，相加 (-4) + (-5) = -9。" },
      { text: "(x - 2)(x - 10)", isCorrect: false, note: "乘積 (+20) 對了，但相加 (-2) + (-10) = -12 ≠ -9。" },
      { text: "(x + 2)(x - 10)", isCorrect: false, note: "相加為 -8，乘積為 -20，皆不符合！" }
    ]
  },
  {
    title: "【挑戰 2 · 圖形平移方向強化】將二次函數 $f(x) = (x - 2)^2 + 3$ 的圖形「向右平移 3 單位，向下平移 2 單位」，移動後函數為何？",
    options: [
      { text: "f(x) = (x + 1)^2 + 1", isCorrect: false, note: "向右平移誤用加法！向右 3 應將 x 代換為 (x - 3)。" },
      { text: "f(x) = (x - 5)^2 + 1", isCorrect: true, note: "太棒了！頂點 (2, 3) 移至 (2+3, 3-2) = (5, 1)，式子為 (x - 5)^2 + 1。" },
      { text: "f(x) = (x - 5)^2 + 5", isCorrect: false, note: "向下平移 2 單位應為 3 - 2 = 1，不可寫成 3 + 2 = 5。" },
      { text: "f(x) = (x - 1)^2 + 1", isCorrect: false, note: "平移代換計算錯誤。" }
    ]
  },
  {
    title: "【挑戰 3 · 一元二次不等式強化】解一元二次不等式：$2x^2 - 7x + 3 < 0$",
    options: [
      { text: "x < 1/2 或 x > 3", isCorrect: false, note: "小於 0 應該夾在兩根中間，大於 0 才是兩邊！" },
      { text: "-1/2 < x < 3", isCorrect: false, note: "2x - 1 = 0 的根為 x = +1/2，不是 -1/2！" },
      { text: "1/2 < x < 3", isCorrect: true, note: "完全正確！因式分解為 (2x - 1)(x - 3) < 0，兩根為 1/2 與 3，小於取中間！" },
      { text: "-3 < x < -1/2", isCorrect: false, note: "兩根正負號皆計算錯誤。" }
    ]
  }
];

let quizScore = 0;

function setupQuiz() {
  const container = document.getElementById("quizContainer");
  if (!container) return;

  renderQuizUI(container);
}

function renderQuizUI(container) {
  quizScore = 0;
  container.innerHTML = `
    <div style="margin-bottom: 20px;">
      <p style="font-size: 0.95rem; color: var(--text-secondary);">
        這 3 道題目精準對應你本次段考失分的 3 個核心盲點。請點擊選項作答，答對後即代表你已徹底克服這 3 處失誤！
      </p>
    </div>
    <div class="quiz-list">
      ${quizQuestions
        .map(
          (q, qIndex) => `
        <div class="quiz-card" style="background: var(--bg-card-subtle); padding: 20px; border-radius: var(--radius-md); border: 1px solid var(--border-color); margin-bottom: 20px;">
          <div class="quiz-q-title">${q.title}</div>
          <div class="quiz-options" id="quiz-opts-${qIndex}">
            ${q.options
              .map(
                (opt, optIndex) => `
              <button class="quiz-opt-btn" onclick="handleQuizAnswer(${qIndex}, ${optIndex})">
                <span>${opt.text}</span>
              </button>
            `
              )
              .join("")}
          </div>
          <div class="quiz-feedback" id="quiz-feedback-${qIndex}"></div>
        </div>
      `
        )
        .join("")}
    </div>
  `;

  // KaTeX 渲染
  triggerMathRender(container);
}

window.handleQuizAnswer = function (qIndex, optIndex) {
  const qData = quizQuestions[qIndex];
  const selectedOpt = qData.options[optIndex];
  const optsContainer = document.getElementById(`quiz-opts-${qIndex}`);
  const feedbackEl = document.getElementById(`quiz-feedback-${qIndex}`);

  const buttons = optsContainer.querySelectorAll(".quiz-opt-btn");
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (qData.options[i].isCorrect) {
      btn.classList.add("correct");
    } else if (i === optIndex) {
      btn.classList.add("wrong");
    }
  });

  feedbackEl.className = `quiz-feedback show ${selectedOpt.isCorrect ? "success" : "fail"}`;
  feedbackEl.innerHTML = `
    <strong>${selectedOpt.isCorrect ? "🎉 答對了！" : "❌ 還差一點："}</strong> ${selectedOpt.note}
  `;
};

// --------------------------------------------------------------------------
// 8. 列印功能 (Print Trigger)
// --------------------------------------------------------------------------
function setupPrint() {
  document.getElementById("printBtn")?.addEventListener("click", () => {
    window.print();
  });
}
