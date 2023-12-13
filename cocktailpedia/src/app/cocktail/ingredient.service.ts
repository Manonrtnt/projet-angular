import { Injectable } from '@angular/core';
import { Ingredient } from './models/ingredient.models';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  private ingredients: Ingredient[] = [];

  getIngredients(): Ingredient[] {
    return this.ingredients;
  }

  addIngredient(ingredient: Ingredient): void {
    // À implémenter
  }

  updateIngredient(ingredient: Ingredient): void {
    // À implémenter
  }

  deleteIngredient(ingredient: Ingredient): void {
    // À implémenter
  }
}