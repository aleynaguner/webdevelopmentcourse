public class Main {

    public static void main(String[] args) {
        String fam = "Aleyna";
        String fam1 = "Semra";
        String fam2 = "Ada";
        String fam3 = "Turgay";

        System.out.println(fam);
        System.out.println(fam1);
        System.out.println(fam2);
        System.out.println(fam3);

        String[] student = new String[3];
        student[0] = "Karin";
        student[1] = "Hilal";
        student[2] = "Onur";

        for (int i = 0; i < student.length; i++) {
            System.out.println(student[i]);
        }

        for(String st:student){
            System.out.println(st);
        }

    }
}
