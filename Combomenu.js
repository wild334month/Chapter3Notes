const readLine = require('readline-sync')
let sandwichType = prompt("What type of sandwich would you like? You can choose from: chicken ($5.25), beef ($6.25), or tofu ($5.75).");

console.log("You selected the " + sandwichType + " sandwich.");

let totalCost = 0;

switch (sandwichType.toLowerCase()) {
    case "chicken":
        totalCost += 5.25;
        break;
    case "beef":
        totalCost += 6.25;
        break;
    case "tofu":
        totalCost += 5.75;
        break;
    default:
        console.log("Invalid sandwich type selected.");
        break;
}


let beverageChoice = prompt("Would you like a beverage? Please answer yes or no.");

let beverageSize, beveragePrice = 0;

if (beverageChoice.toLowerCase() === "yes") {
    beverageSize = prompt("What size beverage would you like? You can choose from: small ($1.00), medium ($1.75), or large ($2.25).");

    switch (beverageSize.toLowerCase()) {
        case "small":
            beveragePrice = 1.00;
            break;
        case "medium":
            beveragePrice = 1.75;
            break;
        case "large":
            beveragePrice = 2.25;
            break;
        default:
            console.log("Invalid beverage size selected.");
            break;
    }

    console.log("You selected a " + beverageSize.toLowerCase() + " beverage, which costs $" + beveragePrice.toFixed(2) + ".");
    totalCost += beveragePrice;
} else {
    console.log("You did not select a beverage.");
}


let friesChoice = prompt("Would you like french fries? Please answer yes or no.");

let friesSize, friesPrice = 0;

if (friesChoice.toLowerCase() === "yes") {
    friesSize = prompt("What size french fries would you like? You can choose from: small ($1.00), medium ($1.50), or large ($2.00).");

    switch (friesSize.toLowerCase()) {
        case "small":
            let megaSizeChoice = prompt("Would you like to mega-size your fries for an additional $1.00? Please answer yes or no.");
            if (megaSizeChoice.toLowerCase() === "yes") {
                friesPrice = 2.00;
            } else {
                friesPrice = 1.00;
            }
            break;
        case "medium":
            friesPrice = 1.50;
            break;
        case "large":
            friesPrice = 2.00;
            break;
        default:
            console.log("Invalid french fries size selected.");
            break;
    }

    console.log("You selected " + friesSize.toLowerCase() + " french fries, which costs $" + friesPrice.toFixed(2) + ".");
    totalCost += friesPrice;
} else {
    console.log("You did not select french fries.");
}

console.log("Total cost so far: $" + totalCost.toFixed(2));
