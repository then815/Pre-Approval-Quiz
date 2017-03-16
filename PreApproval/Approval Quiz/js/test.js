document.addEventListener('DOMContentLoaded',
function() {
	document.getElementById("quest-0").className = 'question active';
		
		var income = document.getElementById("q8-method-ans");
		
		income.onblur = function(){
			if(income.value < 1000){
				document.getElementById('btn-8').className = 'hide',
				document.getElementById('alert').className = 'alert active';
				}};
		
		var btnNext = document.getElementsByClassName('btn');
		
		for (var i = 0; i < btnNext.length; i++){
			btnNext[i].addEventListener('click', activateTab);
			}
		
		function activateTab(event){
			
			var myID = this.id, // eg btn-1
				contentID = myID.replace('btn', 'quest'),//result: quest-1
				progress = myID.replace('btn', 'pb'),// result: pb-1
				answers = myID.replace('btn','answer');// result: answer-1
			
			deactivateAllTabs();
				
				
			document.getElementById(contentID).className= 'question active';
			document.getElementById(progress).className='on'; 
			}
			
					
			
			function deactivateAllTabs(){
				var questState = document.getElementsByClassName("question");
				for (var i = 0; i < questState.length; i++){
					questState[i].className = 'question';
					}
				}
				
	
});	
		
	


document.getElementById("approvalQuiz").addEventListener("submit", estimateResult);

   function estimateResult(event) {
	   
	event.preventDefault();
	
	
	

   
	    var methods_1 = document.getElementById("approvalQuiz").q1_method,questOne;
		
		for (var i = 0; i < methods_1.length; i++) {
			if(methods_1[i].checked == true){
				questOne = methods_1[i].value;
				}
				} 
				
		var methods_2 = document.getElementById("approvalQuiz").q2_method,questTwo;
		
		for (var j = 0; j < methods_2.length; j++) {
			if(methods_2[j].checked == true){
				questTwo = methods_2[j].value;
				}
				} 
				
		var methods_3 = document.getElementById("approvalQuiz").q3_method,questThree;
		
		for (var k = 0; k < methods_3.length; k++) {
			if(methods_3[k].checked == true){
				questThree = methods_3[k].value;
				}
				} 
				
		var methods_4 = document.getElementById("approvalQuiz").q4_method,questFour;
		
		for (var l = 0; l < methods_4.length; l++) {
			if(methods_4[l].checked == true){
				questFour = methods_4[l].value;
				}
				} 
				
		var methods_5 = document.getElementById("approvalQuiz").q5_method,questFive;
		
		for (var m = 0; m < methods_5.length; m++) {
			if(methods_5[m].checked == true){
				questFive = methods_5[m].value;
				}
				} 
				
		var methods_6 = document.getElementById("approvalQuiz").q6_method,questSix;
		
		for (var n = 0; n < methods_6.length; n++) {
			if(methods_6[n].checked == true){
				questSix = methods_6[n].value;
				}
				} 
				
		var methods_7 = document.getElementById("approvalQuiz").q7_method,questSeven;
		
		for (var o = 0; o < methods_7.length; o++) {
			if(methods_7[o].checked == true){
				questSeven = methods_7[o].value;
				}
				} 
				
	 
				
		var methods_9 = document.getElementById("approvalQuiz").q9_method,questNine;
		
		for (var q = 0; q < methods_9.length; q++) {
			if(methods_9[q].checked == true){
				questNine = methods_9[q].value;
				}
				} 
				
		var methods_10 = document.getElementById("approvalQuiz").q10_method,questTen;
		
		for (var r = 0; r < methods_10.length; r++) {
			if(methods_10[r].checked == true){
				questTen = methods_10[r].value;
				}
				} 
				
				
		var methods_11 = document.getElementById("approvalQuiz").q11_method,questEleven;
		
		for (var s = 0; s < methods_11.length; s++) {
			if(methods_11[s].checked == true){
				questEleven = methods_11[s].value;
				}
				} 
				
				
					
				
				var questOnePts = 0;
				switch (questOne) {
					case "a" :
						questOnePts = 0;
						break;
					case "b" :
						questOnePts = 3;
						break;
					case "c" :
						questOnePts = 8;
						break;
					case "d" :
						questOnePts = 16;
						break;
					case "e" :
						questOnePts = 31;
						break;	
						}
				
				var questTwoPts = 0;
				switch (questTwo) {
					case "a" :
						questTwoPts = 0;
						break;
					case "b" :
						questTwoPts = 2;
						break;
					case "c" :
						questTwoPts = 5;
						break;
					case "d" :
						questTwoPts = 22;
						break;
					case "e" :
						questTwoPts = 27;
						break;	
						}	
						
				var questThreePts = 0;
				switch (questThree) {
					case "a" :
						questThreePts = 0;
						break;
					case "b" :
						questThreePts = 2;
						break;
					case "c" :
						questThreePts = 8;
						break;
					case "d" :
						questThreePts = 17;
						break;
					case "e" :
						questThreePts = 28;
						break;
						}
				var questFourPts = 0;
				switch (questFour) {
					case "a" :
						questFourPts = -75;
						break;
					case "b" :
						questFourPts = -73;
						break;
					case "c" :
						questFourPts = -67;
						break;
					case "d" :
						questFourPts = 8;
						break;
					case "e" :
						questFourPts = 17;
						break;
					case "f" :
						questFourPts = 27;
						break;		
						}
				var questFivePts = 0;
				switch (questFive) {
					case "a" :
						questFivePts = 0;
						break;
					case "b" :
						questFivePts = 8;
						break;
					case "c" :
						questFivePts = 22;
						break;
					case "d" :
						questFivePts = 40;
						break;
					case "e" :
						questFivePts = 52;
						break;
						}
				var questSixPts = 0;
				switch (questSix) {
					case "a" :
						questSixPts = 0;
						break;
					case "b" :
						questSixPts = 2;
						break;
					case "c" :
						questSixPts = 8;
						break;
					case "d" :
						questSixPts = 17;
						break;
					case "e" :
						questSixPts = 24;
						break;
						}
				var questSevenPts = 0;
				switch (questSeven) {
					case "a" :
						questSevenPts = 0;
						break;
					case "b" :
						questSevenPts = 2;
						break;
					case "c" :
						questSevenPts = 8;
						break;
					case "d" :
						questSevenPts = 14;
						break;
					case "e" :
						questSevenPts = 21;
						break;	
						}
				var questEightPts = 0;
				var income = document.getElementById("q8-method-ans").value;
				if( income < 1300){
					questEightPts = 0;
					}else if( income < 1700) {
						questEightPts = 4;
						}else if( income < 2200 ){
							questEightPts = 11;
							}else if( income < 2800){
								questEightPts = 34;
								}else {
									questEightPts = 49;
									}
				var questNinePts = 0;
				switch (questNine) {
					case "a" :
						questNinePts = 100;
						break;
					case "b" :
						questNinePts = 0;
						break;
					case "c" :
						questNinePts = 41;
						break;
					case "d" :
						questNinePts = 90;
						break;
					case "e" :
						questNinePts = 135;
						break;	
						}
				var questTenPts = 0;
				switch (questTen) {
					case "a" :
						questTenPts = 0;
						break;
					case "b" :
						questTenPts = 11;
						break;
					case "c" :
						questTenPts = 22;
						break;
					case "d" :
						questTenPts = 31;
						break;
					case "e" :
						questTenPts = 41;
						break;	
						}
						
				var questElevenPts = 0;
				switch (questEleven) {
					case "a" :
						questElevenPts = 0;
						break;
					case "b" :
						questElevenPts = 3;
						break;
					case "c" :
						questElevenPts = 17;
						break;
					case "d" :
						questElevenPts = 26;
						break;
					case "e" :
						questElevenPts = 31;
						break;	
						}
						
				var questTwelvePts = 0;
				var credit = document.getElementById("q12-method-ans").value;
				
				if( credit < 426 ) {
					questTwelvePts = 0;
				}else if( credit < 476 ) {
						questTwelvePts = 2;
				}else if( credit < 526 ){
						questTwelvePts = 21;
				}else if( credit < 650 ) {
						questTwelvePts = 43;
				}else {
						questTwelvePts = 159;
							
						}	
								
				var score =  (questOnePts + questTwoPts + questThreePts + questFourPts + questFivePts + questSixPts + questSevenPts + questEightPts + questNinePts + questTenPts + questElevenPts + questTwelvePts + 50);
				
				var dPmt = 0;
				if (score < 226){
					dPmt = "50%"}else if (score < 276){
						dPmt = "$1000"}else if (score < 326){
							dPmt = "$500"}else if (score < 401) {
								dPmt = "$300"}else {
									dPmt = "$100"}
				console.log(score);					
				
				var r = 0;
				if ( score <= 275){
				r = 20.95 / 12;
				}else if ( score <= 325) {
				r = 17.95 / 12;
				}else if ( score <= 400 ) {
				r = 16.95 / 12;
				}else if ( score <= 475 ) {
				r = 14.95 / 12;
				}else {
				r = 11.95 / 12;
				}
				var mths = 0;
				if(score <= 225) {
				mths = 36;
				}else if(score <= 325) {
				mths = 42;
				}else if(score <= 400) {
				mths = 48;
				}else {
				mths = 51;
				}
				var rate = r / 100;
				var term = Math.pow((1 + rate),mths);
				
				var pmt = income * .25;
				var ttl = pmt / ((rate * term) / (term - 1));
				var setForRnd = ttl / 1000;
				var rnd = Math.round(setForRnd) * 1000;
				var budget = (rnd > ttl) ? rnd - 1 : rnd + 999;	
				
				var matrix = 0
				if ( score <= 225) {
				matrix = 12999;
				}else if ( score <= 325 ) {
				matrix = 13999;
				}else if ( score <= 400 ) {
				matrix = 19999;
				}else if ( score <= 475 ) {
				matrix = 22999;
				}else {
				matrix = 29999
				} 
				
				
				var approval = (matrix > budget) ? budget : matrix;				
				var preapprove = approval * ((rate * term) / (term - 1));
				var biweekly = (preapprove * 12) / 26;
				var rndPmt = Math.round(biweekly / 10) * 10;
				var biPmt = (rndPmt > biweekly) ? rndPmt - 1 : rndPmt + 9;
				
				
				document.getElementById("txt-estimate").value = dPmt;	
				document.getElementById("ttl-estimate").value = "$" + biPmt.toLocaleString('en')+' bi-weekly';	
				
					
				
				}