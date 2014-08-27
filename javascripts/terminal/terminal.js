//------ View --------

BustinBash.Terminal.View =function() {}

BustinBash.Terminal.View.prototype = {
  input: function() {
    return $('input').val();
  },

  renderSuccess: function(value, input) {
    var source   = $("#terminal-success-template").html();
    var template = Handlebars.compile(source);
    var context  = {success: value, input: input};
    var text     = template(context);
    this.updateDOM(text);
    this.resetDOM();
  },

  renderError: function(value, input) {
    var source   = $("#terminal-error-template").html();
    var template = Handlebars.compile(source);
    var context  = {error: value, input: input};
    var text     = template(context);
    this.updateDOM(text);
    this.resetDOM();
  },

  renderLS: function(branches){
    branches.forEach(function(branch){
      this.updateDOM("<div>" + branch + "</div>")
    });
    this.resetDOM();
  },

  updateDOM: function(text) {
    $('.feed').append(text)
  },

  resetDOM: function() {
    $('input').val("");
    $('.feed').scrollTop($('.feed')[0].scrollHeight);
  }
}

//----- Controller ------

BustinBash.Terminal.Controller = function(view) {
  this.view = view;
}

BustinBash.Terminal.Controller.prototype = {
  init: function() {
    this.bindListeners();
  },
  bindListeners: function() {
    $(document).on('changeLevel', function(e, data) {
      this.data = data;
    }.bind(this));

    $('.terminal').keypress(function(e) {
     if (e.which === 13) {
      this.checkInput(this.data)
    }
  }.bind(this));
    $('.terminal').on('click', function(e){
      this.focusInput();
    }.bind(this));
  },

  checkInput: function(data) {
    var input = this.view.input()
    if(input === this.data.Answer) {
      $(document).trigger('success', function() {
        return this.data;
      }.bind(this));
      this.view.renderSuccess(this.data.Success)
    } else if(input === 'ls') {
      this.view.renderLS(this.data.Branches)
    }
    else {
      this.view.renderError(this.data.Error, input)
    }
  },

  focusInput: function(){
    $('#terminal-input').focus();
  }
}
