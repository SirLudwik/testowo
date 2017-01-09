
function mnozenie (){
	var x = 11;
	var y = 11;
	var a = 1;
	var b = 1;
	
	document.write("<table>");
	
		for (var i = 0; i<y; i++){
			document.write("<tr>");
			
			if(i == 0){
				document.write("<td></td>");
				for (var j = 1; j<y; j++){
					document.write("<td>" + a + "</td>");
					a++;
				}
				
				document.write("</tr>");
			} else {	
				a = 1;			
					document.write("<td>" + b + "</td>");
				for (var k = 1;k<y; k++){
					document.write("<td>" + a*b + "</td>");
					a++
				}
				b++
				document.write("</tr>");
			
			}
		}
		
	document.write("</table>");
}
