public class BaseLogger {
    public void log(String message){
        System.out.println(message);
    }
    //with final keyword you can not override this method other classes
    public final void write(String message){
        System.out.println(message);
    }
}
