import { Injectable } from '@angular/core';
import { ICocktail, IIngredient } from './models/cocktail.models';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  mockDataCocktails: ICocktail[] = [
    {
      id : "1",
      name: "Mojito",
      ingredients: [
        { quantity: "6 leaves", name: "mint" },
        { quantity: "4 cl", name: "white rum" },
        { quantity: "2 cl", name: "cane sugar syrup" },
        { quantity: "1/2", name: "lime" },
        { quantity: "10 cl", name: "sparkling water" },
        { quantity: "10", name: "ice cubes" }
      ],
      image: "https://www.destinationcocktails.fr/wp-content/uploads/2019/11/Cocktail-mojito-1.jpg"
    },
    {
      id:"2",
      name: "Tapis rouge",
      ingredients: [
        { quantity: "4 cl", name: "white port" },
        { quantity: "4 cl", name: "cherry liqueur" },
        { quantity: "5", name: "ice cubes" }
      ],
      image: "https://www.destinationcocktails.fr/wp-content/uploads/2018/04/194_tapisrouge-min-1.jpg"
    },
    {
      id:"3",
      name: "Cuba Libre",
      ingredients: [
        { quantity: "6 cl", name: "Cuban rum (Havana)" },
        { quantity: "4 cl", name: "lime juice" },
        { quantity: "15 cl", name: "Coca Cola" }
      ],
      image: "https://img.cuisineaz.com/660x660/2013/12/20/i74474-cuba-libre.jpg"
    }
  ];

  constructor() { }

  getListHeros(): Observable<ICocktail[]> {
    return of(this.mockDataCocktails).pipe(delay(1000));
  }

  getCocktailById(id: string): Observable<ICocktail | undefined> {
    const cocktail = this.mockDataCocktails.find(cocktail => cocktail.id === id);
    return of(cocktail).pipe(delay(500));
  }
}
