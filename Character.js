const readLine = require('readline-sync');

let diceRolled = [];
let character1={
//empty to start  
}

createChar(character1, diceRolled);

function rolld6(){
    return Math.ceil(Math.random()*6);
}

function rollDice(amount, list){
    for (let i =0; i<amount; i++){
        let roll = rolld6();
        console.log(`You rolled a ${roll}!`);
        list.push(roll);
    }
}

function sum(list){
    let sum = 0;
    for (let i=0; i<list.length; i++){
        sum+=list [1]
    }
    return sum;
}

function rollStat(list){
    list=[];
    rollDice(4, list);
    return sum(list);
}

function createChar(character, list){
    character.name = readLine.question("Enter character name: ");
    console.log("Rolling STR");
    character.strength = rollStat(diceRolled);
    console.log("Rolling DEX");
    character.dexerity = rollStat(diceRolled);
    console.log("Rolling CON");
    character.constitution = rollStat(diceRolled);
    console.log("Rolling INT");
    character.intelligence = rollStat(diceRolled);
    console.log("Rolling WIS");
    character.wisdom = rollStat(diceRolled);
    console.log("Rolling CHA");
    character.charisma = rollStat(diceRolled);
    console.log("Rolling MA");
    character.mana = rollStat(diceRolled);
    console.log("Rolling SPE");
    character.speed = rollStat(diceRolled);
    console.log("Rolling MAS");
    character.mastery = rollStat(diceRolled);
    console.log(character);
    displayChar(character);
}

function displayChar(char){
    console.log('-----------------------');
    console.log(`Name: ${char.name}`);
    console.log(`STR: ${char.strength}`);
    console.log(`DEX: ${char.dexerity}`);
    console.log(`CON: ${char.constitution}`);
    console.log(`INT: ${char.intelligence}`);
    console.log(`WIS: ${char.wisdom}`);
    console.log(`CHA: ${char.charisma}`);
    console.log(`MA: ${char.mana}`);
    console.log(`SPE: ${char.speed}`);
    console.log(`MAS: ${char.mastery}`);
    console.log(': ${char.}');
    console.log('-------------------------');
} 