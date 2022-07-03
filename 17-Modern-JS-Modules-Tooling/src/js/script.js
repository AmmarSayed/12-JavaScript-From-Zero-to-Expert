//////// Importing module ////////

// import { addToCart, totalPrice as price, qty } from './shoppingCart.js';

// console.log('Importing module');

// addToCart('bread', 5);

// console.log(price, qty);
/*

import counter, * as ShoppingCart from './shoppingCart.js';
console.log('Importing module');

ShoppingCart.addToCart('bread', 5);

console.log(ShoppingCart.totalPrice, ShoppingCart.qty);

const count = counter();

count(2);
count(2);
count(6);

// const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
// const data = await res.json();
// console.log(data);

// console.log('Something');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');

  const data = await res.json();
  return { title: data.title, text: data.body };
};

const post = await getLastPost();
console.log(post);

*/

/////////////////////////////////
/// 274. The Module Pattern ///

/*

const ShoppingCart2 = (function () {
  const cart = [];
  const shoppingCart = 10;
  const totalPrice = 237;
  const totalQantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier!`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQantity,
  };
})();

ShoppingCart2.addToCart('Apples', 4);
ShoppingCart2.addToCart('Pizza', 2);

console.log(ShoppingCart2);
*/

/////////////////////////////////
/// 275. CommonJS Modules ///
// works only on serverside using nodejs
// Export

/*


exports.addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

// Import
const { addToCart } = require('./shoppingCart.js');

*/

//////////////////////////////////////////
// 276. A Brief Introduction to the Command Line
//////////////////////////////////////////

//////////////////////////////////////////
//277. Introduction to NPM
//////////////////////////////////////////

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es/cloneDeep';
import { cart, addToCart } from './shoppingCart';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 3 },
  ],
  user: {
    loggedIn: true,
  },
};

const stateClone = Object.assign({}, state);
const stateCloneDeep = cloneDeep(state);

state.user.loggedIn = false;

console.log(stateClone);

console.log(stateCloneDeep);
console.log('Hello');
console.log('Hellos');
console.log('Hellosss');

addToCart('bread', 4);
addToCart('pizza', 5);
addToCart('apple', 1);

//////////////////////////////
// 279. Configuring Babel and Polyfilling
//////////////////////////

console.log('ammar' ?? null);

console.log(cart.find(el => el.quantity >= 2));

//////////////////////////////
// 280. Review: Writing Clean and Modern JavaScript
//////////////////////////
