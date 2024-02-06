/*
	TO-DO: Create an object using constructor notation 
		   Template should include parameters to set values of properties and getStars method:
		   	 - Parameters (card number, image name, recipe name, recipe time)
		     - getStars method gets # of stars to create and uses following code to create star rating: 

					var star = '<span style="color:darkgoldenrod;">&#9733;</span>';
					var rating = star.repeat(numStars);
					return rating;		     	

*/


/*
	Function to display a recipe card


	TO-DO: Replace EACH ? with the appropriate parameter name in this function

*/
function displayRecipeCard(?, ?, ?, ?, ?) {
	// Get the card element using its cardNum
	var card = document.getElementsByClassName('card')[?];


	card.innerHTML += '<img src="../palatePlayground/images/' + ? + '">';
	card.innerHTML += '<h3>' + ? + '</h3><hr />';
	card.innerHTML += '<p>' + ? + ' mins &emsp;&emsp;&emsp;' + ? + '</p>';
};

/*
	TO-DO: Create the following instances of the recipe object:
			- French Toast
			- Omelette
			- Pancake
			- Pasta
			- Salad
			- Sandwich
			- Burger
			- Steak
			- Taco

			You can make up the names and times for each recipe BUT make sure to use the 
			images given to you in the images folder!
*/


/*
	TO-DO: Access each property and method for ALL the recipe objects you created
		   and use them as arguments when calling the displayRecipeCard function.


*/

