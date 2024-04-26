import Car from './10-car.js';

export default class EVcar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    const CarV2 = super.constructor[Symbol.species];

    return new CarV2();
  }
}
