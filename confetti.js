const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const colors = ['#ff6f61', '#ffcc00', '#4caf50', '#2196f3', '#9c27b0'];
const confetti = [];

for (let i = 0; i < 150; i++) {
    confetti.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 5 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        velocity: {
            x: (Math.random() - 0.5) * 10,
            y: Math.random() * 10 + 5
        }
    });
}

function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        particle.x += particle.velocity.x;
        particle.y += particle.velocity.y;
        if (particle.y > canvas.height) {
            particle.y = 0;
            particle.x = Math.random() * canvas.width;
        }
    });
    requestAnimationFrame(drawConfetti);
}

drawConfetti();