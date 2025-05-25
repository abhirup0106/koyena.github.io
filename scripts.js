// Create stars
function createStars() {
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.animationDelay = `${Math.random() * 2}s`;
        document.getElementById('wish-page').appendChild(star);
    }
}

// Create shooting stars
function createShootingStar() {
    const shootingStar = document.createElement('div');
    shootingStar.className = 'shooting-star';
    shootingStar.style.left = `${Math.random() * 50}vw`;
    shootingStar.style.top = `${Math.random() * 50}vh`;
    shootingStar.style.animationDuration = `${1 + Math.random() * 0.5}s`;
    document.getElementById('wish-page').appendChild(shootingStar);

    setTimeout(() => {
        shootingStar.remove();
    }, 1500);
}

// Create poppers
function createPopper() {
    const popperCount = 10;
    const originX = Math.random() * 100;
    const originY = Math.random() * 100;

    for (let i = 0; i < popperCount; i++) {
        const popper = document.createElement('div');
        popper.className = 'popper';
        popper.style.left = `${originX}vw`;
        popper.style.top = `${originY}vh`;
        const angle = Math.random() * 2 * Math.PI;
        const distance = 50 + Math.random() * 100;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        popper.style.setProperty('--tx', `${tx}px`);
        popper.style.setProperty('--ty', `${ty}px`);
        popper.style.background = `hsl(${Math.random() * 360}, 70%, 50%)`;
        popper.style.animationDuration = `${2 + Math.random() * 1}s`;
        document.getElementById('wish-page').appendChild(popper);

        setTimeout(() => {
            popper.remove();
        }, 3000);
    }
}

function showWishPage() {
    document.getElementById('gift-page').style.display = 'none';
    document.getElementById('wish-page').style.display = 'flex';
    createStars();
    setInterval(createShootingStar, 1000);
    setInterval(createPopper, 1500);
}
