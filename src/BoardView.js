class BoardView extends EventEmitter {
  constructor(model) {
    super();
    this._model = model;

    model.on("boardGenerated", (board) => {
      console.log("board coming from model");
      this.printBoard(board);
    });

    model.on("boardcleared", (board) => {
      console.log("board clearing from model");
      this.printBoard(board);
    });
    model.on("validBoard", (board) => {
      this.printBoard(board);
    });
    model.on("invalidBoard", () => {RBKTN-C4-23-Sudoku-Solver
      alert("invalid board");
    });
    $("#getPuzzle").on("click", () => {
      this.emit("generateBoard");
    });
    $("#clear").on("click", () => {
      console.log("clearing board");
      this.emit("clearBoard");
    });

    $("#solve").on("click", () => {
      this.emit("updateBoard", this.getBoardArray());
      this.emit("solveBoard");
    });
  }
  render() {
    const template = `
        <table id="sudoku-board">
        <caption>Sudoku Solver</caption>
        <colgroup><col><col><col>
        <colgroup><col><col><col>
        <colgroup><col><col><col>
        <tbody>
         <tr> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td>
         <tr> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td>     <tr> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td>
        <tbody>
         <tr> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td>
         <tr> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td>     <tr> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td>
        <tbody>
         <tr> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td>
         <tr> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td>     <tr> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td>
      </table>`;
    return template;
  }

  getBoardArray = function () {
    const result = [];
    const table = document.getElementById("sudoku-board");
    for (let i = 0, row; (row = table.rows[i]); i++) {
      const boardRow = [];
      for (let j = 0, col; (col = row.cells[j]); j++) {
        if (row.cells[j].innerHTML === "") {
          boardRow.push(0);
        } else {
          boardRow.push(Number(row.cells[j].innerHTML));
        }
      }
      result.push(boardRow);
    }
    return result;
  };

  printBoard(board) {
    const table = document.getElementById("sudoku-board");
    for (let i = 0, row; (row = table.rows[i]); i++) {
      for (let j = 0, col; (col = row.cells[j]); j++) {
        row.cells[j].innerHTML = board[i][j];
      }
    }
    console.log(board)
  }
}
