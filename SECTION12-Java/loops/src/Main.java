public class Main {

    public static void main(String[] args) {
        // For
        for (int i = 1; i <= 10; i++) {
            System.out.println(i);
        }
        System.out.println("End of For Loop");

        //While
        int j = 1;
        while (j <= 10) {
            System.out.println(j);
            j++;
        }
        System.out.println("End of While Loop");

        //Do...While
        int k = 1;
        do {
            System.out.println(k);
            k++;
        }while(k<=10);
        System.out.println("End of Do...While Loop");
    }
}
