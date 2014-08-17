Terminal.View =function(){}

Terminal.View.prototype = {
  input: function(){
    return $('input').val();
  },
  renderSuccess: function(value, input){
    var source   = $("#terminal-success-template").html();
    var template = Handlebars.compile(source);
    var context = {success: value, input: input}
    var text    = template(context);
    $('.feed').append(text)
    $('input').val("");

  },
  renderError: function(value, input){
    var source   = $("#terminal-error-template").html();
    var template = Handlebars.compile(source);
    var context = {error: value, input: input}
    var text    = template(context);
    $('.feed').append(text)
    $('input').val("");
  }

}

Terminal.Controller = function(view) {
  this.view = view;
}

Terminal.Controller.prototype = {
  init: function() {
    this.bindListeners();
  },
  bindListeners: function(){
    $(document).on('changeLevel', function(e, data){
      this.data = data;
    }.bind(this));

    $('.terminal').keypress(function(e){
     if (e.which === 13){
      this.checkInput(this.data)
    }
  }.bind(this))

  },
  checkInput: function(data){
    var input = this.view.input()
    if(input === this.data.Answer){
      $(document).trigger('success');
      this.view.renderSuccess(this.data.Success, input)

    } else {
      this.view.renderError(this.data.Error, input)
    }
  }
}
