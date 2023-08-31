class BoardController {
  constructor(model, view) {
    this._model = model;
    this._view = view;

    view.on("generateBoard", () => {
      this.generateBoard();
    });
    view.on("clearBoard", () => {
      this.clearBoard();
    });
    view.on("updateBoard", (board) => {
      this.updateBoard(board);
    });
    view.on("solveBoard", () => {
      this.solveBoard();
    });
  }

  generateBoard() {
    this._model.generateBoard();
  }
  clearBoard() {
    this._model.clearBoard();
  }
  updateBoard(board) {
    this._model.updateBoard(board);
  }
  solveBoard() {
    this._model.solveBoard(this._model.board);
  }
}
