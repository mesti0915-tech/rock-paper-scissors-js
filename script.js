function getComputerChoice() {
    const choices =["rock","paper","scissors"];
    const randomIndex = Math.floor(Maths.random()*choices.length);
    return choices[randomIndex];
}