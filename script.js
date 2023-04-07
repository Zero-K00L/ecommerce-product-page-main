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
        fullCart.classList.add('hidden');
        emptyCart.classList.remove('hidden');
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

// clears current cart inventory when trash can icon is pressed

const trashIcon = document.querySelector('.trash-icon');

trashIcon.addEventListener('click', function(){
    cartCounter.classList.add('hidden');
    fullCart.classList.add('hidden');
    emptyCart.classList.remove('hidden');
});


// allows mobile users to cycle through different pictures of sneaker products using the left and right arrow buttons

const arrowPrevious = document.querySelector('.arrow-previous-container');
const arrowNext = document.querySelector('.arrow-next-container');
const sneakerImage = document.querySelector('.image-container');
const imageArr = [
  'images/image-product-1.jpg',
  'images/image-product-2.jpg',
  'images/image-product-3.jpg',
  'images/image-product-4.jpg'
];
let currentImageIndex = 0;

// Set the initial image
sneakerImage.style.backgroundImage = `url(${imageArr[currentImageIndex]})`;

arrowPrevious.addEventListener('click', function() {
  // Decrement the current image index
  currentImageIndex--;

  // If the current index is less than 0, wrap around to the last image
  if (currentImageIndex < 0) {
    currentImageIndex = imageArr.length - 1;
  }

  // Set the new image
  sneakerImage.style.backgroundImage = `url(${imageArr[currentImageIndex]})`;
});

arrowNext.addEventListener('click', function() {
  // Increment the current image index
  currentImageIndex++;

  // If the current index is greater than or equal to the array length, wrap around to the first image
  if (currentImageIndex >= imageArr.length) {
    currentImageIndex = 0;
  }

  // Set the new image
  sneakerImage.style.backgroundImage = `url(${imageArr[currentImageIndex]})`;
});


