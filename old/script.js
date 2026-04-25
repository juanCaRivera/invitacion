/* ---------- GLOBAL STATE ---------- */
let bgMusic = document.getElementById('bgMusic');
let musicBtn = document.getElementById('musicBtn');
let musicToggle = document.getElementById('musicToggle');

/* ---------- INTRO LOGIC ---------- */
window.abrir = function() {
    document.getElementById('intro-screen').style.display = 'none';
    const contenido = document.getElementById('contenido');
    contenido.style.display = 'block';
    
    // Play music conditionally or just show toggle
    if (musicToggle) musicToggle.style.display = 'block';
    
    // initialize scroll reveal now that content is visible
    revealSections();           
    
    // immediately show hero box for smoother experience
    const heroBox = document.querySelector('.hero__box');
    if (heroBox) {
        setTimeout(() => {
            heroBox.classList.add('show');
        }, 100);
    }
}

/* ---------- MUSIC TOGGLE ---------- */
if (musicBtn) {
    musicBtn.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play();
            musicBtn.textContent = '⏸';
            musicBtn.setAttribute('aria-pressed', 'true');
        } else {
            bgMusic.pause();
            musicBtn.textContent = '▶︎';
            musicBtn.setAttribute('aria-pressed', 'false');
        }
    });
}

/* ---------- SCROLL REVEAL ---------- */
function revealSections() {
    const sections = document.querySelectorAll('.hero__box, .bible-section, .invite-section, .countdown-section, .card, .timeline__item, .gift-section, .recommend-section, .love-section, .cta-section, .closing-section');
    sections.forEach(s => s.classList.add('reveal'));

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                obs.unobserve(entry.target);
            }
        });
    }, {threshold:0.15});
    sections.forEach(s => observer.observe(s));
}

/* ---------- COUNTDOWN ---------- */
function startCountdown(targetDateStr){
    const target = new Date(targetDateStr).getTime();
    const units = {
        weeks: 1000*60*60*24*7,
        days: 1000*60*60*24,
        hours: 1000*60*60,
        minutes: 1000*60,
        seconds: 1000
    };
    
    const elWeeks = document.getElementById('weeks');
    const elDays = document.getElementById('days');
    const elHours = document.getElementById('hours');
    const elMins = document.getElementById('minutes');
    const elSecs = document.getElementById('seconds');
    
    const update = () => {
        const now = Date.now();
        const diff = target - now;
        if (diff <= 0){
            clearInterval(timer);
            return;
        }
        
        const w = Math.floor(diff/units.weeks);
        const d = Math.floor((diff%units.weeks)/units.days);
        const h = Math.floor((diff%units.days)/units.hours);
        const m = Math.floor((diff%units.hours)/units.minutes);
        const s = Math.floor((diff%units.minutes)/units.seconds);
        
        if (elWeeks) elWeeks.textContent = w;
        if (elDays) elDays.textContent = d;
        if (elHours) elHours.textContent = h;
        if (elMins) elMins.textContent = m;
        if (elSecs) elSecs.textContent = s;
    };
    update();
    const timer = setInterval(update, 1000);
}
startCountdown('2026-06-20T17:00:00');

/* ---------- CONFIRMATION ---------- */
window.confirmar = function(){
    if (typeof confetti !== 'undefined') {
        confetti({
            particleCount: 150,
            spread: 70,
            origin:{y:0.6}
        });
    }
}

/* ---------- FINAL CLOSING ---------- */
window.finalizar = function(){
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position:fixed;
        inset:0;
        background:rgba(0,0,0,0.9);
        display:flex;
        align-items:center;
        justify-content:center;
        color:#fff;
        font-family: 'Great Vibes', cursive;
        font-size:3rem;
        z-index:9999;
        transition:opacity .6s;
        opacity:0;
    `;
    overlay.textContent = '¡Nos vemos pronto!';
    document.body.appendChild(overlay);
    
    // trigger reflow
    void overlay.offsetWidth;
    
    requestAnimationFrame(()=> overlay.style.opacity = 1);
    setTimeout(()=> overlay.remove(), 3000);
}

/* ---------- PARTICLES (optional background) ---------- */
if (typeof tsParticles !== 'undefined') {
    tsParticles.load('particles', {
        particles:{
            number:{value:30},
            color:{value:'#f5c842'},
            shape:{type:'circle'},
            opacity:{value:0.6},
            size:{value:{min:1,max:3}},
            move:{enable:true,speed:1}
        },
        interactivity:{events:{onhover:{enable:true,mode:'repulse'}}},
        background:{color:{value:'#54582f'}}
    });
}
