public class ProductValidator {
    //Main class can not be static

    static {
        //static block
        System.out.println("Static block");
    }
    public static boolean isValid(Product product){
        if( product.price>0 && !product.name.isEmpty()){
            System.out.println("Input is valid");
            return true;
        }else{
            System.out.println("Input is invalid");
            return false;
        }
    }

    public static class innerStaticClass{
        //class can be static inside of a class
        public static void write(){
            System.out.println("innerStaticClass");
        }
    }
}
