var employee = {};

$(function() {
  $("#employee").on("submit", function(event) {
    event.preventDefault();
    employee.firstName = this.first_name.value;
    employee.lastName = this.last_name.value;
    employee.employeeNumber = this.employee_number.value;
    employee.jobTitle = this.job_title.value;
    employee.lastReviewScore = this.review_score.value;
    employee.salary = this.salary.value;

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
