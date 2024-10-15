// INITIAL STATE
// --------------------
// --> initialState
// 
// FUNCTIONS
// --------------------
// --> getOptionsArray
// 
// ACTIONS
// --------------------
// --> addToCart
// --> removeFromCart
// --> updateCartItem
// --> removeStockItem
// 
// REDUCERS
// --------------------
// ------> cartItem
// ----> cart
// ------> stockItem
// ----> stock
// --> reducers
// 
// COMPONENTS
// --------------------
// ------> Header
// ----> HeaderContainer
// ----------> ShopItem
// --------> ShopItems
// ------> ShopItemsContainer
// ----> Shop
// ----------> AddItem
// --------> AddItemContainer
// ------> Item
// ----> ItemContainer
// ----------> CartItem
// --------> CartItems
// --------> Total
// --------> PayButton
// ------> Cart
// ----> CartContainer
// ----> NoMatch
// --> App

const { PropTypes } = React;
const { connect, Provider } = ReactRedux;
const {
  Router,
  Route,
  Link,
  IndexRoute,
  hashHistory } =
ReactRouter;

// INITIAL STATE
const initialState = {
  cart: [],
  stock: [
  {
    id: 0,
    name: 'Pitta Tussen Brood',
    description: 'Pitta Vlees Tussen Turks Brood.',
    price: 10.00,
    count: 12,
    img: 'https://od.lk/s/OTFfMzExNTY0MjFf/pitta.jpg' },
  {
    id: 1,
    name: 'Franse Hamburger',
    description: 'Franse Hamburger.',
    price: 11.00,
    count: 7,
    img: 'https://od.lk/s/OTFfMzExNTY0NjZf/FRANSHAMBURGER.jpg' },
  {
    id: 2,
    name: 'Kapsalon',
    description: 'Kapsalon , Pitta Met Frieten en Kaas .',
    price: 13.00,
    count: 11,
    img: 'https://od.lk/s/OTFfMzExNTY0NjNf/Kapsalon_Amstelveen.jpg' },
  {
    id: 3,
    name: 'Frieten ',
    description: ' Frieten Met Keuze Saus.',
    price: 5.00,
    count: 13,
    img: 'https://od.lk/s/OTFfMzExNTY0MjNf/fritten.jpg' },
  {
    id: 4,
    name: 'TC 2016 Light SS',
    description: 'Kip Tussen Turks Brood.',
    price: 14.00,
    count: 16,
    img: 'https://od.lk/s/OTFfMzExNTY0NjJf/Pita-kipshoarma-4-1024x683.jpg' },
  {
    id: 5,
    name: 'Pitta Met Kaas',
    description: 'Pitta Met Kaas.',
    price: 29.00,
    count: 4,
    img: 'https://od.lk/s/OTFfMzExNTY0NjRf/pitta-kaas.jpg' },
  {
    id: 6,
    name: 'Kip Kaas',
    description: ' Kip Met Kaas!',
    price: 14.00,
    count: 18,
    img: 'https://od.lk/s/OTFfMzExNTY0NjVf/PITTAKIPKAAS.jpg' },
  {
    id: 7,
    name: 'DÜRÜM ',
    description: 'DÜRÜM Met of Zonder Frieten',
    price: 15.00,
    count: 15,
    img: 'https://od.lk/s/OTFfMzExNTY0NjFf/durumdoner-02340.jpg.webp' },
  {
    id: 8,
    name: 'Extra Sausen',
    description: 'Extra Sausen.',
    price: 1.00,
    count: 19,
    img: 'https://od.lk/s/OTFfMzExNTY0NzFf/extraSaus.jpg' }] };





// FUNCTIONS
// getOptionsArray
const getOptionsArray = count => {
  const array = [];
  for (let i = 0; i < count; i++) {
    array.push(i + 1);
  }

  return array;
};

// ACTIONS
// addToCart
const addToCart = (id, count) => (
{
  type: 'ADD_TO_CART',
  id,
  count });



// removeFromCart
const removeFromCart = (id) => (
{
  type: 'REMOVE_FROM_CART',
  id });



// updateCartItem
const updateCartItem = (id, count) => (
{
  type: 'UPDATE_CART_ITEM',
  id,
  count });



// removeStockItem
const removeStockItem = (id, count) => (
{
  type: 'REMOVE_STOCK_ITEM',
  id,
  count });




// REDUCERS
// cartItem
const cartItem = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        id: action.id,
        count: action.count };

    case 'REMOVE_FROM_CART':
      return state.id !== action.id;
    case 'UPDATE_CART_ITEM':
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign(
      {},
      state,
      {
        count: action.count });


    default:
      return state;}

};

// cart
const cart = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [
      ...state,
      cartItem(undefined, action)];

    case 'REMOVE_FROM_CART':
      return state.filter(item => cartItem(item, action));
    case 'UPDATE_CART_ITEM':
      return state.map(item => cartItem(item, action));
    default:
      return state;}

};

// stockItem
const stockItem = (state, action) => {
  switch (action.type) {
    case 'REMOVE_STOCK_ITEM':
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign(
      {},
      state,
      {
        count: state.count - action.count });


    default:
      return state;}

};

// stock
const stock = (state = [], action) => {
  switch (action.type) {
    case 'REMOVE_STOCK_ITEM':
      return state.map(item => stockItem(item, action));
    default:
      return state;}

};

// reducers
const reducers = Redux.combineReducers({
  cart,
  stock });



// COMPONENTS
// Header
const Header = ({ children, cartItems, backButton, cartButton }) => {
  const getBackButton = () => /*#__PURE__*/
  React.createElement(Link, { to: "/", className: "back-button" }, "< Terug");




  const getCartButton = () => /*#__PURE__*/
  React.createElement(Link, { to: "/cart", className: "cart-button" }, "Bestellingen (",
  cartItems, ")");



  return /*#__PURE__*/(
    React.createElement("div", { className: "shopping-cart-app" }, /*#__PURE__*/
    React.createElement("header", { className: "header" }, /*#__PURE__*/
    React.createElement("div", { className: "header-contents" },
    backButton ? getBackButton() : '',
    cartButton ? getCartButton() : '')), /*#__PURE__*/


    React.createElement("main", { className: "main" },
    children)));



};

Header.PropTypes = {
  cartItems: PropTypes.number.isRequired,
  backButton: PropTypes.bool.isRequired,
  cartButton: PropTypes.bool.isRequired };



// HeaderContainer
const showBackButton = (pathname) =>
pathname !== '/' ? true : false;


const showCartButton = (pathname) =>
!pathname.includes('cart') ? true : false;


const HeaderContainer = connect(
(state, ownProps) => (
{
  children: ownProps.children,
  cartItems: state.cart.length,
  backButton: showBackButton(ownProps.location.pathname),
  cartButton: showCartButton(ownProps.location.pathname) }))(


Header);


// ShopItem
const ShopItem = ({ id, name, price, img }) => /*#__PURE__*/
React.createElement("li", { className: 'shop-item shop-item-' + id }, /*#__PURE__*/
React.createElement(Link, { to: '/item/' + id }, /*#__PURE__*/
React.createElement("div", { className: "shop-item-container" }, /*#__PURE__*/
React.createElement("img", {
  className: "shop-item-image",
  src: img }), /*#__PURE__*/

React.createElement("h1", { className: "shop-item-name" },
name), /*#__PURE__*/

React.createElement("h2", { className: "shop-item-price" }, "€",
price.toFixed(2)))));






ShopItem.PropTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired };



// ShopItems
const ShopItems = ({ items }) => {
  if (!items.length) {
    return /*#__PURE__*/React.createElement("p", { className: "no-shop-items" }, "No items");
  }

  return /*#__PURE__*/(
    React.createElement("ul", { className: "shop-item-list" },
    items.map((item) => /*#__PURE__*/
    React.createElement(ShopItem, {
      key: item.id,
      id: item.id,
      name: item.name,
      price: item.price,
      img: item.img }))));




};

ShopItems.PropTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired }).
  isRequired).isRequired };



// ShopItemsContainer
const ShopItemsContainer = connect(
(state) => (
{
  items: state.stock }))(


ShopItems);


// Shop
const Shop = () => /*#__PURE__*/
React.createElement("div", { className: "shop" }, /*#__PURE__*/
React.createElement("h1", { className: "main-header shop-header" }, "Anadolu"), /*#__PURE__*/
React.createElement(ShopItemsContainer, null));




// AddItem
const AddItem = ({ id, count, onSubmit }) => {
  if (!count) {
    return /*#__PURE__*/(
      React.createElement("p", { className: "item-sold-out" }, "Sold out!"));



  }

  return /*#__PURE__*/(
    React.createElement("form", {
      className: "item-add-form",
      onSubmit: e => {
        e.preventDefault();
        onSubmit(e, id);
      } }, /*#__PURE__*/

    React.createElement("span", { className: "item-qty-label" }, "Aantal:"), /*#__PURE__*/


    React.createElement("select", { className: "item-qty" },
    getOptionsArray(count).map((num) => /*#__PURE__*/
    React.createElement("option", {
      key: num,
      value: num },

    num))), /*#__PURE__*/



    React.createElement("button", {
      className: "item-add-button",
      type: "submit" }, "Bestellen")));





};

AddItem.PropTypes = {
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired };



// AddItemContainer
const addItemGetSelectedValue = (e) =>
e.target.getElementsByClassName('item-qty')[0].value;


const AddItemContainer = connect(
(state, ownProps) => (
{
  id: ownProps.id,
  count: state.stock.find(item => item.id === ownProps.id).count,
  inCart: state.cart.some(item => item.id === ownProps.id) }),


null,
(stateProps, dispatchProps, ownProps) => {
  const onSubmit = stateProps.inCart ? updateCartItem : addToCart;

  return Object.assign({}, ownProps, stateProps, dispatchProps, {
    onSubmit: (e, id) => {
      dispatchProps.dispatch(onSubmit(id, addItemGetSelectedValue(e)));
    } });

})(
AddItem);


// Item
const Item = ({ id, name, description, price, img }) => /*#__PURE__*/
React.createElement("div", { className: 'item item-' + id }, /*#__PURE__*/
React.createElement("img", {
  className: "item-image",
  src: img }), /*#__PURE__*/

React.createElement("div", { className: "item-details" }, /*#__PURE__*/
React.createElement("h1", { className: "item-name" },
name), /*#__PURE__*/

React.createElement("h2", { className: "item-price" }, "€",
price.toFixed(2)), /*#__PURE__*/

React.createElement("p", { className: "item-desc" },
description), /*#__PURE__*/

React.createElement(AddItemContainer, { id: id })));




Item.PropTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired };



// ItemContainer
const ItemContainer = connect(
(state, ownProps) =>
state.stock.find(item => String(item.id) === ownProps.params.id))(

Item);


// CartItem
const CartItem = (
{ id, name, price, img, count, stockCount, onQtyChange, onRemoveClick }) => /*#__PURE__*/

React.createElement("li", { className: 'cart-item cart-item-' + id }, /*#__PURE__*/
React.createElement(Link, {
  to: '/item/' + id,
  className: "cart-item-image-link" }, /*#__PURE__*/

React.createElement("img", {
  className: "cart-item-image",
  src: img })), /*#__PURE__*/


React.createElement("div", { className: "cart-item-info" }, /*#__PURE__*/
React.createElement(Link, {
  to: '/item/' + id,
  className: "cart-item-name-link" }, /*#__PURE__*/

React.createElement("h1", { className: "cart-item-name" },
name)), /*#__PURE__*/


React.createElement("div", { className: "cart-item-value" }, /*#__PURE__*/
React.createElement("span", { className: "cart-item-price" }, "€",
price.toFixed(2)), /*#__PURE__*/

React.createElement("span", { className: "cart-item-qty" }, "Aantal:", /*#__PURE__*/

React.createElement("select", {
  className: "cart-item-qty-select",
  value: count,
  onChange: e => onQtyChange(e, id) },

getOptionsArray(stockCount).map((num) => /*#__PURE__*/
React.createElement("option", {
  key: num,
  value: num },

num)))))), /*#__PURE__*/






React.createElement("a", {
  href: "#",
  className: "cart-item-delete",
  onClick: e => {
    onRemoveClick(e, id);
  } }, "\xD7"));






CartItem.PropTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  stockCount: PropTypes.number.isRequired,
  onQtyChange: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired };



// CartItems
const CartItems = ({ cart, onQtyChange, onRemoveClick }) => {
  if (!cart.length) {
    return /*#__PURE__*/React.createElement("p", { className: "empty-cart" }, "Bestelling is leeg");
  }

  return /*#__PURE__*/(
    React.createElement("ul", { className: "cart-items" },
    cart.map((item) => /*#__PURE__*/
    React.createElement(CartItem, {
      key: item.id,
      id: item.id,
      name: item.name,
      price: item.price,
      img: item.img,
      count: item.count,
      stockCount: item.stockCount,
      onQtyChange: (e, id) => onQtyChange(e, id),
      onRemoveClick: (e, id) => onRemoveClick(e, id) }))));




};

CartItems.PropTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    stockCount: PropTypes.number.isRequired }).
  isRequired).isRequired,
  onQtyChange: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired };



// Total
const Total = ({ cart }) => /*#__PURE__*/
React.createElement("div", { className: "cart-total" }, /*#__PURE__*/
React.createElement("span", { className: "cart-total-label" }, "SubTotaal:"), /*#__PURE__*/


React.createElement("span", { className: "cart-total-value" }, "€",
cart.length ? cart.reduce((acc, item) =>
acc + item.price * item.count,
0).toFixed(2) : Number(0).toFixed(2)));




Total.PropTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    price: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired }).
  isRequired).isRequired };



// PayButton
const PayButton = ({ onPayClick }) => /*#__PURE__*/
React.createElement("button", {
  type: "button",
  className: "cart-pay-button",
  onClick: () => onPayClick() }, "Afsluiten");





PayButton.PropTypes = {
  onPayClick: PropTypes.func.isRequired };



// Cart
const Cart = ({ cart, onQtyChange, onRemoveClick, onPayClick }) => /*#__PURE__*/
React.createElement("div", { className: "cart" }, /*#__PURE__*/
React.createElement("h1", { className: "main-header cart-header" }, "Mijn Bestellingen"), /*#__PURE__*/
React.createElement(CartItems, {
  cart: cart,
  onQtyChange: onQtyChange,
  onRemoveClick: onRemoveClick }), /*#__PURE__*/

React.createElement(Total, { cart: cart }), /*#__PURE__*/
React.createElement(PayButton, { onPayClick: onPayClick }));



Cart.PropTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    stockCount: PropTypes.number.isRequired }).
  isRequired).isRequired,
  onQtyChange: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
  onPayClick: PropTypes.func.isRequired };



// CartContainer
const cartGetSelectedValue = (e) =>
e.target.value;


const CartContainer = connect(
(state) => (
{
  cart: state.cart.map(cartItem => {
    const item = state.stock.find(stockItem => cartItem.id === stockItem.id);
    return {
      id: cartItem.id,
      name: item.name,
      price: item.price,
      img: item.img,
      count: cartItem.count,
      stockCount: item.count };

  }) }),


(dispatch) => (
{
  onQtyChange: (e, id) => {
    dispatch(updateCartItem(id, cartGetSelectedValue(e)));
  },

  onRemoveClick: (e, id) => {
    e.preventDefault();
    dispatch(removeFromCart(id));
  },

  dispatch: reducer => dispatch(reducer) }),


(stateProps, dispatchProps, ownProps) =>
Object.assign({}, ownProps, stateProps, dispatchProps, {
  onPayClick: () =>
  stateProps.cart.map(item => {
    dispatchProps.dispatch(removeStockItem(item.id, item.count));
    dispatchProps.dispatch(removeFromCart(item.id));
  }) }))(


Cart);


// NoMatch
const NoMatch = () => /*#__PURE__*/
React.createElement("p", { className: "no-match" }, "Sorry, the page you are looking for does not exist. Click above to go back to the shop.");






// App
const App = () => /*#__PURE__*/
React.createElement(Router, { history: hashHistory }, /*#__PURE__*/
React.createElement(Route, { path: "/", component: HeaderContainer }, /*#__PURE__*/
React.createElement(IndexRoute, { component: Shop }), /*#__PURE__*/
React.createElement(Route, { path: "item/:id", component: ItemContainer }), /*#__PURE__*/
React.createElement(Route, { path: "cart", component: CartContainer }), /*#__PURE__*/
React.createElement(Route, { path: "*", component: NoMatch })));




const store = Redux.createStore(reducers, initialState);

ReactDOM.render( /*#__PURE__*/
React.createElement(Provider, { store: store }, /*#__PURE__*/
React.createElement(App, null)),

document.getElementById('app'));




















































