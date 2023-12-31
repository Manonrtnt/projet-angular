import { Injectable } from '@angular/core';
import { ICocktail, IIngredient } from './models/cocktail.models';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  mockDataCocktails: ICocktail[] = [
    {
      name: "Mojito",
      ingredients: [
        { quantity: "6 leaves", name: "mint" },
        { quantity: "4 cl", name: "white rum" },
        { quantity: "2 cl", name: "cane sugar syrup" },
        { quantity: "1/2", name: "lime" },
        { quantity: "10 cl", name: "sparkling water" },
        { quantity: "10", name: "ice cubes" }
      ],
      image: "test"
    },
    {
      name: "Tapis rouge",
      ingredients: [
        { quantity: "4 cl", name: "white port" },
        { quantity: "4 cl", name: "cherry liqueur" },
        { quantity: "5", name: "ice cubes" }
      ],
      image: "test"
    },
    {
      name: "Cuba Libre",
      ingredients: [
        { quantity: "6 cl", name: "Cuban rum (Havana)" },
        { quantity: "4 cl", name: "lime juice" },
        { quantity: "15 cl", name: "Coca Cola" }
      ],
      image: "test"
    }
  ];

  constructor() { }

  getListHeros(): Observable<ICocktail[]> {
    return of(this.mockDataCocktails).pipe(delay(1000));
  }
}
