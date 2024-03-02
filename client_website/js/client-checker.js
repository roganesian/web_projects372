$(document).ready(function() {
    // Retrieve the input element and button element using jQuery
    const inputField = $("#storeInput");
    const submitButton = $("#submitButton");
    const resultParagraph = $("#result");

    // Function to check if input field is empty
    function isInputEmpty() {
        return inputField.val().trim() === "";
    }

    // Function to prompt user for input if field is empty
    function promptForInput() {
        resultParagraph.text("Please enter a store name.").css("color", "red");
    }

    // Function to check if the entered store is partnered
    function checkPartnership() {
        const userInput = inputField.val().trim();

        // Retrieve the JSON data from the clients.json file
        $.getJSON("data/clients_data.json", function(data) {
            const clients = data.clients;

            // Check if the entered store is partnered
            const partneredStore = clients.find(client => client.name === userInput);

            if (partneredStore) {
                resultParagraph.text(`Yes, we are partnered with ${userInput}. ${partneredStore.short_description}`).css("color", "green");
            } else {
                resultParagraph.text(`No, we are not partnered with ${userInput}.`).css("color", "black");
            }
        });
    }

    // Event listener for the submit button click
    submitButton.on("click", function() {
        if (isInputEmpty()) {
            promptForInput();
        } else {
            checkPartnership();
        }
    });
});
