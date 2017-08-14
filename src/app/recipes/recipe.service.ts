import { Ingredient } from './../shared/ingredient.model';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Test recipe',
            'This is a test recipe',
            'https://c1.staticflickr.com/3/2598/3968971247_df7e2e135e_b.jpg',
            [
                {
                    name: 'Bread',
                    amount: 2
                },
                {
                    name: 'Jam',
                    amount: 3
                }
            ]
        ),
        new Recipe(
            'Test recipe 2',
            'This is test recipe 2',
            'https://c1.staticflickr.com/8/7242/7159318915_4969e9d3b9_b.jpg',
            [
                {
                    name: 'Chicken',
                    amount: 3
                },
                {
                    name: 'Tomatoes',
                    amount: 7
                }
            ]
        ),
    ];

    constructor(private shoppingListService: ShoppingListService) { }

    getRecipes() {
        // This ensures we don't return the reference of the array, only a copy
        return this.recipes.slice();
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[])
    {
        this.shoppingListService.addIngredients(ingredients);
    }

}
