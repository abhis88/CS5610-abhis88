$(function () {
    dd_source = null;
    dd_destination = null;

    var availableTags = [
         "Alabama",
         "Alaska",
         "Arizona",
         "Arkansas",
         "California",
         "Colorado",
         "Connecticut",
         "Delaware",
         "Florida",
         "Georgia",
         "Hawaii",
         "Idaho",
         "Illinois",
         "Indiana",
         "Iowa",
         "Kansas",
         "Kentucky",
         "Louisiana",
         "Maine",
         "Maryland",
         "Massachusetts",
         "Michigan",
         "Minnesota",
         "Mississippi",
         "Missouri",
         "Montana",
         "Nebraska",
         "Nevada",
         "New Hampshire",
         "New Jersey",
         "New Mexico",
         "New York",
         "North Carolina",
         "North Dakota",
         "Ohio",
         "Oklahoma",
         "Oregon",
         "Pennsylvania",
         "Rhode Island",
         "South Carolina",
         "South Dakota",
         "Tennessee",
         "Texas",
         "Utah",
         "Vermont",
         "Virginia",
         "Washington",
         "West Virginia",
         "Wisconsin",
         "Wyoming"
    ];
    $("#flightSource").autocomplete({
        source: availableTags,
        change: function (ev, ui) {
            dd_source = ui.item.label;
        }
    });
    $("#flightDestination").autocomplete({
        source: availableTags,
        change: function (ev, ui) {
            dd_destination = ui.item.label;
            if (dd_source == dd_destination) {
                alert("WhoO !! Source and Destination Cannot be same.");
                $("#star").addClass("glyphicon glyphicon-remove red");
                ;
            }else
            {
                $("#star").removeClass("glyphicon glyphicon-remove red").addClass("glyphicon glyphicon-ok green");
            }
        }
    });
});