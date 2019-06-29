$(document).ready(function() {
    $("button").addClass("makeRed").css("color", "red");
    
    $("button").mouseleave(function() {
        $("button").removeClass("makeRed").addClass("makeBorder");
    });
    $("button").mouseleave(function() {
        $("button").removeClass("makeBorder").addClass("makeRed");
    });
});
