//------- View -----------
BustinBash.Lessons.View = function() {}

BustinBash.Lessons.View.prototype = {
  render: function(navigationButton) {
    $('#navbar_popup').append(navigationButton)
}
}

//----- Controller -------

BustinBash.Lessons.Controller = function(view) {
  this.view = view;
}

BustinBash.Lessons.Controller.prototype = {
 init: function() {
  this.bindListeners();
 },

 bindListeners: function() {
  $(document).on('getData', function(event, data) {
      this.db = data
      this.createNavigationButtons(data);
    }.bind(this))
},

 createNavigationButtons: function(data) {
  var lessonArray = Object.keys(data)
  for (var i = 0; i < lessonArray.length; i++) {
    this.view.render("<div class='tooltip levels' id='" + lessonArray[i] + "' data-tooltip-content='" + data[lessonArray[i]].Title + "'><img class='little' src='images/terminal.png'></div>")
  }
}
}