// 29. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

var array = new Array(100);
console.log("Sum Of Even Number")
let sum = 0;
for(let i=0 ; i<=array.length; i++){
     
    if(i%2==0){
        sum = sum+i;
        
    } 
};

console.log(sum)


console.log("Sum of Odd Number");
let sumOdd= 0;
for(let i=0; i<=array.length; i++){
  if(i%2!==0){
    sumOdd = sumOdd+i;
  };
};

console.log(sumOdd);