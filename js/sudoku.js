//Grid
grid = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]];

//Empty Grid For Reseting
gridEmpty = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]];

//Test Grid
let gridT = [
    [8, 0, 0, 4, 0, 6, 0, 7, 0],
    [0, 0, 0, 0, 0, 0, 4, 0, 0],
    [0, 1, 0, 0, 0, 0, 6, 5, 0],
    [5, 0, 9, 0, 3, 0, 7, 8, 0],
    [0, 0, 0, 0, 7, 0, 0, 0, 0],
    [0, 4, 8, 0, 2, 1, 0, 3, 0],
    [0, 5, 2, 0, 0, 0, 0, 9, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0],
    [3, 0, 0, 9, 0, 2, 0, 0, 5]];

//Easy Test Grid
gridE = [
    [0, 0, 5, 0, 0, 3, 7, 0, 0],
    [9, 0, 0, 1, 0, 0, 3, 6, 0],
    [0, 0, 3, 0, 8, 9, 0, 0, 0],
    [3, 8, 2, 4, 0, 5, 0, 0, 0],
    [0, 0, 1, 0, 7, 0, 4, 0, 0],
    [0, 0, 0, 3, 0, 2, 5, 1, 8],
    [0, 0, 0, 7, 2, 0, 6, 0, 0],
    [0, 3, 4, 0, 0, 6, 0, 0, 2],
    [0, 0, 6, 9, 0, 0, 8, 0, 0]];

//Hard Test Grid
gridH = [
    [0, 9, 0, 0, 1, 0, 4, 0, 0],
    [0, 3, 0, 0, 0, 4, 0, 0, 0],
    [0, 0, 7, 0, 0, 6, 0, 0, 0],
    [0, 7, 0, 0, 0, 0, 6, 0, 5],
    [0, 0, 2, 0, 7, 0, 1, 0, 0],
    [8, 0, 9, 0, 0, 0, 0, 4, 0],
    [2, 0, 4, 8, 0, 0, 3, 0, 0],
    [0, 0, 0, 9, 0, 0, 0, 5, 0],
    [0, 0, 6, 0, 3, 0, 0, 7, 0]];

let maxSolveSteps = 100000;
var currentStep = 0;
var currentDepth = 0;

//Replaces a grid
function replaceGrid(newGrid) { 
    var tmp = [];
    for (var i = 0; i < newGrid.length; i++) {
        tmp[i] = newGrid[i].slice();
    }
    return tmp;
}

//Tests algorthiums
function testRun() {

    console.log("======================");
    console.log(" [ TEST RUN STARTED ]")
    console.log("----------------------");
    console.log("-- GRID PRESET 1 --");
    loadNewGrid(1);
    if (grid.length != 9 || grid[0].length != 9) {
        throw 'Grid is corrupted!';
    }   

    solve();
    console.log("-- GRID PRESET 2 --");
    loadNewGrid(2);
    if (grid.length != 9 || grid[0].length != 9) {
        throw 'Grid is corrupted!';
    }   

    solve();
    console.log("-- GRID PRESET 3 --");
    loadNewGrid(3);
    if (grid.length != 9 || grid[0].length != 9) {
        throw 'Grid is corrupted!';
    }   

    solve();
    console.log("-- GRID RANDOM 1 --");
    reset();
    if (grid.length != 9 || grid[0].length != 9) {
        throw 'Grid is corrupted!';
    }   

    solve();
    console.log("-- GRID RANDOM 2 --");
    reset();
    if (grid.length != 9 || grid[0].length != 9) {
        throw 'Grid is corrupted!';
    }   

    solve();
    console.log("-- GRID RANDOM 3 --");
    reset();
    if (grid.length != 9 || grid[0].length != 9) {
        throw 'Grid is corrupted!';
    }   

    solve();
    console.log("======================");
    console.log(" [ TEST RUN END ]")
    console.log("======================");

}

function clearGrid() {

    grid = replaceGrid(gridEmpty);

}

//Loads on a new grid for testing
function loadNewGrid(mode) {

    clearGrid();

    if (mode == 1) {
        grid = replaceGrid(gridT);
    }
    else if (mode == 2) {
        grid = replaceGrid(gridE);
    }
    else if (mode == 3) {
        grid = replaceGrid(gridH);
    }

    if (grid.length != 9 || grid[0].length != 9) {
        throw 'Grid is corrupted!';
    }   

    console.log("Switched Grid");
    updateGrid();

}


//Checks the grid to see if it had been solved
function checkGridCondition() {
    //Check Vertial
    for (var x = 0; x < 9; x++) {
        let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        //For each y pos in the column
        for (var y = 0; y < 9; y++) {
            //For each element of nums
            for (var i = 1; i < nums.length; i++) {
                
                //If it is zero then it is not solved
                if (grid[y][x] == 0) {
                    return false;
                }

                //If it exists
                if (grid[y][x] == nums[i]) {
                    //Remove element from nums and check next position
                    nums.splice(i, 1);
                    continue;
                }
                //There is a repeating number
                else {
                    return false;
                }
            }
        }
    }

    //Check Hoizontal
    for (var y = 0; y < 9; y++) {
        let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        //For each y pos in the column
        for (var x = 0; x < 9; x++) {
            //For each element of nums
            for (var i = 1; i < nums.length; i++) {
                //If it exists
                if (grid[y][x] == nums[i]) {
                    //Remove element from nums and check next position
                    nums.splice(i, 1);
                    continue;
                }
                //There is a repeating number
                else {
                    return false;
                }
            }
        }
    }

    //Check Grid
    //To do

    //If everything is okay then we have solved the puzzle
    return true;
}

//Rewrite 

function solveRecursive() {

    currentStep++;

    if (grid.length != 9 || grid[0].length != 9) {
        throw 'Grid is corrupted!';
    }

    //Iterate through each x and y positioning trying out each number
    for (var x = 0; x < 9; x++) {
        for (var y = 0; y < 9; y++) {
            //if the position is not set to a number
            if (grid[y][x] == 0) {
                //Try each number out
                for (var i = 1; i < 10; i++) {
                    //If we can use a number
                    if (possible(x, y, i)) {
                        currentDepth++;

                        //Set new number
                        grid[y][x] = i;

                        //Go down a layer
                        if (solveRecursive()) {
                            return true; //Found solution escape upwards
                        }

                        //wrong route go backwards and reset our steps
                        grid[y][x] = 0;
                        currentDepth--;

                    }
                }

                //Exhasted options return upwards
                return false;
            }
        }
    }

    //Grid is filled with numbers thus we have solved it
    console.log("SOLUTION FOUND, PUZZLE IS NOW SOLVED!!!");
    return true;
}


//EXAMPLE TEST


function possible(x, y, n) {
    for (let i = 0; i < 9; i++) {
        if (grid[y][i] === n) {
            return false
        }
    }
    for (let i = 0; i < 9; i++) {
        if (grid[i][x] === n) {
            return false
        }
    }
    let x0 = Math.floor(x / 3) * 3;
    let y0 = Math.floor(y / 3) * 3;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (grid[y0 + i][x0 + j] === n) {
                return false
            }
        }
    }
    return true;
}

//EXAMPLE END

//Solves the sudoku puzzle
function solve() {
    //Reset step counter
    currentStep = 0;
    currentDepth = 0;

    if (grid.length != 9 || grid[0].length != 9) {
        throw 'Grid is corrupted!';
    }

    //While the grid is not solved and we have not exceeded our step count
    while (!checkGridCondition() && currentStep < maxSolveSteps) {
        if (solveRecursive()) {
            break;
        }
    }

    if (currentStep >= maxSolveSteps) {
        console.log("Failed To Solve!");
    }
    else {
        console.log("Solved!");
    }

    updateGrid();

}

//Checks if a number can be placed in a position
function checkValidPosition(x, y, val) {
    //if grid is not set to anything
    if (grid[y][x] == 0) {
        //Check vertical
        for (var i = 0; i < 9; i++) {
            if (grid[i][x] == val) {
                return false;
            }
        }

        //Check hozitonal
        for (var i = 0; i < 9; i++) {
            if (grid[y][i] == val) {
                return false;
            }
        }

        //Find starting point to search cell
        var topRow = y - (y % 3);
        var topCol = x - (x % 3);

        //Search the cell for the same value
        for (var yPos = 0; yPos < 3; yPos++) {
            for (var xPos = 0; xPos < 3; xPos++) {
                if (grid[topRow + yPos][topCol + xPos] == val) {
                    return false;
                }
            }
        }

        //It is valid
        return true;
    }
    else {
        return false;
    }
}

//Reset Game
function reset() {
    //Clear Values
    clearGrid();
    generate();
}

function updateGrid() {
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            var element = "#" + i + j;
            $(element).val(grid[i][j]);
        }
    }
}

//Generate a grid
function generate() {

    //Generate valid numbers
    for (var i = 0; i < ((45 - $("#diffSlider").val()) + 18); i++) {
        var foundAValidPos = false;
        var x = 0;
        var y = 0;
        var val = 1;
        var counter = 0;
        while (!foundAValidPos) {
            x = Math.floor(Math.random() * 9);
            y = Math.floor(Math.random() * 9);

            //Break out of bad loop
            if (counter > 75) {
                //Find an empty spot
                for (var xPos = 0; xPos < 9; xPos++) {
                    for (var yPos = 0; yPos < 9; yPos++) {
                        if (grid[yPos][xPos] == 0) {
                            x = xPos;
                            y = yPos;
                        }
                    }
                }
            }
            if (counter > 100) {
                break;
            }

            if (grid[y][x] == 0) {
                val = Math.floor(Math.random() * 9) + 1;
                //foundAValidPos = checkValidPosition(x, y, val);
                foundAValidPos = possible(x, y, val);
                if (foundAValidPos) {
                    break;
                }
                //console.log(foundAValidPos);
            }
            counter++;
        }
        if (foundAValidPos) {
            grid[y][x] = val;
        }
        //Ran out of attempts to place numbers
        else {
            break;
        }
    }


    updateGrid();
}

$(document).ready(function () {
    console.log("Invoking jQuery...");
    console.log($("h1").text());
    console.log($("small").text());
    console.log("jQuery Done.");

    $("h1").on("click", function () {
        $(this).text("My Final Message Goodbye");
        $("h1").animate({ left: '250px' });
    });

    $("h1").on("mouseover", function () {
        $(this).css("font-weight", "bold");
    });

    $("h1").on("mouseleave", function () {
        $(this).css("font-weight", "normal");
    });

    $("small").on("mouseover", function () {
        $(this).css("font-weight", "bold");
        $(this).html("Go To My Github");
    });

    $("small").on("mouseleave", function () {
        $(this).css("font-weight", "normal");
        $(this).html("Built By Henry Oliver")
    });

    $("small").on("click", function () {
        var validTab = window.open("https://github.com/henry9836");
        if (validTab) {
            win.focus();
        } else {
            alert('Please allow popups for this website');
        }
    });

    $("#reset").on("click", function () {
        console.log("reset pressed");
        reset();
    });

    $("#solve").on("click", function () {
        console.log("solve pressed");
        solve();
    });

    //Random Slider Value
    $("#diffSlider").val(Math.floor(Math.random() * 27) + 18);

    reset();

});