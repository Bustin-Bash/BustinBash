// describe("HintController", function() {
//   it("should render the correct hint when prompted", function(){
//     var data  = {'Hint': 'Hint'}
//     var view = new BustinBash.Hints.View()
//     new BustinBash.Hints.Controller(view).init()
//     spyOn(view, 'render');
//     $(document).trigger('changeLevel', data )
//     expect(view.render).toHaveBeenCalledWith('Hint');
//     $(document).unbind('changeLevel')
//   })
// })