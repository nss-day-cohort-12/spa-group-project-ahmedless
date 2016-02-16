
// DOM variables
var container = document.getElementById("container");
var clearButton = document.getElementById("clearButton");
var largeTextCheck = document.getElementById("largeText");
var darkThemeCheck = document.getElementById("darkTheme");
var userInput = document.getElementById("userInput");

// Large Text Mode
largeTextCheck.addEventListener("change", function(){
  container.classList.toggle('largeText');
});

// Dark Theme Mode
darkThemeCheck.addEventListener("change", function(){
  container.classList.toggle('darkTheme');
});

// New counter variable (using "i" and length failed when messages were deleted)
var idCounter = 0;

// Enter keypress handler, increasing ID counter each time
userInput.addEventListener("keypress", function(event){
  var userVal = userInput.value;
  if (event.which === 13) {
    console.log("idCounter: ", idCounter);
    Chatty.writeMessage(userVal, idCounter);
    this.value = '';
  }
});

//Clear all messages button with disable, calling deleteAll
clearButton.addEventListener("click", function(){
  // Reset innerHTML to panel starter div, clearing all rows otherwise
  container.innerHTML = `<div class="panel-heading">Messages: </div>`;
  clearButton.setAttribute("disabled", true);
  Chatty.deleteAll();
});

// Bubbling event listener with if statement for delete buttons
document.querySelector("body").addEventListener("click", function(event) {

  if (event.target.classList.contains("deleteButton")) {
    var messageDivId = parseInt(event.target.parentNode.previousSibling.id);
    var messageRow = event.target.parentElement.parentElement.parentElement.parentElement;
    messageRow.remove();
    Chatty.deleteMessage(messageDivId);
  }

});

// Execute App Command
Chatty.loadMessages(Chatty.writeMessage);
