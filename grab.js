/**
* Grab
* This script allows you to grab page content up-down instead of use scrollbar
* Very useful when your mouse trackball breaks like mine :)
* Install it as Chrome Extension, press CTRL to enable/disable while you move mouse up-down.
*
* Developed by ERIQUE BOMFIM <erikkoder.wordpress.com>
* on MAY, 06, 2014.
* 
*/

var ctrlPressed,mousePressed,mouseY;

document.onkeydown = function(event){
    if (event.which == 17 ) ctrlPressed = true;
};
document.onkeyup = function(event){
    if (event.which == 17 ) ctrlPressed = false;
};
document.onmousedown = function(event){
    if( ctrlPressed && event.which == 1){
		mousePressed = true;
		event.preventDefault();
		return false;
	}
	return event;
};
document.onmouseup = function(event){
    if( ctrlPressed && event.which == 1){
		mousePressed = false;
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
