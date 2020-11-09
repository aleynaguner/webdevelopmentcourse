class Home {
  //default type is public
  _roomNumber: number;
  _windowNumber: number;
  _floor: number;
  constructor(roomNumber: number, windowNumber: number, floor: number) {
    this._roomNumber = roomNumber;
    this._windowNumber = windowNumber;
    this._floor = floor;
  }
  eat() {
    console.log(`Eat food on floor ${this._floor} !!! `);
  }
}

let home = new Home(3, 4, 5);
console.log(home);
home._floor = 8;

console.log(home);
home.eat();

class Person {
  save() {
    console.log("Person is saved !!!");
  }
  private _name: string;

  //encapsulation
  get name(): string {
    return this._name;
  }

  set name(setName: string) {
    this._name = setName;
  }
  protected surname: string;
}

class Customer extends Person {
  toSell() {
    console.log("Sold !!!");
  }
}

class Staff extends Person {
  payment() {
    console.log("Salary paid !!!");
  }
}

let customer = new Customer();
customer.save();
customer.toSell();

let staff = new Staff();
staff.save();
staff.payment();

let person = new Person();
person.name = "Aleyna";
console.log(person.name);
person.save();
