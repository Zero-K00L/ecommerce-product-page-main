const cartIconMobile = document.querySelector('.cart-icon');
const cartIconDesktop = document.querySelector('.cart-icon-grey');
const cartScreen = document.querySelector('.cart-inventory');

// reveals and hides cart inventory screen when cart icon is pressed
function revealCart() {
    if(cartScreen.classList.contains('hidden')) {
        cartScreen.classList.remove('hidden');
        document.addEventListener('click', hideCart);
    }
    else {
        cartScreen.classList.add('hidden');
        document.removeEventListener('click', hideCart);
    }
}

function hideCart(event) {
    if (!cartScreen.contains(event.target) && event.target !== cartIconMobile && event.target !== cartIconDesktop && event.target !== cartBtn && event.target !== minusBtnContainer && event.target !== plusBtnContainer && event.target !== minusBtn && event.target !== plusBtn) {
        cartScreen.classList.add('hidden');
        document.removeEventListener('click', hideCart);
    }
}


cartIconMobile.addEventListener('click', revealCart);
cartIconDesktop.addEventListener('click', revealCart);
/* cartIconMobile.addEventListener('mouseover', revealCart);
cartIconDesktop.addEventListener('mouseover', revealCart);
cartIconMobile.addEventListener('mouseout', revealCart);
cartIconDesktop.addEventListener('mouseout', revealCart); */

// increments or decrements the amount of product to be added to the cart with the plus and minus buttons

const minusBtnContainer = document.querySelector('.minus-btn-container');
const plusBtnContainer = document.querySelector('.plus-btn-container');
const minusBtn = document.querySelector('.minus-btn');
const plusBtn = document.querySelector('.plus-btn');
const productAmount = document.querySelector('.product-amount');

minusBtnContainer.addEventListener('click', function() {
    if(productAmount.innerText == 0) {
        productAmount.innerText = 0;
    }
    else if (productAmount.innerText > 0) {
        productAmount.innerText --;
    }
});


plusBtnContainer.addEventListener('click', function(){
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
        cartTotal.innerText = ' ' + ' $' + 125.00 * cartQuantity.innerText + ".00";
    }
});

// clears current cart inventory when trash can icon is pressed

const trashIcon = document.querySelector('.trash-icon');

trashIcon.addEventListener('click', function(){
    event.stopPropagation();
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


// Hamburger Menu

const hamburgerOpen = document.querySelector('.hamburger-menu-btn');
const hamburgerClose = document.querySelector('.hamburger-close');
const hamburgerOverlay1 = document.querySelector('.hamburger-overlay-1');
const hamburgerOverlay2 = document.querySelector('.hamburger-overlay-2');
const fadeElems = document.querySelectorAll('.has-fade');
const fadeElems2 = document.querySelectorAll('.has-fade2');
// opens hamburger menu
hamburgerOpen.addEventListener('click', function() {
    hamburgerOverlay1.classList.remove('hidden');
    hamburgerOverlay2.classList.remove('hidden');
    fadeElems.forEach(function(element){
        element.classList.remove('fade-out');
        element.classList.add('fade-in');
    });
    fadeElems2.forEach(function(element){
        element.classList.remove('fade-out2');
        element.classList.add('fade-in2');
    });
});


// closes hamburger menu
hamburgerClose.addEventListener('click', function(){
    hamburgerOverlay1.classList.add('hidden');
    hamburgerOverlay2.classList.add('hidden');
});

 

// For Desktop, allows users to click on a thumbnail of the product image and have main image updated with same photo has thumbnail

const thumbnails = document.querySelectorAll('.product-thumbnail');
const imageContainer = document.querySelector('.image-container');

function selectThumbnail(event) {
  // Remove border and opacity from all thumbnails
  thumbnails.forEach(thumbnail => {
    thumbnail.style.boxShadow = 'none';
    thumbnail.style.opacity = '1';
  });

  // Add border and reduce opacity for the selected thumbnail
  const selectedThumbnail = event.target;
  selectedThumbnail.style.boxShadow = '0 0 0 3px orange';
  selectedThumbnail.style.opacity = '0.4';

  // Change the background image of the image container
  const thumbnailIndex = Array.from(thumbnails).indexOf(selectedThumbnail) + 1;
  const imageUrl = `images/image-product-${thumbnailIndex}.jpg`;
  imageContainer.style.backgroundImage = `url(${imageUrl})`;
}

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', selectThumbnail);
});

// Add border to the first thumbnail on page load
thumbnails[0].style.boxShadow = '0 0 0 3px orange';
thumbnails[0].style.opacity = '0.4';

// Set the initial background image of the image container
imageContainer.style.backgroundImage = `url(images/image-product-1.jpg)`;



/* // Lightbox

const lightboxThumbnails = document.querySelectorAll('.lightbox-thumbnail');
const lightboxImage = document.querySelector('.lightbox-image');

function selectLightboxThumbnail(event) {
  // Remove border and opacity from all lightbox thumbnails
  lightboxThumbnails.forEach(thumbnail => {
    thumbnail.style.outline = 'none';
    thumbnail.style.opacity = '1';
  });

  // Add border and reduce opacity for the selected lightbox thumbnail
  const selectedThumbnail = event.target;
  selectedThumbnail.style.outline = '3px solid orange';
  selectedThumbnail.style.opacity = '0.4';

  // Change the source of the lightbox image
  const thumbnailIndex = Array.from(lightboxThumbnails).indexOf(selectedThumbnail) + 1;
  const imageUrl = `images/image-product-${thumbnailIndex}.jpg`;
  lightboxImage.style.backgroundImage = `url(${imageUrl})`;
}

lightboxThumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', selectLightboxThumbnail);
});

// Add border to the first lightbox thumbnail on page load
lightboxThumbnails[0].style.outline = '3px solid orange';
lightboxThumbnails[0].style.opacity = '0.4';

// Set the initial background image of the lightbox image
lightboxImage.style.backgroundImage = `url(images/image-product-1.jpg)`;


// Closes Lightbox

const lightbox = document.querySelector('.lightbox');
const lightboxClose = document.querySelector('.lightbox-close');
const cartInventory = document.querySelector('.cart-inventory');

function closeLightbox() {
  lightbox.classList.add('hidden');
}

lightboxClose.addEventListener('click', closeLightbox);

// Opens Lightbox

imageContainer.addEventListener('click', function(event) {
    if (!event.target.closest('.cart-inventory')) {
      lightbox.classList.remove('hidden');
    }
});
 */

const lightboxThumbnails = document.querySelectorAll('.lightbox-thumbnail');
const lightboxImage = document.querySelector('.lightbox-image');
const prevArrow = document.querySelector('.lightbox-arrow-previous-container');
const nextArrow = document.querySelector('.lightbox-arrow-next-container');
let currentThumbnailIndex = 0;

function selectLightboxThumbnail(index) {
  // Remove border and opacity from all lightbox thumbnails
  lightboxThumbnails.forEach(thumbnail => {
    thumbnail.style.outline = 'none';
    thumbnail.style.opacity = '1';
  });

  // Add border and reduce opacity for the selected lightbox thumbnail
  const selectedThumbnail = lightboxThumbnails[index];
  selectedThumbnail.style.outline = '3px solid orange';
  selectedThumbnail.style.opacity = '0.4';

  // Change the source of the lightbox image
  const imageUrl = `images/image-product-${index + 1}.jpg`;
  lightboxImage.style.backgroundImage = `url(${imageUrl})`;
  currentThumbnailIndex = index;
}

function showNextImage() {
  currentThumbnailIndex++;
  if (currentThumbnailIndex >= lightboxThumbnails.length) {
    currentThumbnailIndex = 0;
  }
  selectLightboxThumbnail(currentThumbnailIndex);
}

function showPrevImage() {
  currentThumbnailIndex--;
  if (currentThumbnailIndex < 0) {
    currentThumbnailIndex = lightboxThumbnails.length - 1;
  }
  selectLightboxThumbnail(currentThumbnailIndex);
}

lightboxThumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    selectLightboxThumbnail(index);
  });
});

prevArrow.addEventListener('click', showPrevImage);
nextArrow.addEventListener('click', showNextImage);

// Add border to the first lightbox thumbnail on page load
selectLightboxThumbnail(0);

// Closes Lightbox

const lightbox = document.querySelector('.lightbox');
const lightboxClose = document.querySelector('.lightbox-close');
const cartInventory = document.querySelector('.cart-inventory');

function closeLightbox() {
  lightbox.classList.add('hidden');
}

lightboxClose.addEventListener('click', closeLightbox);

// Opens Lightbox

imageContainer.addEventListener('click', function(event) {
    if (window.matchMedia("(min-width: 992px)").matches && !event.target.closest('.cart-inventory')) {
      lightbox.classList.remove('hidden');
    }
});


