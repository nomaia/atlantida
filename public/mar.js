// Ambiente: raios de luz + bolhas subindo
(function () {
  const mar = document.createElement('div');
  mar.className = 'mar';
  mar.innerHTML = '<div class="raios"></div><div class="leito"></div>';
  document.body.prepend(mar);

  const qtd = window.innerWidth < 600 ? 14 : 26;
  for (let i = 0; i < qtd; i++) criarBolha(mar, Math.random() * -20);

  function criarBolha(alvo, atraso = 0, x) {
    const b = document.createElement('span');
    const t = 4 + Math.random() * 18;
    b.className = 'bolha';
    b.style.width = b.style.height = t + 'px';
    b.style.left = (x ?? Math.random() * 100) + '%';
    b.style.animationDuration = 9 + Math.random() * 12 + 's';
    b.style.animationDelay = atraso + 's';
    alvo.appendChild(b);
    return b;
  }

  // rajada de bolhas (usada ao confirmar o voto)
  window.rajadaBolhas = function () {
    for (let i = 0; i < 30; i++) {
      const b = criarBolha(mar, Math.random() * 0.6, 30 + Math.random() * 40);
      b.style.animationDuration = 2.5 + Math.random() * 2.5 + 's';
      b.style.animationIterationCount = '1';
      setTimeout(() => b.remove(), 6000);
    }
  };
})();
