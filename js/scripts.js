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
  "..img/chickenPotPie.jpg",
  "http://www.tasteofhome.com/recipes/favorite-chicken-potpie",
  ["potato", "carrot", "onion", "peas", "corn", "chicken"],
  []
);

const roastChickenAspargus = new Recipe (
  "Roast Chicken With Rhubarb Butter And Asparagus",
  "..img/roastChickenAspargus.jpg",
  "http://www.bonappetit.com/recipe/roast-chicken-with-rhubarb-butter-and-asparagus",
  ["rhubarb", "chicken", "asparagus", "lemon"],
  ["GF"]
);

const beefStuffedEggplant = new Recipe (
  "Stuffed Baby Eggplant with Spiced Ground Beef, Bulgar, and Pine Nuts",
  "..img/beefStuffedEggplant.jpg",
  "https://www.themediterraneandish.com/stuffed-eggplant-with-spiced-ground-beef-and-bulgur/",
  ["eggplant", "onion", "garlic", "beef", "bulgar", "lemon"],
  []
);

const tofuAsparagusQuiche = new Recipe (
  "Tofu Quiche with Leeks and Asparagus",
  "..img/tofuAsparagusQuiche.jpg",
  "http://www.recipelink.com/cookbooks/2005/1580086187_2.html",
  ["tofu", "asparagus", "garlic", "leek"],
  ["VEG", "DF"]
);

const easyVeganFriedRice = new Recipe (
  "Easy Vegan Fried Rice",
  "..img/easyVeganFriedRice.jpg",
  "http://minimalistbaker.com/easy-vegan-fried-rice/",
  ["tofu", "rice", "garlic", "green onion", "peas", "carrots"],
  ["VEG", "DF", "GF"]
);

const onePotPasta = new Recipe (
  "Sanity-Saving One Pot Pasta",
  "..img/onePotPasta.jpg",
  "https://www.mynewroots.org/site/2016/05/sanity-saving-one-pot-pasta/",
  ["pasta", "asparagus", "peas", "lemon"],
  ["VEG", "DF"]
);

const beefStew = new Recipe (
  "Beef Stew with Carrots and Potatoes",
  "..img/beefStew.jpg",
  "http://www.onceuponachef.com/recipes/beef-stew-with-carrots-potatoes.html",
  ["beef", "onion", "garlic", "carrot", "potato"],
  ["DF"]
);

const blackBeanEnchilada = new Recipe (
  "Veggie Black Bean Enchiladas",
  "..img/blackBeanEnchilada.jpg",
  "http://cookieandkate.com/2016/vegetarian-enchiladas-recipe/",
  ["onion", "pepper", "broccoli", "spinach"],
  ["VEG"]
);

const sobaNoodleChicken = new Recipe (
  "Soba Noodle Chicken Stir Fry",
  "..img/sobaNoodleChicken.jpg",
  "http://www.cookforyourlife.org/recipes/soba-noodle-chicken-stir-fry/",
  ["pasta", "chicken", "carrot", "onion", "pepper", "cabbage"],
  ["DF"]
);
