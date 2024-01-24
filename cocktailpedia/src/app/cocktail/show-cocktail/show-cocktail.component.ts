import { Component, Input, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { ICocktail } from '../models/cocktail.models';
@Component({
  selector: 'app-show-cocktail',
  templateUrl: './show-cocktail.component.html',
  styleUrls: ['./show-cocktail.component.css'],
  
})
export class ShowCocktailComponent implements OnInit {
  @Input() cocktailId: string | null = null;
  cocktail: ICocktail | undefined;

  constructor(
    private cocktailService: CocktailService
  ) { }

  ngOnInit(): void  {
    console.log(this.cocktailId)
    if (this.cocktailId) {
      this.cocktailService.getCocktailById(this.cocktailId).subscribe({
        next: (cocktail) => {
          this.cocktail = cocktail;
        }
      });
    }
}

}
