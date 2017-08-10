import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe(
            'Test recipe',
            'This is a test recipe',
            'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
        ),
        new Recipe(
            'Test recipe 2',
            'This is test recipe 2',
            'https://cdn.pixabay.com/photo/2017/06/21/22/42/recipe-2428926_960_720.jpg'
        ),
    ];

    constructor() { }

    getRecipes() {
        // This ensures we don't return the reference of the array, only a copy
        return this.recipes.slice();
    }

}
