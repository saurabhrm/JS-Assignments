function display(val){
    
    document.getElementById('outPut').value += val ;

   
}

function solve(){

    let x = document.getElementById('outPut').value
    
    let y = eval(x);

    document.getElementById('outPut').value = y

}




