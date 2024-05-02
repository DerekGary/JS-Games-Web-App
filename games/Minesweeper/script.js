// Group 2 - Minesweeper Project

(function () {
    var MineSweeper = {
        // Initialization and core game settings
        init: function () {

            // Elements already initialized
            this.messageDiv = document.querySelector(".pop-up h3");
            this.popUp = document.querySelector(".pop-up");
            this.grid = document.querySelector('.grid');
            this.flagsLeft = document.querySelector('#flags-left');
            this.result = document.querySelector('#result');
            this.width = 10;
            this.bombAmount = 20;
            this.flags = 0;
            this.maxflags = 20;
            this.squares = [];
            this.isGameOver = false;
            this.remainingHelps = 3;
            this.helpBtn = document.querySelector("#help");
            this.helps = 3;
            this.flagBtn = document.querySelector("#flag");
            this.flagCursor = true;
            this.bomb = document.querySelector('.bomb');
            this.nonBombAmount = this.width * this.width - this.bombAmount;

            // Create the game board
            this.createBoard();

            // Event listeners for help and flag functionality
            this.helpBtn.addEventListener("click", this.helpFunc.bind(this));
            this.flagBtn.addEventListener("click", this.flagFunc.bind(this));
        },


        // Board creation with bombs and numbers
        createBoard: function () {
            // Implement board creation logic here...


            //base board setup
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

        // Function to add numbers to squares
        addNumbers: function () {
            for (let i = 0; i < this.squares.length; i++) {
                let total = 0;
                const isLeftEdge = (i % this.width === 0);
                const isRightEdge = (i % this.width === this.width - 1);

                if (this.squares[i].classList.contains('valid')) {
                    if (!isLeftEdge) {
                        if (this.squares[i - 1].classList.contains('bomb')) total++;
                    }
                    if (!isRightEdge) {
                        if (this.squares[i + 1].classList.contains('bomb')) total++;
                    }
                    if (i - 10 > 0) {
                        if (this.squares[i - 10].classList.contains('bomb')) total++;
                    }
                    if (i + 10 < this.squares.length) {
                        if (this.squares[i + 10].classList.contains('bomb')) total++;
                    }
                    if (i + 9 < this.squares.length) {
                        if (this.squares[i + 9].classList.contains('bomb')) total++;
                    }
                    if (i + 11 < this.squares.length) {
                        if (this.squares[i + 11].classList.contains('bomb')) total++;
                    }
                    if (i - 9 > 0) {
                        if (this.squares[i - 9].classList.contains('bomb')) total++;
                    }
                    if (i - 11 > 0) {
                        if (this.squares[i - 11].classList.contains('bomb')) total++;
                    }
                    this.squares[i].setAttribute('data', total);
                    if (this.squares[i].classList.contains('bomb')) {

                    }
                }
            }
        },


        // Add flag with left click
        addFlag: function (square) {
            if (!this.isGameOver && !square.classList.contains('checked')) {
                if (square.classList.contains('flag')) {
                    square.classList.remove('flag');
                    square.innerHTML = '';
                    this.flags--;
                } else if (this.flags < this.maxflags) {
                    square.classList.add('flag');
                    square.innerHTML = 'F';
                    this.flags++;
                }
                // Check for win in case the user has somehow flagged all bombs.
                this.checkForWin();
            }
        },



        click: function (square) {
            if (this.isGameOver) return;
            if (square.classList.contains('checked') || square.classList.contains('flag')) return;
            if (square.classList.contains('bomb')) {
                this.gameOver(false);
            } else {
                let total = square.getAttribute('data');
                if (total != 0) {
                    square.classList.add('checked');
                    square.innerHTML = total;
                    this.nonBombAmount--;
                    this.checkForWin();
                    return;
                }
                this.checkSquare(square);
                square.classList.add('checked');
                this.nonBombAmount--;
                this.checkForWin();
            }
            
        },
        
        // Check neighboring squares once square is clicked
        checkSquare: function (square) {
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


        // Game over logic (GameResult is true for win and false for loss)
        gameOver: function (gameResult) {
            this.generateEndGameMessage(gameResult);
        },


        // Check for win conditions
        checkForWin: function () {
            // Implement logic to check if the player has won
            // Basic win condition check is provided
            let matches = 0;
            for (let i = 0; i < this.squares.length; i++) {
                if (this.squares[i].classList.contains('flag') && this.squares[i].classList.contains('bomb')) {
                    matches++;
                }
            }
            if (matches === this.bombAmount || this.nonBombAmount === 0) {
                this.result.innerHTML = 'YOU WIN!';
                this.gameOver(true);
            }
        },

        // Generate Game Win/Loss Message
        generateEndGameMessage: function (gameResult) {
            if (gameResult === true) {
                this.popUp.style.display = "block";
                this.messageDiv.textContent = "You Win!";
                this.messageDiv.style.color = "green";
            }
            else if (gameResult === false) {
                this.popUp.style.display = "block";
                this.messageDiv.textContent = "You Lose!";
                this.messageDiv.style.color = "red";
            }
            else {
                console.error("Invalid game result\n" +
                    "Expected true or false for gameResult, received: " + gameResult);
            }
        },

        // Help button functionality
        helpFunc: function () {
            // Implement help functionality here...
            // Placeholder for using a help (hint) is provided
        },


        // Flag button functionality
        flagFunc: function () {
            this.flagCursor = !this.flagCursor;
            this.flagBtn.classList.toggle("pressed");
        }
    };
    document.addEventListener("DOMContentLoaded", function () {
        MineSweeper.init();
    });
})();
