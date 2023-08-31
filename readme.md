# Sudoku Solver

## Intro

Sudoku, originally called Number Place, is a logic-based combinatorial number-placement puzzle.  
In classic Sudoku, the objective is to fill a 9 × 9 grid with digits so that each column, each row, and each of the nine 3 × 3 subgrids that compose the grid (also called "boxes", "blocks", or "regions") contain all of the digits from 1 to 9. The puzzle setter provides a partially completed grid, which for a well-posed puzzle has a single solution.  
[wiki](https://en.wikipedia.org/wiki/Sudoku).  
[Rules](https://sudoku.com/how-to-play/sudoku-rules-for-complete-beginners/).

## Objective

The goal is to write an algorithm, that can solve a 9 by 9 sudoku puzzle, using a backtracking algorithm.

## Helpful Ground Work 

This app is built, using the MVC design pattern, all of your work is going to be in the `src/Board.js`. Use your googling skills to search on design patterns, especially MVC.
The app also uses Event-Driven to ensure communication between the Model, the View, and the Controller. Check this [article](https://dev.to/petrussola/today-s-rabbit-hole-what-is-event-driven-programming-and-how-to-code-your-own-eventemitter-3g1h) about "Event-driven" programming.


## Explore your project

## Folder Structure

![Folder Structure](./lib/folder%20structure.PNG)

## Requirements

- Don't reinvent wheel where you don't have to. Use the Board constructor you build out in `src/Board.js` in your code. You can also access it within the Chrome console easily after opening `index.html`
  - Create new board instances that have access to all the helper methods you write in `src/Board.js`
    - example: `var board = new Board()`
  - Rather than getting object properties directly with plain JavaScript, the Board class provides some `get` methods. Play with these getters:
    - example: `board.getRow(2)` will return the 3rd row of the instance `board` (assuming that instance exists)

Some of the helper functions in `src/Board.js` have been completed for you, and some have not. You should only need to edit the functions listed below.

- [ ] Open `src/Board.js` and fix the incomplete helpers (look for the 'start here' section) such that the specs in `spec/checkers-spec.js` and `spec/sudoku-solver-spec.js` pass.
To see if your specs are passing, Open SpecRunner.html with [live-server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) and look at the 'Spec List' section. Doing so will help you understand the problem more thoroughly.
- [ ] **rowSafe()**: test if a specific row on the board is safe for a given number.
- [ ] **colSafe()**: test if a specific column on the board is safe for a given number.
- [ ] **boxSafe()**: test if a specific box on the board is safe for a given number.
- [ ] **rowValidAt()**: test if a specific row on the board contains a conflict.
- [ ] **colValidAt()**: test if a specific column on the board contains a conflict.
- [ ] **boxValidAt()**: test if a specific box on the board contains a conflict.
- [ ] **allRowsValid()**: test if any rows on the board contain conflicts.
- [ ] **allColsValid()**: test if any columns on the board contain conflicts.
- [ ] **allBoxesValid()**: test if any boxes on the board contain conflicts.
- [ ] **solve()**: returns the solution for the current board if exists.

- [ ]  Identify the time complexity of each of your Checker methods, as well as the working solver.

## Testing 

This Project uses Jasmine 3.10.1. Open `SpecRunner.html` with [live-server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

Take a look at Jasmine's documentation [here](https://jasmine.github.io/).

 
