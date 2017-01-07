#include <iostream>
using namespace std;



int main()
{
int test, ile;
int suma = 0;

	cin>>test;
	for (int i = 0; i < test; i++){
		cin>>ile;
		int liczby[ile];
		for(int j = 0; j<ile; j++){
			cin>>liczby[j];
			suma += liczby[j];
			
			}
		cout<<suma<<endl;
		suma = 0;

		}
		return 0;
}

