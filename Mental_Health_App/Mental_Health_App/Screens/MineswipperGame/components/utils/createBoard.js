import { createCell } from './createCell';

const createBoard = (width, height, bombs) => {
    const matrix = [];
    for (let row = 0; row < height; row++) {
        const newRow = [];
        for (let col = 0; col < width; col++) {
            newRow.push(createCell(row, col))
        }
        matrix.push(newRow);
    }
    //insert bomb
    insertBombs(matrix, bombs);
    //increase num
    increaseNums(matrix);
    return matrix;

}

export default createBoard

function increaseNums(matrix) {
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col].isBomb) {
                const neighbors = getNeighbours(row, col, matrix);
                for (const neighbor of neighbors) {
                    const [row, col] = neighbor;
                    matrix[row][col].value += 1;
                }
            }
        }
    }
}

export function getNeighbours(row, col, matrix) {
    const height = matrix.length;
    const width = matrix[row].length;
    const neighbors = [];

    if (row - 1 >= 0) neighbors.push([row - 1, col]); //up
    if (row + 1 < height) neighbors.push([row + 1, col]);//down
    if (col + 1 < width) neighbors.push([row, col + 1]);//rigth
    if (col - 1 >= 0) neighbors.push([row, col - 1]);//left

    if (row - 1 >= 0 && col - 1 >= 0) neighbors.push([row - 1, col - 1]);//up-left
    if (row - 1 >= 0 && col + 1 < width) neighbors.push([row - 1, col + 1]);//up-rigth
    if (row + 1 < height && col + 1 < width) neighbors.push([row + 1, col + 1]);//down
    if (row + 1 < height && col - 1 >= 0) neighbors.push([row + 1, col - 1]);

    return neighbors;
}

function insertBombs(matrix, bombs) {
    let bombsToInsert = bombs;

    while (bombsToInsert > 0) {
        let row = Math.floor(Math.random() * matrix.length);
        let col = Math.floor(Math.random() * matrix[0].length);
        if (!matrix[row][col].isBomb) {
            matrix[row][col].isBomb = true;
        }
        bombsToInsert--;
    }
}

