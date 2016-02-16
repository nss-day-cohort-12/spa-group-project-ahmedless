Chatty.loadMessages(Chatty.writeMessage);

// DOM variables
var container = document.getElementById("container");
var clearButton = document.getElementById("clearButton");
var largeTextCheck = document.getElementById("largeText");
var darkThemeCheck = document.getElementById("darkTheme");

largeTextCheck.addEventListener("change", function(){
  container.classList.toggle('largeText');
});

darkThemeCheck.addEventListener("change", function(){
  container.classList.toggle('darkTheme');
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
  container.innerHTML = `<div class="panel-heading">Messages: </div>`;
  clearButton.setAttribute("disabled", true);
  var messages = Chatty.getMessages();
  console.log("messages: ", messages);
  for (var i = 0; i < messages.length; i++) {
    var currentMessage = messages[i];
    console.log("currentMessage: ", currentMessage.id);
    Chatty.deleteMessage(currentMessage.id);
  }
  console.log("cleared privateMessages: ", Chatty.getMessages());
});

// Bubbling event listener
document.querySelector("body").addEventListener("click", function(event) {
  console.log("event target: ", event.target);

  if (event.target.classList.contains("deleteButton")) {
    var messageDivId = parseInt(event.target.parentNode.previousSibling.id);
    console.log("messageDivId: ", messageDivId);
    var messageRow = event.target.parentElement.parentElement.parentElement.parentElement;
    console.log("messageRow: ", messageRow);
    messageRow.remove();
    Chatty.deleteMessage(messageDivId);
  }

});

