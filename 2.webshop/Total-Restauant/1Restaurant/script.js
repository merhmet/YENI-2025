var productListEl = document.getElementById('product-list');
        var cartEl = document.getElementById('cart');
        var totalEl = document.getElementById('total-price');
        var products = [
            {
                id: 1,
                name: 'Schotel',
                price: 20.00,
                image: 'https://od.lk/s/OTFfMzExNTk4MjBf/shoarma-schotel.jpg'
            },
            {
                id: 2,
                name: 'Broodje Pitta',
                price: 8.00,
                image: 'https://od.lk/s/OTFfMzExNTY0MjFf/pitta.jpg'
            },
            {
                id: 3,
                name: 'Kapsalon',
                price: 15.00,
                image: 'https://od.lk/s/OTFfMzExNTY0NjNf/Kapsalon_Amstelveen.jpg'
            }
        ];
            

        products.forEach(function (product) {
            var productEl = document.createElement('div');
            productEl.className = 'product';
            productEl.innerHTML = `
                <img src="${product.image}" alt="Product Image">
                <div class="product-info">
                    <h4>${product.name}</h4>
                    <p class="price">€${product.price.toFixed(2)}</p>
                </div>
                <button class="button" onclick="addToCart(${product.id})">Bestellen</button>
            `;
            productListEl.appendChild(productEl);
        });

        var cart = [];

        function addToCart(productId) {
            var product = products.find(function (product) {
                return product.id === productId;
            });

            if (!product) {
                return;
            }

            cart.push(product);
            renderCart();
        }

        function removeFromCart(productId) {
            var productIndex = cart.findIndex(function (product) {
                return product.id === productId;
            });

            if (productIndex === -1) {
                return;
            }

            cart.splice(productIndex, 1);
            renderCart();
        }

        function renderCart() {
            cartEl.innerHTML = '';

            cart.forEach(function (product) {
                var cartItemEl = document.createElement('div');
                cartItemEl.className = 'cart-item';
                cartItemEl.innerHTML = `
                    <img src="${product.image}" alt="Product Image">
                    <div class="cart-item-info">
                        <h4>${product.name}</h4>
                        <p class="price">€${product.price.toFixed(2)}</p>
                    </div>
                    <div class="cart-item-remove" onclick="removeFromCart(${product.id})">Verwijderen</div>
                `;
                cartEl.appendChild(cartItemEl);
            });

            var totalPrice = cart.reduce(function (total, product) {
                return total + product.price;
            }, 0);

            totalEl.textContent = '€' + totalPrice.toFixed(2);
        }