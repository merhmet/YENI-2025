$(function () {
  function CartProduct(name, price, img, inCart) {
    this.name = name;
    this.price = price;
    this.img = img;
    this.inCart = inCart + 1;
  }

  CartProduct.prototype.inCartIncrease = function (product) {
    this.inCart = product.inCart++;
  };
  CartProduct.prototype.inCartDecrease = function (product) {
    this.inCart = product.inCart--;
  };
  let Product = {
    //param
    $container: $(".container"),
    $cartId: $("#cart"),
    $productsContainer: $(".products"),
    $pageCart: $(".pageCart"),
    maxInCart: 100,
    products: [
      {
        name: "Pitta",
        price: 10,
        img:
          "https://od.lk/s/OTFfMzExNTY0MjFf/pitta.jpg",
        tag: "samsungz",
        inCart: 0
      },
      {
        name: "Kapsalon",
        price: 15,
        img:
          "https://od.lk/s/OTFfMzExNTY0NjNf/Kapsalon_Amstelveen.jpg",
        tag: "samsungs8plus",
        inCart: 0
      },
      {
        name: "Durum",
        price: 10,
        img:
          "https://od.lk/s/OTFfMzExNjIwMjlf/durum.png",
        tag: "samsungs20",
        inCart: 0
      },
      {
        name: "Frans Burger",
        price: 12,
        img:
          "https://od.lk/s/OTFfMzExNTY0NjZf/FRANSHAMBURGER.jpg",
        tag: "samsungnote10",
        inCart: 0
      }
    ],
    Cart: {},

    /**
     * Initialize
     */
    init: function () {
      this.initData();
      this.initEvents();
    },

    /**
     * Init Data
     */
    initData: function () {
      this.onLoadCartNumbers();
      this.renderContent();
    },

    /**
     * Init Event
     */
    initEvents: function () {
      this.addProduct();
      this.goToCart();
    },

    /**
     * Go To Cart Event
     */
    goToCart: function () {
      this.onLoadCartNumbers();
      this.cartInitData();
      this.cartInitEvent();
    },
    /**
     * Cart Init Data
     */
    cartInitData: function () {
      this.renderCart();
    },
    /**
     * Cart Init Event
     */
    cartInitEvent: function () {
      this.increaseInCart();
      this.decreaseInCart();
      this.deleteItemsInCart();
      this.changeQty();
    },
    /**
     * Render Product
     */
    renderContent: function () {
      let html = "";
      for (product of this.products) {
        html += this.renderProduct(product);
      }
      this.$container.html(html);
    },
    /**
     * render image content
     */
    renderProduct: function (product) {
      return `<div class="image">
                <img src=${product.img} alt="${product.tag}">
                <h3>${product.name}</h3>
                <h3>${this.getFormatter(product.price)}</h3>
                <a class="add-cart cart1">Bestellen</a>
                <input type="hidden" value="€{product.onstock}"/>
            </div>`;
    },
    /**
     * Add Product Event
     */
    addProduct: function () {
      let self = this;
      $(".add-cart").each(function (index) {
        $(this).on("click", function () {
          let product = self.products[index];
          self.updateCart(product, product.tag, "increase");
          let Cart = self.getLocalCart();
          if (Cart[product.tag].inCart > self.maxInCart) {
            self.updateCart(product, product.tag, "decrease");
          }
        });
      });
    },
    /**
     * Update Local Storage
     */
    updateCart: function (product, productKey, Qty) {
      this.setLocalCartNumber(Qty);
      this.setLocalTotalCost(product, Qty);
      this.addToCart(product, productKey, Qty);
    },
    /**
     * On Load LocalStorage
     */
    onLoadCartNumbers: function () {
      let cartNumbers = this.getLocalcartNumbers();
      if (cartNumbers) {
        this.$cartId.html(cartNumbers);
      }
    },

    /**
     * Add to Cart - LocalStorage
     */
    addToCart: function (product, productKey, Qty) {
      this.Cart = this.getLocalCart();
      if (this.Cart) {
        let flag = false,
          currentItem;
        for (key in this.Cart) {
          if (key === productKey) {
            currentItem = this.Cart[key];
            flag = true;
            break;
          }
        }
        if (flag) {
          if (Qty === "decrease") {
            CartProduct.prototype.inCartDecrease(currentItem);
          } else if (Qty === "increase") {
            CartProduct.prototype.inCartIncrease(currentItem);
          } else if (Qty) {
            this.Cart[key].inCart += Qty;
          }
        } else {
          this.add(product);
        }
      } else {
        this.add(product);
      }
      this.saveCart();
    },

    /**
     * Add to Cart
     */
    add: function (product) {
      let item = new CartProduct(
        product.name,
        product.price,
        product.img,
        product.inCart
      );
      this.Cart[product.tag] = item;
    },

    /**
     * Save Cart to LocalStorage
     */
    saveCart: function () {
      localStorage.setItem("Cart", JSON.stringify(this.Cart));
    },
    /**
     * Get Cart Number LocalStorage
     */
    getLocalcartNumbers: function () {
      let cartNumbers = localStorage.getItem("cartNumbers");
      return parseInt(cartNumbers);
    },
    /**
     * Get Total Cost LocalStorage
     */
    getLocalTotalCost: function () {
      let totalCost = localStorage.getItem("totalCost");
      return parseInt(totalCost);
    },
    /**
     * Get Products In Cart LocalStorage
     */
    getLocalCart: function () {
      let Cart = localStorage.getItem("Cart");
      // return !Cart ? {} : JSON.parse(Cart);
      return JSON.parse(Cart) || {};
    },
    /**
     * LocalStorage Cart Number
     */
    setLocalCartNumber: function (Qty) {
      let cartNumbers = 0,
        Cart = this.getLocalCart();
      for (key in Cart) {
        cartNumbers += Cart[key].inCart;
      }
      if (Qty === "decrease") {
        cartNumbers--;
      } else if (Qty === "increase") {
        cartNumbers++;
      } else if (Qty) {
        cartNumbers += Qty;
      }
      localStorage.setItem("cartNumbers", cartNumbers);
      this.$cartId.html(cartNumbers);
    },

    /**
     * LocalStorage Total Cost
     */
    setLocalTotalCost: function (product, Qty) {
      let totalCost = 0,
        Cart = this.getLocalCart();
      for (key in Cart) {
        totalCost += Cart[key].inCart * Cart[key].price;
      }
      if (Qty === "decrease") {
        totalCost -= product.price;
      } else if (Qty === "increase") {
        totalCost += product.price;
      } else if (Qty) {
        totalCost += Qty * product.price;
      }
      localStorage.setItem("totalCost", totalCost);
      $(".basketTotal").html(this.getFormatter(totalCost));
    },
    /**
     * Render Cart
     */
    renderCart: function () {
      let Cart = this.getLocalCart(),
        totalCost = this.getLocalTotalCost(),
        html = "";
      if (Cart) {
        for (key in Cart) {
          html += this.renderCartItem(Cart[key], key);
        }
        html += this.renderTotalCost(totalCost);
      }
      this.$productsContainer.html(html);
    },

    /**
     * Render Cart Item
     */
    renderCartItem: function (product, key) {
      return `<div class="product" data-id="${key}">
            <div class="description">
                <ion-icon class="delete" name="close-circle"></ion-icon>
                <img src="${product.img}"/>
                <span class="sm-hide">${product.name}</span>
            </div>
            <div class="price">€{this.getFormatter(product.price)}</div>
            <div class="quantity">
                <ion-icon class="decrease" name="arrow-dropleft-circle"></ion-icon>
                <input type="number" value ="€{product.inCart}"/> 
                <ion-icon class="increase" name="arrow-dropright-circle"></ion-icon>   
            </div>
            <div class="total">€{this.getFormatter(
              product.price * product.inCart
            )}</div>
            </div>`;
    },

    /**
     * Render Total Cost
     */
    renderTotalCost: function (totalCost) {
      total = Number.isNaN(totalCost) ? 0 : totalCost;
      return `<div class="basketTotalContainer">
                <h4 class="basketTotalTitle">Basket Total</h4>
                <h4 class="basketTotal">€{this.getFormatter(total)}</h4>
            </div>`;
    },

    /**
     * Increase Quantity In Cart Event
     */
    increaseInCart: function () {
      let self = this;
      $(".increase").each(function (index) {
        $(this).on("click", function () {
          let currentItemKey = self.getCurrentItem(this).attr("data-id"),
            Cart = self.getLocalCart();
          currentQty = $(this.parentNode).children("input").val();
          if (currentQty > 0 && currentQty < self.maxInCart) {
            self.changeInCartHTML(this, Cart[currentItemKey], "increase");
            self.updateCart(Cart[currentItemKey], currentItemKey, "increase");
          } else {
            $(this).val(Cart[currentItemKey].inCart);
          }
        });
      });
    },

    /**
     * Decrease Quantity In Cart Event
     */
    decreaseInCart: function () {
      let self = this;
      $(".decrease").each(function (index) {
        $(this).on("click", function () {
          let currentItemKey = self.getCurrentItem(this).attr("data-id"),
            Cart = self.getLocalCart();
          if (Cart[currentItemKey].inCart > 1) {
            self.changeInCartHTML(this, Cart[currentItemKey], "decrease");
            self.updateCart(Cart[currentItemKey], currentItemKey, "decrease");
          }
        });
      });
    },

    /**
     * Delete Items In Cart EventEvent
     */
    deleteItemsInCart: function () {
      let self = this;
      $(".delete").on("click", function () {
        let currentItemKey = self.getCurrentItem(this).attr("data-id"),
          Cart = self.getLocalCart();
        delete Cart[currentItemKey];
        self.Cart = Cart;
        localStorage.removeItem("Cart");
        self.saveCart();
        self.removeItemCart(this);
        self.setLocalCartNumber();
        self.setLocalTotalCost(Cart[currentItemKey]);
      });
    },

    /**
     * In Cart change Html
     */
    changeInCartHTML: function (ownThis, product, Qty) {
      let total,
        $currentItem = this.getCurrentItem(ownThis);
      if (Qty === "decrease") {
        total = (product.inCart - 1) * product.price;
        this.updateEachInCart(ownThis, Qty);
      } else if (Qty === "increase") {
        total = (product.inCart + 1) * product.price;
        this.updateEachInCart(ownThis);
      } else if (Qty) {
        total = (product.inCart + Qty) * product.price;
      }
      this.updateEachTotal($currentItem, total);
    },

    /**
     * Update Each Total
     */
    updateEachTotal: function ($currentItem, total) {
      $currentItem.find(".total").html(this.getFormatter(total));
    },

    /**
     * Update Each Quantity InCart
     */
    updateEachInCart: function (ownThis, decrease) {
      if (decrease) {
        let currentInCart = $(ownThis.nextElementSibling).val();
        if (currentInCart > 1) {
          currentInCart--;
        }
        $(ownThis.nextElementSibling).val(currentInCart);
      } else {
        let currentInCart = $(ownThis.previousElementSibling).val();
        currentInCart++;
        $(ownThis.previousElementSibling).val(currentInCart);
      }
    },

    /**
     * Get Key Current of Item in Cart
     */
    getCurrentItem: function (ownThis) {
      return $(ownThis.parentNode.parentNode);
    },
    /**
     * Remove Item
     */
    removeItemCart: function (ownThis) {
      this.getCurrentItem(ownThis).remove();
    },

    /**
     * Change Quantity
     */
    changeQty: function () {
      let self = this;
      $(".quantity > input").on("change", function () {
        let currentItemKey = self.getCurrentItem(this).attr("data-id"),
          Cart = self.getLocalCart(),
          currentQty = $(this).val();
        if (
          currentQty.match(/^\d+$/) &&
          currentQty > 0 &&
          currentQty < self.maxInCart + 1
        ) {
          let Qty = parseInt($(this).val()) - Cart[currentItemKey].inCart;
          self.updateCart(Cart[currentItemKey], currentItemKey, Qty);
          self.changeInCartHTML(this, Cart[currentItemKey], Qty);
        } else {
          $(this).val(Cart[currentItemKey].inCart);
        }
      });
    },
    /**
     * Format currency
     */
    getFormatter: function (number) {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EUR",
        minimumFractionDigits: 2
      });
      return formatter.format(number);
    },

    /**
     * Convert currency
     */
    getConvert: function (currency) {
      var number = Number(currency.replace(/[^0-9\.]+/g, ""));
      return number;
    }
  };
  Product.init();
});