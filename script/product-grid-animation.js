// Product image animation with Intersection Observer
document.addEventListener('DOMContentLoaded', function() {
    // Set up the animation observer
    setupAnimationObserver();
    
    // Listen for changes to the product grid that might happen due to filtering
    const productGrid = document.querySelector('.product-grid');
    
    if (productGrid) {
        // Create a mutation observer to detect when new products are added
        const observer = new MutationObserver(function(mutations) {
            // When the grid changes, set up the animation again
            setupAnimationObserver();
        });
        
        // Start observing the product grid for changes
        observer.observe(productGrid, {
            childList: true, // Watch for changes to direct children
            subtree: false   // No need to watch descendants
        });
    }
    
    // Also listen for filter changes
    const filterSelects = document.querySelectorAll('#genderselection, #producttypeselection, #itemselection');
    filterSelects.forEach(select => {
        select.addEventListener('change', function() {
            // After a short delay to allow the DOM to update
            setTimeout(setupAnimationObserver, 300);
        });
    });
});

// Function to set up the Intersection Observer for animations
function setupAnimationObserver() {
    // Options for the Intersection Observer
    const options = {
        root: null, // Use the viewport
        rootMargin: '0px', // No margin
        threshold: 0.1 // Trigger when 10% of the element is visible
    };
    
    // Create a new Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add a slight delay based on the index for a staggered effect
                setTimeout(() => {
                    // Apply the animation class
                    entry.target.classList.add('product-image-animate');
                }, index * 50); // 50ms staggered delay
                
                // Stop observing after animation
                observer.unobserve(entry.target);
            }
        });
    }, options);
    
    // Reset and observe all product images
    const productImages = document.querySelectorAll('.product-image:not(.observed)');
    
    productImages.forEach(image => {
        // Set initial state (smaller and more transparent)
        image.style.transform = 'scale(0.8)';
        image.style.opacity = '0.6';
        
        // Mark as observed to avoid duplicate setup
        image.classList.add('observed');
        
        // Start observing for when it enters the viewport
        observer.observe(image);
    });
}