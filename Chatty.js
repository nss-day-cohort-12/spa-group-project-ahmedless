// Create multiple IIFEs, following the Single Responsibility Principle, that perform the following functions. The name of your global variable that gets augmented by the IIFEs should be Chatty.

// One IIFE should load the JSON file and returns the array of objects.
// One IIFE should accept an element id, and the user message, and then add the user's message - along with the delete button - to the specified parent element. Each message should be stored in a private array in this IIFE. This IIFE should expose a function to read all messages, and delete a single message.
// One IIFE should accept a message element id and then remove the correct element from the DOM. This IIFE should also remove the corresponding message from the private array that was created in the previous IIFE.

console.log("JS is working");

// the variable Chatty has the value of an object, because it has an object returned to it.

var Chatty = (function () {

	return {
		loadMessages: function (callBackFunction) {
			var loader = new XMLHttpRequest();
			loader.addEventListener("load", function() {
				// declaring local variable to store parsed JSON
				var messageData = JSON.parse(this.responseText).msgList;
				console.log("privateMessages", messageData);
				// Loop through JSON array and invoke callback function on each item (should be Chatty.writeMessage, which accepts two arguments)
				for (var i = 0; i < messageData.length; i++) {
					// local counter variable
					var currentMessage = messageData[i];
					// currentMessage.genus is a string, idCounter is provided as the element ID
					callBackFunction(currentMessage.genus, idCounter);
					console.log("idCounter: ", idCounter);
				}
			});

			loader.open("GET", "messages.json");
			loader.send();
		}
	}
})();


