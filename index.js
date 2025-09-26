// Partículas
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let stars = [];
for (let i = 0; i < 150; i++) stars.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, radius: Math.random() * 2, speed: Math.random() * 0.3 + 0.1 });
function drawStars() { ctx.clearRect(0, 0, canvas.width, canvas.height); ctx.fillStyle = "#fff"; stars.forEach(s => { ctx.beginPath(); ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2); ctx.fill(); s.y += s.speed; if (s.y > canvas.height) s.y = 0; }); requestAnimationFrame(drawStars); }
drawStars();

// Frases
const frases = ["Você é meu mundo", "Amor que nunca acaba", "Você ilumina minha vida", "Seu abraço é meu lar", "Você é meu destino", "Sempre vou te escolher", "Você é meu tudo", "Amor além do tempo", "Você é minha inspiração", "Contando até o infinito", "Merece um fio terra"];
let current = 0;
const phraseSpan = document.getElementById("phraseSpan");
function updatePhrase() { phraseSpan.textContent = frases[current]; current = (current + 1) % frases.length; }
setInterval(updatePhrase, 3000); updatePhrase();

// Mensagem inicial
const messageOverlay = document.getElementById("messageOverlay");
const closeMessage = document.getElementById("closeMessage");
function updateTime() { const start = new Date(2023, 1, 1, 0, 0, 0); const now = new Date(); let years = now.getFullYear() - start.getFullYear(); let months = now.getMonth() - start.getMonth(); let days = now.getDate() - start.getDate(); let hours = now.getHours() - start.getHours(); let minutes = now.getMinutes() - start.getMinutes(); let seconds = now.getSeconds() - start.getSeconds(); if (seconds < 0) { seconds += 60; minutes--; } if (minutes < 0) { minutes += 60; hours--; } if (hours < 0) { hours += 24; days--; } if (days < 0) { months--; const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0); days += prevMonth.getDate(); } if (months < 0) { months += 12; years--; } const timeStr = `${years} anos, ${months} meses, ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`; document.getElementById('timePassed').textContent = `Já se passaram: ${timeStr}`; }
updateTime(); setInterval(updateTime, 1000);

// Contador infinito
const counter = document.getElementById('counter');
let value = 0n;
function formatBig(n) { return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); }
function stepCounter() { value += 500000n; counter.textContent = `${formatBig(value)} ❤️\nMeu amor continuará a crescer ✨`; requestAnimationFrame(stepCounter); }

// Barra poética
const bar = document.getElementById('bar');
let barValue = 0, messageIndex = 0;
const messages = ["Alcançou a Lua 🌙", "Alcançou Mercúrio", "Alcançou Vênus", "Alcançou Marte", "Alcançou Júpiter", "Alcançou Saturno", "Alcançou Urano", "Alcançou Netuno", "Alcançou Plutão", "Alcançou o Sol ☀️", "Alcançou o Espaço estelar ✨"];
function animateBar() { if (barValue < 100) { barValue += 0.2; bar.style.width = barValue + "%"; } else { if (messageIndex < messages.length) { bar.setAttribute("data-stage", messages[messageIndex]); messageIndex++; setTimeout(animateBar, 1500); return; } } requestAnimationFrame(animateBar); }

// Inicia após fechar mensagem
closeMessage.addEventListener("click", () => { messageOverlay.style.display = "none"; requestAnimationFrame(animateBar); requestAnimationFrame(stepCounter); });

const slidesContainer = document.getElementById("slides");
const slideCount = slidesContainer.children.length;
const slideWidth = slidesContainer.children[0].offsetWidth + 20; // largura da imagem + gap
let position = window.innerWidth; // começa fora da tela
const speed = 1; // pixels por frame

function animateCarousel() {
  position -= speed;
  slidesContainer.style.left = position + "px";

  // quando todas as imagens saírem da tela, reinicia
  if (position <= -slideWidth * slideCount) {
    position = window.innerWidth;
  }

  requestAnimationFrame(animateCarousel);
}

animateCarousel();
