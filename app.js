var employee = {};

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
});

function displayEmployee(person) {
  var name = "<div class=\"employeeInfo\"><h1>" + employee.firstName +" "+ employee.lastName + "</h1>";

  var number = "<li><span>Employee Number:</span> " + employee.employeeNumber + "</li>";
  var title = "<li><span>Title:</span> " + employee.jobTitle + "</li>";

  var scoreLi = ["<li class=\"zero\">", "<li class=\"one\">","<li class=\"two\">","<li class=\"three\">","<li class=\"four\">","<li class=\"five\">"][employee.lastReviewScore];
  var score = scoreLi + "<span>Last Review Score:</span> " + employee.lastReviewScore + "</li>";

  var salary = "<li><span>Salary:</span> " + formatAsCurrency(parseInt(employee.salary)) + "</li>";
  console.log("working");
  $('#display').append( name+ "<ul>" + number + title + score + salary + "</ul></div>");
}

// Format input as currency
function formatAsCurrency(input) {
	return input.toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD',
		currencyDisplay: 'symbol'
	});
}
