export class Product {
  constructor({ id, sku, description, category, price, stock }) {
    this.id = id;
    this.sku = sku;
    this.description = description;
    this.category = category;
    this.price = price;
    this.stock = stock;
  }
}