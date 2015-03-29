jQuery(function () 
{
    /* --- SOURCE ---*/

    jQuery("#source").autocomplete({
        source: function (request, response) {
            jQuery.getJSON(
               "http://gd.geobytes.com/AutoCompleteCity?callback=?&q="+request.term,
               function (data) {
                   response(data);
               }
            );
        },
        minLength: 3,
        select: function (event, ui) {
            var selectedObj = ui.item;
            jQuery("#source").val(selectedObj.value);
            getcitydetails(selectedObj.value);
            return false;
        },
        open: function () {
            jQuery(this).removeClass("ui-corner-all").addClass("ui-corner-top");
        },
        close: function () {
            jQuery(this).removeClass("ui-corner-top").addClass("ui-corner-all");
        }
    });

    /*  --- DESTINATION --- */

    jQuery("#destination").autocomplete({
        source: function (request, response) {
            jQuery.getJSON(
               "http://gd.geobytes.com/AutoCompleteCity?callback=?&q=" + request.term,
               function (data) {
                   response(data);
               }
            );
        },
        minLength: 3,
        select: function (event, ui) {
            var selectedObj = ui.item;
            jQuery("#destination").val(selectedObj.value);
            getcitydetails(selectedObj.value);
            return false;
        },
        open: function () {
            jQuery(this).removeClass("ui-corner-all").addClass("ui-corner-top");
        },
        close: function () {
            jQuery(this).removeClass("ui-corner-top").addClass("ui-corner-all");
        }
    });
    jQuery("#source, #destination").autocomplete("option", "delay", 100);
});