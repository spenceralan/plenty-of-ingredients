// *************Business Logic **********


class Recipe {
  constructor(title, image, link, ingredients, restrictions) {
    this.title = title;
    this.image = image;
    this.link = link;
    this.ingredients = ingredients;
    this.dietaryRestrictions = restrictions;
  }
}
class User {
  constructor() {
    this.ingredients = [];
    this.dietaryRestrictions = [];
    this.recipeMatches = [];
  }
}

class CookBook {
  constructor(){
    this.recipes = [];
  }

  addRecipe(recipe){
    this.recipes.push(recipe);
  }

//Loop for dietary restrictions which returns a boolean called by getRecipesByRestriction
  isAcceptableRecipe(recipe, userDietaryRestrictions){
    return userDietaryRestrictions.every(function(userRestriction) {
      return recipe.dietaryRestrictions.includes(userRestriction);
    });
  }

  //Push only recipes that meet dietary restrictions into acceptableRecipes array
  getRecipesByRestriction(userDietaryRestrictions){
    if (userDietaryRestrictions.length === 0) {
      return this.recipes;
    }
    let acceptableRecipes = [];
    this.recipes.forEach(function(recipe) {
      if (this.isAcceptableRecipe(recipe, userDietaryRestrictions)) {
        acceptableRecipes.push(recipe);
      }
    }, this); //Passes in parent object Cookbook into for each loop
    return acceptableRecipes;
  }

  //Creates matchedRecipes array of recipes that match user inputted ingredients
  getRecipesByIngredients(ingredients, recipes) {
    let matchedRecipes = [];
    for (let i = 0; i < recipes.length; i++) {
      let recipe = recipes[i];
      let recipeIngredients = recipes[i].ingredients;
      //Return all recipes that match ingredients
      ingredients.forEach(function(ingredient){
        //Checks if ingredient is included in recipe's ingredients and if ingredient is not already in the matchedRecipes array
        if (recipeIngredients.includes(ingredient) && !matchedRecipes.includes(recipe)){
          matchedRecipes.push(recipe);
        }
      });
    }
    //Creates an array for each recipe within the matchedRecipes array
    return matchedRecipes.map(function(matchedRecipe){
      return [matchedRecipe];
    });
  }

  //Takes matchedRecipes array and pushes only matched ingredients into each recipe array.  Then sort.
  getMatchedIngredients(ingredients, recipes) {
    let matchedRecipes = this.getRecipesByIngredients(ingredients, recipes);
    for(var i = 0; i < matchedRecipes.length; i++){
      ingredients.forEach(function(ingredient){
        if (matchedRecipes[i][0].ingredients.includes(ingredient)) {
          matchedRecipes[i].push(ingredient);
        }
      });
    };
    return matchedRecipes.sort(function(a, b){
      return b.length - a.length;
    });
  }

  //Returns final matched recipes according to user inputted ingredients and dietary restrictions
  getAllAcceptableRecipes(ingredients, userDietaryRestrictions) {
    return this.getMatchedIngredients(ingredients, this.getRecipesByRestriction(userDietaryRestrictions));
  }
} //Close cookbook class

// *************User Logic **********

$(function(){

  var displayResults = function(){
    newUser.recipeMatches = (masterCookBook.getAllAcceptableRecipes(newUser.ingredients, newUser.dietaryRestrictions));
    $("#recipe-results").empty();
    for(var i=0; i<newUser.recipeMatches.length; i++) {
      let recipeTitle = newUser.recipeMatches[i][0].title;
      let recipeLink = newUser.recipeMatches[i][0].link;
      let recipeImage = newUser.recipeMatches[i][0].image;
      let recipeRestrictions = newUser.recipeMatches[i][0].dietaryRestrictions;
      $("ul#recipe-results").append(`<a class="recipeTitle" href="${recipeLink}" target="_blank">${recipeTitle} <br> <img class="recipeImage" src=${recipeImage}></a><br>`);

      //to show dietary restriction icon for the recipe, if applicable
      if (recipeRestrictions.length > 0) {
        recipeRestrictions.forEach(function(restriction){
          if (restriction === "GF") {
            $("ul#recipe-results").append(`<img src="img/gluten-icon.png" class="dietIcons">`);
          }
          if (restriction === "DF") {
            $("ul#recipe-results").append(`<img src="img/dairy-icon.png" class="dietIcons">`);
          }
          if (restriction === "VEG") {
            $("ul#recipe-results").append(`<img src="img/veg-icon.jpg" class="dietIcons">`);
          }
        });
        $("ul#recipe-results").append("<br>" );
      }

      //loops through matched recipes and adds the included ingredients and recipe separator icon to the result; if there's no result, display an empty plate with message. The number of results is also added.
      $("ul#recipe-results").append("<li> Includes: </li>");
      for (var j=1; j<newUser.recipeMatches[i].length; j++){
        let matchedIngredients = newUser.recipeMatches[i][j];
        $("ul#recipe-results").append(`<li>&nbsp;&nbsp;${matchedIngredients}&nbsp;&nbsp;</li>`);
      }
      $("ul#recipe-results").append('<br><img src="img/separator.png"/><br>');
    }
    if(newUser.recipeMatches.length ===0){
      $("#recipe-results").append(`<h3>Aww. Shucks. You didn't match any results.</h3> <img id="empty-image" src="img/empty.jpg">`);
    }
    $("#number-of-results").text(newUser.recipeMatches.length);
  } //ends displayResults function

  var newUser = new User();

  //Collect user input ingredients and push to newUser
  $('input[name="ingredients"]').on('click', function () {
    $(".results-column").show();
    $(".feature-recipe").hide();
    if ($(this).is(':checked')) {
      newUser.ingredients.push($(this).val());
    } else {
        if ((index = newUser.ingredients.indexOf($(this).val())) !== -1) {
          newUser.ingredients.splice(index, 1);
        }
      }
    displayResults();
  });

  //For collecting user input dietary restrictions and push to newUser.
  //Needs matches function to be created
  $('input[name="Dietary-Restrictions"]').on('click', function () {
    $(".results-column").show();
    $(".feature-recipe").hide();
    if ($(this).is(':checked')) {
      newUser.dietaryRestrictions.push($(this).val());
    } else {
        if ((index = newUser.dietaryRestrictions.indexOf($(this).val())) !== -1) {
          newUser.dietaryRestrictions.splice(index, 1);
        }
      }
    displayResults();
  });

  $("#reset-button").click(function() {
    location.reload();
  });

});//ends doc ready
