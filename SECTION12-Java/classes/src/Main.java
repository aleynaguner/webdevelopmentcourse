public class Main {

    public static void main(String[] args) {
	    CustomerManager customerManager = new CustomerManager();
		customerManager.Add();
		customerManager.Delete();

		Calculator cl = new Calculator();
		System.out.println(cl.Sum(3,5));
		System.out.println(cl.Substract(3,5));
		System.out.println(cl.Multiply(3,5));
		System.out.println(cl.Divide(3,5));
		System.out.println(cl.Divide(3,0));

	}
}
