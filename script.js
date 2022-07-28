// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;

// console.log(document.querySelector('.guess').value);
// const x = function() {
//     console.log(23);
// }
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;



document.querySelector('.check').addEventListener('click', function()

    {
        const guess = Number(document.querySelector('.guess').value);
        console.log(typeof guess);

        if (!guess) {
            document.querySelector('.message').textContent = '😜 No Number';
        } else if (guess === secretNumber) {
            document.querySelector('.message').textContent = '🎉 Correct Number!';
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30 rem ';
            document.querySelector('.funny-comment').textContent = 'I was 100% sure you will win! 😉.';
            document.querySelector('.funny-comment').style.fontSize = '20px';
            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }

        } else if (guess > secretNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = '🤣Too High!';
                score = score - 1;
                document.querySelector('.score').textContent = score;
                document.querySelector('.funny-comment').textContent = 'I think you are a loser 🙈🙉🙊';
                document.querySelector('.funny-comment').style.fontSize = '20px';
                document.querySelector('.funny-comment').style.paddingLeft = '587px';


            } else {
                document.querySelector('.message').textContent = '💩You lost the game!';
                document.querySelector('body').style.backgroundColor = '#FF0000';
                document.querySelector('.score').textContent = 0;
                document.querySelector('.guess').value = '';

            }



        } else if (guess < secretNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = '🤣TOO Low!';
                score = score - 1;
                document.querySelector('.score').textContent = score;
                document.querySelector('.funny-comment').textContent = 'OO ja jaa ka kam ker💩💩💩';
                document.querySelector('.funny-comment').style.fontSize = '20px';
                document.querySelector('.funny-comment').style.paddingLeft = '587px';
            } else {
                document.querySelector('.message').textContent = '💩You lost the game!';
                document.querySelector('body').style.backgroundColor = '#FF0000';
                document.querySelector('.score').textContent = 0;
            }
        }


    });
document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = '20';
    document.querySelector('.guess').value = '';
    document.querySelector('.funny-comment').textContent = 'Happy to see you again! 😊';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15 rem ';
})
