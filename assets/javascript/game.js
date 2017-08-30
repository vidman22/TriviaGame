	
// Timeout Functions
	var number = 30;

    var intervalId;


    function run() {
      intervalId = setInterval(decrement, 1000);
    }

    function decrement() {

      number--;

      $("#display").html("<h1>" + number + "</h1>");

      if (number === 0) {

        stop();

        alert("Time Up!");
      }

      function stop() {

      clearInterval(intervalId);
    }

    }


    run();
	var values = [];
	var answers = ["1", "5", "7", "9", "12"];
	var wins = 0;

	console.log(answers);

  function handleClick() {
   

	

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

	for( i = 0; i < answers.length; i++) { 

		if (values[i] === answers[i]) {
		wins++;
		console.log(wins);

		}
		
	}
		alert("You got " + wins + "of 5 correct!");
	}
	

console.log(values);


