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

    $("small").on("click", function () {
        var validTab = window.open("https://github.com/henry9836");
        if (validTab) {
            win.focus();
        } else {
            alert('Please allow popups for this website');
        }
    });
});