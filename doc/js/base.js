
/* Prettyify */
$( document ).ready(function() {
    prettyPrint();
});


/* Scrollspy */
var navHeight = $('.navbar').outerHeight(true) + 10

$('body').scrollspy({
    target: '.bs-sidebar',
    offset: navHeight
})


/* Prevent disabled links from causing a page reload */
$("li.disabled a").click(function() {
    event.preventDefault();
});


/* Adjust the scroll height of anchors to compensate for the fixed navbar */
window.disableShift = false;
var shiftWindow = function() {
    if (window.disableShift) {
        window.disableShift = false;
    } else {
        /* If we're at the bottom of the page, don't erronously scroll up */
        var scrolledToBottomOfPage = (
            (window.innerHeight + window.scrollY) >= document.body.offsetHeight
        );
        if (!scrolledToBottomOfPage) {
            scrollBy(0, -60);
        };
    };
};
if (location.hash) {shiftWindow();}
window.addEventListener("hashchange", shiftWindow);


/* Deal with clicks on nav links that do not change the current anchor link. */
$("ul.nav a" ).click(function() {
    var href = this.href;
    var suffix = location.hash;
    var matchesCurrentHash = (href.indexOf(suffix, href.length - suffix.length) !== -1);
    if (location.hash && matchesCurrentHash) {
        /* Force a single 'hashchange' event to occur after the click event */
        window.disableShift = true;
        location.hash='';
    };
});

/* Handle keyboard events. */
$(document).keydown(function (event) {
    console.log(event.keyCode)
    switch (event.keyCode) {
        // left
        case 37:
            location.href = $("ul.navbar-right a[rel='next']").attr('href')
            break;
        // right
        case 39:
            location.href = $("ul.navbar-right a[rel='prev']").attr('href')
            break;
    }
});