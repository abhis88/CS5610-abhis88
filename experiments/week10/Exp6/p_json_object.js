$(function () {

    $("#getDetails").click(function () {

        var source = $("#source").val();
        var destination = $("#destination").val();

        $.ajax({
            url: "http://free.rome2rio.com/api/1.2/json/Search?key=eU7G6lzt&oName=" + source + "&dName=" + destination,
            cache: "false",
            success: function (data) {
                console.log(data);
                alert(data);
            }
        });
    });
});
