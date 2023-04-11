// 1)  Write a JavaScript program that accepts two numbers in two prompts and
// displays the larger one in the console.

num1 = prompt("enter number 1:");
num2 = prompt("enter number 2:");
if(num1>num2){
    document.write(num1);
}
 else{
    document.write(num2)
 }

 // 2) Write a JavaScript conditional statement to find the sign of a number. Display
// an alert box with the specified sign.
num1 = prompt("enter number 1:");
if (num1 > 0){
    document.write("This is positive number, sign of number is +");
}
else{
    document.write("It is negative number");
}

// 3) Write a JavaScript program that accepts five numbers in five prompts and
// displays the larger one in the console

num1 = prompt("enter number 1:");
num2 = prompt("enter number 2:");
num3 = prompt("enter number 3:");
num4 = prompt("enter number 4:");
num5 = prompt("enter number 5:");

if(num1>num2 && num1>num3 && num1>num4 && num1>5){
    document.write(" number 1 is largest")
}
else if(num2>num1 && num2>num3 && num2>num4 && num2>num5) {
    document.write("Number 2 is largest");
}
else if(num3>num1 && num3>num2 && num3>num4 && num3>num5){
    document.write("number 3 is largest");
}
else if (num4>num1 && num4>num2 && num4>num3 && num4>num5){
    document.write("number 4 is largest");
}
else{
    document.write("number 5 is largest");
}
// 4) Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
//will check if the current number is odd or even, and display a message to the
//screen.

for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
      console.log(i + " is even");
    } else {
      console.log(i + " is odd");
    }
  }
  

  //Write a JavaScript program which computes the average marks of the
// following students Then, this average is used to determine the corresponding
// grade.
subj1= +prompt("subj1 Marks: ")
subj2= +prompt("subj 2 marks: ")
subj3 = +prompt("subj3 marks: ")

avg= subj1+subj2+subj3;
console.log(avg)
if(avg<60){document.write("GRADE F")}
else if(avg<70){document.write("GRADE D")}
else if(avg<80){document.write("GRADE C")}
else if(avg<90){document.write("GRADE B")}
else{document.write("GRADE A")}

//Write a JavaScript program which iterates the integers from 1 to 100. But for
//multiples of three print "Fizz" instead of the number and for the multiples of five
//print "Buzz". For numbers which are multiples of both three and five print
//"FizzBuzz".
  
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
  
