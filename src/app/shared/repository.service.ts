import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Add/Operator/map';
import { RecipeService } from './../recipes/recipe.service';
import { Recipe } from './../recipes/recipe.model';

@Injectable()
export class RepositoryService {

    constructor(
        private http: Http,
        private recipeService: RecipeService
    ) { }

    storeRecipes() {
        return this.http.put('https://ngrecipe-e4e3a.firebaseio.com/recpies.json', this.recipeService.getRecipes());
    }

    getRecipes() {
        this.http.get('https://ngrecipe-e4e3a.firebaseio.com/recpies.json')
            .map(
                (response: Response) => {
                    const recipes: Recipe[] = response.json();
                    for (let recipe of recipes) {
                        if (!recipe['ingredients']) {
                            recipes['ingredients'] = [];
                        }
                    }    
                    return recipes;                
                }
            )
            .subscribe(
                (recipes: Recipe[]) => {
                    this.recipeService.setRecipes(recipes);
                }
            )
    }
}