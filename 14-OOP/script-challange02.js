'use strict';

// coding challange #2
console.log('----- Challange #2 ---------');

// 1.
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  };

  break = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  };

  get speedUS() {
    return `${this.make} car speed ${this.speed} km/h = ${this.speed / 1.6} mi/h`;
  }

  set speedUS(mph) {
    this.speed = mph * 1.6;
    console.log(`${this.make} car speed ${this.speed} km/h = ${mph} mi/h`);
  }
}

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);
const ford = new Car('Ford', 120);

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

// using getter
console.log(ford.speedUS);
ford.accelerate();
// using setter
ford.speedUS = 80;
ford.break();
