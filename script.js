// 3D Cube Interaction
document.addEventListener('DOMContentLoaded', function() {
    const cube = document.querySelector('.cube');
    
    // Mouse move interaction for cube
    document.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        
        cube.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    
    // Mouse enter/leave effects
    cube.addEventListener('mouseenter', () => {
        cube.style.animationPlayState = 'paused';
    });
    
    cube.addEventListener('mouseleave', () => {
        cube.style.animationPlayState = 'running';
    });
    
    // Step cards animation
    const stepCards = document.querySelectorAll('.step-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const step = entry.target.getAttribute('data-step');
                entry.target.style.animationDelay = `${step * 0.2}s`;
                entry.target.classList.add('animate-in');
            }
        });
    }, {
        threshold: 0.2
    });
    
    stepCards.forEach(card => {
        observer.observe(card);
    });
    
    // Form submission
    const form = document.getElementById('qualificationForm');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Simulate form submission
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            alert('Thank you! Your solution qualification request has been submitted. We will contact you shortly.');
            form.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Parallax effect for background elements
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const bgElements = document.querySelectorAll('.bg-cube, .bg-sphere');
        
        bgElements.forEach(el => {
            const speed = el.classList.contains('bg-sphere') ? 0.5 : 0.3;
            const yPos = -(scrolled * speed);
            el.style.transform = `translateY(${yPos}px)`;
        });
    });
    
    // Typewriter effect for hero description (optional)
    const heroDesc = document.querySelector('.hero-description');
    const fullText = heroDesc.textContent;
    heroDesc.textContent = '';
    
    let i = 0;
    function typeWriter() {
        if (i < fullText.length) {
            heroDesc.textContent += fullText.charAt(i);
            i++;
            setTimeout(typeWriter, 20);
        }
    }
    
    // Start typewriter after page load
    setTimeout(typeWriter, 1000);
    
    // Video placeholder click
    const videoPlaceholder = document.querySelector('.video-placeholder');
    videoPlaceholder.addEventListener('click', () => {
        videoPlaceholder.innerHTML = `
            <iframe width="100%" height="100%" 
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                    style="border-radius: 15px;">
            </iframe>
        `;
    });
    
    // Add glowing effect to GCP cards on hover
    const gcpCards = document.querySelectorAll('.gcp-card');
    
    gcpCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.boxShadow = '0 0 30px rgba(66, 133, 244, 0.5)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = '';
        });
    });
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: slideUp 0.6s ease forwards;
        opacity: 0;
        transform: translateY(30px);
    }
    
    @keyframes slideUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    /* Loading animation for form submission */
    .fa-spinner {
        animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;

document.head.appendChild(style);
