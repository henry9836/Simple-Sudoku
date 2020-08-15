console.log("Invoking jQuery...");
console.log($("h1").text());
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