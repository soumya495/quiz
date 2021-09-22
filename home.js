const quizData = [
    {
        question: "India's largest city by population",
        a: 'Delhi',
        b: 'Mumbai',
        c: 'Chennai',
        d: 'Pune',
        correct: 'b'
    },
    {
        question: "What is the name of India's National Aquatic Animal?",
        a: 'River Dolphin',
        b: 'Crocodile',
        c: 'Katla Fish',
        d: 'Green Frog',
        correct: 'a'
    },
    {
        question: "On which spacecraft did Rakesh Sharma make his historic trip to Space?",
        a: 'Salyut 7',
        b: 'Soyuz-T',
        c: 'Apollo 11',
        d: 'Progress 1',
        correct: 'b'
    },
    {
        question: "First University established in India",
        a: 'Banaras Hindu University',
        b: 'Delhi University',
        c: 'Madras University',
        d: 'University of Calcutta',
        correct: 'd'
    },
    {
        question: "Which is the first Indian company listed in nasdaq stock exchange",
        a: 'Tata',
        b: 'Wipro',
        c: 'Infosys',
        d: 'Cognizant',
        correct: 'c'
    }
]

let questEl = document.getElementById('questionEl');
let selected = document.querySelectorAll('input');
let aText = document.getElementById('aText');
let bText = document.getElementById('bText');
let cText = document.getElementById('cText');
let dText = document.getElementById('dText');
let submit = document.getElementById('submit');

let questionNum = 0;
let score = 0;

loadQuiz();

function loadQuiz() {

    let quizQuestion = quizData[questionNum];

    questEl.innerText = quizQuestion.question;
    aText.innerText = quizQuestion.a;
    bText.innerText = quizQuestion.b;
    cText.innerText = quizQuestion.c;
    dText.innerText = quizQuestion.d;

}

function unSelect() {
    for (let i = 0; i < selected.length; i++) {
        if (selected[i].checked)
            selected[i].checked = false;
    }
}

function getSelected() {
    for (let i = 0; i < selected.length; i++) {
        if (selected[i].checked)
            return selected[i].id;
    }
    return undefined;
}

submit.addEventListener('click', () => {
    let currentSelect = getSelected();

    if (currentSelect) {
        if (currentSelect === quizData[questionNum].correct)
            score++;
        questionNum++;
        if (questionNum < quizData.length) {
            loadQuiz();
            unSelect();
        }
        else {
            document.getElementById('quiz').innerHTML =
                `<style>
                #quiz h2,#quiz p{
                    padding: 0.5rem 1.2rem;
                }
                </style>
                <h2>Quiz Over</h2>
            <p>You answered ${score} / ${quizData.length} correctly</p>
            <button onClick="location.reload()">Reload</button>
            `
        }
    }

});