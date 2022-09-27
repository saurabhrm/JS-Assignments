// 22. Write a program which tells the number of days in a month.

let months = {
    january : 31 ,
    february : 28 ,
    march : 31,
    april : 30,
    may :31,
    june :30,
    july :31,
    august : 31,
    september :30,
    october :31,
    november : 30,
    december : 31,
};

var input = prompt("Enter the month:");

var userInput = input.toLowerCase();


document.getElementById("months").innerHTML=`${userInput.charAt(0).toUpperCase() + userInput.slice(1)} has ${months[userInput]} days...`;

