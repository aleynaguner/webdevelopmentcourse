function value(x: number): number {
  return x;
}

function value2(x: string): string {
  return x;
}

let number = value(10);
console.log(number);

let string = value2("İstanbul");
console.log(string);

function value3<T>(x: T): T {
  return x;
}

let number3 = value3<number>(2);
let string3 = value3<string>("Coimbra");

class GenericClass<T> {
  variable: T;
  func(parameter: T): T {
    console.log(parameter);
    return parameter;
  }
}

let strCls = new GenericClass<string>();

strCls.func("Barcelona");

let numCls = new GenericClass<number>();

numCls.func(53);
