let max = 100
let min = 1
let random;
let attempts = 0
function generateRan() {
    random = Math.floor(Math.random() * (max + min - 1) + min)
     console.log(random);
    return random
}

random = generateRan()

const guess = document.querySelector('.btn-guess')
const playAgain = document.querySelector('.play-again')
playAgain.addEventListener('click',playNext)
guess.addEventListener('click',guessNum)


function guessNum() {
    const inputGuess = parseInt(document.getElementById('guessnum').value);
    if(isNaN(inputGuess) || inputGuess == '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter a valid number!',
        });
    } else {
        attempts++;
        document.querySelector('.attempts').innerHTML = `attempts : ${attempts}`
        if (inputGuess !== random) {
            if (inputGuess > random) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Too high!',
                    text: 'Try again.',
                });
            } else {
                Swal.fire({
                    icon: 'warning',
                    title: 'Too low!',
                    text: 'Try again.',
                }); 
            }
            
        } else {
            Swal.fire({
                icon: 'success',
                title: 'Congratulations!',
                text: `You guessed the number ${random} in ${attempts} ${attempts > 1 ? 'attempts' : 'attempt'}.`,
            });
            document.getElementById('guessnum').disabled = true;
            guess.disabled = true
            guess.style.display = 'none'
            playAgain.style.display = 'inline'
        }
    }
}

function playNext() {
    attempts = 0
    document.querySelector('.attempts').innerHTML = `attempts : ${attempts}`
    document.getElementById('guessnum').disabled = false
    guess.style.display = 'inline'
    playAgain.style.display = 'none'
    guess.disabled = false
    generateRan()
    document.getElementById('guessnum').value = ''
    document.getElementById('guessnum').focus()
    
}

window.onload = function() {
    document.getElementById('guessnum').focus();
};