/*

	Author: Mario Genchev Koshnicharov
	Purpose: Bootstrap Development in WordPress Themes

	jQuery Logic

*/


function addingClass(selectorInput, classInput){

	

	if($(selectorInput).length){

		$(selectorInput).addClass(classInput);


	}else{

		alert('Can\'t find ' + selectorInput);

	}


}


function removingClass(selectorInput, classInput){

	if($(selectorInput).length){

		$(selectorInput).removeClass(classInput);


	}else{

		alert('Can\'t find ' + selectorInput);

	}


}




