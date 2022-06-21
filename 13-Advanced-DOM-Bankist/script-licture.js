'use strict';

///////////////////////////////////////
// 185. How the DOM Really Works
///////////////////////////////////////

///////////////////////////////////////
// 186. Selecting, Creating, and Deleting Elements
///////////////////////////////////////
/*

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');

console.log(allSections);

document.getElementById('section--1');

// returns an HTML collections / which will update automatically
// it updates it self if an element gets deleted later in the code
const buttons = document.getElementsByTagName('button');
console.log(buttons);

// returns an HTML collections / which will update automatically
// it updates it self if an element gets deleted later in the code
console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
// .insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookied for improved functionality and analytics';
message.innerHTML =
  "We use cookied for improved functionality and analytics <button class='btn btn--close-cookie'>Got it!</button>";

// a DOM element is unique, it cannot be in 2 places at the same time
// below is a demonistration.
// header.prepend(message); // adding the message to the begining
header.append(message); // moveing the same message element to the end

// in case we need to doublicate the emelent we simply should copy it
// header.prepend(message.cloneNode(true));

// header.before(message);
// header.after(message);

// Delete element
document.querySelector('.btn--close-cookie').addEventListener('click', function () {
  message.remove();
});

///////////////////////////////////////
// 187. Styles, Attributes and Classes
///////////////////////////////////////

// styles /inline style

message.style.backgroundColor = '#37383d';
message.style.width = '120%';
console.log(message.style.height); // works only with inline styles
console.log(message.style.backgroundColor);
console.log(message.style.color); // works only with inline styles

// to ge the actual style
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

console.log(message.style.height);

// CSS custom properties / changing the CSS variables
console.log(document.documentElement.style.setProperty('--color-primary', 'orange'));

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.className);
console.log(logo.alt);
console.log(logo.src); // the absolute path/link
console.log(logo.designer); // if we try to access a non standard attribute, it won't work
// alternative way
console.log(logo.getAttribute('designer'));

logo.alt = 'Beautiful minimalist logo';

logo.setAttribute('company', 'Bankist');

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('justClass');
logo.classList.remove('justClass');
logo.classList.toggle('justClass');
logo.classList.contains('justClass');

// Don't use the below as it will remove all the existing classes
// logo.className = 'just-new-class'

*/

///////////////////////////////////////
// 193. DOM Traversing
///////////////////////////////////////

/*

// going downwards: child
const h1 = document.querySelector('h1');
// gets the children no matter how deep it's inside the element
console.log(h1.querySelectorAll('.highlight'));

// gets elements and comments everything
console.log(h1.childNodes);
// gets elements
console.log(h1.children);

// changing style
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'red';

// Going upwards : parents
console.log(h1.parentNode);
console.log(h1.parentElement);

// Parent element but not direct parent
// gets the parent element no matter how up it's in the DOM
h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.parentElement.children);

[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = `scale(0.5)`;
});


*/
