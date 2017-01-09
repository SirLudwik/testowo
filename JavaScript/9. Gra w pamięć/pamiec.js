// generowanie kafli (plansza 4 na 5, id dla każdego diva)
// system odkrywania

function generator() {
		var kafle = "";
		for (var i = 0; i<20; i++){
			kafle += "<div class='kafel' id='k"+i+"' onCLick=odkryj('k"+i+"')></div>";
		}
		document.getElementById("plansza").innerHTML=kafle;
}

function odkryj(kafel){
	
var r = Math.round(Math.random()*255);
var g = Math.round(Math.random()*255);
var b = Math.round(Math.random()*255);


var kolor = "#" + r.toString(16) + g.toString(16) + b.toString(16);


	
		document.getElementById(kafel).style.background=kolor;
}

