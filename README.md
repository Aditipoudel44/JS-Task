<h1> Topic 1: Advanced Loops </h1>
<h2> Explanation of programs using loop: </h2>
<h3> Write a program that checks whether a given number is prime or not using a loop. </h3>
First, a variable num is set to 4, which is the number we want to test, and another variable isPrime is set to true by default, assuming the number is prime at the beginning.
Then the code checks if the number is less than or equal to 1, because numbers like 0, 1, or negative numbers are not prime, so in that case isPrime is changed to false. If the number is greater than 1, the program uses a for loop to divide the number by every value starting from 2 up to one less than the number itself.
If the number is evenly divisible by any of these values (meaning the remainder is 0), it proves that the number has more than two factors, so it is not a prime number. When this happens, isPrime is set to false and the loop stops immediately using break to save time.
Finally, the program checks the value of isPrime: if it is still true, it prints that the number is a prime number; otherwise, it prints that the number is not a prime number.

<h3> Write a program that takes a number and reverses it using a loop. </h3>
First, the variable number is given the value 9841, which is the number we want to reverse, and another variable reverse is set to 0 to store the reversed result. The while loop runs as long as number is greater than 0, meaning there are still digits left to process. 
Inside the loop, the last digit of the number is taken out using number % 10, which gives the remainder when divided by 10. This digit is then added to reverse by first shifting the existing digits in reverse one place to the left (multiplying by 10) and then adding the extracted digit. 
After that, the original number is reduced by removing its last digit using Math.floor(number / 10), which cuts off the decimal part. This process repeats until all digits are used and number becomes 0. 
Finally, the program prints the reversed number using console.log.

<h3> Write a program to count how many digits are in a number using a loop. </h3>
The variable num1 is given the value 98246, which is the number whose digits we want to count, and another variable count is set to 0 to keep track of how many digits have been found. The while loop runs as long as num1 is greater than 0, meaning there are still digits left in the number. 
Inside the loop, the count is increased by 1 each time, which represents counting one digit. Then, the number is reduced by removing its last digit using Math.floor(num1 / 10), which drops the decimal part and shortens the number. This process repeats until the number becomes 0, meaning all digits have been counted. 
Finally, the program prints the total digit count using console.log.

<h3> Write a program to print the first N Fibonacci numbers using a loop. </h3>
First, the variable n is set to 7, which decides how many numbers will be printed. The variables a and b are given the values 3 and 2, which act as the starting numbers of the series. The program first prints the heading “Fibonacci Series:” to make the output clear.
Then a for loop runs from 1 to n, meaning it will repeat 7 times. Inside the loop, the current value of a is printed each time. After printing, the next number in the series is calculated by adding a and b and storing the result in next. Then the values are shifted forward: a is updated to b, and b is updated to the newly calculated next.
This shifting is what allows the series to move forward step by step.

<h3> Square star pattern </h3>
The variable rows is set to 5, which tells the program how many lines of stars should be printed. The outer for loop runs from 1 to the number of rows, meaning it controls how many times a new line is created. Inside this loop, an empty string called pattern is created to build one full row of stars.
Then the inner for loop runs 5 times, and during each run, a "*" is added to the pattern string. By the time the inner loop finishes, the pattern string contains five stars in a row.
After that, console.log(pattern) prints that row of stars on a new line. This whole process repeats for each row, resulting in a 5×5 block of stars.

<h3> Star pattern </h3>
First, the variable row is set to 5, which is meant to decide how many lines the pattern will have. The outer for loop runs from 1 up to the total number of rows, and each loop represents one new line of the pattern. Inside this loop, an empty string called pattern is created to build the stars for that specific row.
Then the inner for loop runs from 1 up to the current value of i, which means the number of stars printed increases with each row. In every iteration of the inner loop, one "*" is added to the pattern string. After the inner loop finishes, the completed row of stars is printed using console.log(pattern).
This process repeats until all rows are printed, creating a triangle shape where the first row has one star, the second has two, and so on.
