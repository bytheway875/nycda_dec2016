function change(){
  document.getElementById('myElement').innerHTML = "My New Text";
}

function promptMe() {
  var name = prompt('What is your name?');
  var greeting = `Hello, ${name}.`;
  document.getElementById('myElement').innerHTML = greeting;
}

if("shannon" == "cool"){
  alert('so cool!');
} else {
  alert('what a loser!');
}
