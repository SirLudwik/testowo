function mouseOver(x){
	var trigger = parseInt(x);
	
	switch(trigger){
		
		case 0:
			document.getElementById("home1").style.display="none";
			document.getElementById("home").innerHTML="Strona główna";
			break;
					
		case 1:
			document.getElementById("onas1").style.display="none";
			document.getElementById("onas").innerHTML="Cosik o nas";
			break;
					
		case 2:
			document.getElementById("poco1").style.display="none";
			document.getElementById("poco").innerHTML="Po co to?";
			break;
					
		case 3:
			document.getElementById("pojecia1").style.display="none";
			document.getElementById("pojecia").innerHTML="Podstawy";
			break;
					
		case 4:
			document.getElementById("pomocne1").style.display="none";
			document.getElementById("pomocne").innerHTML="Pomocne linki";
			break;
					
		case 5:
			document.getElementById("kontakt1").style.display="none";
			document.getElementById("kontakt").innerHTML="Kontakt";
			break;
		
	}
}
function mouseOut(y){
	var trigger = y;
	switch(trigger){
		
		case 0:
			document.getElementById("home1").style.display="inline";
			document.getElementById("home").innerHTML="";
			break;
					
		case 1:
			document.getElementById("onas1").style.display="inline";
			document.getElementById("onas").innerHTML="";
			break;
					
		case 2:
			document.getElementById("poco1").style.display="inline";
			document.getElementById("poco").innerHTML="";
			break;
					
		case 3:
			document.getElementById("pojecia1").style.display="inline";
			document.getElementById("pojecia").innerHTML="";
			break;
					
		case 4:
			document.getElementById("pomocne1").style.display="inline";
			document.getElementById("pomocne").innerHTML="";
			break;
					
		case 5:
			document.getElementById("kontakt1").style.display="inline";
			document.getElementById("kontakt").innerHTML="";
			break;
		
	}

}

