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
        <div id="introduction">
            <p><strong>¡Bienvenida al ejercicio 11!</strong></p>
            <p>Hoy vamos a aprender a <strong>multiplicar monomios</strong>. No te preocupes, te vamos a guiar paso a paso, y verás que es muy fácil una vez entiendes cómo se hace.</p>
            <p>Empezaremos con algo sencillo, multiplicando dos términos: <span class="math">\( 4x^2 \cdot (-5x^3) \)</span>. Cada paso que sigas será explicado de manera clara para que no te pierdas.</p>
        </div>

        <!-- Paso 1: Seleccionar el signo del resultado -->
        <div id="step1">
            <p><strong>Paso 1: El signo del resultado</strong></p>
            <p>Recuerda, cuando multiplicamos un número positivo por un número negativo, el resultado siempre será negativo.</p>
            <p>¿Qué signo debería tener el resultado de <span class="math">\( 4 \cdot (-5) \)</span>? Elige la respuesta correcta:</p>
            <select id="signSelect">
                <option value="positive">Positivo (+)</option>
                <option value="negative">Negativo (-)</option>
            </select>
            <button onclick="checkSign()">Comprobar</button>
            <p id="feedbackSign"></p>
        </div>

        <!-- Paso 2: Multiplicar los coeficientes -->
        <div id="step2" class="hidden">
            <p><strong>Paso 2: Multiplicar los números</strong></p>
            <p>Ahora vamos a multiplicar los números (o coeficientes) de los dos términos. Debes multiplicar <span class="math">\( 4 \)</span> por <span class="math">\( -5 \)</span>. Escribe el resultado:</p>
            <input type="text" id="coefInput" placeholder="Escribe el resultado aquí">
            <button onclick="checkCoef()">Comprobar</button>
            <p id="feedbackCoef"></p>
            <p>Recuerda, si multiplicas un número positivo por uno negativo, el resultado será negativo.</p>
        </div>

        <!-- Paso 3: Identificar la variable involucrada -->
        <div id="step3" class="hidden">
            <p><strong>Paso 3: La variable que estás multiplicando</strong></p>
            <p>Cuando multiplicamos, necesitamos fijarnos en qué variable estamos usando. ¿Qué letra estamos multiplicando aquí? Marca la variable correcta.</p>
            <input type="checkbox" id="varX"> <label for="varX">\\( x \\)</label>
            <button onclick="checkVariable()">Comprobar</button>
            <p id="feedbackVar"></p>
        </div>

        <!-- Paso 4: Suma de los exponentes -->
        <div id="step4" class="hidden">
            <p><strong>Paso 4: Sumar los exponentes</strong></p>
            <p>Ahora que sabemos que la variable que estamos multiplicando es <span class="math">\\( x \\)</span>, necesitamos sumar sus exponentes. Cuando multiplicamos potencias con la misma base, sumamos sus exponentes. Aquí tenemos:</p>
            <ul>
                <li><span class="math">\( x^2 \)</span> (del primer término)</li>
                <li><span class="math">\( x^3 \)</span> (del segundo término)</li>
            </ul>
            <p>Suma estos exponentes y escribe el resultado:</p>
            <input type="text" id="expInput" placeholder="Escribe aquí">
            <button onclick="checkExp()">Comprobar</button>
            <p id="feedbackExp"></p>
        </div>

        <!-- Paso 5: Revisión completa -->
        <div id="step5" class="hidden">
            <p><strong>Paso 5: Ver todo junto</strong></p>
            <p>Ya hemos encontrado el signo, multiplicado los coeficientes, y sumado los exponentes. Ahora juntamos todo. El resultado será:</p>
            <ul>
                <li>El signo es negativo.</li>
                <li>El coeficiente es <span class="math">-20</span>.</li>
                <li>La variable es <span class="math">\\( x \\)</span> con exponente <span class="math">5</span>.</li>
            </ul>
            <p>El resultado final es:</p>
            <h2 id="finalResult"></h2>
            <button onclick="showFinalResult()">Ver resultado en LaTeX</button>
        </div>

        <div id="finalFeedback" class="hidden">
            <h2>¡Bien hecho! Has completado el ejercicio.</h2>
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
        feedback.textContent = 'Incorrecto. El signo debe ser negativo, porque estás multiplicando un número positivo por uno negativo.';
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
        document.getElementById('step5').classList.remove('hidden');
    } else {
        feedback.textContent = 'Incorrecto. La suma correcta de los exponentes es 5.';
        feedback.classList.add('wrong');
    }
}

function showFinalResult() {
    const finalResult = document.getElementById('finalResult');
    finalResult.innerHTML = '\\( -20x^5 \\)';
    renderMathInElement(finalResult); // Renderizar el resultado final
    document.getElementById('finalFeedback').classList.remove('hidden');
}
