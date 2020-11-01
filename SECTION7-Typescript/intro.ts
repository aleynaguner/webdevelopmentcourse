function greater(name: string) {
  return "Merhaba " + name;
}

let message = greater("Aleyna Güner");

console.log(message);

message = "İstanbul";
console.log(message);

let num: number;

num = 10;
console.log(num);

num = 10.4;
console.log(num);

let isTrue: boolean;

isTrue = true;
console.log(isTrue);

isTrue = false;
console.log(isTrue);

let numbers: number[] = [1, 2, 3];
console.log(numbers);

let numbers2: Array<number> = [4, 5, 6];
console.log(numbers2);

let array: [number, string] = [53, "Rize"];
console.log(array[0]);
console.log(array[1]);

enum Color {
  Red = 1,
  Black,
  Blue,
}

let clr: Color = Color.Red;

let value: any = "İstanbul";
console.log(value);
value = 4;
console.log(value);
value = {};
console.log(value);

let value2: void = undefined;
console.log(value2);

function sayHi(): void {
  console.log("Hi !!!");
}

let callFunc = sayHi();


