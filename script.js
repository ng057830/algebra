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
    // Parte 2: Multiplicar el monomio por el primer término
    {
        question: '¿Cuáles son las variables en el monomio \\( 3x \\)?',
        type: 'checkbox',
        options: ['\\( x \\)', '\\( y \\)', '\\( x \\) y \\( y \\)', 'No tiene variables'],
        correctOptions: [0],
        hints: [
            'La variable es la letra que acompaña al número.',
            'Concéntrate en las letras que están con el número en el monomio.',
            'Busca la letra que acompaña al número en \\( 3x \\), ¿cuántas letras ves ahí?',
            'Si solo ves una letra con el número, esa es la variable del monomio.'
        ]
    },
    {
        question: '¿Cuál es el coeficiente en \\( 3x \\)?',
        type: 'textbox',
        correctAnswer: '3',
        hints: [
            'El coeficiente es el número que multiplica a la variable.',
            'Piensa en qué número está directamente antes de la letra \\( x \\).',
            'Busca el número que multiplica a la variable en \\( 3x \\), no te distraigas con otros términos.',
            'El coeficiente siempre es el número que multiplica, aunque no se vea ningún signo delante de él.'
        ]
    },
    {
        question: '¿Cuál es el coeficiente en \\( 2xy \\)?',
        type: 'textbox',
        correctAnswer: '2',
        hints: [
            'El coeficiente está justo delante de las letras.',
            'Busca el número que está multiplicando a las dos letras en \\( 2xy \\).',
            'No te confundas con las letras, el coeficiente es solo el número.',
            'El coeficiente es el número que está multiplicando a las variables \\( x \\) y \\( y \\).'
        ]
    },
    {
        question: '¿Cuál es el signo en \\( 3x \\)?',
        type: 'combobox',
        options: ['Positivo (+)', 'Negativo (-)', 'No tiene signo'],
        correctOption: 0,
        hints: [
            'Si no ves un signo negativo delante, el número es positivo.',
            'En muchos casos, el signo positivo no se escribe explícitamente.',
            'Si no hay un signo visible, revisa si el número sigue siendo positivo.',
            'El número positivo puede estar sin signo escrito, pero sigue siendo positivo.'
        ]
    },
    {
        question: '¿Cuál es el signo en \\( 2xy \\)?',
        type: 'combobox',
        options: ['Positivo (+)', 'Negativo (-)', 'No tiene signo'],
        correctOption: 0,
        hints: [
            'Si no ves un signo negativo delante de \\( 2xy \\), entonces es positivo.',
            'El signo positivo puede no estar escrito, pero siempre está ahí si no hay un negativo.',
            'Revisa si hay algo que indique un cambio de signo. Si no lo ves, sigue siendo positivo.',
            'El signo positivo no siempre se muestra, pero si no es negativo, es positivo.'
        ]
    },
    {
        question: 'Si multiplicas un número positivo por otro número positivo, ¿qué signo tendrá el resultado?',
        type: 'checkbox',
        options: ['Positivo', 'Negativo', 'Depende del número', 'Ninguno'],
        correctOptions: [0],
        hints: [
            'Multiplicar números con el mismo signo da un resultado con el mismo signo.',
            'Piensa en lo que ocurre cuando multiplicas dos números que son mayores que cero.',
            'Si ambos números son positivos, el resultado no puede cambiar de signo.',
            '¿Qué ocurre cuando los números tienen el mismo signo? Mantienen ese signo.'
        ]
    },
    {
        question: 'Multiplica los coeficientes \\( 3 \\) y \\( 2 \\). ¿Cuál es el resultado?',
        type: 'textbox',
        correctAnswer: '6',
        hints: [
            'Concéntrate en multiplicar los números, sin preocuparte por las letras.',
            'Recuerda que estamos multiplicando los números como lo haces normalmente.',
            'Si es útil, escribe en papel cuánto es \\( 3 \\) veces \\( 2 \\).',
            'Olvídate de las letras por un momento, solo calcula la multiplicación de \\( 3 \\) por \\( 2 \\).'
        ]
    },
    {
        question: 'Multiplica las variables \\( x \\cdot x \\). ¿Cuál es el resultado?',
        type: 'textbox',
        correctAnswer: 'x^2',
        hints: [
            'Cuando multiplicas una letra por sí misma, las operaciones cambian de forma.',
            'Piensa en lo que ocurre cuando multiplicas una cantidad que es la misma, ¿cómo puedes simplificarlo?',
            'Al multiplicar variables iguales, algo se combina en el proceso, observa cómo lo haces normalmente.',
            'Reflexiona sobre qué pasa cuando tienes una cantidad que multiplicas por sí misma.'
        ]
    },
    {
        question: '¿Cuál es el resultado completo de multiplicar \\( 3x \\cdot 2xy \\)?',
        type: 'textbox',
        correctAnswer: '6x^2y',
        hints: [
            'Junta el resultado que obtuviste al multiplicar los números y las variables.',
            'Combina lo que obtuviste de multiplicar los coeficientes y las letras.',
            'El número va primero, y luego las letras que multiplicaste.',
            'Escribe tu resultado final, recuerda incluir tanto el número como las letras.'
        ]
    },
    // Parte 3: Multiplicar el monomio por el segundo término
    {
        question: '¿Cuál es el signo en \\( 3x \\)?',
        type: 'combobox',
        options: ['Positivo', 'Negativo'],
        correctOption: 0,
        hints: [
            'Si no ves un signo negativo, entonces es positivo.',
            'Un número positivo a veces no muestra el signo explícitamente.',
            'El signo positivo no tiene que estar escrito.',
            'Asegúrate de observar si falta un signo negativo.'
        ]
    },
    {
        question: '¿Cuál es el signo en \\( 4y \\)?',
        type: 'combobox',
        options: ['Positivo', 'Negativo', 'No tiene signo'],
        correctOption: 0,
        hints: [
            'Si no ves un signo negativo delante del \\( 4y \\), entonces es positivo.',
            'El signo positivo puede estar implícito, aunque no lo veas escrito.',
            'Observa si hay algo que indique un cambio de signo, como un menos. Si no lo ves, sigue siendo positivo.',
            'Recuerda que cuando no hay un signo visible, el número suele ser positivo.'
        ]
    },
    {
        question: 'Multiplica los coeficientes \\( 3 \\) y \\( 4 \\). ¿Cuál es el resultado?',
        type: 'textbox',
        correctAnswer: '12',
        hints: [
            'Solo necesitamos multiplicar los números 3 y 4, olvídate de las letras por un momento.',
            'Piensa en cuánto es \\( 3 \\) veces \\( 4 \\). ¿Has usado las tablas de multiplicar?',
            'Intenta visualizar la multiplicación en un papel si es necesario.',
            'Concéntrate solo en los coeficientes, sin preocuparte por las letras en este paso.'
        ]
    },
    {
        question: '¿Cuál es el resultado de multiplicar \\( x \\cdot y \\)?',
        type: 'textbox',
        correctAnswer: 'xy',
        hints: [
            '\\( x \\) y \\( y \\) son diferentes variables, ¿qué pasa cuando las multiplicas?',
            'Las variables no cambian su forma si son diferentes, solo se colocan juntas.',
            'No sumes ni combines las letras, ya que son distintas.',
            'Imagina que simplemente las escribes juntas cuando las multiplicas, porque no son iguales.'
        ]
    },
    {
        question: '¿Cuál es el resultado completo de multiplicar \\( 3x \\cdot 4y \\)?',
        type: 'textbox',
        correctAnswer: '12xy',
        hints: [
            'Junta el resultado que obtuviste de multiplicar los números y las letras.',
            'El número que calculaste va primero, seguido por las letras que multiplicaste.',
            'Recuerda que las letras \\( x \\) y \\( y \\) no se combinan, solo se escriben juntas.',
            'Asegúrate de poner el número y las letras en el mismo orden en que los multiplicaste.'
        ]
    },
    // Parte 4: Multiplicar el monomio por el tercer término
    {
        question: '¿Cuál es el signo en \\( 3x \\)?',
        type: 'combobox',
        options: ['Positivo', 'Negativo'],
        correctOption: 0,
        hints: [
            'Observa si el número tiene un signo negativo delante. Si no lo tiene, entonces es positivo.',
            'El signo positivo puede estar implícito, aunque no lo veas.',
            'Revisa si el número cambia de signo o si permanece positivo.',
            'Un número sin un signo negativo sigue siendo positivo.'
        ]
    },
    {
        question: '¿Cuál es el signo en \\( -5 \\)?',
        type: 'combobox',
        options: ['Positivo', 'Negativo'],
        correctOption: 1,
        hints: [
            'Si ves un menos (-) delante del número, entonces el número es negativo.',
            'El signo negativo siempre se indica claramente con un símbolo menos.',
            'Recuerda que los números negativos siempre muestran el signo menos.',
            'Observa si hay un signo menos justo delante del número 5.'
        ]
    },
    {
        question: 'Si multiplicas un número positivo por un número negativo, ¿qué signo tendrá el resultado?',
        type: 'combobox',
        options: ['Negativo', 'Positivo'],
        correctOption: 0,
        hints: [
            'Multiplicar números con signos diferentes siempre da un resultado negativo.',
            'Piensa en cómo cambia el signo cuando los números tienen signos opuestos.',
            'Si uno de los números es negativo, el producto cambiará de signo.',
            'Al multiplicar un positivo y un negativo, el signo final del resultado será negativo.'
        ]
    },
    {
        question: 'Multiplica los coeficientes \\( 3 \\) y \\( -5 \\). ¿Cuál es el resultado?',
        type: 'textbox',
        correctAnswer: '-15',
        hints: [
            'Recuerda que estamos multiplicando un número positivo por un número negativo.',
            'Piensa en cuánto es \\( 3 \\) veces \\( 5 \\) y luego aplica el signo negativo.',
            'Multiplica los números normalmente, luego pon el signo que corresponde.',
            'Visualiza el proceso de multiplicar números, teniendo en cuenta que uno es negativo.'
        ]
    },
    {
        question: '¿Cuál es el resultado completo de multiplicar \\( 3x \\cdot (-5) \\)?',
        type: 'textbox',
        correctAnswer: '-15x',
        hints: [
            'Junta el resultado de la multiplicación de los coeficientes y la variable.',
            'El número negativo debe aparecer en el resultado.',
            'No olvides incluir la variable \\( x \\) después del número.',
            'Asegúrate de que tanto el número como la variable estén presentes en tu respuesta.'
        ]
    },
    // Parte 5: Reunir todos los resultados
    {
        question: 'Ahora que tienes todos los términos, ¿cuáles son los resultados que obtuviste de las multiplicaciones?',
        type: 'checkbox',
        options: [
            '\\( 6x^2y \\), \\( 12xy \\), \\( -15x \\)',
            '\\( 5xy \\), \\( 12xy \\), \\( 15x \\)',
            '\\( 6xy \\), \\( 12xy \\), \\( -15x \\)',
            '\\( 6x^2y \\), \\( 12x \\), \\( 15x \\)'
        ],
        correctOptions: [0],
        hints: [
            'Repasa cada multiplicación que hiciste antes, revisa los números y las letras.',
            'Fíjate en los resultados completos que obtuviste para cada uno de los tres términos.',
            'Revisa si multiplicaste correctamente los coeficientes y las variables.',
            'Asegúrate de que los resultados estén escritos correctamente, tal como los obtuviste.'
        ]
    },
    {
        question: '¿Puedes combinar alguno de estos términos? (Considera las variables y los exponentes)',
        type: 'checkbox',
        options: [
            'No, no se pueden combinar',
            'Sí, puedo combinar dos de ellos',
            'Sí, puedo combinarlos todos',
            'Solo puedo combinar los que tienen \\( x \\)'
        ],
        correctOptions: [0],
        hints: [
            'Para combinar términos, las variables y sus exponentes deben ser iguales.',
            'Revisa si hay términos que tengan exactamente las mismas letras y potencias.',
            'Los términos que puedes combinar tienen que ser idénticos en sus variables.',
            'Observa si hay algo en común entre las variables de los términos que te permita combinarlos.'
        ]
    },
    {
        question: '¿Cuál es la expresión final después de multiplicar \\( 3x \\cdot (2xy + 4y - 5) \\)?',
        type: 'checkbox',
        options: [
            '\\( 6x^2y + 12xy - 15x \\)',
            '\\( 6xy + 12xy - 15x \\)',
            '\\( 5xy + 10xy - 15 \\)',
            '\\( 6x^2 + 12xy + 15x \\)'
        ],
        correctOptions: [0],
        hints: [
            'Revisa los resultados de cada multiplicación, asegúrate de que estén correctos.',
            'Los términos que obtuviste deben estar en el mismo orden y con los signos correctos.',
            'Asegúrate de no haber combinado términos que no deberían combinarse.',
            'Fíjate en el número y las letras de cada término para que coincidan con lo que obtuviste.'
        ]
    }
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
            feedbackDiv.innerHTML = `<p class="hint">${step.hints[hintIndex]}</p>`;
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
