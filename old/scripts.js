
        document.addEventListener("DOMContentLoaded", () => { document.body.style.opacity = "1"; });

        const observer = new IntersectionObserver(entries => {
            entries.forEach(e => { if(e.isIntersecting) e.target.classList.add("visible"); });
        }, { threshold: 0.1 });
        document.querySelectorAll(".section").forEach(s => observer.observe(s));

        
function abrir() {
    const sobre = document.getElementById("sobre");
    const intro = document.getElementById("intro-screen");
    const contenido = document.getElementById("contenido");

    sobre.classList.add("opening");

    const music = document.getElementById("musica");
    music.volume = 0;
    music.play().catch(() => {});

    let fade = setInterval(() => {
        if (music.volume < 0.3) {
            music.volume += 0.02;
        } else {
            clearInterval(fade);
        }
    }, 200);

    confetti({
        particleCount: 150,
        spread: 90
    });

    // Cambiamos a una transición más suave con opacidad
    setTimeout(() => {
        intro.style.transition = "opacity 1s ease, visibility 1s";
        intro.style.opacity = "0";
        intro.style.visibility = "hidden";

        setTimeout(() => {
            intro.style.display = "none";
            contenido.style.display = "block";
            window.scrollTo(0, 0);

            const hero = document.querySelector(".hero");
            const heroBox = document.querySelector(".hero-box");

            hero.classList.add("clean");

            setTimeout(() => {
                hero.classList.remove("clean");
                heroBox.classList.add("show");
            }, 1500);
        }, 1000);
    }, 800);
}

        const fechaBoda = new Date("June 20, 2026 17:00:00").getTime();
        setInterval(() => {
            const ahora = new Date().getTime();
            let gap = fechaBoda - ahora;
            if(gap < 0) gap = 0;
            const week = 1000 * 60 * 60 * 24 * 7;
            const day = 1000 * 60 * 60 * 24;
            const hour = 1000 * 60 * 60;
            const minute = 1000 * 60;
            document.getElementById("w").textContent = Math.floor(gap / week);
            document.getElementById("d").textContent = Math.floor((gap % week) / day);
            document.getElementById("h").textContent = Math.floor((gap % day) / hour);
            document.getElementById("s").textContent = Math.floor((gap % minute) / 1000);
        }, 1000);

   tsParticles.load("particles", {
            particles: {
                number: { value: 50 }, // Más partículas
                color: { value: ["#ff6bc4", "#ffdf85", "#ffffff"] }, // Rosa neón, oro neón y blanco
                opacity: { value: 0.8, random: true },
                size: { value: 3, random: true },
                links: { 
                    enable: true, 
                    color: "#ff6bc4", // Líneas de conexión rosa neón
                    distance: 120, 
                    opacity: 0.3,
                    width: 1
                },
                move: { enable: true, speed: 1.2, direction: "none", outModes: "bounce" }
            },
            interactivity: {
                events: { onHover: { enable: true, mode: "grab" } }, // Interactúa con el mouse
                modes: { grab: { distance: 150, links: { opacity: 0.8 } } }
            }
        });

        function confirmar() {
    const celebration = document.getElementById("celebration");
    celebration.classList.add("show");

    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    // Safari bloquea window.open() en retardos. 
    // Usamos location.href que es más permisivo y funciona mejor en móvil.
    const waUrl = "https://wa.me/50577770190?text=" + encodeURIComponent("¡Hola! Confirmo mi asistencia a la boda de Emanuel y Francis. 🎉");

    setTimeout(() => {
        window.location.href = waUrl;
    }, 2000);
}

        function toggleMapa(id){
    document.querySelectorAll('.mapa').forEach(m => {
        if(m.id !== id) m.classList.remove("active");
    });

    document.getElementById(id).classList.toggle("active");
}

function toggleDress(){
    document.getElementById("dressContent").classList.toggle("active");
}

function showDress(tipo){
    document.querySelectorAll('.dress-gallery').forEach(g => g.classList.remove('active'));
    document.querySelectorAll('.dress-tabs button').forEach(b => b.classList.remove('active'));

    document.getElementById(tipo).classList.add('active');
    event.target.classList.add('active');
}

function openLightbox(src){
    const lb = document.getElementById("lightbox");
    const img = document.getElementById("lightbox-img");

    img.src = src;
    lb.classList.add("active");
}

function closeLightbox(){
    document.getElementById("lightbox").classList.remove("active");
}




