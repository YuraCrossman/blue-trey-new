var config = {
        apiKey: "AIzaSyAaI8-0Y8C85pnd5pVQrxAeiU3WGObamAM",
        authDomain: "blue-trey-default-rtdb.firebaseio.com",
        databaseURL: "https://blue-trey-default-rtdb.firebaseio.com",
        projectId: "blue-trey-default-rtdb",
        //messagingSenderId: "56730489319"
      };
firebase.initializeApp(config);
var myDataRef = firebase.database().ref('chat');
      $('#messageInput').keypress(function (e) {
        if (e.keyCode == 13) {
          var name = $('#nameInput').val();
          var text = $('#messageInput').val();
          // myDataRef.push({name: name, text: text});
          myDataRef.push({
              name: name,
              text: text
          });
          $('#messageInput').val('');
        }
      });
      myDataRef.on('child_added', function(snapshot) {
        var message = snapshot.val();
        displayChatMessage(message.name, message.text);
      });
      myDataRef.on('child_removed', function(snapshot) {
        var deletedPost = snapshot.val();
        console.log("Chat was removed", deletedPost);
      });
      function displayChatMessage(name, text) {
        $('<div/>').text(text).prepend($('<em/>').text(name+': ')).appendTo($('#messagesDiv'));
        $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
};
