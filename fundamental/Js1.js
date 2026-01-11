//Q1.
// let x = 5;
// if(x==5){
//     console.log("x is good Number");
// }
// else{
//     console.log("x is not a good Number");
// }

// alert("This is a simple JavaScript code snippet.");


// Q2.
//  let name=prompt("Enter your name:");
// let age=prompt("Enter your age:");

// let greeting=`Hello ${name}, you are ${age} years old!`;

// alert(greeting);

// Q3.
// let x=prompt("Enter quarter number for a year (1-4):");
// if(x==1){
//     alert("January, February, March");
// }
// if(x==2){
//     alert("April, May, June");
// }
// if(x==3){
//     alert("July, August, September");
// }
// if(x==4){
//     alert("October, November, December");
// }
// switch (x){
//     case "1":
//         alert("January, February, March");
//         break;
//     case "2":
//         alert("April, May, June");
//         break;
//     case "3":
//         alert("July, August, September");
//         break;
//     case "4":
//         alert("October, November, December");
//         break;
//     default:
//         alert("Invalid quarter number. Please enter a number between 1 and 4.");
//         console.error("Invalid quarter number. Please enter a number between 1 and 4.");
// }

// Q4.
// let str=prompt("Enter a string:");
// if(str.length>4&&str[0]=="A"){
//     alert("String is a Golden string");
//     console.warn("String is a Golden String");
// }
// else{
//     alert("String is not a Golden string");
//     console.warn("String is not a Golden String");
//     console.error("String is not a golden string");
    
// }

// Q5.
// let a=prompt("Enter a number:");
// let b=prompt("Enter another number:");
// let c=prompt("Enter a third number:");
// let max = Math.max(a, b, c);
// alert(`The maximum number is: ${max}`);


// Q6.
// let num1 = prompt("Enter a number:");
// let num2 = prompt("Enter another number:");
// if(num1%10==num2%10){
//     alert("The last digits of both numbers are the same.");
//     console.log("The last digits of both number are the same");
    
// }

// let str="I love JavaScript";
// console.log(str.indexOf("JavaScript"));
// console.log(str.indexOf("Python"));
// console.log(str.includes("love"));
// console.log(str.includes("hate"));


// part 3

// // Q1.
// let arr=[10,20,-1,40,50];
// let pos = [];
// let idx=0;
// let n=3;

// for(let i=0;i<arr.length;i++){
//     if(arr[i]>=0){
//         pos[idx]=arr[i];
//         idx++;
//     }
//     if(idx==n){
//         break;
//     }
// }
// console.log("Positive numbers are:",pos);

// // Q2.
// let array=[1,2,3,4,-5,6,7,8,-9,10];
// let lastPos=[];
// idx=n-1;
// for(let i=array.length-1;i>=0;i--){
//     if(array[i]>=0){
//         lastPos[idx]=array[i];
//         idx--;
//     }   
//     if(idx<0){
//         break;
//     }
// }
// console.log("Last positive numbers are:",lastPos);

// // Q3.
// let str="";
// if(str.length==0){
//     console.log("String is empty");
// }
// else{
//     console.log("String is not empty");
// }

// // Q4.
// let s="Hello World";
// let i=6;
// if(s[i]<'a'){
//     console.log(`Character at index ${i} is an uppercase letter.`);
// }
// else{
//     console.log(`Character at index ${i} is  a lowercase letter.`);
// }


// // Q5.
// let s=" df dfde   ge    reg  ee   ";
// console.log("Original string:",s);
// let trimmedStr=s.trim();
// console.log("Trimmed string:",trimmedStr);


// // Q6.
// let arr=[1,2,3,8,5];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==8){
//         console.log(`8 is found in the array at index ${i}`);
//         break;
//     }
// }

// if(arr.indexOf(8)==-1){
//     console.log("8 is not found in the array");
// }
// else{
//     console.log(`8 is found in the array at index ${arr.indexOf(8)}`);
// }

// part 4
// // Q1.
// let arr=[1,2,3,4,5,3,2,4,2,3,2];
// arr.splice(arr.indexOf(3),1);// splice method removes element at specified index to target index
// console.log(arr);

// // Q2.
// let num=12345;
// console.log(`Number of digits in ${num} is ${num.toString().length}`);

// // Q3.
// function factorial(n){
//     if(n==0||n==1){
//         return 1;
//     }
//     return n*factorial(n-1);
// }

// let fact=factorial(10);
// console.log(`Factorial of 10 is ${fact}`);


// part 5

// Q1. Create a program that generates a random number representing a dice roll. [The numbers should be between 1 and 6]
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}
console.log("Dice roll result:", rollDice());


// Q2. Create an object representing a car that stores the following properties for the car: name, model, color. Print the car’s name and model to the console.
let car = {
    name: "Toyota",
    model: "Camry",
    color: "Red"
};
console.log("Car name:", car.name);
console.log("Car model:", car.model);

// Q3. Create an object Person with their name, age and city. Edit their city’s original value to change it to “NewYork”. Add a new property country and set it to the United States.
let person = {
    name: "John",
    age: 30,
    city: "Los Angeles"
};
person.city = "New York";
person.country = "United States";
console.log("Person details:", person);

// part 6
// Q1. Write a JavaScript function that returns array elements larger than a number.
let arr=[10,5,8,20,3,15];

arr=arr.filter(function(element){
    return element>7;
});
console.log("Elements larger than 7 are:",arr);

// Q2. Write a JavaScript function to extract unique characters from a string. Example: str="abcdabcdefgggh" ans="abcdefgh"
let str="abcdabcdefgggh";
let uniqueChars="";
for(let i=0;i<str.length;i++){
    if(uniqueChars.indexOf(str[i])==-1){
        uniqueChars+=str[i];
    }
}
console.log("Unique characters are:",uniqueChars);


// Q3. Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output. Example: country=["Australia","Germany","UnitedStatesofAmerica"] 
//output:"UnitedStatesofAmerica"
let countries=["Australia","Germany","UnitedStatesofAmerica"];
function findLongestCountry(countries){
    let longest="";
    for(let i=0;i<countries.length;i++){
        if(countries[i].length>longest.length){
            longest=countries[i];
        }
    }
    return longest;
}
console.log("Longest country name is:",findLongestCountry(countries));

// Q4. Write a JavaScript function to count the number of vowels in a string argument.
let inputStr="Hello World, This is a JavaScript function to count vowels.";
function countVowels(str){
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'||str[i]=='A'||str[i]=='E'||str[i]=='I'||str[i]=='O'||str[i]=='U'){
            count++;
        }
    }
    return count;
}
console.log("Number of vowels in the string is:",countVowels(inputStr));
console.log("Number of consonants in the string is:",inputStr.length-countVowels(inputStr));

// Q5. Write a JavaScript function to generate a random number with a range (start, end).
function generateRandomNumber(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}
console.log("Random number between 1 and 10:", generateRandomNumber(1, 10));

//part 7

// Q1. 

let arraAverage=(arr)=>{
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum/arr.length;
}
arr=[10,20,30,40,50];
console.log("Average of array elements is:",arraAverage(arr));

// Q2.
let isEven=(num)=>{
    return num%2==0;
}
console.log("Is 10 even?",isEven(7));

// part 8

// Q1.Square and sum the array elements using the arrow function and then find the average of the array elements.
let sqrSum=(arr)=>{
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]*arr[i];
    }
    return sum;
}

arr=[1,2,3,4,5];
let sumOfSquares=sqrSum(arr);
let averageOfSquares=sumOfSquares/arr.length;
console.log("Average of squares of array elements is:",averageOfSquares);

// Q2.  
let newArr=arr.map((element)=>{
    return element+5;
});
console.log("New array after adding 5 to each element:",newArr);

// Q3. Create a new array whose elements are in uppercase of words present in the original array.
let words=["hello","world","javascript","arrow","function"];
let upperCaseWords=words.map((word)=>{
    return word.toUpperCase();
});
console.log("Uppercase words array:",upperCaseWords);

// Q4. Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of the additional arguments doubled.
let doubleAndReturnArgs=(arr,...args)=>{
    let doubledArgs=args.map((arg)=>{
        return arg*2;
    });
    return [...arr,...doubledArgs];
};
let originalArr=[1,2,3];
let resultArr=doubleAndReturnArgs(originalArr,4,5,6);
console.log("Resulting array after doubling additional arguments:",resultArr);

// Q5. Write a function called removeRandom which accepts an array and removes a random element from the array. The function should return a new array without the random element.
let removeRandom=(arr)=>{
    let randomIndex=Math.floor(Math.random()*arr.length);
    return arr.filter((_,index)=>index!==randomIndex);
};
let sampleArr=[10,20,30,40,50];
let newArrayAfterRemoval=removeRandom(sampleArr);
console.log("Array after removing a random element:",newArrayAfterRemoval);

// Q6. Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.
let mergeObjects=(obj1,obj2)=>{
    return {...obj1,...obj2};
}   ;
let object1={a:1,b:2};
let object2={c:3,d:4};
let mergedObject=mergeObjects(object1,object2);
console.log("Merged object:",mergedObject);