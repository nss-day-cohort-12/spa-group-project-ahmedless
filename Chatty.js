// Create multiple IIFEs, following the Single Responsibility Principle, that perform the following functions. The name of your global variable that gets augmented by the IIFEs should be Chatty.

// One IIFE should load the JSON file and returns the array of objects.
// One IIFE should accept an element id, and the user message, and then add the user's message - along with the delete button - to the specified parent element. Each message should be stored in a private array in this IIFE. This IIFE should expose a function to read all messages, and delete a single message.
// One IIFE should accept a message element id and then remove the correct element from the DOM. This IIFE should also remove the corresponding message from the private array that was created in the previous IIFE.

console.log("JS is working");

// the variable Chatty has the value of an object, because it has an object returned to it.

var Chatty = (function () {
	var privateMessages = [];
	return {
		loadMessages: function (callBackFunction) {
			var loader = new XMLHttpRequest();
			loader.addEventListener("load", function() {
				privateMessages = JSON.parse(this.responseText).msgList;
				console.log("privateMessages", privateMessages);

				callBackFunction(privateMessages);
			});

			loader.open("GET", "messages.json");
			loader.send();
		}
	}
})();

Chatty.loadMessages();

