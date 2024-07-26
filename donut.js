(function() {
    const canvas = document.getElementById('animationCanvas');
    const ctx = canvas.getContext('2d');

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let x = canvas.width / 2;
    let y = canvas.height / 2;
    let dx = 2;
    let dy = -2;
    const radius = 20;
    const color = '#FF5733'; // Ball color

    function drawBall() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
    }

    function updatePosition() {
        if (x + dx > canvas.width - radius || x + dx < radius) {
            dx = -dx;
        }
        if (y + dy > canvas.height - radius || y + dy < radius) {
            dy = -dy;
        }

        x += dx;
        y += dy;
    }

    function animate() {
        drawBall();
        updatePosition();
        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
})();