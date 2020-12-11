public class Main {

    public static void main(String[] args) {
        Product product = new Product();
        product.price=10;
        product.name="Computer";

        //Use directly with static keyword
        //But static creates ones and keep live until program dies
        ProductValidator.isValid(product);
        ProductValidator.innerStaticClass.write();

    }
}
