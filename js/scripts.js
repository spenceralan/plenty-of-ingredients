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

  isAcceptableRecipe(recipe, userDietaryRestrictions){
    return userDietaryRestrictions.every(function(userRestriction) {
      return recipe.dietaryRestrictions.includes(userRestriction);
    });
  }

  getRecipesByRestriction(userDietaryRestrictions){
    if (userDietaryRestrictions.length === 0) {
      return this.recipes;
    }
    let acceptableRecipes = [];
    this.recipes.forEach(function(recipe) {
      if (this.isAcceptableRecipe(recipe, userDietaryRestrictions)) {
        acceptableRecipes.push(recipe);
      }
    }, this);
    return acceptableRecipes;
  }

  matches(ingredients, recipes) {
    let matchedRecipes = [];
    for (let i = 0; i < recipes.length; i++) {
      let recipe = recipes[i];
      let recipeIngredients = recipes[i].ingredients;
      //Return all recipes that match ingredients
      ingredients.forEach(function(ingredient){
        if (recipeIngredients.includes(ingredient) && !matchedRecipes.includes(recipe)){
          matchedRecipes.push(recipe);
        }
      });
    }
    return matchedRecipes.map(function(matchedRecipe){
      return [matchedRecipe];
    });
  }

  getRecipesByIngredient(ingredients, recipes) {
    let matchedRecipes = this.matches(ingredients, recipes);
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

  getAllAcceptableRecipes(ingredients, userDietaryRestrictions) {
    return this.getRecipesByIngredient(ingredients, this.getRecipesByRestriction(userDietaryRestrictions));
  }
} //Close cookbook class

// *************User Logic **********

$(function(){
  var newUser = new User();

  var getIt = function(){
    newUser.recipeMatches = (masterCookBook.getAllAcceptableRecipes(newUser.ingredients, newUser.dietaryRestrictions));
    $("#recipe-results").empty();
    for(var i=0; i<newUser.recipeMatches.length; i++) {
      let recipeTitle = newUser.recipeMatches[i][0].title;
      let recipeLink = newUser.recipeMatches[i][0].link;
      let recipeImage = newUser.recipeMatches[i][0].image;
      let recipeRestrictions = newUser.recipeMatches[i][0].dietaryRestrictions;
      $("ul#recipe-results").append(`<a class="recipeTitle" href="${recipeLink}" target="_blank">${recipeTitle} <br> <img class="recipeImage" src=${recipeImage}></a><br>`);

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
  }

  //Collect user input ingredients and push to newUser
  $('input[name="ingredients"]').on('click', function () {
    $(".results-column").show();
    $(".feature-recipe").hide();
    if ($(this).is(':checked')) {
      newUser.ingredients.push($(this).val());
    } else {
      if ((index =  newUser.ingredients.indexOf($(this).val())) !== -1) {
        newUser.ingredients.splice(index, 1);
      }
    }
    getIt();
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
    getIt();
  });
  $("#reset-button").click(function() {
    location.reload();
  });


  //Jumbotron parallax
  var jumboHeight = $('.jumbotron').outerHeight();
  function parallax(){
      var scrolled = $(window).scrollTop();
      $('.jumbotron').css('height', (jumboHeight-scrolled) + 'px');
  }

  $(window).scroll(function(e){
      parallax();
  });
});//ends doc ready
