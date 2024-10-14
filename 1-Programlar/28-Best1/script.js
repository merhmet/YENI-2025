//Cart
var shoppingCart = function () {

  cart = [];

  function Item(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;
  }

  function saveCart() {
    sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
  }

  // Load cart
  function loadCart() {
    cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
  }
  if (sessionStorage.getItem("shoppingCart") != null) {
    loadCart();
  }


  // =============================
  // Public methods and propeties
  // =============================
  var obj = {};

  // Add to cart
  obj.addItemToCart = function (name, price, count) {
    for (var item in cart) {
      if (cart[item].name === name) {
        cart[item].count++;
        saveCart();
        return;
      }
    }
    var item = new Item(name, price, count);
    cart.push(item);
    saveCart();
  };
  // Set count from item
  obj.setCountForItem = function (name, count) {
    for (var i in cart) {
      if (cart[i].name === name) {
        cart[i].count = count;
        break;
      }
    }
  };
  // Remove item from cart
  obj.removeItemFromCart = function (name) {
    for (var item in cart) {
      if (cart[item].name === name) {
        cart[item].count--;
        if (cart[item].count === 0) {
          cart.splice(item, 1);
        }
        break;
      }
    }
    saveCart();
  };

  // Remove all items from cart
  obj.removeItemFromCartAll = function (name) {
    for (var item in cart) {
      if (cart[item].name === name) {
        cart.splice(item, 1);
        break;
      }
    }
    saveCart();
  };

  // Clear cart
  obj.clearCart = function () {
    cart = [];
    saveCart();
  };

  // Count cart 
  obj.totalCount = function () {
    var totalCount = 0;
    for (var item in cart) {
      totalCount += cart[item].count;
    }
    return totalCount;
  };

  // Total cart
  obj.totalCart = function () {
    var totalCart = 0;
    for (var item in cart) {
      totalCart += cart[item].price * cart[item].count;
    }
    return Number(totalCart.toFixed(2));
  };

  // List cart
  obj.listCart = function () {
    var cartCopy = [];
    for (i in cart) {
      item = cart[i];
      itemCopy = {};
      for (p in item) {
        itemCopy[p] = item[p];

      }
      itemCopy.total = Number(item.price * item.count).toFixed(2);
      cartCopy.push(itemCopy);
    }
    return cartCopy;
  };

  // cart : Array
  // Item : Object/Class
  // addItemToCart : Function
  // removeItemFromCart : Function
  // removeItemFromCartAll : Function
  // clearCart : Function
  // countCart : Function
  // totalCart : Function
  // listCart : Function
  // saveCart : Function
  // loadCart : Function
  return obj;
}();


// *****************************************
// Triggers / Events
// ***************************************** 
// Add item
$('.add-to-cart').click(function (event) {
  event.preventDefault();
  var name = $(this).data('name');
  var price = Number($(this).data('price'));
  shoppingCart.addItemToCart(name, price, 1);
  displayCart();
});

// Clear items
$('.clear-cart').click(function () {
  shoppingCart.clearCart();
  displayCart();
});


function displayCart() {
  var cartArray = shoppingCart.listCart();
  var output = "";
  for (var i in cartArray) {
    output += "<tr>" +
    "<td>" + cartArray[i].name + "</td>" +
    "<td>₱" + cartArray[i].price + "</td>" +
    "<td>" + "<input type='number' class='item-count form-control' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>" + "</td>" +
    cartArray[i].name + ">X</button></td>" +
    " = " +
    "<td>" + cartArray[i].total + "</td>" +
    "</tr>";
  }
  $('.show-cart').html(output);
  $('.total-cart').html(shoppingCart.totalCart());
  $('.total-count').html(shoppingCart.totalCount());
}

// Delete item button

$('.show-cart').on("click", ".delete-item", function (event) {
  var name = $(this).data('name');
  shoppingCart.removeItemFromCartAll(name);
  displayCart();
});


// Item count input
$('.show-cart').on("change", ".item-count", function (event) {
  var name = $(this).data('name');
  var count = Number($(this).val());
  shoppingCart.setCountForItem(name, count);
  displayCart();
});

displayCart();

function Star(props) {
  return /*#__PURE__*/(
    React.createElement("div", { className: `star ${props.value == 0 ? 'semi-active' : ''} ${props.position <= props.rated ? 'active' : ''} `,
      onMouseEnter: props.onMouseEnter,
      onMouseLeave: props.onMouseLeave,
      onClick: props.onClick }, /*#__PURE__*/


    React.createElement("i", { className: "fas fa-star" })));


}

function Rating(props) {
  const messages = {
    "1": "Oh. Sorry you had a bad experience :( ",
    "2": "We will try to improve.",
    "3": "Appreciate it!",
    "4": "Thank you!",
    "5": "You're Awesome!" };


  let rating = props.rating;

  return /*#__PURE__*/(
    React.createElement("div", { className: "after-rating-message " + (rating > 0 ? 'show' : '') }, /*#__PURE__*/
    React.createElement("span", null, "You rated this ", rating, " star", rating > 1 ? 's' : ''), /*#__PURE__*/
    React.createElement("br", null), /*#__PURE__*/
    React.createElement("span", null, messages[rating])));


}


class RatingWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stars: Array(5).fill(-1),
      rated: 0 };

  }

  handleMouseOver(i) {
    let currentRating = this.state.rated;

    if (currentRating > 0) {
      const hoverRatedStars = this.state.stars.slice();
      _.fill(hoverRatedStars, 0, currentRating, i);
      this.setState({ stars: hoverRatedStars });
    } else
    {
      const hoverStars = Array(5).fill(-1);
      _.fill(hoverStars, 0, 0, i + 1);
      this.setState({ stars: hoverStars });
    }
  }

  handleMouseOut() {
    let currentRating = this.state.rated;
    if (currentRating > 0) {
      const resetRatedStars = this.state.stars.slice();
      _.fill(resetRatedStars, -1, currentRating, resetRatedStars.length);
      this.setState({ stars: resetRatedStars });
    } else
    {
      const resetStars = this.state.stars.slice();
      _.fill(resetStars, -1, 0, resetStars.length);
      this.setState({ stars: resetStars });
    }
  }

  handleClick(i) {
    const clickedStar = this.state.stars.slice();

    _.fill(clickedStar, 1, 0, i);
    _.fill(clickedStar, 1, i, clickedStar.length);

    this.setState({
      stars: clickedStar,
      rated: i });

  }


  handleRating(rating) {
    return /*#__PURE__*/React.createElement(Rating, { rating: this.state.rated });
  }

  renderStar(i) {
    return /*#__PURE__*/(
      React.createElement(Star, {
        position: i,
        value: this.state.stars[i],
        rated: this.state.rated,
        onMouseEnter: () => this.handleMouseOver(i),
        onMouseLeave: () => this.handleMouseOut(),
        onClick: () => this.handleClick(i) }));


  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "rating-stars-widget-outer" }, /*#__PURE__*/
      React.createElement("div", { className: "rating-stars" },
      this.renderStar(1),
      this.renderStar(2),
      this.renderStar(3),
      this.renderStar(4),
      this.renderStar(5)),


      this.handleRating(this.state.rated)));




  }}



ReactDOM.render( /*#__PURE__*/React.createElement(RatingWidget, null), document.getElementById("widget"));