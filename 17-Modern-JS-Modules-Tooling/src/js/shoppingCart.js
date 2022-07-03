// Exporting module

console.log('Exporting module');

const shipping = 10;
const cart = [];

// Blocking code

/*

console.log('Start fetching users');
await fetch('https://jsonplaceholder.typicode.com/users');
console.log('Finish fetching users');
*/

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQty = 23;

export { totalPrice, totalQty as qty, cart };

export default function () {
  let count = 0;
  return num => {
    count += num;
    console.log(count);
    return count;
  };
}
