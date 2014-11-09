// Fix to prevent css transitions on page load
$("document").ready(function() {
    $("body").removeClass("preload");
});