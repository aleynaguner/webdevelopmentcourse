public class TimerThread implements Runnable {

    private Thread thread;
    private String threadName;

    public TimerThread(String threadName) {
        this.threadName = threadName;
        System.out.println("thread is creating ... : " + threadName);
    }

    @Override
    public void run() {
        System.out.println("thread is running ... : " + threadName);

        try {
            for (int i = 1; i <= 10; i++) {
                System.out.println(threadName + " : " + i);
                Thread.sleep(1000);
            }
        } catch (InterruptedException interruptedException) {
            System.out.println("thread interrupted" + threadName);
        }

        System.out.println(threadName +" is finished");

    }

    public void start() {
        if (thread == null) {
            thread = new Thread(this, threadName);
            thread.start();
        }
    }
}
