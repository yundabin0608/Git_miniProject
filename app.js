document.addEventListener("DOMContentLoaded", function() {
    const choices = ['rock', 'paper', 'scissors'];
    const buttons = document.querySelectorAll('.choice');
    const userChoiceDisplay = document.getElementById('user-choice');
    const computerChoiceDisplay = document.getElementById('computer-choice');
    const winnerDisplay = document.getElementById('winner');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const userChoice = this.id;
            const computerChoice = choices[Math.floor(Math.random() * choices.length)];
            const winner = determineWinner(userChoice, computerChoice);
            userChoiceDisplay.textContent = `Your Choice: ${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)}`;
            computerChoiceDisplay.textContent = `Computer's Choice: ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`;
            winnerDisplay.textContent = `Winner: ${winner}`;
        });
    });
    function determineWinner(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return 'Draw';
        }
        if ((userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')) {
            return 'You';
        } else {
            return 'Computer';
        }
    }
});