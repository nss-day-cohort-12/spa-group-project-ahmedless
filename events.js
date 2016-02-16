Chatty.loadMessages(Chatty.writeMessage);

// DOM variables
var container = document.getElementById("container");
var clearButton = document.getElementById("clearButton");
var largeTextCheck = document.getElementById("largeText");
var darkThemeCheck = document.getElementById("darkTheme");

largeTextCheck.addEventListener("change", function(){
  container.classList.toggle('largeText');
});

var idCounter = 0;
// New counter variable (using "i" and length failed when messages were deleted)

var userInput = document.getElementById("userInput");

userInput.addEventListener("keypress", function(event){
	var userVal = userInput.value;
	if (event.which === 13) {
		console.log("idCounter: ", idCounter);
		Chatty.writeMessage(userVal, idCounter);
    this.value = '';
	}
});

//Clear all messages button with disable
clearButton.addEventListener("click", function(){
  var messageRows = container.querySelectorAll(".row");
  console.log("messageRows: ", messageRows);
  messageRows.remove();
  clearButton.setAttribute("disabled", true);
});

// Bubbling event listener
document.querySelector("body").addEventListener("click", function(event) {
  // console.log("event target: ", event.target);
  // console.log("event target ClassList: ", event.target.classList);
  // console.log("event target: ", event.target);

  // Handle the click event on any DOM element with a certain class
  // if (event.target.classList.contains("message")) {
  //   console.log("You clicked on an `message` element");
  //   console.log("id attempt", event.target.id);
  // }
  if (event.target.classList.contains("deleteButton")) {
    var messageRow = event.target.parentElement.parentElement.parentElement.parentElement;
    console.log("messageRow: ", messageRow);
    messageRow.remove();
  }

});

