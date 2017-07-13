import {Recipe} from "./recipe.model";


export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Test recipe 1', 'It is test description 1',
               'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg'),
    new Recipe('Test recipe 2', 'It is test description 2',
               'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
