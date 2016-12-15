// With jQuery, we wrap everything in $(document).ready().
// Now, none of our script will execute until the DOM has finished
// rendering (aka the page has finished loading).

// $ is the global jQuery object, which takes document as its argument.
// Then we execute the function ready() on the object.
// Finally, we pass an anonymous function that includes all of our js and jquery in as the first argument of ready(), and it is evaluated as a big old callback function.

$(document).ready(function(){
  var staticCollection = document.querySelectorAll(".post");
	console.log(staticCollection.length) // 6

	var liveCollection = document.getElementsByClassName("post");
	console.log(liveCollection.length) // 6

	function appendNewPost(){
		var postsContainer = document.getElementById("container");

		var newPost = document.createElement("div");
	  newPost.className = "post";
	  newPost.appendChild(document.createTextNode("A New Post"));

		postsContainer.appendChild(newPost);

		console.log(staticCollection.length) //6
		console.log(liveCollection.length) // 7

	}

	// This is an example of how a function can take another function as an argument. You pass the NAME of the function (or an anonymous function) as the argument, and then the function is executed in the body.
	function functionExecutor(functionName){
		return functionName();
	}

	// This simply calls appendNewPost()
	functionExecutor(appendNewPost);

	// We pass an anonymous function as the argument, and functionExecutor will execute it.
	functionExecutor(function(){ alert("hi") });

});












// function argumentTest(arg){
//   console.log(arguments[0] === arg)
//   console.log(arguments)
//   var arg = arg
//   console.log(arguments)
//   arg = "something new"
//   console.log(arguments)
//   console.log("Value of arg", arg)
//   console.log("Value of argument[0]", arguments[0])
// }
