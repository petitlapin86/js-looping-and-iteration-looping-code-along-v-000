// Code your solutions in this file
 function printBadges (names) {
for (let counter = 0; counter < names.length; counter++) {
  console.log(`Welcome ${names[counter]}! You are employee #${counter + 1}.`);
}

return names;
}



function tailsNeverFails (tails) {
  return Math.random() >= 0.5;
}

  while (tailsNeverFails (tails)) {
    console.log("You got ${tails} tails in a row!");
  }

