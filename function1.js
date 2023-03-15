function findAreaOfRectangle(length, width) {
    let area = length * width;
    console.log(`The area of the rectangle with length ${length} and width ${width} is ${area}.`);
}
findAreaOfRectangle(5, 10); // Output: "The area of the rectangle with length 5 and width 10 is 50."
findAreaOfRectangle(7, 3); // Output: "The area of the rectangle with length 7 and width 3 is 21."


function findAreaOfCircle(radius) {
    const pi = 3.14;
    const area = pi * radius * radius;
    console.log("The area of a circle with radius " + radius + " is " + area);
}

findAreaOfCircle(5); // Outputs: The area of a circle with radius 5 is 78.5

function findMin(num1, num2) {
    if (num1 < num2) {
        return num1;
    } else {
        return num2;
    }
}

console.log(findMin(10, 5)); // Output: 5
console.log(findMin(-2, 0)); // Output: -2
console.log(findMin(3, 3)); // Output: 3


function checkEquality(num1, num2) {
    if (num1 === num2) {
        console.log(num1 + " and " + num2 + " are equal.");
    } else {
        console.log(num1 + " and " + num2 + " are not equal.");
    }
}

checkEquality(4, 4); // Output: "4 and 4 are equal."
checkEquality(4, 5); // Output: "4 and 5 are not equal."
checkEquality(-1, -1); // Output: "-1 and -1 are equal."


function calculateLargestRectangle(length1, width1, length2, width2) {
    const area1 = length1 * width1;
    const area2 = length2 * width2;

    if (area1 > area2) {
        console.log("Rectangle 1 has the largest area.");
    } else if (area2 > area1) {
        console.log("Rectangle 2 has the largest area.");
    } else {
        console.log("Both rectangles have the same area.");
    }
}

calculateLargestRectangle(5, 10, 3, 8); // Output: "Rectangle 1 has the largest area."


function charityCollection(donation1, donation2, donation3) {
    // Calculate the total donation amount
    const totalDonation = donation1 + donation2 + donation3;

    // Check if the total donation is at least $1000
    if (totalDonation >= 1000) {
        // If the total donation is at least $1000, double the amount
        const doubledDonation = totalDonation * 2;

        // Display the doubled amount that the charity will receive
        console.log(`The charity will receive $${doubledDonation}.`);
    } else {
        // If the total donation is less than $1000, display the original amount
        console.log(`The charity will receive $${totalDonation}.`);
    }
}

charityCollection(500, 250, 300); // Output: The charity will receive $1050.
charityCollection(200, 300, 400); // Output: The charity will receive $900.


function stateOfMatter(temperature) {
    if (temperature <= 0) {
        console.log("Water is a solid (ice) at this temperature.");
    } else if (temperature > 0 && temperature < 100) {
        console.log("Water is a liquid at this temperature.");
    } else {
        console.log("Water is a gas (water vapor) at this temperature.");
    }
}
stateOfMatter(25); // outputs "Water is a liquid at this temperature."


function findMaximumValue(num1, num2, num3) {
    // check if num1 is the largest number
    if (num1 > num2 && num1 > num3) {
        return num1;
    }
    // check if num2 is the largest number
    else if (num2 > num1 && num2 > num3) {
        return num2;
    }
    // num3 must be the largest number
    else {
        return num3;
    }
}

let maxNumber = findMaximumValue(10, 20, 30);
console.log(maxNumber); // output: 30


function findMinimumValue(num1, num2, num3) {
    return Math.min(num1, num2, num3);
}

console.log(findMinimumValue(4, 8, 2)); // Output: 2
console.log(findMinimumValue(1, -5, 10)); // Output: -5
console.log(findMinimumValue(0, 0, 0)); // Output: 0


function updatedCharityCollection(amountRaised) {
    let bonus = 0;
    let donation = 0;

    if (amountRaised < 1000) {
        bonus = 100;
        donation = amountRaised + bonus;
    } else if (amountRaised >= 1000 && amountRaised <= 2000) {
        donation = amountRaised * 2;
    } else if (amountRaised > 2000) {
        bonus = 2000;
        donation = (bonus * 2) + (amountRaised - bonus);
    }

    return donation;
}
