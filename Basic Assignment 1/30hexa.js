
// 30. Write a script which generates a random hexadecimal number.

let randomColor = ()=>{
    let hexNum = "1234567890ABCDEF";
    let hesh = "#";
    for(let i=0; i<6; i++){
        hesh = hesh + hexNum[Math.floor(Math.random()*16)];
    }
     
    return hesh;

}

console.log(randomColor())