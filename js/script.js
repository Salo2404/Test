//Массив с вопросами, вариантами ответов и правильными ответами
let questions = [
    {
        question: "Какую тему по математике вы сейчас проходите",
        options: ["Функция", "Дроби", "Степени", "+ и - числа"],
        correctAnswer: "Функция"
    },
    {
        question: "Какую тему по математике вы сейчас проходите",
        options: ["Функция", "Дроби", "Степени", "+ и - числа"],
        correctAnswer: "Функция"
    },
    {
        question: "Какую тему по математике вы сейчас проходите",
        options: ["Функция", "Дроби", "Степени", "+ и - числа"],
        correctAnswer: "Функция"
    },

];

let currentQuestion = 0; //Текущий вопрос
let currentAnswers = 0; //Количество вопросов

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
        //Вызовем функцию проверки ответа на корректность и перехода к следующему вопросу (в аргумент функции передаем текст ответа):
        nextQuestion(target.textContent)
    })

}


displayQuestion();