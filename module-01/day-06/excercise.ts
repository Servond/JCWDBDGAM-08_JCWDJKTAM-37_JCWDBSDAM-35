interface IProduct {
  name: string;
  price: number;
}

interface ICart {
  product: IProduct;
  qty: number;
}

interface ITransaction {
  addToCart: (product: IProduct, qty: number) => void;
  showTotal: () => number;
  checkout: () => {
    cart: { name: string; price: number; qty: number; subtotal: number }[];
    total: number;
  };
}

class Product implements IProduct {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

class Transaction implements ITransaction {
  #cart: ICart[] = [];
  #total: number = 0;

  addToCart(product: IProduct, qty: number) {
    this.#cart.push({ product, qty });
    this.#total += product.price * qty;
  }

  showTotal() {
    return this.#total;
  }

  checkout() {
    const products = this.#cart.map((item) => ({
      name: item.product.name,
      price: item.product.price,
      qty: item.qty,
      subtotal: item.product.price * item.qty,
    }));

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
trx.addToCart(mouse, 10);
trx.addToCart(keyboard, 19);
console.log(trx.checkout());
