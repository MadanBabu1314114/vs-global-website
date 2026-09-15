document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    var backdrop = document.getElementById('nav-backdrop');
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.id = 'nav-backdrop';
      backdrop.className = 'nav-backdrop';
      backdrop.setAttribute('aria-hidden', 'true');
      document.body.appendChild(backdrop);
    }
    function syncHeaderHeight() {
      var h = document.querySelector('.site-header');
      if (h) {
        var ht = h.offsetHeight + 'px';
        backdrop.style.top = ht;
        if (window.innerWidth <= 960) {
          links.style.top = ht;
          links.style.height = 'calc(100dvh - ' + ht + ')';
        } else {
          links.style.top = '';
          links.style.height = '';
        }
      }
    }
    function isOpen() { return links.classList.contains('open'); }
    function openMenu() {
      links.classList.add('open');
      backdrop.classList.add('show');
      document.body.classList.add('menu-open');
      toggle.setAttribute('aria-expanded', 'true');
    }
    function closeMenu() {
      links.classList.remove('open');
      backdrop.classList.remove('show');
      document.body.classList.remove('menu-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
    syncHeaderHeight();
    window.addEventListener('resize', syncHeaderHeight);
    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      if (isOpen()) closeMenu(); else { syncHeaderHeight(); openMenu(); }
    });
    backdrop.addEventListener('click', closeMenu);
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isOpen()) closeMenu();
    });
    var mql = window.matchMedia('(min-width: 961px)');
    function onBreakpoint(e) { if (e.matches) closeMenu(); }
    if (mql.addEventListener) mql.addEventListener('change', onBreakpoint);
    else if (mql.addListener) mql.addListener(onBreakpoint);
  }
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var q = item.querySelector('.faq-q');
    var a = item.querySelector('.faq-a');
    if (!q || !a) return;
    q.addEventListener('click', function () {
      var isOpenFaq = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function (openItem) {
        if (openItem !== item) {
          openItem.classList.remove('open');
          var el = openItem.querySelector('.faq-a');
          if (el) el.style.maxHeight = null;
        }
      });
      item.classList.toggle('open', !isOpenFaq);
      a.style.maxHeight = !isOpenFaq ? a.scrollHeight + 'px' : null;
    });
  });
  var form = document.getElementById('enquiry-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      showSuccess();
      form.reset();
    });
  }
  function showSuccess() {
    var success = document.getElementById('form-success');
    if (form) form.style.display = 'none';
    if (success) success.classList.add('show');
  }
  var current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
});
