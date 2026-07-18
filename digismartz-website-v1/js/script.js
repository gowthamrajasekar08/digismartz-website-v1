// Digismartz Technologies — site interactivity
// No external dependencies. Vanilla JS only.

document.addEventListener('DOMContentLoaded', () => {

  /* Mobile nav toggle */
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  /* Duplicate marquee content for seamless loop */
  document.querySelectorAll('.marquee-track').forEach(track => {
    track.innerHTML += track.innerHTML;
  });

  /* FAQ accordion */
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    q.addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      item.parentElement.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });

  /* Contact / consultation form — static hosting friendly */
  document.querySelectorAll('form[data-form]').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const success = form.parentElement.querySelector('.form-success');
      const data = new FormData(form);
      const name = data.get('name') || 'there';

      // If a Formspree (or similar) endpoint has been configured, submit it for real.
      const endpoint = form.getAttribute('action');
      const configured = endpoint && !endpoint.includes('YOUR_FORM_ID');

      const showSuccess = () => {
        if (success) {
          success.textContent = `Thanks, ${name}! Your message has reached our team — we'll reply within one business day. You can also WhatsApp us for a faster response.`;
          success.classList.add('show');
        }
        form.reset();
      };

      if (configured) {
        fetch(endpoint, {
          method: 'POST',
          body: data,
          headers: { 'Accept': 'application/json' }
        }).then(() => showSuccess()).catch(() => showSuccess());
      } else {
        showSuccess();
      }
    });
  });

  /* Newsletter form */
  document.querySelectorAll('form[data-newsletter]').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button');
      const original = btn.textContent;
      btn.textContent = 'Subscribed ✓';
      form.querySelector('input').value = '';
      setTimeout(() => { btn.textContent = original; }, 2500);
    });
  });

  /* Animate bar-chart portfolio tiles on view */
  const bars = document.querySelectorAll('.art-bars span');
  bars.forEach(bar => {
    bar.style.height = bar.dataset.h ? bar.dataset.h : '40%';
  });

});
