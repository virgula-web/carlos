	

var intervalo = 1000;

function slide1(){
	document.getElementById ("banner") . src ="pizzafoda.jpg";
	setTimeout ("slide2()" , intervalo);



}


function slide2(){


	document.getElementById('banner') . src ="hamburguer.jpg";
	setTimeout ("slide3()" , intervalo);



}

function slide3(){


	document.getElementById('banner') . src = "hamburguer2.jpg" ;
	setTimeout ("slide1()" , intervalo);



}



