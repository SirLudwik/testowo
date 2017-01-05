#include <iostream>
using namespace std;

int test, liczba;

int main()
{
	cin>>test;
	
		for(int i = 0; i<test; i++) {
			cin>>liczba;
			if (liczba <= 1) {
				cout << "NIE" << endl;
				}
			else{
			for (int j = 2; j <= liczba; j++){
				
				if (liczba%j == 0){
					if(j==liczba){
						cout<<"TAK"<<endl;
						}
					else {
						cout<<"NIE"<<endl;
						break;
						}
					}
				}
			}
			}

	
}


