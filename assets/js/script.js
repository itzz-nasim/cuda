$(document).ready(function() {

    // For Sticky Menu
    $('.js--services-section').waypoint(function(direction) {
        if (direction == "down") {
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");
        }
    });

    // Mixitup for Portfolio-section
    var mixer = mixitup('.container');

    // Smooth scroll
    $("s").on('click', function(event) {

        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $("html, body").animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });

});

function openMenu() {
    document.getElementById('mobileNav').style.width = "100%";
}

function closeMenu() {
    document.getElementById('mobileNav').style.width = "0";
}