public class Main {

    public static void main(String[] args) {
        String msg = "I love myself and I smile all the time. ";
        System.out.println(msg);

        System.out.println("length: "+msg.length());
        System.out.println("length: "+msg.charAt(4));
        System.out.println("length: "+msg.concat("Hey !!!"));
        System.out.println("length: "+msg.startsWith("I"));
        System.out.println("length: "+msg.endsWith("I"));
        System.out.println("length: "+msg.startsWith("e"));
        System.out.println("length: "+msg.endsWith("e"));

        System.out.println(msg.indexOf('o'));
        System.out.println(msg.lastIndexOf("a"));

        //msg.getChars(0,10,chars,);
        System.out.println(msg.replace(' ', '-'));
    }
}
