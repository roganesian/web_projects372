// Function to make AJAX request and update content
function loadClients() {
    // Create XMLHttpRequest object
    var xhr = new XMLHttpRequest();
    
    // When ready state changes
    xhr.onreadystatechange = function() {
        // Check if request is complete and successful
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            // Parse JSON response
            var response = JSON.parse(xhr.responseText);
            
            // Build up HTML string with new content
            var clientDetails = '';
            response.clients.forEach(function(client) {
                clientDetails += '<div class="client">';
                clientDetails += '<h3>' + client.name + '</h3>';
                clientDetails += '<p>' + client.description + '</p>';
                clientDetails += '</div>';
            });
            
            // Update the page with the new content
            document.getElementById('client-details').innerHTML = clientDetails;
        }
    };
    
    // Prepare the request
    xhr.open('GET', 'data/clients_data.json', true);
    
    // Send the request
    xhr.send();
}

// Call the loadClients function when the page loads
window.onload = loadClients;
