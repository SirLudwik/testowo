
function kolorki(){
var r = Math.round(Math.random()*255);
var g = Math.round(Math.random()*255);
var b = Math.round(Math.random()*255);


var kolor = "#" + r.toString(16) + g.toString(16) + b.toString(16);
document.getElementById("monster").style.background=kolor;
document.getElementById("monster").innerHTML=kolor;
}


