import java.util.Scanner;

class Main {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		String text =sc.next();
		for(int i = 0; i < text.length(); i++) {
			char convert = text.charAt(i);
			if(Character.isUpperCase(convert)) {
				convert = Character.toLowerCase(convert);
			}
			else if(Character.isLowerCase(convert)) {
				convert = Character.toUpperCase(convert);
			}
			System.out.print(convert);
		}
		
	}

}
