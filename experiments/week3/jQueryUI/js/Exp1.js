$(function () {
    $("#p1").draggable();
    $("#p2").draggable({
        grid: [20, 20]
    })
    $("#p3").draggable();
    $(".div1, .div2").draggable();
})