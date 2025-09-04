class Student {
  name;
  email;
  age;
  score;

  constructor(name, email, age, score) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.score = score;
  }
}

function calcStudentData(students) {
  console.log(students);
  const scores = []; // [50, 80, 10, 60]
  const ages = []; // [20, 22, 29, 32]

  for (const student of students) {
    /// 3 looping

    // looping 1
    // student =  Student { name: 'Budi', email: 'budi@gmail.com', age: 22, score: 80 },

    // looping 2
    // student = Student { name: 'Santo', email: 'santo@gmail.com', age: 29, score: 69 },

    // looping 3
    // student = Student { name: 'Sara', email: 'sara@gmail.com', age: 30, score: 90 }
    scores.push(student.score);
    ages.push(student.age);
  }

  function calcData(arr) {
    const highest = Math.max(...arr);
    const lowest = Math.min(...arr);
    const average = arr.reduce((a, b) => a + b) / arr.length;

    return { highest, lowest, average };
  }

  return {
    score: calcData(scores),
    age: calcData(ages),
  };
}

console.log(
  calcStudentData([
    new Student("Budi", "budi@gmail.com", 22, 80),
    new Student("Santo", "santo@gmail.com", 29, 69),
    new Student("Sara", "sara@gmail.com", 30, 90),
  ])
);

function pertambah(a, b) {}

pertambah(5, 6);

class Product {
  name;
  price;

  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Transaction {
  #cart = [];
  #total = 0;

  addToCart(product, qty) {
    this.#cart.push({ product, qty });
    this.#total += product.price * qty;
  }

  showTotal() {
    return this.#total;
  }

  checkout() {
    // const products = this.#cart.map((item) => ({
    //   product: item.product.name,
    //   price: item.product.price,
    //   qty: item.qty,
    //   subtotal: item.product.price * item.qty,
    // }));
    const products = [];

    for (const item of this.#cart) {
      products.push({
        product: item.product.name,
        price: item.product.price,
        qty: item.qty,
        subtotal: item.product.price * item.qty,
      });
    }

    const result = {
      cart: products,
      total: this.#total,
    };

    this.#cart = [];
    this.#total = 0;

    return result;
  }
}

const mouse = new Product("Mouse", 5000);
const keyboard = new Product("Keyboard", 12000);

const trx = new Transaction();
trx.addToCart(mouse, 5);
console.log(mouse);
trx.addToCart(keyboard, 10);
console.log(trx.showTotal());
console.log(trx.checkout());

trx.addToCart(mouse, 1);
trx.addToCart(keyboard, 1);
console.log(trx.showTotal());
