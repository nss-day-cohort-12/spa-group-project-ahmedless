// Create multiple IIFEs, following the Single Responsibility Principle, that perform the following functions. The name of your global variable that gets augmented by the IIFEs should be Chatty.

// One IIFE should load the JSON file and returns the array of objects.
// One IIFE should accept an element id, and the user message, and then add the user's message - along with the delete button - to the specified parent element. Each message should be stored in a private array in this IIFE. This IIFE should expose a function to read all messages, and delete a single message.
// One IIFE should accept a message element id and then remove the correct element from the DOM. This IIFE should also remove the corresponding message from the private array that was created in the previous IIFE.

var Chatty = (function (oldChatty) {

	oldChatty.deleteMessage = function(messageId) {

		var messageNow = oldChatty.getMessages();

		console.log("messageId: ", messageId);

		for (var i = 0; i < messageNow.length; i++) {
			var currentMessage = messageNow[i];
			if (currentMessage.id === messageId) {
				messageNow.splice(i, 1); // Delete from array (in some form)
				console.log("Modded/Deleted messageNow: ", messageNow);
			}
		}
	}

	
	return oldChatty;
	
})(Chatty);


