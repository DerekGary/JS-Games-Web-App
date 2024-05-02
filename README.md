# CS3110 -- Group 2 Project: JS-based Video Games Web Application

[![View Demo](https://img.shields.io/badge/View-Demo-blue?style=for-the-badge&logo=github)](https://derekgary.github.io/JS-Games-Web-App/)

AWS Demo: [![View AWS Demo](https://img.shields.io/badge/AWS-232F32?style=for-the-badge&logo=AmazonAWS&logoColor=white)](http://100.27.206.9/index.html)

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
  - **`Minesweeper/`**: Contains all files related to our version of Minesweeper.
    - `bomb.png`: Image asset used to represent bombs in the game.
    - `minesweeper.html`: The HTML file for the Minesweeper game, which includes the game's layout and structure.
    - `script.js`: JavaScript file containing the logic and functionality of the Minesweeper game.
    - `style.css`: CSS file for styling the Minesweeper game, making it visually appealing.
  - **`Minesweeper-EXAMPLE/`**: Serves as an example or template for our game development
    - Contains similar files as the `Minesweeper/` directory, intended for learning how to formulate our own Minesweeper game.

- **`img/`**: Directory for storing image assets used across the application, including icons, background images, and other graphical elements.

- **`index.html`**: The entry point HTML file for the web application. It serves as the main landing page where users can navigate to different games or sections of the application.

- **`README.md`**: This file provides documentation for the project, including an overview, setup instructions, contribution guidelines, and other important information.



## Setting Up the Project

  ### Prereqs

- Ensure [Git](https://git-scm.com/downloads) is installed on your computer.
- Have a code editor of your choice installed (e.g., [Visual Studio Code](https://code.visualstudio.com/), [Sublime Text](https://www.sublimetext.com/)).

1. **Clone the Repository**:
   - Visit the GitHub page of the project.
   - Clone the repository to your local machine using:
     ```
     git clone https://github.com/DerekGary/JS-Games-Web-App.git
     ```

2. **Navigate to the Project Directory**:
   - Open a terminal and run:
     ```
     cd JS-Games-Web-App
     ```

## Making Changes

1. **Create a New Branch**:
   - Before making any changes, it's a good practice to create a new branch. This keeps your changes organized and separate from the main branch until they are ready to be merged:
     ```
     git checkout -b branch-name
     ```
   - Replace `branch-name` with a meaningful name that reflects the changes you're making.

2. **Make and Commit Changes**:
   - Make your intended changes in the code editor.
   - Stage your changes for commit:
     ```
     git add .
     ```
   - Commit those changes with a descriptive message:
     ```
     git commit -m "A descriptive message about your changes"
     ```

3. **Push Changes to GitHub**:
   - Push your branch and changes to GitHub:
     ```
     git push origin branch-name
     ```
   - This makes your changes available to other project collaborators.

4. **Create a Pull Request**:
   - Visit the main page of the repository on GitHub.
   - Click "Compare & pull request" next to your branch.
   - Review your changes, add a detailed description of what your changes entail, and submit the pull request for review.

## Collaborating

- Ensure to regularly pull the latest changes from the main branch to stay updated:
  ```
  git checkout main
  ```
  ```
  git pull origin main
  ```
  - When working on a new feature or fix, always start from the latest version of the main branch to minimize merge conflicts.

## Reviewing Changes

- Review pull requests from your teammates, providing feedback or approval as necessary.
- Once a pull request is approved, it can be merged into the main branch.

