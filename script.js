// Initialize AOS Animation Library
document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS — only for sections below the hero
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 60,
        });
    }

    // Initialize VanillaTilt for 3D card effects
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll(".tilt"), {
            max: 4,
            speed: 500,
            glare: true,
            "max-glare": 0.15,
            scale: 1.02
        });
        
        VanillaTilt.init(document.querySelectorAll(".project-card"), {
            max: 3,
            speed: 400,
            glare: true,
            "max-glare": 0.1
        });
    }

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Custom Ambient Cursor Glow (decorative only, default cursor still visible)
    const cursor = document.getElementById('cursorGlow');
    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            requestAnimationFrame(() => {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
            });
        });

        // Enlarge glow on interactive elements
        document.querySelectorAll('a, button, .glass-card, .badge').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.width = '80px';
                cursor.style.height = '80px';
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.width = '40px';
                cursor.style.height = '40px';
            });
        });
    }
});
