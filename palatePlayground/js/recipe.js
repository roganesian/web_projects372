/*
	TO-DO: Create an object using constructor notation 
		   Template should include parameters to set values of properties and getStars method:
		   	 - Parameters (card number, image name, recipe name, recipe time)
		     - getStars method gets # of stars to create and uses following code to create star rating: 

					var star = '<span style="color:darkgoldenrod;">&#9733;</span>';
					var rating = star.repeat(numStars);
					return rating;		     	

*/

function Recipe(cardNum, imageName, recipeName, recipeTime) {
	this.cardNum = cardNum;
	this.imageName = imageName;
	this.recipeName = recipeName;
	this.recipeTime = recipeTime;

	this.getStars = function(numStars) {
		var star = '<span style="color:darkgoldenrod;">&#9733;</span>';
		var rating = star.repeat(numStars);
		return rating;
	};
}

/*
	Function to display a recipe card


	TO-DO: Replace EACH ? with the appropriate parameter name in this function

*/
function displayRecipeCard(food) {
	// Get the card element using its cardNum
	var card = document.getElementsByClassName('card')[food.cardNum];


	card.innerHTML += '<img src="../palatePlayground/images/' + food.imageName + '">';
	card.innerHTML += '<h3>' + food.recipeName + '</h3><hr />';
	card.innerHTML += '<p>' + food.recipeTime + ' mins &emsp;&emsp;&emsp;' + food.getStars(5) + '</p>';
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

var frenchToast = new Recipe(0, 'frenchToast.jpeg', 'French Toast', 20);
var omelette = new Recipe(1, 'omelette.jpeg', 'Omelette', 15);
var pancake = new Recipe(2, 'pancake.jpeg', 'Pancake', 30);
var pasta = new Recipe(3, 'pasta.jpeg', 'Pasta', 45);
var salad = new Recipe(4, 'salad.jpeg', 'Salad', 10);
var sandwich = new Recipe(5, 'sandwich.jpeg', 'Sandwich', 5);
var burger = new Recipe(6, 'burger.jpeg', 'Burger', 25);
var steak = new Recipe(7, 'steak.webp', 'Steak', 40);
var taco = new Recipe(8, 'tacos.jpeg', 'Taco', 35);

/*
	TO-DO: Access each property and method for ALL the recipe objects you created
		   and use them as arguments when calling the displayRecipeCard function.


*/

displayRecipeCard(frenchToast);
displayRecipeCard(omelette);
displayRecipeCard(pancake);
displayRecipeCard(pasta);
displayRecipeCard(salad);
displayRecipeCard(sandwich);
displayRecipeCard(burger);
displayRecipeCard(steak);
displayRecipeCard(taco);
