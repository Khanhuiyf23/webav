// ============================================================
// GRAMMAR.JS — 14 Grammar Topics, TOC, Expand/Collapse, Mini Quiz
// ============================================================

let activeQuiz = null;
let quizState = {
  topic: null,
  questions: [],
  current: 0,
  score: 0,
  answered: false
};

document.addEventListener('DOMContentLoaded', function () {
  renderTOC();
  renderGrammarTopics();
  updateTOCProgress();

  // Handle anchor links
  const hash = window.location.hash;
  if (hash) {
    const topicId = parseInt(hash.replace('#topic-', ''));
    if (topicId) {
      setTimeout(() => expandTopic(topicId), 200);
    }
  }
});

// ---- TABLE OF CONTENTS ----
function renderTOC() {
  const tocList = document.getElementById('tocList');
  if (!tocList) return;

  tocList.innerHTML = GRAMMAR_TOPICS.map(topic => `
    <li>
      <a class="toc-item ${isDoneGrammar(topic.id) ? 'done' : ''}"
         href="#gram-topic-${topic.id}"
         onclick="expandTopic(${topic.id}); event.preventDefault();"
         id="toc-${topic.id}">
        <span class="toc-num">${isDoneGrammar(topic.id) ? '✓' : topic.id}</span>
        <span class="toc-label">${topic.title}</span>
      </a>
    </li>
  `).join('');
}

function isDoneGrammar(topicId) {
  const status = userProgress[`grammar_${topicId}`];
  return status && status.status === 2;
}

function updateTOCProgress() {
  const done = GRAMMAR_TOPICS.filter(t => isDoneGrammar(t.id)).length;
  const progressFill = document.getElementById('tocProgressFill');
  const progressText = document.getElementById('tocProgressText');
  if (progressFill) progressFill.style.width = `${(done / 14) * 100}%`;
  if (progressText) progressText.textContent = `${done} / 14`;
}

function setActiveToc(topicId) {
  document.querySelectorAll('.toc-item').forEach(el => el.classList.remove('active'));
  const tocItem = document.getElementById(`toc-${topicId}`);
  if (tocItem) tocItem.classList.add('active');
}

// ---- GRAMMAR TOPICS RENDER ----
function renderGrammarTopics() {
  const container = document.getElementById('grammarTopicsList');
  if (!container) return;

  container.innerHTML = `<div class="grammar-topics-overview">
    ${GRAMMAR_TOPICS.map(topic => renderTopicCard(topic)).join('')}
  </div>`;
}

function renderTopicCard(topic) {
  const done = isDoneGrammar(topic.id);
  return `
    <div class="grammar-topic-card" id="gram-topic-${topic.id}">
      <div class="gtc-header" onclick="toggleTopic(${topic.id})">
        <div class="gtc-number" style="background: linear-gradient(135deg, ${topic.color}22, ${topic.color}11); border-color:${topic.color}44; color:${topic.color};">
          ${topic.emoji}
        </div>
        <div class="gtc-info">
          <div class="gtc-title">${topic.id}. ${topic.title}</div>
          <div class="gtc-english">${topic.english}</div>
        </div>
        <div class="gtc-meta">
          <span class="gtc-quiz-count">📝 ${topic.quizCount} câu quiz</span>
          ${done ? `<span class="gtc-done-badge" style="display:inline-flex;">Hoàn thành</span>` : ''}
        </div>
        <div class="gtc-expand-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
      </div>

      <div class="gtc-body">
        <!-- Formula -->
        <div class="formula-box">
          <span class="formula-label">Công thức</span>
          <div class="formula-text">
            ${topic.formulas.map(f => `<code>${f}</code>`).join('')}
          </div>
        </div>

        <!-- Explanation -->
        <div class="topic-section">
          <div class="topic-section-title">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            Giải thích
          </div>
          <p style="font-size:0.9rem; color:var(--text-secondary); line-height:1.7;">${topic.explanation}</p>
        </div>

        <!-- Tips -->
        <div class="topic-section section-tip">
          <div class="topic-section-title">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0018 8 6 6 0 006 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 019 14"/></svg>
            Dấu hiệu nhận biết & Mẹo thi
          </div>
          <div class="tip-box">
            <ul>${topic.tips.map(t => `<li>${t}</li>`).join('')}</ul>
          </div>
        </div>

        <!-- Traps -->
        <div class="topic-section section-trap">
          <div class="topic-section-title">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            Bẫy thường gặp
          </div>
          <div class="trap-box">
            <ul>${topic.traps.map(t => `<li>${t}</li>`).join('')}</ul>
          </div>
        </div>

        <!-- Examples -->
        <div class="topic-section section-examples">
          <div class="topic-section-title">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
            Câu ví dụ
          </div>
          <div class="examples-list-grammar">
            ${topic.examples.map(ex => `
              <div class="grammar-example-item">
                <span class="example-label">${ex.label}</span>
                <span>${ex.text}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Mini Quiz Button -->
        <button class="btn-mini-quiz" onclick="startQuiz(${topic.id})">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          Làm Mini Quiz (${topic.quizCount} câu) →
        </button>
      </div>
    </div>
  `;
}

// ---- EXPAND/COLLAPSE ----
function toggleTopic(topicId) {
  const card = document.getElementById(`gram-topic-${topicId}`);
  if (!card) return;

  const wasExpanded = card.classList.contains('expanded');

  // Close all
  document.querySelectorAll('.grammar-topic-card.expanded').forEach(c => {
    c.classList.remove('expanded');
  });

  if (!wasExpanded) {
    card.classList.add('expanded');
    setActiveToc(topicId);

    // Smooth scroll to card
    setTimeout(() => {
      card.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);

    // Mark as viewed in progress
    if (!userProgress[`grammar_${topicId}`]) {
      userProgress[`grammar_${topicId}`] = { status: 1, date: new Date().toISOString() };
      saveProgress();
    }
  }
}

function expandTopic(topicId) {
  const card = document.getElementById(`gram-topic-${topicId}`);
  if (card && !card.classList.contains('expanded')) {
    toggleTopic(topicId);
  }
}

// ---- MINI QUIZ ----
function startQuiz(topicId) {
  const topic = GRAMMAR_TOPICS.find(t => t.id === topicId);
  if (!topic) return;

  quizState = {
    topic,
    questions: [...topic.quiz],
    current: 0,
    score: 0,
    answered: false
  };

  // Update modal
  document.getElementById('quizTopicLabel').textContent = `Mini Quiz: ${topic.title}`;

  renderQuestion();
  document.getElementById('quizModal').classList.add('active');
  document.body.style.overflow = 'hidden';

  // Hide result
  document.getElementById('quizResult').style.display = 'none';
  document.getElementById('quizFeedback').style.display = 'none';
  document.querySelector('.quiz-question-area').style.display = 'block';
  document.getElementById('quizOptions').style.display = 'flex';
}

function renderQuestion() {
  const { questions, current } = quizState;
  const q = questions[current];
  const total = questions.length;

  // Progress
  document.getElementById('quizProgressFill').style.width = `${(current / total) * 100}%`;
  document.getElementById('quizCounter').textContent = `${current + 1} / ${total}`;

  // Question
  document.getElementById('quizQuestion').innerHTML = q.question;

  // Options
  const optionsEl = document.getElementById('quizOptions');
  optionsEl.innerHTML = q.options.map((opt, i) => `
    <button class="quiz-option" onclick="answerQuestion(${i})" id="opt-${i}">
      <span class="option-letter">${String.fromCharCode(65 + i)}</span>
      <span>${opt.replace(/^[A-D]\.\s/, '')}</span>
    </button>
  `).join('');

  // Reset
  document.getElementById('quizFeedback').style.display = 'none';
  quizState.answered = false;
}

function answerQuestion(idx) {
  if (quizState.answered) return;
  quizState.answered = true;

  const { questions, current } = quizState;
  const q = questions[current];
  const isCorrect = idx === q.answer;

  if (isCorrect) quizState.score++;

  // Show option results
  q.options.forEach((_, i) => {
    const btn = document.getElementById(`opt-${i}`);
    if (!btn) return;
    btn.disabled = true;
    if (i === q.answer) btn.classList.add('correct');
    else if (i === idx && !isCorrect) btn.classList.add('wrong');
  });

  // Feedback
  const feedback = document.getElementById('quizFeedback');
  feedback.className = `quiz-feedback ${isCorrect ? 'correct-fb' : 'wrong-fb'}`;
  feedback.style.display = 'block';
  feedback.innerHTML = `
    <div class="feedback-content">
      <div class="feedback-icon">${isCorrect ? '✅' : '❌'}</div>
      <div class="feedback-text">
        <strong>${isCorrect ? 'Chính xác!' : 'Chưa đúng!'}</strong><br>
        ${q.explanation}
      </div>
    </div>
    <button class="btn-next-question" onclick="nextQuestion()">
      ${current + 1 < questions.length ? 'Câu tiếp theo →' : 'Xem kết quả 🎯'}
    </button>
  `;
}

function nextQuestion() {
  quizState.current++;

  if (quizState.current >= quizState.questions.length) {
    showQuizResult();
    return;
  }

  renderQuestion();
}

function showQuizResult() {
  const { score, questions, topic } = quizState;
  const total = questions.length;
  const percent = Math.round((score / total) * 100);

  document.querySelector('.quiz-question-area').style.display = 'none';
  document.getElementById('quizOptions').style.display = 'none';
  document.getElementById('quizFeedback').style.display = 'none';
  document.getElementById('quizProgressFill').style.width = '100%';
  document.getElementById('quizCounter').textContent = `${total} / ${total}`;

  const resultEl = document.getElementById('quizResult');
  resultEl.style.display = 'block';

  let emoji, title, message;
  if (score === total) { emoji = '🏆'; title = 'Hoàn hảo!'; message = 'Bạn đã nắm vững chủ đề này! Tiếp tục sang chủ đề tiếp theo nhé.'; }
  else if (percent >= 80) { emoji = '🎉'; title = 'Xuất sắc!'; message = `Điểm số ${score}/${total} — Rất tốt! Ôn lại 1-2 câu bạn còn nhầm.`; }
  else if (percent >= 60) { emoji = '💪'; title = 'Khá tốt!'; message = `Điểm số ${score}/${total} — Cần ôn thêm một chút. Đọc lại công thức nhé!`; }
  else { emoji = '📚'; title = 'Cần ôn thêm!'; message = `Điểm số ${score}/${total} — Hãy đọc lại lý thuyết và thử lại!`; }

  document.getElementById('resultEmoji').textContent = emoji;
  document.getElementById('resultTitle').textContent = title;
  document.getElementById('resultScore').textContent = score;
  document.getElementById('resultMessage').textContent = message;

  // Update progress if passed
  if (percent >= 80) {
    userProgress[`grammar_${topic.id}`] = { status: 2, date: new Date().toISOString() };
    saveProgress();
    updateTOCProgress();
    renderTOC(); // Refresh TOC with checkmarks
    showToast('🏆', `Hoàn thành chuyên đề ${topic.title}!`);
  }
}

function retryQuiz() {
  startQuiz(quizState.topic.id);
}

function closeQuizModal(event) {
  if (event && event.target !== document.getElementById('quizModal')) return;
  closeModal();
}
