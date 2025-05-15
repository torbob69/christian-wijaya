document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector("header");

    header.innerHTML = `
    <a href="home.html" class="logo">
            <img src="assets/nav-bar/horse-carriage.svg" class="gambar-kuda">
            <div id="text-logo">Christian Wijaya</div>
        </a>
    
        <nav id="side-bar">
            <button class="close-menu">×</button>
            <ul>
                <li class="bba">
                    <a href="product-detail.html?name=Éclat%20Lunaire%20-%20Women&price=450&image=assets%2Fproducts%2Fwomen%2Faccessories-scarves-women1.jpg&description=Bask%20in%20the%20refined%20glow%20of%20the%20moonlight.%20Éclat%20Lunaire%20is%20a%20celebration%20of%20luminous%20beauty—where%20modern%20elegance%20meets%20celestial%20charm.%20Thoughtfully%20crafted%20to%20elevate%20your%20presence%2C%20it’s%20more%20than%20a%20statement—it’s%20an%20experience.%20Let%20your%20light%20shine%20through%2C%20effortlessly.">NEWEST</a>
                    <div class="mega-box">
                        <div class="row">
                            <a href="product-detail.html?name=Éclat%20Lunaire%20-%20Women&price=450&image=assets%2Fproducts%2Fwomen%2Faccessories-scarves-women1.jpg&description=Bask%20in%20the%20refined%20glow%20of%20the%20moonlight.%20Éclat%20Lunaire%20is%20a%20celebration%20of%20luminous%20beauty—where%20modern%20elegance%20meets%20celestial%20charm.%20Thoughtfully%20crafted%20to%20elevate%20your%20presence%2C%20it’s%20more%20than%20a%20statement—it’s%20an%20experience.%20Let%20your%20light%20shine%20through%2C%20effortlessly." class="column">
                                <h3 class="bbh">ÉCLAT LUNAIRE</h3>
                                <div class="www">
                                    <img src="assets/home-page/hermes-silk-booklet-oliver-hadlee-pearch-7.-2-Cropped (1).png    " class="gambar-eclat1">
                                </div>
                                <div class="qqq">
                                    <img src="assets/home-page/d807f99c96771830f2e3bd35d07d893a.webp" class="gambar-eclat2">
                                    <img src="assets/home-page/Hermes-140cm-Clair-De-Lune-01-2.jpg" class="gambar-eclat2">
                                </div>
                            </a>
                            <div class="column">
                                <h3 class="bbh">NEW ARRIVALS</h3>
                                <a href="#" style="--item-index: 1;">Sac à Main Matelassé</a>
                                <a href="#" style="--item-index: 2;">Montre de Luxe en Or Blanc</a>
                                <a href="#" style="--item-index: 3;">Manteau en Cachemire</a>
                                <a href="#" style="--item-index: 4;">Collier de Diamants</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="bba">
                    <a href="product.html" id="men-product">MEN</a>
                    <div class="mega-box">
                        <div class="row">
                            <div class="column">
                                <a class="bbh">TOPS</a>
                                <a href="#" style="--item-index: 1;">Shirts</a>
                                <a href="#" style="--item-index: 2;">Jackets</a>
                                <a href="#" style="--item-index: 3;">Sweater</a>
                                <a href="#" style="--item-index: 4;">Blazers</a>
                                <a href="#" style="--item-index: 5;">Vests</a>
                            </div>
                            <div class="column">
                                <a class="bbh">BOTTOMS</a>
                                <a href="#" style="--item-index: 1;">Trousers</a>
                                <a href="#" style="--item-index: 2;">Jeans</a>
                                <a href="#" style="--item-index: 3;">Shorts</a>
                                <a href="#" style="--item-index: 4;">Suit-Pants</a>
                            </div>
                            <div class="column">
                                <a class="bbh">ACCESSORIES</a>
                                <a href="#" style="--item-index: 1;">Watches</a>
                                <a href="#" style="--item-index: 3;">Glasses</a>
                                <a href="#" style="--item-index: 4;">Hats</a>
                                <a href="#" style="--item-index: 5;">Ties</a>
                            </div>
                            <div class="column">
                                <a class="bbh">BAGS</a>
                                <a href="#" style="--item-index: 1;">SlingBags</a>
                                <a href="#" style="--item-index: 2;">Backpacks</a>
                                <a href="#" style="--item-index: 3;">Briefcases</a>
                            </div>
                            <div class="column">
                                <a class="bbh">SHOES</a>
                                <a href="#" style="--item-index: 1;">Boots</a>
                                <a href="#" style="--item-index: 2;">Sandals</a>
                                <a href="#" style="--item-index: 3;">Loafers</a>
                                <a href="#" style="--item-index: 4;">Sneakers</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="bba">
                    <a href="product.html" id="women-product">WOMEN</a>
                    <div class="mega-box">
                        <div class="row">
                            <div class="column">
                                <a class="bbh">TOPS</a>
                                <a href="#" style="--item-index: 1;">Dresses</a>
                                <a href="#" style="--item-index: 2;">Shirts</a>
                                <a href="#" style="--item-index: 3;">Jackets</a>
                                <a href="#" style="--item-index: 4;">Sleeveless</a>
                            </div>
                            <div class="column">
                                <a class="bbh">BOTTOMS</a>
                                <a href="#" style="--item-index: 1;">Skirts</a>
                                <a href="#" style="--item-index: 2;">Trousers</a>
                                <a href="#" style="--item-index: 3;">Shorts</a>
                                <a href="#" style="--item-index: 4;">Jeans</a>
                            </div>
                            <div class="column">
                                <a class="bbh">ACCESSORIES</a>
                                <a href="#" style="--item-index: 1;">Watches</a>
                                <a href="#" style="--item-index: 2;">Hats</a>
                                <a href="#" style="--item-index: 3;">Scarves</a>
                                <a href="#" style="--item-index: 4;">Jewelries</a>
                            </div>
                            <div class="column">
                                <a class="bbh">BAGS</a>
                                <a href="#" style="--item-index: 1;">Handbags</a>
                                <a href="#" style="--item-index: 2;">Tote Bags</a>
                                <a href="#" style="--item-index: 3;">Mini Bags</a>
                            </div>
                            <div class="column">
                                <a class="bbh">SHOES</a>
                                <a href="#" style="--item-index: 1;">Heels</a>
                                <a href="#" style="--item-index: 2;">Flats</a>
                                <a href="#" style="--item-index: 3;">Boots</a>
                                <a href="#" style="--item-index: 4;">Sneakers</a>
                            </div>
                        </div>
                    </div>
                </li>  
                <li class="bba"><a href="product.html">ALL PRODUCTS & ITEMS</a></li>
                <li class="bba"><a href="events.html">Events</a></li>
                <li class="bba"><a href="about.html">About Us</a></li>
            </ul>
        </nav>
    
        <div class="right-side">
            <button class="search-bar">
                <img src="assets/nav-bar/search_24dp_000000_FILL0_wght100_GRAD0_opsz24.svg" id="search-icon">
            </button>
    
            <button href="#" id="account">
                <img src="assets/nav-bar/account_circle_24dp_000000_FILL0_wght100_GRAD0_opsz24.svg" id="gambar-account"> 
                <div class="top-header-text">Account</div>
            </button>
    
            <a href="#" id="cart">
                <img src="assets/nav-bar/shopping_cart_24dp_000000_FILL0_wght100_GRAD0_opsz24.svg" id="gambar-cart">
                <div class="top-header-text">Cart</div>
            </a>
    
            <button id="menu-bar">
                <img src="assets/nav-bar/menu_24dp_000000_FILL0_wght100_GRAD0_opsz24.svg" id="menu-icon">
                <div class="top-header-text">Menu</div>
            </button>
        </div>
    `;

    // Add script for header behavior
    const script = document.createElement('script');
    script.src = 'script/headerbehavior.js';
    document.body.appendChild(script);
});