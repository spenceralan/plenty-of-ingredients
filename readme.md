# Plenty of Ingredients - Week 5 Group Project - Epicodus

This web app will allow a user to select from a predetermined list of ingredients they might have on hand to return a list of recipes that include those ingredients. This app helps users think of recipes they may not know they could easily make with what is already in their fridge or pantry. This app will reduce food waste and helps the user to save money by limiting the amount of ingredients they need to purchase. This makes the world a better place.

This webpage was built using HTML, CSS, Bootstrap, JavaScript, and JQuery.

## Getting Started

There are at least two ways of accessing the website. First and easiest is to follow the link https://spenceralan.github.io/plenty-of-ingredients/. Second is to clone this repository onto your machine and open the index.html file in your web browser.

### Prerequisites

Web browser with ES6 compatibility

Examples: Chrome, Safari

### Installing

Installation is quick and easy! Either open this link https://spenceralan.github.io/plenty-of-ingredients/ to see the webpage in action or clone this repository to your machine and open the index.html file!

## Built With

* JavaScript
* JQuery https://jquery.com/
* HTML
* CSS
* Bootstrap https://getbootstrap.com/

## Specifications

| behavior |  input   |  output  |
|----------|:--------:|:--------:|
| Create object for each recipe | Chicken Pot Pie, Image, Link, [Ingredients], Dietary Restrictions | chicken_pot_pie {title: "Chicken Pot Pie", image: image, link: "http...", ingredients: [chicken, carrots, peas,...], dietaryRestriction: "None"}; |
| Create object for user to store ingredients | new User clicks chicken, carrots, and peas | user {ingredients: [chicken, carrots, peas]}  |
| Build recipes object | Constructor takes an array of ingredients | matches method returns recipes that match the ingredients from the input array |
| Create new recipes object that takes the ingredients from the user object and returns matching recipes | [chicken, carrots, peas,...] | recipes: [chicken_pot_pie, chicken_cordon_bleu, chicken_parmesan]} |
| User clicks on a single checkbox ingredient | chicken | user {ingredients: [chicken]} |
| Pass user ingredients to matches recipe method | recipes.matches([chicken]) | [chicken_pot_pie, chicken_cordon_bleu, chicken_parmesan] |
| Display in right column matching recipes with link, image, and matching ingredients | [chicken_pot_pie, chicken_cordon_bleu, chicken_parmesan] | Chicken Pot Pie... Chicken Cordon Bleu... Chicken Parmesan... |
| User clicks on second checkbox ingredient | recipes.matches([chicken, peas]) | Chicken Pot Pie... Creamy Chicken and Peas... |


## Authors

* **Spencer A Ruiz**
* **Asia Kane**
* **Jennifer Kinsey**
* **Sara Schultz**

## License

Copyright © 2017 Spencer A Ruiz
