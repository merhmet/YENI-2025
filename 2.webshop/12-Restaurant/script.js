function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const { Component } = React;

// Empty bazar store is initialized on first import.
const { register, poke } = bazar;

const colors = [
{ name: "Pitta Brood", hex: "#FDFF8D", text: "black", price: 10 },
{ name: "Pitta Kip", hex: "#4D1310", text: "white", price: 11 },
{ name: "Kapsalon", hex: "#EF5678", text: "black", price: 15 },
{ name: "Kip Burger", hex: "#4342B6", text: "white", price: 12 },
{ name: "Kip Kaas", hex: "#3CAF49", text: "black", price: 13 },
{ name: "Pitta Kaas", hex: "#F99484", text: "black", price: 13 },
{ name: "Durum", hex: "#95BE67", text: "black", price: 12 },
{ name: "Schotel", hex: "#DF3034", text: "white", price: 20 },
{ name: "Kipcorn", hex: "#97ECC2", text: "black", price: 2 },
{ name: "Kalkoen Stick ", hex: "#B560CA", text: "white", price: 2 },
{ name: "Extra Saus ", hex: "#0D0702", text: "white", price: 2 },
{ name: "Cay", hex: "#4DA8AB", text: "white", price: 1 },
{ name: "Koffie", hex: "#757A86", text: "white", price: 3 },
{ name: "Dranken", hex: "#FEC4E4", text: "black", price: 3 },
{ name: "Anadolu", hex: "#67C3D8", text: "white", price: 0 },
{ name: "Anadolu", hex: "#413323", text: "white", price: 0 },
{ name: "Anadolu", hex: "#9865C2", text: "white", price: 0 },
{ name: "Anadolu", hex: "#5A525E", text: "black", price: 0 },
{ name: "Anadolu", hex: "#2920A2", text: "white", price: 0 },
{ name: "Anadolu", hex: "#356132", text: "white", price: 0 }];











const Item = props => {
  const { name, price, hex, text } = props.color;

  const buy = () =>
  poke("App", {
    name,
    type: "increment" });


  return /*#__PURE__*/(
    React.createElement("div", { className: "brick" }, /*#__PURE__*/
    React.createElement("div", { className: "content" }, /*#__PURE__*/
    React.createElement("div", { className: "color", style: { color: text } }, /*#__PURE__*/
    React.createElement("div", { className: "palette", style: { background: hex } }), /*#__PURE__*/
    React.createElement("h1", null, name)), /*#__PURE__*/

    React.createElement("div", { className: "action" }, /*#__PURE__*/
    React.createElement("p", null, "€ ", price), /*#__PURE__*/
    React.createElement("button", { className: "buyButton", onClick: () => buy() }, "Buy")))));






};

const Shop = props => {
  const items = () => {
    return props.colors.map((color, index) => {
      return /*#__PURE__*/React.createElement(Item, { color: color, key: index });
    });
  };

  return /*#__PURE__*/React.createElement("div", { className: "wall" }, items());
};

const Cart = props => {
  let total = 0;
  const purchases = props.items.map((item, index) => {
    const { name, hex, price, quantity } = item;
    const currentImport = quantity * price;
    total += currentImport;
    return /*#__PURE__*/(
      React.createElement("li", { key: index }, /*#__PURE__*/
      React.createElement("span", { className: "cartColor", style: { background: hex } }, name), /*#__PURE__*/
      React.createElement("span", { className: "cartColorQty" }, " x", item.quantity), /*#__PURE__*/
      React.createElement("button", { onClick: () => poke("App", { name, type: "increment" }) }, "\u2795"), /*#__PURE__*/


      React.createElement("button", { onClick: () => poke("App", { name, type: "decrement" }) }, "\u2796"), /*#__PURE__*/


      React.createElement("span", { className: "cartColorImport" }, " €", currentImport), /*#__PURE__*/
      React.createElement("button", { onClick: () => poke("App", { name, type: "remove" }) }, "\uD83D\uDDD1")));


  });

  return /*#__PURE__*/(
    React.createElement("div", { className: "Cart" }, /*#__PURE__*/
    React.createElement("ul", null, purchases.length === 0 ? "empty (:" : purchases), /*#__PURE__*/
    React.createElement("div", { className: "cartTotal" }, "€ ", total)));


};

const Navbar = (props) => /*#__PURE__*/
React.createElement("div", { className: "navBar" }, /*#__PURE__*/
React.createElement("ul", null, /*#__PURE__*/
React.createElement("li", { onClick: () => props.changeView("shop") }, /*#__PURE__*/
React.createElement("span", { role: "img", "aria-label": "shop" }, "\uD83C\uDFEA",
" "), /*#__PURE__*/

React.createElement("span", null, "Shop")), /*#__PURE__*/

React.createElement("li", { onClick: () => props.changeView("cart") }, /*#__PURE__*/
React.createElement("span", { role: "img", "aria-label": "shop" }, "\uD83D\uDED2",
" "), /*#__PURE__*/

React.createElement("span", null, "Cart "), /*#__PURE__*/
React.createElement("span", { className: "cartQuantity" }, props.quantity))));





class App extends Component {
  constructor(props) {
    super(props);_defineProperty(this, "changeView",



































    where => this.setState({ view: where }));this.state = { colors: colors.map(e => ({ ...e, quantity: 0 })) };register({ id: "App", sync: () => this.state, onPoke: arg => {const { name, type } = arg;console.log('poked', name);const { colors } = this.state;this.setState({ colors: colors.map(e => {const { quantity } = e;return e.name === name ? { ...e, quantity: (() => {if (type === "increment") return quantity + 1;else if (type === "remove") return 0;return quantity - 1;})() } : e;}) });} });this.changeView = this.changeView.bind(this);}

  render() {
    const { view = "shop", colors } = this.state;

    const quantity = colors.map(e => e.quantity).reduce((a, b) => a + b);

    const inCart = colors.filter(e => e.quantity > 0);

    return /*#__PURE__*/(
      React.createElement("div", { className: "App" }, /*#__PURE__*/
      React.createElement(Navbar, { changeView: this.changeView, quantity: quantity }),
      view === "shop" ? /*#__PURE__*/React.createElement(Shop, { colors: colors }) : /*#__PURE__*/React.createElement(Cart, { items: inCart })));


  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));