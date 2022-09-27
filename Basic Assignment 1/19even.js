// 19. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?


let inputNum = prompt("Enter Your No. let's check no. is even or not:");
if(inputNum%2===0){
    document.getElementById("number").innerHTML="Your No. is Even..."
}else{
    document.getElementById("number").innerHTML="Your No. is Odd..."
}