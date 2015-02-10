$(function () {
    $("body").mousemove(function (e) {
        $('#spnCursor').html("X Axis : " + e.pageX + " Y Axis : " + e.pageY);
        var availableTags = [
                             "ActionScript",
                             "AppleScript",
                             "Asp",
                             "BASIC",
                             "C",
                             "C++",
                             "Clojure",
                             "COBOL",
                             "ColdFusion",
                             "Erlang",
                             "Fortran",
                             "Groovy",
                             "Haskell",
                             "Java",
                             "JavaScript",
                             "Lisp",
                             "Perl",
                             "PHP",
                             "Python",
                             "Ruby",
                             "Scala",
                             "Scheme"
        ];

        $("#tags").autocomplete({
            source: availableTags
        });

        $("#datepicker").datepicker();

        $("#tool").tooltip();
    })
});
