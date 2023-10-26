//PRACTICE 1

let array = [2, 5, 8, 11, 15, 17];

// use the appropriate array methods, create a new array consisting of 5 times each of the elements greater than 10 in the array elements given above. (should be [55, 75, 85] )

let newArray = array.filter((num) => num > 10).map((num2) => num2 * 5)
console.log (newArray)

//OUTPUT: [55,75,85]



//PRACTICE 2

let array1 = [3, 6, 9, 14, 16];

// use the appropriate array methods, write the function is called "myFunction" that satisfied the following conditions for the above array.
// if there is an element greater than 5 among the elements, the console will say "An element greater than five exists." otherwise "Element greater than 5 does not exist." print.

function myFunction (array1){ array1.some((num) => num > 5) ? 
    console.log("an element greater than 5 exist.") : 
    console.log("an element greater than 5 does not exist.");
    }
    
myFunction(array1);

//OUTPUT: an element greater than 5 exist.


//PRACTICE 3

let array2 = [2,3,4];

// write a function that returns the result (24) of multiplying the elements of the above array using the appropriate array method

function reductor (num,num1) {
    return num * num1;
}

let result = array2.reduce(reductor,1);
console.log(result)

//OUTPUT: 24