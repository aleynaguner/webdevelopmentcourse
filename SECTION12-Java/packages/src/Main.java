
import maths.Operations;
//built-in - inside of Java packages
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner data = new Scanner(System.in);
        System.out.println("Enter your name:");
        String name = data.nextLine();
        System.out.println("Hello "+name);

        Operations opt = new Operations();
        System.out.println(opt.sum(4,5));
    }
}
