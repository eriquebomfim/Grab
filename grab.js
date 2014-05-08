/**
* Grab
* This script allows you to grab page content and scroll it up-down instead of use scrollbar
* Very useful when your mouse trackball breaks like mine :)
* Install it as Chrome Extension, press CTRL to enable/disable while you move 
* mouse up-down.
*
* Developed by ERIQUE BOMFIM <erikkoder.wordpress.com>
* on MAY, 06, 2014.
* 
*/

var ctrlPressed,mousePressed,mouseY;

var toogleMouse = function(option){

    var _currentClassName = document.body.className;
	
	if (option == 1 && _currentClassName.indexOf("hand_opn") < 0)	
		document.body.className += " hand_opn";	
	if (option == 2 && _currentClassName.indexOf("hand_cls") < 0)	
		document.body.className += " hand_cls";
	if (option == 3)	
		document.body.className = _currentClassName.replace(" hand_cls","");
	if (option == 0)	
		document.body.className = _currentClassName.replace(" hand_opn","");
}

document.onkeydown = function(event){
    if (event.which == 17 ){
		ctrlPressed = true;
		toogleMouse(1);
	}
};
document.onkeyup = function(event){
    if (event.which == 17 ){
		ctrlPressed = false;
		toogleMouse(0);
	}
};
document.onmousedown = function(event){
    if( ctrlPressed && event.which == 1){
		mousePressed = true;
		event.preventDefault();
		toogleMouse(2);
		return false;
	}
	return event;
};
document.onmouseup = function(event){
    if( ctrlPressed && event.which == 1){
		mousePressed = false;
		toogleMouse(3);
	}
};
document.onmousemove = function(event){
    if (ctrlPressed && mousePressed){
		if (event.y > mouseY){
			document.body.scrollTop -= 4;
		} else {
			document.body.scrollTop += 4;
		}
		mouseY = event.y;
	} 
}
