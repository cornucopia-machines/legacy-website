(function(){
  const toggle = () => {
    const isDark = document.documentElement.dataset.theme === 'dark';
    const next = isDark ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch (e) {}
    updateButton(next);
  };

  function updateButton(theme){
    const btn = document.querySelector('.theme-toggle');
    if(!btn) return;
    const isDark = theme === 'dark';
    btn.setAttribute('aria-pressed', String(isDark));
    btn.querySelector('.icon').textContent = isDark ? '☀️' : '🌙';
    btn.querySelector('.label').textContent = isDark ? 'Light' : 'Dark';
  }

  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.theme-toggle');
    if(!btn) return;
    btn.addEventListener('click', toggle);
    const current = document.documentElement.dataset.theme || 'light';
    updateButton(current);
  });
})();
