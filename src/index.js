module.exports = function solveSudoku(matrix) {
    return SolveSudokuGame(matrix)
}

const N = 9
var a1, b1;

function SolveSudokuGame(matrix) {
    var row = 0,
        col = 0;

    if (!FindZeroLocation(matrix, row, col)) {
        return true; // success!  
    }
    row = a1;
    col = b1;

    for (var num = 1; num <= 9; num++) {

        if (isSafe(matrix, row, col, num)) {
            matrix[row][col] = num;

            if (SolveSudokuGame(matrix))
                return matrix;

            matrix[row][col] = 0;
        }
    }
    return false;
}

function FindZeroLocation(matrix,
    row, col) {
    for (row = 0; row < N; row++)
        for (col = 0; col < N; col++)
            if (matrix[row][col] == 0) {
                return true;
            }
    a1 = row;
    b1 = col;
    return false;
}

function isSafe(matrix, row, col, num) {
    return !UsedInRow(matrix, row, num) &&
        !UsedInCol(matrix, col, num) &&
        !UsedInBox(matrix, row - row % 3,
            col - col % 3, num) &&
        matrix[row][col] == 0;
}

function UsedInRow(matrix, row, num) {

    for (var col = 0; col < 9; col++)
        if (matrix[row][col] == num)
            return true;
    return false;
}

function UsedInCol(matrix, col, num) {
    for (var row = 0; row < 9; row++)
        if (matrix[row][col] == num)
            return true;
    return false;
}

function UsedInBox(matrix, boxStartRow,
    boxStartCol, num) {
    for (var row = 0; row < 3; row++)
        for (var col = 0; col < 3; col++)
            if (matrix[row + boxStartRow]
                [col + boxStartCol] == num)
                return true;
    return false;
}