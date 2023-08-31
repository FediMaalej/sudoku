
describe("Checker functions", function () {
  describe('rowSafe', function () {
    it("should detect, if a row is safe for any number, for an empty board", function () {
      const puzzle = new Board();
      const isSafeForNumber = puzzle.rowSafe(0, 1)
      expect(isSafeForNumber).toBe(true);
    });

    it("should detect, if a row is safe for any number, for a generated board", function () {
      const GENERATED_PUZZLE = [
        [1, 2, "", 4, "", 6, 7, "", ""],
        ["", 5, 6, "", 8, 9, "", "", 3],
        ["", "", 9, "", 2, "", 4, 5, ""],
        ["", 1, 4, "", 6, 5, 8, 9, ""],
        [3, 6, "", 8, 9, 7, "", 1, 4],
        ["", 9, 7, 2, "", 4, 3, 6, 5],
        [5, 3, 1, 6, 4, 2, 9, 7, 8],
        [6, "", 2, "", "", "", 5, 3, 1],
        [9, "", "", "", "", 1, 6, "", 2],
      ];
      const puzzle = new Board(GENERATED_PUZZLE);
      const isSafeForNumber = puzzle.rowSafe(6, 1)
      expect(isSafeForNumber).toEqual(false);
      expect(puzzle.rowSafe(2, 7)).toBe(true)
      expect(puzzle.rowSafe(7, 3)).toBe(false)
    });

    it("should not detect a column conflict.", function () {
      const colConflicPuzzle = [
        ["", 1, "", "", "", "", "", "", ""],
        ["", "", "", 3, "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", 5, "", "", ""],
        ["", "", "", 3, "", "", "", "", ""],
        ["", "", "", 3, "", "", "", 6, ""],
        ["", 2, "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", 6, ""],
        ["", 1, "", "", "", 5, "", "", ""],
      ];
      const puzzle = new Board(colConflicPuzzle);
      const isSafeForNumber = puzzle.rowSafe(1, 1)
      expect(isSafeForNumber).toEqual(true);
      expect(puzzle.rowSafe(3, 3)).toBe(true)
      expect(puzzle.rowSafe(7, 3)).toBe(true)
    });

    it("should not detect a box conflict. ", function () {
      const boxisSafeForNumberPuzzle = [
        ["", 5, "", "", "", "", "", "", ""],
        ["", "", 5, "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", 1, "", 2, ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", 6, "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", 6, "", "", "", ""],
      ];
      const puzzle = new Board(boxisSafeForNumberPuzzle);
      const isSafeForNumber = puzzle.rowSafe(2, 5)
      expect(isSafeForNumber).toEqual(true);
      expect(puzzle.rowSafe(7, 6)).toBe(true)
      expect(puzzle.rowSafe(4, 2)).toBe(false)
    });
  })
  describe('colSafe', function () {
    it("should  detect if a column is safe for a number, for an empty board.", function () {
      const puzzle = new Board();
      const isSafeForNumber = puzzle.colSafe(0, 1)
      expect(isSafeForNumber).toBe(true);
    });

    it("should  detect if a column is safe for a number.", function () {
      const GENERATED_PUZZLE = [
        [1, 2, "", 4, "", 6, 7, "", ""],
        ["", 5, 6, "", 8, 9, "", "", 3],
        ["", "", 9, "", 2, "", 4, 5, ""],
        ["", 1, 4, "", 6, 5, 8, 9, ""],
        [3, 6, "", 8, 9, 7, "", 1, 4],
        ["", 9, 7, 2, "", 4, 3, 6, 5],
        [5, 3, 1, 6, 4, 2, 9, 7, 8],
        [6, "", 2, "", "", "", 5, 3, 1],
        [9, "", "", "", "", 1, 6, "", 2],
      ];
      const puzzle = new Board(GENERATED_PUZZLE);
      const isSafeForNumber = puzzle.colSafe(6, 1)
      expect(isSafeForNumber).toEqual(true);
      expect(puzzle.colSafe(2, 7)).toBe(false)
      expect(puzzle.colSafe(8, 2)).toBe(false)
    });

    it("should not detect a row conflict.", function () {
      const colConflicPuzzle = [
        ["", 1, "", "", "", "", "", "", ""],
        ["", "", "", 3, 3, "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", 5, "", "", ""],
        ["", "", "", 3, "", "", "", "", ""],
        ["", "", "", 3, "", "", "", 6, ""],
        ["", 2, "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", 6, ""],
        ["", 4, "", "", "", 5, "", "", ""],
      ];
      const puzzle = new Board(colConflicPuzzle);
      const isSafeForNumber = puzzle.rowSafe(1, 3)
      expect(isSafeForNumber).toEqual(false);
      expect(puzzle.colSafe(1, 3)).toBe(true)
      expect(puzzle.colSafe(7, 6)).toBe(false)
    });

    it("should not detect a box conflict.", function () {
      const boxisSafeForNumberPuzzle = [
        ["", 5, "", "", "", "", "", "", ""],
        ["", "", 5, "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", 1, "", 2, ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", 6, "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", 6, "", "", "", ""],
      ];
      const puzzle = new Board(boxisSafeForNumberPuzzle);
      const isSafeForNumber = puzzle.colSafe(0, 5)
      expect(isSafeForNumber).toEqual(true);
      expect(puzzle.colSafe(2, 6)).toBe(true)
      expect(puzzle.colSafe(7, 2)).toBe(false)
    });
  })

  describe('boxSafe', function () {
    it("should detect if the box is safe for a number.", function () {
      const puzzle = new Board();
      const isSafeForNumber = puzzle.boxSafe(0, 1, 5)
      expect(isSafeForNumber).toBe(true);
    });

    it("should detect if a box is safe for a given number", function () {
      const GENERATED_PUZZLE = [
        [1, 2, "", 4, "", 6, 7, "", ""],
        ["", 5, 6, "", 8, 9, "", "", 3],
        ["", "", 9, "", 2, "", 4, 5, ""],
        ["", 1, 4, "", 6, 5, 8, 9, ""],
        [3, 6, "", 8, 9, 7, "", 1, 4],
        ["", 9, 7, 2, "", 4, 3, 6, 5],
        [5, 3, 1, 6, 4, 2, 9, 7, 8],
        [6, "", 2, "", "", "", 5, 3, 1],
        [9, "", "", "", "", 1, 6, "", 2],
      ];
      const puzzle = new Board(GENERATED_PUZZLE);
      const isSafeForNumber = puzzle.boxSafe(0, 0, 5)
      expect(isSafeForNumber).toEqual(false);
      expect(puzzle.boxSafe(3, 0, 5)).toBe(true)
      expect(puzzle.boxSafe(6, 8, 4)).toBe(true)
    });

    it("should not detect a row conflict.", function () {
      const colConflicPuzzle = [
        ["", "", "", "", "", "", 1, "", ""],
        [3, "", "", 9, 4, "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", 5, "", "", ""],
        ["", "", "", 3, "", "", "", "", ""],
        ["", "", "", 3, "", "", "", 6, ""],
        ["", 2, "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", 6, ""],
        ["", 4, "", "", "", 5, "", "", ""],
      ];
      const puzzle = new Board(colConflicPuzzle);
      const isSafeForNumber = puzzle.boxSafe(0, 0, 1)
      expect(isSafeForNumber).toEqual(true);
      expect(puzzle.rowSafe(0, 1)).toBe(false)
      expect(puzzle.colSafe(7, 6, 6)).toBe(false)
    });

    it("should not detect a column conflict.", function () {
      const boxisSafeForNumberPuzzle = [
        ["", 6, "", "", "", "", "", "", ""],
        ["", "", 9, "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", 1, "", 2, ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", 6, "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", 5, "", "", 6, "", "", "", ""],
      ];
      const puzzle = new Board(boxisSafeForNumberPuzzle);
      const isSafeForNumber = puzzle.colSafe(1, 5)
      expect(isSafeForNumber).toEqual(false);
      expect(puzzle.boxSafe(0, 0, 5)).toBe(true)
    });
  })

  describe('rowValidAt', function () {
    it("should return false if the row has a conflict.", function () {
      const GENERATED_PUZZLE = [
        [1, 2, "", 4, "", 6, 7, 4, ""],
        ["", 5, 6, "", 8, 9, "", "", 3],
        ["", "", 9, "", 2, "", 4, 5, ""],
        ["", 1, 4, "", 6, 5, 8, 9, ""],
        [3, 6, "", 8, 9, 7, "", 1, 4],
        ["", 9, 7, 2, "", 4, 3, 6, 5],
        [5, 3, 1, 6, 4, 2, 3, 7, 8],
        [6, "", 2, "", "", "", 5, 3, 1],
        [9, "", "", "", "", 1, 6, "", 2],
      ];
      const puzzle = new Board(GENERATED_PUZZLE);
      expect(puzzle.rowValidAt(0)).toBe(false)
      expect(puzzle.rowValidAt(6)).toBe(false)
    });

    it("Should return true if the row is valid.", function () {
      const GENERATED_PUZZLE = [
        [1, 2, "", 4, "", 6, 7, "", ""],
        [5, 5, 6, "", 8, 9, "", "", 3],
        ["", "", 9, "", 2, "", 4, 5, ""],
        ["", 1, 4, "", 6, 5, 8, 9, ""],
        [3, 6, "", 8, 9, 7, "", 1, 4],
        ["", 9, 7, 2, "", 4, 3, 6, 5],
        [5, 3, 1, 6, 4, 2, 9, 7, 8],
        [6, "", 2, "", "", "", 5, 3, 1],
        [9, "", "", "", "", 1, 6, "", 2],
      ];
      const puzzle = new Board(GENERATED_PUZZLE);
      expect(puzzle.rowValidAt(0)).toBe(true)
      expect(puzzle.rowValidAt(6)).toBe(true)
    });
  })

  describe('colValidAt', function () {
    it("should return false if the column has a conflict.", function () {
      const GENERATED_PUZZLE = [
        [1, "", "", "", "", "", "", "", 2],
        [3, "", "", "", "", "", "", "", 3],
        ["", "", 7, "", "", "", "", "", 1],
        ["", 2, "", "", "", "", "", "", 7],
        [3, "", "", "", "", "", "", "", 4],
        ["", "", "", "", 8, "", "", "", 5],
        [5, "", "", "", "", "", "", "", 8],
        [6, "", "", "", "", "", "", "", 1],
        [9, "", "", "", "", "", "", "", 2],
      ];
      const puzzle = new Board(GENERATED_PUZZLE);
      expect(puzzle.colValidAt(0)).toBe(false)
      expect(puzzle.colValidAt(8)).toBe(false)
    });

    it("Should return true if the column is valid.", function () {
      const GENERATED_PUZZLE = [
        [1, 2, "", 4, "", 6, 7, "", ""],
        [5, 5, 6, "", 8, 9, 2, "", 3],
        ["", "", 9, "", 2, "", 4, 5, ""],
        ["", 1, 4, "", 6, 5, 8, 9, ""],
        [3, 6, "", 8, 9, 7, 1, "", 4],
        ["", 9, 7, 2, "", 4, 3, 6, 5],
        [7, 3, 1, 6, 4, 2, 9, 7, 8],
        [6, "", 2, "", "", "", 5, 3, 1],
        [9, "", "", "", "", 1, 6, "", 2],
      ];
      const puzzle = new Board(GENERATED_PUZZLE);
      expect(puzzle.colValidAt(0)).toBe(true)
      expect(puzzle.colValidAt(6)).toBe(true)
    });
  })

  describe('boxValidAt', function () {
    it("should return false if the box has a conflict.", function () {
      const GENERATED_PUZZLE = [
        [1, 2, "", 4, "", 6, 7, "", ""],
        ["", 5, 6, "", 8, 9, "", "", 3],
        ["", 1, 9, "", 2, "", 4, 5, ""],
        ["", "", 4, "", 6, 5, 8, 9, ""],
        [3, 6, "", 8, 9, 7, "", 1, 4],
        ["", 9, 7, 2, "", 4, 3, 6, 5],
        [5, 3, 1, 6, 4, 2, 3, 7, 8],
        [6, "", 2, "", "", "", 5, 3, 1],
        [9, "", "", "", "", 1, 6, 4, 2],
      ];
      const puzzle = new Board(GENERATED_PUZZLE);
      expect(puzzle.boxValidAt(0)).toBe(false)
      expect(puzzle.boxValidAt(8)).toBe(false)
    });

    it("Should return true if the box is valid.", function () {
      const GENERATED_PUZZLE = [
        [1, 2, "", 4, "", 6, 7, 7, ""],
        ["", 5, 6, "", 2, 9, "", "", 3],
        ["", "", 9, "", 2, "", 4, "", ""],
        ["", 1, 4, "", 6, "", 8, 9, 5],
        [3, 6, "", 8, 9, 7, "", 1, 4],
        ["", 4, 7, 6, "", 4, 3, "", 5],
        [3, 3, 1, 6, "", 2, 9, 7, 8],
        [6, "", 2, "", "", "", 5, 3, 1],
        [9, "", "", "", "", 6, 6, 4, 2],
      ];
      const puzzle = new Board(GENERATED_PUZZLE);
      expect(puzzle.boxValidAt(0)).toBe(true)
      expect(puzzle.boxValidAt(8)).toBe(true)
    });
  })


  describe('allRowsValid', function () {
    it('should return false if at least one row has a conflict.', function () {
      const puzzle = new Board()
      const invalidBoard = [
        [2, "", "", "", "", "", "", "", 5],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", 6, "", 7, "", 6, "", ""],
        ["", 3, "", "", "", "", 5, 5, ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", 9, "", 3, "", "", 2, "", 3],
        ["", "", "", "", "", "", "", "", ""],
        ["", 6, "", "", 6, "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
      ];
      puzzle.board = invalidBoard;
      expect(puzzle.allRowsValid()).toBe(false)
    })

    it('Should return true if all rows are valid.', function () {
      const puzzle = new Board()
      const validBoard = [
        [2, "", "", "", "", "", "", "", 5],
        ["", "", 9, "", "", "", "", 2, ""],
        ["", "", 1, "", 7, "", 6, "", ""],
        ["", 3, "", "", "", "", 4, 5, ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", 9, "", 3, "", "", 2, "", 8],
        ["", "", "", "", "", "", "", "", ""],
        ["", 6, "", "", 1, "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
      ];
      puzzle.board = validBoard;
      expect(puzzle.allRowsValid()).toBe(true)
    })

    it('Should not detect if the board have a column, or a box conflict', function () {
      const colConflicPuzzle = [
        ["", "", "", "", "", "", 1, "", ""],
        [3, "", "", 9, 4, "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", 5, "", "", ""],
        ["", "", "", 3, "", "", "", "", ""],
        ["", "", "", 3, "", "", "", 6, ""],
        ["", 2, "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", 6, ""],
        ["", 4, "", "", "", 5, "", "", ""],
      ];
      const puzzle = new Board(colConflicPuzzle);
      expect(puzzle.allRowsValid()).toBe(true)
    })
  })

  describe('allColsValid', function () {
    it('Should return true if the board has no column conflicts.', function () {
      const puzzle = new Board();
      expect(puzzle.allColsValid()).toBe(true)
      puzzle.board = [
        [2, "", "", "", "", "", "", "", 5],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", 6, "", 7, "", 6, "", ""],
        ["", 3, "", "", "", "", 5, 5, ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", 9, "", 3, "", "", 2, "", 3],
        ["", "", "", "", "", "", "", "", 8],
        ["", 6, "", "", 6, "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
      ];
      expect(puzzle.allColsValid()).toBe(true)
    })
    it(' Should return false if the board contains a column conflict', function () {
      const puzzle = new Board([
        ["", "", "", "", "", "", 1, "", ""],
        [3, "", "", 9, 4, "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", 5, "", "", ""],
        ["", "", "", 3, "", "", "", "", ""],
        ["", "", "", 3, "", "", "", 6, ""],
        ["", 2, "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", 6, ""],
        ["", 4, "", "", "", 5, "", "", ""],
      ])
      expect(puzzle.allColsValid()).toBe(false)
    })

    it(' Should not detect a row or a box conlicts.', function () {
      const puzzle = new Board([
        ["", "", "", "", "", "", 1, "", ""],
        [3, "", "", 9, 4, "", "", "", ""],
        ["", 3, "", "", "", "", "", "", ""],
        ["", "", "", "", "", 5, "", "", ""],
        ["", "", "", 3, "", "", "", "", ""],
        ["", "", "", 6, "", "", "", 6, ""],
        ["", 2, "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", 7, ""],
        ["", 4, "", "", "", 2, "", "", ""],
      ])
      expect(puzzle.allColsValid()).toBe(true)
    })
  })

  describe('allBoxesValid', function () {
    it('Should return true if the board does not contain any box conflict.', function () {
      const puzzle = new Board();
      expect(puzzle.allBoxesValid()).toBe(true);

      puzzle.board = [
        ["", "", "", "", "", "", 1, "", ""],
        [3, "", "", 9, 4, "", "", "", ""],
        ["", 2, "", "", "", "", "", "", ""],
        ["", "", "", "", "", 5, "", "", ""],
        ["", "", "", 3, "", "", "", "", ""],
        ["", "", "", 6, "", "", "", 6, ""],
        ["", 2, "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", 7, ""],
        ["", 4, "", "", "", 2, "", "", ""],
      ]

      expect(puzzle.allBoxesValid()).toBe(true)
    })

    it('Should return false if the board contains a box conflict', function () {
      const puzzle = new Board([
        ["", "", "", "", "", "", 1, "", ""],
        [3, "", "", 9, 4, "", "", "", ""],
        ["", 2, "", "", "", "", "", "", ""],
        ["", "", "", "", "", 5, "", "", ""],
        ["", "", "", 3, "", "", "", "", 6],
        ["", "", "", 6, "", "", "", 6, ""],
        ["", 2, "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", 7, ""],
        ["", 4, "", "", "", 2, "", "", ""],
      ]);

      expect(puzzle.allBoxesValid()).toBe(false)
    })

    it('Should not detect a row or a column conflict.', function () {
      const puzzle = new Board([
        ["", "", "", "", "", "", 1, "", ""],
        [3, "", "", 9, 4, "", "", "", 3],
        ["", 2, "", "", "", "", "", "", ""],
        ["", "", "", "", "", 5, "", "", ""],
        ["", "", "", 3, "", "", "", "", 8],
        ["", "", "", 6, "", "", "", 6, ""],
        ["", 2, "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", 7, ""],
        ["", 4, "", "", "", 2, "", "", ""],
      ]);

      expect(puzzle.allBoxesValid()).toBe(true)
    })
  })

  describe('isSafe', function () {
    it('should return true if a number would not result any conflict if it is placed in a cell.', function () {
      const puzzle = new Board();
      [1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (choice) {
        [0, 1, 2, 3, 4, 5, 6, 7, 8].map(function (position) {
          expect(puzzle.isSafe(position, position, choice)).toBe(true)
        })
      })
    })

    it('should return false if a number would result any conflict if it is placed in a cell.', function () {
      const puzzle = new Board([
        ["", "", "", "", "", "", 7, 4, ""],
        [3, 4, "", 9, 4, "", "", "", 3],
        ["", 2, "", "", "", "", "", "", 2],
        ["", "", "", "", "", 5, "", "", ""],
        ["", "", "", 3, "", "", "", "", 8],
        ["", "", "", 6, "", "", "", 6, ""],
        ["", 2, "", "", "", 4, "", "", ""],
        ["", "", "", "", 3, "", "", 7, ""],
        ["", 4, "", 4, "", 2, "", "", ""],
      ]);

      [2, 3, 4].map(function (choice) {
        [0, 2, 5, 8].map(function (position) {
          expect(puzzle.isSafe(position, position, choice)).toBe(false)
        })
      })

      [0, 1, 2, 3, 4, 5, 6, 7, 8]?.map(function (position) {
        expect(puzzle.isSafe(position, position, 1)).toBe(true)
      })
    })


  })

  describe('validBoard', function () {
    it('Should return true if the board is empty.', function () {
      const puzzle = new Board()
      expect(puzzle.validBoard()).toBe(true)
    })

    it('Should return true if the board has no conflict.', function () {
      const puzzle = new Board([
        ["", "", 2, "", "", "", "", "", ""],
        ["", "", 9, "", "", "", "", "", ""],
        ["", 4, "", "", "", "", "", 6, ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", 5, 9, "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        [7, "", "", "", "", "", 4, "", 2],
        ["", 8, "", "", "", "", "", "", ""],
      ])
      expect(puzzle.validBoard()).toBe(true)
    })

    it('Should return false if a board has any conflict.', function () {
      const puzzle = new Board([
        ["", "", 2, "", "", "", "", "", ""],
        ["", "", 9, "", "", "", "", "", ""],
        ["", 4, "", "", "", 4, "", 6, ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", 5, "", "", "", ""],
        ["", "", "", "", 5, 9, "", "", ""],
        ["", "", "", "", "", "", "", "", 2],
        [7, "", "", "", "", "", 4, "", 2],
        ["", 8, "", "", "", "", "", "", ""],
      ])
      expect(puzzle.validBoard()).toBe(false)
    })
  })

})
