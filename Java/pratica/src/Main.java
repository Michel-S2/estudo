public class Main {
    public static void main(String[] args) {

        Account a1 = new Account();
        a1.accountNumber = "1234-5";
        a1.accountName = "Michel";
        a1.balance = 2000.0;

        Account a2 = new Account();
        a2.accountNumber = "1234-6";
        a2.accountName = "Maria";
        a2.balance = 1500.50;

        System.out.println(a1.accountName);
        System.out.println(a1.accountNumber);
        System.out.println(a1.balance);

        System.out.println("-----------");

        System.out.println(a2.accountName);
        System.out.println(a2.accountNumber);
        System.out.println(a2.balance);


    }
}