document.getElementById('startExercise11').addEventListener('click', function() {
    // Mostrar el ejercicio 11
    document.getElementById('menu').classList.add('hidden');
    document.getElementById('exercise11').classList.remove('hidden');

    // Cargar contenido del ejercicio
    loadExercise11();
});

document.getElementById('backToMenu').addEventListener('click', function() {
    // Volver al menú
    document.getElementById('exercise11').classList.add('hidden');
    document.getElementById('menu').classList.remove('hidden');
});

function loadExercise11() {
    const content = `
        <div id="step1">
            <p>Paso 1: Selecciona el signo del resultado:</p>
            <select id="signSelect">
                <option value="positive">Positivo (+)</option>
                <option value="negative">Negativo (-)</option>
            </select>
            <button onclick="checkSign()">Comprobar</button>
            <p id="feedbackSign"></p>
        </div>

        <div id="step2" class="hidden">
            <p>Paso 2: Multiplica los coeficientes: <span class="math">\( 4 \)</span> y <span class="math">\( -5 \)</span></p>
            <input type="text" id="coefInput" placeholder="Escribe el resultado">
            <button onclick="checkCoef()">Comprobar</button>
            <p id="feedbackCoef"></p>
        </div>

        <div id="step3" class="hidden">
            <p>Paso 3: Selecciona la variable involucrada:</p>
            <input type="checkbox" id="varX"> <label for="varX">\\( x \\)</label>
            <button onclick="checkVariable()">Comprobar</button>
            <p id="feedbackVar"></p>
        </div>

        <div id="step4" class="hidden">
            <p>Paso 4: Suma los exponentes de \\( x^2 \\) y \\( x^3 \\):</p>
            <input type="text" id="expInput" placeholder="Escribe la suma de los exponentes">
            <button onclick="checkExp()">Comprobar</button>
            <p id="feedbackExp"></p>
        </div>

        <div id="finalResult" class="hidden">
            <h2>Resultado Final</h2>
            <p id="finalFeedback"></p>
        </div>
    `;
    document.getElementById('exercise-content').innerHTML = content;
    renderMathInElement(document.getElementById('exercise-content'));
}

function checkSign() {
    const sign = document.getElementById('signSelect').value;
    const feedback = document.getElementById('feedbackSign');
    if (sign === 'negative') {
        feedback.textContent = '¡Correcto! El signo es negativo.';
        feedback.classList.add('correct');
        document.getElementById('step2').classList.remove('hidden');
    } else {
        feedback.textContent = 'Incorrecto, el signo es negativo porque multiplicas un número positivo con uno negativo.';
        feedback.classList.add('wrong');
    }
}

function checkCoef() {
    const coefInput = document.getElementById('coefInput').value.trim();
    const feedback = document.getElementById('feedbackCoef');
    if (coefInput === '-20') {
        feedback.textContent = '¡Correcto! El coeficiente es -20.';
        feedback.classList.add('correct');
        document.getElementById('step3').classList.remove('hidden');
    } else {
        feedback.textContent = 'Incorrecto. El coeficiente correcto es -20.';
        feedback.classList.add('wrong');
    }
}

function checkVariable() {
    const varX = document.getElementById('varX').checked;
    const feedback = document.getElementById('feedbackVar');
    if (varX) {
        feedback.textContent = '¡Correcto! La variable involucrada es \\( x \\).';
        feedback.classList.add('correct');
        document.getElementById('step4').classList.remove('hidden');
        renderMathInElement(document.getElementById('step4')); // Renderizar el próximo paso
    } else {
        feedback.textContent = 'Incorrecto. Debes seleccionar la variable \\( x \\).';
        feedback.classList.add('wrong');
    }
}

function checkExp() {
    const expInput = document.getElementById('expInput').value.trim();
    const feedback = document.getElementById('feedbackExp');
    if (expInput === '5') {
        feedback.textContent = '¡Correcto! La suma de los exponentes es 5.';
        feedback.classList.add('correct');
        showFinalResult();
    } else {
        feedback.textContent = 'Incorrecto. La suma correcta de los exponentes es 5.';
        feedback.classList.add('wrong');
    }
}

function showFinalResult() {
    const finalFeedback = document.getElementById('finalFeedback');
    finalFeedback.innerHTML = '\\( -20x^5 \\)';
    renderMathInElement(finalFeedback); // Renderizar el resultado final
    document.getElementById('finalResult').classList.remove('hidden');
}
