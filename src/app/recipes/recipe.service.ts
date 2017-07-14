import {EventEmitter} from "@angular/core";
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";


export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Test recipe 1',
               'It is test description 1',
               'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg',
               [
                 new Ingredient('Butter', 0.5),
                 new Ingredient('Raspberry', 0.5)
               ]),
    new Recipe('Test recipe 2', 'It is test description 2',
               'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg',
               [
                 new Ingredient('Apples', 2),
                 new Ingredient('Butter', 0.5)
               ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
