// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Create XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // When response has loaded
    xhr.onload = function() {
        // Check if the server status was ok
        if (xhr.status == 200) {
            // Update the content section with the loaded HTML
            document.getElementById('loaded-content').innerHTML = xhr.responseText;
        }
    };

    // Prepare the request
    xhr.open('GET', 'data/nutrition_data.html', true);

    // Send the request
    xhr.send();
});
