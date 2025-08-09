(function(){
  function validateEmail(email){
    return /.+@.+\..+/.test(email);
  }

  async function submit(e){
    e.preventDefault();
    const form = e.currentTarget;
    const msg = form.querySelector('.form-message');
    const email = form.email.value.trim();

    if(!validateEmail(email)){
      msg.textContent = 'Please enter a valid email address.';
      msg.style.color = 'var(--accent)';
      return;
    }

    try{
      // TODO: Hook up to your backend or a service (Buttondown, Beehiiv, Mailchimp, etc.)
      // For now, just store locally so you can export later.
      const key = 'cornucopia-subscribers';
      const list = JSON.parse(localStorage.getItem(key) || '[]');
      if(!list.includes(email)) list.push(email);
      localStorage.setItem(key, JSON.stringify(list));
      msg.textContent = 'Thanks! We\'ll be in touch.';
      msg.style.color = 'var(--muted)';
      form.reset();
    }catch(err){
      msg.textContent = 'Something went wrong. Please try again later.';
      msg.style.color = 'var(--accent)';
    }
  }

  document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('subscribe-form');
    if(form) form.addEventListener('submit', submit);
  });
})();
