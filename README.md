# Rock, Paper, Scissors Game

This JavaScript program simulates a game of Rock, Paper, Scissors between a human player and the computer. The game consists of 5 rounds, and after each round, the scores are updated and displayed. The program uses simple logic to determine the winner of each round based on the choices made by the human and the computer.

## How It Works

1. **Choices Array:**

   - The array `list` contains the three possible choices in the game: `"Rock"`, `"Paper"`, and `"Scissors"`.

2. **Score Tracking:**

   - `humanScore` and `computerScore` are initialized to `0` and are used to keep track of the human player's and computer's scores.

3. **Functions:**

   - **`getComputerChoice()`**:

     - This function generates a random choice for the computer from the `list` array.
     - The choice is logged to the console and returned to the caller.

   - **`getHumanChoice()`**:

     - This function prompts the human player to enter their choice (Rock, Paper, or Scissors).
     - The choice is converted to lowercase, logged to the console, and returned to the caller.
     - The program validates the input and ensures that the human player selects an appropriate option.

   - **`playRound(humanChoice, computerChoice)`**:

     - This function compares the human's choice and the computer's choice to determine the winner of the round.
     - It updates the `humanScore` or `computerScore` based on the result and logs the outcome of the round to the console.

   - **`playGame()`**:
     - This function controls the overall game flow.
     - It runs a loop for 5 rounds, calling `getHumanChoice()` and `getComputerChoice()` to get the choices for each round.
     - After each round, it calls `playRound()` to determine the winner and update the scores.
     - The current scores are displayed after each round.

## Game Execution

The game is initiated by calling the `playGame()` function, which runs the game for 5 rounds and displays the results.

## How to Run

To play the game:

1. Copy the code into an HTML file inside a `<script>` tag or directly into your browser's developer console.
2. Run the code.
3. Follow the prompt to enter your choice (Rock, Paper, or Scissors) each round.
4. The game will play 5 rounds and display the results after each round.

## Sample Output

Rock, Paper, or Scissors? Rock
Human: Rock
Comp: Scissors
You Win! Rock beats Scissors
Human Score: 1
Computer Score: 0

Rock, Paper, or Scissors? Paper
Human: Paper
Comp: Rock
You Win! Paper beats Rock
Human Score: 2
Computer Score: 0

...

Final Scores:
Human Score: 3
Computer Score: 2

## Features

- The program handles input validation and ensures that the human player chooses from the valid options: "Rock", "Paper", or "Scissors".
- The game runs for 5 rounds, with the winner of each round being determined and scores updated accordingly.
- The results of each round and the final scores are displayed to the console.

## Future Improvements

- Implement a graphical user interface (GUI) for a more user-friendly experience.
- Allow the user to specify the number of rounds before the game starts.

Enjoy the game!
