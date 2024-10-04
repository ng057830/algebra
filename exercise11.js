// Validar el signo seleccionado
document.getElementById('signSelect').addEventListener('change', function() {
    var sign = document.getElementById('signSelect').value;
    var feedback = document.getElementById('feedbackStep1');

    if (sign === 'neg') {
        feedback.innerHTML = "¡Correcto! El resultado será negativo.";
    } else {
        feedback.innerHTML = "Recuerda que el resultado es negativo porque multiplicas un número positivo con uno negativo.";
    }
    MathJax.typeset();  // Re-renderizar LaTeX después de mostrar el mensaje
});

// Validar las variables involucradas
document.getElementById('varX').addEventListener('change', function() {
    var varX = document.getElementById('varX').checked;
    var feedback = document.getElementById('feedbackStep2');

    if (varX) {
        feedback.innerHTML = "¡Correcto! La variable involucrada es \\( x \\).";
        MathJax.typeset();  // Re-renderizar LaTeX
    } else {
        feedback.innerHTML = "Selecciona la variable correcta.";
    }
});

// Validar la multiplicación de coeficientes
function checkStep3() {
    var input = document.getElementById('coefInput').value.trim();
    var feedback = document.getElementById('feedbackStep3');

    if (input == "-20") {
        feedback.innerHTML = "¡Correcto! El coeficiente es -20.";
    } else {
        feedback.innerHTML = "Incorrecto. Multiplica 4 y -5.";
    }
}

// Validar los exponentes de las variables
function checkStep4() {
    var exp1 = document.getElementById('exp1Input').value.trim();
    var exp2 = document.getElementById('exp2Input').value.trim();
    var feedback = document.getElementById('feedbackStep4');

    if (exp1 == "2" && exp2 == "3") {
        feedback.innerHTML = "¡Correcto! Los exponentes son 2 y 3.";
    } else {
        feedback.innerHTML = "Revisa los exponentes: uno es 2 y el otro es 3.";
    }
}

// Validar la suma de exponentes
function checkStep5() {
    var input = document.getElementById('sumExpInput').value.trim();
    var feedback = document.getElementById('feedbackStep5');

    if (input == "5") {
        feedback.innerHTML = "¡Correcto! La suma de los exponentes es 5.";
        // Mostrar el resultado final en LaTeX
        document.getElementById('finalResult').innerHTML = "\\[ -20x^5 \\]";
        MathJax.typeset();  // Re-renderizar LaTeX para el resultado final
    } else {
        feedback.innerHTML = "Incorrecto. Recuerda sumar: \\(2 + 3 = 5\\).";
        MathJax.typeset();  // Re-renderizar LaTeX
    }
}
