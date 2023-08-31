describe('Solver', function () {
  it('should solve an empty board', function () {
    const puzzle = new Board()
    const solved = puzzle.solveBoard()
    const solution = [
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [4, 5, 6, 7, 8, 9, 1, 2, 3],
      [7, 8, 9, 1, 2, 3, 4, 5, 6],
      [2, 1, 4, 3, 6, 5, 8, 9, 7],
      [3, 6, 5, 8, 9, 7, 2, 1, 4],
      [8, 9, 7, 2, 1, 4, 3, 6, 5],
      [5, 3, 1, 6, 4, 2, 9, 7, 8],
      [6, 4, 2, 9, 7, 8, 5, 3, 1],
      [9, 7, 8, 5, 3, 1, 6, 4, 2],
    ]
    expect(puzzle.board).toEqual(solution)
    expect(solved).toEqual(true)
  })

  it('should solve a generated board', function () {
    const GENERATED_PUZZLE = [
      [1, 2, '', 5, '', 6, 7, '', ''],
      ['', 5, 6, '', 8, 9, '', '', 3],
      ['', '', 9, '', 2, '', 4, 5, ''],
      ['', 1, 4, '', 5, 7, 6, 9, ''],
      [3, 6, '', 4, 9, 8, '', 1, 7],
      ['', 9, 7, 2, '', 1, 3, 4, 5],
      [5, 3, 1, 8, 7, 2, 9, 6, 4],
      [6, '', 2, '', '', '', 8, 7, 1],
      [9, '', '', '', '', 4, 5, '', 2],
    ]
    const puzzle = new Board(GENERATED_PUZZLE)
    const solved = puzzle.solveBoard()
    const solution = [
      [1, 2, 3, 5, 4, 6, 7, 8, 9],
      [4, 5, 6, 7, 8, 9, 1, 2, 3],
      [7, 8, 9, 1, 2, 3, 4, 5, 6],
      [2, 1, 4, 3, 5, 7, 6, 9, 8],
      [3, 6, 5, 4, 9, 8, 2, 1, 7],
      [8, 9, 7, 2, 6, 1, 3, 4, 5],
      [5, 3, 1, 8, 7, 2, 9, 6, 4],
      [6, 4, 2, 9, 3, 5, 8, 7, 1],
      [9, 7, 8, 6, 1, 4, 5, 3, 2],
    ]
    expect(puzzle.board).toEqual(solution)
    expect(solved).toEqual(true)
  })

  it('should not solve a board with conflict', function () {
    const GENERATED_PUZZLE_WITH_CONFLICT = [
      [1, 2, '', 4, '', 6, 7, '', 7],
      ['', 5, 6, '', 8, 9, '', '', 3],
      ['', '', 9, '', 2, '', 4, 5, ''],
      ['', 1, 4, '', 6, 5, 8, 9, ''],
      [3, 6, '', 8, 9, 7, '', 1, 4],
      ['', 9, 7, 2, '', 4, 3, 6, 5],
      [5, 3, 1, 6, 4, 2, 9, 7, 8],
      [6, 5, 2, '', '', '', 5, 3, 1],
      [9, '', '', '', '', 1, 9, '', 2],
    ]
    const puzzle = new Board(GENERATED_PUZZLE_WITH_CONFLICT)
    const solved = puzzle.solveBoard()
    expect(solved).toEqual(false)
  })

  it('should not solve a board with a row conflict', function () {
    const GENERATED_PUZZLE_ROW_CONFLICT = [
      [1, 2, '', 4, '', 6, 7, '', ''],
      [3, 5, 6, '', 8, 9, '', '', 3],
      ['', '', 9, '', 2, '', 4, 5, ''],
      ['', 1, 4, '', 6, 5, 8, 9, ''],
      [3, 6, '', 8, 9, 7, '', 1, 4],
      ['', 9, 7, 2, '', 4, 3, 6, 5],
      [5, 3, 1, 6, 4, 2, 9, 7, 8],
      [6, '', 2, '', '', '', 5, 3, 1],
      [9, '', '', '', '', 1, 6, '', 2],
    ]
    const puzzle = new Board(GENERATED_PUZZLE_ROW_CONFLICT)
    const solved = puzzle.solveBoard()
    expect(solved).toEqual(false)
  })

  it('should not solve a board with a column conflict', function () {
    const GENERATED_PUZZLE_COLUMN_CONFLICT = [
      [1, 2, '', 4, '', 6, 7, '', ''],
      ['', 5, 6, '', 8, 9, '', '', 3],
      ['', '', 9, '', 2, '', 4, 5, ''],
      ['', 2, 4, '', 6, 5, 8, 9, ''],
      [3, 6, '', 8, 9, 7, '', 1, 4],
      ['', 9, 7, 2, '', 4, 3, 6, 5],
      [5, 3, 1, 6, 4, 2, 9, 7, 8],
      [6, '', 2, '', '', '', 5, 3, 1],
      [9, '', '', '', '', 1, 6, '', 2],
    ]
    const puzzle = new Board(GENERATED_PUZZLE_COLUMN_CONFLICT)
    const solved = puzzle.solveBoard()
    expect(solved).toEqual(false)
  })

  it('should not solve a board with a box conflict', function () {
    const GENERATED_PUZZLE_BOX_CONFLICT = [
      [1, 2, '', 4, '', 6, 7, '', ''],
      ['', 5, 6, '', 8, 9, '', '', 3],
      ['', '', 9, '', 2, '', 4, 5, ''],
      ['', 1, 4, '', 6, '', 8, 9, ''],
      [3, 6, '', 8, 9, 7, '', 1, 4],
      ['', 6, 7, 2, '', 4, 3, 6, 5],
      [5, 3, 1, 6, 4, 2, 9, 7, 8],
      [6, '', 2, '', '', '', 5, 3, 1],
      [9, '', '', '', '', 1, 6, '', 2],
    ]
    const puzzle = new Board(GENERATED_PUZZLE_BOX_CONFLICT)
    const solved = puzzle.solveBoard()
    expect(solved).toEqual(false)
  })
})

describe('Board Model Methods', function () {
  describe('getBox(row,col)', function () {
    it('should return a 3 * 3 box between a given rowIndex and colIndex for an empty puzzle.', function () {
      const puzzle = new Board()
      const box = puzzle.getBox(0, 0)
      expect(box).toBeInstanceOf(Array)
      expect(box).toHaveSize(9)
      expect(box).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0])
    })

    it('should return a 3 * 3 box between a given rowIndex and colIndex for a generated puzzle.', function () {
      const hardPuzzle = [
        [0, 2, 0, 0, 6, 0, 4, 0, 0],
        [1, 0, 0, 0, 0, 3, 2, 0, 5],
        [0, 0, 0, 0, 0, 0, 9, 0, 0],
        [0, 0, 2, 0, 4, 0, 0, 0, 9],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 4, 0, 0, 0, 0],
        [0, 0, 7, 0, 0, 0, 0, 0, 0],
        [0, 5, 0, 0, 2, 7, 0, 0, 0],
        [0, 0, 6, 0, 3, 0, 7, 0, 0],
      ]
      const board = new Board(hardPuzzle)
      const box = board.getBox(0, 6)
      expect(box).toBeInstanceOf(Array)
      expect(box).toHaveSize(9)
      expect(box).toEqual([4, 0, 0, 2, 0, 5, 9, 0, 0])
    })

    it('should return a 3 * 3 box between a given given rowIndex and colIndex for an invalid puzzle.', function () {
      const hardPuzzle = [
        [0, 2, 0, 0, 6, 0, 4, 0, 0],
        [1, 0, 0, 6, 0, 3, 2, 0, 5],
        [0, 0, 0, 0, 0, 3, 9, 0, 0],
        [0, 0, 2, 0, 4, 0, 0, 0, 9],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 4, 0, 0, 0, 0],
        [0, 7, 7, 0, 0, 0, 0, 0, 0],
        [0, 5, 0, 0, 2, 7, 0, 0, 0],
        [0, 0, 6, 0, 3, 0, 7, 0, 0],
      ]
      const board = new Board(hardPuzzle)
      const box = board.getBox(0, 3)
      expect(board.getBox(6, 0)).toBeInstanceOf(Array)
      expect(board.getBox(6, 0)).toEqual([0, 7, 7, 0, 5, 0, 0, 0, 6])
      expect(box).toBeInstanceOf(Array)
      expect(box).toHaveSize(9)
      expect(box).toEqual([0, 6, 0, 6, 0, 3, 0, 0, 3])
    })
  })

  describe('getBoxByIndex', function () {
    it('should return a 3 * 3 box between a given index for an empty puzzle.', function () {
      const puzzle = new Board()
      const box = puzzle.getBoxByIndex(0)
      expect(box).toBeInstanceOf(Array)
      expect(box).toHaveSize(9)
      expect(box).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0])
    })

    it('should return a 3 * 3 box between a given index for a generated puzzle.', function () {
      const hardPuzzle = [
        [0, 2, 0, 0, 6, 0, 4, 0, 0],
        [1, 0, 0, 0, 0, 3, 2, 0, 5],
        [0, 0, 0, 0, 0, 0, 9, 0, 0],
        [0, 0, 2, 0, 4, 0, 0, 0, 9],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 4, 0, 0, 0, 0],
        [0, 0, 7, 0, 0, 0, 0, 0, 0],
        [0, 5, 0, 0, 2, 7, 0, 0, 0],
        [0, 0, 6, 0, 3, 0, 7, 0, 0],
      ]
      const board = new Board(hardPuzzle)
      const box = board.getBoxByIndex(2)
      expect(box).toBeInstanceOf(Array)
      expect(box).toHaveSize(9)
      expect(box).toEqual([4, 0, 0, 2, 0, 5, 9, 0, 0])
    })

    it('should return a 3 * 3 box between a given index for an invalid puzzle.', function () {
      const hardPuzzle = [
        [0, 2, 0, 0, 6, 0, 4, 0, 0],
        [1, 0, 0, 6, 0, 3, 2, 0, 5],
        [0, 0, 0, 0, 0, 3, 9, 0, 0],
        [0, 0, 2, 0, 4, 0, 0, 0, 9],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 4, 0, 0, 0, 0],
        [0, 7, 7, 0, 0, 0, 0, 0, 0],
        [0, 5, 0, 0, 2, 7, 0, 0, 0],
        [0, 0, 6, 0, 3, 0, 7, 0, 0],
      ]
      const board = new Board(hardPuzzle)
      const box = board.getBoxByIndex(1)
      expect(board.getBoxByIndex(6)).toBeInstanceOf(Array)
      expect(board.getBoxByIndex(6)).toEqual([0, 7, 7, 0, 5, 0, 0, 0, 6])
      expect(box).toBeInstanceOf(Array)
      expect(box).toHaveSize(9)
      expect(box).toEqual([0, 6, 0, 6, 0, 3, 0, 0, 3])
    })
  })

  describe('getRow', function () {
    it('should return the row for the given index for an empty puzzle.', function () {
      const puzzle = new Board()
      const box = puzzle.getRow(0)
      expect(box).toBeInstanceOf(Array)
      expect(box).toHaveSize(9)
      expect(box).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0])
    })

    it('should return the row for the given index for a generated puzzle.', function () {
      const hardPuzzle = [
        [0, 2, 0, 0, 6, 0, 4, 0, 0],
        [1, 0, 0, 0, 0, 3, 2, 0, 5],
        [0, 0, 0, 0, 0, 0, 9, 0, 0],
        [0, 0, 2, 0, 4, 0, 0, 0, 9],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 4, 0, 0, 0, 0],
        [0, 0, 7, 0, 0, 0, 0, 0, 0],
        [0, 5, 0, 0, 2, 7, 0, 0, 0],
        [0, 0, 6, 0, 3, 0, 7, 0, 0],
      ]
      const board = new Board(hardPuzzle)
      const box = board.getRow(2)
      expect(box).toBeInstanceOf(Array)
      expect(box).toHaveSize(9)
      expect(box).toEqual([0, 0, 0, 0, 0, 0, 9, 0, 0])
    })

    it('should return the row for the given index for an invalid puzzle.', function () {
      const hardPuzzle = [
        [0, 2, 0, 0, 6, 0, 4, 0, 0],
        [1, 0, 0, 6, 0, 3, 2, 0, 5],
        [0, 0, 0, 0, 0, 3, 9, 0, 0],
        [0, 0, 2, 0, 4, 0, 0, 0, 9],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 4, 0, 0, 0, 0],
        [0, 7, 7, 0, 0, 0, 0, 0, 0],
        [0, 5, 0, 0, 2, 7, 0, 0, 0],
        [0, 0, 6, 0, 3, 0, 7, 0, 0],
      ]
      const board = new Board(hardPuzzle)
      const box = board.getRow(1)
      expect(board.getRow(6)).toBeInstanceOf(Array)
      expect(board.getRow(6)).toEqual([0, 7, 7, 0, 0, 0, 0, 0, 0])
      expect(box).toBeInstanceOf(Array)
      expect(box).toHaveSize(9)
      expect(box).toEqual([1, 0, 0, 6, 0, 3, 2, 0, 5])
    })
  })

  describe('getCol', function () {
    it('should return the column for the given index for an empty puzzle.', function () {
      const puzzle = new Board()
      const box = puzzle.getCol(5)
      expect(box).toBeInstanceOf(Array)
      expect(box).toHaveSize(9)
      expect(box).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0])
    })

    it('should return the column for the given index for a generated puzzle.', function () {
      const hardPuzzle = [
        [0, 2, 0, 0, 6, 0, 4, 0, 0],
        [1, 0, 0, 0, 0, 3, 2, 0, 5],
        [0, 0, 0, 0, 0, 0, 9, 0, 0],
        [0, 0, 2, 0, 4, 0, 0, 0, 9],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 4, 0, 0, 0, 0],
        [0, 0, 7, 0, 0, 0, 0, 0, 0],
        [0, 5, 0, 0, 2, 7, 0, 0, 0],
        [0, 0, 6, 0, 3, 0, 7, 0, 0],
      ]
      const board = new Board(hardPuzzle)
      const box = board.getCol(2)
      expect(box).toBeInstanceOf(Array)
      expect(box).toHaveSize(9)
      expect(box).toEqual([0, 0, 0, 2, 0, 0, 7, 0, 6])
    })

    it('should the column for the given index for an invalid puzzle.', function () {
      const hardPuzzle = [
        [0, 2, 0, 0, 6, 0, 4, 0, 0],
        [1, 0, 0, 6, 0, 3, 2, 0, 5],
        [0, 0, 0, 0, 0, 3, 9, 0, 0],
        [0, 0, 2, 0, 4, 0, 0, 0, 9],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 4, 0, 0, 0, 0],
        [0, 7, 7, 0, 0, 0, 0, 0, 0],
        [0, 5, 0, 0, 2, 7, 0, 0, 0],
        [0, 0, 6, 0, 3, 0, 7, 0, 0],
      ]
      const board = new Board(hardPuzzle)
      const box = board.getCol(5)
      expect(board.getCol(4)).toBeInstanceOf(Array)
      expect(board.getCol(4)).toEqual([6, 0, 0, 4, 0, 4, 0, 2, 3])
      expect(box).toBeInstanceOf(Array)
      expect(box).toHaveSize(9)
      expect(box).toEqual([0, 3, 3, 0, 0, 0, 0, 7, 0])
    })
  })
})
