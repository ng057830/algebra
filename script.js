// Datos del juego
const steps = [
    // Parte 1: Identificar las partes de la expresión
    {
        question: '¿Cuál es el monomio en la expresión \\( 3x \\cdot (2xy + 4y - 5) \\)?',
        type: 'checkbox',
        options: ['\\( 3x \\)', '\\( 2xy \\)', '\\( 4y \\)', '\\( -5 \\)'],
        correctOptions: [0], // Índice de la opción correcta
        hints: [
            'Un monomio está compuesto por un número y una variable.',
            'Busca el término que tiene solo una letra y un número, sin más operaciones.',
            'No te fijes en los términos dentro del paréntesis, busca el que está multiplicando al paréntesis.',
            'El monomio no tiene varios términos, es una combinación directa de un número y una sola letra.'
        ]
    },
    {
        question: '¿Cuántos términos tiene el polinomio \\( 2xy + 4y - 5 \\)?',
        type: 'combobox',
        options: ['1 término', '2 términos', '3 términos', '4 términos'],
        correctOption: 2,
        hints: [
            'Los términos de un polinomio están separados por signos de suma o resta.',
            'Cuenta cuántas veces ves los signos \\( + \\) o \\( - \\).',
            'Cada signo de suma o resta indica el final de un término y el comienzo de otro.',
            'Si hay más de una letra o número antes o después de un signo, eso indica que tienes varios términos.'
        ]
    },
    // ... Añade aquí las demás preguntas siguiendo el mismo formato
];

// Variables del juego
let currentStep = 0;
let hintIndex = 0;

// Inicializar el juego
function initGame() {
    showStep(currentStep);
}

// Mostrar la pregunta actual
function showStep(stepIndex) {
    const gameDiv = document.getElementById('game');
    gameDiv.innerHTML = '';

    const step = steps[stepIndex];
    hintIndex = 0; // Reiniciar el índice de pistas para cada pregunta

    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';
    questionDiv.innerHTML = `<p>${step.question}</p>`;
    gameDiv.appendChild(questionDiv);

    // Crear opciones según el tipo de pregunta
    if (step.type === 'checkbox') {
        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'options';

        step.options.forEach((option, index) => {
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = 'checkbox';
            input.name = 'option';
            input.value = index;
            label.appendChild(input);
            label.innerHTML += ` ${option}`;
            optionsDiv.appendChild(label);
        });

        gameDiv.appendChild(optionsDiv);
    } else if (step.type === 'combobox') {
        const select = document.createElement('select');
        select.id = 'userInput';
        step.options.forEach((option, index) => {
            const opt = document.createElement('option');
            opt.value = index;
            opt.text = option;
            select.appendChild(opt);
        });
        gameDiv.appendChild(select);
    } else if (step.type === 'textbox') {
        const inputElement = document.createElement('input');
        inputElement.type = 'text';
        inputElement.id = 'userInput';
        gameDiv.appendChild(inputElement);
    }

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Enviar';
    submitButton.onclick = checkAnswer;
    gameDiv.appendChild(submitButton);

    const feedbackDiv = document.createElement('div');
    feedbackDiv.id = 'feedback';
    gameDiv.appendChild(feedbackDiv);

    renderMathInElement(gameDiv, {
        delimiters: [
            { left: "\\(", right: "\\)", display: false },
            { left: "\\[", right: "\\]", display: true }
        ]
    });
}

// Verificar la respuesta del usuario
function checkAnswer() {
    const feedbackDiv = document.getElementById('feedback');
    const step = steps[currentStep];
    let userCorrect = false;

    if (step.type === 'checkbox') {
        const inputs = document.querySelectorAll('input[name="option"]:checked');
        const selectedOptions = Array.from(inputs).map(input => parseInt(input.value));

        // Verificar si las opciones seleccionadas son correctas
        if (arraysEqual(selectedOptions, step.correctOptions)) {
            userCorrect = true;
        }
    } else if (step.type === 'combobox') {
        const select = document.getElementById('userInput');
        const selectedOption = parseInt(select.value);
        if (selectedOption === step.correctOption) {
            userCorrect = true;
        }
    } else if (step.type === 'textbox') {
        const userInput = document.getElementById('userInput').value.trim();
        if (validateAnswer(userInput, step.correctAnswer)) {
            userCorrect = true;
        }
    }

    if (userCorrect) {
        feedbackDiv.innerHTML = '<p class="correct">¡Muy bien! Has acertado.</p>';
        currentStep++;
        if (currentStep < steps.length) {
            setTimeout(() => showStep(currentStep), 1500);
        } else {
            feedbackDiv.innerHTML += '<p>¡Felicidades! Has completado el ejercicio.</p>';
        }
    } else {
        if (hintIndex < step.hints.length) {
            feedbackDiv.innerHTML = `<p class="error">${step.hints[hintIndex]}</p>`;
            hintIndex++;
        } else {
            feedbackDiv.innerHTML = '<p class="error">Vamos a intentarlo de nuevo, ¡tú puedes!</p>';
        }
    }
}

// Función auxiliar para comparar arrays
function arraysEqual(a, b) {
    if (a.length !== b.length) return false;
    a.sort(); b.sort();
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

// Función para validar la respuesta del usuario en preguntas de texto
function validateAnswer(input, correctAnswer) {
    const cleanedInput = input.replace(/\s+/g, '').toLowerCase();
    const cleanedAnswer = correctAnswer.replace(/\s+/g, '').toLowerCase();
    return cleanedInput === cleanedAnswer;
}

// Iniciar el juego cuando la página cargue
window.onload = initGame;
