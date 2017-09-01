import { Injectable } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';
import { Subject } from "rxjs/Subject";

@Injectable()
export class ShoppingListService {

    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

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

    getIngredient(index: number): Ingredient {
        return this.ingredients[index];
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
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
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
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
