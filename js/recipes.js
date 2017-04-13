// Recipes
let masterCookBook = new CookBook();

const chickenPotPie = new Recipe (
  "Chicken Pot Pie",
  "img/chickenPotPie.jpg",
  "http://www.tasteofhome.com/recipes/favorite-chicken-potpie",
  ["potato", "carrot", "onion", "peas", "corn", "chicken"],
  []
);

const roastChickenAspargus = new Recipe (
  "Roast Chicken With Rhubarb Butter And Asparagus",
  "img/roastChickenAsparagus.jpg",
  "http://www.bonappetit.com/recipe/roast-chicken-with-rhubarb-butter-and-asparagus",
  ["rhubarb", "chicken", "asparagus", "lemon"],
  ["GF"]
);

const beefStuffedEggplant = new Recipe (
  "Stuffed Baby Eggplant with Spiced Ground Beef, Bulgar, and Pine Nuts",
  "img/beefStuffedEggplant.jpg",
  "https://www.themediterraneandish.com/stuffed-eggplant-with-spiced-ground-beef-and-bulgur/",
  ["eggplant", "onion", "garlic", "beef", "bulgar", "lemon"],
  []
);

const tofuAsparagusQuiche = new Recipe (
  "Tofu Quiche with Leeks and Asparagus",
  "img/tofuAsparagusQuiche.jpg",
  "http://www.recipelink.com/cookbooks/2005/1580086187_2.html",
  ["tofu", "asparagus", "garlic", "leek"],
  ["VEG", "DF"]
);

const easyVeganFriedRice = new Recipe (
  "Easy Vegan Fried Rice",
  "img/easyVeganFriedRice.jpg",
  "http://minimalistbaker.com/easy-vegan-fried-rice/",
  ["tofu", "rice", "garlic", "green onion", "peas", "carrots"],
  ["VEG", "DF", "GF"]
);

const onePotPasta = new Recipe (
  "Sanity-Saving One Pot Pasta",
  "img/onePotPasta.jpg",
  "https://www.mynewroots.org/site/2016/05/sanity-saving-one-pot-pasta/",
  ["pasta", "asparagus", "peas", "lemon"],
  ["VEG", "DF"]
);

const beefStew = new Recipe (
  "Beef Stew with Carrots and Potatoes",
  "img/beefStew.jpg",
  "http://www.onceuponachef.com/recipes/beef-stew-with-carrots-potatoes.html",
  ["beef", "onion", "garlic", "carrot", "potato"],
  ["DF"]
);

const blackBeanEnchilada = new Recipe (
  "Veggie Black Bean Enchiladas",
  "img/blackBeanEnchilada.jpg",
  "http://cookieandkate.com/2016/vegetarian-enchiladas-recipe/",
  ["onion", "pepper", "broccoli", "spinach", "beans"],
  ["VEG"]
);

const sobaNoodleChicken = new Recipe (
  "Soba Noodle Chicken Stir Fry",
  "img/sobaNoodleChicken.jpg",
  "http://www.cookforyourlife.org/recipes/soba-noodle-chicken-stir-fry/",
  ["pasta", "chicken", "carrot", "onion", "pepper", "cabbage"],
  ["DF"]
);

const beefAndNoodles = new Recipe (
  "Beef and Noodles",
  "img/beefandnoodles.jpg",
  "http://www.gonnawantseconds.com/2017/03/beef-and-noodles/",
  ["beef", "onion", "garlic", "pasta"],
  ["DF"]
);

const tofuWildRiceSoup = new Recipe (
  "Rustic Tofu Wild Rice Soup",
  "img/tofu-wild-rice-soup.jpg",
  "http://heartbeetkitchen.com/2017/recipes/rustic-tofu-wild-rice-soup/",
  ["tofu", "celery", "onion", "carrot", "mushroom", "rice"],
  ["VEG", "GF"]
);

const tofuAsparagus = new Recipe (
  "Chili-Glazed tofu over Asparagus and Rice",
  "img/tofu-asparagus.jpg",
  "http://www.myrecipes.com/recipe/chili-glazed-tofu-over-asparagus-rice",
  ["tofu", "asparagus", "onion", "carrot", "rice"],
  ["VEG", "DF"]
);

const tikkaMasala = new Recipe (
  "Chicken Tikka Masala",
  "img/tikka-masala.jpg",
  "http://www.savorytooth.com/instant-pot-chicken-tikka-masala/",
  ["chicken", "rice", "garlic"],
  ["GF"]
);

const mapoTofu = new Recipe (
  "Mapo Tofu",
  "img/Mapo-tofu.jpg",
  "https://redhousespice.com/mapo-tofu-authentic-way/",
  ["beef", "tofu", "rice", "onion"],
  ["DF"]
);

const sheetChicken = new Recipe (
  "Lemony Herb Sheet Pan Chicken & Vegetables",
  "img/sheet-pan.jpg",
  "http://delightfulmomfood.com/sheet-pan-chicken-vegetables/",
  ["chicken", "carrot", "broccoli", "potato", "cauliflower", "garlic"],
  ["DF", "GF"]
);

const beefAndBroccoli = new Recipe (
  "Beef and Broccoli",
  "img/beef-broccoli.jpg",
  "http://www.food.com/recipe/the-best-easy-beef-and-broccoli-stir-fry-99476",
  ["beef", "onion", "rice", "broccoli"],
  ["DF", "GF"]
);

const macAndCheese = new Recipe (
  "Mac and Cheese From Scratch",
  "img/mac.jpg",
  "http://www.myrecipes.com/recipe/classic-baked-macaroni-cheese",
  ["pasta"],
  ["VEG"]
);

const loadedPotato = new Recipe (
  "Loaded Chili-Stuffed Baked Potatoes",
  "img/Loaded-Potato.jpg",
  "http://wickedhealthyfood.com/2017/02/07/loaded-chili-stuffed-baked-potatoes/",
  ["potato", "onion", "cabbage", "kale"],
  ["VEG", "GF"]
);

const fishTacos = new Recipe (
  "Fish Tacos with Mango Salsa and Avocado Crema",
  "img/fishTacos.jpg",
  "http://www.annies-eats.com/2015/04/24/fish-tacos-with-mango-salsa-and-avocado-cream-sauce/",
  ["pepper", "onion", "fish", "avocado", "garlic"],
  ["GF"]
);

const roastedSalmon = new Recipe (
  "Salmon Roasted in Butter",
  "img/roastedSalmon.jpg",
  "https://cooking.nytimes.com/recipes/5703-salmon-roasted-in-butter",
  ["fish"],
  ["GF","DF"]
);

const tofuSaladRolls = new Recipe (
  "Vietnamese Spring Rolls with Crispy Tofu",
  "img/tofuSaladRolls.jpg",
  "http://minimalistbaker.com/vietnamese-spring-rolls-with-crispy-tofu/",
  ["tofu","carrot","pepper","cucumber","pasta","garlic"],
  ["GF","DF","VEG"]
);

const quinoaVeggieBurgers = new Recipe (
  "Quinoa Veggie Burgers",
  "img/quinoaVeggieBurgers.jpg",
  "https://www.acouplecooks.com/quinoa-veggie-burgers-eating-real-food/",
  ["quinoa","carrot","onion","garlic","avocado","lettuce"],
  ["VEG"]
);

const greekQuinoaSalad = new Recipe (
  "Loaded Greek Quinoa Salad",
  "img/greekQuinoaSalad.jpg",
  "https://www.halfbakedharvest.com/loaded-greek-quinoa-salad/",
  ["quinoa","olives","lemon","pepper","cucumber","zucchini", "tomato", "artichoke", "lettuce", "radish", "avocado", "beans"],
  ["VEG"]
);

const sweetPotatoBurgers = new Recipe (
  "Sweet Potato Black Bean Burgers",
  "img/sweetPotatoBurgers.jpg",
  "http://minimalistbaker.com/sweet-potato-black-bean-burger/",
  ["potato","beans","rice","onion","avocado", "lettuce"],
  ["VEG","GF","DF"]
);

const bouillabaisse = new Recipe (
  "Bouillabaisse",
  "img/bouillabaisse.jpg",
  "http://steamykitchen.com/15777-bouillabaisse-recipe.html",
  ["leek","fish","garlic","onion","tomato", "fennel"],
  ["GF","DF"]
);

const lentilSalad = new Recipe (
  "The Best Lentil Salad Ever",
  "img/lentilSalad.jpg",
  "https://www.mynewroots.org/site/2010/06/the-best-lentil-salad-ever-2/",
  ["lentils","onion","lettuce","onion"],
  ["VEG","GF","DF"]
);

const chickenChili = new Recipe (
  "White Chicken Chili",
  "img/chickenChili.jpg",
  "http://thepioneerwoman.com/cooking/simple-hearty-white-chili/",
  ["chicken","onion","beans","avocado"],
  ["GF"]
);

const kalePizza = new Recipe (
  "Emerald Kale Pesto Pizza",
  "img/kalePizza.jpg",
  "http://userealbutter.com/2017/03/26/emerald-kale-pesto-pizza-recipe/",
  ["kale","broccoli"],
  ["VEG"]
);

const kaleSalad = new Recipe (
  "Sweet Potato, Quinoa and Kale Salad",
  "img/kaleSalad.jpg",
  "http://keyingredients.me/2017/03/sweet-potato-quinoa-kale-salad-gluten-free",
  ["kale","potato", "quinoa", "onion"],
  ["VEG", "GF", "DF"]
);

const hazelnutSalmon = new Recipe (
  "Hazelnut Crusted Salmon with Butternut Noodles and Maple Tahini Sauce",
  "img/hazelnutSalmon.jpg",
  "https://kaleconfectionary.wordpress.com/2017/04/09/hazelnut-crusted-salmon-with-butternut-noodles-and-maple-tahini-sauce/",
  ["kale","fish"],
  ["DF"]
);

const zucchiniNoodles = new Recipe (
  "Sweet Pea and Pearl Onion Pesto Smothered Zucchini Noodles",
  "img/zucchiniNoodles.jpg",
  "https://www.mynewroots.org/site/2014/02/sweet-pea-pearl-onion-pesto-smothered-zucchini-noodles/",
  ["zucchini","onion","peas","lemon"],
  ["DF","VEG","GF"]
);

const spinachQuiche = new Recipe (
  "Spinach and Gruyere Quiche",
  "img/spinachQuiche.jpg",
  "http://www.onceuponachef.com/recipes/spinach-quiche.html",
  ["spinach","eggs"],
  ["VEG"]
);

const beansAndEggs = new Recipe (
  "Simple Black Beans and Eggs",
  "img/beansAndEggs.jpg",
  "https://www.acouplecooks.com/simple-black-beans-and-eggs/",
  ["beans","eggs", "tomato", "avocado"],
  ["VEG", "GF"]
);

const padThai = new Recipe (
  "Authentic Pad Thai",
  "img/padThai.jpg",
  "http://inquiringchef.com/authentic-pad-thai/",
  ["tofu","eggs", "pasta", "fish"],
  ["DF"]
);

const veganPadThai = new Recipe (
  "Vegan Pad Thai",
  "img/veganPadThai.jpg",
  "https://divinespicebox.com/2017/04/03/vegan-peanut-sauce-pad-thai-with-spiralized-carrots/",
  ["tofu","carrot", "pasta", "mushroom"],
  ["DF"]
);

//Array of all recipes
let allRecipes = [chickenPotPie, roastChickenAspargus, beefStuffedEggplant, tofuAsparagusQuiche, easyVeganFriedRice, onePotPasta, beefStew, blackBeanEnchilada, sobaNoodleChicken, beefAndNoodles, tofuWildRiceSoup, tofuAsparagus, tikkaMasala, mapoTofu, sheetChicken, beefAndBroccoli, macAndCheese, loadedPotato, fishTacos, roastedSalmon, tofuSaladRolls, quinoaVeggieBurgers, greekQuinoaSalad, sweetPotatoBurgers, bouillabaisse, lentilSalad, chickenChili, kalePizza, kaleSalad, hazelnutSalmon, zucchiniNoodles, spinachQuiche, beansAndEggs, padThai, veganPadThai];

allRecipes.forEach(function(recipe) {
  masterCookBook.addRecipe(recipe);
});
