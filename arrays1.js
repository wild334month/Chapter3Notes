function createSequentialArray(n) {
    if (n <= 0) {
        console.log("invalid");
    } else {
        const arr = [];
        for (let i = 1; i <= n; i++) {
            arr.push(i);
        }
        console.log(arr);
    }
}

// Examples:
createSequentialArray(7);
createSequentialArray(2);
createSequentialArray(0);
createSequentialArray(-5);


function replaceArrayValues(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = x;
    }
    console.log(arr);
}


replaceArrayValues([1, 2, 3, 4, 5], 10);
replaceArrayValues(["apple", "banana", "cherry"], "fruit");
