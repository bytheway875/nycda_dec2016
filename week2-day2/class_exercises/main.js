//Loops!

// for(var i = 0; i<=10; i++){
//   console.log(i);
// }

// for loop
for(var i = 2; i<=12; i+=2){
  console.log(i);
}

for(var i = 2; i<=12; i++){
  if(i % 2 == 0){
    console.log(i);
  }
}

var friends = [["Kelly", "blue"], ["Shannon", "yellow"], ["Jimmy", "red"], ["Ross", "green"], ["Guy", "black"]];

// console.log(`${friends[0][0]} likes the color ${friends[0][1]}`);
// console.log(`${friends[1][0]} likes the color ${friends[1][1]}`);
// console.log(`${friends[2][0]} likes the color ${friends[2][1]}`);

for(var i = 0; i < friends.length; i++){
  console.log(`${friends[i][0]} likes the color ${friends[i][1]}.`);
}

var i = 0;
while(i < friends.length){
  console.log(`${friends[i][0]} likes the color ${friends[i][1]}.`);
  i++;
}
