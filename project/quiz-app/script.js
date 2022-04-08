const quizData = [
    {
        question: "What’s the national flower of Japan?",
        a: "Rose",
        b: "Lotus",
        c: "Cherry blossom",
        d: "Sunflower",
        correct: "c",
    },
    {
        question: "How many time zones are there in Russia",
        a: "11",
        b: "10",
        c: "12",
        d: "18",
        correct: "a",
    },
    {
        question: "What is the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "Who is the President of US?",
        a: "Florin Pop",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Mihai Andrei",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "How many days does it take for the Earth to orbit the Sun? ",
        a: "365",
        b: "360",
        c: "366",
        d: "370",
        correct:"a",
    },
    {
        question: "Which of the following empires had no written language: Incan, Aztec, Egyptian, Roman?",
        a: "Incan",
        b: "Aztec",
        c: "Egyptian",
        d: "Roman",
        correct:"a",
    },
    {
        question: "Until 1923, what was the Turkish city of Istanbul called",
        a: "Sonstantinople",
        b: "Constantinople",
        c: "Constantin",
        d: "Constantinople's",
        correct:"b",
    },
    {
        question: "What country has the most islands in the world?",
        a: "Sweden, over 300000",
        b: "Sweden, over 22000",
        c: "Sweden, over 3200000",
        d: "Sweden, over 220,000!",
        correct:"d",
    },
    {
        question: "What’s the capital of Canada?",
        a: "Sweiden",
        b: "Lambo",
        c: "Ottawa",
        d: "Greenland",
        correct:"c",
    },
    {
        question: "Name the largest (not highest) mountain range in the world?",
        a: "Himalaya",
        b: "The Andes",
        c: "Righ",
        d: "Nil",
        correct:"b",
    },
    {
        question: "Where is the lowest natural place on planet Earth?",
        a: "China",
        b: "Nepal",
        c: "Russia",
        d: "The Mariana Trench",
        correct:"d",
    },
    {
        question: "Name the longest river in the world?",
        a: "The Nile",
        b: "The Ganga",
        c: "The Berhmputra",
        d: "The Kaveri",
        correct:"a",
    },
    {
        question: "What is the slang name for New York City, used by locals?",
        a: "Chili",
        b: "Shilo",
        c: "Shayma",
        d: "Gotham",
        correct:"d",
    },
    {
        question: "Name the best-selling book series of the 21st century?",
        a: "Geeta",
        b: "Harry Potter",
        c: "The black day",
        d: "Veda",
        correct:"b",
    },
    {
        question: "Which language has the most words (according to dictionary entries)?",
        a: "English",
        b: "Hindi",
        c: "French",
        d: "Mathli",
        correct:"a",
    },
    {
        question: "Which famous graffiti artist comes from Bristol?",
        a: "Hip Hop",
        b: "Robotics",
        c: "ON time",
        d: "Banksy",
        correct:"d",
    },
    {
        question: "Norwegian artist Edvard Munch is famous for painting which iconic piece?",
        a: "Manalish",
        b: "The Scream",
        c: "Depth",
        d: "Wonder",
        correct:"b",
    },
    {
        question: "Which artist painted the ceiling of the Sistine Chapel in Rome?",
        a: "Michelangelo",
        b: "langelo",
        c: "Miche",
        d: "Shilospitra",
        correct:"a",
    },
    {
        question: "light speed =",
        a: "300 m/s",
        b: "3*10^8 m/s",
        c: "2.98*10^8 m/s",
        d: "3.10*10^7 m/s",
        correct:"c",
    },
    {
        question: "What’s the smallest country in the world?",
        a: "Russia",
        b: "India",
        c: "The Vatican",
        d: "Netherland",
        correct:"c",
    },
    {
        question: "What’s the national animal of Australia?",
        a: "Red Kangaroo",
        b: "Black Kangaroo",
        c: "Red Rat",
        d: "Rat",
        correct:"a",
    },
    {
        question: "How many stripes are there on the US flag?",
        a: "10",
        b: "7",
        c: "13",
        d: "12",
        correct:"c",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
document.addEventListener("contextmenu", function (e){
    e.preventDefault();
}, false)