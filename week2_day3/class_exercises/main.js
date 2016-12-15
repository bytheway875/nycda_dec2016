function changeHeader(event){
  // Some actions (like submit) pass the event object.
  // Some actions (like input) do not pass the event object.
  // You can't prevent default of something that doesn't exist!!
  if (event){
    console.log(event)
    event.preventDefault();
  }
  var firstNameElement = document.getElementById('first-name');

  // grab value of the first name input
  // set equal to a variable.
  var firstName = firstNameElement.value;

  // grab the header html element
  var headerHtmlElement = document.getElementById('header');

  // set innerHTML value of the header element
  // equal to the variable that holds the value
  // of the first name input.
  headerHtmlElement.innerHTML = "Welcome, " + firstName + ".";
}

// document.getElementById('my-form').addEventListener("submit", changeHeader);

//addEventListener(eventListeningFor, callbackFunction)

// submit
// click







// document.getElementById("my-form").addEventListener("submit", changeHeader)
