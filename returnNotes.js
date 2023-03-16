// Parameters are placeholder variables that allow us to reuse functions
//us to reuse functions

function printYes(){

    console.log('yes');

}

printYes();
printYes();

//Example 2: With parameter

function printText(text){ //text is a parameter

    console.log(text);

}

printText('im the biggest bird');

printText('no');

//Return statements provides values to the rest of
//the program. Returned values can be used by other
//parts of the code. Console.log values cannot be
//used by other lines of code.

//Example 3: Without return
function double(num){

    console.log(num*2);

}

double(3);

//Example 4: Using return

function triple(num){{
return(num*3);}
}

console.log(triple(7))


//console.log(triple(7));
let answer = triple(12);
answer -=2;
console.log(answer);
//Example 5: Another return
function loseLife(lives){
    return (lives -1);
}
let totalLives = 10;
totalLives= loseLife(totalLives);
console.log(totalLives);

//Scope is the part of the program where the binding (value of a variable) is visible.

//global scope: created outside all {} and accessible everywhere

//local scope: created inside a {} and only accessible inside that {}

//Example 6: Different scopes

let x=10; //global x

if (true){

    let y=20; //local y

    let z= 30; //local z

    console.log(x + y + z);

}

console.log(x); //y and z are not accessible outside the {} where they were created

//Example 7: no naming conflict

function half(n){ //local n created is accessible inside this function only

    return (n/2);

}

let n=10; //global n is NOT THE SAME n

console.log(half(100)); //go to the half function and use THAT n.

console.log(n); //since there is no direction to go to {}, use the global n