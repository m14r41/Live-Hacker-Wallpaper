// Matrix background setup
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

const fontSize = 18;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array.from({ length: columns }, () => Math.random() * canvas.height / fontSize);
const chars = ['0', '1'];

function drawMatrix() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#0f0';
  ctx.font = `${fontSize}px "Share Tech Mono"`;

  for (let i = 0; i < drops.length; i++) {
    const text = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}
setInterval(drawMatrix, 40);

// Static terminal lines
const lines = [
  { tag: '[ACCESS GRANTED]', tagClass: 'access', content: 'USER: m14r41' },
  { tag: '[ROLE]', tagClass: 'role', content: 'Security Engineer' },
  { tag: '[LOCATION]', tagClass: 'location', content: 'India (UTC+5:30)' },
  { tag: '[Authorization]', tagClass: 'role', content: 'You are authorized' },
  { tag: '[Messages]', tagClass: 'github', content: 'You are welcome!' }
];

function typeLine(lineIndex = 0) {
  if (lineIndex >= lines.length) return startDynamicLines();

  const line = lines[lineIndex];
  const lineEl = document.getElementById(`line${lineIndex + 1}`);
  const tagHTML = `<span class="tag ${line.tagClass}">${line.tag}</span> `;
  let i = 0;

  function typeChar() {
    if (i < line.content.length) {
      lineEl.innerHTML = tagHTML + line.content.substring(0, i + 1);
      i++;
      setTimeout(typeChar, 50);
    } else {
      setTimeout(() => typeLine(lineIndex + 1), 400);
    }
  }
  lineEl.innerHTML = tagHTML;
  typeChar();
}

setTimeout(() => typeLine(0), 1000);

// Dynamic hacker lines
const hackerLines = [
  ">> Establishing encrypted VPN tunnel...",
  ">> Connection secured. IP masked.",
  ">> System reboot sequence initiated...",
  ">> Kernel modules loading...",
  ">> Accessing hidden partitions...",
  ">> Deploying payload to target node...",
  ">> Listening on port 443...",
  ">> Blockchain verification complete.",
  ">> Quantum key exchange successful.",
  ">> AI subroutine activated. Monitoring..."
];

let currentLineIndex = 0;
const dynamicEl = document.getElementById('dynamic-lines');

function typeDynamicLine(text, charIndex = 0) {
  if (charIndex <= text.length) {
    dynamicEl.innerHTML = `<span class="tag role">[LOG]</span> ${text.substring(0, charIndex)}<span class="cursor"></span>`;
    setTimeout(() => typeDynamicLine(text, charIndex + 1), 40);
  } else {
    setTimeout(() => {
      currentLineIndex = (currentLineIndex + 1) % hackerLines.length;
      typeDynamicLine(hackerLines[currentLineIndex]);
    }, 2000);
  }
}

function startDynamicLines() {
  typeDynamicLine(hackerLines[currentLineIndex]);
}

// Wave animation
const letters = document.querySelectorAll('.heading-box span');
let waveIndex = 0;

function waveEffect() {
  letters.forEach(letter => letter.classList.remove('active'));
  letters[waveIndex].classList.add('active');
  waveIndex = (waveIndex + 1) % letters.length;
}

setInterval(waveEffect, 300);
waveEffect();
