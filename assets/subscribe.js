(function(){
  function validateEmail(email){
    return /.+@.+\..+/.test(email);
  }

  async function submit(e){
    e.preventDefault();
    const form = e.currentTarget;
    const msg = form.querySelector('.form-message');
    const email = form.email.value.trim();
    const endpoint = (form.dataset.endpoint || '').trim();
    const submitBtn = form.querySelector('button[type="submit"]');

    if(!validateEmail(email)){
      msg.textContent = 'Please enter a valid email address.';
      msg.style.color = 'var(--accent)';
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';

    try{
      if(endpoint){
        // Prefer JSON; many services (e.g., Formspree) accept JSON with Accept header
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, source: 'cornucopia-landing' })
        });
        if(!res.ok){
          throw new Error('Request failed');
        }
        msg.textContent = 'Thanks! We\'ll be in touch.';
        msg.style.color = 'var(--muted)';
        form.reset();
      } else {
        // Fallback: local capture only
        const key = 'cornucopia-subscribers';
        const list = JSON.parse(localStorage.getItem(key) || '[]');
        if(!list.includes(email)) list.push(email);
        localStorage.setItem(key, JSON.stringify(list));
        msg.textContent = 'Saved locally. Configure a backend to receive emails.';
        msg.style.color = 'var(--accent)';
      }
    }catch(err){
      msg.textContent = 'Something went wrong. Please try again later.';
      msg.style.color = 'var(--accent)';
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Notify me';
    }
  }

  document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('subscribe-form');
    if(form) form.addEventListener('submit', submit);
  });
})();
