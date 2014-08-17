Directory.View = function(){}

Directory.View.prototype = {
	animate1: function(){
		//this.timeMeOut()
		//this.renderNext()
	},
	animate2: function(data) {
		this.clearDom();
		var currentFolder = data.master
		this.appendCurrentFolder(currentFolder)
		data.branches.forEach(function(folder){
			$('#directory-template').append("<li><img class='folder-icon' src='images/folder.png'><span class='folder-text'>" + folder + "</span></li>")
		});
	},
	// timeMeOut: function() {
	// 	setTimeout(this.renderNext, 5000);
	// },
	// renderNext: function(){
	// 	$(document).trigger('changeLevel', )
	// }

	clearDom: function(){
		$('#directory-template li').hide();
	},
	appendCurrentFolder: function(data){
		$('.current-folder').text(data)
	}
}


Directory.Controller = function(view){
	this.view = view;
}

Directory.Controller.prototype = {
	init: function() {
		this.bindListeners();
	},
	bindListeners: function() {
		$(document).on('changeLevel', function(event, data){
			this.data = data;
		}.bind(this));

		$(document).on('success', function(){
			this.checkLevel(this.data)
		}.bind(this));
	},

	checkLevel: function(data) {
		var id = data.id
		var createFunction = "this.view.animate" + id
		var animateThis = eval(createFunction).bind(this.view);
		if(typeof(animateThis) === "function"){
			animateThis(data)
		}
	}

}
