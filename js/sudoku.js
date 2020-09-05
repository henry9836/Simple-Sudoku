let grid = new Array(new Array(9), new Array(9), new Array(9), new Array(9), new Array(9), new Array(9), new Array(9), new Array(9), new Array(9));
let maxSolveSteps = 100000;
var currentStep = 0;
var currentDepth = 0;

//Checks the grid to see if it had been solved
function checkGridCondition() {
    //Check Vertial
    for (var x = 0; x < grid[0].length; x++) {
        let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        //For each y pos in the column
        for (var y = 0; y < grid.length; y++) {
            //For each element of nums
            for (var i = 0; i < nums.length; i++) {
                
                //If it is zero then it is not solved
                if (grid[y][x] == 0) {
                    return false;
                }

                //If it exists
                if (grid[y][x] == nums[i]) {
                    //Remove element from nums and check next position
                    grid.splice(i, 1);
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
    for (var y = 0; y < grid.length; y++) {
        let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        //For each y pos in the column
        for (var x = 0; x < grid[0].length; x++) {
            //For each element of nums
            for (var i = 0; i < nums.length; i++) {
                //If it exists
                if (grid[y][x] == nums[i]) {
                    //Remove element from nums and check next position
                    grid.splice(i, 1);
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

function solveRecursive() {
    currentStep++;

    console.log("[" + currentStep.toString() + "/" + maxSolveSteps.toString() + "]{" + currentDepth.toString() + "}Solving...");

    //Debug Grid
    //for (var y = 0; y < grid.length; y++) {
    //    console.info(grid[y]);
    //}

    console.log("------------------------------------");

    //Find an unused spot
    var xSpot = 0;
    var ySpot = 0;
    var foundSpot = false

    for (var x = 0; x < grid[0].length; x++) {
        for (var y = 0; y < grid.length; y++) {
            if (grid[y][x] == 0) {
                xSpot = x;
                ySpot = y;
                foundSpot = true;
                break;
            }
        }
        if (foundSpot) {
            break;
        }
    }

    //we found a solution because grid is full
    if (!foundSpot) {
        console.log("Grid is full!")
        return true;
    }

    //We have exceeded our limit we have failed
    if (currentStep > maxSolveSteps) {
        console.log("run out of steps");
        return false;
    }

    //Try and put numbers into the grid
    for (var i = 1; i < 10; i++) {
        if (checkValidPosition(xSpot, ySpot, i)) {
            //Apply number
            grid[ySpot][xSpot] = i;

            console.log("found a valid number!");
            currentDepth++;
            //for (var y = 0; y < grid.length; y++) {
            //    console.info(grid[y]);
            //}
            //console.log("--------------------------")

            //Continue Searching Downwards
            if (solveRecursive()) {
                //Escape upwards
                console.log("found a solution");
                return true;
            }

            //This branch failed so reset number
            grid[ySpot][xSpot] = 0;
            currentDepth--;
        }
    }
    
    //Bad Number
    return false;
}

//Solves the sudoku puzzle
function solve() {
    //Reset step counter
    currentStep = 0;

    //While the grid is not solved and we have not exceeded our step count
    while (!checkGridCondition() && currentStep < maxSolveSteps) {
        solveRecursive();
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
        for (var i = 0; i < grid.length; i++) {
            if (grid[i][x] == val) {
                return false;
            }
        }

        //Check hozitonal
        for (var i = 0; i < grid[x].length; i++) {
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
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[0].length; j++) {
            grid[i][j] = 0;
        }
    }

    generate();
}

function updateGrid() {
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[0].length; j++) {
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
            val = Math.floor(Math.random() * 9) + 1;
            foundAValidPos = checkValidPosition(x, y, val);
            console.log(foundAValidPos);
            counter++;
            //Break out of bad loop
            if (counter > 100) {
                foundAValidPos = true;
            }
        }
        grid[y][x] = val;
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