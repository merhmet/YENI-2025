console.clear();

new Vue({
  el: "#webshop",
  data: {
    basket: new Order(),

    articles: [
    new Article("Schotel", 2.99),
    new Article("Pitta Brood", 2.99),
    new Article("Pitta Kip", 1.49), 
    new Article("Kip Pitta", 12),
    new Article("Frans Hamburg", 10.00), 
    new Article("Drinken", 2.00),
    new Article("Kalkoenstick", 2.00),
    new Article("Kapsalon", 10.00)] },



  methods: {
    addToBasket(product) {
      console.log("Adding", product, "to basket..");
      this.basket.orderItems.push(new OrderItem(product, 1));
    },
    deleteItem(order) {
      let idx;
      if (order instanceof OrderItem)
      idx = this.basket.orderItems.indexOf(order);else

      idx = order;

      this.basket.orderItems.splice(idx, 1);
    } } });



var counter = 0;
function Article(name, price, id) {
  this.id = id;

  if (typeof id === "undefined" || id === null)
  this.id = counter++;

  this.name = name;
  this.price = price;
}

let getSameEntries = (arr, as) => arr.filter(x => x === as);

function OrderItem(article, times) {
  this.article = article;
  this.times = times;
}

OrderItem.prototype.getCost = function () {
  return this.article.price * this.times;
};

function Order(orderItems) {
  this.orderItems = orderItems || [];
}

Order.prototype.getCost = function () {
  var sum = 0;
  for (let i = 0; i < this.orderItems; i++) {
    sum += this.orderItems[i].getCost();
  }
  return sum;
};