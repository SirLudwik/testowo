var a="";
var b;
var wynik = 0;
var rown = false;
var dzial = 0;
var temp = 0;
function pobierz (x){
		
		if(a.length < 15){
		a = a + x;
		document.getElementById("wynik").innerHTML=a;
		}
}
function pobierzf (z){
		
		if(z == "+"){
			b = parseInt(a);
			a = "";
			dzial = 1;
		}
		else if (z=="-"){
			b = parseInt(a);
			a = "";
			dzial = 2;
		}
		else if (z=="*"){
			b = parseInt(a);
			a = "";
			dzial = 3;
		}
		else if (z=="/"){
			b = parseInt(a);
			a = "";
			dzial = 4;
		}
		else if (z=="="){
			if(dzial == 1){
				if (temp == 0){
				wynik = parseInt(a);
				wynik += b;
				document.getElementById("wynik").innerHTML=wynik;
				b = wynik;
				temp = wynik;
				wynik = 0;
				a = "";
				dzial = 0;
				} else {
				wynik = parseInt(a);
				wynik += temp;
				document.getElementById("wynik").innerHTML=wynik;
				b = wynik;
				temp = wynik;
				wynik = 0;
				a = "";
				dzial = 0;
				}
			}
			else if (dzial == 2){
				if (temp == 0){
				wynik = parseInt(a);
				wynik = wynik - b;
				document.getElementById("wynik").innerHTML=wynik;
				b = wynik;
				temp = wynik;
				wynik = 0;
				a = "";
				dzial = 0;
				} else {
				wynik = parseInt(a);
				wynik = temp - wynik;
				document.getElementById("wynik").innerHTML=wynik;
				b = wynik;
				temp = wynik;
				wynik = 0;
				a = "";
				dzial = 0;
				}
			}
			else if (dzial == 3){
				if (temp == 0){
				wynik = parseInt(a);
				wynik = wynik * b;
				document.getElementById("wynik").innerHTML=wynik;
				b = wynik;
				temp = wynik;
				wynik = 0;
				a = "";
				dzial = 0;
				} else {
				wynik = parseInt(a);
				wynik = temp * wynik;
				document.getElementById("wynik").innerHTML=wynik;
				b = wynik;
				temp = wynik;
				wynik = 0;
				a = "";
				dzial = 0;
				}
			}
			else if (dzial == 4){
				if (temp == 0){
				wynik = parseInt(a);
				wynik = wynik / b;
				document.getElementById("wynik").innerHTML=wynik;
				b = wynik;
				temp = wynik;
				wynik = 0;
				a = "";
				dzial = 0;
				} else {
				wynik = parseInt(a);
				wynik = temp / wynik;
				document.getElementById("wynik").innerHTML=wynik;
				b = wynik;
				temp = wynik;
				wynik = 0;
				a = "";
				dzial = 0;
				}
			}
		
		}
		else if (z=="CE"){
				wynik = 0;
				b = 0;
				a = "";
				dzial = 0;
				temp = 0;
				document.getElementById("wynik").innerHTML=wynik;
		}
	
}
