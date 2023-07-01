const scissor = document.getElementById('scissor');
const player = document.getElementById('player');
const computer = document.getElementById('computer');
const announcement = document.querySelector('.announcement h2');
const scoreBoardPlayer = document.querySelector('.scoreBoardPlayer');
const scoreBoardComputer = document.querySelector('.scoreBoardComputer');
const gameOptions = document.getElementById('gameOptions');
const options = gameOptions.querySelectorAll('img');
let compScore=0;
let playerScore = 0;


function getComputerOption(){
    const options = ['rock','paper','scissor'];
    const randomIndex = Math.round(Math.random()*2);

    return options[randomIndex];
}

function getResult(compOption,playerOption){
    if(compOption == playerOption) return 'Tie';
    if(playerOption == 'rock') return (compOption == 'paper') ? 'Computer Win' : 'Player Win';
    if(playerOption == 'paper') return (compOption == 'scissor') ? 'Computer Win' : 'Player Win';
    if(playerOption == 'scissor') return (compOption == 'rock') ? 'Computer Win' : 'Player Win';
}

function setScore(result){
    if(result == 'Computer Win'){
        scoreBoardComputer.innerHTML = ++compScore;
    } else if(result == 'Player Win'){
        scoreBoardPlayer.innerHTML = ++playerScore;
    }
    }

options.forEach(function(e){
    e.addEventListener('click',function(){
        const compOption = getComputerOption();
        const playerOption = e.getAttribute('id');
        const result = getResult(compOption,playerOption);
        player.setAttribute('src','/images/'+ e.getAttribute('id') +'.png');
        computer.setAttribute('src','images/'+ compOption +'.png');
        announcement.innerHTML = result;
        setScore(result);
    });

});