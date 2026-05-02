// ---- SHARED COMPONENTS (Navbar + Auth Modal) ----
// Inject navbar and auth modal into pages that use placeholder divs

function injectNavbar() {
  const placeholder = document.getElementById('navbar-placeholder');
  if (!placeholder) return;

  placeholder.outerHTML = `
  <nav class="navbar" id="navbar">
    <div class="nav-container">
      <a href="index.html" class="nav-logo">
        <div class="logo-icon">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect width="28" height="28" rx="8" fill="url(#logoGrad)" />
            <text x="14" y="20" text-anchor="middle" fill="white" font-size="14" font-weight="800" font-family="Inter">E</text>
            <defs><linearGradient id="logoGrad" x1="0" y1="0" x2="28" y2="28"><stop offset="0%" stop-color="#6366f1" /><stop offset="100%" stop-color="#8b5cf6" /></linearGradient></defs>
          </svg>
        </div>
        <span>EnglishPro <span class="logo-accent">THPT</span></span>
      </a>
      <ul class="nav-links" id="navLinks">
        <li><a href="vocabulary.html" class="nav-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" /></svg>
          T\u1eeb V\u1ef1ng Oxford</a></li>
        <li><a href="grammar.html" class="nav-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /></svg>
          C\u1ea5u Tr\u00fac THPT</a></li>
        <li><a href="practice.html" class="nav-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3" /></svg>
          Luy\u1ec7n \u0110\u1ec1</a></li>
      </ul>
      <div class="nav-actions">
        <button class="btn-ghost" onclick="openAuthModal('login')" id="loginBtn">\u0110\u0103ng nh\u1eadp</button>
        <button class="btn-primary" onclick="openAuthModal('register')" id="registerBtn">\u0110\u0103ng k\u00fd</button>
        <div class="user-menu hidden" id="userMenu">
          <div class="user-avatar" id="userAvatar">A</div>
          <span id="userNameDisplay">H\u1ecdc sinh</span>
          <button class="btn-ghost btn-sm" onclick="logout()">\u0110\u0103ng xu\u1ea5t</button>
        </div>
      </div>
      <button class="nav-toggle" id="navToggle" onclick="toggleNav()"><span></span><span></span><span></span></button>
    </div>
  </nav>`;
}

function injectAuthModal() {
  const placeholder = document.getElementById('auth-modal-placeholder');
  if (!placeholder) return;

  placeholder.outerHTML = `
  <div class="modal-overlay" id="authModal" onclick="closeAuthModal(event)">
    <div class="modal" id="authModalContent">
      <button class="modal-close" onclick="closeModal()"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
      <div class="modal-tabs"><button class="tab-btn active" id="loginTab" onclick="switchTab('login')">\u0110\u0103ng nh\u1eadp</button><button class="tab-btn" id="registerTab" onclick="switchTab('register')">\u0110\u0103ng k\u00fd</button></div>
      <div class="tab-content active" id="loginContent">
        <div class="modal-header"><h2>Ch\u00e0o m\u1eebng tr\u1edf l\u1ea1i! \ud83d\udc4b</h2><p>Ti\u1ebfp t\u1ee5c h\u00e0nh tr\u00ecnh h\u1ecdc ti\u1ebfng Anh c\u1ee7a b\u1ea1n</p></div>
        <form onsubmit="handleLogin(event)"><div class="form-group"><label>Email</label><input type="email" id="loginEmail" placeholder="example@email.com" required /></div><div class="form-group"><label>M\u1eadt kh\u1ea9u</label><input type="password" id="loginPassword" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" required /></div><button type="submit" class="btn-primary btn-full">\u0110\u0103ng nh\u1eadp</button><p style="text-align:center;margin-top:8px;"><a onclick="handleForgotPassword()" style="cursor:pointer;color:var(--primary-light);font-size:0.85rem;">Qu\u00ean m\u1eadt kh\u1ea9u?</a></p></form>
        <p class="modal-switch">Ch\u01b0a c\u00f3 t\u00e0i kho\u1ea3n? <a onclick="switchTab('register')">\u0110\u0103ng k\u00fd ngay</a></p>
      </div>
      <div class="tab-content" id="registerContent">
        <div class="modal-header"><h2>B\u1eaft \u0111\u1ea7u mi\u1ec5n ph\u00ed! \ud83d\ude80</h2><p>T\u1ea1o t\u00e0i kho\u1ea3n \u0111\u1ec3 theo d\u00f5i ti\u1ebfn \u0111\u1ed9 h\u1ecdc t\u1eadp</p></div>
        <form onsubmit="handleRegister(event)"><div class="form-group"><label>T\u00ean h\u1ecdc sinh</label><input type="text" id="regName" placeholder="Nguy\u1ec5n V\u0103n A" required /></div><div class="form-group"><label>Email</label><input type="email" id="regEmail" placeholder="example@email.com" required /></div><div class="form-group"><label>M\u1eadt kh\u1ea9u</label><input type="password" id="regPassword" placeholder="T\u1ed1i thi\u1ec3u 6 k\u00fd t\u1ef1" required /></div><div class="form-group"><label>M\u1ee5c ti\u00eau \u0111i\u1ec3m THPT</label><select id="regTarget"><option value="6">6.0 \u2013 \u0110\u1ee7 \u0111i\u1ec3m x\u00e9t tuy\u1ec3n</option><option value="7">7.0 \u2013 Trung b\u00ecnh kh\u00e1</option><option value="8" selected>8.0 \u2013 Kh\u00e1 Gi\u1ecfi</option><option value="9">9.0 \u2013 Xu\u1ea5t s\u1eafc</option><option value="10">10.0 \u2013 Ho\u00e0n h\u1ea3o tuy\u1ec7t \u0111\u1ed1i</option></select></div><button type="submit" class="btn-primary btn-full">T\u1ea1o t\u00e0i kho\u1ea3n</button></form>
        <p class="modal-switch">\u0110\u00e3 c\u00f3 t\u00e0i kho\u1ea3n? <a onclick="switchTab('login')">\u0110\u0103ng nh\u1eadp</a></p>
      </div>
    </div>
  </div>`;
}

// Auto-inject on DOM ready (for pages that use placeholders)
document.addEventListener('DOMContentLoaded', () => {
  injectNavbar();
  injectAuthModal();
});
