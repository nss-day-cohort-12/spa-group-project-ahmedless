var Chatty = (function (oldChatty) {

	oldChatty.deleteMessage = function(messageId) {

		var messageNow = oldChatty.getMessages();

		console.log("messageId: ", messageId);
		for (var i = 0; i < messageNow.length; i++) {
			var currentMessage = messageNow[i];
			if (currentMessage.id === messageId) {
				messageNow.splice(i, 1); // Delete from array (in some form)
				console.log("Modded/Deleted messages: ", messageNow);
			}
		}
	}

	
	return oldChatty;
	
})(Chatty);


