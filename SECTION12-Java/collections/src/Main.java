import java.util.ArrayList;
import java.util.HashMap;

public class Main {

    public static void main(String[] args) {
        ArrayList numbers = new ArrayList();

        numbers.add(1);
        numbers.add("Aleyna");

        System.out.println("Size " + numbers.size());
        System.out.println(numbers);

        numbers.set(0,100);

        System.out.println(numbers);

        for(Object i:numbers){
            System.out.println(i);
        }

        ArrayList<String> cities = new ArrayList<String>();
        cities.add("Istanbul");
        cities.add("Barcelona");
        //cities.add(1); not acceptable
        System.out.println(cities);

        ArrayList<Customer> customers = new ArrayList<Customer>();
        customers.add(new Customer(1,"Aleyna","Güner"));

        HashMap<String, String> dictionary = new HashMap<String, String>();
        dictionary.put("book","kitap");
        dictionary.put("table","masa");
        dictionary.put("computer","bilgisayar");

        System.out.println(dictionary.get("computer"));
        
    }
}
