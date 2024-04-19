//Массив с вопросами, вариантами ответов и правильными ответами
let questions = [
    {
        question: "Какую тему по математике вы сейчас проходите",
        options: ["Функция", "Дроби", "Степени", "+ и - числа"],
        correctAnswer: "Функция"
    },
    {
        question: "Решите пример: 2 + 2 * 2",
        options: ["8", "6", "Не знаю", "Вам надо вы и решайте"],
        correctAnswers: "6"
    },
    {
        question: "Назовите формулу функции",
        options: ["y = kx + b", "2a + 2b", "a + b", "2ab"],
        correctAnswer: "У = kx + b"
    },

];

let currentQuestion = 0; //Текущий вопрос
let correctAnswers = 0;//Количество правильных ответов

//Функция для отображения текущего вопроса и вариантов ответов
function displayQuestion() {
    let questionElement = document.getElementById("question"); //Получим блок куда размещать вопрос
    questionElement.textContent = `Вопрос ${currentQuestion + 1}: ${questions[currentQuestion].question}`
    //Получим блок кнопок
    let optionsElement = document.getElementById("options");
    //Очистим блок с кнопками
    optionsElement.innerHTML = "";

    //Массив ответов
    let optionsArray = questions[currentQuestion].options;

    //Создать кнопки с вариантами ответов и привязать к ним функцию nextQuestion
    optionsArray.forEach((option) => {
        let button = document.createElement('button');
        optionsElement.append(button);
        button.textContent = option;
        button.classList.add('btn')
    })
    //При клике на блок с кнопками:
    optionsElement.addEventListener('click', (e) => {
        //Получаем в переменную кпопку на которую кликнули
        let target = e.target;
        console.log(target);
        //Вызовем функцию проверки ответа на корректность и перехода к следующему вопросу (в аргумент функции передаем текст ответа):
        nextQuestion(target.textContent)
    }, { once: true })

}

function nextQuestion(answer) {
    if (answer === questions[currentQuestion].correctAnswer) {
        correctAnswers++;
    }
    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        displayResult();
    }
}

function displayResult() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const resultElement = document.getElementById("result");
    questionElement.style.display = "none";
    optionsElement.style.display = "none";
    resultElement.textContent = `Правильных ответов: ${correctAnswers} из ${questions.length}`;

}