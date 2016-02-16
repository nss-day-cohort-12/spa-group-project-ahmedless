var Chatty = (function (oldChatty) {
	var privateMessages = [];

	// function to store user message into privateMessages array and add it to DOM
	oldChatty.writeMessage = function (userMessage, elementId) {

		// Declare empty string
		var writeToDOM = "";

		// Add "row" div (for Bootstrap) and inside it a div and button
		writeToDOM += `<div class="row">` +
										`<div class="col-md-12">` +
											`<div class="input-group">` +
												`<div class="message form-control" id="${elementId}">${userMessage}</div>` +
												`<span class="input-group-btn"><input class="deleteButton btn btn-default" type="button" value="Delete"></span>` +
											`</div>` +
										`</div>` +
									`</div>`;

		// Declare new object with the same setup as the original JSON data objects, adding new Counter ID as a property
		var newMessage = {
			"genus": userMessage,
			"id": idCounter
		};
		console.log("newMessage: ", newMessage);
		privateMessages.push(newMessage);
		console.log("privateMessages: ", privateMessages);
		container.innerHTML += writeToDOM;
		// Enable Clear Button upon each message add
		clearButton.removeAttribute("disabled");
		// Increment Counter (global)
		idCounter++; 
	},

	// Public Getter for privateMessages array
	oldChatty.getMessages = function() {
		return privateMessages;
	},

	// Public Clear for privateMessages array
	oldChatty.deleteAll = function() {
		privateMessages = [];
	}

	return oldChatty;
	
})(Chatty);