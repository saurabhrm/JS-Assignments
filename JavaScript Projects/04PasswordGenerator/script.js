const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
// const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}


// clipboardEl.addEventListener('click', () => {
    
// })

generateEl.addEventListener('click', () => {
    document.querySelector("#result").innerHTML=generatePassword(randomFunc.lower, randomFunc.upper, randomFunc.number, randomFunc.symbol, lengthEl.value)
})


// EventListener

uppercaseEl.addEventListener("change", function(){
    if(this.checked){
        uppercaseEl.checked= true;
    }else{
        uppercaseEl.removeAttribute("checked");
    }
 })
lowercaseEl.addEventListener("change", function(){
    if(this.checked){
        lowercaseEl.checked= true;
    }else{
        lowercaseEl.removeAttribute("checked");
    }
 })
numbersEl.addEventListener("change", function(){
    if(this.checked){
        numbersEl.checked= true;
    }else{
        numbersEl.removeAttribute("checked");
    }
 })
symbolsEl.addEventListener("change", function(){
    if(this.checked){
        symbolsEl.checked= true;
    }else{
        symbolsEl.removeAttribute("checked");
    }
 });

 

function generatePassword(lower, upper, number, symbol, length) {
    
    let uppercaseVal = uppercaseEl.checked;
 let lowercaseVal =lowercaseEl.checked;
 let numberVal =numbersEl.checked;
 let symbolVal =symbolsEl.checked;

    
     let result = "";

   
     if(uppercaseVal ==true ){
        
    for(let i=0; i<length; i++){
     result = result + upper() 
    }
}if( lowercaseVal==true ){
    for(let i=0; i<length; i++){
        result = result + lower() ;
       }
}if(numberVal==true){
    for(let i=0; i<length; i++){
        result = result + number() ;
       } 
}if(symbolVal===true){
    for(let i=0; i<length; i++){
        result = result + symbol() ;
       }
}

    
var shuffled = result.split('').sort(function(){return 0.5-Math.random()}).join('');

return shuffled.slice(0,length) ;


    

  


}

document.querySelector("#result").textContent=  generatePassword()

function getRandomLower() {
    const lower = "abcdefghijklmnopqrstuvwxyz";

    return lower[Math.floor(Math.random() * lower.length)]
}


function getRandomUpper() {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    return upper[Math.floor(Math.random() * upper.length)]
}

function getRandomNumber() {
    const number = "0123456789";

    return number[Math.floor(Math.random() * number.length)];
}

function getRandomSymbol() {
    const symbol = "!@#$^&*()_+=~";

    return symbol[Math.floor(Math.random() * symbol.length)]

}