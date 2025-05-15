document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    
    const productName = urlParams.get('name');
    const productPrice = parseFloat(urlParams.get('price'));
    const productImage = urlParams.get('image');
    const productDescription = urlParams.get('description');
    
    if(productName && productPrice && productImage && productDescription) {
        document.querySelector('.product-name').textContent = productName.toUpperCase();
        document.querySelector('.product-description').textContent = productDescription.toUpperCase();
        document.querySelector('.price-value').textContent = '$' + productPrice.toFixed(2);
        const sizeOption = document.querySelector(".size-option");
        const mainImage = document.querySelector('.main-image img');
        mainImage.src = productImage;
        mainImage.alt = productName;

        const addToCartBtn = document.querySelector('.add-to-cart-btn');
        const buyNowBtn = document.querySelector('.buy-now-btn');

        if(!mainImage.src.includes("bags")){
            addToCartBtn.disabled = true;
            buyNowBtn.disabled = true;
            addToCartBtn.classList.add('disabled');
            buyNowBtn.classList.add('disabled');
        }   
        

        function setupSizeSelection() {
            const sizeButtons = document.querySelectorAll('.size-option ul li button');
            
            sizeButtons.forEach(button => {
                button.addEventListener('click', function() {
                    sizeButtons.forEach(btn => btn.classList.remove('size-selected'));
                    
                    this.classList.add('size-selected');
                    
                    addToCartBtn.disabled = false;
                    buyNowBtn.disabled = false;
                    addToCartBtn.classList.remove('disabled');
                    buyNowBtn.classList.remove('disabled');
                });
            });
        }

        if(!mainImage.src.includes("bags")){
            sizeOption.innerHTML = `
                    <ul>
                        <li><button>S</button></li>
                        <li><button>M</button></li>
                        <li><button>L</button></li>
                        <li><button>XL</button></li>
                    </ul>
            `;
            setupSizeSelection();
        }
        else if(mainImage.src.includes("shoes")){
            sizeOption.innerHTML = `
                    <ul>
                        <li><button>37</button></li>
                        <li><button>40</button></li>
                        <li><button>41.5</button></li>
                        <li><button>42</button></li>
                        <li><button>43</button></li>
                        <li><button>44</button></li>
                        <li><button>45</button></li>
                        <li><button>46</button></li>
                    </ul>
            `;
            setupSizeSelection();
        }
        else{
            sizeOption.innerHTML = ``;
        }

        document.title = `${productName.toUpperCase()} | Christian Wijaya`;
        
        let gender = 'all';
        if(productName.includes('- Men')) {
            gender = 'men';
        } else if(productName.includes('- Women')) {
            gender = 'women';
        }
        
        document.querySelector('.product-breadcrumb').innerHTML = 
            `<a href="index.html">HOME</a> / 
             <a href="product.html?gender=${gender}&type=all&item=all">${gender.toUpperCase()} PRODUCTS</a> / 
             ${productName.toUpperCase()}`;
        
    } else {
        console.error('Missing product information in URL parameters');
    }
});