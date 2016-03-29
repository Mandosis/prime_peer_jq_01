var employee = {};
var totalSalary = 0;

var firstNameArr = ["Mark", "Peter", "Squanto", "Suzanne", "Chris", "Kyle", "Jen", "Joel", "Ryan", "Millie", "Travis", "Lisa", "Caroline", "Ed", "Oliver", "Paul", "George", "Ringo", "Genghis", "Albus", "Charlie", "Dennis", "Dee", "Ronald", "Frank", "Carmen", "Chandler", "Joey", "Regina"];
var lastNameArr = ["Squeaky", "Potts", "Potter", "Granger", "Bush", "Johnson", "Obama", "Clinton", "Trump", "Edwards", "Gawarecki", "Hanson", "Sanders", "Khan", "Star", "Dumbledore", "Day", "Reynolds", "McDonald", "Sandiego", "Bing", "Tribbiani", "Phalange"];
var titleArr = ["Floor Clearner", "CEO", "CTO", "Babysitter", "Nuclear Materials Handler", "Kitten Whisperer", "Executive Producer", "Envelope Licker", "Undercover Bum", "Alien Conspiracy Writer", "Executive in Charge of Imaginary Studies", "Boot Shiner", "Cowboy Wrangler", "Meme Creator", "Superpower Researcher", "Dust Collector", "Office Clown", "Paper Airplane Maker", "Bathroom Inspector", "Transponster", "Door Opener", "the guy who orders lunch", "Accountant (but actually just on reddit all day)", "Brownnoser", "Karaoke Guru", "Mic Dropper", "Ice Cube Weigher", "Food Heater Upper", "Cube Stacker", "person who turns on the television when we can't find the remote", "Minister of Magic", "Roller Coaster Tester", "Electric Socket Tester", "King of the Rats", "Children's Cereal Mascot", "Nobody really knows what they do but we give them money", "Human Ladder", "Cheerleader", "Backseat Driver", "Dives for Pennies in Mall Fountains", "Doesn't know the shortcuts for Copy and Paste so types everything out", "Searches for google.com to get to Google", "Firebender", "Robot", "The Chosen One", "Interplanetary Ambassador", "Facial Hair Rater"];

$(function() {
  $("#employee").on("submit", function(event) {
    event.preventDefault();

    // Set values of inputs to employee object
    employee.firstName = this.first_name.value;
    employee.lastName = this.last_name.value;
    employee.employeeNumber = this.employee_number.value;
    employee.jobTitle = this.job_title.value;
    employee.lastReviewScore = this.review_score.value;
    employee.salary = this.salary.value;

    // pushes arrays with new info
    firstNameArr.push(this.first_name.value);
    lastNameArr.push(this.last_name.value);
    titleArr.push(this.job_title.value);



    // Clear inputs
    $("#first_name").val("");
    $("#last_name").val("");
    $("#employee_number").val("");
    $("#job_title").val("");
    $("#review_score").val("");
    $("#salary").val("");

    // Append employee to the DOM
    displayEmployee(employee);

  });
  $(".randomize").on("click", function(event) {
    event.preventDefault();

   console.log("test");
    employee.firstName = firstNameArr[Math.floor((Math.random() * firstNameArr.length))];
    employee.lastName = lastNameArr[Math.floor((Math.random() * lastNameArr.length))];
    employee.jobTitle = titleArr[Math.floor((Math.random() * titleArr.length))];
    employee.employeeNumber = Math.floor((Math.random() * 90999) + 10000);
    employee.lastReviewScore = Math.floor(Math.random() * 5)+1;
    employee.salary = Math.floor((Math.random() * 200000) + 25000);


    displayEmployee();
  });
});

function displayEmployee() {
  var name = "<div class=\"employeeInfo\"><h1>" + employee.firstName +" "+ employee.lastName + "</h1>";

  var number = "<li><span>Employee Number:</span> " + employee.employeeNumber + "</li>";
  var title = "<li><span>Title:</span> " + employee.jobTitle + "</li>";

  var scoreLi = ["<li class=\"zero\">", "<li class=\"one\">","<li class=\"two\">","<li class=\"three\">","<li class=\"four\">","<li class=\"five\">"][employee.lastReviewScore];
  var score = scoreLi + "<span>Last Review Score:</span> " + employee.lastReviewScore + "</li>";

  var salary = "<li><span>Salary:</span> " + formatAsCurrency(parseInt(employee.salary)) + "</li>";
  totalSalary += employee.salary;
  console.log(totalSalary);

  $('#display').prepend( name+ "<ul>" + number + title + score + salary + "</ul></div>");
}

// Format input as currency
function formatAsCurrency(input) {
	return input.toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD',
		currencyDisplay: 'symbol'
	});
}
