function getComputerChoice() {
    const choices =["rock","paper","scissors"];
    const randomIndex = Math.floor(Maths.random()*choices.length);
    return choices[randomIndex];
}
console.log(getComputerChoice());

function getHumanChoice() {
  return prompt("Enter rock, paper, or scissors:");
}
console.log(getHumanChoice());