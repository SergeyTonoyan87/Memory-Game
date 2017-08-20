$(document).ready(function(){
	
	var myCards = ['qyapi_karol','qyapi_karol','xachi_karol','xachi_karol','srti_karol','srti_karol','xari_karol','xari_karol','qyapi_dama','qyapi_dama','srti_dama','srti_dama','xari_dama','xari_dama','xachi_dama','xachi_dama','srti_valet','srti_valet'];
	
	var seconds = 0, minutes = 0, hours = 0,t;
	
     $('#start').on( "click", function() {
		 	fillRandom();
		 	clearTimeout(t);
		 	$('#timerP').text = "00:00:00";
		 	seconds = 0, minutes = 0, hours = 0;
  			$('.flip').find('.card').addClass('flipped');
		 	setTimeout(function(){$('.flip').find('.card').removeClass('flipped'); 
								 
							startTimer(); 
							checkcards()	  
							 
								 
								 }, 5000);
		 
		});
	

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
 
function fillRandom(){
	for(var i = 0; i < myCards.length; i++){
		
		$( '.face.back ').find('img').each(function() {
			var rand = getRandomInt(0, myCards.length-1);
  $( this ).attr('src','images/'+ myCards[rand] +'.jpg');
			myCards.splice(rand, 1);
});
	}
	
	
}
	var arrForScrs = [];
	function checkcards(){
		
	$('.flip').click(function(e){
		
		
		  
			var a = $(this);
		   $(this).find('.card').addClass('flipped');
		arrForScrs.push($(this).find('.face.back').find('img').attr('src'));
		//alert(arrForScrs);
		
		//alert( $(this).find('.face.back').find('img').attr('src'));
		if(arrForScrs.length == 3){
			if(arrForScrs[0] != arrForScrs[1]){
				
				var aa = $('.card').find('img[src="'+arrForScrs[0]+'"]').first();
				aa.closest( ".card" ).removeClass('flipped');
				$('.card').find('img[src="'+arrForScrs[1]+'"]').first().closest( ".card" ).removeClass('flipped');
				
				
				
			}else{
					$('.card').find('img[src="'+arrForScrs[0]+'"]').css('border', "solid 2px red"); 
				$('.card').find('img[src="'+arrForScrs[1]+'"]').css('border', "solid 2px red"); 
			}
			arrForScrs.splice(0, 2);
			
		} 
		
           
    }); 
		
	}

//startTimer();

//timer code here

function startTimer(){
	var timerP = document.getElementById('timerP'),
    start = document.getElementById('start');
    //stop = document.getElementById('stop'),
    //clear = document.getElementById('clear'),
    

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    
    timerP.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}
timer();


/* Start button */
//start.onclick = timer;

/* Stop button */
/*stop.onclick = function() {
    clearTimeout(t);
}*/

/* Clear button */
/*clear.onclick = function() {
    h1.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
}*/
}
	
	
});




 