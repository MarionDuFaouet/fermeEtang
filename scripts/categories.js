$(document).ready(function(){
    $("#tout").addClass("on");

    $("#boeuf").click(function(){
        $(".tout").hide();
        $(".boeuf").show();
        $("#tout,#foret").removeClass("on");
        $("#boeuf").addClass("on");
    });
    $("#veau").click(function(){
        $(".tout").hide();
        $(".veau").show();
        $("#tout,#boeuf").removeClass("on");
        $("#veau").addClass("on");
    });
    $("#tout").click(function(){
        $(".tout").show();
        $("#veau,#boeuf").removeClass("on");
        $("#tout").addClass("on");
    });
})