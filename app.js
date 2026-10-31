// ==========================================================================
// 全科段考智能檢討系統 · 主程式 (Application Core Logic)
// 包含：多科切換、動態篩選、KaTeX數學公式排版、Canvas視覺化模擬、
// 錯題挑戰測驗、考卷原卷燈箱放大與旋轉檢視
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initNavigation();
  initOverview();
  initMathSection();
  initEnglishSection();
  initPhysicsSection();
  initChineseSection();
  initQuiz();
  initGallery();
  initModals();
  initPrint();

  // 初始觸發一次數學公式渲染
  triggerMathRender();
});

// --------------------------------------------------------------------------
// 1. 主題切換 (Theme Toggle)
// --------------------------------------------------------------------------
function initTheme() {
  const toggleBtn = document.getElementById("themeToggleBtn");
  const currentTheme = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon(currentTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const isDark = document.documentElement.getAttribute("data-theme") === "dark";
      const nextTheme = isDark ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", nextTheme);
      localStorage.setItem("theme", nextTheme);
      updateThemeIcon(nextTheme);

      // 重新繪製 canvas 以適配主題底色
      drawParabola();
      drawInequality();
    });
  }
}

function updateThemeIcon(theme) {
  const iconEl = document.getElementById("themeIcon");
  const textEl = document.getElementById("themeText");
  if (iconEl && textEl) {
    if (theme === "dark") {
      iconEl.textContent = "☀️";
      textEl.textContent = "亮色模式";
    } else {
      iconEl.textContent = "🌙";
      textEl.textContent = "暗色模式";
    }
  }
}

// --------------------------------------------------------------------------
// 2. 導航分頁切換機制 (Tab Navigation)
// --------------------------------------------------------------------------
let activeTab = "overview";

function initNavigation() {
  const tabButtons = document.querySelectorAll(".nav-tab-btn");
  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetTab = btn.getAttribute("data-tab");
      switchTab(targetTab);
    });
  });

  // 支援頁面內跨區快速跳轉按鈕 (e.g. data-jump="math")
  document.addEventListener("click", (e) => {
    const jumpBtn = e.target.closest("[data-jump]");
    if (jumpBtn) {
      const target = jumpBtn.getAttribute("data-jump");
      switchTab(target);
    }
  });
}

function switchTab(tabId) {
  activeTab = tabId;

  // 更新導航列按鈕樣式
  document.querySelectorAll(".nav-tab-btn").forEach((btn) => {
    if (btn.getAttribute("data-tab") === tabId) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // 切換視圖容器
  document.querySelectorAll(".view-panel").forEach((panel) => {
    panel.classList.remove("active");
  });

  const activePanel = document.getElementById(`panel-${tabId}`);
  if (activePanel) {
    activePanel.classList.add("active");
  }

  // 捲動至頂部
  window.scrollTo({ top: 0, behavior: "smooth" });

  // 觸發 KaTeX
  setTimeout(() => triggerMathRender(), 50);
}

// --------------------------------------------------------------------------
// 3. KaTeX 數學公式即時渲染輔助函數
// --------------------------------------------------------------------------
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
    setTimeout(() => triggerMathRender(el), 120);
  }
}

// --------------------------------------------------------------------------
// 4. 全科總覽儀表板渲染 (Overview Dashboard)
// --------------------------------------------------------------------------
function initOverview() {
  const data = window.summaryData;
  if (!data) return;

  // 渲染學生基本資訊
  const heroContainer = document.getElementById("overviewHero");
  if (heroContainer) {
    heroContainer.innerHTML = `
      <div class="student-hero-banner">
        <div class="hero-main-content">
          <div class="student-identity">
            <div class="avatar-circle">🎓</div>
            <div class="student-meta">
              <h2>${data.student.name} 同學 · 段考全科成績與檢討總和報告</h2>
              <div class="student-tags">
                <span class="tag-badge highlight">${data.student.school}</span>
                <span class="tag-badge">${data.student.class}</span>
                <span class="tag-badge">座號：${data.student.seat}</span>
                <span class="tag-badge highlight">${data.student.examName}</span>
              </div>
            </div>
          </div>

          <div class="hero-score-cards">
            <div class="stat-chip primary">
              <div class="stat-label">全科總分</div>
              <div class="stat-value">${data.student.totalScore}</div>
              <div class="stat-sub">滿分 ${data.student.maxScore || 400} 分</div>
            </div>
            <div class="stat-chip">
              <div class="stat-label">平均分數</div>
              <div class="stat-value">${data.student.averageScore}</div>
              <div class="stat-sub">全科平均</div>
            </div>
            <div class="stat-chip">
              <div class="stat-label">綜合答對率</div>
              <div class="stat-value">${data.student.overallAccuracy}</div>
              <div class="stat-sub">${data.student.correctItems}/${data.student.totalItems} 題正確</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // 渲染四科卡片網格 (數學、英文、物理、國文)
  const subjectGrid = document.getElementById("overviewSubjectGrid");
  if (subjectGrid) {
    subjectGrid.innerHTML = data.subjects
      .map(
        (subj) => `
      <div class="subject-card" style="border-top: 4px solid ${subj.accentColor};">
        <div class="subject-card-header">
          <div class="subj-info">
            <div class="subj-icon-box" style="background: ${subj.accentColor}22; color: ${subj.accentColor};">
              ${subj.icon}
            </div>
            <div>
              <h3>${subj.name}</h3>
              <p style="font-size: 0.8rem; color: var(--text-secondary);">${subj.totalQuestions} 道題目 · 答錯 ${subj.wrongCount} 處</p>
            </div>
          </div>
          <div class="subj-score-badge">
            <div class="score-num" style="color: ${subj.accentColor};">${subj.score}</div>
            <div class="score-total">/ 100 分</div>
          </div>
        </div>

        <div class="subj-progress-container">
          <div class="subj-progress-bar-bg">
            <div class="subj-progress-bar-fill" style="width: ${subj.score}%; background: ${subj.gradient};"></div>
          </div>
          <div class="subj-progress-meta">
            <span>答對率：${subj.accuracy}</span>
            <span>扣分：-${subj.deductions} 分</span>
          </div>
        </div>

        <p class="subject-card-p">${subj.summary}</p>

        <div class="subject-card-footer">
          <button class="jump-to-review-btn" data-jump="${subj.id}">
            <span>進入 ${subj.name} 逐題詳細檢討</span>
            <span>&rarr;</span>
          </button>
        </div>
      </div>
    `
      )
      .join("");
  }

  // 渲染考點掌握度條
  const masteryGrid = document.getElementById("masteryBarsGrid");
  if (masteryGrid) {
    masteryGrid.innerHTML = data.radarMetrics
      .map((item) => {
        const val = item.val !== undefined ? item.val : (item.math !== null ? item.math : item.english);
        let meterColor = "#10b981";
        let tagClass = "expert";
        if (val < 60) {
          meterColor = "#f43f5e";
          tagClass = "danger";
        } else if (val < 80) {
          meterColor = "#f59e0b";
          tagClass = "warn";
        } else if (val < 95) {
          meterColor = "#06b6d4";
          tagClass = "good";
        }

        const subjPrefix = item.subject
          ? `【${item.subject === "math" ? "數學" : item.subject === "english" ? "英文" : item.subject === "physics" ? "物理" : "國文"}】`
          : "";

        return `
        <div class="mastery-item">
          <div class="mastery-title-row">
            <span class="domain-name"><small style="color:var(--text-muted);">${subjPrefix}</small> ${item.label}</span>
            <span class="rating-tag ${tagClass}">${item.rating} (${val}%)</span>
          </div>
          <div class="mastery-meter-bg">
            <div class="mastery-meter-fill" style="width: ${val}%; background: ${meterColor};"></div>
          </div>
        </div>
      `;
      })
      .join("");
  }

  // 渲染跨科思維盲點
  const habitsGrid = document.getElementById("habitsGrid");
  if (habitsGrid) {
    habitsGrid.innerHTML = data.crossDiagnosis.habits
      .map(
        (h) => `
      <div class="habit-card">
        <div class="habit-icon">${h.icon}</div>
        <h4>${h.title}</h4>
        <p>${h.description}</p>
      </div>
    `
      )
      .join("");
  }

  // 渲染具體提分戰略
  const actionGrid = document.getElementById("actionPlansGrid");
  if (actionGrid) {
    actionGrid.innerHTML = data.crossDiagnosis.actionPlan
      .map(
        (p) => `
      <div class="plan-card ${p.subject.includes("數學") ? "math" : p.subject.includes("英文") ? "english" : p.subject.includes("物理") || p.subject.includes("自然") ? "physics" : p.subject.includes("國") ? "chinese" : ""}">
        <div class="plan-subject-tag">${p.subject}</div>
        <h4>${p.strategy}</h4>
        <div class="plan-content">${p.action}</div>
      </div>
    `
      )
      .join("");
  }
}

// --------------------------------------------------------------------------
// 5. 數學科檢討模組 (Mathematics Exam Module)
// --------------------------------------------------------------------------
let mathFilter = "all";
let mathSearch = "";

function initMathSection() {
  renderMathQuestions("all", "");

  // 數學篩選按鈕
  document.querySelectorAll("#mathFilterPills .filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#mathFilterPills .filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      mathFilter = btn.getAttribute("data-filter");
      renderMathQuestions(mathFilter, mathSearch);
    });
  });

  // 數學搜尋
  const searchInput = document.getElementById("mathSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      mathSearch = e.target.value.trim();
      renderMathQuestions(mathFilter, mathSearch);
    });
  }
}

function renderMathQuestions(filter = "all", query = "") {
  const container = document.getElementById("mathQuestionsList");
  if (!container) return;

  const questions = window.mathQuestionsData || window.questionsData || [];
  const filtered = questions.filter((q) => {
    if (filter === "wrong" && q.status !== "wrong") return false;
    if (filter === "correct" && q.status !== "correct") return false;

    if (query !== "") {
      const fullText = `${q.section} ${q.number} ${q.topic} ${q.question} ${q.studentAnswer} ${q.correctAnswer}`.toLowerCase();
      if (!fullText.includes(query.toLowerCase())) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 50px 20px; color: var(--text-muted); background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border-light);">
        <p style="font-size: 1.1rem; font-weight: 700; margin-bottom: 6px;">沒有找到符合篩選條件的數學題目</p>
        <p style="font-size: 0.85rem;">請嘗試變更搜尋關鍵字或點選「全部題目」</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map((q) => createMathCardHTML(q)).join("");
  triggerMathRender(container);
}

function createMathCardHTML(q) {
  const isWrong = q.status === "wrong";
  const statusBadge = isWrong
    ? `<span class="status-badge wrong">🚨 需訂正 (扣 ${q.score - q.earned} 分)</span>`
    : `<span class="status-badge correct">✅ 答對滿分 (+${q.score} 分)</span>`;

  // 錯題診斷
  let errorHTML = "";
  if (isWrong && q.errorDiagnosis) {
    errorHTML = `
      <div class="highlight-box danger">
        <div class="highlight-box-title">
          <span>🚨</span> 我寫錯在哪裡？（盲點深度診斷）
        </div>
        <p style="font-weight: 700; margin-bottom: 4px;">${q.errorDiagnosis.summary}</p>
        <p style="font-size: 0.88rem; opacity: 0.95;">${q.errorDiagnosis.details}</p>
      </div>
    `;
  }

  // 觀念重點
  const keyPointsHTML =
    q.keyPoints && q.keyPoints.length > 0
      ? `
      <div class="highlight-box keypoints">
        <div class="highlight-box-title" style="color: #a5b4fc;">
          <span>💡</span> 本題考點核心與防粗心法則
        </div>
        <ul class="keypoints-list">
          ${q.keyPoints.map((pt) => `<li>${formatMarkdownMath(pt)}</li>`).join("")}
        </ul>
      </div>
    `
      : "";

  // 步驟解析
  const stepsHTML =
    q.solutionSteps && q.solutionSteps.length > 0
      ? `
      <div class="steps-container">
        <button class="steps-toggle-btn" onclick="toggleSteps(this)">
          <span>📝 展開詳細運算與推導過程 (${q.solutionSteps.length} 步驟)</span>
          <span class="toggle-icon">▼</span>
        </button>
        <div class="steps-list" style="display: block;">
          ${q.solutionSteps
            .map(
              (s) => `
            <div class="step-row">
              <div class="step-label">${s.step}</div>
              <div class="step-body">${formatMarkdownMath(s.content)}</div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `
      : "";

  // 推薦學習連結
  const linksHTML =
    q.links && q.links.length > 0
      ? `
      <div class="links-section">
        <span style="font-size: 0.82rem; font-weight: 700; color: var(--text-muted); display: flex; align-items: center; gap: 4px;">
          🔗 延伸影音資源：
        </span>
        ${q.links
          .map(
            (link) => `
          <a class="rec-link-pill" href="${link.url}" target="_blank" rel="noopener" title="${link.desc}">
            <span>${link.title}</span>
            <span style="font-size: 0.75rem; opacity: 0.7;">↗</span>
          </a>
        `
          )
          .join("")}
      </div>
    `
      : "";

  return `
    <div class="question-card ${isWrong ? "status-wrong" : "status-correct"}" id="math-${q.id}">
      <div class="q-card-header">
        <div class="q-meta-badges">
          <span class="q-id-badge">${q.section} 第 ${q.number} 題</span>
          <span class="q-type-badge">${q.topic}</span>
        </div>
        <div>${statusBadge}</div>
      </div>

      <div class="q-card-body">
        <div class="q-title-box">${q.question}</div>

        <div class="answer-comparison-box">
          <div class="ans-column student-ans ${isWrong ? "has-error" : ""}">
            <div class="ans-header">
              <span>${isWrong ? "❌" : "✓"}</span> 周姸汝的作答
            </div>
            <div class="ans-content">${q.studentAnswer}</div>
          </div>

          <div class="ans-column correct-ans">
            <div class="ans-header">
              <span>✓</span> 標準正確答案
            </div>
            <div class="ans-content">${q.correctAnswer}</div>
          </div>
        </div>

        ${errorHTML}
        ${keyPointsHTML}
        ${stepsHTML}
        ${linksHTML}
      </div>
    </div>
  `;
}

// --------------------------------------------------------------------------
// 6. 英語文檢討模組 (English Exam Module)
// --------------------------------------------------------------------------
let engStatusFilter = "all";
let engSectionFilter = "all";
let engSearch = "";

function initEnglishSection() {
  renderEnglishQuestions("all", "all", "");

  // 狀態篩選按鈕 (全部 / 錯題 / 答對)
  document.querySelectorAll("#engStatusFilterPills .filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#engStatusFilterPills .filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      engStatusFilter = btn.getAttribute("data-filter");
      renderEnglishQuestions(engStatusFilter, engSectionFilter, engSearch);
    });
  });

  // 大題分段篩選按鈕
  document.querySelectorAll("#engSectionPills .filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#engSectionPills .filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      engSectionFilter = btn.getAttribute("data-section");
      renderEnglishQuestions(engStatusFilter, engSectionFilter, engSearch);
    });
  });

  // 英文搜尋
  const searchInput = document.getElementById("engSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      engSearch = e.target.value.trim();
      renderEnglishQuestions(engStatusFilter, engSectionFilter, engSearch);
    });
  }
}

function renderEnglishQuestions(status = "all", section = "all", query = "") {
  const container = document.getElementById("engQuestionsList");
  if (!container) return;

  const questions = window.englishQuestionsData || [];
  const filtered = questions.filter((q) => {
    // 狀態篩選
    if (status === "wrong" && q.status !== "wrong") return false;
    if (status === "correct" && q.status !== "correct") return false;

    // 大題篩選
    if (section !== "all") {
      if (section === "vocab" && q.category !== "vocab") return false;
      if (section === "choice" && q.category !== "choice") return false;
      if (section === "match" && q.category !== "match") return false;
      if (section === "dict" && q.category !== "dict") return false;
      if (section === "trans" && q.category !== "trans") return false;
      if (section === "dial" && q.category !== "dial") return false;
      if (section === "read" && q.category !== "read") return false;
    }

    // 關鍵字搜尋
    if (query !== "") {
      const full = `${q.section} ${q.number} ${q.topic} ${q.question} ${q.studentAnswer} ${q.correctAnswer} ${q.options || ""}`.toLowerCase();
      if (!full.includes(query.toLowerCase())) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 50px 20px; color: var(--text-muted); background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border-light);">
        <p style="font-size: 1.1rem; font-weight: 700; margin-bottom: 6px;">沒有找到符合篩選條件的英文題目</p>
        <p style="font-size: 0.85rem;">請嘗試變更大題標籤或點選「全部題目」</p>
      </div>
    `;
    return;
  }

  // 若當前包含閱讀大題，在頂部顯示閱讀短文對照卡片
  let readingCardHTML = "";
  if ((section === "all" || section === "read") && window.englishReadingPassage) {
    const passage = window.englishReadingPassage;
    readingCardHTML = `
      <div class="english-reading-card">
        <div class="section-head">
          <h3>
            <span>📚</span>
            ${passage.title} · 課文段落英漢對譯與文化核心
          </h3>
          <span class="tag-badge highlight">七、閱讀測驗精讀區</span>
        </div>
        <div class="passage-grid">
          <div class="passage-col english-side">
            <div class="passage-col-title">
              <span>🇺🇸</span> 英文原文 (Original Passage)
            </div>
            <p>${passage.originalText}</p>
          </div>
          <div class="passage-col">
            <div class="passage-col-title">
              <span>🇹🇼</span> 中文逐句全譯 (Translation)
            </div>
            <p>${passage.chineseTranslation}</p>
          </div>
        </div>
        <div class="highlight-box keypoints" style="margin-top: 14px;">
          <div class="highlight-box-title" style="color: #fbbf24;">
            <span>💡</span> 亡靈節文化哲思與答題考點提煉
          </div>
          <ul class="keypoints-list">
            ${passage.culturalNotes.map((note) => `<li>${formatMarkdownMath(note)}</li>`).join("")}
          </ul>
        </div>
      </div>
    `;
  }

  container.innerHTML = readingCardHTML + filtered.map((q) => createEnglishCardHTML(q)).join("");
}

function createEnglishCardHTML(q) {
  const isWrong = q.status === "wrong";
  const statusBadge = isWrong
    ? `<span class="status-badge wrong">🚨 需訂正 (扣 ${q.score - q.earned} 分)</span>`
    : `<span class="status-badge correct">✅ 答對滿分 (+${q.score} 分)</span>`;

  // 錯題診斷
  let errorHTML = "";
  if (isWrong && q.errorDiagnosis) {
    errorHTML = `
      <div class="highlight-box danger">
        <div class="highlight-box-title">
          <span>🚨</span> 我寫錯在哪裡？（盲點深度診斷）
        </div>
        <p style="font-weight: 700; margin-bottom: 4px;">【${q.errorDiagnosis.type}】${q.errorDiagnosis.summary}</p>
        <p style="font-size: 0.88rem; opacity: 0.95;">${q.errorDiagnosis.details}</p>
      </div>
    `;
  }

  // 考點重點
  const keyPointsHTML =
    q.keyPoints && q.keyPoints.length > 0
      ? `
      <div class="highlight-box keypoints">
        <div class="highlight-box-title" style="color: #fbbf24;">
          <span>💡</span> 本題文法重點與破題秘笈
        </div>
        <ul class="keypoints-list">
          ${q.keyPoints.map((pt) => `<li>${formatMarkdownMath(pt)}</li>`).join("")}
        </ul>
      </div>
    `
      : "";

  // 解答步驟
  const stepsHTML =
    q.solutionSteps && q.solutionSteps.length > 0
      ? `
      <div class="steps-container">
        <button class="steps-toggle-btn" onclick="toggleSteps(this)">
          <span>📝 展開解題思考邏輯與步驟剖析 (${q.solutionSteps.length} 步驟)</span>
          <span class="toggle-icon">▼</span>
        </button>
        <div class="steps-list" style="display: block;">
          ${q.solutionSteps
            .map(
              (s) => `
            <div class="step-row" style="border-left-color: var(--accent-english);">
              <div class="step-label" style="color: #fde68a;">${s.step}</div>
              <div class="step-body">${formatMarkdownMath(s.content)}</div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `
      : "";

  // 選項區塊 (若為選擇題)
  const optionsHTML = q.options
    ? `
      <div style="background: var(--bg-card-subtle); padding: 12px 16px; border-radius: var(--radius-md); font-size: 0.88rem; margin-bottom: 16px; border: 1px solid var(--border-light); color: var(--text-secondary); line-height: 1.6;">
        <strong style="color: var(--text-main); display: block; margin-bottom: 4px;">選填選項庫：</strong>
        ${q.options}
      </div>
    `
    : "";

  return `
    <div class="question-card ${isWrong ? "status-wrong" : "status-correct"}" id="eng-${q.id}">
      <div class="q-card-header">
        <div class="q-meta-badges">
          <span class="q-id-badge" style="border-color: rgba(245, 158, 11, 0.3);">${q.section} 第 ${q.number} 題</span>
          <span class="q-type-badge" style="background: rgba(245, 158, 11, 0.15); color: #fde68a;">${q.topic}</span>
        </div>
        <div>${statusBadge}</div>
      </div>

      <div class="q-card-body">
        <div class="q-title-box">${q.question}</div>
        ${optionsHTML}

        <div class="answer-comparison-box">
          <div class="ans-column student-ans ${isWrong ? "has-error" : ""}">
            <div class="ans-header">
              <span>${isWrong ? "❌" : "✓"}</span> 周姸汝的填答
            </div>
            <div class="ans-content">${q.studentAnswer}</div>
          </div>

          <div class="ans-column correct-ans">
            <div class="ans-header">
              <span>✓</span> 標準正確答案
            </div>
            <div class="ans-content">${q.correctAnswer}</div>
          </div>
        </div>

        ${errorHTML}
        ${keyPointsHTML}
        ${stepsHTML}
      </div>
    </div>
  `;
}

// --------------------------------------------------------------------------
// 6.5. 自然（物理）檢討模組 (Physics Exam Module - 92分)
// --------------------------------------------------------------------------
let phyStatusFilter = "all";
let phySectionFilter = "all";
let phySearch = "";

function initPhysicsSection() {
  renderPhysicsQuestions("all", "all", "");

  // 物理狀態篩選按鈕 (全部/錯題/答對)
  document.querySelectorAll("#phyStatusFilterPills .filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#phyStatusFilterPills .filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      phyStatusFilter = btn.getAttribute("data-filter");
      renderPhysicsQuestions(phyStatusFilter, phySectionFilter, phySearch);
    });
  });

  // 物理大題篩選 (全部/選擇題/填充題)
  document.querySelectorAll("#phySectionPills .filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#phySectionPills .filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      phySectionFilter = btn.getAttribute("data-section");
      renderPhysicsQuestions(phyStatusFilter, phySectionFilter, phySearch);
    });
  });

  // 物理關鍵字搜尋
  const searchInput = document.getElementById("phySearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      phySearch = e.target.value.trim();
      renderPhysicsQuestions(phyStatusFilter, phySectionFilter, phySearch);
    });
  }
}

function renderPhysicsQuestions(status = "all", section = "all", query = "") {
  const container = document.getElementById("phyQuestionsList");
  if (!container) return;

  const questions = window.physicsQuestionsData || [];
  const filtered = questions.filter((q) => {
    // 狀態篩選
    if (status === "wrong" && q.status !== "wrong") return false;
    if (status === "correct" && q.status !== "correct") return false;

    // 大題篩選
    if (section !== "all") {
      if (section === "choice" && q.category !== "choice") return false;
      if (section === "fillin" && q.category !== "fillin") return false;
    }

    // 關鍵字搜尋
    if (query !== "") {
      const full = `${q.section} ${q.number} ${q.topic} ${q.question} ${q.studentAnswer} ${q.correctAnswer}`.toLowerCase();
      if (!full.includes(query.toLowerCase())) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 50px 20px; color: var(--text-muted); background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border-light);">
        <p style="font-size: 1.1rem; font-weight: 700; margin-bottom: 6px;">沒有找到符合篩選條件的物理題目</p>
        <p style="font-size: 0.85rem;">請嘗試變更搜尋關鍵字或點選「全部題目」</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map((q) => createPhysicsCardHTML(q)).join("");
  triggerMathRender(container);
}

function createPhysicsCardHTML(q) {
  const isWrong = q.status === "wrong";
  const statusBadge = isWrong
    ? `<span class="status-badge wrong">🚨 需訂正 (扣 ${q.score - q.earned} 分)</span>`
    : `<span class="status-badge correct">✅ 答對滿分 (+${q.score} 分)</span>`;

  // 錯題診斷
  let errorHTML = "";
  if (isWrong && q.errorDiagnosis) {
    errorHTML = `
      <div class="highlight-box danger">
        <div class="highlight-box-title">
          <span>🚨</span> 我寫錯在哪裡？（物理觀念盲點剖析）
        </div>
        <p style="font-weight: 700; margin-bottom: 4px;">【${q.errorDiagnosis.type}】${q.errorDiagnosis.summary}</p>
        <p style="font-size: 0.88rem; opacity: 0.95;">${q.errorDiagnosis.details}</p>
      </div>
    `;
  }

  // 核心考點
  const keyPointsHTML =
    q.keyPoints && q.keyPoints.length > 0
      ? `
      <div class="highlight-box keypoints">
        <div class="highlight-box-title" style="color: #34d399;">
          <span>💡</span> 物理核心觀念與定義秘笈
        </div>
        <ul class="keypoints-list">
          ${q.keyPoints.map((pt) => `<li>${formatMarkdownMath(pt)}</li>`).join("")}
        </ul>
      </div>
    `
      : "";

  // 解答步驟
  const stepsHTML =
    q.solutionSteps && q.solutionSteps.length > 0
      ? `
      <div class="steps-container">
        <button class="steps-toggle-btn" onclick="toggleSteps(this)">
          <span>📝 展開公式推導與解題邏輯剖析 (${q.solutionSteps.length} 步驟)</span>
          <span class="toggle-icon">▼</span>
        </button>
        <div class="steps-list" style="display: block;">
          ${q.solutionSteps
            .map(
              (s) => `
            <div class="step-row" style="border-left-color: var(--accent-physics);">
              <div class="step-label" style="color: #6ee7b7;">${s.step}</div>
              <div class="step-body">${formatMarkdownMath(s.content)}</div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `
      : "";

  return `
    <div class="question-card ${isWrong ? "status-wrong" : "status-correct"}" id="phy-${q.id}">
      <div class="q-card-header">
        <div class="q-meta-badges">
          <span class="q-id-badge" style="border-color: rgba(16, 185, 129, 0.4);">${q.section} 第 ${q.number} 題</span>
          <span class="q-type-badge" style="background: rgba(16, 185, 129, 0.15); color: #6ee7b7;">${q.topic}</span>
        </div>
        <div>${statusBadge}</div>
      </div>

      <div class="q-card-body">
        <div class="q-title-box" style="white-space: pre-line;">${formatMarkdownMath(q.question)}</div>

        <div class="answer-comparison-box">
          <div class="ans-column student-ans ${isWrong ? "has-error" : ""}">
            <div class="ans-header">
              <span>${isWrong ? "❌" : "✓"}</span> 周姸汝的填答
            </div>
            <div class="ans-content">${q.studentAnswer}</div>
          </div>

          <div class="ans-column correct-ans">
            <div class="ans-header">
              <span>✓</span> 標準正確答案
            </div>
            <div class="ans-content">${q.correctAnswer}</div>
          </div>
        </div>

        ${errorHTML}
        ${keyPointsHTML}
        ${stepsHTML}
      </div>
    </div>
  `;
}

// --------------------------------------------------------------------------
// 6.8. 國語文檢討模組 (Chinese Exam Module - 86分)
// --------------------------------------------------------------------------
let chiStatusFilter = "all";
let chiSectionFilter = "all";
let chiSearch = "";

function initChineseSection() {
  renderChineseQuestions("all", "all", "");

  // 國文狀態篩選按鈕 (全部/錯題/答對)
  document.querySelectorAll("#chiStatusFilterPills .filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#chiStatusFilterPills .filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      chiStatusFilter = btn.getAttribute("data-filter");
      renderChineseQuestions(chiStatusFilter, chiSectionFilter, chiSearch);
    });
  });

  // 國文單元篩選 (全部/vocab/rhet/classic/xiang/modern)
  document.querySelectorAll("#chiSectionPills .filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#chiSectionPills .filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      chiSectionFilter = btn.getAttribute("data-section");
      renderChineseQuestions(chiStatusFilter, chiSectionFilter, chiSearch);
    });
  });

  // 國文關鍵字搜尋
  const searchInput = document.getElementById("chiSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      chiSearch = e.target.value.trim();
      renderChineseQuestions(chiStatusFilter, chiSectionFilter, chiSearch);
    });
  }
}

function renderChineseQuestions(status = "all", section = "all", query = "") {
  const container = document.getElementById("chiQuestionsList");
  if (!container) return;

  const questions = window.chineseQuestionsData || [];
  const filtered = questions.filter((q) => {
    // 狀態篩選
    if (status === "wrong" && q.status !== "wrong") return false;
    if (status === "correct" && q.status !== "correct") return false;

    // 單元篩選
    if (section !== "all") {
      if (section === "vocab" && q.category !== "vocab") return false;
      if (section === "rhet" && q.category !== "rhet") return false;
      if (section === "classic" && q.category !== "classic") return false;
      if (section === "xiang" && q.category !== "xiang") return false;
      if (section === "modern" && q.category !== "modern") return false;
    }

    // 關鍵字搜尋
    if (query !== "") {
      const full = `${q.section} ${q.number} ${q.topic} ${q.question} ${q.studentAnswer} ${q.correctAnswer}`.toLowerCase();
      if (!full.includes(query.toLowerCase())) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 50px 20px; color: var(--text-muted); background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border-light);">
        <p style="font-size: 1.1rem; font-weight: 700; margin-bottom: 6px;">沒有找到符合篩選條件的國文題目</p>
        <p style="font-size: 0.85rem;">請嘗試變更搜尋關鍵字或點選「全部題目」</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map((q) => createChineseCardHTML(q)).join("");
  triggerMathRender(container);
}

function createChineseCardHTML(q) {
  const isWrong = q.status === "wrong";
  const statusBadge = isWrong
    ? `<span class="status-badge wrong">🚨 需訂正 (扣 ${q.score - q.earned} 分)</span>`
    : `<span class="status-badge correct">✅ 答對滿分 (+${q.score} 分)</span>`;

  // 錯題診斷
  let errorHTML = "";
  if (isWrong && q.errorDiagnosis) {
    errorHTML = `
      <div class="highlight-box danger">
        <div class="highlight-box-title">
          <span>🚨</span> 我寫錯在哪裡？（國文思維盲點診斷）
        </div>
        <p style="font-weight: 700; margin-bottom: 4px;">【${q.errorDiagnosis.type}】${q.errorDiagnosis.summary}</p>
        <p style="font-size: 0.88rem; opacity: 0.95;">${q.errorDiagnosis.details}</p>
      </div>
    `;
  }

  // 國文文意重點與修辭考點
  const keyPointsHTML =
    q.keyPoints && q.keyPoints.length > 0
      ? `
      <div class="highlight-box keypoints">
        <div class="highlight-box-title" style="color: #c084fc;">
          <span>💡</span> 國學常識、修辭與句讀核心要點
        </div>
        <ul class="keypoints-list">
          ${q.keyPoints.map((pt) => `<li>${formatMarkdownMath(pt)}</li>`).join("")}
        </ul>
      </div>
    `
      : "";

  // 步驟解析
  const stepsHTML =
    q.solutionSteps && q.solutionSteps.length > 0
      ? `
      <div class="steps-container">
        <button class="steps-toggle-btn" onclick="toggleSteps(this)">
          <span>📝 展開文言詞義解析與解題思維 (${q.solutionSteps.length} 步驟)</span>
          <span class="toggle-icon">▼</span>
        </button>
        <div class="steps-list" style="display: block;">
          ${q.solutionSteps
            .map(
              (s) => `
            <div class="step-row" style="border-left-color: var(--accent-chinese);">
              <div class="step-label" style="color: #d8b4fe;">${s.step}</div>
              <div class="step-body">${formatMarkdownMath(s.content)}</div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `
      : "";

  return `
    <div class="question-card ${isWrong ? "status-wrong" : "status-correct"}" id="chi-${q.id}">
      <div class="q-card-header">
        <div class="q-meta-badges">
          <span class="q-id-badge" style="border-color: rgba(139, 92, 246, 0.4);">${q.section} 第 ${q.number} 題</span>
          <span class="q-type-badge" style="background: rgba(139, 92, 246, 0.15); color: #d8b4fe;">${q.topic}</span>
        </div>
        <div>${statusBadge}</div>
      </div>

      <div class="q-card-body">
        <div class="q-title-box" style="white-space: pre-line;">${formatMarkdownMath(q.question)}</div>

        <div class="answer-comparison-box">
          <div class="ans-column student-ans ${isWrong ? "has-error" : ""}">
            <div class="ans-header">
              <span>${isWrong ? "❌" : "✓"}</span> 周姸汝的填答
            </div>
            <div class="ans-content">${q.studentAnswer}</div>
          </div>

          <div class="ans-column correct-ans">
            <div class="ans-header">
              <span>✓</span> 標準正確答案
            </div>
            <div class="ans-content">${q.correctAnswer}</div>
          </div>
        </div>

        ${errorHTML}
        ${keyPointsHTML}
        ${stepsHTML}
      </div>
    </div>
  `;
}

// --------------------------------------------------------------------------
// 7. 錯題加強特訓測驗 (Retest Quiz)
// --------------------------------------------------------------------------
let quizCorrectCount = 0;
let quizAnsweredCount = 0;

function initQuiz() {
  const container = document.getElementById("quizContainer");
  if (!container) return;

  const questions = window.summaryData.combinedQuizQuestions || [];
  quizCorrectCount = 0;
  quizAnsweredCount = 0;

  container.innerHTML = `
    <div class="quiz-header-card">
      <div>
        <h3 style="font-size: 1.35rem; font-weight: 800; margin-bottom: 6px;">
          🎯 全科核心錯題鞏固 · ${questions.length} 道精選變形題挑戰
        </h3>
        <p style="font-size: 0.9rem; color: var(--text-secondary);">
          精準鎖定數學（平移、不等式）、英文（單字、片語、對話、閱讀主旨）、物理（光年單位、絕對零度、萬有引力、強核力）與國文（倒裝句、成語修辭、精神勝利法）失分盲點，立即隨堂測驗！
        </p>
      </div>
      <div class="quiz-score-meter">
        <span style="font-size: 0.88rem; color: var(--text-secondary); font-weight: 600;">挑戰成果：</span>
        <strong id="quizScoreText" style="font-size: 1.4rem; color: var(--accent-emerald); font-family: 'Outfit';">0 / ${questions.length}</strong>
      </div>
    </div>

    <div class="quiz-cards-list">
      ${questions
        .map(
          (q, qIdx) => `
        <div class="quiz-card" id="quiz-card-${qIdx}">
          <span class="quiz-subj-badge">${q.badge}</span>
          <div class="quiz-q-title">${formatMarkdownMath(q.title)}</div>
          <div class="quiz-options-grid" id="quiz-opts-${qIdx}">
            ${q.options
              .map(
                (opt, optIdx) => `
              <button class="quiz-opt-btn" onclick="handleQuizOptionClick(${qIdx}, ${optIdx})">
                <span>${opt.text}</span>
              </button>
            `
              )
              .join("")}
          </div>
          <div class="quiz-feedback" id="quiz-feedback-${qIdx}"></div>
        </div>
      `
        )
        .join("")}
    </div>
  `;

  triggerMathRender(container);
}

window.handleQuizOptionClick = function (qIdx, optIdx) {
  const questions = window.summaryData.combinedQuizQuestions || [];
  const qData = questions[qIdx];
  const selectedOpt = qData.options[optIdx];
  const optsContainer = document.getElementById(`quiz-opts-${qIdx}`);
  const feedbackEl = document.getElementById(`quiz-feedback-${qIdx}`);

  if (!optsContainer || !feedbackEl) return;

  // 停用該題所有按鈕，避免重複作答
  const buttons = optsContainer.querySelectorAll(".quiz-opt-btn");
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (qData.options[i].isCorrect) {
      btn.classList.add("correct");
    } else if (i === optIdx) {
      btn.classList.add("wrong");
    }
  });

  if (selectedOpt.isCorrect) {
    quizCorrectCount++;
  }
  quizAnsweredCount++;

  const scoreText = document.getElementById("quizScoreText");
  if (scoreText) {
    scoreText.textContent = `${quizCorrectCount} / ${questions.length}`;
  }

  feedbackEl.className = `quiz-feedback show ${selectedOpt.isCorrect ? "success" : "fail"}`;
  feedbackEl.innerHTML = `
    <strong>${selectedOpt.isCorrect ? "🎉 太棒了，完全答對！" : "❌ 還差一點點："}</strong> ${selectedOpt.note}
  `;
};

// --------------------------------------------------------------------------
// 8. 考卷原卷與答案卡照片圖庫 (Original Exam Gallery)
// --------------------------------------------------------------------------
function initGallery() {
  const container = document.getElementById("galleryGrid");
  if (!container) return;

  const galleries = window.summaryData.examGalleries || [];
  container.innerHTML = galleries
    .map(
      (item) => `
    <div class="gallery-card">
      <div class="gallery-thumb-wrapper" onclick="openLightbox('${item.id}')">
        <img src="${item.image}" alt="${item.title}" loading="lazy">
        <span class="gallery-badge">${item.badge}</span>
        <div class="gallery-overlay-hint">
          <span>🔍 點擊開啟全螢幕原卷檢視與批改對照</span>
        </div>
      </div>
      <div class="gallery-card-body">
        <h3>${item.title}</h3>
        <p>${item.subtitle}</p>
        <div class="gallery-annotations">
          ${item.annotations
            .map(
              (ann) => `
            <div class="annotation-tag">
              <strong>${ann.label}</strong>
              <span>${ann.text}</span>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    </div>
  `
    )
    .join("");
}

// 燈箱檢視器狀態
let currentLightboxRotation = 0;
let currentLightboxImgUrl = "";

window.openLightbox = function (galleryId) {
  const galleries = window.summaryData.examGalleries || [];
  const item = galleries.find((g) => g.id === galleryId);
  if (!item) return;

  const modal = document.getElementById("lightboxModal");
  const titleEl = document.getElementById("lightboxTitle");
  const imgEl = document.getElementById("lightboxImg");

  currentLightboxImgUrl = item.image;
  currentLightboxRotation = 0;

  if (titleEl) titleEl.textContent = item.title;
  if (imgEl) {
    imgEl.src = item.image;
    imgEl.style.transform = `rotate(0deg)`;
  }

  if (modal) modal.classList.add("active");
};

window.rotateLightbox = function (delta) {
  const imgEl = document.getElementById("lightboxImg");
  if (!imgEl) return;
  currentLightboxRotation = (currentLightboxRotation + delta) % 360;
  imgEl.style.transform = `rotate(${currentLightboxRotation}deg)`;
};

// --------------------------------------------------------------------------
// 9. 模態彈窗通用控制 (Modals & Visualizers)
// --------------------------------------------------------------------------
function initModals() {
  // 關閉按鈕事件
  document.querySelectorAll("[data-close]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const modalId = btn.getAttribute("data-close");
      const modal = document.getElementById(modalId);
      if (modal) modal.classList.remove("active");
    });
  });

  // 點擊遮罩關閉
  document.querySelectorAll(".modal-overlay").forEach((overlay) => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.classList.remove("active");
      }
    });
  });

  // 快捷按鈕開啟模態彈窗
  document.getElementById("openParabolaTool")?.addEventListener("click", () => {
    document.getElementById("parabolaModal")?.classList.add("active");
    drawParabola();
  });

  document.getElementById("openInequalityTool")?.addEventListener("click", () => {
    document.getElementById("inequalityModal")?.classList.add("active");
    drawInequality();
  });

  setupParabolaCanvas();
}

// --------------------------------------------------------------------------
// 10. 拋物線平移互動模擬器 (Canvas Visualizer)
// --------------------------------------------------------------------------
let parabolaH = 2; // 向右平移 2
let parabolaK = -3; // 向下平移 3

function setupParabolaCanvas() {
  const sliderH = document.getElementById("sliderH");
  const sliderK = document.getElementById("sliderK");

  if (sliderH && sliderK) {
    sliderH.addEventListener("input", (e) => {
      parabolaH = parseInt(e.target.value, 10);
      const label = document.getElementById("hVal");
      if (label) label.textContent = (parabolaH >= 0 ? "+" : "") + parabolaH + " 單位";
      updateParabolaEquation();
      drawParabola();
    });

    sliderK.addEventListener("input", (e) => {
      parabolaK = parseInt(e.target.value, 10);
      const label = document.getElementById("kVal");
      if (label) label.textContent = (parabolaK >= 0 ? "+" : "") + parabolaK + " 單位";
      updateParabolaEquation();
      drawParabola();
    });
  }
}

function updateParabolaEquation() {
  const eqText = document.getElementById("currentFormulaText");
  if (!eqText) return;
  const newVx = 3 + parabolaH;
  const newVy = -1 + parabolaK;
  eqText.textContent = `當前移動後: f(x) = (x - ${newVx})² ${newVy >= 0 ? "+ " + newVy : "- " + Math.abs(newVy)}，頂點 (${newVx}, ${newVy})`;
}

function drawParabola() {
  const canvas = document.getElementById("parabolaCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;

  const isDark = document.documentElement.getAttribute("data-theme") !== "light";
  ctx.fillStyle = isDark ? "#090d16" : "#ffffff";
  ctx.fillRect(0, 0, width, height);

  // 繪製坐標系
  const originX = width / 2;
  const originY = (height / 2) + 60;
  const scale = 26; // 每個單位 26px

  ctx.strokeStyle = isDark ? "#1e293b" : "#e2e8f0";
  ctx.lineWidth = 1;

  // 網格線
  for (let x = originX % scale; x < width; x += scale) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
  for (let y = originY % scale; y < height; y += scale) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }

  // 主坐標軸
  ctx.strokeStyle = isDark ? "#475569" : "#94a3b8";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(20, originY);
  ctx.lineTo(width - 20, originY);
  ctx.moveTo(originX, 20);
  ctx.lineTo(originX, height - 20);
  ctx.stroke();

  // 輔助座標轉換
  const toScreenX = (x) => originX + x * scale;
  const toScreenY = (y) => originY - y * scale;

  // 繪製函數的輔助函式
  const plotCurve = (vx, vy, color, lineWidth = 2, isDashed = false) => {
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    if (isDashed) ctx.setLineDash([5, 5]);
    else ctx.setLineDash([]);

    ctx.beginPath();
    for (let px = 20; px <= width - 20; px += 2) {
      const mathX = (px - originX) / scale;
      const mathY = Math.pow(mathX - vx, 2) + vy;
      const py = toScreenY(mathY);
      if (px === 20) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.stroke();
    ctx.setLineDash([]);

    // 繪製頂點圓點
    const sx = toScreenX(vx);
    const sy = toScreenY(vy);
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(sx, sy, 5, 0, Math.PI * 2);
    ctx.fill();
  };

  // 1. 原始圖形: (x - 3)^2 - 1，頂點 (3, -1) [天藍色]
  plotCurve(3, -1, "#38bdf8", 2.5);

  // 2. 正確平移後: (x - (3 + h))^2 + (-1 + k) [翠綠色]
  const targetVx = 3 + parabolaH;
  const targetVy = -1 + parabolaK;
  plotCurve(targetVx, targetVy, "#10b981", 3.5);

  // 3. 學生誤答圖形: (x - 1)^2 - 4，頂點 (1, -4) [紅色虛線]
  plotCurve(1, -4, "#f43f5e", 2, true);
}

// --------------------------------------------------------------------------
// 11. 一元二次不等式圖形解析器 (Canvas Visualizer)
// --------------------------------------------------------------------------
function drawInequality() {
  const canvas = document.getElementById("inequalityCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;

  const isDark = document.documentElement.getAttribute("data-theme") !== "light";
  ctx.fillStyle = isDark ? "#090d16" : "#ffffff";
  ctx.fillRect(0, 0, width, height);

  const originX = width / 2;
  const originY = height / 2;
  const scaleX = 50;
  const scaleY = 16;

  // 坐標軸
  ctx.strokeStyle = isDark ? "#475569" : "#94a3b8";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(30, originY);
  ctx.lineTo(width - 30, originY); // x 軸
  ctx.moveTo(originX, 30);
  ctx.lineTo(originX, height - 30); // y 軸
  ctx.stroke();

  const toScreenX = (x) => originX + x * scaleX;
  const toScreenY = (y) => originY - y * scaleY;
  const f = (x) => 2 * x * x + 5 * x - 3;

  // 陰影填充：y < 0 區域 (x 軸下方)
  ctx.fillStyle = isDark ? "rgba(16, 185, 129, 0.2)" : "rgba(16, 185, 129, 0.25)";
  ctx.beginPath();
  ctx.moveTo(toScreenX(-3), originY);
  for (let x = -3; x <= 0.5; x += 0.05) {
    ctx.lineTo(toScreenX(x), toScreenY(f(x)));
  }
  ctx.lineTo(toScreenX(0.5), originY);
  ctx.closePath();
  ctx.fill();

  // 拋物線
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

  // 標註兩根 (-3, 0) 與 (0.5, 0)
  const drawPt = (rx, label, color) => {
    const sx = toScreenX(rx);
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(sx, originY, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = isDark ? "#ffffff" : "#0f172a";
    ctx.font = "bold 13px Outfit, sans-serif";
    ctx.fillText(label, sx - 16, originY + 24);
  };

  drawPt(-3, "x = -3", "#10b981");
  drawPt(0.5, "x = 1/2", "#10b981");

  // 說明字
  ctx.fillStyle = "#10b981";
  ctx.font = "bold 14px 'Noto Sans TC', sans-serif";
  ctx.fillText("y < 0 區間（拋物線在 x 軸下方）：-3 < x < 1/2", originX - 160, originY - 60);
}

// --------------------------------------------------------------------------
// 12. 步驟展開切換 (Accordion Helper)
// --------------------------------------------------------------------------
window.toggleSteps = function (btn) {
  const list = btn.nextElementSibling;
  const icon = btn.querySelector(".toggle-icon");
  if (!list) return;

  if (list.style.display === "none") {
    list.style.display = "block";
    if (icon) icon.textContent = "▼";
  } else {
    list.style.display = "none";
    if (icon) icon.textContent = "►";
  }
};

// --------------------------------------------------------------------------
// 13. 列印支援 (Print)
// --------------------------------------------------------------------------
function initPrint() {
  document.getElementById("printBtn")?.addEventListener("click", () => {
    window.print();
  });
}

// --------------------------------------------------------------------------
// 輔助格式化 (Markdown Bold 轉 HTML)
// --------------------------------------------------------------------------
function formatMarkdownMath(text) {
  if (!text) return "";
  return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
}
