const contentDiv = document.querySelector(".content");
const cardsDiv = document.querySelector(".cards");
const activeCart = document.querySelector(".active-cart");
const cart = document.querySelector(".cart");
const productsInCart = document.querySelector(".productsInCart");
const leghtCart = document.querySelector(".leght-cart");
const leghtCartP = leghtCart.querySelector("p");
const items = document.querySelector(".items");
leghtCartP.innerHTML = productsCart.length; 
items.innerHTML = productsCart.length + " items";
const totalValor = document.querySelector(".total-valor");
var total = productsCart.reduce(getTotal, 0);
function getTotal(total, item) {
  return total + item.product_price * item.quantity;
} // updating the total price
totalValor.innerHTML = "€" + total.toFixed(2);

if (productsCart.length <= 0) {
  const instruction = document.createElement("div");
  instruction.classList.add("instruction");
  const instructionP = document.createElement("p");
  instructionP.innerHTML = "Your cart is empty...";
  instruction.append(instructionP);
  productsInCart.append(instruction);
} else {
  const instruction = document.querySelector(".instruction");
  if (instruction) {
    instruction.remove();
  }
  const clearCart = document.createElement("div");
  clearCart.classList.add("clearCart");
  clearCart.innerHTML = "Verwijder Alles";
  productsInCart.append(clearCart);

  clearCart.addEventListener("click", () => {
    productsCart.splice(0, productsCart.length);
    var total = productsCart.reduce(getTotal, 0);
    function getTotal(total, item) {
      return total + item.product_price * item.quantity;
    } // updating the total price
    totalValor.innerHTML = "€" + total.toFixed(2);
    items.innerHTML = productsCart.length + " items";
    productsInCart.innerHTML = "";
    const instruction = document.createElement("div");
    instruction.classList.add("instruction");
    const instructionP = document.createElement("p");
    instructionP.innerHTML = "Your cart is empty...";
    instruction.append(instructionP);
    productsInCart.append(instruction);
    leghtCartP.innerHTML = productsCart.length;
  });
} // for if the quantity of items in the cart is greater than 0

activeCart.addEventListener("click", () => {
  if (cart.getAttribute("visible") === "false") {
    cart.setAttribute("visible", true);
  } else if (cart.getAttribute("visible") === "true") {
    cart.setAttribute("visible", false);
  }
}); // show and hide shopping cart

const cards = products.map(function (product) {
  const cardContent = document.createElement("div");
  const cardcontent_a = document.createElement("div");
  const cardcontent_b = document.createElement("div");
  const imgcontent = document.createElement("div");
  const img = document.createElement("img");
  img.src = product.cover;
  const addCart = document.createElement("div");
  addCart.innerHTML = '<i class="fa-solid fa-cart-plus"></i>';
  addCart.addEventListener("click", () => {
    setProductCart(product);
  }); // event responsible for add an item to the shopping cart
  const setInfo = document.createElement("div");
  setInfo.innerHTML = '<i class="fa-solid fa-info"></i>';
  const price = document.createElement("div");
  price.innerHTML = "€" + product.price;
  const name = document.createElement("div");
  name.innerHTML = product.name;

  cardContent.classList.add("card");
  cardcontent_a.classList.add("cardcontent-a");
  cardcontent_b.classList.add("cardcontent-b");
  imgcontent.classList.add("imgcontent");
  addCart.classList.add("add-cart");
  price.classList.add("price");
  name.classList.add("name");
  setInfo.classList.add("set-info");

  setInfo.addEventListener("click", () => {
    const div = document.querySelector(".infos");
    if (div) {
      div.remove();
    }
    setInfoProduct(product);
  }); // show and hide items information

  imgcontent.append(img);
  cardContent.append(imgcontent);
  cardContent.append(cardcontent_b);
  cardContent.append(cardcontent_a);
  cardContent.append(addCart);
  cardContent.append(setInfo);
  cardContent.append(price);
  cardContent.append(name);

  return cardContent;
}); // load items of array in cards view

cardsDiv.append(...cards); // pinning cards to parent div

const shoppingcart = productsCart.map(function (product) {
	
	const item = products.find((item) => item.id === Number(product.product_id));

    const productInCart = document.createElement("div");

    productInCart.classList.add("productInCart");

    const removProductInCart = document.createElement("div");
    removProductInCart.classList.add("removProductInCart");
    removProductInCart.addEventListener("click", () => {

      let index = productsCart.findIndex((prod) => prod.product_id === item.id);
      productsCart.splice(index, 1);

      var total = productsCart.reduce(getTotal, 0);
      function getTotal(total, item) {
        return total + item.product_price * item.quantity;
      } // updating the total price
      totalValor.innerHTML = "€" + total.toFixed(2);

      items.innerHTML = productsCart.length + " items";

	  leghtCartP.innerHTML = productsCart.length;

	  productInCart.remove();

      if (productsCart.length === 0) {

        const clearCart = document.querySelector(".clearCart");
        clearCart.remove();
        const instruction = document.createElement("div");
        instruction.classList.add("instruction");
        const instructionP = document.createElement("p");
        instructionP.innerHTML = "Your cart is empty...";
        instruction.append(instructionP);
        productsInCart.append(instruction);
      } // checking if this was the only item in the shopping cart and if so, adding the alert "Your cart is empty"

    });

    const removProductInCartP = document.createElement("p");
    removProductInCartP.innerHTML = '<i class="fa-regular fa-trash-can"></i>';

    const productImgDiv = document.createElement("div");
    productImgDiv.classList.add("productImage");

    const productImg = document.createElement("img");
    productImg.src = item.cover;

    const productContent = document.createElement("div");
    productContent.classList.add("productContent");

    const productName = document.createElement("div");
    productName.classList.add("productName");

    const productNameP = document.createElement("p");
    productNameP.innerHTML = item.name;

    const productPrice = document.createElement("div");
    productPrice.classList.add("productPrice");

    const productPriceP = document.createElement("p");
    productPriceP.innerHTML = "€" + item.price;

    const productQunt = document.createElement("div");
    productQunt.classList.add("productQunt");

    const productQuntLab = document.createElement("div");
    productQuntLab.classList.add("productQuntLab");
    productQuntLab.innerHTML = "1";
    productQuntLab.setAttribute("data-id", item.id);
	
    const productQuntAdd = document.createElement("div");
    productQuntAdd.classList.add("productQuntAR");
    productQuntAdd.innerHTML = '<i class="fa-solid fa-square-plus"></i>';
    productQuntAdd.addEventListener("click", () => {

      const prod = productsCart.find(
        (prod) => prod.product_id === Number(item.id)
      );
      prod.quantity = prod.quantity + 1;

      var total = productsCart.reduce(getTotal, 0);
      function getTotal(total, item) {
        return total + item.product_price * item.quantity;
      } // updating the total price

      totalValor.innerHTML = "€" + total.toFixed(2);

      productQuntLab.innerHTML = prod.quantity;

    }); // event responsible for adding +1 to item quantity	
	
    const productQuntRemov = document.createElement("div");
    productQuntRemov.classList.add("productQuntAR");
    productQuntRemov.innerHTML = '<i class="fa-solid fa-square-minus"></i>';
	
    productQuntRemov.addEventListener("click", () => {

      const prod = productsCart.find(
        (prod) => prod.product_id === Number(item.id)
      );

      if (prod.quantity > 1) {
		
        prod.quantity = prod.quantity - 1;

        var total = productsCart.reduce(getTotal, 0);
        function getTotal(total, item) {
          return total + item.product_price * item.quantity;
        } // updating the total price

        totalValor.innerHTML = "€" + total.toFixed(2);
        productQuntLab.innerHTML = prod.quantity;
      }

    }); // event responsible for removing -1 from item quantity
	
    productInCart.append(removProductInCart);
    removProductInCart.append(removProductInCartP);
    productInCart.append(productImgDiv);
    productImgDiv.append(productImg);
    productInCart.append(productContent);
    productContent.append(productName);
    productName.append(productNameP);
    productName.append(productPrice);
    productPrice.append(productPriceP);
    productContent.append(productQunt);
    productQunt.append(productQuntRemov);
    productQunt.append(productQuntLab);
    productQunt.append(productQuntAdd);

  return productInCart;
}); // load items of array in shoppingcart view

productsInCart.append(...shoppingcart); // pinning shoppingcart to parent div

function setInfoProduct(product) {
  const infos = document.createElement("div");
  const close = document.createElement("div");
  close.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
  const photos = document.createElement("div");

  const imgs = product.images.map(function (image) {
    const img = document.createElement("img");
    img.src = image;
    img.addEventListener("click", () => {
      const featuredImage = document.querySelector(".featured");
      const img = featuredImage.querySelector("img");
      img.src = image;
    }); // change featured image
    return img;
  });

  const gallery = document.createElement("div");
  const featured = document.createElement("div");
  const featuredImg = document.createElement("img");
  featuredImg.src = product.images[0];
  const info = document.createElement("div");
  const info_name = document.createElement("div");
  const info_name_text = document.createElement("p");
  info_name_text.innerHTML = product.name;
  const sales = document.createElement("div");
  const info_price = document.createElement("div");
  const info_price_text = document.createElement("p");
  info_price_text.innerHTML = "Price: €" + product.price;
  const info_description = document.createElement("div");
  const info_description_text = document.createElement("p");
  info_description_text.innerHTML = product.description;
  const info_add_to_cart = document.createElement("div");
  const info_add_to_cart_text = document.createElement("p");
  info_add_to_cart_text.innerHTML = "add to cart";
  info_add_to_cart.addEventListener("click", () => {
    setProductCart(product);
    infos.remove();
  }); // event responsible for add an item to the shopping cart
  infos.classList.add("infos");
  close.classList.add("close-info");
  gallery.classList.add("gallery");
  featured.classList.add("featured");
  photos.classList.add("photos");
  info.classList.add("info");
  info_name.classList.add("info-name");
  info_price.classList.add("info-price");
  sales.classList.add("sales");
  info_description.classList.add("info-description");
  info_add_to_cart.classList.add("info-add_to_cart");

  info_name.append(info_name_text);
  info_description.append(info_description_text);
  info_price.append(info_price_text);
  info_add_to_cart.append(info_add_to_cart_text);
  info.append(info_name);
  info.append(info_description);
  info.append(sales);
  sales.append(info_price);
  sales.append(info_add_to_cart);
  featured.append(featuredImg);
  photos.append(featured);
  photos.append(gallery);
  gallery.append(...imgs);
  infos.append(close);
  infos.append(photos);
  infos.append(info);
  contentDiv.append(infos);

  close.addEventListener("click", () => {
    infos.remove();
  }); // close item information
} // load item information

function setProductCart(product) {

  leghtCart.setAttribute("animate", "true");
  setTimeout(function () {
    leghtCart.setAttribute("animate", "false");
  }, 500); // creating an animation when adding item to shopping cart

  const hasItem = productsCart.find(
    (prod) => prod.product_id === Number(product.id)
  ); // checking if the item already exists in the shopping cart, if it exists just increase the current quantity of this item, otherwise the item is added.

  if (hasItem) {

    hasItem.quantity = hasItem.quantity + 1;
    const productQuntLab = document.querySelector(`[data-id="${product.id}"]`);
    productQuntLab.innerHTML = hasItem.quantity;
    var total = productsCart.reduce(getTotal, 0);
    function getTotal(total, item) {
      return total + item.product_price * item.quantity;
    } // updating the total price
    totalValor.innerHTML = "€" + total.toFixed(2);

  } else {

    const product_id = product.id;
    const product_price = product.price;
    const quantity = 1;
    productsCart.push({ product_id, product_price, quantity });

    items.innerHTML = productsCart.length + " items";
	
    var total = productsCart.reduce(getTotal, 0);
    function getTotal(total, item) {
      return total + item.product_price * item.quantity;
    } // updating the total price
    totalValor.innerHTML = "€" + total.toFixed(2);

	leghtCartP.innerHTML = productsCart.length;

    if (productsCart.length === 1) {
      const instruction = document.querySelector(".instruction");
      if (instruction) {
        instruction.remove();
      } // checking if this is the first item to be added to the cart and if so, removing the "Your cart is empty" alert.
	  
      const clearCart = document.createElement("div");
      clearCart.classList.add("clearCart");
      clearCart.innerHTML = "clear cart";
      productsInCart.append(clearCart);
      clearCart.addEventListener("click", () => {

        productsCart.splice(0, productsCart.length);
        var total = productsCart.reduce(getTotal, 0);
        function getTotal(total, item) {
          return total + item.product_price * item.quantity;
        } // updating the total price

        totalValor.innerHTML = "€" + total.toFixed(2);

        items.innerHTML = productsCart.length + " items";
		
        productsInCart.innerHTML = "";

        const instruction = document.createElement("div");
        instruction.classList.add("instruction");

        const instructionP = document.createElement("p");
        instructionP.innerHTML = "Your cart is empty...";
        instruction.append(instructionP);

        productsInCart.append(instruction);

        leghtCartP.innerHTML = productsCart.length;

      });
    } // event responsible for emptying the cart at once

    const item = products.find((item) => item.id === Number(product.id));

    const productInCart = document.createElement("div");

    productInCart.classList.add("productInCart");

    const removProductInCart = document.createElement("div");
    removProductInCart.classList.add("removProductInCart");
    removProductInCart.addEventListener("click", () => {

      let index = productsCart.findIndex((prod) => prod.product_id === item.id);
      productsCart.splice(index, 1);

      var total = productsCart.reduce(getTotal, 0);
      function getTotal(total, item) {
        return total + item.product_price * item.quantity;
      } // updating the total price
      totalValor.innerHTML = "€" + total.toFixed(2);

      items.innerHTML = productsCart.length + " items";

	  leghtCartP.innerHTML = productsCart.length;

	  productInCart.remove();

      if (productsCart.length === 0) {

        const clearCart = document.querySelector(".clearCart");
        clearCart.remove();
        const instruction = document.createElement("div");
        instruction.classList.add("instruction");
        const instructionP = document.createElement("p");
        instructionP.innerHTML = "Your cart is empty...";
        instruction.append(instructionP);
        productsInCart.append(instruction);
      } // checking if this was the only item in the shopping cart and if so, adding the alert "Your cart is empty"

    });

    const removProductInCartP = document.createElement("p");
    removProductInCartP.innerHTML = '<i class="fa-regular fa-trash-can"></i>';

    const productImgDiv = document.createElement("div");
    productImgDiv.classList.add("productImage");

    const productImg = document.createElement("img");
    productImg.src = item.cover;

    const productContent = document.createElement("div");
    productContent.classList.add("productContent");

    const productName = document.createElement("div");
    productName.classList.add("productName");

    const productNameP = document.createElement("p");
    productNameP.innerHTML = item.name;

    const productPrice = document.createElement("div");
    productPrice.classList.add("productPrice");

    const productPriceP = document.createElement("p");
    productPriceP.innerHTML = "€" + item.price;

    const productQunt = document.createElement("div");
    productQunt.classList.add("productQunt");

    const productQuntLab = document.createElement("div");
    productQuntLab.classList.add("productQuntLab");
    productQuntLab.innerHTML = "1";
    productQuntLab.setAttribute("data-id", item.id);
	
    const productQuntAdd = document.createElement("div");
    productQuntAdd.classList.add("productQuntAR");
    productQuntAdd.innerHTML = '<i class="fa-solid fa-square-plus"></i>';
    productQuntAdd.addEventListener("click", () => {

      const prod = productsCart.find(
        (prod) => prod.product_id === Number(item.id)
      );
      prod.quantity = prod.quantity + 1;

      var total = productsCart.reduce(getTotal, 0);
      function getTotal(total, item) {
        return total + item.product_price * item.quantity;
      } // updating the total price

      totalValor.innerHTML = "€" + total.toFixed(2);

      productQuntLab.innerHTML = prod.quantity;

    }); // event responsible for adding +1 to item quantity	
	
    const productQuntRemov = document.createElement("div");
    productQuntRemov.classList.add("productQuntAR");
    productQuntRemov.innerHTML = '<i class="fa-solid fa-square-minus"></i>';
	
    productQuntRemov.addEventListener("click", () => {

      const prod = productsCart.find(
        (prod) => prod.product_id === Number(item.id)
      );

      if (prod.quantity > 1) {
		
        prod.quantity = prod.quantity - 1;

        var total = productsCart.reduce(getTotal, 0);
        function getTotal(total, item) {
          return total + item.product_price * item.quantity;
        } // updating the total price

        totalValor.innerHTML = "€" + total.toFixed(2);
        productQuntLab.innerHTML = prod.quantity;
      }

    }); // event responsible for removing -1 from item quantity
	
    productsInCart.append(productInCart);
    productInCart.append(removProductInCart);
    removProductInCart.append(removProductInCartP);
    productInCart.append(productImgDiv);
    productImgDiv.append(productImg);
    productInCart.append(productContent);
    productContent.append(productName);
    productName.append(productNameP);
    productName.append(productPrice);
    productPrice.append(productPriceP);
    productContent.append(productQunt);
    productQunt.append(productQuntRemov);
    productQunt.append(productQuntLab);
    productQunt.append(productQuntAdd);
  }
}

const checkout = document.querySelector(".checkout");

checkout.addEventListener("click", () => {
	
	alert(`purchase of €{totalValor.textContent} for €{items.textContent} successfully completed 🛒💸😀`)

  }); // event responsible for checkout