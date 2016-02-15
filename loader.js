// Create multiple IIFEs, following the Single Responsibility Principle, that perform the following functions. The name of your global variable that gets augmented by the IIFEs should be Chatty.

// One IIFE should load the JSON file and returns the array of objects.
// One IIFE should accept an element id, and the user message, and then add the user's message - along with the delete button - to the specified parent element. Each message should be stored in a private array in this IIFE. This IIFE should expose a function to read all messages, and delete a single message.
// One IIFE should accept a message element id and then remove the correct element from the DOM. This IIFE should also remove the corresponding message from the private array that was created in the previous IIFE.


// Put this in events.js
var container = document.getElementById("container");



var Chatty = (function (oldChatty) {
	
	oldChatty.populatePage = function (allMessages) {
		var writeToDOM = "";
		for (var i = 0; i < allMessages.length; i++) {
			var currentMessage = allMessages[i];
			console.log("currentMessage",currentMessage);

			writeToDOM += 	`<div>${currentMessage.genus}</div>` +
							`<input type="button" value="Delete">`;
		};
		container.innerHTML = writeToDOM;
	}
	return oldChatty;
	
})(Chatty);


Chatty.loadMessages(Chatty.populatePage);



