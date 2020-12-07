import java.awt.*;

public class Main {

    public static void main(String[] args) {
	    int perfNum = 28;
	    int sum = 0;

	    for(int i=1;i<perfNum;i++){
	        if(perfNum%i == 0){
	            sum+=i;
            }
        }

	    if(perfNum == sum){
            System.out.println(perfNum+" is perfect number");
        }else{
            System.out.println(perfNum+" is not a perfect number");
        }
    }
}
