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


