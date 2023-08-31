class Board extends EventEmitter {
  constructor(board) {
    super();

    this.board = board || [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
  }

  getRow(index) {
    return this.board[index];
  }

  updateBoard(newBoard) {
    this.board = newBoard;
  }


  getCol(index) {
    const result = [];
    for (let i = 0; i < this.board.length; i++) {
      result.push(this.board[i][index]);
    }
    return result;
  }


  generateBoard() {
    const hardPuzzle = [
      ["", "", 2, "", "", "", "", "", ""],
      ["", "", 9, "", "", "", "", "", ""],
      ["", 4, "", "", "", "", "", 6, ""],
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", 5, 9, "", "", ""],
      ["", "", "", "", "", "", "", "", ""],
      [7, "", "", "", "", "", 4, "", 2],
      ["", 8, "", "", "", "", "", "", ""],
    ]

    this.board = hardPuzzle;
    this.emit("boardGenerated", hardPuzzle);
  }

  clearBoard() {
    const emptyPuzzle = [
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", ""],
    ];
    this.board = emptyPuzzle;
    this.emit("boardcleared", emptyPuzzle);
  }

  getBox(rowIndex, colIndex) {
    const result = [];
    const boxRowStart = rowIndex - (rowIndex % 3);
    const boxColStart = colIndex - (colIndex % 3);

    for (let r = boxRowStart; r < boxRowStart + 3; r++) {
      for (let d = boxColStart; d < boxColStart + 3; d++) {
        result.push(this.board[r][d]);
      }
    }
    return result;
  }

  getBoxByIndex(index) {
    const result = []
    const startingRow = Math.floor(index / 3) * 3;
    const startingCol = Math.floor(index % 3) * 3;
    for (let r = startingRow; r < startingRow + 3; r++) {
      for (let d = startingCol; d < startingCol + 3; d++) {
        result.push(this.board[r][d]);
      }
    }
    return result;

  }
  /*
           _             _     _
       ___| |_ __ _ _ __| |_  | |__   ___ _ __ ___ _
      / __| __/ _` | '__| __| | '_ \ / _ \ '__/ _ (_)
      \__ \ || (_| | |  | |_  | | | |  __/ | |  __/_
      |___/\__\__,_|_|   \__| |_| |_|\___|_|  \___(_)
  
   */

  /*=========================================================================
  =                 TODO: fill in these Checker Functions                    =
  =========================================================================*/

  rowSafe(row, num) {
    var r = this.getRow(row)
    if (r.includes(num)) {
      return false
    }
    return true
    //check if the row contains num
  }

  colSafe(col, num) {
    var r = this.getCol(col)
    if (r.includes(num)) {
      return false
    }
    return true //check if the column contains num
  }

  boxSafe(row, col, num) {
    var r = this.getBox(row, col)
    if (r.includes(num)) {
      return false
    }
    return true //check if the box contains num
  }

  rowValidAt(rowIndex) {
    var r = this.getRow(rowIndex)
    for (var i = 0; i < r.length; i++) {
      for (var j = 0; j < r.length; j++) {
        if (r[i] === r[j] && i !== j && r[i] !== '' && r[i]!==0) {
          return false
        }
      }
    }
    return true
    //check if a row is valid at a given index
  }

  colValidAt(colIndex) {
    var r = this.getCol(colIndex)
    for (var i = 0; i < r.length; i++) {
      for (var j = 0; j < r.length; j++) {
        if (r[i] === r[j] && i !== j && r[i] !== '' && r[i]!==0) {
          return false
        }
      }
    }
    return true
    //check if a column is valid at a given index
  }

  boxValidAt(boxIndex) {
    var r = this.getBoxByIndex(boxIndex)

    for (var i = 0; i < r.length; i++) {
      for (var j = i + 1; j < r.length; j++) {

        if (r[i] === r[j] && r[i] !== '' && r[i]!==0) {
          console.log(r[i], r[j])
          return false
        }
      }
    }
    return true //check if a box is valid at a given index
  }

  allRowsValid() {
    let r = 0
    for (let i = 0; i < 9; i++) {
      if (this.rowValidAt(i)) {
        r = r + 1
      }
    }
    if (r === 9) {
      return true
    } else {
      return false
    }
    //check if all the rows in the board are valid
  }
  allColsValid() {
    let r = 0
    for (let i = 0; i < 9; i++) {
      if (!this.colValidAt(i)) {
        return false
      }
      //check if all the columns in the board are valid
    }
    return true
  }

  allBoxesValid() {
    let r = 0
    for (let i = 0; i < 9; i++) {
      if (this.boxValidAt(i)) {
        r = r + 1
      }
    }
    if (r === 9) {
      return true
    } else {
      return false
    }
    //check if all the boxes in the board are valid
  }

  validBoard() {
    return this.allBoxesValid() && this.allColsValid() && this.allRowsValid();
  }

  isSafe(row, col, num) {
    return this.rowSafe(row, num) && this.colSafe(col, num) && this.boxSafe(row, col, num);
  }

  /*=========================================================================
  =                 TODO: fill in these Solver Functions                    =
  =========================================================================*/

    solve() {
      for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {

        if (this.board[i][j] === 0 || this.board[i][j] === '') {
        for (var num = 1; num <= 9; num++) {
        if (this.isSafe(i, j, num)) {
          this.board[i][j] = num;
         if (this.solve()) {
             return true; 
                }
        this.board[i][j] = 0; 
              }
            }
            return false; 
      }
  }
  }
      return true; 
      //solve the board using a backtracking algorithm and return the solution
  }

  solveBoard() {
    while (this.validBoard()) {
      if (this.solve()) {
        this.emit("validBoard", this.board);
        return true
      }
    }
    return false
    this.emit("invalidBoard");
    // dont forget to add a small change here ;) 
  }
}