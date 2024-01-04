class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const symbolKey = Symbol();
    const clonedCar = new Car();
    Object.getOwnPropertyNames(this).forEach((key) => {
      if (key !== symbolKey) {
        clonedCar[key] = this[key];
      }
    });
    return clonedCar;
  }
}

export default Car;
