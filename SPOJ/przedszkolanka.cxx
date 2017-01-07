#include <iostream>
using namespace std;

int main()
{
	int test;
	int ile[2];
	
	cin>>test;
	for (int i = 0; i<test; i++){

		for (int j = 0; j<2; j++){
			cin>>ile[j];			
			}
			
	int gr_i = ile[0];
	int gr_ii = ile[1];
	int a, b, wynik;
	
	
		if (gr_i > gr_ii){
			a = gr_i;
			b = gr_ii;
			}
		else {
			a = gr_ii;
			b = gr_i;
			}
		int c = a;
	if ((a%b == 0) && (a/b == 1)){
		wynik = b;
		cout<<wynik<<endl;

		}
	else if ((a%b == 0) && (a/b == 2)){
		wynik = b*2;
		cout<<wynik<<endl;

		}
	else if (a%b != 0) {
		bool x = true;
		while (x == true){
		c += a;
		if (c%b == 0){
			wynik = c;
			x = false;
			cout<<wynik<<endl;
			c = 0;
			}
		}
			}
		
		}

}

