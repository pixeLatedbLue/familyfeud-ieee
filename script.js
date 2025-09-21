const questions = [
    {
        question: "Name something people do to look busy at work",
        answers: [
            { text: "Faking a call", score: 50 },
            { text: "Typing jibberish", score: 30 },
            { text: "Walk around", score: 20 },
            { text: "Take a break", score: 10 }
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
            { text: "Maggi", score: 50 },
            { text: "Chips", score: 30 },
            { text: "Homemade Snacks", score: 20 },
            { text: "Personal Diary", score: 10 }
        ]
    },
    {
        question: "Name something people pretend to love on a first meet",
        answers: [
            { text: "Reading", score: 50 },
            { text: "Exercising", score: 30 },
            { text: "Matcha Coffee", score: 20 },
            { text: "F1", score: 10 }
        ]
    },
    {
        question: "Reasons you give to ghost someone",
        answers: [
            { text: "Studying", score: 50 },
            { text: "Sleeping", score: 30 },
            { text: "Emergency", score: 20 },
            { text: "Not well", score: 10 }
        ]
    },
    {
        question: "Name an item every hostel room must have",
        answers: [
            { text: "Kettle", score: 50 },
            { text: "Iron", score: 30 },
            { text: "Mirror", score: 20 },
            { text: "Bug ", score: 10 }
        ]
    },
    {
        question: "What should you not say to your teacher",
        answers: [
            { text: "You are wrong", score: 50 },
            { text: "I was present that day", score: 30 },
            { text: "I didnt study", score: 20 },
            { text: "*ignores*", score: 10 }
        ]
    },
    {
        question: "Famous places on campus",
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
            { text: "Technology Tower", score: 50 },
            { text: "Main Building", score: 30 },
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
            { text: "Last minute study", score: 50 },
            { text: "Panicking", score: 30 },
            { text: "Making notes", score: 20 },
            { text: "Praying", score: 10 }
        ]
    },
    {
        question: "Excuses for being late to class",
        answers: [
            { text: "No lift", score: 50 },
            { text: "Overslept", score: 30 },
            { text: "Unwell", score: 20 },
            { text: "Got lost", score: 10 }
        ]
    },
    {
        question: "Types of people in class",
        answers: [
            { text: "Reel Scrollers", score: 50 },
            { text: "Sleepers", score: 30 },
            { text: "Backbenchers", score: 20 },
            { text: "Annoying First Benchers", score: 10 }
        ]
    },
    {
        question: "Name a time when students always feel sleepy",
        answers: [
            { text: "All day except the night", score: 50 },
            { text: "8am class", score: 30 },
            { text: "During cats", score: 20 },
            { text: "2pm class", score: 10 }
        ]
    },
    {
        question: "Name a movie character who would be terrible at hide-and-seek",
        answers: [
            { text: "Hulk", score: 50 },
            { text: "King Kong", score: 30 },
            { text: "Godzilla", score: 20 },
            { text: "Olaf", score: 10 }
        ]
    },
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
        questionCounter.textContent = `Question ${currentQuestion + 1}/19`; // Fix 4: Change from 15 to 19

        // Update answer cards
        const answerCards = answerBoard.querySelectorAll('.answer-card');
        answerCards.forEach((card, index) => {
            const answerText = card.querySelector('.answer-text');
            const answerScore = card.querySelector('.answer-score');
            answerText.textContent = question.answers[index].text;
            answerScore.textContent = question.answers[index].score;
            card.classList.remove('revealed');
        });
    }

    // Handle showing the strike "X"
    strikeButton.addEventListener('click', () => {
        strikeOverlay.classList.add('visible');
        setTimeout(() => {
            strikeOverlay.classList.remove('visible');
        }, 1000);
    });

    // Handle revealing answers
    const answerCards = document.querySelectorAll('.answer-card');
    answerCards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('revealed');
        });
    });

    // Handle next question
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

    // Initialize first question
    updateQuestion();
});