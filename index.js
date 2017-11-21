// Code your solutions in this file
function printBadges(arrayNames) {
  for(let i = 0; i < arrayNames.length; i++) {
    arrayNames[i]
    console.log(`Welcome ${arrayNames[i]}! You are employee #${i+1}.`)
  }
  return arrayNames
}

function cointoss() {
  return Math.random >= .5;

}

function tailsNeverFails() {
  let counter = 0;
  while(cointoss()) {
    counter++
return (`You got ${counter} tails in a row!`)
}
}
