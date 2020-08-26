//working with classes

class Staff {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  save() {
    console.log("Staff is saved. " + this.name);
  }
  //template literal
  delete() {
    console.log(`Staff is deleted. ${this.surname}`);
  }
}

//you need to take an instance
const staff = new Staff("Aleyna", "Güner");

staff.save();
staff.delete();
console.log(staff.name)
