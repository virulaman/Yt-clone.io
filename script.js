function startGame(game) {
    const gameArea = document.getElementById('gameArea');
    gameArea.innerHTML = '';

    if (game === 'pingPong') {
        startPingPong(gameArea);
    } else if (game === 'clicker') {
        startClicker(gameArea);
    } else if (game === 'speedTyping') {
        startSpeedTyping(gameArea);
    } else if (game === 'reflexSpeed') {
        startReflexSpeed(gameArea);
    }
}

function startPingPong(gameArea) {
    gameArea.innerHTML = '<p>Ping Pong Game coming soon!</p>';
}

function startClicker(gameArea) {
    let count = 0;
    gameArea.innerHTML = `
        <p>Click as fast as you can!</p>
        <button id="clickMe">Click Me!</button>
        <p>Score: <span id="score">0</span></p>
    `;

    const clickMeButton = document.getElementById('clickMe');
    const scoreDisplay = document.getElementById('score');

    clickMeButton.addEventListener('click', () => {
        count++;
        scoreDisplay.textContent = count;
    });
}

function startSpeedTyping(gameArea) {
    let sampleText = 'Type this text as fast as you can!';
    gameArea.innerHTML = `
        <p>${sampleText}</p>
        <textarea id="typingArea" rows="4" cols="50"></textarea>
        <button id="checkTyping">Done</button>
    `;

    const typingArea = document.getElementById('typingArea');
    const checkTyping = document.getElementById('checkTyping');

    const startTime = Date.now();

    checkTyping.addEventListener('click', () => {
        const userText = typingArea.value;
        const endTime = Date.now();
        const timeTaken = ((endTime - startTime) / 1000).toFixed(2);

        if (userText === sampleText) {
            alert(`You typed correctly in ${timeTaken} seconds!`);
        } else {
            alert('Text doesn\'t match. Try again!');
        }
    });
}

function startReflexSpeed(gameArea) {
    gameArea.innerHTML = `
        <p>Click as soon as the box turns green!</p>
        <div id="reflexBox" style="width: 100px; height: 100px; background-color: red; margin: 1em auto;"></div>
    `;

    const reflexBox = document.getElementById('reflexBox');

    let startTime;

    const timer = setTimeout(() => {
        reflexBox.style.backgroundColor = 'green';
        startTime = Date.now();
    }, Math.random() * 3000 + 2000);

    reflexBox.addEventListener('click', () => {
        if (reflexBox.style.backgroundColor === 'green') {
            const endTime = Date.now();
            alert(`Your reaction time is ${(endTime - startTime)} ms`);
            clearTimeout(timer);
        } else {
            alert('Clicked too early! Wait for the box to turn green.');
        }
    });
}
