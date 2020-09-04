$(document).ready(function () {
    console.log("Invoking jQuery...");
    console.log($("h1").text());
    console.log($("small").text());
    console.log("jQuery Done.");

    let grid = new Array(new Array(9), new Array(9), new Array(9), new Array(9), new Array(9), new Array(9), new Array(9), new Array(9), new Array(9));

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
            var searchX = 0;
            var searchY = 0;

            //X
            if (3 < x <= 6) {
                searchX = 3;
            }
            else {
                searchX = 6;
            }

            //Y
            if (3 < y <= 6) {
                searcyY = 3;
            }
            else {
                searchY = 6;
            }


            //Check cell
            for (var tmpX = 0; tmpX < 3; tmpX++) {
                for (var tmpY = 0; tmpY < 3; tmpY++) {
                    if (grid[searchY + tmpY][searchX + tmpX] == val) {
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
    function reset(){
        //Clear Values
        for (var i = 0; i < grid.length; i++) {
            for (var j = 0; j < grid[0].length; j++) {
                grid[i][j] = 0;
            }
        }

        generate();
    }

    //Generate a grid
    function generate() {

        //Generate valid numbers
        for (var i = 0; i < $("#diffSlider").val(); i++) {
            var foundAValidPos = false;
            var x = 0;
            var y = 0;
            var val = 1;
            while (!foundAValidPos) {
                x = Math.floor(Math.random() * 9);
                y = Math.floor(Math.random() * 9);
                val = Math.floor(Math.random() * 9) + 1;
                foundAValidPos = checkValidPosition(x, y, val);
                console.log(foundAValidPos);
            }
            grid[y][x] = val;
        }


        for (var i = 0; i < grid.length; i++) {
            for (var j = 0; j < grid[0].length; j++) {
                var element = "#" + i + j;
                $(element).val(grid[i][j]);
            }
        }
    }

    $("#reset").on("click", function () {
        console.log("reset pressed");
        reset();
    });

});