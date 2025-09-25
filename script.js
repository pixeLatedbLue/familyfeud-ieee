const questions = [
    {
        question: "Name something people do to look busy at work",
        answers: [
            { text: "Fake a call", score: 50 },
            { text: "Type jibberish", score: 30 },
            { text: "Get their steps in", score: 20 },
            { text: "Take a smoking break", score: 10 }
        ]
    },
    {
        question: "What's the weirdest thing someone might keep in their fridge?",
        answers: [
            { text: "Socks", score: 50 },
            { text: "Phone", score: 30 },
            { text: "Books", score: 20 },
            { text: "Keys", score: 10 }
        ]
    },
    {
        question: "Name something that you hide from your roommate",
        answers: [
            { text: "Bhai kitna pada?", score: 50 },
            { text: "Ghar ka khaana", score: 30 },
            { text: "Conversations with bf/gf", score: 20 },
            { text: "Personal Diary", score: 10 }
        ]
    },
    {
        question: "Name something people pretend to love on a first meet",
        answers: [
            { text: "Taylor Swift", score: 50 },
            { text: "Matcha", score: 30 },
            { text: "F1", score: 20 },
            { text: "Marathons", score: 10 }
        ]
    },
    {
        question: "Reasons you give to breakup",
        answers: [
            { text: "It's not you it's me", score: 50 },
            { text: "You deserve someone better", score: 30 },
            { text: "Abba nahi maanenge", score: 20 },
            { text: "My bestie doesnt like you", score: 10 }
        ]
    },
    {
        question: "Name an item every hostel room must have",
        answers: [
            { text: "Kettle", score: 50 },
            { text: "Maggi", score: 30 },
            { text: "Extension cord", score: 20 },
            { text: "Iron", score: 10 }
        ]
    },
    {
        question: "What should you not say to your teacher",
        answers: [
            { text: "Is this graded", score: 50 },
            { text: "Maam attendance", score: 30 },
            { text: "Maam time's up", score: 20 },
            { text: "Will you marry me?", score: 10 }
        ]
    },
    {
        question: "Famous places in campus",
        answers: [
            { text: "Foodys", score: 50 },
            { text: "DC/FC", score: 30 },
            { text: "Amul", score: 20 },
            { text: "Nescafe", score: 10 }
        ]
    },
    {
        question: "Name the most favourite academic blocks",
        answers: [
            { text: "TT", score: 50 },
            { text: "PRP", score: 30 },
            { text: "SJT", score: 20 },
            { text: "MB", score: 10 }
        ]
    },
    {
        question: "What is the best day of the week",
        answers: [
            { text: "Friday", score: 50 },
            { text: "Saturday", score: 30 },
            { text: "Sunday", score: 20 },
            { text: "Thursday", score: 10 }
        ]
    },
    {
        question: "Roommates are doing what right before CATS",
        answers: [
            { text: "Black market", score: 50 },
            { text: "Rage baiting", score: 30 },
            { text: "\"Summarise these 10 pages\"", score: 20 },
            { text: "Binge watching The summer I Turned Pretty", score: 10 }
        ]
    },
    {
        question: "Excuses for being late to class",
        answers: [
            { text: "Maam didnt get shuttle", score: 50 },
            { text: "I had a class in MB", score: 30 },
            { text: "Proctor meeting", score: 20 },
            { text: "Mess line was too long", score: 10 }
        ]
    },
    {
        question: "Types of people in class",
        answers: [
            { text: "The 9 ptr", score: 50 },
            { text: "\"Maam we have a quiz today\"", score: 30 },
            { text: "Creeps", score: 20 },
            { text: "Couples", score: 10 }
        ]
    },
    {
        question: "Name a time when students always feel sleepy",
        answers: [
            { text: "In exam hall", score: 50 },
            { text: "8am class", score: 30 },
            { text: "One night before CATs", score: 20 },
            { text: "2pm class", score: 10 }
        ]
    },
    {
        question: "Name a movie character who would be terrible at hide-and-seek",
        answers: [
            { text: "Hulk", score: 50 },
            { text: "King Kong", score: 30 },
            { text: "Dory", score: 20 },
            { text: "Pikachu", score: 10 }
        ]
    },
    {
        question: "What can you do during gravitas",
        answers: [
            { text: "Hack the Hackathon", score: 50 },
            { text: "Run after OD", score: 30 },
            { text: "Checkout all the stalls", score: 20 },
            { text: "Bed rotting", score: 10 }
        ]
    },
    {
        question: "Name something you try to get off but always comes back",
        answers: [
            { text: "Ex", score: 50 },
            { text: "Fat", score: 30 },
            { text: "Dandruff", score: 20 },
            { text: "Red tag", score: 10 }
        ]
    },
    {
        question: "Name something you don't want people to ask you for",
        answers: [
            { text: "Girlfriend", score: 50 },
            { text: "Weight", score: 30 },
            { text: "Salary", score: 20 },
            { text: "Cat marks", score: 10 }
        ]
    },
    {
        question: "Name somethiong a funeral director would hate to dicover about the body they're about to bury",
        answers: [
            { text: "It's the wrong person", score: 50 },
            { text: "It's missing", score: 30 },
            { text: "It stinks", score: 20 },
            { text: "That it's alive", score: 10 }
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const strikeButton = document.getElementById('strike-button');
    const nextButton = document.getElementById('next-button');
    const strikeOverlay = document.getElementById('strike-overlay');
    const questionElement = document.getElementById('question');
    const questionCounter = document.getElementById('question-counter');
    const answerBoard = document.getElementById('answer-board');

    let currentQuestion = 0;

    function updateQuestion() {
        const question = questions[currentQuestion];
        questionElement.textContent = question.question;
        questionCounter.textContent = `Question ${currentQuestion + 1}/15`; 
        const answerCards = answerBoard.querySelectorAll('.answer-card');
        answerCards.forEach((card, index) => {
            const answerText = card.querySelector('.answer-text');
            const answerScore = card.querySelector('.answer-score');
            answerText.textContent = question.answers[index].text;
            answerScore.textContent = question.answers[index].score;
            card.classList.remove('revealed');
        });
    }
    strikeButton.addEventListener('click', () => {
        strikeOverlay.classList.add('visible');
        setTimeout(() => {
            strikeOverlay.classList.remove('visible');
        }, 1000);
    });
    const answerCards = document.querySelectorAll('.answer-card');
    answerCards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('revealed');
        });
    });
    nextButton.addEventListener('click', () => {
        currentQuestion++;
        
        if (currentQuestion >= 15) {
            questionCounter.style.display = 'none';
            questionElement.textContent = 'The IEEE-VIT version of Family-Feud has now ended!';
            answerBoard.style.display = 'none';
            strikeButton.style.display = 'none';
            nextButton.style.display = 'none';
        } else {
            updateQuestion();
        }
    });
    updateQuestion();

});
