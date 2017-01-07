#include <iostream>
#include <sstream>
#include <cstdlib>

using namespace std;

int main()
{
	int test;
	cin>>test;
		for (int i = 0; i<test; i++){
		
			int a;
			cin>>a;
			ostringstream ss;
			ss << a;
			string str = ss.str();
			
				for (int j=0; j<11; j++){
					string bt = str[j];
					int b;
					istringstream iss(str);
					iss >> b;
					cout<< b << endl;
				}
		}

}

