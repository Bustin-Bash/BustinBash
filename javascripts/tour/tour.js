// Define the tour!
var tour = {
  id: "hello-hopscotch",
  steps: [
    {
      title: "Pick Your Level",
      content: "This is the header of my page.",
      target: "navbar_popup",
      placement: "bottom"
    },
    {
      title: "This is your question.",
      content: "Here is where I put my content.",
      target: "question_popup",
      // target: document.querySelector("#content p"),
      placement: "right"
    },
    {
      title: "This is your terminal.",
      content: "Here is where I put my content.",
      target: "terminal_popup",
      // target: document.querySelector("#content p"),
      placement: "bottom"
    },
    {
      title: "This is your directory.",
      content: "Here is where I put my content.",
      target: "directory_popup",
      // target: document.querySelector("#content p"),
      placement: "bottom" //maybe change
    }
  ]
};

// Start the tour!
// hopscotch.startTour(tour);
