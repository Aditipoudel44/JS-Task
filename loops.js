// Question no:1
//Write a program that checks whether a given number is prime or not using a loop.
let num = 4;
let isPrime = true;
if (num <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break; 
        }
    }
}
if (isPrime) {
    console.log(num + " is a Prime number");
} else {
    console.log(num + " is NOT a Prime number");
}

//Question no:2
//Write a program that takes a number and reverses it using a loop. 
let number = 9841;
let reverse = 0;
while (number > 0) {
    let digit = number % 10;        
    reverse = reverse * 10 + digit; 
    number = Math.floor(number / 10); 
}
console.log("Reversed number is:", reverse);

//Question no:3
//Write a program to count how many digits are in a number using a loop. 
let num1 = 98246;
let count = 0;
while (num1 > 0) {
    count = count + 1;          
    num1 = Math.floor(num1 / 10);
}
console.log("Number of digits:", count);

//Question no:4
//Write a program to print the first N Fibonacci numbers using a loop.
let n = 7;
let a = 3;
let b = 2;
console.log("Fibonacci Series:");
for (let i = 1; i <= n; i++) {
    console.log(a);
    let next = a + b; 
    a = b;        
    b = next;
}

//Question no:5
//Use nested loops to print the following pattern.
// *****
// *****
// *****
// *****
// *****
// Number of rows
let rows = 5;
for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 1; j <= 5; j++) {
        pattern = pattern + "*";
    }
    console.log(pattern);
}

//Question no:6
//Use nested loops to print the following pattern.  
//* 
//** 
//*** 
//**** 
//*****
let row = 5;
for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern = pattern + "*";
    }
    console.log(pattern);
}
