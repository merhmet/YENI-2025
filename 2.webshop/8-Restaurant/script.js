angular.module('App', [])

angular.module('App')
  .controller('appController', appController)

appController.$inject = ['ProductService', '$scope'];

///
function appController(ProductService, $scope) {

  var vm = this;
  vm.addCart = addCart;
  vm.deleteProductCart = deleteProductCart;

  vm.client = {
      name: "",
      cart: [],
      total: 0
    }
    // Watch data cart for change
  $scope.$watch('vm.client.cart', calculateTotalCart, true)
  activate();

  function activate() {
    vm.products = ProductService.getProducts();
  }

  ///
  /* Add cart product */
  function addCart(product) {

    if (vm.client.cart.indexOf(product) === -1) {
      product.quantity = 1;
      product.done = true;
      vm.client.cart.push(product);

    }

  }

  /* Delete cart product */
  function deleteProductCart(product, index) {

    vm.client.cart.splice(index, 1)
    product.done = false;

  }

  function calculateTotalCart(oldValue, newValue) {

    vm.client.total = 0;
    // Re-calculate cart total
    vm.client.cart.forEach(function(dataCart) {

      vm.client.total += dataCart.price * dataCart.quantity

    })

  }

}

/* Service data provider     */
angular.module('App')
  .service('ProductService', ProductService)

ProductService.$inject = [];

function ProductService() {

  var vm = this;
  vm.getProducts = getProducts;

  function getProducts() {

    return [{
      libelle: "Durum ",
      image: "https://od.lk/s/OTFfMzExNjIwMjlf/durum.png",
      price: 5.00,
      done: false
    }, {
      libelle: "Frans Hanburger ",
      image: "https://od.lk/s/OTFfMzExNTY0NjZf/FRANSHAMBURGER.jpg",
      price: 10.00,
      done: false
    }, {
      libelle: "Kapsalon ",
      image: "https://od.lk/s/OTFfMzExNTY0NjNf/Kapsalon_Amstelveen.jpg",
      price: 15.00,
      done: false
    }, {

      libelle: "Shotel",
      image: "https://od.lk/s/OTFfMzExNTk4MjBf/shoarma-schotel.jpg",
      price: 20.00,

      done: false
    }, {
      libelle: "Pitta Broodje",
      image: "https://od.lk/s/OTFfMzExNTY0MjFf/pitta.jpg",
      price: 10.00,
      done: false
    }, {
      libelle: "Pitta Kip",
      image: "https://od.lk/s/OTFfMzExNTY0NjJf/Pita-kipshoarma-4-1024x683.jpg",
      price: 8.00,
      done: false
    }]
  }

}