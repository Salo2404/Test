//Массив с вопросами, вариантами ответов и правильными ответами
let questions = [
    {
        question: "Когда повесили знамя над рейхстагом?",
        correctAnswer: "01.05.1945"
    },
    {
        question: "В каком году началась Великая Отечественная Война",
        correctAnswer: "1945"
    },
    {
        question: "Чье оружие изображено на кртинке",
        correctAnswer: "Гитлера"
    },
    {
        question: "Какая настоящая фамилия у Сталина",
        correctAnswer: "Джугашвили"
    },
    {
        question: "Как звали сына у Сталина",
        correctAnswer: "Василий"
    },
    {
        question: "Сколько патронов находится в магазине AK-47",
        correctAnswer: "30"
    },
    {
        question: "В каком году была основана компания Walter",
        correctAnswer: "1886"
    },
    {
        question: "Сколько дней длилась Блокада Ленинграда",
        correctAnswer: "872"
    },

];

let uncorrect = [

]

let currentQuestion = 0; //Текущий вопрос
let correctAnswers = 0;//Количество правильных ответов

//Функция для отображения текущего вопроса и вариантов ответов
function displayQuestion() {
    let questionElement = document.getElementById('question'); //Получим блок куда размещать вопрос
    questionElement.textContent = `Вопрос ${currentQuestion + 1}: ${questions[currentQuestion].question}`
    //Получим блок кнопок
    let contbtnElement = document.getElementById('contbtn');
    //Очистим блок с кнопками
    optionsElement.innerHTML = '';

    //Массив ответов
    let Array = questions[currentQuestion].options;

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
    }, { once: true })

}

let input = document.getElementById('input')

function nextQuestion(answer) {
    if (input.value === questions[currentQuestion].correctAnswer) {
        correctAnswers++;
    } else {
        uncorrect.push(questions[currentQuestion].question)
    }
    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        displayResult();
    }
}

function displayResult() {
    console.log(uncorrect)
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const resultElement = document.getElementById("result");
    questionElement.style.display = "none";
    optionsElement.style.display = "none";
    resultElement.textContent = `Правильных ответов: ${correctAnswers} из ${questions.length}`;
    const markElement = document.getElementById('mark');

    if (correctAnswers == 0) {
        markElement.textContent = 'Ваша оценка - 2'
    }
    if (correctAnswers == 1) {
        markElement.textContent = 'Ваша оценка - 2'
    }
    if (correctAnswers == 2) {
        markElement.textContent = 'Ваша оценка - 2'
    }
    if (correctAnswers == 3) {
        markElement.textContent = 'Ваша оценка - 3'
    }
    if (correctAnswers == 4) {
        markElement.textContent = 'Ваша оценка - 4'
    }
    if (correctAnswers == 5) {
        markElement.textContent = 'Ваша оценка - 4'
    }
    if (correctAnswers == 6) {
        markElement.textContent = 'Ваша оценка - 5'
    }

    uncorrect.forEach((item) => {
        let uncorrectAnswer = document.createElement("div")
        resultElement.append(uncorrectAnswer)
        uncorrectAnswer.innerHTML = item
    })
}





displayQuestion();