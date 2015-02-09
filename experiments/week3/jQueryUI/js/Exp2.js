$(function () {
    $(".p1").resizable({
        handles: "n, e, w, s, se, sw, ne, nw"
    });
    $(".p2").draggable({
        grid: [20, 20]
    });
    
    $(".square").each(function () {
        $(this).resizable({
            handles: $(this).attr("id")
        });
    });
})