import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel', 
      'This is simply a test', 
      'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe(
      'Big Fat Burger', 
      'This is simply another test', 
      'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
    ];

  getRecipes() {
      return this.recipes.slice(); 
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
}