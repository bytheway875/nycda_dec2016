
// This function, when called, will pop an alert box that says "whatever."
function popAlert(){
  alert("whatever");
}

// This function, when called, will pop an alert that passes the content of whatever is passed as the whatever parameter
function popAlert(whatever){
  alert(whatever);
}

// This function provides examples of various ways to find and get information from an H1 using native javascript and jQuery.
function findH1(){
  // Native JS: Gets a COLLECTION of h1 elements.
  // Then grabs the first node, and gets the value of the innerHTML property of the DOM OBJECT using dot notation.
  console.log(document.getElementsByTagName('h1')[0].innerHTML);
  // Native JS: Gets a COLLECTION of h1 elements.
  // Then grabs an indivual node node from the array-like NodeList,
  // and gets the value innerText property of the DOM OBJECT using dot notation.
  console.log(document.querySelectorAll('h1')[0].innerText);
  console.log(document.querySelectorAll('h1')[1].innerText);

  // So, what's the difference beween innerHTML and innerText? innerText will ONLY give you the text inside of the node. innerHTML will also provide any additional html. So, if we had an html element:
  // <h1><span>Content</span></h1>
  // innerHTML would return <span>Content</span>
  // innerText would return Content

  // There is no EASY way in native Javascript to use one property or method to get the content of ALL h1s on the page at once, but there is a simple way to do this using jQuery.

  // JQuery: Find ALL the h1 tags, and log ALL the text from ALL the h1 tags
  console.log($('h1').text());
  // JQuery: Find ALL the h1 tags, then log ALL the html from ALL the h1 tags
  console.log($('h1').html());

  // So, how do you get the text or html from just ONE element using jQuery?
  // If you uncomment the following line of code, you'll notice that it will // break your page.
  // console.log($('h1')[0].text()); // doesnt work, will throw an error

  // Why doesn't that ^^ work? Well, its because the RETURN VALUE of $('h1') // in jQuery and document.getElementByTagName('h1') in native JS is a little
  // bit different. You can see in your console that they arent quite the same:
  // Returns an HTML collection
  console.log(document.getElementsByTagName('h1'));
  // > [h1#greeting, h1#goodbye, greeting: h1#greeting, goodbye: h1#goodbye]

  // Returns a JQuery object
  console.log($('h1'))
  // > [h1#greeting, h1#goodbye, prevObject: r.fn.init[1]]

  // The major difference is that the JQuery object includes a ton of helpful // functions that you can call on the object to manipulate the DOM or get // information about your elements.

  // But, you can only use those methods on the jQuery Object, NOT on its elements. Thus,
  // console.log($('h1').text()); // returns all text from h1 elements
  // but
  console.log($('h1')[0].text()); // throws an error because you are calling a jQuery method on an object that does not know what that method means!

  // If you want to be able to call jQuery methods on an element, you need to turn your element into a jQuery object:
  var firstH1 = $('h1')[0];
  console.log($(firstH1).text());
  // (doing something like this would be helpful if you were looping through ALL h1s and wanted to call a jQuery method on each element.)

  // BUT, that's pretty ugly! If we know that we want to access a SPECIFIC h1, it's much better AND simpler to give our element an id, and get back a jQuery object with just ONE item in it. Now when we call $().text(), we know our JQuery object will give us only th element we're looking for, and we can get the text of just that element.
  console.log($('#greeting').text());


}


// Purpose: This function will find the element with an Id of greeting and
// change the text of that element to be "Welcome!".
// When you give $().text() an argument, it will change the value of the text.
// Without an argument, it returns the existing text content!

// arguments: none
// return value: undefined
function changeGreetingToWelcome(){
  $('#greeting').text('Welcome!');
}
// Purpose: This function will find the element with an Id of greeting and change the value to the greetingText provided. If you do not pass in an argument, it will set the content to an empty string.

// argument greetingText(string): The content you want to set as the new greeting text. There is a default value of "".
// return value: greetingText
function changeGreeting(greetingText = ""){
  $('#greeting').text(greetingText);
  return greetingText;
}

// Purpose: This function hides an h3 with the id of hide.
// returns: undefined
function hideH3(){
  $('#hide').hide();
}

// This is an alternate syntax for creating the function above.
// No matter which syntax you use, you can still access the CONTENT of the function using the variable hideH3.
var hideH3 = function(){
  $('#hide').hide();
}

// Purpose: To show more information about DOM Manipulation methods

function DOMManipulationExample(){
  // DOM manipulation methods like fadeIn(), hide(), show(), etc take two OPTIONAL arguments.
  // The first argument dictates how long the animation should take. Here, we set it to be 1000ms, which is a bit longer than the default that would be
  // used if you did not pass the argument.
  // The second argument is a callback function that will be executed AFTER the function you've called has run.
  $('#hide').hide(/*duration*/, /*callbackFunction*/)
  $('#hide').hide();
  $('#hide').hide(1000);
  // In this example, it will take a second to hide the element. After the element is hidden, the changeGreetingToWelcome method will be executed.
  $('#hide').hide(1000, changeGreetingToWelcome);

  // You can imagine that the definition of the hide function in JQuery might
  // look something like this:
      /*
      function hide(duration, callbackFunction){
        // some code that makes the hide happen.
        callbackFunction();
      }
      */
  // Notice that the final thing that happens in the block of code above is that the callbackFunction is executed!
}

}

// Purpose: This function will fadeIn the element with id of hide.
function fadeInH3(){

  $('#hide').fadeIn(1000);
}

/*
  Introducting setTimeout:

  setTimeout() is a function that allows you to delay the execution of a method for a given amount of time. For example:

    setTimeout(callbackFunction, 2000);

  will execute callbackFunction (callbackFunction()) after 2000ms (2 seconds).

  The format is:
    setTimeout(callbackFunction, delayInMS)

  where the callbackFunction can either be the variable name of a function you've defined
    ex: fadeInH3
  OR an anonymous function
    ex: function(){ alert('hello'); }

  But what if you want to pass a function that takes some arguments? For example, our changeGreeting function. Well, there's a bit of a gotcha there: There's no mechanism that allows you to pass additional paramenters to setTimeout. For example, this is NOT VALID:

  // not valid code!
    setTimeout(changeGreeting, 'my greeting', 3000);

  setTimeout just doesn't know what to do with this!

  So you might think about trying this:

  // not valid code!
    setTimeout(changeGreeting('my greeting'), 3000);

  setTimeout will invoke changeGreeting immediately, and attempt to use the RETURN VALUE of that function as the callback. And that's NOT what we want.

  Instead, we have two options:

    setTimeout("changeGreeting('my greeting')", 3000);

  Why/How Does THAT Work ^^?
  Behind the scenes here, JavaScript says "hmm... this argument that is supposed to be a callback function doesn't look much like a function to me! It looks like a string! Let me see if I can turn this string into a function using another called eval()".
    > eval("changeGreeting('my greeting')")
  eval() is a very powerful function, but it's also pretty dangerous. So while this is valid code, you'll want to be careful about how you use it!

  The SAFEST way to use a function with parameters as a callback in setTimeout is to create an anonymous function that employs a variable that is defined elsewhere.

  var greeting = "myGreeting";
  setTimeout(function(){
    $('#greeting').text(greeting);
  }, 3000);


*/


// Purpose: This function employs setTimeout to wait one second before executing the fadeInH3 function.
function fadeInH3AfterOneSecond(){
  setTimeout(fadeInH3, 1000);
}

// Purpose: This function is an example of executing a domManipulation function using an explicit duration AND a callback function!
function hideThenShowH3(){
  $('#hide').hide(400, fadeInH3AfterOneSecond);
}

/*
  Why $(document).ready(); ?

  Content on your html page loads in the order it is placed in the DOM, from the top down. This means that all of your code in your <head> tag is loaded first, then all of the code in the <body>.

  Sometimes this is fine and causes no problems. But sometimes it creates a headache, especially when we're importing js through a script tag in the header: by default, ALL of the code in a JS file will be executed as soon as the script is loaded! And if your JS looks for DOM elements, they won't exist yet because the rest of the HTML document is not ready!

  Using native JS, the "solution" to this problem is to move the <script> tag from the beginning of your <head> to the end of the <body>. But jQuery provides a more elegant solution: $(document).ready()

  $(document).ready() takes one argument: a callbackFunction.

  Usually, people just wrap all of the code they want to execute in a big anonymous function and pass it to document.ready():
    $(document).ready(function(){
      // all the code you want to execute on your page goes in here.
    });
*/

$(document).ready(function(){
    findH1();
    var greetingText = "Wonderful Text"

    // Lines 214 - 216 do the same thing as line 218.
    setTimeout(function() {
      $('#greeting').text(greetingText);
    }, 3000)

    setTimeout("changeGreeting('Wonderful Text')", 3000);

    // These lines of code do something very similar to hideThenShowH3(),
    // but it is more bug prone because the invokation of fadeInH3 happens
    // independently of the invokation to h3.
    // Image your boss asked you to wait 6 seconds to hide the h3. You'd have
    // setTimeout(hideh3, 6000)
    // setTimeout(fadeInH3, 5000),
    // which would mean you'd be trying to fadeIn the element BEFORE you hid it... and nothing would happen on your screen.

    setTimeout(hideH3, 4000); //hides h3 after 4 seconds
    setTimeout(fadeInH3, 5000); // fadeIn after 5 seconds, 1 second after its faded out

    // Take a look at the function definition above to see how
    // the fadeIn() is executed AFTER the hide() functionality completes!
    hideThenShowH3();

    /*
        You can, of course, execute any function you've created without
        wrapping it in a setTimeout()! This would hide the h3 almost
        immediately when the page loads.
    */
    // hideH3();

    /*

      If you uncomment the popAlert() invokation here, you'll notice that
      the alert box pops open BEFORE a lot of the other code on the page is
      executed. That's because Javascript executes everything within your
      function as a single event, and some of the functions end up running
      faster than others. When the alert gets popped, it interrupts the rest
      of the code running on the page and waits for you to close the alert
      before it can finish executing the code on the rest of the page!
    */
    // popAlert();
});
