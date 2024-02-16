# CS3110 -- Group 2 Project: JS-based Video Games Web Application

[![View Demo](https://img.shields.io/badge/View-Demo-blue?style=for-the-badge&logo=github)]()

## Group Member Names
- Nicholas Bennings
- Derek Gary
- Kaleb Ohlmeier

## Project Overview
This project aims to develop a web application hosting several JavaScript-based video games. Our goal is to create a user-friendly interface that allows players to select and play games directly from their browser.



## Current Folder Explanations

- **`components/`**: Contains reusable UI components such as buttons, modals, and navigation bars that can be used throughout the application to ensure a consistent look and feel.

- **`css/`**: Stores global CSS stylesheets for the application.
  - `styles.css`: The main stylesheet for the application, defining styles that are common across different pages and components.

- **`fonts/`**: Holds custom fonts used within the application, allowing for a unique typography that enhances the user interface and experience.

- **`games/`**: This directory is organized by game, with each game having its own folder for better modularity and maintenance.
  - **`Minesweeper/`**: Contains all files related to the Minesweeper game.
    - `bomb.png`: Image asset used to represent bombs in the game.
    - `minesweeper.html`: The HTML file for the Minesweeper game, which includes the game's layout and structure.
    - `script.js`: JavaScript file containing the logic and functionality of the Minesweeper game.
    - `style.css`: CSS file for styling the Minesweeper game, making it visually appealing.
  - **`Minesweeper-EXAMPLE/`**: Serves as an example or template for our game development
    - Contains similar files as the `Minesweeper/` directory, intended for learning how to formulate our own Minesweeper game.

- **`img/`**: Directory for storing image assets used across the application, including icons, background images, and other graphical elements.

- **`index.html`**: The entry point HTML file for the web application. It serves as the main landing page where users can navigate to different games or sections of the application.

- **`README.md`**: This file provides documentation for the project, including an overview, setup instructions, contribution guidelines, and other important information.



### Prerequisites

- Ensure [Git](https://git-scm.com/downloads) is installed on your computer.
- Have a code editor of your choice installed (e.g., [Visual Studio Code](https://code.visualstudio.com/), [Sublime Text](https://www.sublimetext.com/)).

### Setting Up the Project

1. **Fork the Repository**:
   - Visit the GitHub page of the project and click on the "Fork" button to create a copy of the repository in your GitHub account.

2. **Clone the Repository**:
   - Clone your forked repository to your local machine using:
     ```
     git clone https://github.com/YOUR_USERNAME/JS-Games-Web-App.git
     ```
   - Replace `YOUR_USERNAME` with your GitHub username.

3. **Navigate to the Project Directory**:
   - Open a terminal and run:
     ```
     cd JS-Games-Web-App
     ```

4. **Set Upstream Remote** (Optional):
   - To keep your fork synced with the original repository, add it as an upstream remote:
     ```
     git remote add upstream https://github.com/DerekGary/JS-Games-Web-App.git
     ```



### Making Changes

1. **Create a New Branch**:
   - Before making any changes, ensure you're working on a new branch:
     ```
     git checkout -b branch-name
     ```
   - Replace `branch-name` with a name relevant to the changes you're making.

2. **Make and Commit Changes**:
   - Make your changes in the code editor.
   - Commit those changes with:
     ```
     git commit -am "A descriptive message about your changes"
     ```

3. **Push Changes and Create a Pull Request**:
   - Push your changes to GitHub:
     ```
     git push origin branch-name
     ```
   - Visit your fork on GitHub and click "New pull request" to open a pull request to the main repository.
