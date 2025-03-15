
//get
const button = document.getElementById('hoverButton');


        // Efek partikel saat hover
        button.addEventListener('mousemove', (e) => {
            const particles = document.createElement('div');
            particles.className = 'particles';

            const rect = button.getBoundingClientRect();
            particles.style.left = (e.clientX - rect.left) + 'px';
            particles.style.top = (e.clientY - rect.top) + 'px';

            button.appendChild(particles);

            setTimeout(() => particles.remove(), 1500);
        });

        // Efek ripple saat klik
        button.addEventListener('click', (e) => {
            const ripple = document.createElement('div');
            ripple.className = 'ripple';

            const rect = button.getBoundingClientRect();
            ripple.style.left = (e.clientX - rect.left - 50) + 'px';
            ripple.style.top = (e.clientY - rect.top - 50) + 'px';

            button.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });

/* 
//get
const button = document.getElementById('hoverButton');


        // Efek partikel saat hover
        button.addEventListener('mousemove', (e) => {
            const particles = document.createElement('div');
            particles.className = 'particles';

            const rect = button.getBoundingClientRect();
            particles.style.left = (e.clientX - rect.left) + 'px';
            particles.style.top = (e.clientY - rect.top) + 'px';

            button.appendChild(particles);

            setTimeout(() => particles.remove(), 1500);
        });

        // Efek ripple saat klik
        button.addEventListener('click', (e) => {
            const ripple = document.createElement('div');
            ripple.className = 'ripple';

            const rect = button.getBoundingClientRect();
            ripple.style.left = (e.clientX - rect.left - 50) + 'px';
            ripple.style.top = (e.clientY - rect.top - 50) + 'px';

            button.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
//get
const button = document.getElementById('hoverButton');


        // Efek partikel saat hover
        button.addEventListener('mousemove', (e) => {
            const particles = document.createElement('div');
            particles.className = 'particles';

            const rect = button.getBoundingClientRect();
            particles.style.left = (e.clientX - rect.left) + 'px';
            particles.style.top = (e.clientY - rect.top) + 'px';

            button.appendChild(particles);

            setTimeout(() => particles.remove(), 1500);
        });

        // Efek ripple saat klik
        button.addEventListener('click', (e) => {
            const ripple = document.createElement('div');
            ripple.className = 'ripple';

            const rect = button.getBoundingClientRect();
            ripple.style.left = (e.clientX - rect.left - 50) + 'px';
            ripple.style.top = (e.clientY - rect.top - 50) + 'px';

            button.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        }); 
//get
const button = document.getElementById('hoverButton');


        // Efek partikel saat hover
        button.addEventListener('mousemove', (e) => {
            const particles = document.createElement('div');
            particles.className = 'particles';

            const rect = button.getBoundingClientRect();
            particles.style.left = (e.clientX - rect.left) + 'px';
            particles.style.top = (e.clientY - rect.top) + 'px';

            button.appendChild(particles);

            setTimeout(() => particles.remove(), 1500);
        });

        // Efek ripple saat klik
        button.addEventListener('click', (e) => {
            const ripple = document.createElement('div');
            ripple.className = 'ripple';

            const rect = button.getBoundingClientRect();
            ripple.style.left = (e.clientX - rect.left - 50) + 'px';
            ripple.style.top = (e.clientY - rect.top - 50) + 'px';

            button.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
