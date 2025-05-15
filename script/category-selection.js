/**
 * Combined Product Filter & Navigation System
 * Combines functionality from:
 * - filter-side-bar.js
 * - category-selection.js
 * - navigation-params.js
 * Men products
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log("Initializing product filter and navigation system...");
    
    // ======== SETUP NAVIGATION LINKS ========
    setupNavigationLinks();
    
    // ======== SETUP FILTER SIDEBAR ========
    setupFilterSidebar();
    
    // ======== SETUP FILTER BUTTONS ========
    setupFilterButtons();
    
    // ======== SETUP FILTER SELECT CHANGE HANDLERS ========
    setupFilterSelects();
    
    // ======== INITIALIZE PAGE BASED ON URL ========
    if (window.location.pathname.includes('product.html')) {
        // Process URL parameters with a slight delay to ensure DOM is fully ready
        setTimeout(processUrlParameters, 100);
    }
});

// ======== NAVIGATION SETUP FUNCTIONS ========

function setupNavigationLinks() {
    // Direct link setup for men and women main links
    const menProductLink = document.getElementById('men-product');
    const womenProductLink = document.getElementById('women-product');
    
    if (menProductLink) {
        menProductLink.href = 'product.html?gender=men&type=all&item=all';
        console.log("Set men product link:", menProductLink.href);
    }
    
    if (womenProductLink) {
        womenProductLink.href = 'product.html?gender=women&type=all&item=all';
        console.log("Set women product link:", womenProductLink.href);
    }
    
    // All products link
    const allProductsLinks = document.querySelectorAll('a[href="product.html"]');
    allProductsLinks.forEach(link => {
        // Skip if it's the men or women product link
        if (link.id === 'men-product' || link.id === 'women-product') return;
        
        // Set the link to reset all filters
        link.href = 'product.html?gender=all&type=all&item=all';
        console.log("Set all products link:", link.href);
    });
    
    // Process all mega menu links
    setupMegaMenuCategories();
}

function setupMegaMenuCategories() {
    // Process men's mega box
    const menMegaBox = document.querySelector('#men-product + .mega-box');
    if (menMegaBox) {
        setupCategoryLinks(menMegaBox, 'men');
    }
    
    // Process women's mega box
    const womenMegaBox = document.querySelector('#women-product + .mega-box');
    if (womenMegaBox) {
        setupCategoryLinks(womenMegaBox, 'women');
    }
}

function setupCategoryLinks(megaBox, gender) {
    const columns = megaBox.querySelectorAll('.column');
    
    columns.forEach(column => {
        // Get the category header and clean its text
        const header = column.querySelector('.bbh');
        if (!header) return;
        
        const categoryText = header.textContent.trim();
        const categoryValue = categoryText.toLowerCase();
        
        // Set the category header link
        if (header.tagName === 'A') {
            header.href = `product.html?gender=${gender}&type=${categoryValue}&item=all`;
            console.log(`Set ${gender} ${categoryValue} link:`, header.href);
        }
        
        // Process all item links under this category
        const itemLinks = column.querySelectorAll('a:not(.bbh)');
        itemLinks.forEach(link => {
            const itemText = link.textContent.trim();
            const itemValue = itemText.toLowerCase().replace(/\s+/g, '');
            
            link.href = `product.html?gender=${gender}&type=${categoryValue}&item=${itemValue}`;
            console.log(`Set ${gender} ${categoryValue} ${itemValue} link:`, link.href);
        });
    });
}

// ======== FILTER SIDEBAR FUNCTIONS ========

function setupFilterSidebar() {
    // Get DOM elements
    const filterSidebar = document.getElementById('filterSidebar');
    const filterOverlay = document.getElementById('filterOverlay');
    const openFilterButton = document.getElementById('openFilterSidebar');
    const closeFilterButton = document.getElementById('closeFilterSidebar');
    
    // Toggle sidebar visibility
    if (openFilterButton && filterSidebar && filterOverlay) {
        openFilterButton.addEventListener('click', function() {
            console.log("Opening filter sidebar");
            filterSidebar.classList.add('active');
            filterOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    }
    
    if (closeFilterButton && filterSidebar && filterOverlay) {
        closeFilterButton.addEventListener('click', function() {
            console.log("Closing filter sidebar");
            filterSidebar.classList.remove('active');
            filterOverlay.classList.remove('active');
            document.body.style.overflow = ''; // Enable scrolling
        });
    }
    
    if (filterOverlay && filterSidebar) {
        filterOverlay.addEventListener('click', function() {
            console.log("Clicked overlay, closing sidebar");
            filterSidebar.classList.remove('active');
            filterOverlay.classList.remove('active');
            document.body.style.overflow = ''; // Enable scrolling
        });
    }
}

function setupFilterButtons() {
    // Get DOM elements
    const applyFiltersButton = document.getElementById('applyFilters');
    const resetFiltersButton = document.getElementById('resetFilters');
    const filterSidebar = document.getElementById('filterSidebar');
    const filterOverlay = document.getElementById('filterOverlay');
    
    // Apply Filters button
    if (applyFiltersButton) {
        applyFiltersButton.addEventListener('click', function() {
            console.log("Applying filters");
            
            // Apply filters
            displayFilteredProducts();
            
            // Update URL to reflect current filters
            updateUrlWithFilters();
            
            // Close sidebar
            if (filterSidebar && filterOverlay) {
                filterSidebar.classList.remove('active');
                filterOverlay.classList.remove('active');
                document.body.style.overflow = ''; // Enable scrolling
            }
        });
    }
    
    // Reset Filters button
    if (resetFiltersButton) {
        resetFiltersButton.addEventListener('click', function() {
            console.log("Resetting filters");
            
            // Get filter selects
            const genderSelect = document.getElementById('genderselection');
            const typeSelect = document.getElementById('producttypeselection');
            const itemSelect = document.getElementById('itemselection');
            const priceSelect = document.getElementById('priceselection');
            
            // Reset all selects to "all"
            if (genderSelect) genderSelect.value = 'all';
            if (typeSelect) typeSelect.value = 'all';
            if (itemSelect) itemSelect.value = 'all';
            if (priceSelect) priceSelect.value = 'all';
            
            // Trigger gender change to update dependent dropdowns
            if (genderSelect) {
                const event = new Event('change');
                genderSelect.dispatchEvent(event);
            }
        });
    }
}

function setupFilterSelects() {
    // Get the filter selects
    const genderSelect = document.getElementById('genderselection');
    const typeSelect = document.getElementById('producttypeselection');
    
    // Set up filter select change listeners
    if (genderSelect) {
        genderSelect.addEventListener('change', function() {
            console.log(`Gender selection changed to: ${this.value}`);
            updateItemSelect(); // Update dependent dropdowns
        });
    }
    
    if (typeSelect) {
        typeSelect.addEventListener('change', function() {
            console.log(`Product type selection changed to: ${this.value}`);
            updateItemSelect(); // Update dependent dropdowns
        });
    }
}

// ======== URL PARAMETERS FUNCTIONS ========

function processUrlParameters() {
    console.log("Processing URL parameters...");
    
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const gender = urlParams.get('gender') || 'all';
    const type = urlParams.get('type') || 'all';
    const item = urlParams.get('item') || 'all';
    
    console.log(`URL Parameters: gender=${gender}, type=${type}, item=${item}`);
    
    // Get filter selects
    const genderSelect = document.getElementById('genderselection');
    const typeSelect = document.getElementById('producttypeselection');
    const itemSelect = document.getElementById('itemselection');
    
    // Set gender filter with delay to ensure DOM is fully loaded
    setTimeout(() => {
        if (genderSelect && hasOption(genderSelect, gender)) {
            console.log(`Setting gender select to ${gender}`);
            genderSelect.value = gender;
            
            // Trigger change event to update dependent dropdowns
            const event = new Event('change', { bubbles: true });
            genderSelect.dispatchEvent(event);
        }
        
        // Wait for gender change to update type options
        setTimeout(() => {
            if (typeSelect && hasOption(typeSelect, type)) {
                console.log(`Setting type select to ${type}`);
                typeSelect.value = type;
                
                // Trigger change event
                const event = new Event('change', { bubbles: true });
                typeSelect.dispatchEvent(event);
            }
            
            // Wait for type change to update item options
            setTimeout(() => {
                if (itemSelect && hasOption(itemSelect, item)) {
                    console.log(`Setting item select to ${item}`);
                    itemSelect.value = item;
                } else {
                    console.warn(`Item option ${item} not found in select`);
                    // Default to 'all' if the item isn't found
                    if (itemSelect) itemSelect.value = 'all';
                }
                
                // Apply filters after all values are set
                console.log("Displaying filtered products based on URL parameters");
                displayFilteredProducts();
                
            }, 100); // Wait 300ms for item options to update
        }, 100); // Wait 200ms for type options to update
    }, 100); // Wait 100ms for initial DOM manipulations
}

function updateUrlWithFilters() {
    const genderSelect = document.getElementById('genderselection');
    const typeSelect = document.getElementById('producttypeselection');
    const itemSelect = document.getElementById('itemselection');
    
    if (!genderSelect || !typeSelect || !itemSelect) return;
    
    const gender = genderSelect.value;
    const type = typeSelect.value;
    const item = itemSelect.value;
    
    const url = new URL(window.location.href);
    url.searchParams.set('gender', gender);
    url.searchParams.set('type', type);
    url.searchParams.set('item', item);
    
    console.log(`Updating URL to: ${url.toString()}`);
    window.history.replaceState({}, '', url);
}

// Helper function to check if an option exists in a select
function hasOption(selectElement, value) {
    if (!selectElement) return false;
    
    for (let i = 0; i < selectElement.options.length; i++) {
        if (selectElement.options[i].value === value) {
            return true;
        }
    }
    return false;
}

// ======== PRODUCT FILTERING FUNCTIONS ========

// Function to update the item select options based on gender and category
function updateItemSelect() {
    // Get DOM elements
    const genderSelect = document.getElementById('genderselection');
    const categorySelect = document.getElementById('producttypeselection');
    const itemSelect = document.getElementById('itemselection');
    
    if (!genderSelect || !categorySelect || !itemSelect) return;
    
    // Clear current options - keep only the "ALL" option
    itemSelect.innerHTML = '<option value="all">ALL</option>';
    
    const selectedGender = genderSelect.value;
    const selectedCategory = categorySelect.value;
    
    // Only populate subcategories if both gender and category are specific (not "all")
    if (selectedGender !== "all" && selectedCategory !== "all") {
        // Make sure the selected gender exists in productdata
        if (productdata[selectedGender] && productdata[selectedGender][selectedCategory]) {
            // Add options for each subcategory
            for (const subcategory in productdata[selectedGender][selectedCategory]) {
                const option = document.createElement('option');
                option.value = subcategory;
                option.textContent = subcategory.toUpperCase();
                itemSelect.appendChild(option);
            }
        }
    }
}

function updateBackgroundVideo(gender) {
    const backgroundVideo = document.querySelector("#product-background-video");
    const thumbnailText = document.querySelector(".product-thumbnail");
    
    if (!backgroundVideo || !thumbnailText) return;
    
    // Remove animation class that might exist
    thumbnailText.classList.remove("text-scale-animation");
    backgroundVideo.classList.remove("product-thumbnail-animation");
    
    // Force browser reflow to reset animation
    void thumbnailText.offsetWidth;
    void backgroundVideo.offsetWidth;
    
    if (gender === "men") {
        backgroundVideo.querySelector("source").src = "../assets/products/men-product-thumbnail - Made with Clipchamp.mp4";
        thumbnailText.innerHTML = `MEN`;
    } 
    else if (gender === "women") {
        backgroundVideo.querySelector("source").src = "../assets/products/women-product-thumbnail - Made with Clipchamp.mp4";
        thumbnailText.innerHTML = `WOMEN`;
    }
    else {
        // Default background for "all"
        backgroundVideo.querySelector("source").src = "../assets/products/all-product-thumbnail - Made with Clipchamp.mp4";
        thumbnailText.innerHTML = 'ALL PRODUCTS';
    }
    
    // Important: reload the video after changing the source
    backgroundVideo.load();
    backgroundVideo.play();
    
    // Add animation class to run text scale effect
    thumbnailText.classList.add("text-scale-animation");
    backgroundVideo.classList.add("product-thumbnail-animation");
}

// Function to collect all products based on current filters
function collectFilteredProducts() {
    const genderSelect = document.getElementById('genderselection');
    const categorySelect = document.getElementById('producttypeselection');
    const itemSelect = document.getElementById('itemselection');
    
    if (!genderSelect || !categorySelect || !itemSelect) return [];
    
    const selectedGender = genderSelect.value;
    const selectedCategory = categorySelect.value;
    const selectedItem = itemSelect.value;
    
    let collectedProducts = [];
    
    // Case 1: All genders
    if (selectedGender === "all") {
        if (selectedCategory === "all") {
            // Collect all products for all genders
            for (const gender in productdata) {
                for (const category in productdata[gender]) {
                    for (const subcategory in productdata[gender][category]) {
                        const products = productdata[gender][category][subcategory];
                        collectedProducts = collectedProducts.concat(products);
                    }
                }
            }
        } else {
            // Collect products from the selected category across all genders
            for (const gender in productdata) {
                if (productdata[gender][selectedCategory]) {
                    for (const subcategory in productdata[gender][selectedCategory]) {
                        const products = productdata[gender][selectedCategory][subcategory];
                        collectedProducts = collectedProducts.concat(products);
                    }
                }
            }
        }
    }
    // Case 2: Specific gender
    else {
        // Case 2.1: Specific gender, all categories
        if (selectedCategory === "all") {
            // Collect all products for the selected gender only
            for (const category in productdata[selectedGender]) {
                for (const subcategory in productdata[selectedGender][category]) {
                    const products = productdata[selectedGender][category][subcategory];
                    collectedProducts = collectedProducts.concat(products);
                }
            }
        }
        // Case 2.2: Specific gender, specific category
        else {
            // Case 2.2.1: Specific gender, specific category, all items
            if (selectedItem === "all") {
                // Collect all products in the selected category for the selected gender
                for (const subcategory in productdata[selectedGender][selectedCategory]) {
                    const products = productdata[selectedGender][selectedCategory][subcategory];
                    collectedProducts = collectedProducts.concat(products);
                }
            }
            // Case 2.2.2: Specific gender, specific category, specific item
            else {
                // Make sure this path exists in the data
                if (productdata[selectedGender] && 
                    productdata[selectedGender][selectedCategory] && 
                    productdata[selectedGender][selectedCategory][selectedItem]) {
                    
                    const products = productdata[selectedGender][selectedCategory][selectedItem];
                    collectedProducts = collectedProducts.concat(products);
                }
            }
        }
    }
    
    return collectedProducts;
}

// Function to sort products by price
function sortProductsByPrice(products, order) {
    if (order === "lowest") {
        // Sort by price ascending (lowest to highest)
        return [...products].sort((a, b) => a.price - b.price);
    } else if (order === "highest") {
        // Sort by price descending (highest to lowest)
        return [...products].sort((a, b) => b.price - a.price);
    }
    // Default: return products without sorting
    return products;
}

// Function to display filtered and sorted products
function displayFilteredProducts() {
    const productGrid = document.querySelector(".product-grid");
    if (!productGrid) return;
    
    // Clear the product grid
    productGrid.innerHTML = "";
    
    const genderSelect = document.getElementById('genderselection');
    const priceSelect = document.getElementById('priceselection');
    
    if (!genderSelect || !priceSelect) return;
    
    const selectedGender = genderSelect.value;
    const selectedPriceOrder = priceSelect.value;
    
    // Update the background video based on gender
    updateBackgroundVideo(selectedGender);
    
    // Collect products based on filters
    let products = collectFilteredProducts();
    
    // Sort products by price if needed
    if (selectedPriceOrder !== "all") {
        products = sortProductsByPrice(products, selectedPriceOrder);
    }
    
    // Display the filtered and sorted products
    for (const product of products) {
        // Include the $ symbol directly in the formatted price string
        const formattedPrice = '$' + product.price.toFixed(2);
        
        // Create product card with link to product detail page
        const productCard = document.createElement('a');
        productCard.className = 'product-card';
        
        // Create a URL with product information as query parameters
        const productUrl = `product-detail.html?name=${encodeURIComponent(product.name)}&price=${encodeURIComponent(product.price)}&image=${encodeURIComponent(product.image)}&description=${encodeURIComponent(product.description)}`;
        
        productCard.href = productUrl;
        
        // Set product card HTML
        productCard.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='assets/home-page/5038500.png'">
                <div class="quick-view-button">SEE DETAILS</div>
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">${formattedPrice}</p>
            </div>
        `;
        
        // Add to product grid
        productGrid.appendChild(productCard);
    }
}

function displayAllProducts() {
    // Get the container where products will be displayed
    const productGrid = document.querySelector('.product-grid');
    
    // Clear any existing products in the grid
    productGrid.innerHTML = '';
    
    // Loop through gender categories (men, women)
    for (const gender in productdata) {
        // Loop through product categories (tops, bottoms, etc.)
        for (const category in productdata[gender]) {
            // Loop through subcategories (shirts, jackets, etc.)
            for (const subcategory in productdata[gender][category]) {
                // Get the array of products in this subcategory
                const products = productdata[gender][category][subcategory];
                
                // Loop through each product
                for (const product of products) {
                    // Include the $ symbol directly in the formatted price string
                    const formattedPrice = '$' + product.price.toFixed(2);
                    
                    // Create a product element
                    const productCard = document.createElement('a');
                    productCard.className = 'product-card';
                    productCard.href = '#';
                    // Fill the product element with the template
                    productCard.innerHTML = `
                        <div class="product-image-container">
                            <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='assets/home-page/5038500.png'">
                            <div class="quick-view-button">SEE DETAILS</div>
                        </div>
                        <div class="product-info">
                            <h3 class="product-name">${product.name}</h3>
                            <p class="product-price">${formattedPrice}</p>
                        </div>
                    `;
                    
                    // Add the product to the grid
                    productGrid.appendChild(productCard);
                }
            }
        }
    }
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', function() {
    displayAllProducts();
});