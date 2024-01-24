import { Component } from '@angular/core';
import { ICocktail } from '../../../shared/interfaces/cocktail.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cocktailpedia';

  addCocktail(newCocktail: ICocktail) {
    console.log(newCocktail);
  }
}
