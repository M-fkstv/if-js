const yearKey = Symbol("year"); // symbol

export default class Car {
  constructor({ make, model, year, color = "white", transmission = "auto" }) {
    this.make = make;
    this.model = model;
    this.year = year;
    // this[yearKey] = year; // symbol
    this.color = color;
    this.transmission = transmission;
  }

  get year() {
    // getter не можем менять
    return this[yearKey];
  }
  set year(value) {
    // setter  можем менять
    this[yearKey] = value;
  }

  toStr() {
    return `${this.make} ${this.model}`;
  }
  static getInfo() {
    return "Info message.";
  }
}
