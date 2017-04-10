function Recipe (title, image, link, ingredients, restrictions) {
  this.title = title;
  this.image = image;
  this.link = link;
  this.ingredients = ingredients;
  this.dietaryRestrictions = restrictions; // GF, DF, VEG
}

Recipe.prototype.matches = function () {

}

const chickenPotPie = new Recipe (
  "Chicken Pot Pie",
  "..img/chickenpotpie.jpg",
  "http://www.tasteofhome.com/recipes/favorite-chicken-potpie",
  ["potatoes", "carrots", "onion", "peas", "corn", "chicken"],
  []
);
