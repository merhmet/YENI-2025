// **********************************************
// Variable
// **********************************************
// jQuery DOM Variable
var $Phone          = $('#Phone');
var $Catapage       = $('#Catalog');
var $search         = $('#SearchBtn');
var $iPad           = $('#iPad');
var $iPhone         = $('#iPhone');
var $iWatch         = $('#AppleWatch');
var $Products       = $('#Products');
var $card           = $Products.find('.card');
var $heart          = $('i.fa-heart');
var $plus           = $('i.fa-plus');
var $Cart           = $('#Cart');
var $ShoppingCart   = $('#ShoppingCart');
var $CartLogo       = $('#Cart-logo');
var $CartIcon       = $('#cart-icon');
var $CartArrow      = $('#ArrowUp');
var $CartCount      = $CartIcon.find('.cart-count');
var $Checkout       = $('#Checkout-btn');
var $ArrowLeft      = $('#ArrowLeft');
var $BuyBtn         = $('#BuyNow');

// const variable
const e     = 'click';

const w     = 'width';      // CSS width
const l     = 'left';       // CSS left
const r     = 'right';      // CSS right
const b     = 'bottom';     // CSS bottom
const c     = 'color';      // CSS color
const d     = 'display';    // CSS display
const h     = 'height';     // CSS height
const t     = 'top';        // CSS top
const z     = 'z-index';    // CSS z-index
const op    = 'opacity';    // CSS opacity
const tf    = 'transform';  // CSS transfomr
const ts    = 'transition'; // CSS transition
const po    = 'position';   // CSS position
const ani   = 'animation';  // CSS animate

// Sweet alert width
const swalw = 300;
const swal_info_c = '#3FC3EE';

var cart_count = 0;
var cart_item_template = 
    `<div class="item-row">
        <div class="delete-btn">
          <i class="fas fa-trash-alt"></i>
        </div><img src="PRODUCTIMAGE" alt="PRODUCTNAME"/>
        <div class="product">PRODUCTNAME</div>
        <div class="counter">
          <i class="fas fa-plus"></i>
          <span class="quantity">QUANTITY</span>
          <i class="fas fa-minus"></i>
        </div>
        <div class="price">PRODUCTPRICE</div>
      </div>`;
var cart_logo = '<i id="Cart-logo" class="fas fa-shopping-cart"></i>';

// Cart Data Object
var CartObject = {
  'AppleId':    '',
  'Name':       '',
  'CardNumber': '',
  'CardExpDt':  '',
  'CardCVV':    '',
  'ShoppingList': []
};
var Shop_Lst = CartObject.ShoppingList;

// **********************************************
// Function 
// **********************************************
// <summary> Switch Product Page </summary>
var switchCatalog = function () {
  var cata = $(this).attr('id');
  var left = 0;
  
  switch(cata) {
    case 'iPad':
      break;
    case 'iPhone':
      left = -100;
      break;
    default:
      left = -200;
      break;
  }
  
  $Products.css(l, `${left}%`);
  $Phone.find('.filter > .btn').not(this).removeClass('active');
  $(this).addClass('active');
};

// <summary> Like Product </summmary>
var like = function() {  
  var $this = $(this);
  $this.toggleClass('far');
  $this.toggleClass('fas');
  $this.hasClass('far') ? 
    $this.css(c, 'red') :
    $this.css(c, '');
  
  return false;
};

// <summary> Add product to Shoppiing cart </summary>
var plus = function() {
  addCart();
};

// <summary> Add product to Shopping cart </summary>
var addCart = function() {
  if($(this).hasClass('card')) {
    // Get product card object 
    var $Product  = $(this);
    var $Img      = $Product.find('img');
    var $ImgClone = $Img.clone();
    
    var Imgw      = $Img.width();
    var Imgh      = $Img.height();
    
    // Add Cart Effect 
    $ImgClone.css({
      opacity:    '.6',
      position:   'absolute',
      left:       '50%',
      top:        '25%',
      transform:  'translate(-50%, 0%)',
      height:     `${Imgh}px`,
      width:      `${Imgw}px`,
      transition: 'all .2s',
      zIndex:     '100',
      boxShadow:  '0 0 4px 2px rgba(0, 0, 0, .4)'
    }).appendTo($Product);
    
    var movel = parseInt($Phone.css(w).replace('px', '')) - 
                        $Product.position().left -
                        $Img.position().left - 16
    var movet = parseInt($Phone.css(h).replace('px', '')) - 
                        $Products.position().top - 
                        $Product.position().top
    $ImgClone.animate({
      top:    '10%',
      left:   `${$ImgClone.css(l) + 10}px`,
      width:  `${Imgw * 0.5}px`,
      height: `${Imgh * 0.5}px`,
      borderRadius: '50%'
    }, 500)
    .animate({
      top:  movet,
      left: movel
    }, 500);
    
    $CartIcon.css(ani, 'shake linear 1s .5s 1');
    
    setTimeout(()=>{
      $CartIcon.css(ani, '');
      $ImgClone.remove();
      
    }, 2000)
    
    // Findout product info
    var img     = $Product.find('img').attr('src');
    var product = $Product.find('.product').text();
    var price   = parseInt($Product.find('.price')
                           .text().replace('$', ''));
    // 
    var idx = findProduct(product, price);
    if(idx == -1) {
      Shop_Lst.push({
        'Image':    img,
        'Product':  product,
        'Price':    price,
        'Quantity': 1
      });
    } else {
      var quantity = Shop_Lst[idx].Quantity;
      quantity++;
      Shop_Lst[idx].Quantity = quantity;
    }

    buildProducts();
  }
  
  $Catapage.css(h, '92%');
  $Catapage.css(tf, 'translateY(-1rem)');
  
  cart_count = CartObject.ShoppingList.length;
  $CartCount.text(cart_count);
  
  showLogo();
};

var findProduct = (product, price) =>
  CartObject.ShoppingList.findIndex(
    i => i.Product == product && i.Price == price);

var buildProducts = function() {
  // Get Cart contaienr object 
  var $CartList = $ShoppingCart.find('.container');
  // Claer Cart container content
  $CartList.empty();
  $CartList.append(cart_logo);
  
  $CartLogo = $('#Cart-logo')
  cart_count = Shop_Lst.length;
  // Rebuild Cart container content
  $.each(Shop_Lst, function(index, item) {
    var temp = cart_item_template
      .replace('PRODUCTIMAGE', item.Image)
      .replaceAll('PRODUCTNAME', item.Product)
      .replace('QUANTITY', item.Quantity)
      .replace('PRODUCTPRICE', `$${item.Price}`);
    
    $CartList.append(temp);
  });
  
  var $DeleteBtn= $ShoppingCart.find('i.fa-trash-alt');
  var $CartImg  = $ShoppingCart.find('img');
  var $Counter  = $ShoppingCart.find('span.quantity');
  var $CntPlus  = $ShoppingCart.find('i.fa-plus');
  var $CntMinus = $ShoppingCart.find('i.fa-minus');
  
  // Binding Click event 
  $DeleteBtn.on(e, deleteProduct);
  $CartImg.on(e, showDelete);
  $CntPlus.on(e, counterPlus);
  $CntMinus.on(e, counterMinus);
  $Counter.on(e, modifyCount);
};

// <summary> Go to Shopping cart </summary>
var goCart = function() {
  var src = $(this).attr('id');
  
  if(src == 'ArrowLeft') 
      $Cart.css(l, '');
  else {
    $Catapage.css(b, '80%');
    $Cart.css(b, '80%');

    $CartCount.css(op, '0');
    $CartCount.css(d, 'none');

    $CartArrow.css(op, '1');
  }
  
  return false;
};

// <summmary> Go to Shopping </summary>
var goShopping = function() {
  var src = $(this).attr('id');
  
  if(src == 'ArrowUp') {
    $Catapage.css(b, '');
    $Cart.css(b, '');
  }
  
  $Catapage.css(h, '');
  $Catapage.css(tf, '');
  setTimeout(function() {
    $CartCount.css(op, '');
    $CartCount.css(d, '');
  }, 500);
  $CartArrow.css(op, '');
  
  return false;
};

// <summary> Show Delele button </summary>
var showDelete = function() {
  var $itemRow = $(this).parent();
  $itemRow.toggleClass('show-delete');
  $itemRow.hasClass('show-delete') ?
    $itemRow.css(l, '20%') :
    $itemRow.css(l, '');
};

// <summary> Delete cart product </sumamry>
var deleteProduct = function() {
  var $Item   = $(this).parent().parent();
  var product = $Item.find('.product').text();
  
  Swal.fire({
    icon: 'warning',
    title: 'Are you sure',
    text: `Delete ${product}？`,
    width: swalw,
    confirmButtonText: 'Delete',
    confirmButtonColor: '#f00',
    showCancelButton: true
  }).then((result) => {
    if(result.isConfirmed) {
      var price = parseInt($Item.find('.price')
                           .text().replace('$', ''));
      var idx   = findProduct(product, price);
      Shop_Lst.splice(idx, 1);
      
      buildProducts();
      showLogo();
      
      Swal.fire('Deleted!', '', 'success');
    } else
      Swal.fire('Cancelled!', '', 'info');
  });
};

// <summary> Add product quantity </summary>
var counterPlus = function() {
  var $counter  = $(this).parent();
  var $count    = $(this).next();
  var count     = parseInt($count.text())
  
  if(count < 999)
    count++;
  updateQuantity($counter, count);
  
  $count.text(count);
};

// <summary> Minus product quantity </summary>
var counterMinus = function() {
  var $counter  = $(this).parent();
  var $count    = $(this).prev();
  var count     = parseInt($count.text());
  
  if(count > 1)
    count--;
  updateQuantity($counter, count);
  
  $count.text(count);
};

// <summary> Modify product qunatity </summary>
var modifyCount = function() {
  var $this     = $(this);
  var $counter  = $this.parent();
  var count     = $this.text();
  var product   = $counter.prev().text();
  
  Swal.fire({
    width: 300,
    icon: 'info',
    title: product,
    input: 'text',
    inputValue: count,
    showCancelButton: true,
    inputValidator: (value) => {
      if(value < 1000 && value > 0) {
        $this.text(value); 
        updateQuantity($counter, parseInt(value));
      }
      else
        return '1 < quantity < 1000';
    }
  });
};

// <summary> Update product quantity data </summary>
var updateQuantity = function($counter, quantity) {
  var product = $counter.prev().text();
  var price   = parseInt($counter.next()
                         .text().replace('$', ''));
  var idx     = findProduct(product, price);
  
  Shop_Lst[idx].Quantity = idx > -1 ? 
    quantity : Shop_Lst[idx].Quantity;
};

// <summary> Go Credit Card page </summary>
var goCredit = function() {
  var title_template 
    = `<span style='color: ${swal_info_c}'; font-weight-bold'>Bill</span>`;
  var bill_template = 
      `<ul id='Bill'>DETAIL</ul>`;
  var detail_template = 
      `<li>
        <span class='num'>NUMBER</span>
        <span class='product'>PRODUCTNAME</span>
        <span class='cal'>CALCULATE</span>
        <span class='sublabel'>Subtotal：</span>
        <span class='subtotal'>$SUBTOTAL</span>
      </li>`;
  var total_template = 
      `<li class='total'>Total：
        <span>TOTALAMOUNT</span>
      </li>`;
  
  var bill_html   = '';
  var detail_html = '';
  var total       = 0;
  // Generate bill
  $.each(Shop_Lst, function(index, item) {
    detail_html += 
      detail_template
        .replace('NUMBER', index+1)
        .replace('PRODUCTNAME', item.Product)
        .replace('CALCULATE', `$${item.Price} × ${item.Quantity}`)
        .replace('SUBTOTAL', item.Quantity * item.Price);
    total += item.Quantity * item.Price;
  });
  
  detail_html += total_template.replace(
    'TOTALAMOUNT', `$${total}`);
  bill_html = bill_template.replace(
    'DETAIL', detail_html);
  
  Swal.fire({
    title: title_template,
    icon: 'info',
    html: bill_html,
    width: swalw,
    cancelButtonText: 'Cancel',
    showCancelButton: true
  }).then((result) => {
    if(result.isConfirmed)
      $Cart.css(l, '-100%');
  });
};

// <summary> Checkout </summary>
var checkOut = function() {
  const patternName   = /^[A-Za-z ]+$/i;
  const patternNumber = /^[0-9]{16}$/;
  const patternDate   = /^[0-9]{2}\/[0-9]{4}$/;
  const patternCVV    = /^[0-9]{3}$/;
  
  var $CardName       = $('#CardName');
  var $CardNumber     = $('#CardNumber');
  var $ExpDt          = $('#ExpDt');
  var $CVV            = $('#CVV');
  
  var name            = $CardName.val();
  var number          = $CardNumber.val();
  var expdt           = $ExpDt.val();
  var cvv             = $CVV.val();
  var errStr          = '';
  
  if(patternName.test(name) && 
     patternNumber.test(number) && 
     patternDate.test(expdt) && 
     patternCVV.test(cvv)) {
    Swal.fire({
      title: 'Loading......',
      timer: 2000,
      width: swalw,
      didOpen: () => {
        Swal.showLoading();
      }
    }).then((result) => {
      if(result.dismiss === Swal.DismissReason.timer) {
        Swal.fire('Order completed', '', 'success')
          .then((result) => {
              history.go(0);
          });
      }
    });
  } else {
    switch(errStr == '') {
      case !patternName.test(name):
        errStr = 'Name invalid ！';
        $CardName.focus();
        break;
      case !patternNumber.test(number):
        errStr = 'CardNumber invalid ！';
        $CardNumber.focus();
        break;
      case !patternDate.test(expdt):
        errStr = 'Expiration Date invalid ！';
        $ExpDt.focus();
        break;
      case !patternCVV.test(cvv):
        errStr = 'CVV invalid ！';
        $CVV.focus();
        break;
    }
    
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: errStr
    });
  }
};

var showLogo = function() {
  if(cart_count == 0) {
    $Checkout.css(d, 'none');
    $CartLogo.css(d, 'block');
  } else {
    $CartLogo.css(d, 'none')
    $Checkout.css(d, '');
  }
}
// <summary> Pageload event </summary>
var pageLoad = function() {
  var reference_html =
      `<ul style='list-style: none; font-weight: bold; text-align: left;'>
        <li style='margin-bottom: .5rem;'>
          Product Information(image、price...)：
          <a href='https://www.apple.com/tw/' style='text-decoration: none' target='_blank'>Apple TW</a>
        </li>
        <li style='margin-bottom: .5rem;'>
          UI Design：
          <a href='https://dribbble.com/tags/shopping_cart' style='text-decoration: none'; target:'_blank'>Dribbble Shopping Cart</a>
        </li>
      </ul>
      `;
  var guideline_html = 
    	`<div id="guideline">
    		<div class='wrap'>
    			<div class='row'>
	    			<i id='Prev' class='fas fa-angle-left'></i>
  					<i id='Next' class='fas fa-angle-right'></i>
  				</div>
		    	<div class="item">
		    		<h1 class='subtitle'>Catalog</h1>
		    		<img src='https://i.imgur.com/ZDFSFr0.gif'/>
	    		</div>
		    	<div class="item">
		    		<h1 class='subtitle'>Add Product</h1>
		    		<p>Click plus icon, Product card</p>
		    		<img src='https://i.imgur.com/L5Gvh91.gif'/>
	    		</div>
		    	<div class="item">
		    		<h1 class='subtitle'>Go to Cart</h1>
		    		<p>Click Cart title / Quantitry<p>
		    		<img src='https://i.imgur.com/paDz0e6.gif'/>
	    		</div>
		    	<div class="item">
		    		<h1 class='subtitle'>Modify Product Quantity</h1>
		    		<p>Click Plus, Minus, Quantiry</p>
		    		<span>1 < Quantiry < 1000<span>
		    		<img src='https://i.imgur.com/hnDvqbN.gif'/>
	    		</div>
		    	<div class="item">
		    		<h1 class='subtitle'>Delete Product</h1>
		    		<p>Click product Image then click delete button</p>
		    		<img src='https://i.imgur.com/hyw8DHr.gif'/>
	    		</div>
	    		<div class="item">
		    		<h1 class='subtitle'>Checkout</h1>
		    		<p>Click Checkout button => Buy Now</p>
		    		<img src='https://i.imgur.com/PMaW0E0.gif'/>
	    		</div>
		    </div>
			</div>`;
  
  var wl = 0;
  Swal.fire({
    title: `<h1 style='color: ${swal_info_c}'>Reference</h1>`,
    icon: 'info',
    html: reference_html,
    showCancelButton: true,
    confirmButtonText: 'See Guideline'
  }).then((result) => {
	  	if(result.isConfirmed) {
	  		title = 'Guideline';

	  		Swal.fire({
	  			title: `<h1 style='color: ${swal_info_c}'>Guideline</h1>`,
	  			icon: 'info',
	  			width: swalw,
	  			html: guideline_html
	  		});

	  		var $Guideline 	= $('#guideline');
				var $Wrap				= $Guideline.find('.wrap');
				var $Row 				= $Guideline.find('.row');
				var $Next 			=	$('#Next');
				var $Prev 			= $('#Prev');

				$Next.on(e, function () {
					if(wl > -500) wl -= 100;
					$Wrap.css(l, `${wl}%`);
					$Row.css(l, `${wl * -1}%`);
				});

				$Prev.on(e, function () {
					if (wl < 0) wl += 100;
					$Wrap.css(l, `${wl}%`);
					$Row.css(l, `${wl * -1}%`);
				});
	  	}
	  });
};

// **********************************************
// Event
// **********************************************
// Click Events
$search.on(e, goShopping);
$iPad.on(e, switchCatalog);
$iPhone.on(e, switchCatalog);
$iWatch.on(e, switchCatalog);
$card.on(e, addCart);
$heart.on(e, like);
$plus.on(e, addCart);
$Cart.on(e, goCart);
$CartArrow.on(e, goShopping);
$Checkout.on(e, goCredit);
$ArrowLeft.on(e, goCart);
$BuyBtn.on(e, checkOut);
showLogo();
// pageLoad();