window.onerror = function (msg, src, line, col, err) {
  document.body.style.cssText = 'background:#fff;margin:0;';
  var d = document.createElement('div');
  d.style.cssText = 'padding:24px;font-family:monospace;background:#fee;border:2px solid red;margin:16px;border-radius:8px;';
  d.innerHTML = '<b>Error JS:</b><br>' + msg + '<br>Línea: ' + line + (err ? '<br>' + err.stack : '');
  document.body.prepend(d);
};
window.addEventListener('unhandledrejection', function (e) {
  var d = document.createElement('div');
  d.style.cssText = 'padding:24px;font-family:monospace;background:#fee;border:2px solid red;margin:16px;border-radius:8px;';
  d.innerHTML = '<b>Promise Error:</b><br>' + (e.reason && e.reason.stack ? e.reason.stack : e.reason);
  document.body.prepend(d);
});

window.triggerBombExplosion = function (el) {
  if (!el) return;
  var rect = el.getBoundingClientRect();
  var cx = rect.left + rect.width / 2;
  var cy = rect.top + rect.height / 2;

  // Flash central grande
  var flash = document.createElement('div');
  flash.className = 'bomb-flash';
  flash.style.left = cx + 'px';
  flash.style.top = cy + 'px';
  document.body.appendChild(flash);
  flash.addEventListener('animationend', function () { flash.remove(); });

  // Onda expansiva principal (naranja grande)
  var ring = document.createElement('div');
  ring.className = 'bomb-shockwave';
  ring.style.left = cx + 'px';
  ring.style.top = cy + 'px';
  document.body.appendChild(ring);
  ring.addEventListener('animationend', function () { ring.remove(); });

  // Segunda onda (dorada más rápida)
  var ring2 = document.createElement('div');
  ring2.className = 'bomb-shockwave2';
  ring2.style.left = cx + 'px';
  ring2.style.top = cy + 'px';
  document.body.appendChild(ring2);
  ring2.addEventListener('animationend', function () { ring2.remove(); });

  // Partículas: 20 emojis disparados en todas direcciones
  var emojis = ['💥', '⭐', '✨', '💫', '🌟', '💥', '⭐', '✨', '💫', '🌟', '💥', '✨', '⭐', '💥', '💫', '🌟', '✨', '💥', '⭐', '💫'];
  var count = emojis.length;
  for (var i = 0; i < count; i++) {
    (function (idx) {
      var angle = (idx / count) * Math.PI * 2 + (Math.random() - 0.5) * 0.4;
      var dist = 100 + Math.random() * 120;
      var delay = Math.random() * 60;
      var p = document.createElement('div');
      p.className = 'bomb-particle';
      p.textContent = emojis[idx];
      p.style.left = cx + 'px';
      p.style.top = cy + 'px';
      p.style.setProperty('--tx', (Math.cos(angle) * dist) + 'px');
      p.style.setProperty('--ty', (Math.sin(angle) * dist) + 'px');
      p.style.animationDelay = delay + 'ms';
      p.style.fontSize = (1.8 + Math.random() * 1.2) + 'rem';
      document.body.appendChild(p);
      p.addEventListener('animationend', function () { p.remove(); });
    })(i);
  }
};