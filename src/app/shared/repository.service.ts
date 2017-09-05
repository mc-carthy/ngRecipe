import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { RecipeService } from './../recipes/recipe.service';

@Injectable()
export class RepositoryService {

    constructor(
        private http: Http,
        private recipeService: RecipeService
    ) { }

    storeRecipes() {
        return this.http.put('https://ngrecipe-e4e3a.firebaseio.com/recpies.json', this.recipeService.getRecipes());
    }
}