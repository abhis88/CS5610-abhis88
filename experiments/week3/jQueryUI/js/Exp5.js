$(function () {
    $("#slider-1").slider();
    $("#slider-2").slider({
        value: 60,
        animate: "slow",
        orientation: "horizontal"
    });
    $("#slider-3").slider({
        range: true,
        min: 0,
        max: 500,
        values: [35, 200],
        slide: function (event, ui) {
            $("#price").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });

    $("#slider-6").slider({
        range: true,
        min: 0,
        max: 500,
        values: [85, 200],
        start: function (event, ui) {
            $("#startvalue")
               .val("$" + ui.values[0] + " - $" + ui.values[1]);
        },
        stop: function (event, ui) {
            $("#stopvalue")
               .val("$" + ui.values[0] + " - $" + ui.values[1]);
        },
        change: function (event, ui) {
            $("#changevalue")
               .val("$" + ui.values[0] + " - $" + ui.values[1]);
        },
        slide: function (event, ui) {
            $("#slidevalue")
               .val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
});
