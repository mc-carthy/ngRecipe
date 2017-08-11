import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';

@Injectable()
export class ShoppingListService {

    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient(
            'Apples',
            2
        ),
        new Ingredient(
            'Tomatoes',
            10
        ),
    ];

    constructor() { }

    getIngredients(): Ingredient[] {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        for (let ingredient of ingredients) {
            if (this.containsName(this.ingredients, ingredient)) {
                let index = this.indexByName(this.ingredients, ingredient);
                this.ingredients[index].amount += ingredient.amount;
            } else {
                this.ingredients.push(ingredient);
            }
        }
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    private containsName(ingredients: Ingredient[], ingredient: Ingredient)
    {
        for (let i of ingredients) {
            if (i.name === ingredient.name) {
                return true;
            }
        }
        return false;
    }

    private indexByName(ingredients: Ingredient[], ingredient: Ingredient) {
        for (let i = 0; i < ingredients.length; i++) {
            if (ingredients[i].name === ingredient.name) {
                return i;
            }
        }
    }
}
