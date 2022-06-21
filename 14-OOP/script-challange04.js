'use strict';

// coding challange #2
console.log('----- Challange #3 ---------');

// 1.
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed} km/h.`);
    return this;
  }
  break() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed} km/h.`);
    return this;
  }

  get speedUS() {
    return `Speed US: ${this.make} car speed ${this.speed} km/h = ${this.speed / 1.6} mi/h`;
  }

  set speedUS(mph) {
    this.speed = mph * 1.6;
    console.log(`${this.make} car speed ${this.speed} km/h = ${mph} mi/h`);
  }
}

// 1.
class EVCl extends CarCl {
  // private fields
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    //
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    console.log(`${this.make} was charged to ${this.#charge}%`);
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge -= 7;

    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
    return this;
  }
}

// we're overriting the accelerate method from the Car class
// basically this new method is what javaScript will implement since it exists in the EV object prototype, even if the same method exist on the Car prototype
// Polymorphism

const tesla = new EVCl('Tesla', 150, 100);
const rivian = new EVCl('Rivian', 120, 23);

tesla.accelerate().accelerate().break().chargeBattery(98).chargeBattery(100).accelerate();

rivian.accelerate().accelerate().break().chargeBattery(70).chargeBattery(90).accelerate();
console.log(rivian.speedUS);
console.log(tesla);
console.log(rivian);
