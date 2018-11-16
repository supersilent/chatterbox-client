var App = {
  $spinner: $(".spinner img"),

  username: "anonymous",

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    Parse.create('aaaaaaaaaaaaaaaaa');
  },

  fetch: function(
    callback = data => {
      console.log('test');
      $(".chats").append(`<p> test </p>`);
    }
  ) {
    Parse.readAll(data => {
      // examine the response from the server request:
      console.log(data.results);
      for (const item of data.results) {
        $("#chats").append(`<p><b>${item.username}</b> ${item.text} ${item.createdAt} </p>`);
      }
      callback(data);
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut("fast");
    FormView.setStatus(false);
  }
};
