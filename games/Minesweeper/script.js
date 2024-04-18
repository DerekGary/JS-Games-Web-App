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
            //this.bomb = document.querySelector('.bomb');

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
            this.addNumbers();
        },


        updateFlagCount: function () {
            // Update the display for flags left
            // Already implemented - update if additional UI logic is needed
        },


        // Function to add numbers to squares
        addNumbers: function () {
            for (let i = 0; i < this.squares.length; i++) {
                let total = 0;
                const isLeftEdge = (i % this.width === 0);
                const isRightEdge = (i % this.width === this.width - 1);

                if (this.squares[i].classList.contains('valid')) {
                        if(!isLeftEdge ){
                            if(this.squares[i-1].classList.contains('bomb')) total++;
                        }
                        if(!isRightEdge){
                            if(this.squares[i+1].classList.contains('bomb')) total++;
                        }
                        if(i-10 > 0){
                            if(this.squares[i-10].classList.contains('bomb')) total++;
                        }
                        if(i+10 < this.squares.length){
                            if(this.squares[i+10].classList.contains('bomb')) total++;
                        }
                        if(i+9 < this.squares.length){
                            if(this.squares[i+9].classList.contains('bomb')) total++;
                        }
                        if(i+11 < this.squares.length){
                            if(this.squares[i+11].classList.contains('bomb')) total++;
                        }
                        if(i-9 > 0){
                            if(this.squares[i-9].classList.contains('bomb')) total++;
                        }
                        if(i-11 > 0){
                            if(this.squares[i-11].classList.contains('bomb')) total++;
                        }
                    this.squares[i].setAttribute('data', total);
                }
            }
        },


        // Add flag with left click
        addFlag: function (square) {
            // Implement flag addition and removal logic here...
            // Basic logic for adding/removing flags is provided
        },



click: function (square) {
    if (this.isGameOver) return;
    if (square.classList.contains('checked') || square.classList.contains('flag')) return;
    if (square.classList.contains('bomb')) {
        this.gameOver();
        alert("BOOM game over")
    } else {
        let total = square.getAttribute('data');
        if (total != 0) {
            square.classList.add('checked');
            square.innerHTML = total;
            return;
        }
        this.checkSquare(square);
        square.classList.add('checked');
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
