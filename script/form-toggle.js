document.addEventListener('DOMContentLoaded', function() {
    const toFormButton = document.querySelector('.to-form');
    const formContainer = document.querySelector('.form-container');
    
    let formOverlay = document.querySelector('.form-overlay');
    if (!formOverlay) {
        formOverlay = document.createElement('div');
        formOverlay.className = 'form-overlay';
        document.body.appendChild(formOverlay);
    }
    
    if (!formContainer.querySelector('.close-form')) {
        const closeButton = document.createElement('button');
        closeButton.className = 'close-form';
        closeButton.innerHTML = '&times;';
        formContainer.appendChild(closeButton);
    }
    
    // Deteksi perangkat mobile
    function isMobile() {
        return window.innerWidth <= 768;
    }
    
    toFormButton.addEventListener('click', function() {
        formContainer.classList.add('active');
        formOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    document.querySelector('.close-form').addEventListener('click', function() {
        formContainer.classList.remove('active');
        formOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    formOverlay.addEventListener('click', function() {
        formContainer.classList.remove('active');
        formOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    window.addEventListener('resize', function() {
        if (formContainer.classList.contains('active')) {
            if (isMobile()) {
                formContainer.style.transform = 'translateY(0)';
            } else {
                formContainer.style.transform = 'translate(-50%, -50%)';
            }
        } else {
            if (isMobile()) {
                formContainer.style.transform = 'translateY(100%)';
            } else {
                formContainer.style.transform = 'translate(-50%, -50%)';
            }
        }
    });
});
