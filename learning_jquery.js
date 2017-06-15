console.log("This is working!")

// $(document).ready(function() {
//     $("div").fadeOut(1000);
// });

//    $(document).ready(function() {
//        $('some_element').some_function(some_argument);
//    });

$(handler)(function() {
    $('div').mouseenter(function() {
        $('div').fadeTo('fast', 0.5);
    });
});