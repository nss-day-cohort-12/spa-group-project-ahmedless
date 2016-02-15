// Create multiple IIFEs, following the Single Responsibility Principle, that perform the following functions. The name of your global variable that gets augmented by the IIFEs should be Chatty.

// One IIFE should load the JSON file and returns the array of objects.
// One IIFE should accept an element id, and the user message, and then add the user's message - along with the delete button - to the specified parent element. Each message should be stored in a private array in this IIFE. This IIFE should expose a function to read all messages, and delete a single message.
// One IIFE should accept a message element id and then remove the correct element from the DOM. This IIFE should also remove the corresponding message from the private array that was created in the previous IIFE.


// Put this in events.js
var container = document.getElementById("container");



var Chatty = (function (oldChatty) {
	var privateMessages = [];

	// function to store user message into privateMessages array and add it to DOM
	oldChatty.writeMessage = function (userMessage, elementId) {

		// Declare empty string
		var writeToDOM = "";

		// Add "row" div (for Bootstrap) and inside it a div and button
		writeToDOM += `<div class="row">` +
								`<div class="col-md-6 message" id="${elementId}">${userMessage}</div>` +
								`<input class="col-md-1 deleteButton" type="button" value="Delete">` +
								`</div>`;
		// declare new object with the same setup as the original JSON data objects
		var newMessage = {
			"genus": userMessage
		};
		console.log("newMessage: ", newMessage);
		privateMessages.push(newMessage);
		console.log("privateMessages: ", privateMessages);
		container.innerHTML += writeToDOM;
	},

	oldChatty.deleteMessage = function(messageId) {
		var deleteTarget = document.getElementById(messageId).innerHTML;
		console.log("deleteTarget: ", deleteTarget);
		for (var i = 0; i < privateMessages.length; i++) {
			var currentMessage = privateMessages[i];
			if (currentMessage === deleteTarget) {
				privateMessages.splice(i, 1); // Delete from array (in some form)
				console.log("Modded/Deleted privateMessages: ", privateMessages);
			}
		}
	},

	oldChatty.getMessages = function() {
		return privateMessages;
	}

	return oldChatty;
	
})(Chatty);