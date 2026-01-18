function loadLogo() {
    fetch('logo.txt')
        .then(res => res.ok ? res.text() : Promise.reject())
        .then(data => {
            const el = document.getElementById('logo-ascii');
            if (el) el.textContent = data;
        })
        .catch(() => console.error('Error loading logo'));
}

function typeText(id) {
    const el = document.getElementById(id);
    if (!el) return;

    const text = el.innerText;
    el.innerText = '';
    let i = 0;

    (function write() {
        if (i < text.length) {
            el.innerText += text.charAt(i++);
            setTimeout(write, 20);
        }
    })();
}

function toggleText(id, btn) {
    const el = document.getElementById(id);
    if (!el) return;

    const expanded = el.classList.toggle('full-text');
    el.classList.toggle('cut-text', !expanded);
    btn.innerText = expanded ? "Ler menos" : "Ler mais...";
}

window.onload = () => {
    loadLogo();
    typeText('typewriter');

};