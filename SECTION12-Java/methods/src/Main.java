public class Main {

    public static void main(String[] args) {
        String msg = "Today is a very very very bad day";

        writeConsole("Aleyna");
        writeConsole("Ada");
        writeConsole("Semra");
        writeConsole("Turgay");

        save();
        delete();
        update();
        int sum1 = sum(5,7);
        System.out.println(sum1);
    }

    public static void writeConsole(String name){
        System.out.println("Hello "+name);
    }

    public static void save(){
        System.out.println("saved");
    }

    public static void delete(){
        System.out.println("deleted");
    }

    public static void update(){
        System.out.println("updated");
    }

    public static int sum(int a,int b){
        return a+b;
    }
}
