// ============================================================
// HOMEPAGE.JS — Word of the Day, Grammar of the Day, Search, Topics
// ============================================================

document.addEventListener('DOMContentLoaded', function () {
  renderWordOfDay();
  renderGrammarOfDay();
  renderTopicsGrid();
  initHeroSearch();
});

// ---- WORD OF THE DAY ----
function renderWordOfDay() {
  const word = getTodaysWord();
  if (!word) return;

  document.getElementById('wod-word').textContent = word.word;
  document.getElementById('wod-pos').textContent = word.pos;
  document.getElementById('wod-ipa').textContent = word.ipa;
  document.getElementById('wod-meaning-vn').textContent = word.meaning_vn;
  document.getElementById('wod-meaning-en').textContent = word.meaning_en;
  document.getElementById('wod-example').innerHTML = `
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
    </svg>
    <em>${word.examples[0].replace(new RegExp(`(${word.word})`, 'gi'), '<strong>$1</strong>')}</em>
  `;

  // Level badge
  const levelEl = document.getElementById('wod-level');
  levelEl.textContent = word.level;
  levelEl.className = `word-level level-${word.level.toLowerCase()}`;

  // Collocations
  const collocDiv = document.getElementById('wod-collocation');
  collocDiv.innerHTML = `
    <span class="collocate-label">Cụm từ:</span>
    ${word.collocations.slice(0, 3).map(c => `<span class="collocate-tag">${c}</span>`).join('')}
  `;

  // Button actions connect to markWordStatus
  const btnMastered = document.querySelector('.btn-mastered');
  const btnReview = document.querySelector('.btn-review');
  if (btnMastered) btnMastered.onclick = () => markWordStatus(word.id, 2);
  if (btnReview) btnReview.onclick = () => markWordStatus(word.id, 1);
}

// ---- GRAMMAR OF THE DAY ----
function renderGrammarOfDay() {
  const grammar = getTodaysGrammar();
  if (!grammar) return;

  document.getElementById('god-title').textContent = grammar.title;
  document.getElementById('god-category').textContent = grammar.english;

  // Formula
  const formulaBox = document.getElementById('god-formula');
  formulaBox.innerHTML = grammar.formulas.map(f => `<code>${f}</code>`).join('');

  // Tip
  const tipEl = document.getElementById('god-tip');
  tipEl.innerHTML = `
    <div class="tip-header">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0018 8 6 6 0 006 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 019 14"/></svg>
      Dấu hiệu nhận biết
    </div>
    <p>${grammar.tips[0]}</p>
  `;

  // Trap
  const trapEl = document.getElementById('god-trap');
  trapEl.innerHTML = `
    <div class="trap-header">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
      Bẫy thường gặp
    </div>
    <p>${grammar.traps[0]}</p>
  `;

  // Example
  document.getElementById('god-example').innerHTML = `<em>${grammar.examples[0].text}</em>`;
}

// ---- TOPICS GRID ----
function renderTopicsGrid() {
  const grid = document.getElementById('topicsGrid');
  if (!grid) return;

  grid.innerHTML = GRAMMAR_TOPICS.map((topic, idx) => `
    <a href="grammar.html#topic-${topic.id}" class="topic-card" style="--color: ${topic.color};">
      <div class="topic-num">Chủ đề ${idx + 1}</div>
      <span class="topic-emoji">${topic.emoji}</span>
      <div class="topic-name">${topic.title}</div>
    </a>
  `).join('');
}

// ---- HERO SEARCH ----
function initHeroSearch() {
  const input = document.getElementById('heroSearchInput');
  const suggestions = document.getElementById('searchSuggestions');
  if (!input) return;

  input.addEventListener('input', () => {
    const val = input.value.trim().toLowerCase();
    if (val.length < 2) { suggestions.classList.remove('show'); return; }

    const results = SEARCH_INDEX.filter(w => w.searchText.includes(val)).slice(0, 6);
    if (results.length === 0) { suggestions.classList.remove('show'); return; }

    suggestions.innerHTML = results.map(w => `
      <div class="suggestion-item" onclick="goToWord(${w.id})">
        <div>
          <span class="suggestion-word">${w.word}</span>
          <small class="suggestion-pos" style="color:var(--accent); margin-left:6px;">${w.pos}</small>
        </div>
        <span class="suggestion-meaning">${w.meaning_vn}</span>
        <span class="suggestion-level level-${w.level.toLowerCase()}">${w.level}</span>
      </div>
    `).join('');
    suggestions.classList.add('show');
  });

  // Close suggestions on outside click
  document.addEventListener('click', (e) => {
    if (!input.contains(e.target) && !suggestions.contains(e.target)) {
      suggestions.classList.remove('show');
    }
  });
}

function handleHeroSearch(event) {
  if (event.key === 'Enter') doHeroSearch();
}

function doHeroSearch() {
  const val = document.getElementById('heroSearchInput').value.trim();
  if (!val) return;
  window.location.href = `vocabulary.html?q=${encodeURIComponent(val)}`;
}

function goToWord(wordId) {
  window.location.href = `vocabulary.html?word=${wordId}`;
}
