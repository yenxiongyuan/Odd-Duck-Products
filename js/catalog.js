/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);

// On screen load, we call this method to put all of the product options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //DONE: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  for (let i in Product.allProducts) {
    // 1. Grab the window into the DOM (parent is selectElement)
    // 2. Creat the child element
    const optionElem = document.createElement('option');
    //3. Give element some content
    optionElem.textContent = Product.allProducts[i].name;
    // 4. Append child to parent
    selectElement.appendChild(optionElem);


  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // DONE: Prevent the page from reloading
  event.preventDefault();

  // console.log(event.target.items.value);
  let product = event.target.items.value;
  let quantity = parseInt(event.target.quantity.value);
  console.log(product, quantity);


  // Do all the things ...
  addSelectedItemToCart(product, quantity);
  // let addItemToCart = addSelectedItemToCart(product, quantity);

  // console.log(addItem);

  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// DONE: Add the selected item and quantity to the cart
function addSelectedItemToCart(item, quantity) {
  // DONE: suss out the item picked from the select list
  // DONE: get the quantity
  // DONE: using those, add one item to the Cart
  cart.addItem(item, quantity);
  console.log(item, quantity);
}

// DONE: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() { 
  let selectElem = document.getElementById('itemCount').textContent = cart.items.length;
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
