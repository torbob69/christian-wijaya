document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.textContent = `
        /* Initial states - hidden and translated */
        .events-title {
            opacity: 0;
            transform: translateY(-30px);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .events-title h1, .events-title p {
            opacity: 0;
            transform: translateY(-20px);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
            transition-delay: 0.2s;
        }
        
        .events-title p {
            transition-delay: 0.4s;
        }
        
        .events h2 {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .events img {
            opacity: 0;
            transition: opacity 1.2s ease-out;
        }
        
        /* Animation classes */
        .events-title.animate {
            opacity: 1;
            transform: translateY(0);
        }
        
        .events-title.animate h1, .events-title.animate p {
            opacity: 1;
            transform: translateY(0);
        }
        
        .events h2.animate {
            opacity: 1;
            transform: translateY(0);
        }
        
        .events img.animate {
            opacity: 1;
        }
    `;
    document.head.appendChild(style);

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const titleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                titleObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const headingObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                headingObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate');
                }, 200);
                imageObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const firstTitle = document.querySelector('.events:first-child .events-title');
    if (firstTitle) {
        setTimeout(() => {
            firstTitle.classList.add('animate');
        }, 300);
    }

    const firstHeading = document.querySelector('.events:first-child h2');
    const firstImage = document.querySelector('.events:first-child img');
    
    if (firstHeading) {
        setTimeout(() => {
            firstHeading.classList.add('animate');
        }, 600);
    }
    
    if (firstImage) {
        setTimeout(() => {
            firstImage.classList.add('animate');
        }, 800);
    }

    document.querySelectorAll('.events:not(:first-child) .events-title').forEach(title => {
        titleObserver.observe(title);
    });

    document.querySelectorAll('.events:not(:first-child) h2').forEach(heading => {
        headingObserver.observe(heading);
    });

    document.querySelectorAll('.events:not(:first-child) img').forEach(image => {
        imageObserver.observe(image);
    });
});