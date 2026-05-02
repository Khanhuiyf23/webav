// ============================================================
// PRACTICE.JS — Flashcard Mode (Spaced Repetition) + Exam Mode
// ============================================================

// ---- SHARED STATE ----
let practiceMode = null; // 'flashcard' | 'exam'
let sessionStartTime = null;

document.addEventListener('DOMContentLoaded', function () {
  // Check URL param for direct mode
  const params = new URLSearchParams(window.location.search);
  if (params.get('mode') === 'flashcard') startFlashcard();
  updateQuickStats();
});

function updateQuickStats() {
  const mastered = VOCABULARY.filter(w => getWordStatus(w.id) === 2).length;
  const learning = VOCABULARY.filter(w => getWordStatus(w.id) === 1).length;
  const due = VOCABULARY.filter(w => {
    const p = userProgress[`word_${w.id}`];
    if (!p) return false;
    if (p.status === 1) return true;
    // Simple: words marked "learning" are due
    return false;
  }).length;

  const qsDue = document.getElementById('qs-due');
  const qsMastered = document.getElementById('qs-mastered');
  const qsStreak = document.getElementById('qs-streak');
  const qsTime = document.getElementById('qs-time');

  if (qsDue) qsDue.textContent = Math.max(due, learning);
  if (qsMastered) qsMastered.textContent = mastered;
  if (qsStreak) qsStreak.textContent = currentUser?.streak || 0;
  if (qsTime) qsTime.textContent = Math.floor(Math.random() * 30 + 5); // Demo
}

function exitMode() {
  practiceMode = null;
  document.getElementById('flashcardMode').style.display = 'none';
  document.getElementById('examMode').style.display = 'none';
  document.getElementById('practiceHub').style.display = 'block';
  document.getElementById('practiceFooter').style.display = 'none';

  // Reset exam
  examTimer && clearInterval(examTimer);
  selectedAnswers = {};

  updateQuickStats();
}

// ============================================================
// FLASHCARD MODE
// ============================================================

let fcWords = [];
let fcIndex = 0;
let fcFlipped = false;
let fcStats = { easy: 0, hard: 0, forgot: 0 };
let fcForgotWords = [];

function startFlashcard() {
  practiceMode = 'flashcard';
  sessionStartTime = Date.now();

  // Select words: prioritize "learning" words, then new ones
  const learningWords = VOCABULARY.filter(w => getWordStatus(w.id) === 1);
  const newWords = VOCABULARY.filter(w => getWordStatus(w.id) === 0);
  const masteredWords = VOCABULARY.filter(w => getWordStatus(w.id) === 2);

  // Session: up to 20 words
  fcWords = [...learningWords, ...newWords].slice(0, 20);
  if (fcWords.length < 10) fcWords = [...fcWords, ...masteredWords].slice(0, 20);
  if (fcWords.length === 0) fcWords = VOCABULARY.slice(0, 20);

  // Shuffle
  fcWords = fcWords.sort(() => Math.random() - 0.5);

  fcIndex = 0;
  fcFlipped = false;
  fcStats = { easy: 0, hard: 0, forgot: 0 };
  fcForgotWords = [];

  document.getElementById('practiceHub').style.display = 'none';
  document.getElementById('examMode').style.display = 'none';
  document.getElementById('flashcardMode').style.display = 'block';
  document.getElementById('fcSessionComplete').style.display = 'none';
  document.getElementById('practiceFooter').style.display = 'none';

  renderFlashcard();
  updateFCProgress();
}

function renderFlashcard() {
  if (fcIndex >= fcWords.length) {
    showSessionComplete();
    return;
  }

  const word = fcWords[fcIndex];
  fcFlipped = false;

  // Reset flip
  const inner = document.getElementById('flashcardInner');
  inner.style.transform = 'rotateY(0deg)';

  // Front
  document.getElementById('fcWord').textContent = word.word;
  document.getElementById('fcIpa').textContent = word.ipa;
  document.getElementById('fcPosTag').textContent = translatePosShort(word.pos);
  document.getElementById('fcWordCount').textContent = `${fcIndex + 1} / ${fcWords.length}`;

  const levelBadge = document.getElementById('fcLevelBadge');
  levelBadge.textContent = word.level;
  levelBadge.className = `fc-level-badge word-level level-${word.level.toLowerCase()}`;

  // Back
  document.getElementById('fcBackWord').textContent = word.word;
  document.getElementById('fcBackMeaningVN').textContent = word.meaning_vn;
  document.getElementById('fcBackMeaningEN').textContent = word.meaning_en;

  const exampleText = document.getElementById('fcExampleText');
  exampleText.innerHTML = word.examples[0].replace(
    new RegExp(`(${word.word})`, 'gi'),
    '<strong>$1</strong>'
  );

  const collocDiv = document.getElementById('fcBackCollocations');
  collocDiv.innerHTML = word.collocations.slice(0, 3).map(c => `<span class="collocate-tag">${c}</span>`).join('');

  // Show flip button, hide rating
  document.getElementById('fcFlipBtn').style.display = 'flex';
  document.getElementById('fcRatingButtons').style.display = 'none';
}

function flipCard() {
  if (fcIndex >= fcWords.length) return;

  fcFlipped = !fcFlipped;
  const inner = document.getElementById('flashcardInner');
  inner.style.transform = fcFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)';

  if (fcFlipped) {
    document.getElementById('fcFlipBtn').style.display = 'none';
    document.getElementById('fcRatingButtons').style.display = 'flex';

    // TTS
    const word = fcWords[fcIndex];
    playAudio('uk', word.word);
  } else {
    document.getElementById('fcFlipBtn').style.display = 'flex';
    document.getElementById('fcRatingButtons').style.display = 'none';
  }
}

function rateCard(rating) {
  if (fcIndex >= fcWords.length) return;
  const word = fcWords[fcIndex];

  fcStats[rating]++;

  // Update counters
  document.getElementById('fcEasyCount').textContent = fcStats.easy;
  document.getElementById('fcHardCount').textContent = fcStats.hard;
  document.getElementById('fcForgotCount').textContent = fcStats.forgot;

  // Apply Spaced Repetition logic
  if (rating === 'easy') {
    markWordStatus(word.id, 2); // Master it
  } else if (rating === 'hard') {
    markWordStatus(word.id, 1); // Keep learning
  } else if (rating === 'forgot') {
    markWordStatus(word.id, 1); // Review needed
    fcForgotWords.push(word); // Add to retry list
  }

  // Animate card out
  const card = document.getElementById('flashcard');
  card.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
  if (rating === 'easy') {
    card.style.transform = 'translateX(100px) rotate(8deg)';
  } else if (rating === 'forgot') {
    card.style.transform = 'translateX(-100px) rotate(-8deg)';
  } else {
    card.style.transform = 'translateY(-60px)';
  }
  card.style.opacity = '0';

  setTimeout(() => {
    card.style.transition = '';
    card.style.transform = '';
    card.style.opacity = '1';
    fcIndex++;
    renderFlashcard();
    updateFCProgress();
  }, 300);
}

function updateFCProgress() {
  const progress = fcWords.length > 0 ? (fcIndex / fcWords.length) * 100 : 0;
  document.getElementById('fcProgressFill').style.width = `${progress}%`;
  document.getElementById('fcCounter').textContent = `${fcIndex} / ${fcWords.length}`;
}

function showSessionComplete() {
  document.getElementById('flashcardMode').querySelector('.flashcard-arena').style.display = 'none';
  document.getElementById('fcSessionComplete').style.display = 'flex';

  const total = fcStats.easy + fcStats.hard + fcStats.forgot;
  const accuracy = total > 0 ? Math.round((fcStats.easy / total) * 100) : 0;

  document.getElementById('finalEasy').textContent = fcStats.easy;
  document.getElementById('finalHard').textContent = fcStats.hard;
  document.getElementById('finalForgot').textContent = fcStats.forgot;
  document.getElementById('sessionAccuracy').textContent = `${accuracy}%`;

  showToast('🎊', `Hoàn thành! Học giỏi lắm! ${accuracy}% từ dễ nhớ.`);
}

function retryForgotten() {
  if (fcForgotWords.length === 0) {
    showToast('🎉', 'Không có từ nào cần ôn lại!');
    exitMode();
    return;
  }
  fcWords = [...fcForgotWords];
  fcIndex = 0;
  fcStats = { easy: 0, hard: 0, forgot: 0 };
  fcForgotWords = [];
  document.getElementById('flashcardMode').querySelector('.flashcard-arena').style.display = 'flex';
  document.getElementById('fcSessionComplete').style.display = 'none';
  renderFlashcard();
  updateFCProgress();
}

// ============================================================
// EXAM MODE
// ============================================================

let examTimer = null;
let examTimeLeft = 0;
let selectedAnswers = {};
let examQuestions = [];

function startExam() {
  document.getElementById('practiceHub').style.display = 'none';
  document.getElementById('flashcardMode').style.display = 'none';
  document.getElementById('examMode').style.display = 'block';
  document.getElementById('examConfig').style.display = 'block';
  document.getElementById('examPaper').style.display = 'none';
  document.getElementById('examResults').style.display = 'none';
}

function beginExam() {
  const time = parseInt(document.getElementById('examTimeSelect').value);
  const type = document.getElementById('examTypeSelect').value;

  examTimeLeft = time * 60;
  selectedAnswers = {};
  sessionStartTime = Date.now();

  // Build exam question set
  examQuestions = [...EXAM_QUESTIONS.multiple_choice];
  if (type === 'vocab') examQuestions = examQuestions.filter(q => q.id <= 10);
  else if (type === 'grammar') examQuestions = examQuestions.filter(q => q.id > 5 && q.id <= 15);
  else if (type === 'reading') examQuestions = examQuestions.filter(q => q.id > 10);

  document.getElementById('examConfig').style.display = 'none';
  document.getElementById('examPaper').style.display = 'block';
  document.getElementById('totalQuestions').textContent = examQuestions.length;

  renderExamPaper();
  startExamTimer();
}

function renderExamPaper() {
  const container = document.getElementById('examSections');

  // Section 1: Vocabulary & Fill-in
  const vocabQs = examQuestions.filter(q => q.id <= 5);
  // Section 2: Grammar
  const grammarQs = examQuestions.filter(q => q.id > 5 && q.id <= 10);
  // Section 3: Reading Comprehension
  const readingQs = examQuestions.filter(q => q.id > 10);

  let html = '';

  // Reading passage (shown before reading questions)
  const passageHTML = `
    <div class="exam-section">
      <div class="exam-section-header">
        <div class="exam-section-title">PHẦN 1: NGỮ PHÁP VÀ TỪ VỰNG</div>
        <div class="exam-section-desc">Câu 1-10: Chọn đáp án đúng nhất để hoàn thành câu</div>
      </div>
      <div class="exam-questions">
        ${[...vocabQs, ...grammarQs].map(q => renderExamQuestion(q)).join('')}
      </div>
    </div>
  `;
  html += passageHTML;

  if (readingQs.length > 0) {
    html += `
      <div class="exam-section">
        <div class="exam-section-header">
          <div class="exam-section-title">PHẦN 2: ĐỌC HIỂU</div>
          <div class="exam-section-desc">Đọc đoạn văn sau và trả lời câu hỏi</div>
        </div>
        <div class="exam-questions">
          <div class="exam-passage">
            <div class="passage-title">The Importance of Biodiversity</div>
            <p>
              Biodiversity refers to the variety of life on Earth, including the diversity of species, ecosystems, and genetic differences within species. Scientists estimate that there are approximately 8.7 million species on Earth, though only around 1.5 million have been officially identified and studied.
            </p>
            <p style="margin-top:12px;">
              The loss of <strong>biodiversity</strong> is currently happening at an alarming rate. Human activities such as deforestation, pollution, and climate change are the primary contributors to this crisis. When species become extinct, entire ecosystems can collapse, as each organism plays a specific role in maintaining the balance of its habitat.
            </p>
            <p style="margin-top:12px;">
              To <strong>preserve biodiversity</strong>, international organizations and governments are implementing various strategies, including establishing protected areas, regulating hunting and fishing, and promoting sustainable agriculture. However, individual actions, such as reducing waste and supporting eco-friendly products, also play a crucial role.
            </p>
          </div>
          ${readingQs.map(q => renderExamQuestion(q)).join('')}
        </div>
      </div>
    `;
  }

  container.innerHTML = html;
}

function renderExamQuestion(q) {
  const globalIdx = examQuestions.indexOf(q);
  return `
    <div class="exam-question-item" id="eq-${globalIdx}">
      <div class="eq-header">
        <span class="eq-num">${globalIdx + 1}</span>
        <span class="eq-question">${q.question}</span>
      </div>
      <div class="eq-options">
        ${q.options.map((opt, i) => `
          <button class="eq-option" id="eq-${globalIdx}-opt-${i}"
                  onclick="selectAnswer(${globalIdx}, ${i})"
                  data-qidx="${globalIdx}" data-optidx="${i}">
            <span class="eq-letter">${String.fromCharCode(65 + i)}</span>
            <span>${opt.replace(/^[A-D]\.\s/, '')}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `;
}

function selectAnswer(qIdx, optIdx) {
  // Deselect previous
  const prevAnswer = selectedAnswers[qIdx];
  if (prevAnswer !== undefined) {
    const prevBtn = document.getElementById(`eq-${qIdx}-opt-${prevAnswer}`);
    if (prevBtn) {
      prevBtn.classList.remove('selected');
      prevBtn.querySelector('.eq-letter').style.background = '';
    }
  }

  // Select new
  selectedAnswers[qIdx] = optIdx;
  const btn = document.getElementById(`eq-${qIdx}-opt-${optIdx}`);
  if (btn) btn.classList.add('selected');

  // Update answered count
  const answered = Object.keys(selectedAnswers).length;
  document.getElementById('answeredCount').textContent = answered;
}

// ---- TIMER ----
function startExamTimer() {
  examTimer = setInterval(() => {
    examTimeLeft--;
    updateTimerDisplay();

    if (examTimeLeft <= 0) {
      clearInterval(examTimer);
      showToast('⏰', 'Hết giờ! Bài thi đã được nộp tự động.');
      submitExam();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const mins = Math.floor(examTimeLeft / 60);
  const secs = examTimeLeft % 60;
  const display = document.getElementById('timerDisplay');
  const timerEl = document.getElementById('examTimer');

  if (display) display.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

  if (timerEl) {
    timerEl.classList.remove('warning', 'danger');
    if (examTimeLeft <= 300) timerEl.classList.add('danger');
    else if (examTimeLeft <= 600) timerEl.classList.add('warning');
  }
}

function submitExam() {
  clearInterval(examTimer);

  const timeUsed = sessionStartTime ? Math.floor((Date.now() - sessionStartTime) / 1000) : 0;
  const mins = Math.floor(timeUsed / 60);
  const secs = timeUsed % 60;
  const timeStr = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

  // Calculate score
  let correct = 0, wrong = 0, skipped = 0;
  const reviewItems = [];

  examQuestions.forEach((q, idx) => {
    const selected = selectedAnswers[idx];
    if (selected === undefined) {
      skipped++;
      reviewItems.push({ q, selected: -1, isCorrect: false });
    } else if (selected === q.answer) {
      correct++;
      reviewItems.push({ q, selected, isCorrect: true });
    } else {
      wrong++;
      reviewItems.push({ q, selected, isCorrect: false });
    }
  });

  const score = ((correct / examQuestions.length) * 10).toFixed(1);
  const percent = (correct / examQuestions.length) * 100;

  // Trophy
  let trophy = '🏆';
  if (percent < 60) trophy = '📚';
  else if (percent < 80) trophy = '💪';

  // Show results
  document.getElementById('examPaper').style.display = 'none';
  document.getElementById('examResults').style.display = 'block';
  document.getElementById('resultsTrophy').textContent = trophy;
  document.getElementById('examFinalScore').textContent = score;
  document.getElementById('correctCount').textContent = correct;
  document.getElementById('wrongCount').textContent = wrong;
  document.getElementById('skippedCount').textContent = skipped;
  document.getElementById('examTimeUsed').textContent = timeStr;

  // Message
  let message;
  if (percent >= 90) message = `Xuất sắc! Điểm ${score}/10 — Tiếp tục duy trì phong độ này cho kỳ thi thật!`;
  else if (percent >= 80) message = `Rất tốt! Điểm ${score}/10 — Chỉ cần ôn thêm một chút là đạt điểm cao trong kỳ thi.`;
  else if (percent >= 70) message = `Khá tốt! Điểm ${score}/10 — Cần ôn luyện thêm phần ngữ pháp và từ vựng.`;
  else message = `Điểm ${score}/10 — Hãy ôn tập lại các chuyên đề ngữ pháp và làm thêm flashcard nhé!`;

  document.getElementById('resultsMessage').textContent = message;

  // Review list
  const reviewList = document.getElementById('reviewList');
  reviewList.innerHTML = reviewItems.map((item, idx) => `
    <div class="review-item">
      <span class="review-icon">${item.isCorrect ? '✅' : '❌'}</span>
      <div class="review-question">
        <strong>Câu ${idx + 1}:</strong> ${item.q.question.substring(0, 80)}...
        <div class="review-answer ${item.isCorrect ? 'correct' : 'wrong'}">
          ${item.isCorrect
            ? `Đúng: ${item.q.options[item.selected]}`
            : `Sai: ${item.selected >= 0 ? item.q.options[item.selected] : 'Bỏ qua'} → Đáp án: ${item.q.options[item.q.answer]}`
          }
        </div>
        ${!item.isCorrect ? `<div style="font-size:0.78rem; color:var(--text-muted); margin-top:2px;">${item.q.explanation}</div>` : ''}
      </div>
    </div>
  `).join('');
}

// ---- UTILS ----
function translatePosShort(pos) {
  const map = { noun: 'n.', verb: 'v.', adjective: 'adj.', adverb: 'adv.', preposition: 'prep.' };
  return map[pos] || pos;
}
