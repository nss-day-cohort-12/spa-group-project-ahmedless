Chatty.loadMessages(Chatty.writeMessage);


var userInput = document.getElementById("userInput");

userInput.addEventListener("keypress", function(event){
	var userVal = userInput.value;
	if (event.which === 13) {
		var arrayLength = Chatty.getMessages().length;
		console.log("arrayLength: ", arrayLength);
		Chatty.writeMessage(userVal, arrayLength);
	}
});

document.querySelector("body").addEventListener("click", function(event) {
  console.log("event target: ", event.target);
  console.log("event target ClassList: ", event.target.classList);
  // console.log("event target: ", event.target);

  // Handle the click event on any DOM element with a certain class
  if (event.target.classList.contains("message")) {
    console.log("You clicked on an `message` element");
    console.log("id attempt", event.target.id);
  }
  if (event.target.classList.contains("deleteButton")) {
    console.log("You clicked on an `deleteButton` element");
    console.log("id attempt", event.target.id);
    console.log("id attempt", event.target.id);
    console.log("event.currentTarget: ", event.currentTarget);
  }

});