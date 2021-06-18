const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result-score')

const correctAnswers = ['B', 'B', 'B', 'B', 'B'];

form.addEventListener('submit', event => { 
    event.preventDefault();

    let score = 0;
    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
        form.inputQuestion5.value,
    ];

    userAnswers.forEach((userAnswer, index) => {
        if (userAnswer === correctAnswers[index]) {
            score += 20
        }
    })
    result.textContent = `A sua pontuação final é: ${score}`;
})
