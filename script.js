
$(document).ready(function() {

    // Hide all answers when the webpage loads
    $(".answer").hide();


    // When a question is clicked
    $(".question").click(function() {

        // Find the answer directly after this question
        var answer = $(this).next(".answer");

        // Find the plus/minus symbol
        var icon = $(this).find(".toggle-icon");

        // Animate the answer open or closed
        answer.slideToggle(400);

        // Change the symbol depending on whether the answer is open
        if (icon.text() === "+") {
            icon.text("−");
        } else {
            icon.text("+");
        }

    });

});
