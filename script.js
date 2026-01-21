const loadLogo = () => {
    fetch('logo.txt')
        .then(res => res.ok ? res.text() : Promise.reject())
        .then(data => {
            const el = document.getElementById('logo-ascii');
            if (el) el.textContent = data;
        })
        .catch(() => console.error('Error loading logo'));
};

const typeText = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const text = el.innerText;
    el.innerText = '';
    let i = 0;

    const write = () => {
        if (i < text.length) {
            el.innerText += text.charAt(i++);
            setTimeout(write, 20);
        }
    };
    write();
};

const toggleText = (id, btn) => {
    const el = document.getElementById(id);
    if (!el) return;

    const expanded = el.classList.toggle('full-text');
    el.classList.toggle('cut-text', !expanded);
    btn.innerText = expanded ? "Ler menos" : "Ler mais...";
};

const initParticles = () => {
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 30,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "98C379"
            },
            "shape": {
                "type": "triangle",
            },
            "opacity": {
                "value": 0.5,
                "random": false
            },
            "size": {
                "value": 3,
                "random": true
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#98C379",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            }
        },
        "retina_detect": true
    });
};

window.onload = () => {
    loadLogo();
    typeText('typewriter');
    initParticles();
};
