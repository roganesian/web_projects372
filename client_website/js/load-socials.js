$(document).ready(function() {
    // Load additional content using AJAX when the page loads
    $("#socials").load("data/socials.html", function() {
        // Hide all social icons initially
        $(".social-icons a").hide();
        
        // Iterate through each social icon and animate them one by one
        $(".social-icons a").each(function(index) {
            $(this).delay(200 * index).fadeIn(1000); // Delay and fadeIn each icon
        });
    });
});
