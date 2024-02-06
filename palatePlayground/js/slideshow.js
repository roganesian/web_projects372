// Function to display slides in a slideshow automatically
function showSlides() {
  // Get all elements with the class "mySlides"
  var slides = document.getElementsByClassName("mySlides");

  /*
      TO-DO: Loop through all the slides and hide them (hint: change their display)

             Increment the slide index

             If the slide index exceeds the total number of slides, 
                reset the slide index to 1 

             Display the current slide (hint: change its display)

  */


  // Call this function recursively after 5000 milliseconds (5 seconds)
  setTimeout(showSlides, 5000); 
}



/*  
      TO-DO: create a variable to keep track of the slide index
                initialize it to 0

             call the function above

*/
