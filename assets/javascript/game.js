
	
// Timeout Functions
	var number = 30;

    var intervalId;


    $("#display").one("click", function() {
      intervalId = setInterval(decrement, 1000);
      
      // Display the questions
	$(".question").html('<p>How many rings to rule them all?</p>'+
		
		'<br>' + 
 			'<input type="radio" id="q1" name="ring" value="0" >0'+
 			'<input type="radio" id="q2" name="ring" value="1" >1'+
			'<input type="radio" id="q3" name="ring" value="2" >2'+
		

		'<br><br><br>'+
		

		
		'<p>How many armies were present at the Battle of Five Armies?</p>'+
		
		'<br>'+

  			'<input type="radio" id="q4" name="battle" value="3" >3'+
 		    '<input type="radio" id="q5" name="battle" value="4" >4'+
		    '<input type="radio" id="q6" name="battle" value="5" >5'+
		

		'<br><br><br>'+
		

		
		
		'<p>How many Seven Seeing Stones were made?</p>'+
		
		'<br>'+

  			'<input type="radio" id="q7" name="stone" value="6" >6'+
  			'<input type="radio" id="q8" name="stone" value="7" >7'+
 			'<input type="radio" id="q9" name="stone" value="8" >8'+
		
		'<br><br><br>'+

		
		
		
		'<p>How many of the Nine Nazgul were present at the Battle of Pellenor Fields?</p>'+
		
		'<br>'+

  			'<input type="radio" id="q10" name="nine" value="9" >9'+
  			'<input type="radio" id="q11" name="nine" value="10" >10'+
 			'<input type="radio" id="q12" name="nine" value="11" >11'+
		


		
		'<br><br><br>'+

		
		'<p>How many children were in the dozen that Samwise had with Rosie?</p>'+
		
		'<br>'+
		
  			'<input type="radio" id="q13" name="children" value="12" >12'+
 			'<input type="radio" id="q14" name="children" value="13" >13'+
 			'<input type="radio" id="q15" name="children" value="14" >14'+
		
		

		'<br><br><br>'+

		

	
		 '<input name="Submit" type="submit" onClick="JavaScript:handleClick()">');
    


    });
    

    function decrement() {

      number--;

      $("#display").html("<h1>" + number + "</h1>");

      if (number === 0) {

        stop();

        alert("Time Up!");
        return;
      }

      function stop() {

      clearInterval(intervalId);
    }

    }


   
	var values = [];
	var answers = ["1", "5", "7", "9", "12"];
	var matches = 0;
	var unmatched = 0;
	console.log(answers);

  function handleClick() {
   
  	// Stop the timer
  	
  	function stop() {

      clearInterval(intervalId);
    }
    stop();

    // Check the radio button inputs

	var question1Value = $("input[name=ring]:checked").val();
	values.push(question1Value);

	var question2Value = $("input[name=battle]:checked").val();
	values.push(question2Value);

	var question2Value = $("input[name=stone]:checked").val();
	values.push(question2Value);

	var question2Value = $("input[name=nine]:checked").val();
	values.push(question2Value);

	var question2Value = $("input[name=children]:checked").val();
	values.push(question2Value);

	// Loop through answers and correct answers

	for( i = 0; i < answers.length; i++) { 

		if (values[i] === answers[i]) {
		matches++;

	}
		if(values[i] ===! answers[i]) {
		unmatched++;
		}
	}
		console.log(matches);
		console.log(unmatched);

		var unaswered = answers.length - (matches + unmatched);
		var incorrect = answers.length - 

		$(".question").html(
			"<h2>Done!</h2>"+
			"You got " + matches + " of 5 correct!");
							

	}
	


console.log(values);


