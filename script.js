let result = document.getElementById('result');
let comp = document.getElementById('comp');
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissor = document.getElementById('scissors')
let scoreText = document.getElementById('score-text');
let y;
let score = 0;

let playGame = () => {
    let x = Math.floor(Math.random() * ( 3 - 1 + 1)) + 1;
    if (x === y) {
        result.textContent = 'You got a Draw!';
        scoreText.textContent = 'Score:'+' '+ score

    }
    else if ((x === 2 && y === 3) || (x === 1 && y === 2) || (x === 2 && y === 3) || (x === 3 && y === 1)) {
        result.textContent = 'You just Won!';
        score += 1;
        scoreText.textContent = 'Score:'+' '+ score
    }
    else {
        result.textContent = 'You just Lost!';
        score -= 1;
        scoreText.textContent = 'Score:'+' '+ score
    };

    if (x === 1) {
        comp.textContent = 'Computer selected Rock';
    }
    else if (x === 2) {
        comp.textContent = 'Computer selected Paper';
    }
    else {
        comp.textContent = 'Computer selected Scissors';
    };
};

paper.onclick = function() {
     y = 2;
    playGame();
 }
 
 scissor.onclick = function() {
     y = 3;
    playGame();
 }
 
 rock.onclick = function() {
     y = 1;
    playGame();
 }

scoreText.textContent = 'Score:'+' '+ score
