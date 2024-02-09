// Define an object with information about partnered stores
const partneredStoresInfo = [
    { name: "BJs", details: "BJ's Wholesale Club is a leading warehouse club chain offering a wide range of products at competitive prices." },
    { name: "Costco Wholesale", details: "Costco Wholesale is renowned for its high-quality products and commitment to customer satisfaction." },
    { name: "Daves Marketplace", details: "Dave's Marketplace is a local grocery chain known for its dedication to supporting local businesses and offering fresh, locally sourced products." },
    { name: "Stop and Shop", details: "Stop & Shop is a trusted supermarket chain committed to providing customers with a wide selection of high-quality products and exceptional service." }
];

// Retrieve the input element and button element
const inputField = document.getElementById("storeInput");
const submitButton = document.getElementById("submitButton");
const resultParagraph = document.getElementById("result");

// Function to check if input field is empty
function isInputEmpty() {
    return inputField.value.trim() === "";
}

// Function to prompt user for input if field is empty
function promptForInput() {
    resultParagraph.textContent = "Please enter a store name.";
    resultParagraph.classList.add("error"); // Add the 'error' class
}

// Function to check if the entered store is partnered
function checkPartnership() {
    // Retrieve the user input
    const userInput = inputField.value.trim();

    // Loop through partnered stores info to check if the entered store is partnered
    let isPartnered = false;
    for (let storeInfo of partneredStoresInfo) {
        if (storeInfo.name === userInput) {
            resultParagraph.textContent = `Yes, we are partnered with ${userInput}. ${storeInfo.details}`;
            resultParagraph.removeAttribute("class"); // Remove the 'error' class
            isPartnered = true;
            break;
        }
    }

    if (!isPartnered) {
        resultParagraph.textContent = `No, we are not partnered with ${userInput}.`;
        resultParagraph.removeAttribute("class"); // Remove the 'error' class
    }
}

// Event listener for the submit button click
submitButton.addEventListener("click", function() {
    if (isInputEmpty()) {
        promptForInput();
    } else {
        checkPartnership();
    }
});
