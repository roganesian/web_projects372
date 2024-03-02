// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Create XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // When response has loaded
    xhr.onload = function() {
        // Check if the server status was ok
        if (xhr.status == 200) {
            // Get XML response
            var xmlDoc = xhr.responseXML;

            // Get testimonial elements
            var testimonials = xmlDoc.getElementsByTagName('testimonial');

            // Loop through testimonials
            for (var i = 0; i < testimonials.length; i++) {
                // Get name and quote
                var name = testimonials[i].getElementsByTagName('name')[0].textContent;
                var quote = testimonials[i].getElementsByTagName('quote')[0].textContent;

                // Create testimonial HTML
                var testimonialHTML = '<div class="feedback-card">';
                testimonialHTML += '<div class="profile-photo">';
                testimonialHTML += '<img src="images/people0' + (i + 1) + '.png" alt="' + name + '">';
                testimonialHTML += '</div>';
                testimonialHTML += '<div class="feedback-content">';
                testimonialHTML += '<h4>' + name + '</h4>';
                testimonialHTML += '<p>' + quote + '</p>';
                testimonialHTML += '</div>';
                testimonialHTML += '</div>';

                // Append testimonial HTML to feedback container
                document.querySelector('.feedback-container').innerHTML += testimonialHTML;
            }
        }
    };

    // Prepare the request
    xhr.open('GET', 'data/testimonials_data.xml', true);

    // Send the request
    xhr.send();
});
