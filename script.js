const mainGame = (function() {
    var board = [null]
    var turn = 'x'
    //DOM CACHE
    this.gameBoard = document.querySelector('.game');
    this.counter = document.querySelector('.counter');
    //BIND EVENTS

    //FUNCTIONS
    (function init() {
        for (let i = 1; i < 10; i++) {
            const square = document.createElement('div');
            square.setAttribute('id', `${i}`);
            square.textContent = '';
            square.addEventListener('click', () => {
                if (square.textContent === '') {
                    square.textContent = turn
                    board[parseInt(square.id, 10)] = square.textContent;
                    console.log(board)
                    changeTurn()
                    checkWinner()
                }
            });
            gameBoard.appendChild(square);
        }
    })();

    function changeTurn() {
        if (turn === 'x') {
            turn = 'o'
        } else if (turn === 'o') {
            turn = 'x'
        }
    }

    function checkWinner() {
        var sum = 0
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            
        }
    }
})();