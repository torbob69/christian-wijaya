window.onload = function () {
    // Menu toggle functionality
    const menuButton = document.getElementById('menu-bar');
    const sideBar = document.getElementById('side-bar');
    const closeMenu = document.querySelector('.close-menu');
    
    // Function to toggle mobile menu
    function toggleMobileMenu() {
        sideBar.classList.toggle('active');
        
        // Prevent scrolling when menu is open
        if (sideBar.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
    
    // Event listeners for menu toggle
    if (menuButton) {
        menuButton.addEventListener('click', toggleMobileMenu);
    }
    
    if (closeMenu) {
        closeMenu.addEventListener('click', toggleMobileMenu);
    }
    
    // Close menu when clicking on a link (for mobile)
    const navLinks = document.querySelectorAll('#side-bar ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                toggleMobileMenu();
            }
        });
    });
    
    // Initial state check and adjustment for current scroll position
    adjustHeaderForScrollPosition();
    
    // Add event listener for scrolling
    window.addEventListener('scroll', adjustHeaderForScrollPosition);
    
    // Add event listener for window resize to ensure responsive behavior
    window.addEventListener('resize', adjustHeaderForScrollPosition);
    
    // Function to handle all header adjustments based on scroll position
    function adjustHeaderForScrollPosition() {
        let logotext = document.getElementById("text-logo");
        let rightside = document.querySelector(".right-side");
        let topheader = document.querySelector("header");
        let megamenu = document.querySelectorAll(".mega-box");
    
        if (!logotext || !rightside || !topheader) return;
    
        if (window.scrollY > 0) {
            logotext.style.opacity = 0;
    
            if (window.innerWidth <= 768) {
                topheader.style.height = '4.2rem';
            } else {
                topheader.style.height = '4rem';
                megamenu.forEach(menu => {
                    menu.style.top = '4rem';
                });
            }
    
            logotext.style.fontSize = '0';
            rightside.style.transform = 'scale(0.9)';
        } else {
            logotext.style.opacity = 1;
    
            if (window.innerWidth <= 768) {
                logotext.style.fontSize = '0.6rem';
                topheader.style.height = '4.8rem';
            } else {
                logotext.style.fontSize = '0.7rem';
                topheader.style.height = '5.5rem';
                megamenu.forEach(menu => {
                    menu.style.top = '5.5rem';
                });
            }
    
            rightside.style.transform = 'scale(1)';
        }
    }
    
};