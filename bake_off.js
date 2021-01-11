const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  const ingredientsHave = bakeryA.concat(bakeryB);
  for (let recipe of recipes) {
    let ingredientsFound = 2;
    let ingredientsNeed = recipe.ingredients;
    if (ingredientsHave.includes(ingredientsNeed[0])) {
      ingredientsFound--;
    }
    if (ingredientsHave.includes(ingredientsNeed[1])) {
      ingredientsFound--;
    }
    if (ingredientsFound === 0) {
      return recipe.name;
    }
  }
};

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base']
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese']
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
  {
    name: 'Potato Ganache',
    ingredients: ['potatoes', 'chocolate']
  },
  {
    name: 'Sweet Fish',
    ingredients: ['anchovies', 'honey']
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ['dijon mustard', 'raisins']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));