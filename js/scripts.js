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

const beefAndNoodles = new Recipe (
  "Beef and Noodles",
  "..img/beefandnoodles.jpg",
  "http://www.gonnawantseconds.com/2017/03/beef-and-noodles/",
  ["beef", "onion", "garlic", "pasta"],
  ["DF"]
);

const tofuWildRiceSoup = new Recipe (
  "Rustic Tofu Wild Rice Soup",
  "..img/tofu-wild-rice-soup.jpg",
  "http://heartbeetkitchen.com/2017/recipes/rustic-tofu-wild-rice-soup/",
  ["tofu", "celery", "onion", "carrot", "mushroom", "rice"],
  ["VEG", "GF"]
);

const tofuAsparagus = new Recipe (
  "Chili-Glazed tofu over Asparagus and Rice",
  "..img/tofu-asparagus.jpg",
  "http://www.myrecipes.com/recipe/chili-glazed-tofu-over-asparagus-rice",
  ["tofu", "asparagus", "onion", "carrot", "rice"],
  ["VEG", "DF"]
);

const tikkaMasala = new Recipe (
  "Chicken Tikka Masala",
  "..img/tikka-masala.jpg",
  "http://www.savorytooth.com/instant-pot-chicken-tikka-masala/",
  ["chicken", "rice" "garlic"],
  ["GF"]
);

const mapoTofu = new Recipe (
  "Mapo Tofu",
  "..img/Mapo-tofu.jpg",
  "https://redhousespice.com/mapo-tofu-authentic-way/",
  ["beef", "tofu", "rice" "onion"],
  ["DF"]
);

const sheetChicken = new Recipe (
  "Lemony Herb Sheet Pan Chicken & Vegetables",
  "..img/sheet-pan.jpg",
  "http://delightfulmomfood.com/sheet-pan-chicken-vegetables/",
  ["chicken", "carrot", "broccoli" "potato", "cauliflower", "garlic"],
  ["DF", "GF"]
);

const beefAndBroccoli = new Recipe (
  "Beef and Broccoli",
  "..img/beef-broccoli.jpg",
  "http://www.food.com/recipe/the-best-easy-beef-and-broccoli-stir-fry-99476",
  ["beef", "onion", "rice", "broccoli"],
  ["DF", "GF"]
);

const macAndCheese = new Recipe (
  "Mac and Cheese From Scratch",
  "..img/mac.jpg",
  "http://www.myrecipes.com/recipe/classic-baked-macaroni-cheese",
  ["pasta"],
  ["VEG"]
);

const loadedPotato = new Recipe (
  "Loaded Chili-Stuffed Baked Potatoes",
  "..img/Loaded-Potato.jpg",
  "http://wickedhealthyfood.com/2017/02/07/loaded-chili-stuffed-baked-potatoes/",
  ["potato", "onion", "cabbage", "kale"],
  ["VEG", "GF"]
);
