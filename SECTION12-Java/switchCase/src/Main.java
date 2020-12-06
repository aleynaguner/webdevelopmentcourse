public class Main {

    public static void main(String[] args) {
        // write your code here
        char score = 'A';
        switch (score) {
            case 'A':
                System.out.println("Passed with Excellent");
                break;
            case 'B':
                System.out.println("Passed with Very Good");
                break;
            case 'C':
                System.out.println("Passed with Good");
                break;
            case 'D':
                System.out.println("Passed");
                break;
            case 'F':
                System.out.println("Failed");
                break;
            default:
                System.out.println("Invalid score");
        }
    }
}
