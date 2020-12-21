import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {
        MyList<String> cities = new MyList<>();
        cities.add("Munih");
        cities.add("İstanbul");
        cities.add("London");

        MyList<Customer> customerList = new MyList<Customer>();
        customerList.add(new Customer());
        customerList.add(new Customer());
    }
}
