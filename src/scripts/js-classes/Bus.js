import Car from "./Example.js";

export default class Bus extends Car {
  constructor({ seats = 9, ...props }) {
    super({ ...props });
    this.seats = seats;
  }

  seatsCountMessage() {
    console.log(`Seats: ${this.seats} `);
  }
}
console.log(navigator);
