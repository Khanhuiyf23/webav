// ============================================================
// VOCABULARY.JS — Filter, Sort, Pagination, Word Modal
// ============================================================

let allWords = [...VOCABULARY];
let filteredWords = [...VOCABULARY];
let currentPage = 1;
const wordsPerPage = 20;
let currentView = 'grid';
let currentSort = 'default';
let currentFilters = { level: 'all', pos: 'all', topic: 'all', status: 'all' };
let currentWordIndex = 0;
let openWordId = null;

document.addEventListener('DOMContentLoaded', function () {
  // Handle URL params
  const params = new URLSearchParams(window.location.search);
  const searchQuery = params.get('q');
  const wordId = params.get('word');
  const topic = params.get('topic');

  if (topic) {
    currentFilters.topic = topic;
    setFilter('topic', topic, document.querySelector(`[data-value="${topic}"]`));
  }
  if (searchQuery) {
    document.getElementById('vocabSearchInput').value = searchQuery;
    filterVocab();
  } else {
    applyFiltersAndRender();
  }

  // Open specific word if url has ?word=id
  if (wordId) {
    setTimeout(() => {
      const word = VOCABULARY.find(w => w.id === parseInt(wordId));
      if (word) openWordModal(word);
    }, 300);
  }

  updateSidebarStats();
});

// ---- FILTER SYSTEM ----
function setFilter(type, value, el) {
  currentFilters[type] = value;
  currentPage = 1;

  // Update UI chips/buttons
  if (el) {
    const group = el.closest('.filter-chips, .filter-topics');
    if (group) {
      group.querySelectorAll('.filter-chip, .topic-chip').forEach(b => b.classList.remove('active'));
      el.classList.add('active');
    }
  }

  applyFiltersAndRender();
}

function filterVocab() {
  const searchVal = document.getElementById('vocabSearchInput').value.trim().toLowerCase();
  const clearBtn = document.getElementById('clearSearchBtn');
  if (clearBtn) clearBtn.style.display = searchVal ? 'flex' : 'none';
  currentPage = 1;
  applyFiltersAndRender();
}

function clearSearch() {
  document.getElementById('vocabSearchInput').value = '';
  document.getElementById('clearSearchBtn').style.display = 'none';
  currentPage = 1;
  applyFiltersAndRender();
}

function applyFiltersAndRender() {
  const searchVal = document.getElementById('vocabSearchInput')?.value.trim().toLowerCase() || '';

  filteredWords = allWords.filter(word => {
    // Search
    if (searchVal) {
      const searchText = `${word.word} ${word.meaning_vn} ${word.meaning_en} ${word.pos}`.toLowerCase();
      if (!searchText.includes(searchVal)) return false;
    }
    // Level
    if (currentFilters.level !== 'all' && word.level !== currentFilters.level) return false;
    // POS
    if (currentFilters.pos !== 'all' && word.pos !== currentFilters.pos) return false;
    // Topic
    if (currentFilters.topic !== 'all' && word.topic !== currentFilters.topic) return false;
    // Status
    if (currentFilters.status !== 'all') {
      const status = getWordStatus(word.id);
      if (currentFilters.status === 'new' && status !== 0) return false;
      if (currentFilters.status === 'learning' && status !== 1) return false;
      if (currentFilters.status === 'mastered' && status !== 2) return false;
    }
    return true;
  });

  // Sort
  sortWords();
  renderWordGrid();
  renderPagination();

  // Update count
  const countEl = document.getElementById('resultsCount');
  if (countEl) countEl.textContent = filteredWords.length;
}

function sortWords() {
  switch (currentSort) {
    case 'az': filteredWords.sort((a, b) => a.word.localeCompare(b.word)); break;
    case 'za': filteredWords.sort((a, b) => b.word.localeCompare(a.word)); break;
    case 'level': {
      const order = { 'A1': 1, 'A2': 2, 'B1': 3, 'B2': 4 };
      filteredWords.sort((a, b) => (order[a.level] || 0) - (order[b.level] || 0));
      break;
    }
  }
}

function setSortOrder(val) {
  currentSort = val;
  currentPage = 1;
  applyFiltersAndRender();
}

function setView(view) {
  currentView = view;
  const grid = document.getElementById('vocabGrid');
  const gridBtn = document.getElementById('gridViewBtn');
  const listBtn = document.getElementById('listViewBtn');

  if (view === 'list') {
    grid.classList.add('list-view');
    listBtn.classList.add('active');
    gridBtn.classList.remove('active');
  } else {
    grid.classList.remove('list-view');
    gridBtn.classList.add('active');
    listBtn.classList.remove('active');
  }
}

// ---- RENDER WORD GRID ----
function renderWordGrid() {
  const grid = document.getElementById('vocabGrid');
  if (!grid) return;

  const start = (currentPage - 1) * wordsPerPage;
  const pageWords = filteredWords.slice(start, start + wordsPerPage);

  if (pageWords.length === 0) {
    grid.innerHTML = `
      <div class="vocab-empty">
        <div class="vocab-empty-icon">🔍</div>
        <h3>Không tìm thấy từ nào</h3>
        <p>Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = pageWords.map((word, idx) => {
    const status = getWordStatus(word.id);
    const statusClass = status === 2 ? 'status-mastered' : status === 1 ? 'status-learning' : '';
    const statusDotClass = status === 2 ? 'mastered' : status === 1 ? 'learning' : '';

    return `
      <div class="word-card-item ${statusClass}" onclick="openWordModal(VOCABULARY.find(w=>w.id===${word.id}))"
           role="button" tabindex="0"
           onkeydown="if(event.key==='Enter') openWordModal(VOCABULARY.find(w=>w.id===${word.id}))">
        <div class="wc-header">
          <div>
            <div class="wc-word">${word.word}</div>
            <div class="wc-ipa">${word.ipa}</div>
          </div>
          <span class="word-level level-${word.level.toLowerCase()}">${word.level}</span>
        </div>
        <div class="wc-pos ${word.pos}">${translatePos(word.pos)}</div>
        <div class="wc-meaning">${word.meaning_vn}</div>
        <div class="wc-footer">
          <span class="wc-topic">${translateTopic(word.topic)}</span>
          <div class="wc-status-dot ${statusDotClass}" title="${statusDotClass === 'mastered' ? 'Đã thuộc' : statusDotClass === 'learning' ? 'Đang học' : 'Chưa học'}"></div>
        </div>
      </div>
    `;
  }).join('');
}

// ---- WORD MODAL ----
function openWordModal(word) {
  if (!word) return;
  openWordId = word.id;
  currentWordIndex = filteredWords.indexOf(word);

  // Fill modal content
  document.getElementById('modal-word-name').textContent = word.word;
  document.getElementById('modal-word-pos').textContent = translatePos(word.pos);
  document.getElementById('modal-ipa').textContent = word.ipa;

  const levelEl = document.getElementById('modal-word-level');
  levelEl.textContent = word.level;
  levelEl.className = `word-modal-level word-level level-${word.level.toLowerCase()}`;

  document.getElementById('modal-meaning-vn').textContent = word.meaning_vn;
  document.getElementById('modal-meaning-en').textContent = word.meaning_en;
  document.getElementById('modal-topic-badge').textContent = translateTopic(word.topic);

  // Collocations
  document.getElementById('modal-collocations').innerHTML =
    word.collocations.map(c => `<span class="collocate-tag">${c}</span>`).join('');

  // Examples
  document.getElementById('modal-examples').innerHTML =
    word.examples.map((ex, i) => `
      <div class="example-item">
        <span class="example-num">VD${i + 1}</span>
        <span>${ex.replace(new RegExp(`(${word.word})`, 'gi'), '<strong>$1</strong>')}</span>
      </div>
    `).join('');

  // Synonyms
  const synSection = document.getElementById('synonymsSection');
  if (word.synonyms && word.synonyms.length > 0) {
    document.getElementById('modal-synonyms').innerHTML =
      word.synonyms.map(s => `<span class="synonym-tag">${s}</span>`).join('');
    synSection.style.display = 'block';
  } else {
    synSection.style.display = 'none';
  }

  // Update button states
  updateModalButtons(word.id);

  // Show modal
  document.getElementById('wordModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function updateModalButtons(wordId) {
  const status = getWordStatus(wordId);
  const btnMastered = document.getElementById('btnMastered');
  const btnReview = document.getElementById('btnReview');
  if (btnMastered) {
    btnMastered.classList.toggle('active', status === 2);
    btnMastered.innerHTML = status === 2
      ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Đã thuộc ✓'
      : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Đã thuộc';
  }
}

function markCurrentWord(status) {
  if (!openWordId) return;
  markWordStatus(openWordId, status);
  updateModalButtons(openWordId);

  // Refresh grid card
  applyFiltersAndRender();
  updateSidebarStats();
}

function showNextWord() {
  if (currentWordIndex < filteredWords.length - 1) {
    currentWordIndex++;
    openWordModal(filteredWords[currentWordIndex]);
  } else {
    showToast('🎉', 'Bạn đã xem hết các từ trong bộ lọc này!');
  }
}

function closeWordModal(event) {
  if (event && event.target !== document.getElementById('wordModal')) return;
  closeModal();
}

// ---- PAGINATION ----
function renderPagination() {
  const totalPages = Math.ceil(filteredWords.length / wordsPerPage);
  const container = document.getElementById('paginationDiv');
  const pageNumbers = document.getElementById('pageNumbers');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  if (!container) return;
  container.style.display = totalPages <= 1 ? 'none' : 'flex';

  if (prevBtn) prevBtn.disabled = currentPage === 1;
  if (nextBtn) nextBtn.disabled = currentPage === totalPages;

  if (!pageNumbers) return;
  pageNumbers.innerHTML = '';

  // Show max 5 page buttons
  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(totalPages, startPage + 4);
  if (endPage - startPage < 4) startPage = Math.max(1, endPage - 4);

  for (let i = startPage; i <= endPage; i++) {
    const btn = document.createElement('button');
    btn.className = `page-num ${i === currentPage ? 'active' : ''}`;
    btn.textContent = i;
    btn.onclick = () => goToPage(i);
    pageNumbers.appendChild(btn);
  }
}

function changePage(delta) {
  const totalPages = Math.ceil(filteredWords.length / wordsPerPage);
  const newPage = currentPage + delta;
  if (newPage < 1 || newPage > totalPages) return;
  goToPage(newPage);
}

function goToPage(page) {
  currentPage = page;
  renderWordGrid();
  renderPagination();
  window.scrollTo({ top: document.querySelector('.vocab-layout')?.offsetTop - 100 || 0, behavior: 'smooth' });
}

// ---- SIDEBAR STATS ----
function updateSidebarStats() {
  const totalEl = document.getElementById('totalWordsCount');
  const masteredEl = document.getElementById('masteredWordsCount');
  const learningEl = document.getElementById('learningWordsCount');

  if (totalEl) totalEl.textContent = filteredWords.length;

  const mastered = VOCABULARY.filter(w => getWordStatus(w.id) === 2).length;
  const learning = VOCABULARY.filter(w => getWordStatus(w.id) === 1).length;

  if (masteredEl) masteredEl.textContent = mastered;
  if (learningEl) learningEl.textContent = learning;
}

// ---- UTILITIES ----
function translatePos(pos) {
  const map = { noun: 'Danh từ (n)', verb: 'Động từ (v)', adjective: 'Tính từ (adj)', adverb: 'Trạng từ (adv)', preposition: 'Giới từ (prep)' };
  return map[pos] || pos;
}

function translateTopic(topic) {
  const map = { education: 'Education 📚', environment: 'Environment 🌿', technology: 'Technology 💻', culture: 'Culture 🏮', health: 'Health ❤️' };
  return map[topic] || topic;
}
