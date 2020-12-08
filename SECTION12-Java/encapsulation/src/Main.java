public class Main {

    public static void main(String[] args) {
        Product product = new Product();
        product.setName("Laptop");
        product.setDescription("DELL i7");
        product.price = 2152.45;
        product.stockAmount = 12;

        product.setId(1);
        System.out.println(product.getId());

        ProductManager productManager = new ProductManager();
        productManager.Add(product);
    }
}
