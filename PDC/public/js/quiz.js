// quiz.js
new Vue({
    el: '#quiz-app',
    data: {
        questions: [
            { question: "What is the capital of France?", answers: ["Paris", "London", "Rome"], correct: 0 },
            { question: "Which planet is known as the Red Planet?", answers: ["Earth", "Mars", "Jupiter"], correct: 1 }
        ],
        currentQuestion: 0,
        score: 0,
        finished: false
    },
    methods: {
        answerQuestion: function(index) {
            if (index === this.questions[this.currentQuestion].correct) {
                this.score++;
            }
            this.currentQuestion++;
            if (this.currentQuestion >= this.questions.length) {
                this.finished = true;
            }
        }
    }
});
