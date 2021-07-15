const mainGame = (function() {
//VARIABLES
    let board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let turn = 'x';
    let oWins = 0;
    let xWins = 0;
//DOM CACHE
    const gameBoard = document.querySelector('.game');
    const xCounter = document.querySelector('.playerXWins');
    const oCounter = document.querySelector('.playerOWins');
    const resetScore = document.querySelector('#resetScore');
//EVENTS
    resetScore.addEventListener('click', () => {oWins = 0; xWins = 0; counter()})
//FUNCTIONS
    function init() {
        removeChildren()
        reset()
        for (let i = 0; i < 9; i++) {
            const square = document.createElement('div');
            square.setAttribute('id', `${i}`);
            square.textContent = '';
            square.addEventListener('click', tick);
            gameBoard.appendChild(square);
        }
    };

    function tick() {
        if (this.textContent !== 'x' && this.textContent !== 'o') {
            this.textContent = turn
            board[parseInt(this.id, 10)] = this.textContent;
            changeTurn()
            setTimeout(() => {checkWinner()}, 150);
            
        }
    };

    function changeTurn() {
        if (turn === 'x') {
            turn = 'o'
        } else if (turn === 'o') {
            turn = 'x'
        }
    };

    function checkWinner() {
        if (board[0] === board[1] && board[1] === board[2]) {
            playAgain(board[0])
        } else if (board[3] === board[4] && board[4] === board[5]) {
            playAgain(board[3])
        } else if (board[6] === board[7] && board[7] === board[8]) {
            playAgain(board[6])
        } else if (board[0] === board[3] && board[3] === board[6]) {
            playAgain(board[0])
        } else if (board[1] === board[4] && board[4] === board[7]) {
            playAgain(board[1])
        } else if (board[2] === board[5] && board[5] === board[8]) {
            playAgain(board[2])
        } else if (board[0] === board[4] && board[4] === board[8]) {
            playAgain(board[0])
        } else if (board[2] === board[4] && board[4] === board[6]) {
            playAgain(board[2])
        }
    };

    function playAgain(winner) {
        addWin(winner)
        counter()
        removeChildren()
        gameBoard.style.display = 'block';
        let section = document.createElement('section')
        gameBoard.appendChild(section)
        let h1 = document.createElement('h1')
        h1.textContent = `Player "${winner}" won!`
        section.appendChild(h1)
        let button = document.createElement('button')
        button.textContent = 'Restart'
        button.addEventListener('click', init)
        section.appendChild(button)
    };

    function removeChildren() {
        while (gameBoard.firstChild) {
            gameBoard.removeChild(gameBoard.firstChild)
        }
    };

    function reset() {
        gameBoard.style.display = 'grid';
        turn = 'x'
        board = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    }

    function addWin(winner) {
        if (winner === 'x') {
            xWins += 1
        } else {
            oWins += 1
        }
    }

    function counter() {
        xCounter.textContent = xWins;
        oCounter.textContent = oWins;
    }

    init();
})();


