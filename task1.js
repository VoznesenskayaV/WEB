const changeColorBtn = document.getElementById('changeColorBtn');

function getRandomColor() {
    let r, g, b;

    do {
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);
    } while (r > 128 || g > 128);

    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
}

changeColorBtn.addEventListener('click', changeBackgroundColor);

function toggleHighContrast() {
    document.body.classList.toggle('high-contrast');
    changeColorBtn.classList.toggle('high-contrast');
}

document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'c') {
        toggleHighContrast();
    }
});
