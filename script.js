const cartIcon = document.querySelector('.cart-icon');
const cartScreen = document.querySelector('.cart-inventory');

// reveals and hides cart inventory screen when cart icon is pressed
function revealCart() {
    if(cartScreen.classList.contains('hidden')) {
        cartScreen.classList.remove('hidden');
    }
    else {
        cartScreen.classList.add('hidden');
    }
}

cartIcon.addEventListener('click', revealCart);

// increments or decrements the amount of product to be added to the cart with the plus and minus buttons

const minusBtn = document.querySelector('.minus-btn');
const plusBtn = document.querySelector('.plus-btn');
const productAmount = document.querySelector('.product-amount');

minusBtn.addEventListener('click', function() {
    if(productAmount.innerText == 0) {
        productAmount.innerText = 0;
    }
    else if (productAmount.innerText > 0) {
        productAmount.innerText --;
    }
});


plusBtn.addEventListener('click', function(){
    if(productAmount.innerText == 99) {
        productAmount.innerText = 99;
    }
    else {
        productAmount.innerText ++;
    }
});

// adds number of product selected to the cart when "add to cart" button is pressed. Number of product selected will be representded on cart icon

const cartBtn = document.querySelector('.cart-btn');
const cartCounter = document.querySelector('.cart-counter');
const emptyCart = document.querySelector('.cart-display-empty');
const fullCart = document.querySelector('.cart-full-container');
const cartQuantity = document.querySelector('.cart-item-amount');
const cartTotal = document.querySelector('.cart-total-price');


cartBtn.addEventListener('click',function() {
    if(productAmount.innerText == 0) {
        cartCounter.classList.add('hidden');
    }
    else if(productAmount.innerText > 0) {
        cartCounter.innerText = productAmount.innerText;
        cartCounter.classList.remove('hidden');
        emptyCart.classList.add('hidden');
        fullCart.classList.remove('hidden');
        cartQuantity.innerText = cartCounter.innerText;
        cartTotal.innerText = '  $' + 125.00 * cartQuantity.innerText + ".00";
    }
});