// create a new JavaScript file called book-html.js that includes the following:
// Create a function that selects all image elements in the page and changes each of their opacity to 0.5.
function changeImageOpacity() {
    const images = document.querySelectorAll('img');
    images.forEach((image) => {
        image.style.opacity = 0.5;
    });
}

// Create a function that triggers your Ajax request to load the data from a given HTML file. Your function should do at least the following:
function loadHTMLFile(filePath) {
    // Receive a file path of an HTML file to load as an argument.
    var xhr = new XMLHttpRequest();
    
    // When the response has loaded, check if the server status was okay. If so, update the div with the id called “details” to contain the new HTML that is retrieved from the XMLHttpRequest object's responseText property.
    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById('details').innerHTML = xhr.responseText;
        }
    };
    
    // Prepare the request. Make sure to use HTTP GET to send the request, the path to your HTML file, and true to specify that the request is asynchronous.
    xhr.open('GET', filePath, true);
    
    // Send the request.
    xhr.send(null);
}

// Select the “Don Quixote” image and assign an event listener to it. When this image is clicked, the following should happen:
const donQuixoteImage = document.getElementById('don-quixote-img');
donQuixoteImage.addEventListener('click', function() {
    // Call your function that triggers your Ajax request to load the data about this book from the HTML file you created in the previous part.
    loadHTMLFile('data/cervantes-data.html');
    
    // Call your function to change the opacities of all images to 0.5.
    changeImageOpacity();
    
    // Select the “Don Quixote” image and change its opacity to 1.
    donQuixoteImage.style.opacity = 1;
    
}, false);

// Select the “A Tale of Two Cities” image and assign an event listener to it. When this image is clicked, the following should happen:
const taleOfTwoCitiesImage = document.getElementById('two-cities-img');
taleOfTwoCitiesImage.addEventListener('click', function() {
    console.log("A Tale of Two Cities image clicked")
    // Call your function that triggers your Ajax request to load the data about this book from the HTML file you created in the previous part.
    loadHTMLFile('../data/dickens-data.html');
    
    // Call your function to change the opacities of all images to 0.5.
    changeImageOpacity();
    
    // Select the “A Tale of Two Cities” image and change its opacity to 1.
    taleOfTwoCitiesImage.style.opacity = 1;
}, false);

// Select the “The Lord of the Rings” image and assign an event listener to it. When this image is clicked, the following should happen:
const lordOfTheRingsImage = document.getElementById('lotr-img');
lordOfTheRingsImage.addEventListener('click', function() {
    console.log("The Lord of the Rings image clicked")
    // Call your function that triggers your Ajax request to load the data about this book from the HTML file you created in the previous part.
    loadHTMLFile('../data/tolkien-data.html');
    
    // Call your function to change the opacities of all images to 0.5.
    changeImageOpacity();
    
    // Select the “The Lord of the Rings” image and change its opacity to 1.
    lordOfTheRingsImage.style.opacity = 1;
}, false);
