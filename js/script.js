document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
      var expanded = links.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded);
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var q = item.querySelector('.faq-q');
    var a = item.querySelector('.faq-a');
    if (!q || !a) return;
    q.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function (openItem) {
        if (openItem !== item) {
          openItem.classList.remove('open');
          openItem.querySelector('.faq-a').style.maxHeight = null;
        }
      });
      item.classList.toggle('open', !isOpen);
      a.style.maxHeight = !isOpen ? a.scrollHeight + 'px' : null;
    });
  });

  // Enquiry form
  // NOTE: This form is not yet connected to a live email/form backend.
  // It currently validates and shows a success message only.
  // To go live, replace the block below with a fetch()/AJAX call to a
  // form service (e.g. Formspree, EmailJS, or a custom API endpoint that
  // emails info@amarsworld.com), then show #form-success on a successful
  // response instead of unconditionally.
  var form = document.getElementById('enquiry-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // --- Backend integration point ---
      // Example (once a service is connected):
      // fetch('https://your-form-endpoint.example.com/submit', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(Object.fromEntries(new FormData(form)))
      // }).then(function (res) {
      //   if (res.ok) { showSuccess(); form.reset(); }
      // });

      showSuccess();
      form.reset();
    });
  }

  function showSuccess() {
    var success = document.getElementById('form-success');
    if (form) form.style.display = 'none';
    if (success) success.classList.add('show');
  }

  // Active nav link highlight
  var current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
});
