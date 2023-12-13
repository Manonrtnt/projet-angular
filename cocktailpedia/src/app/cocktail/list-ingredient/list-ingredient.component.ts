import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../models/ingredient.models';
import { IngredientService } from '../ingredient.service';

@Component({
  selector: 'app-list-ingredient',
  templateUrl: './list-ingredient.component.html', 
  styleUrls: ['./list-ingredient.component.css']
})
export class ListIngredientComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor(private ingredientService: IngredientService) {}

  ngOnInit(): void {
    // Ajouter méthode pour récupérer ingredients
    //this.ingredients = this.ingredientService.getIngredients();

    // Ici données mockées 
    this.ingredients = [
      { name: 'Ingredient 1' },
      { name: 'Ingredient 2' },
      { name: 'Ingredient 3' },
    ];
  }

  addIngredient(): void {
    // À implémenter
  }

  editIngredient(ingredient: Ingredient): void {
    // À implémenter
  }

  deleteIngredient(ingredient: Ingredient): void {
    // À implémenter
  }
}