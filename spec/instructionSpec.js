describe('InstcrutionController', function() {
  it('should render the correct instruction when prompted', function() {
    var data =  { 'Instructions' : 'Instruction' }
    var view = new BustinBash.Instruction.View();
    new BustinBash.Instruction.Controller(view).init()
    spyOn(view, 'render');
    $(document).trigger('changeLevel', data );
    expect(view.render).toHaveBeenCalledWith('Instruction');
    $(document).unbind('changeLevel');
  })
})