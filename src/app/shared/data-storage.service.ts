import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";

import {RecipeService} from "../recipes/recipe.service";
import {Recipe} from "../recipes/recipe.model";


@Injectable()
export class DataStorageService {
  constructor(private http: Http,
              private recipeService: RecipeService) {}

  storeRecipes() {
    return this.http.post('post-url', this.recipeService.getRecipes());
  }

  getRecipes() {
    return this.http.get('get-url')
      .map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }

}