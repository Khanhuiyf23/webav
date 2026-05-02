// ============================================================
// APP.JS — Shared Logic: Auth, Nav, Toast, User State
// ============================================================

// ---- USER STATE ----
let currentUser = null;
let userProgress = {}; // { wordId/grammarId: status }

// Load from localStorage on startup
function initApp() {
  const savedUser = localStorage.getItem('ep_user');
  const savedProgress = localStorage.getItem('ep_progress');

  if (savedUser) {
    currentUser = JSON.parse(savedUser);
    userProgress = savedProgress ? JSON.parse(savedProgress) : {};
    updateNavForUser();
    // Show dashboard if on homepage
    const dashSection = document.getElementById('dashboardSection');
    if (dashSection) dashSection.style.display = 'block';
  }

  // Navbar scroll effect
  window.addEventListener('scroll', handleNavScroll);
  handleNavScroll();
}

function handleNavScroll() {
  const nav = document.getElementById('navbar');
  if (nav) {
    if (window.scrollY > 20) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
}

// ---- NAV ----
function toggleNav() {
  const links = document.getElementById('navLinks');
  if (links) links.classList.toggle('open');
}

// ---- AUTH ----
function openAuthModal(tab) {
  const modal = document.getElementById('authModal');
  if (modal) {
    modal.classList.add('active');
    switchTab(tab || 'login');
    document.body.style.overflow = 'hidden';
  }
}

function closeAuthModal(event) {
  if (event && event.target !== document.getElementById('authModal')) return;
  closeModal();
}

function closeModal() {
  document.querySelectorAll('.modal-overlay').forEach(m => {
    m.classList.remove('active');
  });
  document.body.style.overflow = '';
}

function switchTab(tab) {
  const loginTab = document.getElementById('loginTab');
  const registerTab = document.getElementById('registerTab');
  const loginContent = document.getElementById('loginContent');
  const registerContent = document.getElementById('registerContent');

  if (!loginTab) return;

  if (tab === 'login') {
    loginTab.classList.add('active');
    registerTab.classList.remove('active');
    loginContent.classList.add('active');
    registerContent.classList.remove('active');
  } else {
    registerTab.classList.add('active');
    loginTab.classList.remove('active');
    registerContent.classList.add('active');
    loginContent.classList.remove('active');
  }
}

function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  // Simulate login (local storage based)
  const savedUsers = JSON.parse(localStorage.getItem('ep_users') || '[]');
  const user = savedUsers.find(u => u.email === email && u.password === password);

  if (user) {
    loginSuccess(user);
  } else {
    showToast('❌', 'Email hoặc mật khẩu không đúng!');
  }
}

function handleRegister(e) {
  e.preventDefault();
  const name = document.getElementById('regName').value;
  const email = document.getElementById('regEmail').value;
  const password = document.getElementById('regPassword').value;
  const target = document.getElementById('regTarget').value;

  if (password.length < 6) {
    showToast('⚠️', 'Mật khẩu phải có ít nhất 6 ký tự!');
    return;
  }

  const savedUsers = JSON.parse(localStorage.getItem('ep_users') || '[]');
  if (savedUsers.find(u => u.email === email)) {
    showToast('⚠️', 'Email này đã được đăng ký!');
    return;
  }

  const newUser = {
    id: Date.now(),
    name,
    email,
    password,
    target: parseFloat(target),
    streak: 0,
    joinDate: new Date().toISOString()
  };

  savedUsers.push(newUser);
  localStorage.setItem('ep_users', JSON.stringify(savedUsers));

  loginSuccess(newUser);
}

function loginSuccess(user) {
  currentUser = user;
  localStorage.setItem('ep_user', JSON.stringify(user));

  // Init progress if not exists
  const savedProgress = localStorage.getItem('ep_progress_' + user.id);
  userProgress = savedProgress ? JSON.parse(savedProgress) : {};

  closeModal();
  updateNavForUser();
  showToast('🎉', `Chào mừng ${user.name}! Bắt đầu học thôi!`);

  // Show dashboard
  const dashSection = document.getElementById('dashboardSection');
  if (dashSection) {
    dashSection.style.display = 'block';
    renderDashboard();
  }

  // Update streak
  updateStreak();
}

function logout() {
  currentUser = null;
  localStorage.removeItem('ep_user');
  updateNavForUser();
  showToast('👋', 'Đã đăng xuất thành công!');

  const dashSection = document.getElementById('dashboardSection');
  if (dashSection) dashSection.style.display = 'none';
}

function updateNavForUser() {
  const loginBtn = document.getElementById('loginBtn');
  const registerBtn = document.getElementById('registerBtn');
  const userMenu = document.getElementById('userMenu');
  const userAvatar = document.getElementById('userAvatar');
  const userNameDisplay = document.getElementById('userNameDisplay');

  if (currentUser) {
    if (loginBtn) loginBtn.style.display = 'none';
    if (registerBtn) registerBtn.style.display = 'none';
    if (userMenu) { userMenu.classList.remove('hidden'); userMenu.style.display = 'flex'; }
    if (userAvatar) userAvatar.textContent = currentUser.name.charAt(0).toUpperCase();
    if (userNameDisplay) userNameDisplay.textContent = currentUser.name.split(' ').slice(-1)[0];
  } else {
    if (loginBtn) loginBtn.style.display = '';
    if (registerBtn) registerBtn.style.display = '';
    if (userMenu) { userMenu.classList.add('hidden'); userMenu.style.display = 'none'; }
  }
}

// ---- WORD STATUS / PROGRESS ----
function markWordStatus(wordId, status) {
  // status: 1 = learning, 2 = mastered
  userProgress[`word_${wordId}`] = { status, date: new Date().toISOString() };
  saveProgress();

  const statusMap = { 1: '🔄 Đã đánh dấu "Cần ôn lại"', 2: '✅ Tuyệt vời! Đã thuộc từ này!' };
  showToast(status === 2 ? '⭐' : '🔄', statusMap[status]);
}

function getWordStatus(wordId) {
  const p = userProgress[`word_${wordId}`];
  return p ? p.status : 0;
}

function saveProgress() {
  if (currentUser) {
    localStorage.setItem('ep_progress_' + currentUser.id, JSON.stringify(userProgress));
  }
}

// ---- STREAK UPDATE ----
function updateStreak() {
  if (!currentUser) return;
  const lastLogin = localStorage.getItem('ep_lastlogin_' + currentUser.id);
  const today = new Date().toDateString();

  if (lastLogin === today) return; // Already counted today

  const yesterday = new Date(Date.now() - 86400000).toDateString();
  if (lastLogin === yesterday) {
    currentUser.streak = (currentUser.streak || 0) + 1;
  } else if (lastLogin !== today) {
    currentUser.streak = 1;
  }

  localStorage.setItem('ep_lastlogin_' + currentUser.id, today);
  localStorage.setItem('ep_user', JSON.stringify(currentUser));

  // Update streak display
  const streakEl = document.getElementById('streakNumber');
  if (streakEl) streakEl.textContent = currentUser.streak || 7;
}

// ---- DASHBOARD ----
function renderDashboard() {
  if (!currentUser) return;

  // Count progress
  const masteredWords = Object.keys(userProgress).filter(k => k.startsWith('word_') && userProgress[k].status === 2).length;
  const learningWords = Object.keys(userProgress).filter(k => k.startsWith('word_') && userProgress[k].status === 1).length;
  const masteredGrammar = Object.keys(userProgress).filter(k => k.startsWith('grammar_') && userProgress[k].status === 2).length;

  // Update progress bars
  const vocabBar = document.getElementById('vocabProgressBar');
  const vocabText = document.getElementById('vocabProgressText');
  if (vocabBar) vocabBar.style.width = `${(masteredWords / 3000 * 100).toFixed(1)}%`;
  if (vocabText) vocabText.textContent = `${masteredWords} / 3000`;

  const grammarBar = document.getElementById('grammarProgressBar');
  const grammarText = document.getElementById('grammarProgressText');
  if (grammarBar) grammarBar.style.width = `${(masteredGrammar / 14 * 100).toFixed(1)}%`;
  if (grammarText) grammarText.textContent = `${masteredGrammar} / 14`;

  // Streak
  const streakEl = document.getElementById('streakNumber');
  if (streakEl) streakEl.textContent = currentUser.streak || 0;

  // Heatmap
  renderHeatmap();
}

function renderHeatmap() {
  const grid = document.getElementById('heatmapGrid');
  if (!grid) return;

  const weeks = 26; // 6 months
  const days = ['', 'Mon', '', 'Wed', '', 'Fri', ''];
  grid.innerHTML = '';

  for (let w = 0; w < weeks; w++) {
    const week = document.createElement('div');
    week.className = 'heatmap-week';

    for (let d = 0; d < 7; d++) {
      const day = document.createElement('div');
      day.className = 'heatmap-day';

      // Generate random activity (in real app, use actual data)
      const date = new Date(Date.now() - ((weeks - w) * 7 + (7 - d)) * 86400000);
      const seed = date.getDate() + date.getMonth() * 31;
      const level = w < 24 ? Math.floor((Math.sin(seed * 0.7 + w * 0.3) + 1.2) * 2.1) % 5 : (d < 5 ? Math.floor(Math.random() * 4) : 0);
      day.classList.add(`l${level}`);
      day.title = `${date.toLocaleDateString('vi-VN')}: ${level > 0 ? level * 8 + ' phút học' : 'Chưa học'}`;

      week.appendChild(day);
    }
    grid.appendChild(week);
  }
}

// ---- TOAST NOTIFICATIONS ----
let toastTimeout;
function showToast(icon, message) {
  let toast = document.getElementById('globalToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'globalToast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<span class="toast-icon">${icon}</span><span class="toast-message">${message}</span>`;
  toast.classList.add('show');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('show'), 3500);
}

// ---- AUDIO (Text-to-Speech fallback) ----
function playAudio(type, word) {
  const text = word || document.getElementById('wod-word')?.textContent || 'hello';
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = type === 'us' ? 'en-US' : 'en-GB';
    utterance.rate = 0.85;
    utterance.pitch = 1;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  }
}

function playModalAudio(type) {
  const word = document.getElementById('modal-word-name')?.textContent;
  playAudio(type, word);
}

// ---- KEYBOARD SHORTCUTS ----
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ---- INIT ON DOM READY ----
document.addEventListener('DOMContentLoaded', initApp);
