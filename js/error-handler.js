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