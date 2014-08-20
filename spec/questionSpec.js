describe("QuestionController", function() {
  it("should render the correct question when prompted", function() {
    var data =  { "Question" : "Question" }
    var view = new BustinBash.Question.View()
    new BustinBash.Question.Controller(view).init()
    spyOn(view, 'render');
    $(document).trigger('changeLevel', data )
    expect(view.render).toHaveBeenCalledWith('Question');
    $(document).unbind('changeLevel')
  })
})