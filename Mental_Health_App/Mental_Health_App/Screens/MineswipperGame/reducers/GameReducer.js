import createBoard, { getNeighbours } from "../components/utils/createBoard";

export function gameReducer(state, action){
    const {type, row, col, boardSize, bombNum } = action;
    switch (type) {
        case "HANDLE_CELL":{
            if (state.board[row][col].isBomb) {
                return{
                    ...state,
                    board: flipAll(state.board),
                    isGameOver: true,
                }
            }else if (state.board[row][col].value === 0) {
                //expand
                return{
                    ...state,
                    board: expand(row, col, state.board),
                }
            }else{
                return{
                    ...state,
                    board: flipCell(row, col, state.board),
                }
            }
        }
        case "RESTART_GAME": {
            // Reset the game state to initial values
            return {
              board: createBoard(boardSize, boardSize, bombNum),
              isGameover: false,
            };
          }
        default: {
            console.log('error action unknown');
        }

    }
}

function flipCell(row, col, board){
    const newBoard = board.slice();
    const cell = newBoard[row][col];
    const newCell = {
        ...cell,
        isFlipped: true,
    }
    newBoard[row][col] = newCell;
    return newBoard;
}

//algorithm for expanding the cells 
function expand(row, col, board){
    const newBoard = board.slice();
    const stack = [[row, col]];

    while (stack.length > 0) {
        const [row, col] = stack.pop();
        const neighbors = getNeighbours(row,col,newBoard);

        for(const neighbor of neighbors){
            const [row,col] = neighbor;
            if (newBoard[row][col].isFlipped) continue;
            if (!newBoard[row][col].isBomb){
                newBoard[row][col].isFlipped = true;
                if(newBoard[row][col].value > 0){
                    continue;
                }
                stack.push(neighbor);
            }
        }
    }
    return newBoard;
}

function flipAll(board){
    const newBoard = board.slice();
    for (let row = 0; row < newBoard.length; row++) {
        for (let col = 0; col < newBoard[row].length; col++) {
          const cell = newBoard[row][col];
          const newCell = {
            ...cell,
            isFlipped: true
          }
          newBoard[row][col] = newCell;
        }
    }
    return newBoard;
}
