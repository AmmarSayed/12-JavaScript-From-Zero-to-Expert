'use strict';

console.log('Hellooooo');
// coding challange #1

// 1.
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

// 2.
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

// 3.
Car.prototype.break = function () {
  this.speed -= 5;
  console.log(this.speed);
};

// 4.
const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

console.log(bmw.make);
console.log('speed', bmw.speed);
bmw.accelerate();
bmw.break();

console.log(mercedes.make);
console.log('speed', mercedes.speed);
mercedes.accelerate();
mercedes.accelerate();
mercedes.break();
mercedes.break();
