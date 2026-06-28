const canvas = document.querySelector("#noise-field");
const ctx = canvas.getContext("2d", { alpha: true });

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

let width = 0;
let height = 0;
let particles = [];

function resetScrollPosition() {
  if (!window.location.hash) {
    window.scrollTo(0, 0);
  }
}

function resizeCanvas() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = Math.floor(width * dpr);
  canvas.height = Math.floor(height * dpr);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const count = Math.max(42, Math.floor((width * height) / 22000));
  particles = Array.from({ length: count }, (_, index) => ({
    x: Math.random() * width,
    y: Math.random() * height,
    r: 1.2 + Math.random() * 3.8,
    hue: [324, 189, 82, 258, 25][index % 5],
    speed: 0.18 + Math.random() * 0.52,
    drift: Math.random() * Math.PI * 2,
  }));
}

function draw(time) {
  ctx.clearRect(0, 0, width, height);

  particles.forEach((particle) => {
    particle.y -= particle.speed;
    particle.x += Math.sin(time * 0.001 + particle.drift) * 0.35;

    if (particle.y < -12) {
      particle.y = height + 12;
      particle.x = Math.random() * width;
    }

    ctx.beginPath();
    ctx.fillStyle = `hsla(${particle.hue}, 92%, 56%, 0.28)`;
    ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
    ctx.fill();
  });

  requestAnimationFrame(draw);
}

resizeCanvas();
resetScrollPosition();
requestAnimationFrame(draw);
window.addEventListener("resize", resizeCanvas);
window.addEventListener("pageshow", resetScrollPosition);
