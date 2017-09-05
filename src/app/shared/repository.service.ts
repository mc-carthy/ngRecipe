import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
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
            .subscribe(
                (response: Response) => {
                    const recipes: Recipe[] = response.json();
                    this.recipeService.setRecipes(recipes);
                }
            )
    }
}