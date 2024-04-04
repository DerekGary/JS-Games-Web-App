// Group 2 - Minesweeper Project

(function () {
    var MineSweeper = {
        // Initialization and core game settings
        init: function () {

            // Elements already initialized
            this.grid = document.querySelector('.grid');
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

            // Create the game board
            this.createBoard();

            // Update flags left display
            this.updateFlagCount();

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
           
            //board = Array(this.width * this.width )

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
            
        },


        updateFlagCount: function () {
            // Update the display for flags left
            // Already implemented - update if additional UI logic is needed
        },


        // Function to add numbers to squares
        addNumbers: function () {
            // Implement logic to calculate and display numbers around bombs here...
            // Calculation of surrounding bombs is already provided
        },


        // Add flag with right click
        addFlag: function (square) {
            // Implement flag addition and removal logic here...
            // Basic logic for adding/removing flags is provided
        },


        // Click on square actions
        click: function (square) {
            // Implement actions when a square is clicked
            // Includes checking for bomb, revealing square, or checking neighboring squares
            if(square.classList.contains('bomb')){
                alert("BOOM game over")
                this.gameOver();
            }else{
                
            }
        },


        // Check neighboring squares once square is clicked
        checkSquare: function(square) {
            // Implement logic to recursively check neighboring squares
            // Placeholder for recursive check is provided
        },


        // Game over logic
        gameOver: function () {
            // Implement game over logic here...
            // Basic display of game over message and revealing bombs is provided
        },


        // Check for win conditions
        checkForWin: function () {
            // Implement logic to check if the player has won
            // Basic win condition check is provided
        },


        // Help button functionality
        helpFunc: function () {
            // Implement help functionality here...
            // Placeholder for using a help (hint) is provided
        },


        // Flag button functionality
        flagFunc: function () {
            // Toggle flag placement mode
            // Basic toggle functionality is provided
        }
    };

    MineSweeper.init();
})();
