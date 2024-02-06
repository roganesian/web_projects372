// Function to display slides in a slideshow automatically
function showSlides() {
   // Get all elements with the class "mySlides"
   var slides = document.getElementsByClassName("mySlides");

   // Loop through all the slides and hide them
   for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
   }

   // Increment the slide index
   slideIndex++;

   // If the slide index exceeds the total number of slides, reset the slide index to 1
   if (slideIndex > slides.length) {
      slideIndex = 1;
   }

   // Display the current slide
   slides[slideIndex - 1].style.display = "block";

   // Call this function recursively after 5000 milliseconds (5 seconds)
   setTimeout(showSlides, 5000); 
}

// Create a variable to keep track of the slide index and initialize it to 0
var slideIndex = 0;

// Call the function to start the slideshow
showSlides();
