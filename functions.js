//Question no:1
//Write a function called greetUser that takes a name as a parameter and returns a greeting message like "Hello, [name]! Welcome to JavaScript." 
function greetUser(name) {
    return "Hello, " + name + "! Welcome to JavaScript.";
}
let message = greetUser("Aditi");
console.log(message);

//Question no:2
//Create a function named calculateArea that takes the length and width of a rectangle as parameters and returns its area. Test it with length = 5 and width = 8.
function calculateArea(length, width) {
    return length * width;
}
let area = calculateArea(5, 8);
console.log("Area of the rectangle is:", area);

//Question no:3
//Write a function called isEven that takes a number as input and returns true if the number is even, and false if it's odd.
function isEven(num) {
    return num %2 === 0;
}
console.log ("Is 6 even?", isEven (6));

//Question no:4
//Create a function celsiusToFahrenheit that converts a temperature from Celsius to Fahrenheit using the formula: F = (C × 9/5) + 32.
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
let result = celsiusToFahrenheit(30);
console.log("Temperature in Fahrenheit:", result);

//Question no:5
//Write a function called findMax that takes an array of numbers as a parameter and returns the largest number in the array. For example, findMax([3, 7, 2, 9, 1]) should return 9. 
function findMax(numbers) {
    let max = numbers[0]; 
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i]; 
        }
    }
    return max;
}
console.log(findMax([3, 7, 2, 9, 1]));

//Question no:6
//Create a function named reverseString that takes a string as input and returns the string reversed. For instance, "hello" should become "olleh".
function reverseString(str) {
    let reversed = ""; 
    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i]; 
    }
    return reversed;
}
console.log(reverseString("hello")); 

//Question no:7
//Write a function called createUsername that takes firstName and lastName as parameters. If lastName is not provided, it should default to "User". Return username as "firstname_lastname" in lowercase.
function createUsername(firstName, lastName = "User") {
    let username = firstName + "_" + lastName;
    return username.toLowerCase();
}
console.log(createUsername("Aditi", "Poudel")); 
console.log(createUsername("Aasriti"));             

//Question no:8
//Create a function called applyOperation that takes two numbers and a callback function as parameters. The callback should perform an operation on the two numbers.
function applyOperation(num1, num2, operation) {
    return operation(num1, num2);
}
function add(a, b) {
    return a + b;
}
function multiply(a, b) {
    return a * b;
}

console.log(applyOperation(3, 7, add));       // 8
console.log(applyOperation(3, 3, multiply)); // 15

//Question no:9
//Write a function named filterAdults that takes an array of ages and returns a new array containing only ages 18 or above using the filter() method. 
function filterAdults(ages) {
    return ages.filter(function(age) {
        return age >= 18;
    });
}
console.log(filterAdults([10, 18, 17, 24, 13, 32]));

//Question no:10
//Create a function called calculateGrade that takes a score (0-100) and returns a letter grade: A (90-100), B (80-89), C (70-79), D (60-69), F (below 60). 
function calculateGrade(score) {
    if (score >= 90) return "A";
    else if (score >= 80) return "B";
    else if (score >= 70) return "C";
    else if (score >= 60) return "D";
    else return "F";
}
console.log("Grade:", calculateGrade(82));

//Question no:11
//Write a function isPalindrome that checks if a string is a palindrome (reads the same forwards and backwards), ignoring spaces and cases.
function isPalindrome(str) {
    let cleanStr = str.toLowerCase().replaceAll(" ", "");
    let reversed = "";
    for (let i = cleanStr.length - 1; i >= 0; i--) {
        reversed = reversed + cleanStr[i];
    }
    if (cleanStr === reversed) {
        return true;
    } else {
        return false;
    }
}
console.log(isPalindrome("madam"));         
console.log(isPalindrome("Hello"));    
