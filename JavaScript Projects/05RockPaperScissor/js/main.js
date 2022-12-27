let userScoreVal = document.getElementById("userScoreVal");
let compScoreVal = document.getElementById("compScoreVal");
let userResult = document.getElementById("result-user-stat");
let compResult = document.getElementById("result-comp-stat");
let finalResult = document.getElementById("result-final-stat");
let rock = document.getElementById("r");
let paper = document.getElementById("p");
let scissors = document.getElementById("s");




const game = () => {
    let userScore = 0;
    let computerScore =0;

    // function 

    const playGame = () => {
        const userOptions = [rock, paper, scissors];
        


        userOptions.forEach(option=>{
            option.addEventListener("click", function(){
                const computerOptions = ['rock', 'paper', 'scissors'];   

                const choiceNumber = Math.floor(Math.random()*3);
                const computerChoice =computerOptions[choiceNumber];

    
                winner(this.innerText, computerChoice)
               
            })
        })
        

    };


    
    const winner = (user,computer) => { 
        user = user.trim();
        computer = computer.toLowerCase();

        userResult.textContent=`User : ${user}`;
        compResult.textContent=`Computer : ${computer}`;
        
        if(user === computer){
            finalResult.textContent = 'Tie'
        }
        else if(user == 'rock'){
            if(computer == 'paper'){
                finalResult.textContent = `Winner: ${'Computer Won'}`;
                computerScore++;
                compScoreVal.textContent = computerScore;
 
            }else{
                finalResult.textContent = `Winner: ${'User Won'}`;
                userScore++;
                userScoreVal.textContent = userScore;
            }
        }
        else if(user == 'scissors'){
            if(computer == 'rock'){
                finalResult.textContent = `Winner: ${'Computer Won'}`;
                computerScore++;
                compScoreVal.textContent = computerScore;
            }else{
                finalResult.textContent = `Winner: ${'User Won'}`;
                userScore++;
                userScoreVal.textContent = userScore;
            }
        }
        else if(user == 'paper'){
            if(computer == 'scissors'){
                finalResult.textContent = `Winner: ${'Computer Won'}`;
                computerScore++;
                compScoreVal.textContent = computerScore;
            }else{
                finalResult.textContent = `Winner: ${'User Won'}`;
                userScore++;
                userScoreVal.textContent = userScore;
            }
        }
    }



    playGame();
    
}

game()