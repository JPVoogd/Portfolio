const board = document.getElementById("board");

let row_count = 10;
let col_count = 10;
let mine_count = 10;


function createBoard() {

    for (let i = 0; i < row_count; i++) {
        const row = document.createElement('div');
        row.className = "row";
        board.append(row);

        for (let j = 0; j < col_count; j++) {
            const cell = document.createElement('div');
            cell.className = "cell";
            cell.id = i + "_" + j;
            row.append(cell);

            cell.addEventListener('click', function() {
                handleClick(i, j);
            })

            cell.addEventListener('contextmenu', function(e) {
                e.preventDefault();
                handleRightClick(i, j);
            })
        }

    }

    let positionsArray = createMinePositions();
    placeTheMines(positionsArray);
}

function createMinePositions() {

    let arrMinePositions = [];

    for (var i = 0; i < mine_count;) {

        let x = Math.floor(Math.random() * row_count);
        let y = Math.floor(Math.random() * col_count);

        let isUnique = true;
        arrMinePositions.forEach(function(p) {

            if (p[0] == x && p[1] == y) {
                //already exist
                isUnique = true;
            }

        })

        if (isUnique) {
            let position = [x, y];
            arrMinePositions[i] = position;
            i++;
        }
    }

    return arrMinePositions;
}

function placeTheMines(minePositions) {
    for (let i = 0; i < mine_count; i++) {
        let eachPosition = minePositions[i];

        let x = eachPosition[0];
        let y = eachPosition[1];

        let cellAtThisPosition = document.getElementById(x + "_" + y);
        cellAtThisPosition.classList.add("mine");
    }
}

function handleClick(x, y) {
    let cell = document.getElementById(x + "_" + y);

    if (cell.classList.contains('mine')) {
        //Reveal all mines
        for (let i = 0; i < row_count; i++) {
            for (let j = 0; j < col_count; j++) {

                let cell = document.getElementById(i + "_" + j);

                if (cell.classList.contains('mine'))
                    cell.classList.add("revealed");
            }
        }
    } else {
        //Reveals the cells without a mine
        reveal(x, y);
    }

    checkIfWon();
}

function reveal(x, y) {
    let cell = document.getElementById(x + "_" + y);

    if (cell.classList.contains('revealed')) {
        //already revealed
    } else {
        cell.classList.add('revealed');
        let mine_count_adjacent = 0;

        for (let m = Math.max(x - 1, 0); m <= Math.min(x + 1, row_count - 1); m++) {
            for (let n = Math.max(y - 1, 0); n <= Math.min(y + 1, col_count - 1); n++) {
                let adjacentCell = document.getElementById(m + "_" + n);

                if (adjacentCell.classList.contains("mine")) {
                    mine_count_adjacent++;
                }
            }
        }


        if (mine_count_adjacent) {
            cell.innerHTML = mine_count_adjacent;
        } else {
            //Explore the adjacent cells
            for (let m = Math.max(x - 1, 0); m <= Math.min(x + 1, row_count - 1); m++) {
                for (let n = Math.max(y - 1, 0); n <= Math.min(y + 1, col_count - 1); n++) {
                    //Recursive call 
                    reveal(m, n);
                }
            }
        }
    }
}

function handleRightClick(x, y) {
    let cell = document.getElementById(x + "_" + y);
    if (!cell.classList.contains("revealed")) {
        if (cell.classList.contains("flagged")) {
            cell.classList.remove("flagged");
        } else {
            cell.classList.add("flagged");
        }
    }
}

function checkIfWon() {
    var minesRevealed = document.getElementsByClassName("mine revealed").length;
    var cellsStillHidden = row_count * col_count - document.getElementsByClassName("cell revealed").length;

    if (minesRevealed > 0) {
        showGameOverMessage(false);
    } else if (cellsStillHidden == mine_count) {
        showGameOverMessage(true);
    }
}

function showGameOverMessage(won) {
    board.classList.add('disable_click');

    if (won) {
        alert("Congratulations, you won!");
        location.reload();
    } else {
        alert("Game over, you have lost");
        location.reload();
    }
}


createBoard();