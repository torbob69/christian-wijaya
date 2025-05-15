// // Function to display all products from the product data
// function displayAllProducts() {
//     // Get the container where products will be displayed
//     const productGrid = document.querySelector('.product-grid');
    
//     // Clear any existing products in the grid
//     productGrid.innerHTML = '';
    
//     // Loop through gender categories (men, women)
//     for (const gender in productdata) {
//         // Loop through product categories (tops, bottoms, etc.)
//         for (const category in productdata[gender]) {
//             // Loop through subcategories (shirts, jackets, etc.)
//             for (const subcategory in productdata[gender][category]) {
//                 // Get the array of products in this subcategory
//                 const products = productdata[gender][category][subcategory];
                
//                 // Loop through each product
//                 for (const product of products) {
//                     // Include the $ symbol directly in the formatted price string
//                     const formattedPrice = '$' + product.price.toFixed(2);
                    
//                     // Create a product element
//                     const productCard = document.createElement('a');
//                     productCard.className = 'product-card';
//                     productCard.href = '#';
//                     // Fill the product element with the template
//                     productCard.innerHTML = `
//                         <div class="product-image-container">
//                             <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='assets/home-page/5038500.png'">
//                             <div class="quick-view-button">SEE DETAILS</div>
//                         </div>
//                         <div class="product-info">
//                             <h3 class="product-name">${product.name}</h3>
//                             <p class="product-price">${formattedPrice}</p>
//                         </div>
//                     `;
                    
//                     // Add the product to the grid
//                     productGrid.appendChild(productCard);
//                 }
//             }
//         }
//     }
// }

// // Call the function when the page loads
// document.addEventListener('DOMContentLoaded', function() {
//     displayAllProducts();
// });