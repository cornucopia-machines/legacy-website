(function(){
  const STORAGE_KEY = 'theme'; // values: 'dark' | 'system'

  function applyTheme(mode){
    const root = document.documentElement;
    if(mode === 'dark'){
      root.classList.add('force-dark');
    }else{
      root.classList.remove('force-dark');
    }
  }

  function updateButton(mode){
    const btn = document.querySelector('.theme-toggle');
    if(!btn) return;
    const isDark = mode === 'dark';
    btn.setAttribute('aria-pressed', String(isDark));
    btn.querySelector('.icon').textContent = isDark ? '☀️' : '🌙';
    btn.querySelector('.label').textContent = isDark ? 'Light' : 'Dark';
  }

  function currentMode(){
    try { return localStorage.getItem(STORAGE_KEY) || 'system'; } catch { return 'system'; }
  }

  function toggle(){
    const next = currentMode() === 'dark' ? 'system' : 'dark';
    try { localStorage.setItem(STORAGE_KEY, next); } catch {}
    applyTheme(next);
    updateButton(next);
  }

  document.addEventListener('DOMContentLoaded', () => {
    const mode = currentMode();
    applyTheme(mode);
    updateButton(mode);
    const btn = document.querySelector('.theme-toggle');
    if(btn) btn.addEventListener('click', toggle);
  });
})();
