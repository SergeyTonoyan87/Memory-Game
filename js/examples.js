 var mySelect = document.getElementById('mySelect');
//mySelect.onchange = getAlphabet(mySelect.nodeValue);

//getAlphabet("en");
function getAlphabet(lang){
	var str = '';
	if (lang == "en"){
		for(var i = 65 ; i <= 122; i ++ ){
	str += String.fromCharCode(i);
}
	}else if (lang == "ru"){
		
		for(var i = 1040 ; i <= 1103; i ++ ){
	str += String.fromCharCode(i);
}
		
	}else if(lang == "am"){
		for(var i = 1329 ; i <= 1415; i ++ ){
	str += String.fromCharCode(i);
}
	}else{
		alert('invalid language');
	}
	return str;
	document.getElementById('al').innerHTML = str;
}