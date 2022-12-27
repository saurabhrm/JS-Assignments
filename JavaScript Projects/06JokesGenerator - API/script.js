let jokeBtna = document.getElementById("jokeBtn");
let url = "https://api.chucknorris.io/jokes/random";
let joke = document.getElementById("joke");

console.log();

jokeBtn.addEventListener("click",function(){
    fetch(url).then (( result)=>  result.json()).then((data)=>{joke.innerHTML=data.value}).catch((error)=>{console.error(error)})
})



