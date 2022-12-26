function colorChanger(){
    let value = "0123456789ABCDEF";
    let hash = "#";

    for (let i = 0; i < 6; i++) {
    
        hash = hash + value[Math.floor(Math.random()*16)]
        
    }
    document.getElementById("canvas").style.backgroundColor= hash;

}

document.getElementById("button").addEventListener("click", colorChanger);