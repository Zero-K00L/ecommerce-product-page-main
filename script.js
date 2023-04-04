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

