public class Main {
    public static void main(String[] args) {
//        BaseLogger[] loggers = new BaseLogger[]{new FileLogger(), new DatabaseLogger(), new EmailLogger()};
//        for(BaseLogger logger: loggers){
//            logger.Log("Log message");
//        }

        EmailLogger loggerEmail = new EmailLogger();
        loggerEmail.log("log message");

        CustomerManager custMn = new CustomerManager(new DatabaseLogger());
        custMn.add();
    }
}
