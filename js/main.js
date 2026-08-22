// main.js

function esconderLoader() {
  var loader = document.getElementById('loader');
  if (loader) loader.classList.add('esconder');
}

window.addEventListener('load', esconderLoader);
setTimeout(esconderLoader, 2500);

var nav = document.getElementById('nav');
var navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', function() {
  nav.classList.toggle('compacto', window.scrollY > 50);

  var atual = '';
  document.querySelectorAll('section[id], div[id]').forEach(function(s) {
    if (window.scrollY >= s.offsetTop - 180) atual = s.id;
  });
  navLinks.forEach(function(a) {
    a.classList.toggle('ativo', a.getAttribute('href') === '#' + atual);
  });

  var btt = document.getElementById('voltarTopo');
  if (btt) btt.style.display = window.scrollY > 400 ? 'flex' : 'none';
});


var obs = new IntersectionObserver(function(entries) {
  entries.forEach(function(e) {
    if (!e.isIntersecting) return;
    e.target.classList.add('visivel');
    e.target.querySelectorAll('.skill-barra').forEach(function(b) {
      b.style.width = b.dataset.w;
    });
  });
}, { threshold: 0.07 });

document.querySelectorAll('.skill-barra').forEach(function(b) {
  b.dataset.w = b.style.width;
  b.style.width = '0';
});

document.querySelectorAll('.reveal, .reveal-esq, .reveal-dir').forEach(function(el) {
  el.classList.add('escondido');
  obs.observe(el);
});


window.addEventListener('scroll', function() {
  var y = window.scrollY;
  var livrosBg = document.querySelector('.hero-livros-bg');
  if (livrosBg) livrosBg.style.transform = 'translateY(' + (y * 0.15) + 'px)';
});
