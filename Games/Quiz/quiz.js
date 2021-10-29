const quizData = [
    {
        question: "In which country was the former Kingdom of Kaffa located?",
        a: "India",
        b: "Peru",
        c: "Ethiopia",
        d: "Malaysia",
        correct: "c",
    },
    {
        question: "Which country brought the cocoa pod to Europe in 1519?",
        a: "Great Britain",
        b: "Portugal",
        c: "The Netherlands",
        d: "Spain",
        correct: "d",
    },
    {
        question: "How do you get the cocoa flavor?",
        a: "Roasting the cocoa beans",
        b: "Boiling the cocoa beans",
        c: "Grating the cocoa beans",
        d: "Squeezing the cocoa beans",
        correct: "a",
    },
    {
        question: "The botanical name for the cocoa tree, 'Theobroma Cacao' means translated ...?",
        a: "Imperial pleasure",
        b: "Tea tree fruit",
        c: "Food of the gods",
        d: "Meal of the rulers",
        correct: "c",
    },
    {
        question: "A scientific study is supposed to show that there really is an ideal time to drink coffee. What time should you have your first cup of coffee?",
        a: "between 8:00 a.m. and 9:00 a.m.",
        b: "between 9:30 a.m. and 11:30 a.m.",
        c: "between 12:00 a.m. and 12:30 a.m.",
        d: "between 7:00 a.m. and 8:00 a.m.",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
                  <a style="margin-left: 20px; color:#4A341E" href="../game.html" id="back" >click here to go back to the game page..</a>
            `
        }
    }
})