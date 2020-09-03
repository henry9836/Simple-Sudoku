$(document).ready(function () {
    console.log("Invoking jQuery...");
    console.log($("h1").text());
    console.log($("small").text());
    console.log("jQuery Done.");

    var grid = new Array(new Array(9), new Array(9), new Array(9), new Array(9), new Array(9), new Array(9), new Array(9), new Array(9), new Array(9));

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

        //init
        for (var i = 0; i < grid.length; i++) {
            for (var j = 0; j < grid[0].length; j++) {
                grid[i][j] = String.valueOf(Math.floor(Math.random() * 8) + 1);
            }
        }

        for (var i = 0; i < grid.length; i++) {
            for (var j = 0; j < grid[0].length; j++) {
                var element = "#" + i + j;
                console.log(element);
                $(element).val("4");
            }
        }

    });

});