const container = document.getElementById('background-text-container');
const numTexts = 30; // number of floating PYOS instances

for(let i = 0; i < numTexts; i++) {
  const span = document.createElement('span');
  span.classList.add('floating-text');
  span.textContent = 'PYOS';

  // Random position within viewport
  span.style.top = Math.random() * 100 + 'vh';
  span.style.left = Math.random() * 100 + 'vw';

  // Random font size between 20 and 50 px
  span.style.fontSize = (20 + Math.random() * 30) + 'px';

  // Random animation duration between 4 and 8 seconds
  span.style.animationDuration = (4 + Math.random() * 4) + 's';

  // Random animation delay
  span.style.animationDelay = (Math.random() * 5) + 's';

  container.appendChild(span);
}
