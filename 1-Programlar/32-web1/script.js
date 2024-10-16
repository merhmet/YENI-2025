import React, { useState, useEffect } from 'https://esm.sh/react@18.2.0';
import ReactDOM from 'https://esm.sh/react-dom@18.2.0';

function App() {
  const [openNav, setOpenNav] = useState(false);
  const [subData, setSubData] = useState({});

  return /*#__PURE__*/(
    React.createElement("div", { className: "App" }, /*#__PURE__*/
    React.createElement(Header, { setOpenNav: setOpenNav, openNav: openNav, setSubData: setSubData, subData: subData }), /*#__PURE__*/

    React.createElement("div", { className: "cards" },

    carts.map((item, index) => /*#__PURE__*/
    React.createElement(CartItem, { key: index, data: item, setSubData: setSubData, subData: subData })))));





}

const Nav = props => {
  const { setOpenNav, setSubData, subData } = props;

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    var bumpTotal = 0;
    Object.keys(subData).map(key => {
      if (subData[key]["count"] <= 0) {
        let bump = { ...subData };
        delete bump[key];
        setSubData(bump);
      }
      bumpTotal = bumpTotal + subData[key]["price"] * subData[key]["count"];
    });

    setTotalPrice(bumpTotal);
  }, [subData]);

  const removeElement = id => {
    let bump = { ...subData };
    delete bump[id];
    setSubData(bump);
  };

  const changeCount = (id, preData, value) => {
    setSubData({ ...subData, [preData.id]: {
        id: preData.id,
        source: preData.source,
        name: preData.name,
        price: preData.price,
        count: Number(value) } });

  };

  const handleCheckOut = () => {
    alert("Purchased   " + totalPrice + "$");
  };

  return /*#__PURE__*/(
    React.createElement("div", { className: "nav" }, /*#__PURE__*/
    React.createElement("div", { className: "nav_content" }, /*#__PURE__*/
    React.createElement("div", { className: "close" }, /*#__PURE__*/
    React.createElement("p", null, "Your Cart"), /*#__PURE__*/
    React.createElement("button", { onClick: () => setOpenNav(false) }, /*#__PURE__*/
    React.createElement("i", { class: "fa-regular fa-circle-xmark" }))), /*#__PURE__*/



    React.createElement("div", { className: "subtotal" }, /*#__PURE__*/
    React.createElement("p", null, "Subtotal"), /*#__PURE__*/
    React.createElement("p", null, Number(totalPrice).toFixed(2), "$")), /*#__PURE__*/


    React.createElement("div", { className: "added_carts" },

    Object.keys(subData).length > 0 ?
    Object.keys(subData).map((key, index) => /*#__PURE__*/
    React.createElement(SubCart, { data: subData[key], changeCount: changeCount, removeElement: removeElement })) : /*#__PURE__*/
    React.createElement("p", null, "Not found items")), /*#__PURE__*/



    React.createElement("div", { className: "checkout" }, /*#__PURE__*/
    React.createElement("button", { onClick: handleCheckOut }, "Checkout")))));






};

const SubCart = props => {
  const { data, changeCount, removeElement } = props;

  return /*#__PURE__*/(
    React.createElement("div", { className: "sub_cart" }, /*#__PURE__*/
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("img", { src: data.source, alt: "" }), /*#__PURE__*/
    React.createElement("div", { className: "sub_content" }, /*#__PURE__*/
    React.createElement("p", null, data.name), /*#__PURE__*/
    React.createElement("button", { onClick: () => removeElement(data.id) }, "Remove")), /*#__PURE__*/

    React.createElement("div", { className: "sub_count" }, /*#__PURE__*/
    React.createElement("input", { type: "number", value: data.count, onChange: e => changeCount(data.id, data, e.target.value) })))));




};

const Header = props => {
  const { setOpenNav, openNav, setSubData, subData } = props;
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    var bumpTotal = 0;
    Object.keys(subData).map(key => {
      bumpTotal += subData[key]["count"];
    });

    setTotalCount(bumpTotal);
  }, [subData]);

  return /*#__PURE__*/(
    React.createElement("header", null, /*#__PURE__*/
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("h2", null, "Shop")), /*#__PURE__*/

    React.createElement("div", { className: "navbar" }, /*#__PURE__*/
    React.createElement("button", { onClick: () => setOpenNav(!openNav) }, /*#__PURE__*/
    React.createElement("i", { class: "fa-solid fa-cart-shopping" }),
    totalCount > 0 ? /*#__PURE__*/
    React.createElement("div", { className: "cart_count" },
    totalCount) :
    null),


    openNav && /*#__PURE__*/React.createElement(Nav, { setOpenNav: setOpenNav, setSubData: setSubData, subData: subData }))));



};

const CartItem = props => {
  const { data, setSubData, subData } = props;

  const addCart = data => {
    setSubData({ ...subData, [data.id]: {
        id: data.id,
        source: data.source,
        name: data.name,
        price: data.price,
        count: subData[data.id] ? subData[data.id]["count"] + 1 : 1 } });

  };

  return /*#__PURE__*/(
    React.createElement("div", { className: "card" }, /*#__PURE__*/
    React.createElement("div", { className: "avatar" }, /*#__PURE__*/
    React.createElement("img", { src: data.source, alt: "" })), /*#__PURE__*/


    React.createElement("div", { className: "content" }, /*#__PURE__*/
    React.createElement("p", null, data.name), /*#__PURE__*/
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("p", null, "$", data.price), /*#__PURE__*/
    React.createElement("button", { onClick: () => addCart(data) }, "Add Cart")))));




};

const carts = [
{
  id: 1,
  source: "https://car-images.bauersecure.com/wp-images/2697/best_electric_cars_2023_kia_ev6_charging.jpg",
  name: "Product-1",
  price: 10.25 },

{
  id: 2,
  source: "https://car-images.bauersecure.com/wp-images/2697/best_electric_cars_2023_kia_ev6_charging.jpg",
  name: "Product-2",
  price: 20.13 },

{
  id: 3,
  source: "https://car-images.bauersecure.com/wp-images/2697/best_electric_cars_2023_kia_ev6_charging.jpg",
  name: "Product-3",
  price: 35 },

{
  id: 4,
  source: "https://car-images.bauersecure.com/wp-images/2697/best_electric_cars_2023_kia_ev6_charging.jpg",
  name: "Product-4",
  price: 12 },

{
  id: 5,
  source: "https://car-images.bauersecure.com/wp-images/2697/best_electric_cars_2023_kia_ev6_charging.jpg",
  name: "Product-5",
  price: 16 },

{
  id: 6,
  source: "https://car-images.bauersecure.com/wp-images/2697/best_electric_cars_2023_kia_ev6_charging.jpg",
  name: "Product-6",
  price: 11.56 },

{
  id: 7,
  source: "https://car-images.bauersecure.com/wp-images/2697/best_electric_cars_2023_kia_ev6_charging.jpg",
  name: "Product-7",
  price: 16.15 }];



ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));