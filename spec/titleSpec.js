describe("TitleController", function() {
  it("should render the correct title when prompted", function() {
    var data =  { "Title" : "Print Working Directory" }
    var view = new BustinBash.Title.View()
    new BustinBash.Title.Controller(view).init()
    spyOn(view, 'render');
    $(document).trigger('changeLevel', data )
    expect(view.render).toHaveBeenCalledWith('Print Working Directory');
    $(document).unbind('changeLevel')
  })
})

