import java.io.*;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        createFile();
        getFileInfo();
        readFile();
        writeFile();
        readFile();
    }

    public static void createFile() {
        File file = new File("C:\\Users\\ASUS\\source\\repos\\Web Geliştirme\\SECTION12-Java\\files\\students.txt");
        try {
            if (file.createNewFile()) {
                System.out.println("file created");
            } else {
                System.out.println("file already exist");
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void getFileInfo() {
        File file = new File("C:\\Users\\ASUS\\source\\repos\\Web Geliştirme\\SECTION12-Java\\files\\students.txt");
        if (file.exists()) {
            System.out.println("file name : " + file.getName());
            System.out.println("file path : " + file.getAbsolutePath());
            System.out.println("Readable? : " + file.canRead());
            System.out.println("Writable? : " + file.canWrite());
            System.out.println("Size : " + file.length());

        }
    }

    public static void readFile(){
        File file = new File("C:\\Users\\ASUS\\source\\repos\\Web Geliştirme\\SECTION12-Java\\files\\students.txt");
        try {
            Scanner reader = new Scanner(file);
            while (reader.hasNextLine()){
                String line = reader.nextLine();
                System.out.println(line);
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }

    public static void writeFile(){
        try {
            BufferedWriter writer = new BufferedWriter(new FileWriter("C:\\Users\\ASUS\\source\\repos\\Web Geliştirme\\SECTION12-Java\\files\\students.txt",true));
            writer.newLine();
            writer.write("Semra");
            writer.close();
            System.out.println("wrote to file");
        }catch (IOException e) {
            e.printStackTrace();
        } ;
    }

}
