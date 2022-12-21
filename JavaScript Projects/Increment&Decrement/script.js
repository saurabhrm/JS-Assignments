let count = 0;

let value = document.getElementById("value");

let btns = document.querySelectorAll(".btn");

btns.forEach(function(item){
    item.addEventListener("click", function(val){
        let btnClass = val.currentTarget.classList;
        if(btnClass.contains("increase")){
            count ++;
        }
        if(btnClass.contains("decrease")){
            count --;
        }
        if(btnClass.contains("reset")){
            count = 0;
        }
        value.textContent=count
    })
})



