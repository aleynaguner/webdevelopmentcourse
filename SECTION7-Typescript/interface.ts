interface Product {
  id: number;
  name: string;
  unitPrice: number;
}

class Product2 {
    id: number;
    name: string;
    unitPrice: number;
}

function save(product: Product) {
  console.log(product.name + " is saved.");
}

function save2(product: Product2) {
    console.log(product.name + " is saved.");
  }

save({ id: 1, name: "Apple", unitPrice: 2.5});

let fruit = new Product2();
fruit.name= "Banana"

save2(fruit)

interface PersonService {
    save();
  }

class CustomerService implements PersonService{
    save(){
        
    }
}
  