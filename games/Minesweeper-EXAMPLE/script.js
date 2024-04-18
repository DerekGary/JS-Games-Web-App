// Source: https://github.com/faisalAkhtar/minesweeper

(function () {
    var MineSweeper = {
        // Initialization and core game settings
        init: function () {
            this.grid = document.querySelector('.minesweeper-grid');
            this.flagsLeft = document.querySelector('#flags-left');
            this.result = document.querySelector('#result');
            this.width = 10;
            this.bombAmount = 20;
            this.flags = 0;
            this.squares = [];
            this.isGameOver = false;
            this.helpBtn = document.querySelector("#help");
            this.helps = 3;
            this.flagBtn = document.querySelector("#flag");
            this.flagCursor = true;
            this.createBoard();
            this.updateFlagCount();

            this.helpBtn.addEventListener("click", this.helpFunc.bind(this));
            this.helpBtn.innerHTML = "? = " + this.helps;

            this.flagBtn.addEventListener("click", this.flagFunc.bind(this));
        },

        // Board creation with bombs and numbers
        createBoard: function () {
            const bombsArray = Array(this.bombAmount).fill('bomb');
            const emptyArray = Array(this.width * this.width - this.bombAmount).fill('valid');
            const gameArray = emptyArray.concat(bombsArray);
            const shuffledArray = gameArray.sort(() => Math.random() - 0.5);

            for (let i = 0; i < this.width * this.width; i++) {
                const square = document.createElement('div');
                square.setAttribute('id', i);
                square.classList.add(shuffledArray[i]);
                this.grid.appendChild(square);
                this.squares.push(square);

                square.addEventListener('click', (e) => {
                    if (this.flagCursor) {
                        this.click(square);
                    } else {
                        this.addFlag(square);
                    }
                });

                // Right click to add flags
                square.oncontextmenu = (e) => {
                    e.preventDefault();
                    this.addFlag(square);
                };
            }

            this.addNumbers();
        },

        updateFlagCount: function () {
            this.flagsLeft.innerHTML = this.bombAmount - this.flags;
        },

        // Function to add numbers to squares
        addNumbers: function () {
            for (let i = 0; i < this.squares.length; i++) {
                let total = 0;
                const isLeftEdge = (i % this.width === 0);
                const isRightEdge = (i % this.width === this.width - 1);

                if (this.squares[i].classList.contains('valid')) {
                    if (i > 0 && !isLeftEdge && this.squares[i - 1].classList.contains('bomb')) total++;
                    if (i > 9 && !isRightEdge && this.squares[i + 1 - this.width].classList.contains('bomb')) total++;
                    if (i > 10 && this.squares[i - this.width].classList.contains('bomb')) total++;
                    if (i > 11 && !isLeftEdge && this.squares[i - 1 - this.width].classList.contains('bomb')) total++;
                    if (i < 98 && !isRightEdge && this.squares[i + 1].classList.contains('bomb')) total++;
                    if (i < 90 && !isLeftEdge && this.squares[i - 1 + this.width].classList.contains('bomb')) total++;
                    if (i < 88 && !isRightEdge && this.squares[i + 1 + this.width].classList.contains('bomb')) total++;
                    if (i < 89 && this.squares[i + this.width].classList.contains('bomb')) total++;
                    this.squares[i].setAttribute('data', total);
                }
            }
        },

        // Add flag with right click
        addFlag: function (square) {
            if (this.isGameOver) return;
            if (!square.classList.contains('checked') && (this.flags < this.bombAmount)) {
                if (!square.classList.contains('flag')) {
                    square.classList.add('flag');
                    square.innerHTML = '&#128681;';
                    this.flags++;
                    this.checkForWin();
                } else {
                    square.classList.remove('flag');
                    square.innerHTML = '';
                    this.flags--;
                }
            }
            this.updateFlagCount();
        },

        // Click on square actions
        click: function (square) {
            if (this.isGameOver) return;
            if (square.classList.contains('checked') || square.classList.contains('flag')) return;
            if (square.classList.contains('bomb')) {
                this.gameOver();
            } else {
                let total = square.getAttribute('data');
                if (total != 0) {
                    square.classList.add('checked');
                    square.innerHTML = total;
                    return;
                }
                this.checkSquare(square);
            }
            square.classList.add('checked');
        },

        // Check neighboring squares once square is clicked
        checkSquare: function(square) {
            const currentId = parseInt(square.id);
            const isLeftEdge = currentId % this.width === 0;
            const isRightEdge = currentId % this.width === this.width - 1;

            setTimeout(() => {
                if (currentId > 0 && !isLeftEdge) {
                    const newId = currentId - 1;
                    this.click(document.getElementById(newId));
                }
                if (currentId > 9 && !isRightEdge) {
                    const newId = currentId + 1 - this.width;
                    this.click(document.getElementById(newId));
                }
                if (currentId > 10) {
                    const newId = currentId - this.width;
                    this.click(document.getElementById(newId));
                }
                if (currentId > 11 && !isLeftEdge) {
                    const newId = currentId - 1 - this.width;
                    this.click(document.getElementById(newId));
                }
                if (currentId < 98 && !isRightEdge) {
                    const newId = currentId + 1;
                    this.click(document.getElementById(newId));
                }
                if (currentId < 90 && !isLeftEdge) {
                    const newId = currentId - 1 + this.width;
                    this.click(document.getElementById(newId));
                }
                if (currentId < 88 && !isRightEdge) {
                    const newId = currentId + 1 + this.width;
                    this.click(document.getElementById(newId));
                }
                if (currentId < 89) {
                    const newId = currentId + this.width;
                    this.click(document.getElementById(newId));
                }
            }, 10);
        },

        // Game over logic
        gameOver: function () {
            this.result.innerHTML = 'BOOM! Game Over!';
            this.isGameOver = true;

            // Show all the bombs
            this.squares.forEach(square => {
                if (square.classList.contains('bomb')) {
                    square.innerHTML = '&#128163;';
                    square.classList.remove('flag');
                    square.classList.add('checked');
                }
            });
        },

        // Check for win conditions
        checkForWin: function () {
            let matches = 0;
            for (let i = 0; i < this.squares.length; i++) {
                if (this.squares[i].classList.contains('flag') && this.squares[i].classList.contains('bomb')) {
                    matches++;
                }
            }
            if (matches === this.bombAmount) {
                this.result.innerHTML = 'YOU WIN!';
                this.isGameOver = true;
            }
        },

        // Help button functionality
        helpFunc: function () {
            if (this.isGameOver || this.helps <= 0) return;
            let hints = [];

            // Collect all valid, unrevealed, and unflagged squares as potential hints
            this.squares.forEach(square => {
                if (square.classList.contains('valid') && !square.classList.contains('checked') && !square.classList.contains('flag')) {
                    hints.push(square);
                }
            });

            if (hints.length > 0) {
                // Randomly select one of the potential hint squares
                const hintIndex = Math.floor(Math.random() * hints.length);
                const hint = hints[hintIndex];
                
                // Simulate a click on the chosen hint square
                this.click(hint);
            }

            // Update the number of available hints
            this.helps--;
            this.helpBtn.innerHTML = "? = " + this.helps;
        },

        // Flag button functionality
        flagFunc: function () {
            this.flagCursor = !this.flagCursor;
            this.flagBtn.classList.toggle("pressed");
        }
    };

    MineSweeper.init();
})();
