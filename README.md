# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?
   > The Kids.js module is where the event listener for kids is setup and ran. It is first declared that the type of event listener will be a "click", because of the click in quotes, and then the on the next line works as an argument for a function. We then initialize clickedItem as a variable storing the clickEvent.target which basically means whatever element we clicked on is stored there. We then run an if statement to access the hidden state of the clicked item and check the dataset for the type of "child". If this is the correct type, the event then runs a window alert displaying the name hidden state name of the clicked item, which can be seen when we use the string interpolation of "${clickedItem.dataset.name}" to display the name hidden state, then the rest of the message with the string interpolation of "${clickedItem.dataset.wish}" which is displaying the hidden state wish of the clicked item.
2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?
   > Because the for..of loop iterated over the entire array of kids, updating the argument passed to the findCelebrityMatch function to the current kid in the loop. If it was outside the for..of loop it would only use the first kid as an argument, and everytime the "kidStar" is accessed for it's property values, it would only be on celebrity so they would all be the same values.
3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?
   > So to display the sport of the celebrity in the window alert, you access the hidden state of the clicked target and display it through string interpolation with ${itemClicked.dataset.sport} which basically means access the dataset of the clicked celebrity and find the data assigned to sport and display it.
4. Can you describe, in detail, the algorithm that is in the `main` module?
   > The first thing in the main module is const mainContainer = document.querySelector("#container") which is saying find an element with the id of "container" as # is the css code for id. The query selector method can select any element, which is why the id and name of the id are passed into it in the parenthesis so it only finds that element. It then assigns that to the variable mainContainer. it then initializes an variable called applicationHTML and set its to a string of html which is structured where it is invoking three function in a article with the class "details". These three functions have they're own sections or articles, with classes explaining more of what will be included in the section or article it's in. These functions all return HTML strings. with Kids() returning HTML to display a list of the kids on the webpage, Celebrities() to display a list of the celebrities. and Pairings() to display the assignment of every kid to a celebrity and their wish. The reason this variable is able to actually change the DOM of the HTML is because at the end of the main module they have mainContainer.innerHTML = applicationHTML. The .innerHTML method means "update the dom of whatever is selected with whatever is on the other side of the equal sign". In this instance, they set the mainContainer variables inner HTML to the applicationHTML variable, changing the inner HTML of the mainContainer with the applicationHTML variable which houses all the HTML that I talked about earlier.
