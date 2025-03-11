// Mahsulot interfeysi
type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  description?: string;
};

// Mahsulotlarni boshqaruvchi sinf
class ProductManager {
  private products: Product[] = [];

  // Mahsulot qo'shish
  createProduct(product: Product): void {
    this.products.push(product);
  }

  // ID bo'yicha mahsulotni olish
  getProductById(id: number): Product | undefined {
    return this.products.find((product) => product.id === id);
  }

  // Mahsulotni yangilash
  updateProduct(id: number, updatedFields: Partial<Product>): void {
    const product = this.getProductById(id);
    if (product) {
      Object.assign(product, updatedFields);
    }
  }

  // Mahsulotni o'chirish
  deleteProduct(id: number): void {
    this.products = this.products.filter((product) => product.id !== id);
  }

  // Barcha mahsulotlarni olish
  getAllProducts(): Product[] {
    return this.products;
  }
}

// Testing
const manager = new ProductManager();

// Mahsulot qo'shish
manager.createProduct({
  id: 1,
  name: "iPhone 12",
  price: 999,
  category: "Smartphone",
});
manager.createProduct({
  id: 2,
  name: "Samsung Galaxy S21",
  price: 899,
  category: "Smartphone",
});

// Barcha mahsulotlarni olish
console.log(manager.getAllProducts());

// ID bo'yicha mahsulotni olish
console.log(manager.getProductById(1));

// Mahsulotni yangilash
manager.updateProduct(2, { price: 799 });
console.log(manager.getProductById(2));

// Mahsulotni o'chirish
manager.deleteProduct(1);
console.log(manager.getAllProducts());
