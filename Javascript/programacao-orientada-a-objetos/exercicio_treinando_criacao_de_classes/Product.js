class Product {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.inStock = 0;
  }

  addToStock(quantity) {
    this.inStock += quantity;
  }

  calculateDiscount(discount) {
    return this.price * ((100 - discount) / 100);
  }
}

const product1 = new Product("product1", "teste", 80);

console.log(product1);

product1.addToStock(99);
const discount = product1.calculateDiscount(10);

console.log(product1);
console.log(`Preço com desconto: ${discount}`);
