public class Main {

    public static void main(String[] args) {
        //Compile time error
        //int number = "Aleyna";

        //Run time error
//        int[] numbers = new int[]{1,2,3};
//        System.out.println(numbers[4]);

        try{
            int[] numbers = new int[]{1,2,3};
            System.out.println(numbers[4]);
        }catch (Exception exception){
            System.out.println("error");
            System.out.println(exception);
        }finally{
            System.out.println("finally");
        }
    }
}
