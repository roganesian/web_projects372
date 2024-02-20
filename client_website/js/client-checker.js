$(document).ready(function() {
    // Define an object with information about partnered stores
    const partneredStoresInfo = [
        { name: "BJs", details: "BJ's Wholesale Club is a leading warehouse club chain offering a wide range of products at competitive prices." },
        { name: "Costco Wholesale", details: "Costco Wholesale is renowned for its high-quality products and commitment to customer satisfaction." },
        { name: "Daves Marketplace", details: "Dave's Marketplace is a local grocery chain known for its dedication to supporting local businesses and offering fresh, locally sourced products." },
        { name: "Stop and Shop", details: "Stop & Shop is a trusted supermarket chain committed to providing customers with a wide selection of high-quality products and exceptional service." }
    ];

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
        resultParagraph.text("Please enter a store name.").addClass("error");
    }

    // Function to check if the entered store is partnered
    function checkPartnership() {
        const userInput = inputField.val().trim();

        // Check if the entered store is partnered
        const partneredStore = partneredStoresInfo.find(storeInfo => storeInfo.name === userInput);

        if (partneredStore) {
            resultParagraph.text(`Yes, we are partnered with ${userInput}. ${partneredStore.details}`).removeClass("error");
        } else {
            resultParagraph.text(`No, we are not partnered with ${userInput}.`).removeClass("error");
        }
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
