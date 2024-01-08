import numpy as np
import json

def is_valid(board, row, col, num):
    # Check if the number is already present in the row or column
    if num in board[row, :] or num in board[:, col]:
        return False

    # Check if the number is present in the 3x3 grid
    start_row, start_col = 3 * (row // 3), 3 * (col // 3)
    return not np.any(board[start_row:start_row+3, start_col:start_col+3] == num)

def solve(board):
    empty_cell = find_empty(board)
    if not empty_cell:
        return True  # Board is solved

    row, col = empty_cell
    for num in range(1, 10):
        if is_valid(board, row, col, num):
            board[row, col] = num

            if solve(board):
                return True  # If a solution is found, return True

            board[row, col] = 0  # If the current placement doesn't lead to a solution, backtrack

    return False  # No solution found

def find_empty(board):
    # Find the first empty cell
    for i in range(9):
        for j in range(9):
            if board[i, j] == 0:
                return (i, j)
    return None  # Return None if no empty cell is found

def generate_sudoku():
    # Create an empty board
    board = np.zeros((9, 9), dtype=int)

    # Create a copy of the board for solving
    board_for_solving = board.copy()

    # Solve the board
    solve(board_for_solving)

    # Randomly remove numbers to create the puzzle
    puzzle = np.copy(board_for_solving)
    for _ in range(40):  # Adjust the number of removed numbers as needed
        row, col = np.random.randint(0, 9, size=2)
        puzzle[row, col] = 0

    return [puzzle, board_for_solving]

def print_sudoku(board):
    for row in board:
        print(" ".join(map(str, row)))

# if __name__ == "__main__":
#     for _ in range(5):  # Adjust the number of boards as needed
#         sudoku_board = generate_sudoku()
#         print("Sudoku Board:")
#         print_sudoku(sudoku_board)
#         print("\n" + "=" * 20 + "\n")
if __name__ == "__main__":
    sudokus = {}
    sudokus["boards"] = []
    sudokus["solutions"] = []
    for number in range(20):
        sudoku = generate_sudoku()
        sudoku_board = sudoku[0]
        sudoku_solved = sudoku[1]
        sudokus["boards"].append(sudoku_board.tolist())
        sudokus["solutions"].append(sudoku_solved.tolist())
    with open('sudoku_board.json', 'w') as json_file:
        json.dump(sudokus, json_file)
