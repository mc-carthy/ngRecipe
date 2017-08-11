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
            'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
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
            'https://cdn.pixabay.com/photo/2017/06/21/22/42/recipe-2428926_960_720.jpg',
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

    addIngredientsToShoppingList(ingredients: Ingredient[])
    {
        ingredients.forEach(element => {
            this.shoppingListService.addIngredient(element);
        });
    }

}
