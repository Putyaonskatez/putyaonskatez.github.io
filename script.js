const container = document.getElementById('background-text-container');
container.innerHTML = '';

for (let i = 0; i < 30; i++) {
  const span = document.createElement('span');
  span.className = 'floating-text';
  span.textContent = 'PYOS';
  span.style.left = `${Math.random() * 100}vw`;
  span.style.animationDuration = `${Math.random() * 8 + 5}s`;
  container.appendChild(span);
}
