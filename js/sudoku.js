//Difficulty
const DIFFICULTY = {
    EASY: 4,
    MED: 3,
    HARD: 2
};

//Grid Temporary
gridTmpNewState = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]];


//Grid Temporary
gridTmp = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]];

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

let currentDifficulty = DIFFICULTY.MED;
let maxSolveSteps = 100000;
let hintsLeft = 3;
let hintsLeftStart = 3;
var currentStep = 0;
var currentDepth = 0;


//Replaces a grid
function copyGrid(newGrid) { 
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

    console.log("-- GRID RANDOM EASY --");
    switchDiff(DIFFICULTY.EASY);
    reset();
    if (grid.length != 9 || grid[0].length != 9) {
        throw 'Grid is corrupted!';
    }   
    solve();

    console.log("-- GRID RANDOM MED --");
    switchDiff(DIFFICULTY.MED);
    reset();
    if (grid.length != 9 || grid[0].length != 9) {
        throw 'Grid is corrupted!';
    }   
    solve();

    console.log("-- GRID RANDOM HARD --");
    switchDiff(DIFFICULTY.HARD);
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

    grid = copyGrid(gridEmpty);

}

//Loads on a new grid for testing
function loadNewGrid(mode) {

    clearGrid();

    if (mode == 1) {
        grid = copyGrid(gridT);
    }
    else if (mode == 2) {
        grid = copyGrid(gridE);
    }
    else if (mode == 3) {
        grid = copyGrid(gridH);
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
                //If we have exhausted our list of elements then there is a repeating number
                else if (i >= nums.length) {
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
                //If we have exhausted our list of elements then there is a repeating number
                else if (i >= nums.length) {
                    return false;
                }
            }
        }
    }

    //Check Grid

    for (var y = 0; y < 9; y++) {
        let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        //For each y pos in the column
        for (var x = 0; x < 9; x++) {
            //Find starting point to search cell
            let topCol = Math.floor(x / 3) * 3;
            let topRow = Math.floor(y / 3) * 3;

            //Search the cell for the same value
            for (var yPos = 0; yPos < 3; yPos++) {
                for (var xPos = 0; xPos < 3; xPos++) {
                    //For each element of nums
                    for (var i = 1; i < nums.length; i++) {
                        //If it exists
                        if (grid[y][x] == nums[i]) {
                            //Remove element from nums and check next position
                            nums.splice(i, 1);
                            continue;
                        }
                        //If we have exhausted our list of elements then there is a repeating number
                        else if (i >= nums.length) {
                            return false;
                        }
                    }
                }
            }
        }
    }


    //If everything is okay then we have solved the puzzle
    return true;
}


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
                    if (checkValidPosition(x, y, i)) {
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
    //console.log("SOLUTION FOUND, PUZZLE IS NOW SOLVED!!!");
    return true;
}

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
        let topCol = Math.floor(x / 3) * 3;
        let topRow = Math.floor(y / 3) * 3;

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
    //Reset header
    $("h1").html(" Simple Sudoku ");

    //Lock Button
    $("#reset").removeClass("active");
    $("#reset").addClass("disabled");

    //Reset hint button
    hintsLeft = hintsLeftStart;
    $("#hint").removeClass("disabled");
    $("#hint").html("Hint " + hintsLeft.toString());


    //Unlock Grid Inputs
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            var element = "#" + i + j;
            $(element).removeAttr('disabled');
        }
    }
    //Clear Values
    clearGrid();
    generate();
}

//Update visible grid
function updateGrid() {
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            var element = "#" + i + j;
            $(element).val(grid[i][j]);
        }
    }
}

//Give the user a hint
function hint() {
    if (hintsLeft > 0) {
        //Find the first zero or wrong value then change and disable the input
        for (var x = 0; x < 9; x++) {
            for (var y = 0; y < 9; y++) {
                if (grid[y][x] != gridTmp[y][x]) {

                    //Update value
                    grid[y][x] = gridTmp[y][x];

                    //Disable input
                    $("#" + y.toString() + x.toString()).attr('disabled', 'disabled');

                    //Update visible grid
                    updateGrid();

                    //Use up a hint
                    hintsLeft--;

                    //Update counter on button
                    $("#hint").html("Hint " + hintsLeft.toString());

                    if (hintsLeft <= 0) {
                        $("#hint").addClass("disabled");
                    }

                    return;
                }
            }
        }

    }
}

//Generate a grid
function generate() {

    clearGrid();

    console.log("Generate Called")

    //Generate valid numbers
    //012 345 678
    //For each box in the grid
    for (var xLoop = 0; xLoop < 8; xLoop += 3) {
        for (var yLoop = 0; yLoop < 8; yLoop += 3) {
            //console.log("X: " + xLoop.toString() + " || Y: " + yLoop.toString());

            //Get amount of numbers to generate
            var numToGenerate = currentDifficulty + (Math.floor(Math.random() * 2));

            //For the amount of numbers to generate
            for (var genNum = 0; genNum < numToGenerate; genNum++) {

                let foundASpot = false;

                //Pick a random location in the grid
                xPos = xLoop + (Math.floor(Math.random() * 3));
                yPos = yLoop + (Math.floor(Math.random() * 3));

                //Picks another spot if random spot is not zero
                if (grid[yPos][xPos] != 0) {
                    for (var tmpX = 0; tmpX < 3; tmpX++) {
                        for (var tmpY = 0; tmpY < 3; tmpY++) {
                            if (grid[yLoop + tmpY][xLoop + tmpX] == 0) {
                                yPos = yLoop + tmpY;
                                xPos = xLoop + tmpX;
                                foundASpot = true;
                                break;
                            }
                        }
                        if (foundASpot == true) {
                            break;
                        }
                    }
                }
                else {
                    foundASpot = true;
                }

                var count = 0;

                //Generate a random number in position
                while (true) {
                    var num = Math.floor(Math.random() * 9) + 1;

                    //If we haven't exceeded our max random attempt count
                    if (count < 10) {
                        if (checkValidPosition(xPos, yPos, num)) {
                            //Backup grid before modifying
                            gridTmp = copyGrid(grid);

                            //Modify Grid
                            grid[yPos][xPos] = num;

                            //Make a backup of the new grid step
                            gridTmpNewState = copyGrid(grid);

                            //If the grid is solveable
                            if (solveRecursive()) {
                                //Restore Backup Of Modified Step
                                grid = copyGrid(gridTmpNewState);
                                break;
                            }
                            //The new placement is impossible to solve from
                            else {
                                //restore backup
                                grid = copyGrid(gridTmp);
                            }
                            //break;
                        }
                    }
                    //Find the correct number manually
                    else {
                        for (var i = 1; i < 10; i++) {
                            if (checkValidPosition(xPos, yPos, i)) {
                                //Backup grid before modifying
                                gridTmp = copyGrid(grid);

                                //Modify Grid
                                grid[yPos][xPos] = i;

                                //Make a backup of the new grid step
                                gridTmpNewState = copyGrid(grid);

                                //If the grid is solveable
                                if (solveRecursive()) {
                                    //Restore Backup Of Modified Step
                                    grid = copyGrid(gridTmpNewState);
                                    break;
                                }
                                //The new placement is impossible to solve from
                                else {
                                    //restore backup
                                    grid = copyGrid(gridTmp);
                                }
                                //break;
                            }
                        }
                        //Cannot place any numbers in this spot
                        break;
                    }

                    count++;
                }
            }

;        }
    }

    //This should never be hit
    if (!solveRecursive()) {
        generate();
    }

    //Copy grids for later use
    gridTmp = copyGrid(grid);
    grid = copyGrid(gridTmpNewState);
    

    //Lock inputs
    for (var x = 0; x < 9; x++) {
        for (var y = 0; y < 9; y++) {
            var element = "#" + y + x;
            if (grid[y][x] != 0) {
                $(element).attr('disabled', 'disabled');
            }
        }
    }

    //Display new grid
    updateGrid();

    //Unlock Button
    $("#reset").removeClass("disabled");
    $("#reset").addClass("active");
}

function switchDiff(newDiff) {
    $("#diffButton").removeClass("btn-success");
    $("#diffButton").removeClass("btn-warning");
    $("#diffButton").removeClass("btn-danger");

    if (newDiff == DIFFICULTY.EASY) {
        currentDifficulty = DIFFICULTY.EASY;
        $("#diffButton").html("Easy");
        $("#diffButton").addClass("btn-success");
        hintsLeft = 3;
        hintsLeftStart = 3;
        $("#hint").html("Hint " + hintsLeft.toString());
        $("#hint").removeClass("disabled");
    }
    else if (newDiff == DIFFICULTY.MED) {
        currentDifficulty = DIFFICULTY.MED;
        $("#diffButton").html("Medium");
        $("#diffButton").addClass("btn-warning");
        hintsLeft = 2;
        hintsLeftStart = 2;
        $("#hint").html("Hint " + hintsLeft.toString());
        $("#hint").removeClass("disabled");
    }
    else {
        currentDifficulty = DIFFICULTY.HARD;
        $("#diffButton").html("Hard");
        $("#diffButton").addClass("btn-danger");
        hintsLeft = 1;
        hintsLeftStart = 1;
        $("#hint").html("Hint " + hintsLeft.toString());
        $("#hint").removeClass("disabled");
    }
}

function validateInput(element) {

    //Get value
    var input = $("#" + element).val();

    //No value
    if (input == "") {
        $("#" + element).val("0");
        return;
    }

    //If the input is a number
    if (!Number.isNaN(parseInt(input))) {

        //If the length of the string is more than one character then replace the string with the last character
        if (input.length > 1) {
            input = input[input.length - 1];
        }

        //Process processed input
        var inputNum = parseInt(input);

        //Detect Bad Numbers
        if (inputNum <= 0 || 9 < inputNum) {
            $("#" + element).val("0");
            grid[element[0]][element[1]] = 0;
            return;
        }

        //Update grid
        grid[element[0]][element[1]] = inputNum;

        //Update Visible Grid
        $("#" + element).val(inputNum.toString());

        
    }
    else {
        $("#" + element).val("0");
        grid[element[0]][element[1]] = 0;
    }

}


$(document).ready(function () {
    console.log("Invoking jQuery...");
    console.log($("h1").text());
    console.log($("small").text());
    console.log("jQuery Done.");

    $("h1").on("click", function () {
        $(this).text("Simple Sukdou");
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
        $(this).html("GitHub Page");
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
        //solve(); no need to solve since we solve at start
        grid = copyGrid(gridTmp);
        updateGrid();
    });

    $("#submit").on("click", function () {
        console.log("submit pressed");
        if (checkGridCondition()) {
            $("h1").html("You Win!");
            console.log("YOU DID IT!");
        }
        else {
            $("h1").html("Grid Not Solved");
            console.log("Grid not solved")
        }
    });

    $("#hint").on("click", function () {
        hint();
    });

    $("#EasyButton").on("click", function () {
        switchDiff(DIFFICULTY.EASY);
    });

    $("#MedButton").on("click", function () {
        switchDiff(DIFFICULTY.MED);
    });

    $("#HardButton").on("click", function () {
        switchDiff(DIFFICULTY.HARD);
    });

    //Random Slider Value
    $("#diffSlider").val(Math.floor(Math.random() * 27) + 18);
    var coin = Math.floor(Math.random() * 3);
    if (coin == 0) {
        switchDiff(DIFFICULTY.EASY);
    }
    else if (coin == 1) {
        switchDiff(DIFFICULTY.MED);
    }
    else {
        switchDiff(DIFFICULTY.HARD);
    }


    reset();

});