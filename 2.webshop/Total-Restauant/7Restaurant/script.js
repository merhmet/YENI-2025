// Variable declaration
	var item1Price = 8;
	var item2Price = 10;
	var item3Price = 12;
  var itemPrice     = 0;
	var sizePrize     = 0;
	var toppingsPrize = 0;
	var totalPrice    = 0;
  var itemSelected  = false;

	var item1Topping = ['avocado','broccoli','onions','zucchini','tuna','ham'];
	var item2Topping = ['broccoli','onions','zucchini','lobster','oyster','salmon','bacon','ham'];
	var item3Topping = ['broccoli','onions','zucchini','tuna','bacon','duck','ham','sausage'];
// =====================================================

// Wait until page is ready
document.addEventListener('DOMContentLoaded', function() {
	// Clear total price
	document.getElementById('total').innerHTML = '$0';

	// Clear all item, set medium as default and disable all toppings
  let item = document.getElementsByClassName('item');
  let itemLoop;
  for (itemLoop = 0; itemLoop < item.length; itemLoop++){
    item[itemLoop].checked = false;
  }
  document.getElementById('medium').checked = true;
	// =====================================================

	// Reset all check box
  let allTopping = document.getElementsByClassName('topping');
	let toppingLoop;
	for (toppingLoop = 0; toppingLoop < allTopping.length; toppingLoop++){
    allTopping[toppingLoop].checked = false;
    allTopping[toppingLoop].disabled = true;
	}
  // =====================================================
  
  // Check if Pizza is selected
  let checkItem = document.getElementsByClassName('item');
  let checkItemLoop;
  for(checkItemLoop = 0; checkItemLoop < checkItem.length; checkItemLoop++){
    checkItem[checkItemLoop].onclick = item_checked;
  }
	// =====================================================
  
  // Check if size is selected
  let checkSize = document.getElementsByClassName('size');
  let checkSizeLoop;
  for(checkSizeLoop = 0; checkSizeLoop < checkSize.length; checkSizeLoop++){
    checkSize[checkSizeLoop].onclick = size_checked;
  }
	// =====================================================
  
  // Check if toppings added
  let toppings = document.getElementsByClassName('topping');
  let toppingsCheck;
  for(toppingsCheck = 0; toppingsCheck < toppings.length; toppingsCheck++){
    toppings[toppingsCheck].onclick = toppings_added;
  }
  // =====================================================
});  

// set item price based on item selected
function item_checked(){
  itemSelected = true;
  var toppings = document.getElementsByClassName('topping');
  var toppingLoop;
  var index;
  var arrTop;
  if(this.id == "item-1"){
    arrTop = item1Topping;
    itemPrice = item1Price;
    for(toppingLoop = 0; toppingLoop < toppings.length; toppingLoop++){
      index = toppings[toppingLoop].id;
      act_checkbox(arrTop, index);
    }
  } else if(this.id == "item-2"){
    itemPrice = item2Price;
    arrTop = item2Topping;
    for(toppingLoop = 0; toppingLoop < toppings.length; toppingLoop++){
      index = toppings[toppingLoop].id;
      act_checkbox(arrTop, index);
    }
  } else if(this.id == "item-3"){
    itemPrice = item3Price;
    arrTop = item3Topping;
    for(toppingLoop = 0; toppingLoop < toppings.length; toppingLoop++){
      index = toppings[toppingLoop].id;
      act_checkbox(arrTop, index);
    }   
  }
  toppings_added();
}
function act_checkbox(arrTop, index){
  if(arrTop.indexOf(index) !== -1){
        document.getElementById(index).disabled = false;
      } else {
        document.getElementById(index).checked = false;
        document.getElementById(index).disabled = true;
      }
}
// =====================================================

// set size price
function size_checked(){
  if(this.id == 'small'){
    sizePrize = -1;
  }else if(this.id == 'medium'){
    sizePrize = 0;
  }else if(this.id == 'large'){
    sizePrize = 2;
  }
  toppings_added();
}
// =====================================================

// Toppings added
function toppings_added(){
  let toppings = document.getElementsByClassName('topping');
  let toppingCheckPrice;
  let rawPrice = [];
  for(toppingCheckPrice = 0; toppingCheckPrice < toppings.length; toppingCheckPrice++){
    let isChecked = toppings[toppingCheckPrice].checked;
    if(isChecked){
      rawPrice.push(toppings[toppingCheckPrice].value);
    }
  }
  toppingsPrize = rawPrice.reduce(function(a,b){
      return parseInt(a) + parseInt(b)
    }, 0);
  print_price();
}
// =====================================================

// print out the total price
function print_price(){
  if(itemSelected){
    totalPrice = parseInt(itemPrice) + parseInt(sizePrize) + parseInt(toppingsPrize);
	  document.getElementById('total').innerHTML = '$' + totalPrice;
  } 
}
// =====================================================