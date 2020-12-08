public class Calculator {
    public int Sum(int a, int b){
        return a + b;
    }

    public int Substract(int a, int b){
        return a - b;
    }

    public int Multiply(int a, int b){
        return a * b;
    }

    public int Divide(int a, int b){
        return b!=0 ? a/b : -1111111111;
    }
}
